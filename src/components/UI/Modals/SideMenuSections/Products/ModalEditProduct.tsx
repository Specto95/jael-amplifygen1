import { useState, lazy } from "react";

import { Formik, Form } from "formik";

import styles from "../../ModalSuccess/ModalProductSuccess.module.css";
import styles2 from "./ModalEditProduct.module.css";

//* ASSETS
import BackView from "@/assets/img/BackView.png";

//* INTERFACES
import { IUpdateInventoryProductCustomPriceInput } from "./interfaces/Input/updateBranchOfficeProductInput";
import { IModalEditProductProps } from "./interfaces/IModalEditProduct";
import { formatKey } from "@/utils/helpers";
import { validateUpdateProductPriceSchema } from "./Form/initialValues/UpdateProductPriceSchema";

import { useSectionProvider } from "@/hooks/useSectionProvider";

//* LAZY COMPONENTS
const ModalEditProductConfirm = lazy(() =>
  import("./ModalEditProductConfirm").then((module) => ({
    default: module.ModalEditProductConfirm,
  }))
);

export function ModalEditProduct({
  pro,
  setIsModalOpen,
}: IModalEditProductProps) {
  const [isPressed, setIsPressed] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);

  const { handleBackTo } = useSectionProvider();

  return (
    <>
      <Formik
        initialValues={{ ...pro }}
        validationSchema={validateUpdateProductPriceSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            const { updateInventoryProductCustomPriceAPI } = await import(
              "@/graphql/mutations"
            );
            const { clientAPI } = await import("@/utils/amplifyAPI/client");

            const updateInventoryProductCustomPriceInput: IUpdateInventoryProductCustomPriceInput =
              {
                id: pro.id,
                customPrice: values.customPrice,
              };

            const updateInventoryProductCustomPriceResult = await clientAPI(
              updateInventoryProductCustomPriceAPI,
              updateInventoryProductCustomPriceInput,
              true
            );

            console.log(updateInventoryProductCustomPriceResult);

            handleBackTo("productsCatalogue");
          } catch (e) {
            console.error(e);
          }
        }}
        enableReinitialize
      >
        {({ errors, touched, handleSubmit, setFieldValue, values }) => (
          <Form autoComplete={"off"}>
            {isConfirming && (
              <ModalEditProductConfirm
                pro={{ ...pro }}
                newCustomPrice={values.customPrice}
                setFieldValue={setFieldValue}
                setIsConfirming={setIsConfirming}
                setIsModalOpen={setIsModalOpen}
                setIsPressed={setIsPressed}
                handleSubmit={handleSubmit}
              />
            )}
            <main
              className={`${isPressed ? styles.hide : styles.success__main}`}
            >
              <div className={styles.productDetail__container}>
                <div className="flex__spacing-between">
                  <img
                    src={BackView}
                    alt="Regresar"
                    className={styles2.ModalEditProduct__back}
                    onClick={() => setIsModalOpen(false)}
                  />
                  <h1 className="heading__main">
                    Editar Producto - {formatKey(pro.productID)}
                  </h1>
                </div>

                <div className="flex__spacing3NoAI">
                  <div className="flexColumn__spacingNoJC">
                    <div className="flex__spacing">
                      <h3 className="label__minW100">Nombre </h3>
                      <p className="text__min300SM">{pro.productName}</p>
                    </div>

                    <div className="flex__spacing">
                      <h3 className="label__minW100">Sucursal </h3>
                      <p className="text__min300SM">{pro.branchOfficeName}</p>
                    </div>

                    <div className="flex__spacing">
                      <label htmlFor="customPrice" className="label__minW100">
                        Precio{" "}
                      </label>
                      <input
                        type="number"
                        id="customPrice"
                        name="customPrice"
                        className="input__min300TLRoundedSMB4"
                        defaultValue={pro.customPrice}
                        onChange={(e) => {
                          setFieldValue("customPrice", e.target.value);
                        }}
                      />
                    </div>
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
                    Cancelar
                  </button>
                  <button
                    type="button"
                    className="button__primary-bluefit"
                    onClick={() => {
                      // setIsModalOpen(false);
                      setIsConfirming(true);
                      setIsPressed(true);
                    }}
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </main>
          </Form>
        )}
      </Formik>
    </>
  );
}
