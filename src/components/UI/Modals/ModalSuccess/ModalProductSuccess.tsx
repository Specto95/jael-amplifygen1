import { useState } from "react";
import styles from "./ModalProductSuccess.module.css";

//* ASSETS
import Success from "@/assets/img/Success.svg";

//* INTERFACES
import { IModalProductSuccessProps } from "./interfaces/IModalProductSuccess";

//* HOOKS
import { useSectionProvider } from "@/hooks/useSectionProvider";

export const ModalProductSuccess = ({
  title,
  setIsModalOpen,
  backTo,
}: IModalProductSuccessProps) => {
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
                handleBackTo(backTo!);
                setIsModalOpen(false);
                setIsOpen(false);
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
