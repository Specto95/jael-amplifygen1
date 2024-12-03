import styles from "../../../../../MainView.module.css";

//?SRC IMPORTS

//*COMPONENTS
// import { MainIncomeInventoryList } from "./List/MainIncomeInventoryList";
// import { SectionTopOptions } from "../../../../../../SectionTopOptions/SectionTopOptions";

//*HOOKS
import { useListMainInventoryRequests } from "./api/useListMainInventoryRequests";
// import { mainIncomeInventoryKeysViewFilterObjs } from "./Filters/MainIncomeInventoryViewFiltersObjs";
import { GenericFilteredItems } from "@/components/UI/GenericComponents/FilteredItems/GenericFilteredItems";
import { MainInventoryRequestsList } from "./List/MainInventoryRequestsList";
import { UserView } from "@/components/UI/RoleInfo/UserView/UserView";

export function MainInventoryRequestsView() {
  const { listMainInventoryRequests, isLoading } =
    useListMainInventoryRequests();
  const { filteredItems, query, setQuery } = GenericFilteredItems(
    listMainInventoryRequests,
    "status"
  );

  return (
    <main className={styles.main}>
      <UserView query={query} setQuery={setQuery} />

      <section className={styles.section__module}>
        <MainInventoryRequestsList
          MainInventoryRequests={filteredItems}
          isLoading={isLoading}
        />
      </section>
    </main>
  );
}
