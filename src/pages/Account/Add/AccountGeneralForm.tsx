import { lazy, useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Form, Formik } from "formik";

import { v4 as uuidv4 } from "uuid";

//?SRC IMPORTS

import { LayoutForm } from "@/components/Layouts/LayoutForm";

//* LAZY COMPONENTS
const NewAccount = lazy(() =>
  import("./Steps/First/NewAccount").then((module) => ({
    default: module.NewAccount,
  }))
);

const NewAccountDetails = lazy(() =>
  import("./Steps/Second/NewAccountDetails").then((module) => ({
    default: module.NewAccountDetails,
  }))
);

const ModalSuccess = lazy(() =>
  import("@/components/UI/Modals/GenericModal/ModalSuccess").then((module) => ({
    default: module.ModalSuccess,
  }))
);

//*HOOKS
import { useSectionProvider } from "@/hooks/useSectionProvider";
import { useMultistepForm } from "@/hooks/useMultistepForm";

//*APIs

import { useListBranchOfficeIDs } from "@/pages/Products/ProductForm/Add/api/useListBranchOfficeIDs";

//*INTERFACES
import {
  ICreateUserInfoInput,
  ICreateUserInput,
  IRoleDataState,
} from "../FormProps/initialValues/interfaces/AccountFormData";

//*FORM DATA
import { AccountFormData } from "../FormProps/initialValues/AccountFormData";
import {
  NewAccountDetailsSchema,
  NewAccountSchema,
} from "../FormProps/schema/AccountFormValidationSchema";
import { AccountFormObj } from "../utils/AccountFormObj";
import { ICreateBranchOfficeUserAPI } from "@/pages/BranchOffices/Add/FormProps/BranchOfficeGeneralData.d";
import { currentIndexObj } from "@/utils/multiStepForm/currentIndexObj";

//* UTILS

