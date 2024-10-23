import { useState } from "react";
import styles from "../../ModalSuccess/ModalProductSuccess.module.css";

//* INTERFACES
import { IModalProductDetailsProps } from "./interfaces/IModalProductDetails";
import { formatKey } from "../../../../../utils/helpers";

export function ModalProductDetails({
  pro,
  setIsModalOpen,
  handleSelectedData,
}: IModalProductDetailsProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <main className={`${isPressed ? styles.hide : styles.success__main}`}>
        <div className={styles.productDetail__container}>
          <h1 className="heading__main">
            ID de Producto - {formatKey(pro.id)}
          </h1>
          <div className="flex__spacing3NoAI">
            <div className="flexColumn__spacingNoJC">
              <div className="flex__spacing">
                <h3 className="label__minW100">Nombre </h3>
                <p className="input__min300TLRoundedSMB4">{pro.name}</p>
              </div>
              <div className="flex__spacing">
                <h3 className="label__minW100">Precio </h3>
                <p className="input__min300TLRoundedSMB4">{pro.price}</p>
              </div>
              <div className="flex__spacing">
                <h3 className="label__minW100">Descripción </h3>
                <p className="input__min300TLRoundedSMB4">{pro.description}</p>
              </div>
              <div className="flex__spacing">
                <h3 className="label__minW100">Descuento </h3>
                <p
                  className={`input__min300TLRoundedSMB4 ${
                    pro.hasDiscount ? "successEmerald" : "error bold"
                  }`}
                >
                  {pro.hasDiscount ? "Aplica" : "No aplica"}
                </p>
              </div>
              <div className="flex__spacing">
                <h3 className="label__minW100">Existencia </h3>
                <p
                  className={`input__min300TLRoundedSMB4 ${
                    pro.quantity === 0 && "error bold"
                  }`}
                >
                  {pro.quantity === 0 ? "Agotado" : pro.quantity}
                </p>
              </div>
            </div>

            <div className="flexColumn__spacingNoJC">
              <div className={styles.productDetail__withPhoto}></div>
              <p>Previsualización de la Imagen</p>
            </div>
          </div>
          <div className="flex__endMY">
            <button
              type="button"
              className="button__secondaryFitXS"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              Cerrar
            </button>
            <button
              type="button"
              className="button__primary-bluefit"
              onClick={() => {
                setIsModalOpen(false);
                handleSelectedData();
              }}
              disabled={pro.quantity === 0}
            >
              {pro.quantity === 0 ? "Agotado" : "Agregar al Carrito"}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
