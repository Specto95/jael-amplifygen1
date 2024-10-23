import styles from "../../../../../InventoryForm.module.css";

import { IOutcomeInventoryProps } from "@/interfaces/Inventory/inventory";

//* API
import { useListMainOutcomeInventoryProducts } from "../../api/useListMainOutcomeInventoryProducts";

//* HOOKS
import { useSessionProvider } from "@/hooks/useSessionProvider";

//* PAGES
import { OutcomeInventoryColumns } from "./Columns/OutcomeInventoryColumns";
import { handleProductsChecked } from "@/components/UI/GenericComponents/helpers/SideMenuSections/Inventory/functions";
import SectionForm from "@/components/UI/GenericComponents/SectionForm/SectionForm";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";
import { GenericFilteredItems } from "@/components/UI/GenericComponents/FilteredItems/GenericFilteredItems";
import { outcomeInventoryFilterObjs } from "./Filter/OutcomeInventoryFilterObjs";

export function OutcomeInventory({
  handleGoToRegisterType,
  selectedOutcomeData,
  selectedOutcomeRows,
  setSelectedOutcomeRows,
  setSelectedPreviousOutcomeRows,
  selectedPreviousOutcomeRows,
}: IOutcomeInventoryProps) {
  const { mainBranchInventory } = useSessionProvider();
  const { listMainOutcomeInventoryProducts, isLoading } =
    useListMainOutcomeInventoryProducts(mainBranchInventory.inventoryID);

  const { filteredItems, query, setQuery } = GenericFilteredItems(
    listMainOutcomeInventoryProducts,
    outcomeInventoryFilterObjs.NAME
  );

  return (
    <SectionForm
      headingTitle="Nuevo Egreso"
      headingSubtitle="Productos de Inventario"
      hasTopSection={true}
      fullWidthBGSec={true}
      query={query}
      setQuery={setQuery}
      withFiltering={true}
    >
      <ShowTableData
        Data={filteredItems || listMainOutcomeInventoryProducts}
        previousData={selectedPreviousOutcomeRows!}
        setData={setSelectedOutcomeRows}
        selectedData={selectedOutcomeRows}
        setPreviousData={setSelectedPreviousOutcomeRows!}
        Columns={OutcomeInventoryColumns}
        isLoading={isLoading}
        hasBackground={true}
        hasCheckRow={true}
        notFoundDataMessage="No hay productos disponibles"
        withProviderInputCheck={true}
      />
      <div className={styles["providerform__form-buttons"]}>
        <button
          type="button"
          className={styles["serviceProvider__cancel"]}
          onClick={handleGoToRegisterType}
        >
          Atras
        </button>
        <button
          type="submit"
          className="formButton__submitPrimary-blue"
          onClick={() => handleProductsChecked(selectedOutcomeData!)}
        >
          Continuar
        </button>
      </div>
    </SectionForm>
  );
}
