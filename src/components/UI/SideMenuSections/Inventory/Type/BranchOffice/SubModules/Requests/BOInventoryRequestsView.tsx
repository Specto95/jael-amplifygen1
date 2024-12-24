import styles from "../../../../../MainView.module.css";

//?SRC IMPORTS

//*HOOKS
import { useListBOInventoryRequests } from "./api/useListBOInventoryRequests";
import { GenericFilteredItems } from "@/components/UI/GenericComponents/FilteredItems/GenericFilteredItems";
import { MainInventoryRequestsList } from "./List/MainInventoryRequestsList";
import { UserView } from "@/components/UI/RoleInfo/UserView/UserView";

import { useSessionProvider } from "@/hooks/useSessionProvider";
import { IOInventoryStatus } from "@/API";

export function BOInventoryRequestsView() {
  const { branchInventory } = useSessionProvider();
  const { listBOInventoryRequests, isLoading } = useListBOInventoryRequests(
    branchInventory.id
  );
  const { filteredItems, query, setQuery } = GenericFilteredItems(
    listBOInventoryRequests,
    "status"
  );

  return (
    <main className={styles.main}>
      <UserView query={query} setQuery={setQuery} />

      <section className={styles.section__module}>
        <MainInventoryRequestsList
          BOInventoryRequests={filteredItems}
          isLoading={isLoading}
        />
      </section>
    </main>
  );
}
