import styles from "../../../BOInventoryForm.module.css";

//* INTERFACES
import { IBOIncomeInventoryProps } from "@/interfaces/Inventory/inventory";

//* API
import { useListProductsByProductProviderID } from "./api/hooks/useListProductsByProductProviderID";

//* HOOKS
import { useSessionProvider } from "@/hooks/useSessionProvider";

//* PAGES
import { IncomeInventoryColumns } from "../../Columns/IncomeInventoryColumns";
import SectionForm from "@/components/UI/GenericComponents/SectionForm/SectionForm";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";

import { handleProductsChecked } from "@/components/UI/GenericComponents/helpers/SideMenuSections/Inventory/functions";
import { GenericFilteredItems } from "@/components/UI/GenericComponents/FilteredItems/GenericFilteredItems";
import { outcomeInventoryFilterObjs } from "@/pages/Inventory/Type/Main/Add/MultipleForm/Outcome/Steps/One/Filter/OutcomeInventoryFilterObjs";
import { useListAvailableProducts } from "./api/hooks/useListAvailableProducts";

export function BOIncomeInventory({
  handleBackStep,
  selectedIncomeRows,
  setSelectedIncomeRows,
  setSelectedPreviousIncomeRows,
  selectedProvider,
  setSelectedMainProductsDetails,
}: IBOIncomeInventoryProps) {
  const { branchInventory, mainBranchInventory } = useSessionProvider();
  const { listAvailableProducts, isLoading } = useListAvailableProducts(
    mainBranchInventory.inventoryID,
    branchInventory.inventoryID
  );
  const {
    listProductProviderProductsByProductProviderID:
      listSelectedMainProductsDetailsByProductProviderID,
  } = useListProductsByProductProviderID(
    selectedProvider?.productProviderID!,
    mainBranchInventory.inventoryID
  );

  const { filteredItems, query, setQuery } = GenericFilteredItems(
    branchInventory.id
      ? listAvailableProducts
      : listSelectedMainProductsDetailsByProductProviderID,
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
        Data={filteredItems}
        setData={setSelectedIncomeRows}
        selectedData={selectedIncomeRows}
        setPreviousData={setSelectedPreviousIncomeRows!}
        Columns={IncomeInventoryColumns}
        isLoading={isLoading}
        hasBackground={true}
        hasCheckRow={true}
        notFoundDataMessage="No hay productos disponibles"
        withProviderInputCheck={true}
        listSelectedMainProductsDetails={
          listSelectedMainProductsDetailsByProductProviderID
        }
        setSelectedMainProductsDetails={setSelectedMainProductsDetails}
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
