import { Helmet } from "react-helmet-async";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, Navigate } from "react-router-dom";
import { useSessionProvider } from "@/hooks/useSessionProvider";

import { ToastContainer } from "react-toastify";

import { confirmSignIn, signIn } from "aws-amplify/auth";

import styles from "../Credentials.module.css";

//* HOOKS
import { useSectionProvider } from "@/hooks/useSectionProvider";

//* PAGES
import { LoginFormData } from "./LoginFormData";

//* UTILS
import { loginSchema } from "@/utils/validations";
import FieldPassword from "@/components/UI/GenericComponents/Fields/Password/FieldPassword";

export function Login() {
  const { setSectionName, handleBack } = useSectionProvider();
  const { logIn, isLogged } = useSessionProvider();

  // useEffect(() => {
  //   async function confirmUser() {
  //     try {
  //       const { nextStep } = await signIn({
  //         username: "enortizlo@gmail.com",
  //         password: "Asfhgkddp0!",
  //       });

  //       if (nextStep) {
  //         await confirmSignIn({
  //           challengeResponse: "Asfhgkddp",
  //         });
  //       }
  //     } catch (e) {
  //       console.error(e);
  //     }
  //     finally{
  //       console.log('passed')
  //     }
  //   }
  //   confirmUser()
  // }, []);

  return !isLogged ? (
    <>
      <Helmet>
        <title>Jael | Login</title>
        <meta name="description" content="Inicio de Sesión" />
      </Helmet>
      <main className={styles.credentials__main}>
        <Formik
          initialValues={LoginFormData}
          validationSchema={loginSchema}
          onSubmit={async (values) => {
            if (values.isSecondButton) {
              const res = logIn(values.email, values.password);
            }
          }}
        >
          {({ handleSubmit, errors, touched, setFieldValue }) => (
            <Form
              className={styles["credentials__login-container"]}
              onSubmit={handleSubmit}
              autoComplete={"off"}
            >
              <div className={styles["login__container-grid"]}>
                <div className={styles["login__container-logo"]}>
                  <h2 className="logo-login"></h2>
                  <h2 className="heading__primary">Iniciar sesión</h2>
                </div>
                <div className={styles["login__container-info"]}>
                  <h2 className="heading__primary">Datos del empleado</h2>

                  <label htmlFor="email" className={styles.login__label}>
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email:"
                    id="email"
                    className={`${styles["login__input"]} ${
                      touched.email && errors.email ? "input-error" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-login bold"
                  />

                  <label htmlFor="password" className={styles.login__label}>
                    Contraseña
                  </label>
                  <FieldPassword errors={errors} touched={touched} />

                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error-login bold"
                  />

                  <div className={styles["login__checkbox-container"]}>
                    <Field type="checkbox" name="remember" id="remember" />
                    <label
                      htmlFor="remember"
                      className={styles["login__custom-label"]}
                    >
                      Recordar usuario en esta computadora
                    </label>
                  </div>

                  <Link
                    to="/forgot-password"
                    className={styles["login__forgot-password"]}
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>

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
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </main>
      <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
    </>
  ) : (
    <Navigate to="/" />
  );
}
