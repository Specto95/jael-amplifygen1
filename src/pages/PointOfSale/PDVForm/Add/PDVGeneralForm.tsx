import { lazy, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Formik, Form } from "formik";

import { v4 as uuidv4 } from "uuid";

//? SRC IMPORTS

//* INTERFACES
import {
  IPDVOrdersManagementClientSelected,
  ITermDaysToPay,
} from "@/interfaces/PDV/PDV";
import { IListProductsPDVAPI } from "./Steps/First/api/interfaces/IUseListProductsPDV";
import {
  ICreateInventoryProductSalesOperationInput,
  ICreateSalesOperationClientCreditMovementsInput,
  ICreateSalesOperationInput,
  IPDVGeneralFormData,
  ISalesOperationInventoryProductQuantityInput,
  IUpdateClientHasCreditInput,
  IUpdateCreditClientInput,
  IUpdateInventoryProductQuantityInput,
} from "./FormProps/PDVGeneralFormData.d";

//* HOOKS
import { useMultistepForm } from "@/hooks/useMultistepForm";
import { useSessionProvider } from "@/hooks/useSessionProvider";

import { useListProductsPDV } from "./Steps/First/api/useListProductsPDV";

//* PAGES
import { PDVGeneralFormData } from "./FormProps/PDVGeneralFormData";
import { PDVOrdersManagementSchema } from "./FormProps/PDVGeneralFormValidationSchema";

//* UTILS
import { getCurrentDate } from "@/utils/dates";
import { OperationType } from "@/pages/Inventory/Type/Main/List/ListProductDetailsObj";
import { IGetClientCreditByID } from "./Steps/Second/api/interfaces/IUseGetClientCreditByID";
import { commaSeparatorFloat } from "@/utils/commaSeparator";
import { handleTotalToPay, toFixedTwo } from "./helpers/functions";
import { currentIndexObj } from "@/utils/multiStepForm/currentIndexObj";
import {
  IInventoryOperationInput,
  INonRegisteredClientInput,
} from "./interfaces/inputs/PDVGeneralFormInputs";
import { AccountFormObj } from "@/pages/Account/utils/AccountFormObj";
import {
  SalesOperationClientCreditMovementStatus,
  SalesOperationPaymentStatus,
  SalesOperationStatus,
  SalesOperationTermDaysToPay,
  salesOperationType,
} from "@/utils/globalObjs/sideMenuSections/PointOfSale/PointOfSaleObjs";
import { UserView } from "@/components/UI/RoleInfo/UserView/UserView";
import { GenericFilteredItems } from "@/components/UI/GenericComponents/FilteredItems/GenericFilteredItems";
import { listProductsPDVKeysFilterObjs } from "@/pages/filters/PDVGeneralFormFiltersObj";

//* LAZY FORMS
const PDVActionsView = lazy(() =>
  import("./Steps/First/PDVActionsView").then((module) => ({
    default: module.PDVActionsView,
  }))
);
const PDVOrdersManagement = lazy(() =>
  import("./Steps/Second/PDVOrdersManagement").then((module) => ({
    default: module.PDVOrdersManagement,
  }))
);

const PDVOrdersManagementResume = lazy(() =>
  import("./Steps/Third/PDVOrdersManagementResume").then((module) => ({
    default: module.PDVOrdersManagementResume,
  }))
);

