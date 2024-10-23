import styles from "../MainView.module.css";

//* APIs
import { useListBranchOfficesView } from "./api/useListBranchOfficesView";
import { BranchOfficesList } from "./BranchOfficesList/BranchOfficesList";
import { GenericFilteredItems } from "../../GenericComponents/FilteredItems/GenericFilteredItems";
import { branchOfficeViewFilterObjs } from "./Filters/BranchOfficeViewFilters";
import { UserView } from "../../RoleInfo/UserView/UserView";

export function BranchOfficesView() {
  const {
    listBranchOfficesView,
    setListBranchOfficesView,
    isLoading,
    setIsLoading,
  } = useListBranchOfficesView();
  const { filteredItems, query, setQuery } = GenericFilteredItems(
    listBranchOfficesView,
    branchOfficeViewFilterObjs.NAME
  );

  return (
    <>
      <UserView query={query} setQuery={setQuery} />
      <section className={styles.section__module}>
        <BranchOfficesList
          listBranchOffices={filteredItems}
          setListBranchOffices={setListBranchOfficesView}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </section>
    </>
  );
}
