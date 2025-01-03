import { ErrorMessage, Field } from "formik";
import styles from "../../../Credentials.module.css";
import { ForgotPasswordProps } from "./interfaces/ForgotPassword";
import { useSectionProvider } from "@/hooks/useSectionProvider";
import { useEffect } from "react";

export function ForgotPassword({
  errors,
  touched,
  submitMessage,
  setFieldValue,
  setSubmitType,
}: ForgotPasswordProps) {
  const { handleBackTo } = useSectionProvider();

  useEffect(() => {
    setFieldValue!("isSecondButton", false);
  }, [submitMessage]);

  return (
    <>
      <h2 className="heading__primary">Recuperación de Contraseña</h2>

      <label htmlFor="email" className={styles.login__label}>
        Ingresa tu Correo:
      </label>
      <Field
        type="email"
        name="email"
        placeholder="Ingresa tu Correo:"
        id="email"
        className={`${styles["newpassword__input"]} ${
          touched!.email && errors!.email ? "input-error" : ""
        }`}
      />
      <ErrorMessage name="email" component="div" className="error-left" />
      {submitMessage?.hasError ? (
        <p className={"red"}>{submitMessage.message}</p>
      ) : (
        <></>
      )}
      <div className={styles["login__container-buttons"]}>
        <button
          type="button"
          onClick={() => {
            handleBackTo("products");
          }}
          className="button__primary-cancel"
        >
          Volver
        </button>
        <button
          type="submit"
          className="button__primary-blueXS"
          onClick={() => {
            setFieldValue!("isSecondButton", true);
            setSubmitType!({ submitType: "RESET" });
          }}
        >
          Recuperar
        </button>
      </div>
    </>
  );
}
