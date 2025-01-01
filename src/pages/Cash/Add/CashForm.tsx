import { lazy, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Formik, Form } from "formik";

//? SRC IMPORTS

//* COMPONENTS
import { LayoutForm } from "@/components/Layouts/LayoutForm";

//* HOOKS

import { useSectionProvider } from "@/hooks/useSectionProvider";
import { useSessionProvider } from "@/hooks/useSessionProvider";

import { useMultistepForm } from "@/hooks/useMultistepForm";
import { currentIndexObj } from "@/utils/multiStepForm/currentIndexObj";
import { CashFormData } from "./FormProps/initialValues/CashFormData";
import { IUseListCreditAccountsReceivableAPI } from "@/components/UI/SideMenuSections/Credits/SubModules/AccountsReceivable/api/interfaces/IUseListCreditAccountsReceivable";
import { IGetCustomerSubscriptionDetailsByIDAPI } from "./Steps/One/api/interfaces/IGetCustomerSubscriptionDetailsByID";
import {
  ICreateSalesOperationCustomerSubscriptionInput,
  IUpdateSalesOperationClientCreditMovementPaymentInput,
  IUpdateSalesOperationPaymentInput,
} from "./FormProps/initialValues/interfaces/inputs/ICashFormInputs";
import { getCurrentDate } from "@/utils/dates";

import { useListPendingClientCreditMovementsToPay } from "./api/useListPendingClientCreditMovementsToPay";
import { SalesOperationStatus } from "@/utils/globalObjs/sideMenuSections/PointOfSale/PointOfSaleObjs";
import { convertStringToNumber } from "@/utils/helpers";
import { IUpdateSalesOperationStatusInput } from "@/pages/Credits/SubModules/AccountsReceivable/interfaces/inputs/IAccountsReceivable";

import { v4 as uuidv4 } from "uuid";
import { outcomePaymentSchema } from "./FormProps/schema/validations";
import { ISubMovementType } from "./interfaces/ICashForm";
import { SubMovementType } from "@/utils/globalObjs/sideMenuSections/Cash/CashObjs";
import { AccountFormObj } from "@/pages/Account/utils/AccountFormObj";

//* LAZY COMPONENTS

const SelectMovementType = lazy(() =>
  import("./Steps/One/SelectMovementType").then((module) => ({
    default: module.SelectMovementType,
  }))
);

const ConfirmEditCSubscriptionPayment = lazy(() =>
  import(
    "./Steps/Income/CustomerSubscription/ConfirmEditCSubscriptionPayment"
  ).then((module) => ({
    default: module.ConfirmEditCSubscriptionPayment,
  }))
);

