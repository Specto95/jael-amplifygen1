import styles from "../../../../../InventoryForm.module.css";

//* INTERFACES
import { IIncomeInventoryProps } from "@/interfaces/Inventory/inventory";

//* API
import { useListMainProductsByProductProviderID } from "./api/useListMainProductsByProductProviderID";

//* HOOKS
import { useSessionProvider } from "@/hooks/useSessionProvider";

//* PAGES
import { IncomeInventoryColumns } from "../../Columns/IncomeInventoryColumns";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";
import SectionForm from "@/components/UI/GenericComponents/SectionForm/SectionForm";

import { handleProductsChecked } from "@/components/UI/GenericComponents/helpers/SideMenuSections/Inventory/functions";
import { GenericFilteredItems } from "@/components/UI/GenericComponents/FilteredItems/GenericFilteredItems";
import { outcomeInventoryFilterObjs } from "../../../Outcome/Steps/One/Filter/OutcomeInventoryFilterObjs";

export function IncomeInventory({
  handleBackStep,
  selectedIncomeRows,
  setSelectedIncomeRows,
  setSelectedPreviousIncomeRows,
  selectedProvider,
}: IIncomeInventoryProps) {
  const { mainBranchInventory } = useSessionProvider();
  const { listProductProviderProductsByProductProviderID, isLoading } =
    useListMainProductsByProductProviderID(
      selectedProvider?.productProviderID!,
      mainBranchInventory.inventoryID
    );

  const { filteredItems, query, setQuery } = GenericFilteredItems(
    listProductProviderProductsByProductProviderID,
    outcomeInventoryFilterObjs.NAME
  );

  return (
    <SectionForm
      headingTitle="Nuevo Ingreso"
      headingSubtitle="Productos de Catálogo"
      hasTopSection={true}
      fullWidthBGSec={true}
      query={query}
      setQuery={setQuery}
      withFiltering={true}
    >
      <ShowTableData
        Data={filteredItems || listProductProviderProductsByProductProviderID}
        setData={setSelectedIncomeRows}
        selectedData={selectedIncomeRows}
        setPreviousData={setSelectedPreviousIncomeRows!}
        Columns={IncomeInventoryColumns}
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
          onClick={handleBackStep}
        >
          Atras
        </button>
        <button
          type="submit"
          className="button__secondary"
          onClick={() => handleProductsChecked(selectedIncomeRows!)}
        >
          Continuar
        </button>
      </div>
    </SectionForm>
  );
}
