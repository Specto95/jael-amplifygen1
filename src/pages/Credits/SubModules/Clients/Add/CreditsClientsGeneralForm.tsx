import { lazy, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Formik, Form } from "formik";

//? SRC IMPORTS

//* COMPONENTS
import { LayoutForm } from "@/components/Layouts/LayoutForm";

//* HOOKS
import { useMultistepForm } from "@/hooks/useMultistepForm";
import { CreditGeneralFormData } from "./FormProps/initialValues/CreditsInitialValues";
import { currentIndexObj } from "@/utils/multiStepForm/currentIndexObj";
import { IListClientSelectedFullDetailsAPIResponse } from "./Steps/One/api/interfaces/IListClientsWithoutCreditTableDetails";

//* INTERFACES
import {
  ICreateCreditAPI,
  IUpdateClientAmountCreditInputAPI,
  IUpdateClientCreditInfoInputAPI,
  IUpdateCreditRequestsAPI,
} from "./interfaces/inputs/ICreateClientCredit";

//* UTILS
import {
  CreditRequestStatus,
  PaymentStatus,
} from "@/utils/globalObjs/sideMenuSections/Credits/CreditsObjs";
import { getCurrentDate } from "@/utils/dates";

const ModalSuccess = lazy(() =>
  import("@/components/UI/Modals/GenericModal/ModalSuccess").then((module) => ({
    default: module.ModalSuccess,
  }))
);

const SelectClient = lazy(() =>
  import("./Steps/One/SelectClient").then((module) => ({
    default: module.SelectClient,
  }))
);

const ClientCreditDetails = lazy(() =>
  import("./Steps/Two/ClientCreditDetails").then((module) => ({
    default: module.ClientCreditDetails,
  }))
);

