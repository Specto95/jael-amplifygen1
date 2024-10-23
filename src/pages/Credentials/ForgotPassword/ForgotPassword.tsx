import { Helmet } from "react-helmet-async";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";

import styles from "../Credentials.module.css";

//* HOOKS
import { useSectionProvider } from "@/hooks/useSectionProvider";

//* PAGES
import { ForgotPasswordFormData } from "./ForgotPasswordFormData";

//* UTILS
import { forgotPasswordSchema } from "@/utils/validations";

export function ForgotPassword() {
  const navigate = useNavigate();
  const { setSectionName, handleBack } = useSectionProvider();
  return (
    <>
      <Helmet>
        <title>Jael | Recuperar Contraseña</title>
        <meta name="description" content="Recuperación de Contraseña" />
      </Helmet>
      <main className={styles.credentials__main}>
        <Formik
          initialValues={ForgotPasswordFormData}
          validationSchema={forgotPasswordSchema}
          onSubmit={async (values) => {
            // if (values.isSecondButton) {
            //   navigate("/userData");
            // }
          }}
        >
          {({ handleSubmit, errors, touched, setFieldValue }) => (
            <Form
              className={styles["credentials__login-container"]}
              onSubmit={handleSubmit}
              autoComplete={"off"}
            >
              <div className={styles["login__container-info"]}>
                <h2 className="heading__primary">Recuperación de Contraseña</h2>

                <label htmlFor="email" className={styles.login__label}>
                  Usuario
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Usuario:"
                  id="email"
                  className={`${styles["newpassword__input"]} ${
                    touched.email && errors.email ? "input-error" : ""
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-login"
                />
                <div className={styles["login__container-buttons"]}>
                  <button
                    type="button"
                    onClick={() => {
                      handleBack();
                      setSectionName("products");
                    }}
                    className="button__primary-cancel"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="button__primary-blueXS"
                    onClick={() => {
                      setFieldValue("isSecondButton", true);
                    }}
                  >
                    Recuperar
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </main>
    </>
  );
}