export function AccountGeneralForm(): JSX.Element {
  const form = useRef<HTMLFormElement>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roleData, setRoleData] = useState<IRoleDataState>({
    id: "",
    name: "",
  });

  const { branchOfficeIDs } = useListBranchOfficeIDs();

  const handleNextStep = () => {
    if (!isLastStep) return next();
  };

  const handleBackStep = () => {
    if (!isFirstStep) return back();
  };

  const getValidationSchemaForStep = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return NewAccountSchema;
      case 1:
        return NewAccountDetailsSchema;
      default:
        return;
    }
  };

  const { currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([<NewAccount />, <NewAccountDetails />]);
  return (
    <>
      <Helmet>
        <title>Jael | Creando Usuario</title>
        <meta name="description" content="Creando Usuario" />
      </Helmet>
      <Formik
        initialValues={AccountFormData}
        validationSchema={getValidationSchemaForStep(currentStepIndex)}
        onSubmit={async (values) => {
          try {
            if (values.isSecondButton) {
              setIsModalOpen(true);

              const { generateRandomPassword } = await import(
                "../utils/helpers"
              );

              //* DYNAMIC AMPLIFY IMPORTS
              const { clientAPI } = await import("@/utils/amplifyAPI/client");
              const { signUp } = await import("aws-amplify/auth");

              const {
                createUserAPI,
                createUserInfoAPI,
                createBranchOfficeUserAPI,
              } = await import("@/graphql/mutations");

              const userInfoID = uuidv4();

              const randomPassword = generateRandomPassword(8);

              const inputUser: ICreateUserInput = {
                email: values.email,
                password: values.autoPassword
                  ? randomPassword
                  : values.password,
                rolID: roleData.id,
                userUserInfoId: userInfoID,
                hasBranchOffice: values.branchOffice ? true : false,
              };

              //?APIs

              try {
                const userResult: any = await clientAPI(createUserAPI, {
                  input: inputUser,
                });

                const { id: userId } = userResult.data.createUser;

                const inputUserInfo: ICreateUserInfoInput = {
                  id: userInfoID,
                  name:
                    values.name +
                    " " +
                    values.second_name +
                    " " +
                    values.lastname +
                    " " +
                    values.second_lastname,
                  phone: values.phone,
                  RFC: values.RFC,
                  gender: values.gender,
                  userInfoUserId: userId,
                };

                const userInfoResult: any = await clientAPI(createUserInfoAPI, {
                  input: inputUserInfo,
                });

                if (
                  values.branchOffice &&
                  values.userType === AccountFormObj.BRANCHMANAGER
                ) {
                  console.log("CREANDO ENCARGADO DE SUCURSAL");
                  const inputBranchOfficeUser: ICreateBranchOfficeUserAPI = {
                    branchOfficeId: values.branchOffice,
                    userId,
                  };
                  const branchOfficeUserResult: any = await clientAPI(
                    createBranchOfficeUserAPI,
                    {
                      input: inputBranchOfficeUser,
                    }
                  );
                }

                if (values.userType === AccountFormObj.ADMIN) {
                  console.log("CREANDO ADMINISTRADOR");
                  branchOfficeIDs &&
                    branchOfficeIDs.map(async ({ id: branchOfficeId }) => {
                      const inputBranchOfficeUser: ICreateBranchOfficeUserAPI =
                        {
                          branchOfficeId,
                          userId,
                        };
                      const branchOfficeUserResultADMIN: any = await clientAPI(
                        createBranchOfficeUserAPI,
                        {
                          input: inputBranchOfficeUser,
                        }
                      );
                    });
                }

                if (userInfoResult.data.createUserInfo) {
                  await signUp({
                    username: values.email,
                    password: values.autoPassword
                      ? randomPassword
                      : values.password,
                    options: {
                      userAttributes: {
                        email: values.email,
                      },
                    },
                  });
                  if (values.sendVia === "viaEmail" && currentStepIndex === 1) {
                    //?SEND EMAIL
                    const emailjs = await import("@emailjs/browser");

                    const sendEmail = () => {
                      emailjs
                        .send(
                          import.meta.env.VITE_SERVICE_ID,
                          import.meta.env.VITE_TEMPLATE_ID,
                          {
                            fullname:
                              values.name +
                              " " +
                              values.second_name +
                              " " +
                              values.lastname +
                              " " +
                              values.second_lastname,
                            username: values.email,
                            password: values.autoPassword
                              ? randomPassword
                              : values.password,
                            name: values.name,
                            RFC: values.RFC || "No proporcionado",
                            userType: roleData.name,
                            branchOffice: values.branchOffice,
                            phone: values.phone || "No proporcionado",
                            gender: values.gender || "No proporcionado",
                          },
                          import.meta.env.VITE_API_KEY
                        )
                        .then(
                          (result) => {
                            console.log(result.text);
                          },
                          (error) => {
                            console.log(error.text);
                          }
                        );
                    };
                    sendEmail();
                  }
                }
                console.log("COMPLETED!");
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
        {({
          touched,
          errors,
          handleSubmit,
          values,
          setFieldValue,
          setTouched,
          setErrors,
        }) => (
          <LayoutForm values={values}>
            <Form ref={form} onSubmit={handleSubmit} autoComplete={"off"}>
              {currentStepIndex === currentIndexObj.ONE ? (
                <NewAccount
                  touched={touched}
                  errors={errors}
                  setErrors={setErrors}
                  setFieldValue={setFieldValue}
                />
              ) : currentStepIndex === currentIndexObj.TWO ? (
                <NewAccountDetails
                  setFieldValue={setFieldValue}
                  handleBackStep={handleBackStep}
                  autoPassword={values.autoPassword}
                  setRoleData={setRoleData}
                  userType={values.userType}
                  touched={touched}
                  errors={errors}
                  setTouched={setTouched}
                  setErrors={setErrors}
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
          title={"Usuario Registrado correctamente!"}
          setIsModalOpen={setIsModalOpen}
          sectionName={"account"}
        />
      )}
    </>
  );
}
