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
import { IGetClientDetailsByIDAPI } from "./Steps/One/api/interfaces/IUseGetClientDetailsByID";
import {
  ICreateCreditRequestsAPI,
  IUpdateClientHasCreditRequestAPI,
} from "./interfaces/inputs/ICreateCreditRequests";
import { CreditsS3Objs } from "@/utils/S3/SideMenuSections/Credits/CreditsObjs";

import { useSessionProvider } from "../../../../../hooks/useSessionProvider";
import {
  ICreateCreditAPI,
  IUpdateClientCreditInfoInputAPI,
} from "../../Clients/Add/interfaces/inputs/ICreateClientCredit";
import {
  CreditRequestStatus,
  PaymentStatus,
} from "@/utils/globalObjs/sideMenuSections/Credits/CreditsObjs";
import { getCurrentDate } from "@/utils/dates";

//* APIs

//*LAZY FORMS
const SearchClient = lazy(() =>
  import("./Steps/One/SearchClient").then((module) => ({
    default: module.SearchClient,
  }))
);

const CreditRequestData = lazy(() =>
  import("./Steps/Two/CreditRequestData").then((module) => ({
    default: module.CreditRequestData,
  }))
);

const ModalSuccess = lazy(() =>
  import("@/components/UI/Modals/GenericModal/ModalSuccess").then((module) => ({
    default: module.ModalSuccess,
  }))
);

