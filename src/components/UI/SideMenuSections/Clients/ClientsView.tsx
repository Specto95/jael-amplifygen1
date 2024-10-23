import { useState, useEffect } from "react";

import styles from "../MainView.module.css";

import { ClientsList } from "./List/ClientsList";

//* HOOKS
import { useSessionProvider } from "@/hooks/useSessionProvider";
import { AccountFormObj } from "@/pages/Account/utils/AccountFormObj";

//* INTERFACES
import { IListClientsViewByBranchOfficeIDAPI } from "./api/ADMIN/interfaces/IUseListAllClientsView";
import { GenericFilteredItems } from "../../GenericComponents/FilteredItems/GenericFilteredItems";
import { ClientsViewFilterObjs } from "./Filters/ClientsViewFilter";
import { UserView } from "../../RoleInfo/UserView/UserView";

export function ClientsView() {
  const [listClientsView, setListClientsView] = useState<
    IListClientsViewByBranchOfficeIDAPI[]
  >([]);

  const { branchInventory, rolID } = useSessionProvider();
  const { filteredItems, query, setQuery } = GenericFilteredItems(
    listClientsView,
    ClientsViewFilterObjs.CLIENTNAME
  );

  useEffect(() => {
    const fetchClientsListView = async () => {
      if (rolID === AccountFormObj.BRANCHMANAGER) {
        const { useListClientsViewByBranchOfficeID } = await import(
          "./api/BranchManagers/useListClientsViewByBranchOfficeID"
        );

        const branchManagerClientsViewResult =
          await useListClientsViewByBranchOfficeID(branchInventory.id);
        setListClientsView(branchManagerClientsViewResult!);
      }
      if (rolID === AccountFormObj.ADMIN) {
        const { useListAllClientsView } = await import(
          "./api/ADMIN/useListAllClientsView"
        );

        const adminClientsViewResult = await useListAllClientsView();
        setListClientsView(adminClientsViewResult!);
      }
    };
    fetchClientsListView();
  }, [rolID]);

  return (
    <>
      <UserView query={query} setQuery={setQuery} />
      <section className={styles.section__module}>
        <ClientsList Clients={filteredItems} />
      </section>
    </>
  );
}
