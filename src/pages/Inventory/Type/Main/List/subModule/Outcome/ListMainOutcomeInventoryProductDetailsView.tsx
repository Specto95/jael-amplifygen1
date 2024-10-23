import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from "../../../InventoryForm.module.css";

//*COMPONENTS
import { LayoutForm } from "@/components/Layouts/LayoutForm";

//* HOOKS
import { useSectionProvider } from "@/hooks/useSectionProvider";

//* APIs
import { useGetOutcomeInventoryProductDetails } from "./api/useGetOutcomeInventoryProductDetails";

//* PAGES
import { ListMainOutcomeInventoryProductDetailsColumns } from "./Columns/ListMainOutcomeInventoryProductDetailsColumns";
import { ListMainOutcomeInventoryProductInputDetails } from "./ListMainOutcomeInventoryProductInputDetails";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";

export function ListMainOutcomeInventoryProductDetailsView() {
  const { id } = useParams();
  const { handleBackTo, setHasParams } = useSectionProvider();

  const {
    getMainOutcomeInventoryProductData,
    inventoryProductInputDetails,
    isLoading,
  } = useGetOutcomeInventoryProductDetails(id!);

  useEffect(() => {
    setHasParams(true);
  }, []);

  return (
    <LayoutForm>
      <section className={styles.providerform}>
        <ListMainOutcomeInventoryProductInputDetails
          productInputsDetails={inventoryProductInputDetails}
        />

        <ShowTableData
          Data={getMainOutcomeInventoryProductData}
          Columns={ListMainOutcomeInventoryProductDetailsColumns}
          notFoundDataMessage="No se encontraron egresos en este inventario."
          isLoading={isLoading}
          hasBackground={true}
        />

        <div className="flexColumn__fullMY">
          <p className="bold">Comentarios Adicionales Egreso</p>
          <div className={styles["serviceProvider__readInput"]}>
            {inventoryProductInputDetails.comments}
          </div>
        </div>

        <div className={styles["providerform__form-buttons"]}>
          <button
            type="button"
            className="button__primary-bluefit"
            onClick={() => {
              handleBackTo("mainInventory-Outcome");
            }}
          >
            Regresar a Lista
          </button>
        </div>
      </section>
    </LayoutForm>
  );
}
