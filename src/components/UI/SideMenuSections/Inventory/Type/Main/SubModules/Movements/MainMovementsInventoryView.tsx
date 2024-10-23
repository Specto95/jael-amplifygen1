import styles from "../../../../../MainView.module.css";


//?SRC IMPORTS

//*COMPONENTS
import { MainIncomeInventoryList } from "./List/MainIncomeInventoryList";
import { SectionTopOptions } from "../../../../../../SectionTopOptions/SectionTopOptions";

//*HOOKS
import { useListMainIncomesInventoryView } from "./api/useListMainIncomesInventoryView";
import { mainIncomeInventoryKeysViewFilterObjs } from "./Filters/MainIncomeInventoryViewFiltersObjs";
import { GenericFilteredItems } from "@/components/UI/GenericComponents/FilteredItems/GenericFilteredItems";

export function MainMovementsInventoryView() {
  const { listMainIncomesInventoryView, isLoading } =
    useListMainIncomesInventoryView();
  const { filteredItems, query, setQuery } = GenericFilteredItems(
    listMainIncomesInventoryView,
    mainIncomeInventoryKeysViewFilterObjs.DATE
  );

  return (
    <main className={styles.main}>
      <SectionTopOptions query={query} setQuery={setQuery} />

      <MainIncomeInventoryList
        MainIncomeInventory={filteredItems}
        isLoading={isLoading}
      />
    </main>
  );
}
