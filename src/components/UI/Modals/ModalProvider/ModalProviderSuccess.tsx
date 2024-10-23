import { useState } from "react";
import styles from "../ModalSuccess/ModalProductSuccess.module.css";

//* ASSETS
import Success from "@/assets/img/Success.svg";

//* INTERFACES
import { IModalProviderSuccessProps } from "./interfaces/IModalProviderSuccess";

export function ModalProviderSuccess({
  title,
  setIsModalOpen,
  enterprise_name,
  setFieldValue,
}: IModalProviderSuccessProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <main className={`${isPressed ? styles.hide : styles.success__main}`}>
        <div className={styles.success__container}>
          <img src={Success} className="text-6xl text-gray-300" />
          <div className={styles.flex__title}>
            <h2>{title}</h2>
            <h2>{enterprise_name}</h2>
          </div>
          <div className={styles["success__buttons-container"]}>
            <button
              type="button"
              className={styles.success__btn2}
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              Agregar otro proovedor
            </button>
            <button
              type="submit"
              className={styles.success__btn}
              onClick={() => {
                if (setFieldValue) {
                  setFieldValue("isSecondButton", true);
                }
                setIsPressed(true);
              }}
            >
              Finalizar
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
