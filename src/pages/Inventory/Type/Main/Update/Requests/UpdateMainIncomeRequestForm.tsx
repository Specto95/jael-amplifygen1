import { lazy, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

import { Formik, Form } from "formik";

//? SRC IMPORTS

//* COMPONENTS
import { LayoutForm } from "@/components/Layouts/LayoutForm";

//* DATA
import {
  updateBOIncomeRequestData,
  updateMainIncomeRequestData,
} from "./FormProps/initialValues/UpdateMainIncomeRequestData";
import { useListMainInventoryRequestDetailsByID } from "./api/useListMainInventoryRequestDetailsByID";
import { MainInventoryRequestDetails } from "./Components/MainInventoryRequestDetails/MainInventoryRequestDetails";
import {
  type IOBOInventoryRequestStatus,
  type IOMainInventoryRequestStatus,
  IOInventoryStatus,
  RoleType,
  UpdateIncomeInventoryRequestMutationVariables,
  UpdateInventoryProductMutationVariables,
} from "@/API";

import { useSessionProvider } from "@/hooks/useSessionProvider";
import {
  Rejected,
  UpdateMainBOIncomeRequestData,
} from "./FormProps/initialValues/interfaces/UpdateMainIncomeRequestData";
import { updateIncomeRequestDataSchema } from "./FormProps/schema/updateIncomeRequestData";

//*LAZY FORMS

const ModalSuccess = lazy(() =>
  import("@/components/UI/Modals/GenericModal/ModalSuccess").then((module) => ({
    default: module.ModalSuccess,
  }))
);

export function UpdateMainIncomeRequestForm() {
  const { id } = useParams<{ id: string }>();
  const { mainBranchInventory, rolID } = useSessionProvider();

  const { listMainInventoryRequestDetails, isLoading, defaultStatus } =
    useListMainInventoryRequestDetailsByID(id!);

  console.log(listMainInventoryRequestDetails[0]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [rejected, setRejected] = useState<Rejected>({
    isRejected: false,
    reason: "",
  });
  const [submittedStatus, setSubmittedStatus] = useState<IOInventoryStatus>(
    mainBranchInventory.id
      ? updateMainIncomeRequestData.status
      : updateBOIncomeRequestData.status
  );

  const INITIAL_VALUES: UpdateMainBOIncomeRequestData = {
    status: defaultStatus.current!,
    isSecondButton: false,
    rejectReason: "",
  };

  return (
    <>
      <Helmet>
        <title>
          Jael | Actualizar Petición de Inventario{" "}
          {mainBranchInventory.id ? "Matriz" : "Sucursal"}
        </title>
        <meta
          name="description"
          content={`Actualizar Petición de Inventario ${
            mainBranchInventory.id ? "Matriz" : "Sucursal"
          }`}
        />
      </Helmet>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={rejected.isRejected && updateIncomeRequestDataSchema}
        enableReinitialize
        onSubmit={async (values) => {
          try {
            if (values.isSecondButton) {
              setSubmittedStatus(values.status);
              setIsModalOpen(true);
              const { updateIncomeInventoryRequest } = await import(
                "@/graphql/mutations"
              );
              const { clientAPI } = await import("@/utils/amplifyAPI/client");
              if (
                values.status === IOInventoryStatus.CANCELED ||
                values.status === IOInventoryStatus.RETURNING ||
                values.status === IOInventoryStatus.RETURNED
              ) {
                const updateIncomeInventoryRequestInput: UpdateIncomeInventoryRequestMutationVariables =
                  {
                    input: {
                      id: id!,
                      status: values.status,
                    },
                  };

                if (values.status !== IOInventoryStatus.RETURNED) {
                  updateIncomeInventoryRequestInput["input"]["rejectedReason"] =
                    values.rejectReason;
                }

                //?UPDATE STATUS TO CANCELLED
                await clientAPI(
                  updateIncomeInventoryRequest,
                  updateIncomeInventoryRequestInput
                );

                if (values.status === IOInventoryStatus.RETURNED) {
                  const { updateInventoryProductQuantityAPI } = await import(
                    "@/graphql/mutations"
                  );

                  //?UPDATE PRODUCT QUANTITIES FROM MAINBRANCH
                  listMainInventoryRequestDetails[0].incomeInventoryProductQuantitiesRequest.map(
                    async (inventoryProductQuantityRequest) => {
                      const {
                        mainInventoryProductID,
                        incomeQuantity,
                        currentInventoryQuantity,
                      } = inventoryProductQuantityRequest;

                      //!WIP -- VERIFY IT'S WORKING CORRECTLY

                      //?RETURN BACK THE INCOMEQUANTITY
                      const updatedQuantity =
                        currentInventoryQuantity + incomeQuantity;

                      console.log(updatedQuantity);

                      const updateInventoryProductQuantityInput: UpdateInventoryProductMutationVariables =
                        {
                          input: {
                            id: mainInventoryProductID!,
                            quantity: updatedQuantity,
                          },
                        };

                      //* UPDATING MAIN INVENTORY PRODUCT QUANTITIES
                      await clientAPI(
                        updateInventoryProductQuantityAPI,
                        updateInventoryProductQuantityInput
                      );

                      console.log("se actualizo");
                    }
                  );
                }

                return;
              }
              if (
                [IOInventoryStatus.FAILED, IOInventoryStatus.PENDING].includes(
                  values.status as IOInventoryStatus
                )
              ) {
                setRejected({ ...rejected, isRejected: true });
                return;
              }
              if (
                [
                  IOInventoryStatus.IN_TRANSIT,
                  IOInventoryStatus.DELIVERED,
                ].includes(values.status as IOInventoryStatus)
              ) {
                const { updateInventoryProductQuantityAPI } = await import(
                  "@/graphql/mutations"
                );

                if (values.status === IOInventoryStatus.IN_TRANSIT) {
                  try {
                    const updateIncomeInventoryRequestInput: UpdateIncomeInventoryRequestMutationVariables =
                      {
                        input: {
                          id: id!,
                          status: IOInventoryStatus.IN_TRANSIT,
                        },
                      };

                    //?UPDATE STATUS TO DELIVER
                    const updateIncomeInventoryRequestResult = await clientAPI(
                      updateIncomeInventoryRequest,
                      updateIncomeInventoryRequestInput
                    );

                    //?UPDATE PRODUCT QUANTITIES FROM MAINBRANCH
                    listMainInventoryRequestDetails[0].incomeInventoryProductQuantitiesRequest.map(
                      async (inventoryProductQuantityRequest) => {
                        const {
                          mainInventoryProductID,
                          incomeQuantity,
                          currentInventoryQuantity,
                        } = inventoryProductQuantityRequest;

                        //?incomeQuantity = BO Quantity to income
                        const updatedQuantity =
                          currentInventoryQuantity - incomeQuantity;

                        const updateInventoryProductQuantityInput: UpdateInventoryProductMutationVariables =
                          {
                            input: {
                              id: mainInventoryProductID!,
                              quantity: updatedQuantity,
                            },
                          };

                        //* UPDATING MAIN INVENTORY PRODUCT QUANTITIES
                        await clientAPI(
                          updateInventoryProductQuantityAPI,
                          updateInventoryProductQuantityInput
                        );
                      }
                    );
                    console.log("COMPLETED!");
                  } catch (error) {
                    setRejected({ ...rejected, isRejected: true });
                    console.log(error);
                  } finally {
                    return;
                  }
                }

                if (
                  values.status ===
                  (IOInventoryStatus.DELIVERED as IOInventoryStatus)
                ) {
                  setSubmittedStatus(IOInventoryStatus.DELIVERED);
                  try {
                    const updateIncomeInventoryRequestInput: UpdateIncomeInventoryRequestMutationVariables =
                      {
                        input: {
                          id: id!,
                          status: IOInventoryStatus.DELIVERED,
                        },
                      };

                    //?UPDATE STATUS TO DELIVER
                    await clientAPI(
                      updateIncomeInventoryRequest,
                      updateIncomeInventoryRequestInput
                    );

                    //?UPDATE PRODUCT QUANTITIES FROM MAINBRANCH
                    listMainInventoryRequestDetails[0].incomeInventoryProductQuantitiesRequest.map(
                      async (inventoryProductQuantityRequest) => {
                        const {
                          inventoryProductID,
                          incomeQuantity,
                          currentInventoryQuantity,
                        } = inventoryProductQuantityRequest;

                        const updatedQuantity =
                          currentInventoryQuantity + incomeQuantity;

                        const updateInventoryProductQuantityInput: UpdateInventoryProductMutationVariables =
                          {
                            input: {
                              id: inventoryProductID,
                              quantity: updatedQuantity,
                            },
                          };

                        //* UPDATING BO INVENTORY PRODUCT QUANTITIES
                        await clientAPI(
                          updateInventoryProductQuantityAPI,
                          updateInventoryProductQuantityInput
                        );
                      }
                    );
                    console.log("COMPLETED!");
                  } catch (error) {
                    setRejected({ ...rejected, isRejected: true });
                    console.log(error);
                  } finally {
                    return;
                  }
                }
              }
            }
          } catch (err) {
            console.log(err);
          }
        }}
      >
        {({ touched, errors, handleSubmit, values, setFieldValue }) => (
          <LayoutForm values={values}>
            <Form onSubmit={handleSubmit} autoComplete={"off"}>
              <MainInventoryRequestDetails
                listMainInventoryRequestDetails={
                  listMainInventoryRequestDetails[0]
                }
                setFieldValue={setFieldValue}
                values={values}
                isLoading={isLoading}
                errors={errors}
                touched={touched}
                rejected={rejected}
                setRejected={setRejected}
                setSubmittedStatus={setSubmittedStatus}
                defaultStatus={defaultStatus}
              />
            </Form>
          </LayoutForm>
        )}
      </Formik>
      {isModalOpen && (
        <ModalSuccess
          title={
            rejected.isRejected
              ? [IOInventoryStatus.CANCELED, IOInventoryStatus.FAILED].includes(
                  submittedStatus
                )
                ? `Operación Cancelada, Enviando motivo a Sucursal ${listMainInventoryRequestDetails[0].branchOfficeName}`
                : submittedStatus === IOInventoryStatus.RETURNING
                ? `Regresando encargo, Enviando motivo a Sucursal Matriz`
                : "Completado"
              : submittedStatus === IOInventoryStatus.DELIVERED
              ? "Entrega Exitosa"
              : submittedStatus === IOInventoryStatus.IN_TRANSIT
              ? `Transacción en Curso Exitosa - Enviando Productos a la Sucursal ${listMainInventoryRequestDetails[0].branchOfficeName}`
              : submittedStatus === IOInventoryStatus.RETURNED
              ? "Productos Regresados a Sucursal Matriz"
              : "Operación Realizada"
          }
          setIsModalOpen={setIsModalOpen}
          sectionName={"mainInventory-Requests"}
          wasRejected={rejected.isRejected}
        />
      )}
    </>
  );
}
