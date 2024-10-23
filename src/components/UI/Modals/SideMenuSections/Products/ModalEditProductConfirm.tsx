import styles from "../../ModalSuccess/ModalProductSuccess.module.css";

//* INTERFACES
import { IModalEditProductConfirmProps } from "./interfaces/IModalEditProductConfirm";

export const ModalEditProductConfirm = ({
  setIsModalOpen,
  setIsConfirming,
  setIsPressed,
  pro,
  newCustomPrice,
  handleSubmit,
}: IModalEditProductConfirmProps) => {
  return (
    <main className={styles.success__main}>
      <div className={styles.success__container}>
        <h3 className="light">
          Confirmar precio de <br />
          <span className="bold center20">{newCustomPrice}</span>
          <br />
          <span className="bold">{pro.productName.toUpperCase()}</span> para
          Sucursal
          <br />
          <span className="bold center20">
            {pro.branchOfficeName.toUpperCase()}
          </span>
        </h3>
        <div className="flex__spacing">
          <button
            type="button"
            className="button__secondary-cancel"
            onClick={() => {
              setIsConfirming(false);
              setIsPressed(false);
              setIsModalOpen(true);
            }}
          >
            Cancelar
          </button>
          <button
            type="button"
            className="button__primary-blueXS"
            onClick={() => {
              setIsModalOpen(false);
              handleSubmit!();
            }}
          >
            Aceptar
          </button>
        </div>
      </div>
    </main>
  );
};