export function CashForm() {
  const { handleBackTo, sectionName } = useSectionProvider();
  const { userInfoData } = useSessionProvider();

  const [clientSelectedPayment, setClientSelectedPayment] = useState<
    IUseListCreditAccountsReceivableAPI[]
  >([]);

  const [selectedClient, setSelectedClient] =
    useState<IGetCustomerSubscriptionDetailsByIDAPI>({
      id: "",
      name: "",
      second_name: "",
      lastname: "",
      second_lastname: "",
      phone: "",
      branchOfficeName: "",
      credit_available: 0,
      outstanding_balance: 0,
      clientSince: "",
      email: "",
    });

  const [paymentID, setPaymentID] = useState<string>(uuidv4());

  const [quantity, setQuantity] = useState<number>(1);
  const [lastQuantity, setLastQuantity] = useState<number>(0);
  const [totalAccumulablePayments, setTotalAccumulablePayments] =
    useState<number>(0);

  const { pendingClientCreditMovementsToPay } =
    useListPendingClientCreditMovementsToPay(
      clientSelectedPayment[0]?.id || "",
      clientSelectedPayment[0]?.currentTotalPayments! || 0
    );

  const [remainingTotal, setRemainingTotal] = useState<number>(0);
  const [isReading, setIsReading] = useState<boolean>(false);

  const [subMovementType, setSubMovementType] =
    useState<ISubMovementType["subMovementType"]>("");

  const { currentStepIndex, step, goTo, handleNextStep, handleBackStep } =
    useMultistepForm([
      <SelectMovementType />,
      <ConfirmEditCSubscriptionPayment />,
    ]);

  return (
    <>
      <Helmet>
        <title>Jael | Caja - Agregar Movimiento</title>
        <meta name="description" content="Caja - Agregar Movimiento" />
      </Helmet>
      <Formik
        initialValues={CashFormData}
        validationSchema={
          subMovementType === SubMovementType.OUTCOMEPAYMENTSERVICE &&
          outcomePaymentSchema
        }
        onSubmit={async (values) => {
          try {
            if (values.isSecondButton) {
              try {
                //* DYNAMIC AMPLIFY IMPORTS
                const { clientAPI } = await import("@/utils/amplifyAPI/client");
                const {
                  createSalesOperationCustomerSubscriptionAPI,
                  updateSalesOperationClientCreditMovementPaymentAPI,
                  updateSalesOperationPaymentAPI,
                } = await import("@/graphql/mutations");

                const inputSalesOperationCustomerSubscriptionAPI: ICreateSalesOperationCustomerSubscriptionInput =
                  {
                    id: paymentID,
                    advancePayment: quantity,
                    clientID: selectedClient.id!,
                    salesOperationID: clientSelectedPayment[0].id,
                    date: getCurrentDate(),
                  };

                const inputSalesOperationCustomerSubscriptionResult: any =
                  await clientAPI(createSalesOperationCustomerSubscriptionAPI, {
                    input: inputSalesOperationCustomerSubscriptionAPI,
                  });
                let quantityToPay = quantity;

                //?UPDATE SALESOPERATION PAYMENT
                const updateSalesOperationPaymentInput: IUpdateSalesOperationPaymentInput =
                  {
                    id: clientSelectedPayment[0].id,
                    amountPaid: clientSelectedPayment[0].amountPaid! + quantity,
                    currentTotalPayments:
                      clientSelectedPayment[0].currentTotalPayments! +
                      totalAccumulablePayments,
                    pendingToPay:
                      convertStringToNumber(
                        clientSelectedPayment[0].pendingToPay?.toString()!
                      ) - quantity,
                    lastDatePaid: getCurrentDate(),
                  };

                await clientAPI(updateSalesOperationPaymentAPI, {
                  input: updateSalesOperationPaymentInput,
                });

                for (const pendingClientCreditMovementToPay of pendingClientCreditMovementsToPay) {
                  if (quantityToPay === 0) {
                    break;
                  }

                  if (
                    quantityToPay >=
                    convertStringToNumber(
                      pendingClientCreditMovementToPay.pendingToPay!.toString()
                    )
                  ) {
                    const updateSalesOperationClientCreditMovementPaymentInput: IUpdateSalesOperationClientCreditMovementPaymentInput =
                      {
                        id: pendingClientCreditMovementToPay.id,
                        amountPaid:
                          pendingClientCreditMovementToPay.pendingToPay!,
                        pendingToPay: 0,
                        datePaid: getCurrentDate(),
                        status: SalesOperationStatus.PAID,
                      };

                    quantityToPay -=
                      pendingClientCreditMovementToPay.pendingToPay!;

                    await clientAPI(
                      updateSalesOperationClientCreditMovementPaymentAPI,
                      {
                        input:
                          updateSalesOperationClientCreditMovementPaymentInput,
                      }
                    );
                  } else if (
                    quantityToPay <
                    convertStringToNumber(
                      pendingClientCreditMovementToPay.pendingToPay!.toString()
                    )
                  ) {
                    const updateSalesOperationClientCreditMovementPaymentInput: IUpdateSalesOperationClientCreditMovementPaymentInput =
                      {
                        id: pendingClientCreditMovementToPay.id,
                        amountPaid:
                          pendingClientCreditMovementToPay.amountPaid +
                          quantityToPay,
                        pendingToPay:
                          pendingClientCreditMovementToPay.pendingToPay -
                          quantityToPay,
                      };

                    quantityToPay = 0;
                    await clientAPI(
                      updateSalesOperationClientCreditMovementPaymentAPI,
                      {
                        input:
                          updateSalesOperationClientCreditMovementPaymentInput,
                      }
                    );
                  }
                }

                if (
                  clientSelectedPayment[0].currentTotalPayments! +
                    totalAccumulablePayments ===
                  clientSelectedPayment[0].totalPayments
                ) {
                  const { updateSalesOperationStatusAPI } = await import(
                    "@/graphql/mutations"
                  );

                  const updateSalesOperationInput: IUpdateSalesOperationStatusInput =
                    {
                      id: clientSelectedPayment[0].id!,
                      status: SalesOperationStatus.PAID,
                    };

                  await clientAPI(updateSalesOperationStatusAPI, {
                    input: updateSalesOperationInput,
                  });
                }
                handleBackTo(sectionName);
                return;
              } catch (err) {
                console.log(err);
              }
              return;
            }
            //? NEXTSTEP WHEN SUBMITTING FORM DATA FOR PAYMENTSERVICE ONLY
            if (subMovementType === SubMovementType.OUTCOMEPAYMENTSERVICE) {
              handleNextStep();
            }
          } catch (err) {
            console.log(err);
          }
        }}
      >
        {({ touched, errors, handleSubmit, values, setFieldValue }) => (
          <LayoutForm values={values}>
            <Form onSubmit={handleSubmit} autoComplete={"off"}>
              {currentStepIndex === currentIndexObj.ONE ? (
                <SelectMovementType
                  movementType={values.movementType}
                  subMovementType={values.subMovementType}
                  setSubMovementType={setSubMovementType}
                  setFieldValue={setFieldValue}
                  goTo={goTo}
                  setClientSelectedPayment={setClientSelectedPayment}
                  clientSelectedPayment={clientSelectedPayment}
                  selectedClient={selectedClient}
                  setSelectedClient={setSelectedClient}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  totalAccumulablePayments={totalAccumulablePayments}
                  setTotalAccumulablePayments={setTotalAccumulablePayments}
                  setRemainingTotal={setRemainingTotal}
                  remainingTotal={remainingTotal}
                  clientCreditNextTwoPendingToPay={{
                    first: pendingClientCreditMovementsToPay[0]?.pendingToPay!,
                    second: pendingClientCreditMovementsToPay[1]?.pendingToPay!,
                  }}
                  setLastQuantity={setLastQuantity}
                  lastQuantity={lastQuantity}
                  pendingClientCreditMovementsToPay={
                    pendingClientCreditMovementsToPay
                  }
                  handleNextStep={handleNextStep}
                  handleBackStep={handleBackStep}
                  setIsReading={setIsReading}
                />
              ) : currentStepIndex === currentIndexObj.TWO ? (
                <ConfirmEditCSubscriptionPayment
                  subMovementType={values.subMovementType}
                  paymentID={paymentID}
                  clientData={{
                    clientName:
                      subMovementType === SubMovementType.OUTCOMEPAYMENTSERVICE
                        ? userInfoData.name
                        : clientSelectedPayment[0].clientName,
                    id:
                      subMovementType === SubMovementType.OUTCOMEPAYMENTSERVICE
                        ? userInfoData.id
                        : selectedClient.id!,
                  }}
                  clientSelectedPayment={clientSelectedPayment}
                  setQuantity={setQuantity}
                  quantity={quantity}
                  setRemainingTotal={setRemainingTotal}
                  remainingTotal={remainingTotal}
                  setFieldValue={setFieldValue}
                  clientCreditNextTwoPendingToPay={{
                    first: pendingClientCreditMovementsToPay[0]?.pendingToPay!,
                    second: pendingClientCreditMovementsToPay[1]?.pendingToPay!,
                  }}
                  setTotalAccumulablePayments={setTotalAccumulablePayments}
                  pendingClientCreditMovementsToPay={
                    pendingClientCreditMovementsToPay
                  }
                  isReading={isReading}
                  handleBackStep={handleBackStep}
                />
              ) : (
                step
              )}
            </Form>
          </LayoutForm>
        )}
      </Formik>
    </>
  );
}
