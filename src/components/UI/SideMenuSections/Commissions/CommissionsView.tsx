import styles from "../MainView.module.css";

//* APIs
import { useListCommissionsView } from "./api/useListCommissionsView";

//* COMPONENTS
import { CommissionsList } from "./CommissionsList/CommissionsList";
import { GenericFilteredItems } from "../../GenericComponents/FilteredItems/GenericFilteredItems";
import { CommissionsViewFilterObjs } from "./Filters/CommissionsViewFilterObjs";
import { UserView } from "../../RoleInfo/UserView/UserView";

export function CommissionsView() {
  const { listCommissionsView, setListCommissionsView, isLoading } =
    useListCommissionsView();
  const { filteredItems, query, setQuery } = GenericFilteredItems(
    listCommissionsView,
    CommissionsViewFilterObjs.NAME
  );

  return (
    <>
      <UserView query={query} setQuery={setQuery} />
      <section className={styles.section__module}>
        <CommissionsList
          listCommissions={filteredItems}
          setListCommissions={setListCommissionsView}
          isLoading={isLoading}
        />
      </section>
    </>
  );
}
