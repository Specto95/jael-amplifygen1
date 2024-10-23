import styles from "../MainView.module.css";

//* APIs
import { AccountList } from "./AccountList/AccountList";

import { useListAccountsView } from "./api/useListAccountsView";
import { GenericFilteredItems } from "../../GenericComponents/FilteredItems/GenericFilteredItems";
import { accountViewFilterObjs } from "@/utils/globalObjs/sideMenuSections/Account/Filters/AccountViewObjs";
import { UserView } from "../../RoleInfo/UserView/UserView";

export function AccountView() {
  const { accountViewData, isLoading } = useListAccountsView();
  const { filteredItems, query, setQuery } = GenericFilteredItems(
    accountViewData,
    accountViewFilterObjs.USERNAME
  );

  return (
    <>
      <UserView query={query} setQuery={setQuery} />
      <section className={styles.section__module}>
        <AccountList listAccounts={filteredItems} isLoading={isLoading} />
      </section>
    </>
  );
}
