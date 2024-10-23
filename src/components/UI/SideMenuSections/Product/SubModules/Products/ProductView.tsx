import { useState } from "react";

import styles from "../../../MainView.module.css";

import { ProductList } from "./ViewType/ProductList/ProductList";
import { ProductImages } from "./ViewType/ProductImages/ProductImages";

//?SRC IMPORTS

//* APIs
import { useListProductsView } from "./api/useListProductsView";
import { GenericFilteredItems } from "@/components/UI/GenericComponents/FilteredItems/GenericFilteredItems";
import { productViewFilterObjs } from "./Filters/ProductViewFiltersObjs";
import { UserView } from "@/components/UI/RoleInfo/UserView/UserView";

export function ProductView() {
  const { listProductsView, setListProductsView, isLoading } =
    useListProductsView();

  const [viewType, setViewType] = useState("view");

  const { filteredItems, query, setQuery } = GenericFilteredItems(
    listProductsView,
    productViewFilterObjs.NAME
  );

  return (
    <>
      <UserView setViewType={setViewType} query={query} setQuery={setQuery} />
      <section className={styles.section__module}>

        {viewType === "list" ? (
          <ProductList
            Products={filteredItems}
            setProducts={setListProductsView}
          />
        ) : (
          <ProductImages
            listProductsViewData={filteredItems}
            isLoading={isLoading}
          />
        )}
      </section>
    </>
  );
}
