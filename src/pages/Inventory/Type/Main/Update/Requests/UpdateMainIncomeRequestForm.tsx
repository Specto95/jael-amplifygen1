import { lazy, useState } from "react";
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
import { Rejected } from "./FormProps/initialValues/interfaces/UpdateMainIncomeRequestData";
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

  const { listMainInventoryRequestDetails, isLoading } =
    useListMainInventoryRequestDetailsByID(id!);

  console.log(listMainInventoryRequestDetails[0])

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [rejected, setRejected] = useState<Rejected>({
    isRejected: false,
    reason: "",
  });
  const [submittedStatus, setSubmittedStatus] = useState<
    IOMainInventoryRequestStatus | IOBOInventoryRequestStatus
  >(
    mainBranchInventory.id
      ? updateMainIncomeRequestData.status
      : updateBOIncomeRequestData.status
  );

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
        initialValues={
          rolID === RoleType.ADMIN
            ? updateMainIncomeRequestData
            : updateBOIncomeRequestData
        }
        validationSchema={rejected.isRejected && updateIncomeRequestDataSchema}
        onSubmit={async (values) => {
          try {
            if (values.isSecondButton) {
              setIsModalOpen(true);
              const { updateIncomeInventoryRequest } = await import(
                "@/graphql/mutations"
              );
              const { clientAPI } = await import("@/utils/amplifyAPI/client");
              if (values.status === IOInventoryStatus.CANCELED) {
                const updateIncomeInventoryRequestInput: UpdateIncomeInventoryRequestMutationVariables =
                  {
                    input: {
                      id: id!,
                      status: IOInventoryStatus.CANCELED,
                      rejectedReason: values.rejectReason,
                    },
                  };

                //?UPDATE STATUS TO CANCELLED
                await clientAPI(
                  updateIncomeInventoryRequest,
                  updateIncomeInventoryRequestInput
                );

                return;
              }
              if (
                [
                  IOInventoryStatus.FAILED,
                  IOInventoryStatus.PENDING,
                  IOInventoryStatus.RETURNED,
                ].includes(values.status as IOInventoryStatus)
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

                      //* CREATE OUTCOME INVENTORY PRODUCT QUANTITY
                      // const outcomeInventoryProductQuantityInput: IOutcomeInventoryProductQuantityInput =
                      //   {
                      //     outcomeQuantity: quantity!,
                      //     outcomeInventoryID,
                      //   };

                      // const outcomeInventoryProductQuantityResult: any =
                      //   await clientAPI(
                      //     createOutcomeInventoryProductQuantityAPI,
                      //     {
                      //       input: outcomeInventoryProductQuantityInput,
                      //     }
                      //   );
                      // console.log(outcomeInventoryProductQuantityResult);

                      // const { id: outcomeInventoryProductQuantityID } =
                      //   outcomeInventoryProductQuantityResult.data
                      //     .createOutcomeInventoryProductQuantity;

                      //* CREATE INVENTORY PRODUCTs OUTCOME INVENTORY
                      // const inventoryProductOutcomeInventoryInput: IInventoryProductOutcomeInventoryInput =
                      //   {
                      //     outcomeInventoryProductQuantityId:
                      //       outcomeInventoryProductQuantityID,
                      //     inventoryProductId: inventoryProductID,
                      //   };

                      // const inventoryProductOutcomeInventoryResult: any =
                      //   await clientAPI(
                      //     createInventoryProductOutcomeInventoryAPI,
                      //     {
                      //       input: inventoryProductOutcomeInventoryInput,
                      //     }
                      //   );

                      // console.log(inventoryProductOutcomeInventoryResult);
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
              />
            </Form>
          </LayoutForm>
        )}
      </Formik>
      {isModalOpen && (
        <ModalSuccess
          title={
            rejected.isRejected
              ? `Operación Cancelada, Enviando motivo a Sucursal ${listMainInventoryRequestDetails[0].branchOfficeName}`
              : IOInventoryStatus.DELIVERED
              ? "Entrega Exitosa"
              : `Transacción en Curso Exitosa - Enviando Productos a la Sucursal ${listMainInventoryRequestDetails[0].branchOfficeName}`
          }
          setIsModalOpen={setIsModalOpen}
          sectionName={"mainInventory-Requests"}
          wasRejected={rejected.isRejected}
        />
      )}
    </>
  );
}
