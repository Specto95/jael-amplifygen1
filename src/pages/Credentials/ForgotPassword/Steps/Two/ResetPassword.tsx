import { ErrorMessage, Field } from "formik";
import styles from "../../../Credentials.module.css";
import { useSectionProvider } from "@/hooks/useSectionProvider";
import { ResetPasswordProps } from "./interfaces/ResetPassword";
import { useEffect, useState } from "react";

//* ASSETS
import VisiblePassword from "@/assets/img/ShowPassword.png";
import HidePassword from "@/assets/img/HidePassword.svg";

export function ResetPassword({
  errors,
  touched,
  setFieldValue,
  setSubmitType,
}: ResetPasswordProps) {
  const { handleBackTo } = useSectionProvider();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  useEffect(() => {
    setFieldValue!("isSecondButton", false);
  }, []);

  //!WIP -- SHOWPASSWORDS IMAGES

  return (
    <>
      <h2 className="heading__primary">Restaurar contraseña</h2>

      <label htmlFor="confirmationCode" className={styles.login__label}>
        Código de Verificación
      </label>
      <Field
        type="text"
        name="confirmationCode"
        placeholder="Escribe el código de verificación:"
        id="confirmationCode"
        className={`${styles["newpassword__input"]} ${
          touched!.confirmationCode && errors!.confirmationCode
            ? "input-error"
            : ""
        }`}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
          e.target.value = e.target.value.replace(/[^0-9]/g, "");
        }}
      />
      <ErrorMessage
        name="confirmationCode"
        component="div"
        className="error-left"
      />

      <label htmlFor="newPassword" className={styles.login__label}>
        Nueva contraseña
      </label>
      <div className="w-halfLeftRelative">
        <Field
          type={`${showPassword ? "text" : "password"}`}
          name="newPassword"
          placeholder="Nueva contraseña:"
          id="newPassword"
          className={`${styles["input__password"]} ${
            touched!.newPassword && errors!.newPassword ? "input-error" : ""
          }`}
        />
        <img
          className={styles.img__Password}
          src={showPassword ? HidePassword : VisiblePassword}
          alt="Show Password"
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>
      <ErrorMessage name="newPassword" component="div" className="error-left" />

      <label htmlFor="confirmPassword" className={styles.login__label}>
        Confirmar Contraseña
      </label>
      <div className="w-halfLeftRelative">
        <Field
          type={`${showConfirmPassword ? "text" : "password"}`}
          name="confirmPassword"
          placeholder="Confirmar contraseña:"
          id="confirmPassword"
          className={`${styles["input__password"]} ${
            touched!.confirmPassword && errors!.confirmPassword
              ? "input-error"
              : ""
          }`}
        />
        <img
          className={styles.img__Password}
          src={showConfirmPassword ? HidePassword : VisiblePassword}
          alt="Show Password"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        />
      </div>
      <ErrorMessage
        name="confirmPassword"
        component="div"
        className="error-left"
      />

      <div className={styles["login__container-buttons"]}>
        <button
          type="button"
          onClick={() => {
            handleBackTo("products");
          }}
          className="button__primary-cancel"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="button__primary-blueXS"
          onClick={() => {
            setFieldValue!("isSecondButton", true);
            setSubmitType!({ submitType: "RESTORE" });
          }}
        >
          Cambiar Contraseña
        </button>
      </div>
    </>
  );
}
