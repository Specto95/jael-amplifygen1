import styles from "../MainView.module.css";

import { useListSalesView } from "./api/useListSalesView";

//?SRC IMPORTS

//*HOOKS
import { useSessionProvider } from "@/hooks/useSessionProvider";

//*COMPONENTS
import { SalesList } from "./List/SalesList";
import { SectionTopOptions } from "../../SectionTopOptions/SectionTopOptions";
import { AccountFormObj } from "@/pages/Account/utils/AccountFormObj";
import { GenericFilteredItems } from "../../GenericComponents/FilteredItems/GenericFilteredItems";
import { salesViewFilterObjs } from "./Filters/SalesViewFiltersObjs";
import { UserView } from "../../RoleInfo/UserView/UserView";

export function SalesView() {
  const { branchInventory, mainBranchInventory, rolID } = useSessionProvider();
  const { listSalesView, setListSalesView, isLoading } = useListSalesView(
    rolID === AccountFormObj.ADMIN ? mainBranchInventory.id : branchInventory.id
  );

  const { filteredItems, query, setQuery } = GenericFilteredItems(
    listSalesView,
    salesViewFilterObjs.CLIENT
  );

  return (
    <>
      <UserView query={query} setQuery={setQuery} />
      <section className={styles.section__module}>
        <SalesList
          Sales={filteredItems}
          setSales={setListSalesView}
          isLoading={isLoading}
        />
      </section>
    </>
  );
}
