import styles from "../../../../../MainView.module.css";

//?SRC IMPORTS

//*COMPONENTS
import { MainIncomeInventoryList } from "./List/MainIncomeInventoryList";

//*HOOKS

import { useSectionProvider } from "@/hooks/useSectionProvider";
import { useListMainIncomesInventoryView } from "../Movements/api/useListMainIncomesInventoryView";
import { mainIncomeInventoryKeysViewFilterObjs } from "./Filters/MainIncomeInventoryViewFiltersObjs";
import { GenericFilteredItems } from "@/components/UI/GenericComponents/FilteredItems/GenericFilteredItems";
import { UserView } from "@/components/UI/RoleInfo/UserView/UserView";

export function MainIncomeInventoryView() {
  const { sectionName } = useSectionProvider();

  const { listMainIncomesInventoryView, isLoading } =
    useListMainIncomesInventoryView();
  const { filteredItems, query, setQuery } = GenericFilteredItems(
    listMainIncomesInventoryView,
    sectionName === "BOInventory-Inventory"
      ? mainIncomeInventoryKeysViewFilterObjs.DATE
      : mainIncomeInventoryKeysViewFilterObjs.OPERATIONTYPE
  );

  return (
    <>
      <UserView query={query} setQuery={setQuery} />
      <section className={styles.section__module}>
        <MainIncomeInventoryList
          MainIncomeInventory={filteredItems}
          isLoading={isLoading}
        />
      </section>
    </>
  );
}
