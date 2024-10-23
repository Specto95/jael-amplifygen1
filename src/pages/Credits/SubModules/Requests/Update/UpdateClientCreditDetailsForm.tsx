import { lazy, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

import { Formik, Form } from "formik";

//? SRC IMPORTS

//* COMPONENTS
import { LayoutForm } from "@/components/Layouts/LayoutForm";

//* HOOKS
import { useMultistepForm } from "@/hooks/useMultistepForm";
import { ClientCreditDetails } from "../../Clients/Add/Steps/Two/ClientCreditDetails";

//* APIs

import { useListClientsWithoutCreditTableDetails } from "../../Clients/Add/Steps/One/api/useListClientsWithoutCreditTableDetails";
import {
  ICreateCreditAPI,
  IUpdateClientAmountCreditInputAPI,
  IUpdateClientCreditInfoInputAPI,
  IUpdateCreditRequestsAPI,
} from "../../Clients/Add/interfaces/inputs/ICreateClientCredit";
import {
  CreditRequestStatus,
  PaymentStatus,
} from "@/utils/globalObjs/sideMenuSections/Credits/CreditsObjs";
import { getCurrentDate } from "@/utils/dates";
import { UpdateCreditGeneralFormData } from "./FormProps/initialValues/UpdateCreditInitialValues";

//*LAZY FORMS

const ModalSuccess = lazy(() =>
  import("@/components/UI/Modals/GenericModal/ModalSuccess").then((module) => ({
    default: module.ModalSuccess,
  }))
);

export function UpdateClientCreditDetailsForm() {
  const { id } = useParams<{ id: string }>();

  const { isLoading, listClientsWithoutCreditTableDetails } =
    useListClientsWithoutCreditTableDetails(id!);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [wasRejected, setWasRejected] = useState<boolean>(false);

  const { currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([<ClientCreditDetails />]);

  const handleNextStep = () => {
    if (!isLastStep) return next();
  };

  const handleBackStep = () => {
    if (!isFirstStep) return back();
  };

  return (
    <>
      <Helmet>
        <title>Jael | Actualizar solicitud de crédito del Cliente</title>
        <meta
          name="description"
          content="Actualizar solicitud de crédito del Cliente"
        />
      </Helmet>
      <Formik
        initialValues={UpdateCreditGeneralFormData}
        onSubmit={async (values) => {
          try {
            if (values.isSecondButton) {
              setIsModalOpen(true);

              //* DYNAMIC AMPLIFY IMPORTS
              const { clientAPI } = await import("@/utils/amplifyAPI/client");

              const {
                updateCreditRequestsAPI,
                updateClientHasCreditAndRequestAPI,
              } = await import("@/graphql/mutations");
              try {
                if (wasRejected) {
                  if (
                    listClientsWithoutCreditTableDetails[0].id &&
                    listClientsWithoutCreditTableDetails[0].hasCredit
                  ) {
                    return;
                  }
                  //! UPDATE CREDIT REQUEST STATUS(REJECT)
                  if (
                    listClientsWithoutCreditTableDetails[0].id &&
                    !listClientsWithoutCreditTableDetails[0].hasCredit
                  ) {
                    const inputUpdateCreditRequest: IUpdateCreditRequestsAPI = {
                      id: listClientsWithoutCreditTableDetails[0]
                        .creditRequestID,
                      creditRequestStatus: CreditRequestStatus.REJECTED,
                    };
                    await clientAPI(updateCreditRequestsAPI, {
                      input: inputUpdateCreditRequest,
                    });

                    //? UPDATE CLIENT REQUEST (FALSE CUZ OF REJECTING)
                    const inputUpdateClientCreditInfo: IUpdateClientCreditInfoInputAPI =
                      {
                        id: listClientsWithoutCreditTableDetails[0].id,
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
                if (
                  listClientsWithoutCreditTableDetails[0].id &&
                  !listClientsWithoutCreditTableDetails[0].hasCredit
                ) {
                  //? UPDATE CREDIT REQUEST STATUS (APPROVE)
                  const inputUpdateCreditRequest: IUpdateCreditRequestsAPI = {
                    id: listClientsWithoutCreditTableDetails[0].creditRequestID,
                    creditRequestStatus: CreditRequestStatus.APPROVED,
                  };
                  await clientAPI(updateCreditRequestsAPI, {
                    input: inputUpdateCreditRequest,
                  });

                  //? CREATE CREDIT
                  const inputCreateCredit: ICreateCreditAPI = {
                    creditsClientId:
                      listClientsWithoutCreditTableDetails[0].id!,
                    credit_available:
                      listClientsWithoutCreditTableDetails[0]
                        .creditRequestAmount!,
                    outstanding_balance: 0,
                    last_payment_date: null,
                    payment_status: PaymentStatus.FREE,
                    startDate: getCurrentDate(),
                    totalCredit:
                      listClientsWithoutCreditTableDetails[0]
                        .creditRequestAmount!,
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
                      id: listClientsWithoutCreditTableDetails[0].id,
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
                if (
                  listClientsWithoutCreditTableDetails[0].id &&
                  listClientsWithoutCreditTableDetails[0].creditID
                ) {
                  const { updateClientAmountCreditAPI } = await import(
                    "@/graphql/mutations"
                  );

                  const inputUpdateClientCreditInfo: IUpdateClientAmountCreditInputAPI =
                    {
                      id: listClientsWithoutCreditTableDetails[0].creditID,
                      credit_available:
                        listClientsWithoutCreditTableDetails[0]
                          .credit_available! + values.newClientCreditAmount!,
                      totalCredit:
                        listClientsWithoutCreditTableDetails[0].totalCredit! +
                        values.newClientCreditAmount!,
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
              {
                <ClientCreditDetails
                  setFieldValue={setFieldValue}
                  clientData={listClientsWithoutCreditTableDetails[0]}
                  // isListing={true}
                  isUpdating={true}
                  setWasRejected={setWasRejected}
                />
              }
            </Form>
          </LayoutForm>
        )}
      </Formik>
      {isModalOpen && (
        <ModalSuccess
          title={
            wasRejected
              ? "Solicitud de aumento de crédito rechazada"
              : listClientsWithoutCreditTableDetails[0].creditID
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
