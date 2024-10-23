import { Field, FormikErrors, FormikTouched } from "formik";
import { useState } from "react";

//* ASSETS
import VisiblePassword from "@/assets/img/ShowPassword.png";
import HidePassword from "@/assets/img/HidePassword.svg";

//* STYLES
import styles from "./FieldPassword.module.css";

interface Props {
  touched: FormikTouched<{
    email?: string;
    password: string;
  }>;

  errors: FormikErrors<{
    email?: string;
    password: string;
  }>;
}

export default function FieldPassword({ touched, errors }: Props) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="relative w-full">
      <Field
        type={`${showPassword ? "text" : "password"}`}
        name="password"
        placeholder="Contraseña:"
        id="password"
        className={`${styles["input"]} ${
          touched.password && errors.password ? "input-error" : ""
        } `}
      />
      <img
        className={styles.imgPassword}
        src={showPassword ? HidePassword : VisiblePassword}
        alt="Show Password"
        onClick={() => setShowPassword(!showPassword)}
      />
    </div>
  );
}
