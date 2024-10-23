import styles from "../../../../../MainView.module.css";

//?SRC IMPORTS

//*COMPONENTS
import { MainInventoryList } from "./List/MainInventoryList";

//*HOOKS
import { useListBranchOfficeInventoryProductsView } from "../../../BranchOffice/SubModules/Inventory/api/useListBranchOfficeInventoryProductsView";
import { useSessionProvider } from "@/hooks/useSessionProvider";
import { GenericFilteredItems } from "@/components/UI/GenericComponents/FilteredItems/GenericFilteredItems";
import { mainInventoryKeysViewFilterObjs } from "./Filters/MainInventoryViewFiltersObjs";
import { UserView } from "@/components/UI/RoleInfo/UserView/UserView";

export function MainInventoryView() {
  const { mainBranchInventory } = useSessionProvider();
  const {
    listBranchOfficeInventoryProductsView,
    setListBranchOfficeInventoryProductsView,
    isLoading,
  } = useListBranchOfficeInventoryProductsView(mainBranchInventory.inventoryID);
  const { filteredItems, query, setQuery } = GenericFilteredItems(
    listBranchOfficeInventoryProductsView,
    mainInventoryKeysViewFilterObjs.NAME
  );

  return (
    <>
      <UserView query={query} setQuery={setQuery} />
      <section className={styles.section__module}>
        {/* <SectionTopOptions setInventory={setInventory} /> */}

        <MainInventoryList
          Inventory={filteredItems}
          setInventory={setListBranchOfficeInventoryProductsView}
          isLoading={isLoading}
        />
      </section>
    </>
  );
}