export function PDVGeneralForm() {
  const { userInfoData, branchInventory, mainBranchInventory, rolID } =
    useSessionProvider();

  const { listProductsPDV, setListProductsPDV } = useListProductsPDV(
    mainBranchInventory.id
      ? mainBranchInventory.inventoryID
      : branchInventory.inventoryID
  );

  const { filteredItems, query, setQuery } = GenericFilteredItems(
    listProductsPDV,
    listProductsPDVKeysFilterObjs.NAME
  );

  const [selectedData, setSelectedData] = useState<IListProductsPDVAPI[]>([]);
  const [previousData, setPreviousData] = useState<IListProductsPDVAPI[]>([]);
  const [salesID, setSalesID] = useState<string>("");

  //?2ND VIEW
  const [selectedClient, setSelectedClient] =
    useState<IPDVOrdersManagementClientSelected>({
      id: "",
      fullName: "",
      hasCredit: false,
    });
  const [totalWithDiscount, setTotalWithDiscount] = useState<number>(0);
  const [selectedMonthsToPay, setSelectedMonthsToPay] = useState<number>(0);
  const [termDaysToPay, setTermDaysToPay] =
    useState<ITermDaysToPay["termDaysToPay"]>("NONE");
  const [totalByDaysToPay, setTotalByDaysToPay] = useState<number>(0);
  const [totalToPay, setTotalToPay] = useState<number>(0);
  const [totalToPayMinusCredit, setTotalToPayMinusCredit] = useState<number>(0);
  const [updateCreditClientState, setUpdateCreditClientState] =
    useState<IUpdateCreditClientInput>({
      id: "",
      credit_available: 0,
      outstanding_balance: 0,
    });
  const [totalPayments, setTotalPayments] = useState<number>(0);
  const [creditAvailable, setCreditAvailable] = useState<number>(0);
  const [pendingToPay, setPendingToPay] = useState<number>(0);
  const [selectedDiscount, setSelectedDiscount] = useState<number | undefined>(
    0
  );
  const [totalCommission, setTotalCommission] = useState<number>(0);
  const [nonRegisteredClientID, setNonRegisteredClientID] = useState<string>(
    uuidv4()
  );
  const [salesOperationID, setSalesOperationID] = useState<string>(uuidv4());

  const handleNextStep = () => {
    if (!isLastStep) return next();
  };

  const handleBackStep = () => {
    if (!isFirstStep) return back();
  };

  const getValidationSchemaForStep = (stepIndex: number) => {
    switch (stepIndex) {
      case 1:
        return PDVOrdersManagementSchema;
      default:
        return;
    }
  };

  const handleTotalPayableInCash = (
    values: IPDVGeneralFormData,
    getClientCreditByID: IGetClientCreditByID
  ) => {
    if (
      selectedClient &&
      selectedClient!.hasCredit &&
      values?.paymentType.includes("credit") &&
      getClientCreditByID
    ) {
      if (totalWithDiscount! > 0 && values.isClientRegistered === "yes") {
        if (
          updateCreditClientState.credit_available! > 0 &&
          updateCreditClientState.credit_available! > totalWithDiscount!
        ) {
          setCreditAvailable!(
            updateCreditClientState.credit_available! - totalWithDiscount!
          );
          return commaSeparatorFloat(0);
        }
        setCreditAvailable!(0);
        setTotalToPayMinusCredit(
          +(
            totalWithDiscount! - updateCreditClientState.credit_available!
          ).toFixed(2)
        );
        return totalWithDiscount! - updateCreditClientState.credit_available!;
      }
      if (
        updateCreditClientState.credit_available! > totalToPay! &&
        values.isClientRegistered === "yes"
      ) {
        setCreditAvailable!(
          updateCreditClientState.credit_available! - totalToPay!
        );
        return commaSeparatorFloat(0);
      }
      setCreditAvailable!(0);
      setTotalToPayMinusCredit(
        +(totalToPay! - updateCreditClientState.credit_available!).toFixed(2)
      );
      return (
        handleTotalToPay(selectedData) -
        updateCreditClientState.credit_available
      );
    }
    return totalWithDiscount || handleTotalToPay(selectedData);
  };

  const handleTotalPayableInMonths = () => {
    if (selectedClient!.hasCredit && updateCreditClientState.credit_available) {
      if (
        updateCreditClientState.credit_available! > 0 &&
        updateCreditClientState.credit_available! >
          (totalWithDiscount! || totalToPay)
      ) {
        return `$${commaSeparatorFloat(
          (totalWithDiscount! || totalToPay!) / selectedMonthsToPay!
        )} por mes`;
      }
      return `$${commaSeparatorFloat(
        updateCreditClientState.credit_available / selectedMonthsToPay!
      )} por mes`;
    }

    return "Credito No Disponible";
  };

  const handleTotalByDaysToPay = () => {
    if (
      selectedMonthsToPay > 0 &&
      termDaysToPay == SalesOperationTermDaysToPay.BIWEEKLY
    ) {
      setTotalByDaysToPay(
        (totalWithDiscount || totalToPay) / (selectedMonthsToPay * 2)
      );
      return;
    }
    if (
      selectedMonthsToPay > 0 ||
      termDaysToPay == SalesOperationTermDaysToPay.MONTHLY
    ) {
      setTotalByDaysToPay(
        (totalWithDiscount || totalToPay) / selectedMonthsToPay
      );
      return;
    }
  };

  const handleTotalPayments = () => {
    if (
      selectedMonthsToPay > 0 &&
      termDaysToPay == SalesOperationTermDaysToPay.BIWEEKLY
    ) {
      setTotalPayments(selectedMonthsToPay * 2);
      return;
    }
    if (
      selectedMonthsToPay > 0 ||
      termDaysToPay == SalesOperationTermDaysToPay.MONTHLY
    ) {
      setTotalPayments(selectedMonthsToPay);
      return;
    }
  };

  const { currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <PDVActionsView />,
      <PDVOrdersManagement />,
      <PDVOrdersManagementResume />,
    ]);

  return (
    <>
      <Helmet>
        <title>Jael | Agregar Registro a Punto de Venta</title>
        <meta name="description" content="Agregar Registro a Punto de Venta" />
      </Helmet>
      <Formik
        initialValues={PDVGeneralFormData}
        validationSchema={getValidationSchemaForStep(currentStepIndex)}
        onSubmit={async (values) => {
          if (values.isSecondButton) {
            console.log('ya entramos')
            try {
              handleNextStep();
              setSalesID(salesOperationID);
              if (values.isSecondButton && selectedData.length > 0) {
                try {
                  //* DYNAMIC AMPLIFY IMPORTS
                  const { clientAPI } = await import(
                    "@/utils/amplifyAPI/client"
                  );

                  const {
                    createInventoryOperationAPI,
                    createNonRegisteredClientAPI,
                    createSalesOperationAPI,
                    updateInventoryProductQuantityAPI,
                    createSalesOperationInventoryProductQuantityAPI,
                    createInventoryProductSalesOperationAPI,
                  } = await import("@/graphql/mutations");

                  //? GLOBAL IDs
                  const inventoryOperationID = uuidv4();

                  //*---------- INVENTORY OPERATION (GLOBAL API) ----------*//
                  const inventorySaleOperationInput: IInventoryOperationInput =
                    {
                      id: inventoryOperationID,
                      operationType: OperationType.SALE,
                      inventoryID:
                        rolID === AccountFormObj.ADMIN
                          ? mainBranchInventory.inventoryID
                          : branchInventory.inventoryID,
                      inventoryOperationSalesOperationId: salesOperationID,
                    };

                  const inventorySaleOperationResult: any = await clientAPI(
                    createInventoryOperationAPI,
                    {
                      input: inventorySaleOperationInput,
                    }
                  );

                  if (!selectedClient.id) {
                    //*---------- NONREGISTEREDCLIENT (OPTIONAL GLOBAL API) ----------*//
                    const nonRegisteredClientInput: INonRegisteredClientInput =
                      {
                        id: nonRegisteredClientID,
                        fullName:
                          values.orderManagement.clientName || "Anonimo",
                        nonRegisteredClientSaleOperationId: salesOperationID,
                      };
                    const nonRegisteredClientResult: any = await clientAPI(
                      createNonRegisteredClientAPI,
                      {
                        input: nonRegisteredClientInput,
                      }
                    );
                  }

                  const { calculatePaymentDates, getLastPaymentDate } =
                    await import("./helpers/functions");

                  //? CALCULATE PAYMENT DATES
                  const dates = values.paymentType.includes("credit")
                    ? calculatePaymentDates(
                        getCurrentDate(),
                        selectedMonthsToPay,
                        termDaysToPay
                      )
                    : [];

                  //*-------- SALES OPERATION (GLOBAL API) --------*//
                  const input: ICreateSalesOperationInput = {
                    id: salesOperationID,
                    amountPaid: 0,
                    branchOfficeID:
                      rolID === AccountFormObj.ADMIN
                        ? mainBranchInventory.id
                        : branchInventory.id,
                    date: getCurrentDate(),
                    lastPaymentDate: getLastPaymentDate(dates) || null,
                    monthsToPay: selectedMonthsToPay || 0,
                    total: totalWithDiscount ? totalWithDiscount : totalToPay,
                    totalCash:
                      (selectedMonthsToPay > 0 && totalToPayMinusCredit) ||
                      (totalWithDiscount ? totalWithDiscount : totalToPay),
                    totalCommission,
                    nonRegisteredClientID: !selectedClient.id
                      ? nonRegisteredClientID
                      : null,
                    pendingToPay:
                      selectedClient.hasCredit &&
                      selectedMonthsToPay > 0 &&
                      values.paymentType.includes("credit")
                        ? pendingToPay
                        : 0,
                    status:
                      selectedMonthsToPay > 0
                        ? SalesOperationStatus.PENDING
                        : SalesOperationStatus.PAID,
                    salesOperationType:
                      selectedMonthsToPay > 0 &&
                      values.paymentType.includes("credit")
                        ? salesOperationType.CREDIT
                        : salesOperationType.CASH,
                    totalPayments: totalPayments || 0,
                    currentTotalPayments: 0,
                    salesOperationInventoryOperationIDId: inventoryOperationID,
                    termDaysToPay,
                    clientID: selectedClient.id || null,
                    userInfoID: userInfoData.id,
                  };

                  //? CREATE SALESOPERATION
                  const salesOperationResult: any = await clientAPI(
                    createSalesOperationAPI,
                    { input }
                  );

                  //*---------- CREATE SALESOPERATION CLIENT CREDIT MOVEMENTS ----------*//
                  if (
                    selectedClient.hasCredit &&
                    selectedMonthsToPay > 0 &&
                    values.paymentType.includes("credit")
                  ) {
                    const { createSalesOperationClientCreditMovementsAPI } =
                      await import("@/graphql/mutations");

                    //*----------- CREATE CLIENT CREDIT PAYMENT DATES
                    dates.forEach(async (date, index) => {
                      const inputSalesOperationClientCreditInput: ICreateSalesOperationClientCreditMovementsInput =
                        {
                          clientID: selectedClient.id,
                          salesOperationID: salesOperationID,
                          paymentDate: date,
                          amountToPay: totalByDaysToPay,
                          pendingToPay: totalByDaysToPay,
                          numberOfPayment: index + 1,
                          amountPaid: 0,
                          status:
                            SalesOperationClientCreditMovementStatus.PENDING,
                        };

                      const salesOperationClientCreditMovementsResult: any =
                        await clientAPI(
                          createSalesOperationClientCreditMovementsAPI,
                          {
                            input: inputSalesOperationClientCreditInput,
                          }
                        );
                    });
                  }

                  //? UPDATE CREDITCLIENT
                  if (
                    (updateCreditClientState.credit_available > 0 &&
                      values.paymentType.includes("credit") &&
                      selectedMonthsToPay > 0 &&
                      termDaysToPay === SalesOperationTermDaysToPay.BIWEEKLY) ||
                    termDaysToPay === SalesOperationTermDaysToPay.MONTHLY
                  ) {
                    const { updateCreditsAPI } = await import(
                      "@/graphql/mutations"
                    );
                    const inputCreditClient: IUpdateCreditClientInput = {
                      id: updateCreditClientState.id,
                      credit_available:
                        selectedMonthsToPay > 0 &&
                        (termDaysToPay ===
                          SalesOperationTermDaysToPay.BIWEEKLY ||
                          termDaysToPay ===
                            SalesOperationTermDaysToPay.MONTHLY) &&
                        (totalWithDiscount || totalToPay) >
                          updateCreditClientState.credit_available
                          ? 0
                          : toFixedTwo(creditAvailable) || 0,
                      outstanding_balance:
                        updateCreditClientState.outstanding_balance +
                        (selectedMonthsToPay > 0
                          ? updateCreditClientState.credit_available >
                            (totalWithDiscount || totalToPay)
                            ? totalWithDiscount || totalToPay
                            : toFixedTwo(
                                updateCreditClientState.credit_available
                              )
                          : 0),
                      payment_status:
                        (selectedMonthsToPay > 0 &&
                          termDaysToPay ===
                            SalesOperationTermDaysToPay.BIWEEKLY) ||
                        (termDaysToPay ===
                          SalesOperationTermDaysToPay.MONTHLY &&
                          updateCreditClientState.outstanding_balance > 0)
                          ? SalesOperationPaymentStatus.PENDING
                          : SalesOperationPaymentStatus.FREE,
                    };
                    const updatedClientCreditResult: any = await clientAPI(
                      updateCreditsAPI,
                      {
                        input: inputCreditClient,
                      }
                    );

                    //? UPDATE CLIENTHASCREDIT
                    if (
                      updateCreditClientState.credit_available > 0 &&
                      values.paymentType.includes("credit") &&
                      selectedMonthsToPay > 0 &&
                      creditAvailable === 0
                    ) {
                      const { updateClientHasCreditAPI } = await import(
                        "@/graphql/mutations"
                      );

                      const updateClientHasCreditInput: IUpdateClientHasCreditInput =
                        {
                          id: selectedClient.id,
                          hasCredit: false,
                        };

                      const updatedClientHasCreditResult: any = await clientAPI(
                        updateClientHasCreditAPI,
                        {
                          input: updateClientHasCreditInput,
                        }
                      );
                    }
                  }

                  selectedData.forEach(
                    async ({
                      inventoryProductID,
                      quantity,
                      withDiscount,
                      discountPercentage,
                      discountPerProduct,
                      totalDiscounted,
                      productPriceWithDiscount,
                      amountToPayWithDiscount,
                      amountToPay,
                      name,
                      price,
                    }) => {
                      const previousRow = previousData.find(
                        (prevRow) =>
                          prevRow.inventoryProductID === inventoryProductID
                      );

                      const updatedQuantity: number =
                        previousRow?.quantity! - quantity!;

                      const updateInventoryProductQuantityInput: IUpdateInventoryProductQuantityInput =
                        {
                          id: inventoryProductID,
                          quantity: updatedQuantity,
                        };

                      //* --------- UPDATE INVENTORYPRODUCTQUANTITY --------- *//
                      if (previousRow) {
                        await clientAPI(updateInventoryProductQuantityAPI, {
                          input: updateInventoryProductQuantityInput,
                        });
                      }

                      const salesOperationInventoryProductQuantityInput: ISalesOperationInventoryProductQuantityInput =
                        {
                          name,
                          salesOperationID,
                          soldProductQuantity: quantity,
                          withDiscount: withDiscount || false,
                          discountPercentage: discountPercentage || 0,
                          discountPerProduct: discountPerProduct || 0,
                          totalDiscounted: totalDiscounted || 0,
                          productPriceWithDiscount:
                            productPriceWithDiscount || price || 0,
                          amountToPayWithDiscount: amountToPayWithDiscount || 0,
                          amountToPay: amountToPay || 0,
                        };

                      const salesOperationInventoryProductQuantityResult: any =
                        await clientAPI(
                          createSalesOperationInventoryProductQuantityAPI,
                          {
                            input: salesOperationInventoryProductQuantityInput,
                          }
                        );

                      const { id: salesOperationInventoryProductQuantityID } =
                        salesOperationInventoryProductQuantityResult.data
                          .createSalesOperationInventoryProductQuantity;

                      const createInventoryProductSalesOperationInput: ICreateInventoryProductSalesOperationInput =
                        {
                          inventoryProductId: inventoryProductID,
                          salesOperationInventoryProductQuantityId:
                            salesOperationInventoryProductQuantityID,
                        };

                      const inventoryProductSalesOperationResult: any =
                        await clientAPI(
                          createInventoryProductSalesOperationAPI,
                          {
                            input: createInventoryProductSalesOperationInput,
                          }
                        );
                    }
                  );
                } catch (error) {
                  console.log(error);
                }
              }
            } catch (error) {
              console.log(error);
            }
          }
        }}
      >
        {({
          touched,
          errors,
          handleSubmit,
          values,
          setFieldValue,
          setValues,
        }) => (
          <>
            <UserView query={query} setQuery={setQuery} />
            <Form onSubmit={handleSubmit} autoComplete={"off"}>
              {currentStepIndex === currentIndexObj.ONE ? (
                <PDVActionsView
                  listProductsPDV={filteredItems}
                  setListProductsPDV={setListProductsPDV}
                  handleNextStep={handleNextStep}
                  handleBackStep={handleBackStep}
                  selectedData={selectedData}
                  setSelectedData={setSelectedData}
                  previousData={previousData}
                  setPreviousData={setPreviousData}
                  currentStepIndex={currentStepIndex}
                  handleTotalPayableInCash={handleTotalPayableInCash}
                  previousCreditAvailable={
                    updateCreditClientState.credit_available
                  }
                  setTotalToPay={setTotalToPay}
                  totalToPay={totalToPay}
                  totalWithDiscount={totalWithDiscount}
                  setTotalWithDiscount={setTotalWithDiscount}
                  values={values}
                  selectedMonthsToPay={selectedMonthsToPay}
                  handleTotalPayableInMonths={handleTotalPayableInMonths}
                  setTotalCommission={setTotalCommission}
                />
              ) : currentStepIndex === currentIndexObj.TWO ? (
                <PDVOrdersManagement
                  handleBackStep={handleBackStep}
                  setFieldValue={setFieldValue}
                  selectedData={selectedData}
                  setSelectedData={setSelectedData}
                  setValues={setValues}
                  values={values}
                  selectedClient={selectedClient}
                  setSelectedClient={setSelectedClient}
                  selectedDiscount={selectedDiscount}
                  setSelectedDiscount={setSelectedDiscount}
                  totalWithDiscount={totalWithDiscount}
                  setTotalWithDiscount={setTotalWithDiscount}
                  selectedMonthsToPay={selectedMonthsToPay}
                  setSelectedMonthsToPay={setSelectedMonthsToPay}
                  setTermDaysToPay={setTermDaysToPay}
                  termDaysToPay={termDaysToPay}
                  totalToPay={totalToPay}
                  totalToPayMinusCredit={totalToPayMinusCredit}
                  setTotalToPay={setTotalToPay}
                  setCreditAvailable={setCreditAvailable}
                  updateCreditClientState={updateCreditClientState}
                  setUpdateCreditClientState={setUpdateCreditClientState}
                  pendingToPay={pendingToPay}
                  setPendingToPay={setPendingToPay}
                  setPreviousData={setPreviousData}
                  previousData={previousData}
                  currentStepIndex={currentStepIndex}
                  handleTotalPayableInCash={handleTotalPayableInCash}
                  handleTotalPayableInMonths={handleTotalPayableInMonths}
                  setTotalCommission={setTotalCommission}
                  totalCommission={totalCommission}
                  setTotalByDaysToPay={setTotalByDaysToPay}
                  handleTotalByDaysToPay={handleTotalByDaysToPay}
                  handleTotalPayments={handleTotalPayments}
                  nonRegisteredClientID={nonRegisteredClientID}
                  salesOperationID={salesOperationID}
                />
              ) : currentStepIndex === currentIndexObj.THREE ? (
                <PDVOrdersManagementResume
                  selectedData={selectedData}
                  salesID={salesID}
                  selectedClient={selectedClient}
                  isClientRegistered={values.isClientRegistered}
                  selectedDiscount={selectedDiscount}
                  totalWithDiscount={totalWithDiscount}
                  totalToPay={totalToPay}
                  totalToPayMinusCredit={totalToPayMinusCredit}
                  selectedMonthsToPay={selectedMonthsToPay}
                  termDaysToPay={termDaysToPay}
                  clientName={values.orderManagement.clientName}
                  values={values}
                  currentStepIndex={currentStepIndex}
                  previousCreditAvailable={
                    updateCreditClientState.credit_available
                  }
                  setCreditAvailable={setCreditAvailable}
                  handleTotalPayableInCash={handleTotalPayableInCash}
                  handleTotalPayableInMonths={handleTotalPayableInMonths}
                  totalCommission={totalCommission}
                  nonRegisteredClientID={nonRegisteredClientID}
                  salesOperationID={salesOperationID}
                  paymentType={values.paymentType}
                />
              ) : (
                step
              )}
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}
