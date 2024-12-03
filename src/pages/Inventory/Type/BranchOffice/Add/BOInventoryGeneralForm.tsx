import { lazy, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Formik, Form } from "formik";

//? SRC IMPORTS

//* COMPONENTS
import { LayoutForm } from "@/components/Layouts/LayoutForm";

//* HOOKS
import { useMultistepForm } from "@/hooks/useMultistepForm";
import { useSessionProvider } from "@/hooks/useSessionProvider";

//* INTERFACES
import {
  IBOInventoryTypeState,
  ISelectedIncomeRowsTable,
} from "@/interfaces/Inventory/inventory.d";

import { OperationType as OperationTypeObj } from "../../Main/List/ListProductDetailsObj";

//* UTILS
import { getCurrentDate } from "@/utils/dates";

import { v4 as uuidv4 } from "uuid";
import { currentIndexObj } from "@/utils/multiStepForm/currentIndexObj";
import {
  ISelectedBranchOfficeState,
  ISelectedProviderResponsibleState,
  ISelectedProviderState,
} from "./interfaces/IInventoryGeneralForm";
import {
  IIncomeInventoryInput,
  IInventoryOperationInput,
} from "./interfaces/inputs/IInventoryGeneralFormInputs";
import { ISelectedStateObj } from "./MultipleForm/Income/Steps/One/interfaces/IIncomeSelectProvider";
import { BOInventoryGeneralFormData } from "../../Main/FormProps/initialValues/InventoryFormData";
import { createIncomeInventoryRequest } from "../../../../../graphql/mutations";
import {
  IIncomeInventoryProductQuantityInput,
  IInventoryProductIncomeInventoryInput,
} from "../../Main/Add/interfaces/inputs/IInventoryGeneralFormInputs";
import {
  CreateIncomeInventoryProductQuantityRequestMutation,
  CreateIncomeInventoryProductQuantityRequestMutationVariables,
  CreateIncomeInventoryRequestMutationVariables,
  CreateInventoryOperationMutationVariables,
  CreateInventoryProductIncomeInventoryRequestMutation,
  CreateInventoryProductIncomeInventoryRequestMutationVariables,
  IOInventoryStatus,
  OperationType,
} from "@/API";

//*LAZY FORMS
const RegisterType = lazy(() =>
  import("./MultipleForm/Steps/One/RegisterType").then((module) => ({
    default: module.RegisterType,
  }))
);

const BOIncomeSelectProvider = lazy(() =>
  import("./MultipleForm/Income/Steps/One/BOIncomeSelectProvider").then(
    (module) => ({
      default: module.BOIncomeSelectProvider,
    })
  )
);

const BOIncomeInventory = lazy(() =>
  import("./MultipleForm/Income/Steps/Two/BOIncomeInventory").then(
    (module) => ({
      default: module.BOIncomeInventory,
    })
  )
);
const BOIncomeInventoryGeneralData = lazy(() =>
  import(
    "./MultipleForm/Income/Steps/Three/IncomeInventoryGeneralData/BOIncomeInventoryGeneralData"
  ).then((module) => ({
    default: module.BOIncomeInventoryGeneralData,
  }))
);

const BOConfirmIncomeInventory = lazy(() =>
  import(
    "./MultipleForm/Income/Steps/Four/ConfirmIncomeInventory/BOConfirmIncomeInventory"
  ).then((module) => ({
    default: module.BOConfirmIncomeInventory,
  }))
);

//* RETURNS

const ReturnSelectClient = lazy(() =>
  import("./MultipleForm/Returns/Steps/One/ReturnSelectClient").then(
    (module) => ({
      default: module.ReturnSelectClient,
    })
  )
);

// const OutcomeInventoryGeneralData = lazy(() =>
//   import(
//     "./MultipleForm/Outcome/Steps/Two/OutcomeInventoryGeneralData/OutcomeInventoryGeneralData"
//   ).then((module) => ({
//     default: module.OutcomeInventoryGeneralData,
//   }))
// );

