import styles from "../../../../../MainView.module.css";

//?SRC IMPORTS

//*COMPONENTS
import { MainOutcomeInventoryList } from "./List/MainOutcomeInventoryList";
import { SectionTopOptions } from "../../../../../../SectionTopOptions/SectionTopOptions";

import { useSectionProvider } from "@/hooks/useSectionProvider";

import { GenericFilteredItems } from "@/components/UI/GenericComponents/FilteredItems/GenericFilteredItems";

//*HOOKS
import { useListMainOutcomesInventoryView } from "./api/useListMainOutcomesInventoryView";
import { mainIncomeInventoryKeysViewFilterObjs } from "../Income/Filters/MainIncomeInventoryViewFiltersObjs";

export function MainOutcomeInventoryView() {
  const { sectionName } = useSectionProvider();
  const { listMainOutcomesInventoryView, isLoading } =
    useListMainOutcomesInventoryView();
  const { filteredItems, query, setQuery } = GenericFilteredItems(
    listMainOutcomesInventoryView,
    sectionName === "BOInventory-Inventory"
      ? mainIncomeInventoryKeysViewFilterObjs.DATE
      : mainIncomeInventoryKeysViewFilterObjs.OPERATIONTYPE
  );

  return (
    <main className={styles.main}>
      <SectionTopOptions query={query} setQuery={setQuery} />

      <MainOutcomeInventoryList
        MainOutcomeInventory={filteredItems}
        isLoading={isLoading}
      />
    </main>
  );
}
