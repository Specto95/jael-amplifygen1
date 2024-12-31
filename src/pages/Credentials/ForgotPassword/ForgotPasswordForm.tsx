import { Helmet } from "react-helmet-async";
import { Form, Formik } from "formik";

import styles from "../Credentials.module.css";

//* PAGES
import { forgotPasswordFormData } from "./FormProps/initialValues/ForgotPasswordFormData";

//* UTILS
import {
  forgotPasswordSchema,
  resetPasswordSchema,
} from "./FormProps/schema/validations";
import { lazy, useState } from "react";

import { useSessionProvider } from "../../../hooks/useSessionProvider";
import { useMultistepForm } from "@/hooks/useMultistepForm";
import { currentIndexObj } from "@/utils/multiStepForm/currentIndexObj";
import { ForgotPassword } from "./Steps/First/ForgotPassword";
import { ResetPassword } from "./Steps/Two/ResetPassword";
import { ListUsersQuery, UpdateUserMutationVariables } from "@/API";
import { hashPassword } from "@/utils/auth";
import { Navigate } from "react-router-dom";
import { handleConfirmResetPassword } from "./helpers/functions";

const ModalSuccess = lazy(() =>
  import("@/components/UI/Modals/GenericModal/ModalSuccess").then((module) => ({
    default: module.ModalSuccess,
  }))
);

//?INTERFACES

export interface SubmitMessage {
  hasError: boolean;
  message: string;
}

export interface SubmitType {
  submitType: "" | "RESET" | "RESTORE";
}

export function ForgotPasswordForm() {
  const { isLogged } = useSessionProvider();

  const [submitMessage, setSubmitMessage] = useState<SubmitMessage>({
    hasError: false,
    message: "",
  });
  const [submitType, setSubmitType] = useState<SubmitType>({
    submitType: "",
  });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [title, setTitle] = useState("");

  const { currentStepIndex, next } = useMultistepForm([
    <ForgotPassword />,
    <ResetPassword />,
  ]);

  function validateSchemas(currentStepIndex: number) {
    if (currentStepIndex === currentIndexObj.ONE) {
      return forgotPasswordSchema;
    }
    if (currentStepIndex === currentIndexObj.TWO) {
      return resetPasswordSchema;
    }
  }

  return !isLogged ? (
    <>
      <Helmet>
        <title>Jael | Recuperar Contraseña</title>
        <meta name="description" content="Recuperación de Contraseña" />
      </Helmet>
      <main className={styles.credentials__main}>
        <Formik
          initialValues={forgotPasswordFormData}
          validationSchema={() => validateSchemas(currentStepIndex)}
          onSubmit={async (values) => {
            if (values.isSecondButton) {
              if (submitType.submitType === "RESET") {
                try {
                  const { handleResetPassword } = await import(
                    "./helpers/functions"
                  );
                  const result = await handleResetPassword(values.email);
                  if (result === "UserNotFoundException") {
                    setSubmitMessage({
                      hasError: true,
                      message: "El usuario no existe",
                    });
                    return;
                  }
                  setSubmitMessage({
                    hasError: false,
                    message: "",
                  });
                  next!();
                } catch (error) {
                  console.error(error);
                }
              }

              if (submitType.submitType === "RESTORE") {
                try {
                  const { listUserIDByEmailAPI } = await import(
                    "@/graphql/queries"
                  );
                  const { updateUserAPI } = await import("@/graphql/mutations");

                  const { clientAPI } = await import(
                    "@/utils/amplifyAPI/client"
                  );

                  //?---------- UPDATEUSER FROM COGNITO
                  await handleConfirmResetPassword({
                    username: values.email,
                    confirmationCode: values.confirmationCode,
                    newPassword: values.newPassword,
                  });

                  //?---------- UPDATEUSER DB

                  try {
                    //* List ID of the user
                    const result = (await clientAPI(listUserIDByEmailAPI, {
                      email: values.email,
                    })) as { data: ListUsersQuery };

                    const id = result.data.listUsers?.items[0]?.id;

                    if (id) {
                      const updateUserInput: UpdateUserMutationVariables = {
                        input: {
                          id,
                          password: await hashPassword(values.newPassword),
                        },
                      };

                      await clientAPI(updateUserAPI, updateUserInput);
                    }

                  } catch (error) {
                    console.error(error);
                    setTitle("No se pudo actualizar la contraseña");
                  }
                  setTitle("Cambio de contraseña exitoso");
                  setIsModalOpen(true);
                } catch (error) {
                  console.error(error);
                }
              }
            }
          }}
        >
          {({ handleSubmit, errors, touched, setFieldValue }) => (
            <Form
              className={styles["credentials__login-container"]}
              onSubmit={handleSubmit}
              autoComplete={"off"}
            >
              <div className={styles["login__container-info"]}>
                {currentStepIndex === currentIndexObj.ONE ? (
                  <ForgotPassword
                    errors={errors}
                    touched={touched}
                    submitMessage={submitMessage}
                    setFieldValue={setFieldValue}
                    setSubmitType={setSubmitType}
                  />
                ) : currentStepIndex === currentIndexObj.TWO ? (
                  <ResetPassword
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    setSubmitType={setSubmitType}
                  />
                ) : (
                  <></>
                )}
              </div>
            </Form>
          )}
        </Formik>
        {isModalOpen && (
          <ModalSuccess
            title={title}
            setIsModalOpen={setIsModalOpen}
            redirectTo="/login"
            sectionName=""
          />
        )}
      </main>
    </>
  ) : (
    <Navigate to="/" />
  );
}
