// import { Field } from "formik";
// import styles from "../../../Credentials.module.css";
// import { useSectionProvider } from "@/hooks/useSectionProvider";
// import { useEffect } from "react";
// import { ConfirmationCodeProps } from "./interfaces/ConfirmationCode";

// export function ConfirmationCode({ setFieldValue }: ConfirmationCodeProps) {
//   const { handleBackTo } = useSectionProvider();

//   useEffect(() => {
//     setFieldValue!("isSecondButton", false);
//   }, []);

//   return (
//     <>
//       <h2 className="heading__primary">Código de Recuperación</h2>

//       <label htmlFor="newPassword" className={styles.login__label}>
//         Ingresa el Código de Recuperación
//       </label>
//       <Field
//         type="confirmationCode"
//         name="confirmationCode"
//         placeholder="Escriba el Código de Recuperación:"
//         id="confirmationCode"
//         className={`${styles["newpassword__input"]}`}
//       />
//       <div className={styles["login__container-buttons"]}>
//         <button
//           type="button"
//           onClick={() => {
//             handleBackTo("products");
//             // setSectionName("products");
//           }}
//           className="button__primary-cancel"
//         >
//           Cancelar
//         </button>
//         <button
//           type="submit"
//           className="button__primary-blueXS"
//           onClick={() => {
//             setFieldValue!("isSecondButton", true);
//           }}
//         >
//           Cambiar Contraseña
//         </button>
//       </div>
//     </>
//   );
// }
