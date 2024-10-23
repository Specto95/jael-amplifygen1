import { useState, useMemo, useEffect } from "react";
import { Column, useSortBy, useTable } from "react-table";
import { useParams } from "react-router-dom";

import ArrowDown from "@/assets/img/ArrowDown.png";

import styles from "../../../InventoryForm.module.css";

//*COMPONENTS
import { LayoutForm } from "@/components/Layouts/LayoutForm";

//* HOOKS
import { useSectionProvider } from "@/hooks/useSectionProvider";

//* APIs
import { useGetIncomeInventoryProductDetails } from "./api/useGetIncomeInventoryProductDetails";

//* PAGES
import { ListMainIncomeInventoryProductDetailsColumns } from "./Columns/ListMainIncomeInventoryProductDetailsColumns";
import { ListMainIncomeInventoryProductInputDetails } from "./ListMainIncomeInventoryProductInputDetails";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";

export function ListMainIncomeInventoryProductDetailsView() {
  const { id } = useParams();
  const { handleBackTo, setHasParams } = useSectionProvider();
  const [hovered, setHovered] = useState<boolean>(false);

  const {
    getMainIncomeInventoryProductData,
    inventoryProductInputDetails,
    isLoading,
  } = useGetIncomeInventoryProductDetails(id!);
  useEffect(() => {
    setHasParams(true);
  }, []);

  return (
    <LayoutForm>
      <section className={styles.providerform}>
        <ListMainIncomeInventoryProductInputDetails
          productInputsDetails={inventoryProductInputDetails}
        />

        <ShowTableData
          Data={getMainIncomeInventoryProductData}
          Columns={ListMainIncomeInventoryProductDetailsColumns}
          notFoundDataMessage="No se encontraron ingresos de este producto"
          hasBackground={true}
          isLoading={isLoading}
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
              handleBackTo("mainInventory-Movements");
            }}
          >
            Regresar a Lista
          </button>
        </div>
      </section>
    </LayoutForm>
  );
}
