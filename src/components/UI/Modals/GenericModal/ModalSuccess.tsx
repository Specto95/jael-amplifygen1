import { useState } from "react";
import styles from "../ModalSuccess/ModalProductSuccess.module.css";

//* ASSETS
import Success from "@/assets/img/Success.svg";

//* INTERFACES
import { IModalSuccess } from "./interfaces/IModalSuccess";

//* HOOKS
import { useSectionProvider } from "@/hooks/useSectionProvider";

export const ModalSuccess = ({
  title,
  setIsModalOpen,
  sectionName,
}: IModalSuccess) => {
  const { handleBackTo } = useSectionProvider();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <main className={styles.success__main}>
          <div className={styles.success__container}>
            <img src={Success} />
            <h2>{title}</h2>
            <button
              className={styles.success__btn}
              onClick={() => {
                setIsModalOpen(false);
                setIsOpen(false);
                handleBackTo(sectionName);
              }}
            >
              Aceptar
            </button>
          </div>
        </main>
      )}
    </>
  );
};