export function CreditsRequestsGeneralForm() {
  const { mainBranchInventory } = useSessionProvider();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [selectedClient, setSelectedClient] =
    useState<IGetClientDetailsByIDAPI>({
      id: "",
      name: "",
      second_name: "",
      lastname: "",
      second_lastname: "",
      phone: "",
      address: "",
      state: "",
      clientSince: "",
    });

  const [fileNameFrenteINE, setFileNameFrenteINE] = useState<File | null>(null);
  const [fileNameTraseroINE, setFileNameTraseroINE] = useState<File | null>(
    null
  );
  const [fileNameProofAddress, setFileNameProofAddress] = useState<File | null>(
    null
  );

  const { currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([<SearchClient />, <CreditRequestData />]);

  const handleNextStep = () => {
    if (!isLastStep) return next();
  };

  const handleBackStep = () => {
    if (!isFirstStep) return back();
  };

  return (
    <>
      <Helmet>
        <title>Jael | Solicitar Crédito</title>
        <meta name="description" content="Solicitar Crédito" />
      </Helmet>
      <Formik
        initialValues={CreditGeneralFormData}
        onSubmit={async (values) => {
          try {
            if (values.isSecondButton) {
              setIsModalOpen(true);
              try {
                //* DYNAMIC AMPLIFY IMPORTS
                const { clientAPI } = await import("@/utils/amplifyAPI/client");
                const {
                  createCreditRequestsAPI,
                  updateClientHasCreditRequestAPI,
                } = await import("@/graphql/mutations");

                //? UPLOAD FILES TO S3
                try {
                  const { getUrl, uploadData } = await import(
                    "aws-amplify/storage"
                  );
                  if (fileNameFrenteINE) {
                    uploadData({
                      key: `${CreditsS3Objs.CLIENTCREDITREQUESTDOCUMENTS}/${selectedClient.id}/${fileNameFrenteINE.name}`,
                      data: fileNameFrenteINE,
                      options: {
                        contentType: fileNameFrenteINE.type,
                        onProgress: ({ transferredBytes, totalBytes }) => {
                          if (totalBytes) {
                            console.log(
                              `Upload progress ${Math.round(
                                (transferredBytes / totalBytes) * 100
                              )} %`
                            );
                          }
                        },
                      },
                    }).result;
                  }

                  if (fileNameTraseroINE) {
                    uploadData({
                      key: `${CreditsS3Objs.CLIENTCREDITREQUESTDOCUMENTS}/${selectedClient.id}/${fileNameTraseroINE.name}`,
                      data: fileNameTraseroINE,
                      options: {
                        contentType: fileNameTraseroINE.type,
                        onProgress: ({ transferredBytes, totalBytes }) => {
                          if (totalBytes) {
                            console.log(
                              `Upload progress ${Math.round(
                                (transferredBytes / totalBytes) * 100
                              )} %`
                            );
                          }
                        },
                      },
                    }).result;
                  }

                  if (fileNameProofAddress) {
                    uploadData({
                      key: `${CreditsS3Objs.CLIENTCREDITREQUESTDOCUMENTS}/${selectedClient.id}/${fileNameProofAddress.name}`,
                      data: fileNameProofAddress,
                      options: {
                        contentType: fileNameProofAddress.type,
                        onProgress: ({ transferredBytes, totalBytes }) => {
                          if (totalBytes) {
                            console.log(
                              `Upload progress ${Math.round(
                                (transferredBytes / totalBytes) * 100
                              )} %`
                            );
                          }
                        },
                      },
                    }).result;
                  }
                } catch (err) {
                  console.log(err);
                }

                if (mainBranchInventory.id) {
                  const {
                    createCreditsAPI,
                    updateClientHasCreditAndRequestAPI,
                  } = await import("@/graphql/mutations");

                  //? CREATE CREDIT
                  const inputCreateCredit: ICreateCreditAPI = {
                    creditsClientId: selectedClient.id!,
                    credit_available: values.creditRequestAmount,
                    outstanding_balance: 0,
                    last_payment_date: null,
                    payment_status: PaymentStatus.FREE,
                    startDate: getCurrentDate(),
                    totalCredit: values.creditRequestAmount,
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
                      id: selectedClient.id!,
                      creditID,
                      hasCredit: true,
                      hasCreditRequest: false,
                    };

                  await clientAPI(updateClientHasCreditAndRequestAPI, {
                    input: inputUpdateClientCreditInfo,
                  });

                  //?CREATE CREDITREQUEST DIRECTLY APPROVED

                  const inputCreditRequest: ICreateCreditRequestsAPI = {
                    clientID: selectedClient.id || "",
                    creditRequestAmount: values.creditRequestAmount,
                    creditRequestReason: values.creditRequestReason,
                    creditRequestStatus: CreditRequestStatus.APPROVED,
                  };

                  await clientAPI(createCreditRequestsAPI, {
                    input: inputCreditRequest,
                  });

                  console.log("COMPLETED");

                  return;
                }

                const inputCreditRequest: ICreateCreditRequestsAPI = {
                  clientID: selectedClient.id || "",
                  creditRequestAmount: values.creditRequestAmount,
                  creditRequestReason: values.creditRequestReason,
                  creditRequestStatus: values.creditRequestStatus,
                };

                await clientAPI(createCreditRequestsAPI, {
                  input: inputCreditRequest,
                });

                //? UPDATE CLIENT HAS CREDIT REQUEST
                const inputUpdateClientHasCreditRequest: IUpdateClientHasCreditRequestAPI =
                  {
                    id: selectedClient.id!,
                    hasCreditRequest: true,
                  };

                await clientAPI(updateClientHasCreditRequestAPI, {
                  input: inputUpdateClientHasCreditRequest,
                });

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
              {currentStepIndex === currentIndexObj.ONE ? (
                <SearchClient
                  setSelectedClient={setSelectedClient}
                  selectedClient={selectedClient}
                  handleNextStep={handleNextStep}
                  handleBackStep={handleBackStep}
                  currentStepIndex={currentStepIndex}
                />
              ) : currentStepIndex === currentIndexObj.TWO ? (
                <CreditRequestData
                  selectedClient={selectedClient}
                  handleBackStep={handleBackStep}
                  currentStepIndex={currentStepIndex}
                  setFieldValue={setFieldValue}
                  isCheckedClientDocuments={values.isCheckedClientDocuments}
                  creditRequestAmount={values.creditRequestAmount}
                  fileNameFrenteINE={fileNameFrenteINE}
                  fileNameTraseroINE={fileNameTraseroINE}
                  fileNameProofAddress={fileNameProofAddress}
                  setFileNameFrenteINE={setFileNameFrenteINE}
                  setFileNameTraseroINE={setFileNameTraseroINE}
                  setFileNameProofAddress={setFileNameProofAddress}
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
            mainBranchInventory.id
              ? "Nuevo Crédito Agregado"
              : "Solicitud enviada, un correo será enviado al cliente al concluir la solicitud!"
          }
          setIsModalOpen={setIsModalOpen}
          sectionName={"credits"}
        />
      )}
    </>
  );
}
