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
import { ISelectedIncomeRowsTable } from "@/interfaces/Inventory/inventory.d";
import { IInventoryTypeState } from "@/interfaces/Inventory/inventory";
import { IRegisterTypeProps } from "@/interfaces/Inventory/inventory";
import { IUseGetInventoryQuantityAPI } from "./MultipleForm/Outcome/api/interfaces/IUseGetInventoryQuantity";

import { InventoryGeneralFormData } from "../FormProps/initialValues/InventoryFormData";
import { OperationType } from "../List/ListProductDetailsObj";

//* UTILS
import { getCurrentDate } from "@/utils/dates";
import {
  incomeRegisterInputsSchema,
  outcomeRegisterInputsSchema,
} from "../FormProps/schema/validations";

import { v4 as uuidv4 } from "uuid";
import { currentIndexObj } from "@/utils/multiStepForm/currentIndexObj";
import {
  ISelectedBranchOfficeState,
  ISelectedOutcomeBranchOfficeProductsIDObj,
  ISelectedProviderResponsibleState,
  ISelectedProviderState,
} from "./interfaces/IInventoryGeneralForm";
import {
  IIncomeInventoryInput,
  IInventoryOperationInput,
  IOutcomeInventoryInput,
  IInventoryProductIncomeInventoryInput,
  IInventoryProductOutcomeInventoryInput,
  IIncomeInventoryProductQuantityInput,
  IOutcomeInventoryProductQuantityInput,
} from "./interfaces/inputs/IInventoryGeneralFormInputs";
import { ISelectedStateObj } from "./MultipleForm/Income/Steps/One/interfaces/IIncomeSelectProvider";

//*LAZY FORMS
const RegisterType = lazy(() =>
  import("./MultipleForm/RegisterType").then((module) => ({
    default: module.RegisterType,
  }))
);

const IncomeSelectProvider = lazy(() =>
  import("./MultipleForm/Income/Steps/One/IncomeSelectProvider").then(
    (module) => ({
      default: module.IncomeSelectProvider,
    })
  )
);

const IncomeInventory = lazy(() =>
  import("./MultipleForm/Income/Steps/Two/IncomeInventory").then((module) => ({
    default: module.IncomeInventory,
  }))
);
const IncomeInventoryGeneralData = lazy(() =>
  import(
    "./MultipleForm/Income/Steps/Three/IncomeInventoryGeneralData/IncomeInventoryGeneralData"
  ).then((module) => ({
    default: module.IncomeInventoryGeneralData,
  }))
);

const ConfirmIncomeInventory = lazy(() =>
  import(
    "./MultipleForm/Income/Steps/Four/ConfirmIncomeInventory/ConfirmIncomeInventory"
  ).then((module) => ({
    default: module.ConfirmIncomeInventory,
  }))
);

const OutcomeInventoryGeneralData = lazy(() =>
  import(
    "./MultipleForm/Outcome/Steps/Two/OutcomeInventoryGeneralData/OutcomeInventoryGeneralData"
  ).then((module) => ({
    default: module.OutcomeInventoryGeneralData,
  }))
);

const OutcomeInventory = lazy(() =>
  import("./MultipleForm/Outcome/Steps/One/OutcomeInventory").then(
    (module) => ({
      default: module.OutcomeInventory,
    })
  )
);

const ConfirmOutcomeInventory = lazy(() =>
  import(
    "./MultipleForm/Outcome/Steps/Three/ConfirmOutcomeInventory/ConfirmOutcomeInventory"
  ).then((module) => ({
    default: module.ConfirmOutcomeInventory,
  }))
);

const ModalProductSuccess = lazy(() =>
  import("@/components/UI/Modals/ModalSuccess/ModalProductSuccess").then(
    (module) => ({
      default: module.ModalProductSuccess,
    })
  )
);

