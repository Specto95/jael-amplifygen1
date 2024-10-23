import { useState, lazy, Fragment } from "react";
import { FieldArray } from "formik";

import styles from "../../../../ProviderForm.module.css";

//?SRC IMPORTS

//*ASSETS
import Plus from "@/assets/img/Plus.png";
import PlusBlue from "@/assets/img/PlusBlue.png";

//*LAZY IMPORTS

const AddProductResponsibleForm = lazy(() =>
  import("./Responsible/AddProductResponsibleForm").then((module) => ({
    default: module.AddProductResponsibleForm,
  }))
);
const ModalProviderSuccess = lazy(() =>
  import("@/components/UI/Modals/ModalProvider/ModalProviderSuccess").then(
    (module) => ({
      default: module.ModalProviderSuccess,
    })
  )
);

//* PAGES
import { ProductProviderResponsibleFormData } from "../../../../ProviderFormData";
import { IAddProductResponsibleProps } from "../../../IProviderFormData";

export function AddProductResponsible({
  handleBackStep,
  setFieldValue,
  errors,
  touched,
  responsibles,
  enterprise_name,
  handleBackProviderType,
}: IAddProductResponsibleProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [plusImg, setPlusImg] = useState(PlusBlue);

  const handleMouseEnter = () => {
    setPlusImg(Plus);
  };

  const handleMouseLeave = () => {
    setPlusImg(PlusBlue);
  };

  const handleFinish = () => {
    if (
      errors &&
      Object.keys(errors).some(
        (key) => typeof errors[key as keyof typeof errors] === "object"
      )
    ) {
      return;
    }
    setIsModalOpen(true);
  };

  return (
    <div className={styles["addresponsible-container"]}>
      <h1 className={styles.addresponsible__enterprisename}>
        {enterprise_name}
        <p className={styles.addresponsible__type}>Proovedor de Productos</p>
      </h1>
      <h2 className={styles.heading}>Agregar Encargado</h2>
      <FieldArray
        name="productProviderResponsiblesFormData.responsibles"
        render={(arrayHelpers) => {
          return (
            <>
              <div className={styles["addresponsible__form-container"]}>
                {responsibles && responsibles.length === 0 ? (
                  <button
                    type="button"
                    className={styles.addresponsible__btn}
                    onClick={() =>
                      arrayHelpers.push(ProductProviderResponsibleFormData)
                    }
                  >
                    Agregar responsable 1{" "}
                    <img src={Plus} alt="Agregar responsable" />
                  </button>
                ) : (
                  responsibles &&
                  responsibles.map((_, index) => {
                    return (
                      <Fragment key={index}>
                        <AddProductResponsibleForm
                          index={index}
                          errors={errors}
                          touched={touched}
                        />
                      </Fragment>
                    );
                  })
                )}
              </div>
              {responsibles && responsibles.length >= 1 && (
                <button
                  type="button"
                  className={styles.addresponsible__btn2}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => {
                    arrayHelpers.push(ProductProviderResponsibleFormData);
                  }}
                >
                  Agregar Mas Responsables{" "}
                  <img src={plusImg} alt="Agregar responsable" />
                </button>
              )}

              <div className={styles["providerform__form-buttons"]}>
                <button
                  type="button"
                  onClick={handleBackProviderType}
                  className={styles["serviceProvider__cancel"]}
                >
                  Atras
                </button>
                <button
                  onClick={handleFinish}
                  type="submit"
                  className={styles["serviceProvider__finish"]}
                >
                  Finalizar
                </button>
              </div>
            </>
          );
        }}
      />

      {isModalOpen && (
        <ModalProviderSuccess
          title="Producto agregado correctamente para: "
          enterprise_name={enterprise_name}
          setIsModalOpen={setIsModalOpen}
          setFieldValue={setFieldValue}
        />
      )}
    </div>
  );
}
