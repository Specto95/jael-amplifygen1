import { useEffect, useState } from "react";

import styles from "../../UpdateProvider.module.css";

//*COMPONENTS
import { LayoutForm } from "@/components/Layouts/LayoutForm";
import { UpdateProviderInfoSpinner } from "@/components/UI/Spinners/Providers/Update/UpdateProviderInfoSpinner";

//* INTERFACES
import { IListProviderInfoProps } from "@/interfaces/Providers/providers";

//* HOOKS
import { useSectionProvider } from "@/hooks/useSectionProvider";

//* PAGES
import { ListEnterpriseData } from "./ListEnterpriseData";
import { ListResponsibles } from "./ListResponsibles";
import { ListProviderProducts } from "./ListProviderProducts";

export function ListProviderInfo({
  setIsEditing,
  productData,
  enterpriseData,
  responsibleData,
}: IListProviderInfoProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { handleBack, setSectionName } = useSectionProvider();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <LayoutForm>
        <section className={styles.updateProvider__container}>
          <h1 className="heading__primary">Información del Proveedor</h1>
          <h2 className="heading__secondary">Datos de empresa</h2>

          {isLoading ? (
            <UpdateProviderInfoSpinner />
          ) : (
            <>
              <ListEnterpriseData enterpriseData={enterpriseData} />

              <ListResponsibles responsibleData={responsibleData} />

              <ListProviderProducts productData={productData} />

              <div className={styles["providerform__form-buttons"]}>
                <button
                  type="button"
                  className={styles["serviceProvider__cancel"]}
                  onClick={() => {
                    setSectionName("providers");
                    handleBack();
                  }}
                >
                  Atras
                </button>
                <button
                  type="button"
                  className={styles["serviceProvider__next"]}
                  onClick={() => setIsEditing(true)}
                >
                  Editar
                </button>
              </div>
            </>
          )}
        </section>
      </LayoutForm>
    </>
  );
}
