import styles from "../../../MainView.module.css";

import { GenericFilteredItems } from "@/components/UI/GenericComponents/FilteredItems/GenericFilteredItems";

import { SectionTopOptions } from "@/components/UI/SectionTopOptions/SectionTopOptions";
import { MainCashList } from "./CashList/MainCashList";

//* HOOKS
import { fieldFiltersObjs } from "@/utils/globalObjs/Filters/fieldFIlters";

//*JSON
import { useListMainCashViewTableIncomes } from "./api/interfaces/useListMainCashViewTableIncomes";
import { InventoryListTableSpinner } from "@/components/UI/Spinners/Providers/InventoryListTableSpinner";
import { UserView } from "@/components/UI/RoleInfo/UserView/UserView";

export function MainCashView() {
  const { listMainCashTableIncomes, isLoading } =
    useListMainCashViewTableIncomes();

  const { filteredItems, query, setQuery } = GenericFilteredItems(
    listMainCashTableIncomes,
    fieldFiltersObjs.NAME as any
  );

  return (
    <>
      <UserView query={query} setQuery={setQuery} />
      <section className={styles.section__module}>
        {isLoading ? (
          <InventoryListTableSpinner />
        ) : (
          <MainCashList CashList={filteredItems} />
        )}
      </section>
    </>
  );
}