// const OutcomeInventory = lazy(() =>
//   import("./MultipleForm/Outcome/Steps/One/OutcomeInventory").then(
//     (module) => ({
//       default: module.OutcomeInventory,
//     })
//   )
// );

// const ConfirmOutcomeInventory = lazy(() =>
//   import(
//     "./MultipleForm/Outcome/Steps/Three/ConfirmOutcomeInventory/ConfirmOutcomeInventory"
//   ).then((module) => ({
//     default: module.ConfirmOutcomeInventory,
//   }))
// );

const ModalProductSuccess = lazy(() =>
  import("@/components/UI/Modals/ModalSuccess/ModalProductSuccess").then(
    (module) => ({
      default: module.ModalProductSuccess,
    })
  )
);

export function BOInventoryGeneralForm() {
  const { userInfoData, branchInventory } = useSessionProvider();

  const invalidIndexes = [currentIndexObj.FIVE, currentIndexObj.EIGHT];

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [inventoryType, setInventoryType] =
    useState<IBOInventoryTypeState["inventoryType"]>("");
  const [selectedIncomeRows, setSelectedIncomeRows] = useState<
    ISelectedIncomeRowsTable[]
  >([]);
  const [selectedPreviousIncomeRows, setSelectedPreviousIncomeRows] = useState<
    ISelectedIncomeRowsTable[]
  >([]);
  const [selectedMainProductsDetails, setSelectedMainProductsDetails] =
    useState<ISelectedIncomeRowsTable[]>([]);

  const [selectedProvider, setSelectedProvider] = useState<
    ISelectedProviderState["selectedProvider"]
  >({
    id: "",
    name: "",
    productProviderID: "",
  });
  const [selectedProviderResponsible, setSelectedProviderResponsible] =
    useState<ISelectedProviderResponsibleState["selectedProviderResponsible"]>({
      id: "",
      fullname: "",
    });

  const [selectedClient, setSelectedClient] = useState({
    id: "",
    fullname: "",
  });

  const [selectedReturnProducts, setSelectedReturnProducts] = useState([]);

  const [selectedState, setSelectedState] = useState<ISelectedStateObj>({
    value: "",
    label: "",
  });
  const selectedIncomeData = useMemo(
    () => selectedIncomeRows,
    [selectedIncomeRows]
  );

  const { goTo, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <RegisterType />,
      <BOIncomeSelectProvider />,
      <BOIncomeInventory />,
      <BOIncomeInventoryGeneralData />,
      <BOConfirmIncomeInventory />,
      <ReturnSelectClient />,
    ]);

  const handleNextStep = () => {
    if (!isLastStep) return next();
  };

  const handleBackStep = () => {
    if (!isFirstStep) return back();
  };

  const handleInventoryType = (
    type: IBOInventoryTypeState["inventoryType"]
  ) => {
    setInventoryType(type);
    if (type === OperationTypeObj.INCOME) {
      goTo(currentIndexObj.TWO);
      return;
    }
    if (type === OperationTypeObj.RETURNS) {
      // goTo(currentIndexObj.SIX);
      return;
    }
  };

  // const getValidationSchemaForStep = (stepIndex: number) => {
  //   switch (stepIndex) {
  //     case currentIndexObj.THREE:
  //       return incomeRegisterInputsSchema;
  //     case currentIndexObj.SEVEN:
  //       return outcomeRegisterInputsSchema;
  //     default:
  //       return;
  //   }
  // };

  const handleGoToRegisterType = () => {
    goTo(currentIndexObj.ONE);
  };

  return (
    <>
      <Helmet>
        <title>Jael | Agregar Inventario</title>
        <meta name="description" content="Agregar Inventario" />
      </Helmet>
      <Formik
        initialValues={BOInventoryGeneralFormData}
        // initialValues={InventoryGeneralFormData}
        // validationSchema={getValidationSchemaForStep(currentStepIndex)}
        onSubmit={async (values) => {
          if (values.isSecondButton) {
            //* DYNAMIC AMPLIFY IMPORTS
            try {
              setIsModalOpen(true);
              const { clientAPI } = await import("@/utils/amplifyAPI/client");

              const {
                // updateInventoryProductQuantityAPI,
                createInventoryOperationAPI,
              } = await import("@/graphql/mutations");

              //?---------------- INCOME
              if (values.registerType === OperationType.INCOME) {
                const {
                  // createIncomeInventoryAPI,
                  createIncomeInventoryRequest,
                  // createInventoryProductIncomeInventoryAPI,
                  createInventoryProductIncomeInventoryRequest,
                  // createIncomeInventoryProductQuantityAPI,
                  createIncomeInventoryProductQuantityRequest,
                } = await import("@/graphql/mutations");
                try {
                  //? GLOBAL IDs
                  //const incomeInventoryID = uuidv4();
                  const incomeInventoryRequestID = uuidv4();
                  const inventoryOperationID = uuidv4();

                  //*----------- CREATE INVENTORY OPERATION (GLOBAL API)
                  const inventoryOperationInput: CreateInventoryOperationMutationVariables =
                    {
                      input: {
                        id: inventoryOperationID,
                        operationType: OperationType.INCOME,
                        inventoryID: branchInventory.inventoryID,
                        inventoryOperationIncomeInventoryRequestId:
                          incomeInventoryRequestID,
                        // inventoryOperationIncomeInventoryId: incomeInventoryID,
                      },
                    };

                  await clientAPI(
                    createInventoryOperationAPI,
                    inventoryOperationInput
                  );

                  //*----------- CREATE INCOME INVENTORY (GLOBAL API)
                  // const incomeInventoryInput: IIncomeInventoryInput = {
                  //   id: incomeInventoryID,
                  //   branchOfficeID: branchInventory.id,
                  //   // quantity: quantity!,
                  //   date: getCurrentDate(),
                  //   incomeInventoryInventoryOperationIDId: inventoryOperationID,
                  //   productProviderResponsibleID:
                  //     selectedProviderResponsible?.id || "",
                  //   providerID: selectedProvider?.productProviderID || "",
                  //   userInfoID: userInfoData.id!,
                  //   comments:
                  //     values.incomeRegisterInputs.comments! ||
                  //     "Sin comentarios",
                  // };

                  const incomeInventoryRequestInput: CreateIncomeInventoryRequestMutationVariables =
                    {
                      input: {
                        id: incomeInventoryRequestID,
                        branchOfficeID: branchInventory.id,
                        date: getCurrentDate(),
                        incomeInventoryRequestInventoryOperationIDId:
                          inventoryOperationID,
                        productProviderResponsibleID:
                          selectedProviderResponsible?.id || "",
                        providerID: selectedProvider?.productProviderID || "",
                        userInfoID: userInfoData.id!,
                        comments:
                          values.incomeRegisterInputs.comments ||
                          "Sin comentarios",
                        status: IOInventoryStatus.PROCESSING,
                      },
                    };

                  // const incomeInventoryResult = await clientAPI(
                  //   createIncomeInventoryAPI,
                  //   {
                  //     input: incomeInventoryInput,
                  //   }
                  // );

                  // console.log(incomeInventoryResult);

                  //? >>>>>>>>> INCOMEINVENTORYREQUEST

                  const incomeInventoryRequestResult = await clientAPI(
                    createIncomeInventoryRequest,
                    incomeInventoryRequestInput
                  );

                  console.log(incomeInventoryRequestResult);

                  selectedIncomeRows.map(async (row) => {
                    const { inventoryProductID, quantity, id: productID } = row;
                    const previousRow = selectedPreviousIncomeRows.find(
                      (prevRow) =>
                        prevRow.inventoryProductID === inventoryProductID
                    );

                    //?NO UPDATE ATM
                    // const updatedQuantity: number =
                    //   previousRow?.branchProductQuantity! + quantity!;

                    if (previousRow) {
                      // const updateInventoryProductQuantity = await clientAPI(
                      //   updateInventoryProductQuantityAPI,
                      //   {
                      //     input: {
                      //       id: inventoryProductID,
                      //       quantity: updatedQuantity,
                      //     },
                      //   }
                      // );
                    }

                    // //* UPDATING MAIN INVENTORY PRODUCT QUANTITY
                    // const selectedMainInventoryProductFound =
                    //   selectedMainProductsDetails.find(
                    //     (selectedMainProduct) =>
                    //       selectedMainProduct.id === productID
                    //   );
                    // if (selectedMainInventoryProductFound) {
                    //   const updatedMainInventoryProductQuantity =
                    //     selectedMainInventoryProductFound.quantity! - quantity!;
                    //   const selectedMainInventoryProductResult: any =
                    //     await clientAPI(updateInventoryProductQuantityAPI, {
                    //       input: {
                    //         id: selectedMainInventoryProductFound.inventoryProductID,
                    //         quantity: updatedMainInventoryProductQuantity,
                    //       },
                    //     });
                    // }

                    // // * CREATE INCOME INVENTORY PRODUCT QUANTITY
                    // const incomeInventoryProductQuantityInput: IIncomeInventoryProductQuantityInput =
                    //   {
                    //     incomeQuantity: quantity!,
                    //     incomeInventoryID,
                    //   };

                    //   const incomeInventoryProductQuantityResult =
                    //   await clientAPI(createIncomeInventoryProductQuantityAPI, {
                    //     input: incomeInventoryProductQuantityInput,
                    //   });

                    // const { id: incomeInventoryProductQuantityID } =
                    //   incomeInventoryProductQuantityResult.data
                    //     .createIncomeInventoryProductQuantity;

                    //* CREATE INCOMEINVENTORYPRODUCTQUANTITYREQUEST
                    const incomeInventoryProductQuantityRequestInput: CreateIncomeInventoryProductQuantityRequestMutationVariables =
                      {
                        input: {
                          incomeInventoryRequestID,
                          incomeQuantity: quantity!,
                        },
                      };

                    const incomeInventoryProductQuantityRequestResult =
                      (await clientAPI(
                        createIncomeInventoryProductQuantityRequest,
                        incomeInventoryProductQuantityRequestInput
                      )) as {
                        data: CreateIncomeInventoryProductQuantityRequestMutation;
                      };

                    const { id: incomeInventoryProductQuantityRequestId } =
                      incomeInventoryProductQuantityRequestResult.data
                        .createIncomeInventoryProductQuantityRequest!;

                    // //* CREATE INVENTORY PRODUCTs INCOME INVENTORY
                    // const inventoryProductIncomeInventoryInput: IInventoryProductIncomeInventoryInput =
                    //   {
                    //     incomeInventoryProductQuantityId:
                    //       incomeInventoryProductQuantityID,
                    //     inventoryProductId: inventoryProductID,
                    //   };

                    // const inventoryProductIncomeInventoryResult: any =
                    //   await clientAPI(
                    //     createInventoryProductIncomeInventoryAPI,
                    //     {
                    //       input: inventoryProductIncomeInventoryInput,
                    //     }
                    //   );

                    //* CREATE INVENTORYPRODUCTsINCOMEINVENTORYREQUEST
                    const inventoryProductIncomeInventoryRequestInput: CreateInventoryProductIncomeInventoryRequestMutationVariables =
                      {
                        input: {
                          incomeInventoryProductQuantityRequestId,
                          inventoryProductId: inventoryProductID,
                        },
                      };

                    const inventoryProductIncomeInventoryRequestResult =
                      (await clientAPI(
                        createInventoryProductIncomeInventoryRequest,
                        inventoryProductIncomeInventoryRequestInput
                      )) as {
                        data: CreateInventoryProductIncomeInventoryRequestMutation;
                      };

                    console.log(inventoryProductIncomeInventoryRequestResult);
                  });
                  console.log("COMPLETED!");
                } catch (error) {
                  console.log(error);
                }
              }
              return;
            } catch (error) {
              console.log(error);
            }
          }
          try {
            if (invalidIndexes.includes(currentStepIndex)) {
              return;
            }
            if (
              selectedIncomeRows.length === 0 &&
              currentStepIndex === currentIndexObj.THREE
            ) {
              return;
            }
            handleNextStep();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({
          touched,
          errors,
          handleSubmit,
          values,
          setFieldValue,
          resetForm,
        }) => (
          <LayoutForm values={values}>
            <Form onSubmit={handleSubmit} autoComplete={"off"}>
              {currentStepIndex === currentIndexObj.ONE ? (
                <RegisterType
                  handleInventoryType={handleInventoryType}
                  values={values.registerType}
                  setSelectedIncomeRows={setSelectedIncomeRows}
                  resetForm={resetForm}
                  setSelectedProvider={setSelectedProvider}
                  setSelectedState={setSelectedState}
                  setSelectedProviderResponsible={
                    setSelectedProviderResponsible
                  }
                />
              ) : currentStepIndex === currentIndexObj.TWO ? (
                <BOIncomeSelectProvider
                  handleBackStep={handleBackStep}
                  setFieldValue={setFieldValue}
                  selectedIncomeData={selectedIncomeData}
                  setSelectedIncomeRows={setSelectedIncomeRows}
                  selectedIncomeRows={selectedIncomeRows}
                  setSelectedProviderResponsible={
                    setSelectedProviderResponsible
                  }
                  selectedProviderResponsible={selectedProviderResponsible}
                  setSelectedProvider={setSelectedProvider}
                  selectedProvider={selectedProvider}
                  setSelectedState={setSelectedState}
                  selectedState={selectedState}
                />
              ) : currentStepIndex === currentIndexObj.THREE ? (
                <BOIncomeInventory
                  handleBackStep={handleBackStep}
                  selectedIncomeRows={selectedIncomeRows}
                  setSelectedIncomeRows={setSelectedIncomeRows}
                  setFieldValue={setFieldValue}
                  selectedIncomeData={selectedIncomeData}
                  setSelectedPreviousIncomeRows={setSelectedPreviousIncomeRows}
                  setSelectedMainProductsDetails={
                    setSelectedMainProductsDetails
                  }
                  selectedProvider={selectedProvider}
                />
              ) : currentStepIndex === currentIndexObj.FOUR ? (
                <BOIncomeInventoryGeneralData
                  handleBackStep={handleBackStep}
                  setFieldValue={setFieldValue}
                  selectedIncomeData={selectedIncomeData}
                  setSelectedIncomeRows={setSelectedIncomeRows}
                  selectedIncomeRows={selectedIncomeRows}
                  selectedMainProductsDetails={selectedMainProductsDetails}
                  // errors={errors.incomeRegisterInputs}
                  // touched={touched.incomeRegisterInputs}
                  selectedProviderName={selectedProvider?.name}
                  selectedProviderResponsible={selectedProviderResponsible}
                />
              ) : currentStepIndex === currentIndexObj.FIVE ? (
                <BOConfirmIncomeInventory
                  handleBackStep={handleBackStep}
                  setFieldValue={setFieldValue}
                  selectedIncomeData={selectedIncomeData}
                  setSelectedIncomeRows={setSelectedIncomeRows}
                  values={values.incomeRegisterInputs}
                  selectedProviderResponsible={selectedProviderResponsible}
                />
              ) : currentStepIndex === currentIndexObj.SIX ? (
                <ReturnSelectClient
                  setFieldValue={setFieldValue}
                  selectedIncomeData={selectedIncomeData}
                  setSelectedIncomeRows={setSelectedIncomeRows}
                  selectedIncomeRows={selectedIncomeRows}
                  setSelectedProviderResponsible={
                    setSelectedProviderResponsible
                  }
                  selectedProviderResponsible={selectedProviderResponsible}
                  setSelectedProvider={setSelectedProvider}
                  selectedProvider={selectedProvider}
                  setSelectedState={setSelectedState}
                  selectedState={selectedState}
                />
              ) : (
                step
              )}
            </Form>
          </LayoutForm>
        )}
      </Formik>
      {isModalOpen && (
        <ModalProductSuccess
          title={"Registro Realizado correctamente!"}
          setIsModalOpen={setIsModalOpen}
          backTo="BOInventory"
        />
      )}
    </>
  );
}
