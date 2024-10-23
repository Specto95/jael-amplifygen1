import { UserView } from "@/components/UI/RoleInfo/UserView/UserView";
import styles from "../../../../MainView.module.css";

// import { GenericFilteredItems } from "@/components/UI/GenericComponents/FilteredItems/GenericFilteredItems";

// //* HOOKS
// import { fieldFiltersObjs } from "@/utils/globalObjs/Filters/fieldFIlters";

//*JSON
// import { useListMainCashViewTableIncomes } from "./api/interfaces/useListMainCashViewTableIncomes";
// import { InventoryListTableSpinner } from "@/components/UI/Spinners/Providers/InventoryListTableSpinner";

export function SettingsCatalogueCategoriesView() {
  //   const { listMainCashTableIncomes, isLoading } =
  //     useListMainCashViewTableIncomes();

  //   const { filteredItems, query, setQuery } = GenericFilteredItems(
  //     listMainCashTableIncomes,
  //     fieldFiltersObjs.NAME as any
  //   );

  return (
    <>
      <UserView />
      <section className={styles.section__module}>
        {/* {isLoading ? <InventoryListTableSpinner /> : <MainCashList CashList={filteredItems} />} */}
      </section>
    </>
  );
}
