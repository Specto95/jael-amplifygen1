import { lazy, useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Formik, Form } from "formik";

//? SRC IMPORTS

//* COMPONENTS
import { LayoutForm } from "@/components/Layouts/LayoutForm";

import { BranchOfficeGeneralData } from "./FormProps/BranchOfficeGeneralData";

//* HOOKS
import { useMultistepForm } from "@/hooks/useMultistepForm";
import { addBranchOfficeDataSchema } from "./FormProps/BranchOfficeGeneralDataSchema";

//* INTERFACES
import {
  IBranchManagerData,
  IBranchOfficeInputAPI,
  ICreateBranchOfficeUserAPI,
  ICreateInventoryInputAPI,
} from "./FormProps/BranchOfficeGeneralData.d";
import { IAddInventoryProductInputAPI } from "@/pages/Products/ProductForm/Add/AddProductData.d";

//* APIs
import { useListProductsIDsPricesPProviderID } from "./api/useListProductsIDsPricesPProviderID";
import { parseStringToInt } from "./helpers/functions";

//*LAZY FORMS
const AddBranchOffice = lazy(() =>
  import("./Steps/First/AddBranchOffice").then((module) => ({
    default: module.AddBranchOffice,
  }))
);

const AddBranchOfficeManagers = lazy(() =>
  import("./Steps/Third/AddBranchOfficeManagers").then((module) => ({
    default: module.AddBranchOfficeManagers,
  }))
);

const ModalSuccess = lazy(() =>
  import("@/components/UI/Modals/GenericModal/ModalSuccess").then((module) => ({
    default: module.ModalSuccess,
  }))
);

export function BranchOfficeGeneralForm() {
  const { listProductsIDsPricesPProviderID } =
    useListProductsIDsPricesPProviderID();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedRows, setSelectedRows] = useState<IBranchManagerData[]>([]);

  const { currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([<AddBranchOffice />, <AddBranchOfficeManagers />]);

  const handleNextStep = () => {
    if (!isLastStep) return next();
  };

  const handleBackStep = () => {
    if (!isFirstStep) return back();
  };

  const getValidationSchemaForStep = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return addBranchOfficeDataSchema;
      case 1:
        return addBranchOfficeDataSchema;
      default:
        return;
    }
  };

  return (
    <>
      <Helmet>
        <title>Jael | Agregar Sucursal</title>
        <meta name="description" content="Agregar Sucursal" />
      </Helmet>
      <Formik
        initialValues={BranchOfficeGeneralData}
        validationSchema={getValidationSchemaForStep(currentStepIndex)}
        onSubmit={async (values) => {
          try {
            if (values.isSecondButton) {
              setIsModalOpen(true);
              try {
                //* DYNAMIC AMPLIFY IMPORTS
                const {
                  createBranchOfficeAPI,
                  createBranchOfficeUserAPI,
                  createInventoryAPI,
                  createInventoryProductAPI,
                } = await import("@/graphql/mutations");

                const { clientAPI } = await import("@/utils/amplifyAPI/client");

                const inputBranchOffice: IBranchOfficeInputAPI = {
                  name: values.addBranchOffice.name,
                  address: values.addBranchOffice.address,
                  phone: values.addBranchOffice.phone,
                  state: values.addBranchOffice.state,
                  location: values.addBranchOffice.location,
                  zipcode: values.addBranchOffice.zipcode,
                  branchOffice_commission:
                    parseStringToInt(
                      values.addBranchOffice.branchOffice_commission!.toString()
                    ) || 5,
                  isMain: false,
                };

                const branchOfficeResult: any = await clientAPI(
                  createBranchOfficeAPI,
                  {
                    input: inputBranchOffice,
                  }
                );
                const { id: branchOfficeID } =
                  branchOfficeResult.data.createBranchOffice;

                const createInventoryInput: ICreateInventoryInputAPI = {
                  branchOfficeID,
                  name: `Inventario ${values.addBranchOffice.name}`,
                  isMain: false,
                };

                const inventoryResult: any = await clientAPI(
                  createInventoryAPI,
                  {
                    input: createInventoryInput,
                  }
                );

                const { id: inventoryID } =
                  inventoryResult.data.createInventory;

                if (listProductsIDsPricesPProviderID.length > 0) {
                  listProductsIDsPricesPProviderID.map(async (product) => {
                    const createInventoryProductInput: IAddInventoryProductInputAPI =
                      {
                        customPrice: product.price,
                        generalPrice: product.price,
                        inventoryID,
                        productID: product.id,
                        quantity: 0,
                        productProviderID: product.productProviderID,
                      };
                    const createInventoryProductResult: any = await clientAPI(
                      createInventoryProductAPI,
                      {
                        input: createInventoryProductInput,
                      }
                    );
                  });
                }

                if (selectedRows.length > 0 && branchOfficeID) {
                  console.log("CREANDO USUARIO DE SUCURSAL");
                  selectedRows.map(async ({ id: userId }) => {
                    const inputBranchOfficeUser: ICreateBranchOfficeUserAPI = {
                      userId,
                      branchOfficeId: branchOfficeID,
                    };
                    await clientAPI(createBranchOfficeUserAPI, {
                      input: inputBranchOfficeUser,
                    });
                  });
                }

                console.log("COMPLETED");

                return;
              } catch (err) {
                console.log(err);
              }
              return;
            }
            handleNextStep();
          } catch (err) {
            console.log(err);
          }
        }}
      >
        {({ touched, errors, handleSubmit, values, setFieldValue }) => (
          <LayoutForm values={values}>
            <Form onSubmit={handleSubmit} autoComplete={"off"}>
              {currentStepIndex === 0 ? (
                <AddBranchOffice
                  handleNextStep={handleNextStep}
                  setFieldValue={setFieldValue}
                />
              ) : currentStepIndex === 1 ? (
                <AddBranchOfficeManagers
                  branchOfficeName={values.addBranchOffice.name}
                  handleBackStep={handleBackStep}
                  selectedRows={selectedRows}
                  setSelectedRows={setSelectedRows}
                  setFieldValue={setFieldValue}
                />
              ) : (
                step
              )}
            </Form>
          </LayoutForm>
        )}
      </Formik>
      {isModalOpen && (
        <ModalSuccess
          title={"Sucursal Agregada correctamente!"}
          setIsModalOpen={setIsModalOpen}
          sectionName={"branch-offices"}
        />
      )}
    </>
  );
}