export function InventoryGeneralForm() {
  const { userInfoData, mainBranchInventory } = useSessionProvider();

  const invalidIndexes = [currentIndexObj.FIVE, currentIndexObj.EIGHT];

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [inventoryType, setInventoryType] =
    useState<IInventoryTypeState["inventoryType"]>("");
  const [selectedIncomeRows, setSelectedIncomeRows] = useState<
    ISelectedIncomeRowsTable[]
  >([]);
  const [selectedPreviousIncomeRows, setSelectedPreviousIncomeRows] = useState<
    ISelectedIncomeRowsTable[]
  >([]);
  const [selectedOutcomeRows, setSelectedOutcomeRows] = useState<
    IUseGetInventoryQuantityAPI[]
  >([]);
  const [selectedPreviousOutcomeRows, setSelectedPreviousOutcomeRows] =
    useState<IUseGetInventoryQuantityAPI[]>([]);
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

  const [selectedBranchOffice, setSelectedBranchOffice] = useState<
    ISelectedBranchOfficeState["selectedBranchOffice"]
  >({
    id: "",
    name: "",
    inventoryID: "",
  });
  const [
    selectedOutcomeBranchOfficeProductsID,
    setSelectedOutcomeBranchOfficeProductsID,
  ] = useState<ISelectedOutcomeBranchOfficeProductsIDObj[]>([]);

  const [selectedState, setSelectedState] = useState<ISelectedStateObj>({
    value: "",
    label: "",
  });
  const selectedIncomeData = useMemo(
    () => selectedIncomeRows,
    [selectedIncomeRows]
  );
  const selectedOutcomeData = useMemo(
    () => selectedOutcomeRows,
    [selectedOutcomeRows]
  );

  const { goTo, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <RegisterType />,
      <IncomeSelectProvider />,
      <IncomeInventory />,
      <IncomeInventoryGeneralData />,
      <ConfirmIncomeInventory />,
      <OutcomeInventory />,
      <OutcomeInventoryGeneralData />,
      <ConfirmOutcomeInventory />,
    ]);

  const handleNextStep = () => {
    if (!isLastStep) return next();
  };

  const handleBackStep = () => {
    if (!isFirstStep) return back();
  };

  const handleInventoryType = (type: IInventoryTypeState["inventoryType"]) => {
    setInventoryType(type);
    if (type === OperationType.INCOME) {
      goTo(currentIndexObj.TWO);
    } else if (type === OperationType.OUTCOME) {
      goTo(currentIndexObj.SIX);
    }
  };

  const getValidationSchemaForStep = (stepIndex: number) => {
    switch (stepIndex) {
      case currentIndexObj.THREE:
        return incomeRegisterInputsSchema;
      case currentIndexObj.SEVEN:
        return outcomeRegisterInputsSchema;
      default:
        return;
    }
  };

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
        initialValues={InventoryGeneralFormData}
        validationSchema={getValidationSchemaForStep(currentStepIndex)}
        onSubmit={async (values) => {
          try {
            if (values.isSecondButton) {
              //* DYNAMIC AMPLIFY IMPORTS
              const { clientAPI } = await import("@/utils/amplifyAPI/client");
 
              const {
                updateInventoryProductQuantityAPI,
                createInventoryOperationAPI,
              } = await import("@/graphql/mutations");
              setIsModalOpen(true);

              //?---------------- INCOME
              if (values.registerType === OperationType.INCOME) {
                const {
                  createIncomeInventoryAPI,
                  createInventoryProductIncomeInventoryAPI,
                  createIncomeInventoryProductQuantityAPI,
                } = await import("@/graphql/mutations");
                try {
                  //? GLOBAL IDs
                  const incomeInventoryID = uuidv4();
                  const inventoryOperationID = uuidv4();

                  //*----------- CREATE INVENTORY OPERATION (GLOBAL API)
                  const inventoryOperationInput: IInventoryOperationInput = {
                    id: inventoryOperationID,
                    operationType: OperationType.INCOME,
                    inventoryID: mainBranchInventory.inventoryID,
                    inventoryOperationIncomeInventoryId: incomeInventoryID,
                  };

                  const inventoryOperationResult: any = await clientAPI(
                    createInventoryOperationAPI,
                    {
                      input: inventoryOperationInput,
                    }
                  );

                  console.log(inventoryOperationResult);

                  //*----------- CREATE INCOME INVENTORY (GLOBAL API)
                  const incomeInventoryInput: IIncomeInventoryInput = {
                    id: incomeInventoryID,
                    // quantity: quantity!,
                    branchOfficeID: mainBranchInventory.id || "1",
                    date: getCurrentDate(),
                    incomeInventoryInventoryOperationIDId: inventoryOperationID,
                    productProviderResponsibleID:
                      selectedProviderResponsible?.id || "",
                    providerID: selectedProvider?.id || "",
                    userInfoID: userInfoData.id! || "1",
                    comments:
                      values.incomeRegisterInputs.comments! ||
                      "Sin comentarios",
                  };

                  const incomeInventoryResult: any = await clientAPI(
                    createIncomeInventoryAPI,
                    {
                      input: incomeInventoryInput,
                    }
                  );

                  console.log(incomeInventoryResult);

                  selectedIncomeRows.forEach(async (row) => {
                    const { inventoryProductID, quantity } = row;

                    const previousRow = selectedPreviousIncomeRows.find(
                      (prevRow) =>
                        prevRow.inventoryProductID === inventoryProductID
                    );

                    const updatedQuantity: number =
                      quantity! + previousRow?.quantity!;
                    if (previousRow) {
                      await clientAPI(updateInventoryProductQuantityAPI, {
                        input: {
                          id: inventoryProductID,
                          quantity: updatedQuantity,
                        },
                      });
                    }

                    //* CREATE INCOME INVENTORY PRODUCT QUANTITY
                    const incomeInventoryProductQuantityInput: IIncomeInventoryProductQuantityInput =
                      {
                        incomeQuantity: quantity!,
                        incomeInventoryID,
                      };

                    const incomeInventoryProductQuantityResult: any =
                      await clientAPI(createIncomeInventoryProductQuantityAPI, {
                        input: incomeInventoryProductQuantityInput,
                      });
                    console.log(incomeInventoryProductQuantityResult);

                    const { id: incomeInventoryProductQuantityID } =
                      incomeInventoryProductQuantityResult.data
                        .createIncomeInventoryProductQuantity;

                    //* CREATE INVENTORY PRODUCTs INCOME INVENTORY
                    const inventoryProductIncomeInventoryInput: IInventoryProductIncomeInventoryInput =
                      {
                        incomeInventoryProductQuantityId:
                          incomeInventoryProductQuantityID,
                        inventoryProductId: inventoryProductID,
                      };

                    const inventoryProductIncomeInventoryResult: any =
                      await clientAPI(
                        createInventoryProductIncomeInventoryAPI,
                        {
                          input: inventoryProductIncomeInventoryInput,
                        }
                      );

                    console.log(inventoryProductIncomeInventoryResult);
                  });
                  console.log("COMPLETED!");
                } catch (error) {
                  console.log(error);
                }

                return;
              }

              //?---------------- OUTCOME
              if (values.registerType === OperationType.OUTCOME) {
                const {
                  createOutcomeInventoryAPI,
                  createInventoryProductOutcomeInventoryAPI,
                  createOutcomeInventoryProductQuantityAPI,
                } = await import("@/graphql/mutations");
                try {
                  //! GLOBAL IDs
                  const inventoryOperationID = uuidv4();
                  const outcomeInventoryID = uuidv4();

                  //?----------------- CREATING INVENTORY OPERATION (GLOBAL API)
                  const inventoryOperationResult: any = await clientAPI(
                    createInventoryOperationAPI,
                    {
                      input: {
                        id: inventoryOperationID,
                        operationType: OperationType.OUTCOME,
                        inventoryID: mainBranchInventory.inventoryID,
                        inventoryOperationOutcomeInventoryId:
                          outcomeInventoryID,
                      },
                    }
                  );

                  console.log(inventoryOperationResult);

                  //?----------------- CREATING OUTCOME INVENTORY(GLOBAL API)

                  const outcomeInventoryInput: IOutcomeInventoryInput = {
                    // quantity: quantity!,
                    id: outcomeInventoryID,
                    date: getCurrentDate(),
                    outcomeInventoryInventoryOperationIDId:
                      inventoryOperationID,
                    userInfoID: userInfoData.id! || "1",
                    branchOfficeID: selectedBranchOffice?.id || "",
                    comments:
                      values.outcomeRegisterInputs.comments! ||
                      "Sin comentarios",
                  };

                  const outcomeInventoryResult: any = await clientAPI(
                    createOutcomeInventoryAPI,
                    {
                      input: outcomeInventoryInput,
                    }
                  );

                  console.log(outcomeInventoryResult);

                  selectedOutcomeRows.map(async (row) => {
                    const { inventoryProductID, quantity, id: productID } = row;

                    const previousRow = selectedPreviousOutcomeRows.find(
                      (prevRow) =>
                        prevRow.inventoryProductID === inventoryProductID
                    );

                    const updatedQuantity: number =
                      previousRow?.quantity! - quantity!;
                    if (previousRow) {
                      //* UPDATING MAIN INVENTORY NEW PRODUCT QUANTITY
                      await clientAPI(updateInventoryProductQuantityAPI, {
                        input: {
                          id: inventoryProductID,
                          quantity: updatedQuantity,
                        },
                      });
                    }

                    //* UPDATING SELECTED BRANCHOFFICE-INVENTORY PRODUCT QUANTITY
                    const selectedOutcomeBranchOfficeProductFound =
                      selectedOutcomeBranchOfficeProductsID.find(
                        (selectedOutcomeBranchOfficeProduct) =>
                          selectedOutcomeBranchOfficeProduct.productID ===
                          productID
                      );

                    if (selectedOutcomeBranchOfficeProductFound) {
                      const updatedOutcomeBranchOfficeProductQuantity =
                        selectedOutcomeBranchOfficeProductFound.quantity +
                        quantity;
                      const selectedOutcomeBranchOfficeProductResult: any =
                        await clientAPI(updateInventoryProductQuantityAPI, {
                          input: {
                            id: selectedOutcomeBranchOfficeProductFound.inventoryProductID,
                            quantity: updatedOutcomeBranchOfficeProductQuantity,
                          },
                        });

                      console.log(selectedOutcomeBranchOfficeProductResult);
                    }

                    //* CREATE OUTCOME INVENTORY PRODUCT QUANTITY
                    const outcomeInventoryProductQuantityInput: IOutcomeInventoryProductQuantityInput =
                      {
                        outcomeQuantity: quantity!,
                        outcomeInventoryID,
                      };

                    const outcomeInventoryProductQuantityResult: any =
                      await clientAPI(
                        createOutcomeInventoryProductQuantityAPI,
                        {
                          input: outcomeInventoryProductQuantityInput,
                        }
                      );
                    console.log(outcomeInventoryProductQuantityResult);

                    const { id: outcomeInventoryProductQuantityID } =
                      outcomeInventoryProductQuantityResult.data
                        .createOutcomeInventoryProductQuantity;

                    //* CREATE INVENTORY PRODUCTs OUTCOME INVENTORY
                    const inventoryProductOutcomeInventoryInput: IInventoryProductOutcomeInventoryInput =
                      {
                        outcomeInventoryProductQuantityId:
                          outcomeInventoryProductQuantityID,
                        inventoryProductId: inventoryProductID,
                      };

                    const inventoryProductOutcomeInventoryResult: any =
                      await clientAPI(
                        createInventoryProductOutcomeInventoryAPI,
                        {
                          input: inventoryProductOutcomeInventoryInput,
                        }
                      );

                    console.log(inventoryProductOutcomeInventoryResult);
                  });
                  console.log("COMPLETED!");
                } catch (error) {
                  console.log(error);
                }
              }
              return;
            }
          } catch (error) {
            console.log(error);
          }
          try {
            if (invalidIndexes.includes(currentStepIndex)) {
              return;
            }
            if (
              (selectedIncomeRows.length === 0 &&
                currentStepIndex === currentIndexObj.THREE) ||
              (selectedOutcomeRows.length === 0 &&
                currentStepIndex === currentIndexObj.SIX)
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
                  values={values.registerType as IRegisterTypeProps["values"]}
                  setSelectedIncomeRows={setSelectedIncomeRows}
                  setSelectedOutcomeRows={setSelectedOutcomeRows}
                  resetForm={resetForm}
                  setSelectedProviderResponsible={
                    setSelectedProviderResponsible
                  }
                  setSelectedProvider={setSelectedProvider}
                  setSelectedState={setSelectedState}
                />
              ) : currentStepIndex === currentIndexObj.TWO ? (
                <IncomeSelectProvider
                  handleBackStep={handleBackStep}
                  setFieldValue={setFieldValue}
                  selectedIncomeData={selectedIncomeData}
                  setSelectedIncomeRows={setSelectedIncomeRows}
                  selectedIncomeRows={selectedIncomeRows}
                  errors={errors.incomeRegisterInputs}
                  touched={touched.incomeRegisterInputs}
                  setSelectedProviderResponsible={
                    setSelectedProviderResponsible
                  }
                  selectedProviderResponsible={selectedProviderResponsible}
                  setSelectedProvider={setSelectedProvider!}
                  selectedProvider={selectedProvider}
                  setSelectedState={setSelectedState}
                  selectedState={selectedState}
                />
              ) : currentStepIndex === currentIndexObj.THREE ? (
                <IncomeInventory
                  handleBackStep={handleBackStep}
                  selectedIncomeRows={selectedIncomeRows}
                  setSelectedIncomeRows={setSelectedIncomeRows}
                  setFieldValue={setFieldValue}
                  selectedIncomeData={selectedIncomeData}
                  setSelectedPreviousIncomeRows={setSelectedPreviousIncomeRows}
                  selectedProvider={selectedProvider}
                />
              ) : currentStepIndex === currentIndexObj.FOUR ? (
                <IncomeInventoryGeneralData
                  handleBackStep={handleBackStep}
                  setFieldValue={setFieldValue}
                  selectedIncomeData={selectedIncomeData}
                  setSelectedIncomeRows={setSelectedIncomeRows}
                  selectedIncomeRows={selectedIncomeRows}
                  errors={errors.incomeRegisterInputs}
                  touched={touched.incomeRegisterInputs}
                  selectedProviderName={
                    values.incomeRegisterInputs.provider_name
                  }
                  selectedProviderResponsible={selectedProviderResponsible}
                />
              ) : currentStepIndex === currentIndexObj.FIVE ? (
                <ConfirmIncomeInventory
                  handleBackStep={handleBackStep}
                  setFieldValue={setFieldValue}
                  selectedIncomeData={selectedIncomeData}
                  setSelectedIncomeRows={setSelectedIncomeRows}
                  values={values.incomeRegisterInputs}
                />
              ) : currentStepIndex === currentIndexObj.SIX ? (
                <OutcomeInventory
                  selectedOutcomeData={selectedOutcomeData}
                  selectedOutcomeRows={selectedOutcomeRows}
                  setSelectedOutcomeRows={setSelectedOutcomeRows}
                  handleGoToRegisterType={handleGoToRegisterType}
                  setFieldValue={setFieldValue}
                  setSelectedPreviousOutcomeRows={
                    setSelectedPreviousOutcomeRows
                  }
                  selectedPreviousOutcomeRows={selectedPreviousOutcomeRows}
                />
              ) : currentStepIndex === currentIndexObj.SEVEN ? (
                <OutcomeInventoryGeneralData
                  handleBackStep={handleBackStep}
                  setFieldValue={setFieldValue}
                  selectedOutcomeData={selectedOutcomeData}
                  setSelectedOutcomeRows={setSelectedOutcomeRows}
                  selectedPreviousOutcomeRows={selectedPreviousOutcomeRows}
                  errors={errors.outcomeRegisterInputs}
                  touched={touched.outcomeRegisterInputs}
                  userResponsible={values.outcomeRegisterInputs.admin_name}
                  setSelectedBranchOffice={setSelectedBranchOffice}
                  selectedBranchOffice={selectedBranchOffice}
                />
              ) : currentStepIndex === currentIndexObj.EIGHT ? (
                <ConfirmOutcomeInventory
                  handleBackStep={handleBackStep}
                  setFieldValue={setFieldValue}
                  selectedOutcomeData={selectedOutcomeData}
                  setSelectedOutcomeRows={setSelectedOutcomeRows}
                  values={values.outcomeRegisterInputs}
                  selectedPreviousOutcomeRows={selectedPreviousOutcomeRows}
                  selectedBranchOffice={selectedBranchOffice}
                  setSelectedOutcomeBranchOfficeProductsID={
                    setSelectedOutcomeBranchOfficeProductsID
                  }
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
          backTo="mainInventory"
        />
      )}
    </>
  );
}
