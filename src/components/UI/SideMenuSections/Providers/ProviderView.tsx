import styles from "../MainView.module.css";

import { SectionTopOptions } from "../../SectionTopOptions/SectionTopOptions";
import { ProviderList } from "./List/ProviderList";
import { useListProvidersView } from "./api/useListProvidersView";
import { GenericFilteredItems } from "../../GenericComponents/FilteredItems/GenericFilteredItems";
import { providerViewFilterObjs } from "./Filters/ProviderViewFiltersObjs";
import { UserView } from "../../RoleInfo/UserView/UserView";

//?SRC IMPORTS

export function ProviderView() {
  const { listProvidersView, setListProvidersView, isLoading } =
    useListProvidersView();
  const { filteredItems, query, setQuery } = GenericFilteredItems(
    listProvidersView,
    providerViewFilterObjs.ENTERPRISE_NAME
  );
  return (
    <>
      <UserView query={query} setQuery={setQuery} />
      <section className={styles.section__module}>
        <ProviderList
          Providers={filteredItems}
          setProviders={setListProvidersView}
          isLoading={isLoading}
        />
      </section>
    </>
  );
}
