import { useState, lazy } from "react";
import { Form, Formik } from "formik";

import styles from "../../UpdateProvider.module.css";

//*COMPONENTS
import { LayoutForm } from "@/components/Layouts/LayoutForm";

const ModalProviderSuccess = lazy(() =>
  import("@/components/UI/Modals/ModalProvider/ModalProviderSuccess").then(
    (module) => ({
      default: module.ModalProviderSuccess,
    })
  )
);

//* INTERFACES
import { IUpdateProviderInfoProps } from "@/interfaces/Providers/providers";

//* HOOKS
import { useSectionProvider } from "@/hooks/useSectionProvider";

//* PAGES
import { EditEnterpriseData } from "./EditEnterpriseData";
import { EditResponsibles } from "./EditResponsibles";
import { EditProviderProducts } from "./EditProviderProducts";
import { UpdateProviderGeneralFormData } from "../../UpdateProviderData";

export function EditProviderInfo({
  setIsEditing,
  id,
  provider,
  setUpdateProductsData,
  setUpdateResponsiblesData,
  updateProductsData,
  updateResponsiblesData,
}: IUpdateProviderInfoProps) {
  const { handleBack, setSectionName } = useSectionProvider();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Formik
        initialValues={provider! || UpdateProviderGeneralFormData}
        onSubmit={async (values) => {
          if (values.isSecondButton) {
          }
        }}
        enableReinitialize
      >
        {({
          touched,
          errors,
          handleSubmit,
          values,
          setFieldValue,
          getFieldProps,
        }) => (
          <LayoutForm>
            <Form
              className={styles.updateProvider__container}
              onSubmit={handleSubmit}
            >
              <h1 className="heading__primary">Información del Proveedor</h1>
              <h2 className="heading__secondary">Datos de empresa</h2>

              <EditEnterpriseData />

              <EditResponsibles
                updateResponsiblesData={updateResponsiblesData}
                setUpdateResponsiblesData={setUpdateResponsiblesData}
              />

              <EditProviderProducts
                updateProductsData={updateProductsData}
                setUpdateProductsData={setUpdateProductsData}
              />

              <div className={styles["providerform__form-buttons"]}>
                <button
                  type="button"
                  className={styles["serviceProvider__cancel"]}
                  onClick={() => setIsEditing(false)}
                >
                  Atras
                </button>
                <button
                  type="submit"
                  className={styles["serviceProvider__next"]}
                  onClick={() => {
                    setIsEditing(false);
                    setFieldValue("isSecondButton", true);
                  }}
                >
                  Guardar
                </button>
              </div>
            </Form>
          </LayoutForm>
        )}
      </Formik>
      {/* {isModalOpen && (
        <ModalProviderSuccess
          title="Producto agregado correctamente para: "
          // enterprise_name={values}
          // setIsModalOpen={setIsModalOpen}
          // setFieldValue={setFieldValue}
        />
      )} */}
    </>
  );
}
