import { CreditsRequestsList } from "./List/CreditsRequestsList";

import { useSessionProvider } from "@/hooks/useSessionProvider";

import styles from "../../../MainView.module.css";

//* HOOKS
import { useListCreditsRequestsView } from "./api/useListCreditsRequestsView";
import { GenericFilteredItems } from "@/components/UI/GenericComponents/FilteredItems/GenericFilteredItems";
import { creditsClientsViewFilterObjs } from "@/utils/globalObjs/sideMenuSections/Credits/Filters/CreditsClientsViewObjs";
import { UserView } from "@/components/UI/RoleInfo/UserView/UserView";

export function CreditsRequestsView() {
  const { branchInventory } = useSessionProvider();
  const { listCreditsRequestsView, isLoading } = useListCreditsRequestsView(
    branchInventory.id
  );

  const { filteredItems, query, setQuery } = GenericFilteredItems(
    listCreditsRequestsView,
    creditsClientsViewFilterObjs.CLIENTNAME
  );

  return (
    <>
      <UserView query={query} setQuery={setQuery} />
      <section className={styles.section__module}>
        <CreditsRequestsList
          ClientCredits={filteredItems}
          isLoading={isLoading}
        />
      </section>
    </>
  );
}