export function CreditsClientsGeneralForm() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [clientData, setClientData] =
    useState<IListClientSelectedFullDetailsAPIResponse>({
      creditRequestID: "",
      id: "",
      name: "",
      phone: "",
      address: "",
      email: "",
      hasCredit: false,
      settlement: "",
      postal_code: "",
      state: "",
      city: "",
      clientSince: "",
      credit_available: 0,
      outstanding_balance: 0,
      creditSince: "",
      creditRequestAmount: 0,
      creditRequestReason: "",
      creditRequestStatus: "",
    });

  const [wasRejected, setWasRejected] = useState<boolean>(false);

  const { currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([<SelectClient />, <ClientCreditDetails />]);

  const handleNextStep = () => {
    if (!isLastStep) return next();
  };

  const handleBackStep = () => {
    if (!isFirstStep) return back();
  };

  return (
    <>
      <Helmet>
        <title>Jael | Nuevo Crédito</title>
        <meta name="description" content="Nuevo Crédito" />
      </Helmet>
      <Formik
        initialValues={CreditGeneralFormData}
        onSubmit={async (values) => {
          try {
            if (values.isSecondButton) {
              setIsModalOpen(true);

              const { clientAPI } = await import("@/utils/amplifyAPI/client");

              const {
                updateCreditRequestsAPI,
                updateClientHasCreditAndRequestAPI,
              } = await import("@/graphql/mutations");
              try {
                if (wasRejected) {
                  if (clientData.id && clientData.hasCredit) {
                    return;
                  }
                  //! UPDATE CREDIT REQUEST STATUS(REJECT)
                  if (clientData.id && !clientData.hasCredit) {
                    const inputUpdateCreditRequest: IUpdateCreditRequestsAPI = {
                      id: clientData.creditRequestID,
                      creditRequestStatus: CreditRequestStatus.REJECTED,
                    };

                    await clientAPI(updateCreditRequestsAPI, {
                      input: inputUpdateCreditRequest,
                    });

                    //? UPDATE CLIENT REQUEST (FALSE CUZ OF REJECTING)
                    const inputUpdateClientCreditInfo: IUpdateClientCreditInfoInputAPI =
                      {
                        id: clientData.id,
                        hasCreditRequest: false,
                      };

                    await clientAPI(updateClientHasCreditAndRequestAPI, {
                      input: inputUpdateClientCreditInfo,
                    });

                    return;
                  }
                }

                const { createCreditsAPI } = await import(
                  "@/graphql/mutations"
                );
                if (clientData.id && !clientData.hasCredit) {
                  //? UPDATE CREDIT REQUEST STATUS (APPROVE)
                  const inputUpdateCreditRequest: IUpdateCreditRequestsAPI = {
                    id: clientData.creditRequestID,
                    creditRequestStatus: CreditRequestStatus.APPROVED,
                  };
                  await clientAPI(updateCreditRequestsAPI, {
                    input: inputUpdateCreditRequest,
                  });

                  //? CREATE CREDIT
                  const inputCreateCredit: ICreateCreditAPI = {
                    creditsClientId: clientData.id!,
                    credit_available: clientData.creditRequestAmount!,
                    outstanding_balance: 0,
                    last_payment_date: null,
                    payment_status: PaymentStatus.FREE,
                    startDate: getCurrentDate(),
                    totalCredit: clientData.creditRequestAmount!,
                  };

                  const createCreditResult: any = await clientAPI(
                    createCreditsAPI,
                    {
                      input: inputCreateCredit,
                    }
                  );

                  const { id: creditID } =
                    createCreditResult.data.createCredits;

                  //? UPDATE CLIENT (CREDIT)
                  const inputUpdateClientCreditInfo: IUpdateClientCreditInfoInputAPI =
                    {
                      id: clientData.id,
                      creditID,
                      hasCredit: true,
                      hasCreditRequest: false,
                    };

                  await clientAPI(updateClientHasCreditAndRequestAPI, {
                    input: inputUpdateClientCreditInfo,
                  });

                  return;
                }

                //? INCREASE CREDIT AMOUNT
                if (clientData.id && clientData.creditID) {
                  const { updateClientAmountCreditAPI } = await import(
                    "@/graphql/mutations"
                  );

                  const inputUpdateClientCreditInfo: IUpdateClientAmountCreditInputAPI =
                    {
                      id: clientData.creditID,
                      credit_available:
                        clientData.credit_available! +
                        values.newClientCreditAmount!,
                      totalCredit:
                        clientData.totalCredit! + values.newClientCreditAmount!,
                    };

                  await clientAPI(updateClientAmountCreditAPI, {
                    input: inputUpdateClientCreditInfo,
                  });

                  console.log("CREDITO AUMENTADO");
                }
              } catch (err) {
                console.log(err);
              }
              console.log("COMPLETED");
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
              {currentStepIndex === currentIndexObj.ONE ? (
                <SelectClient
                  handleNextStep={handleNextStep}
                  handleBackStep={handleBackStep}
                  clientData={clientData}
                  setClientData={setClientData}
                  currentStepIndex={currentStepIndex}
                  setFieldValue={setFieldValue}
                  newClientCreditAmount={values.newClientCreditAmount}
                />
              ) : currentStepIndex === currentIndexObj.TWO ? (
                <ClientCreditDetails
                  handleBackStep={handleBackStep}
                  clientData={clientData}
                  newClientCreditAmount={values.newClientCreditAmount}
                  setFieldValue={setFieldValue}
                  setWasRejected={setWasRejected}
                  newClientTotalCredit={values.newClientTotalCredit}
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
          title={
            wasRejected
              ? clientData.creditRequestStatus === CreditRequestStatus.PENDING
                ? "Solicitud de crédito rechazado"
                : "Solicitud de aumento de crédito rechazada"
              : clientData.creditID
              ? `Crédito Aumentado, 
              un correo será enviado al cliente para notificarle su nuevo aumento de crédito!.
              `
              : "Crédito Aprobado, un correo será enviado al cliente para notificarle su nuevo crédito!."
          }
          setIsModalOpen={setIsModalOpen}
          sectionName={"credits"}
        />
      )}
    </>
  );
}
