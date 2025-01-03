import { useEffect, useState } from "react";

import { IListProductViewAPI } from "./interfaces/IUseListProductsView";

//* AMPLIFY IMPORTS
import { listProductsViewAPI } from "@/graphql/queries";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function useListProductsView() {
  const [listProductsView, setListProductsView] = useState<
    IListProductViewAPI[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchProductsView = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result: any = await clientAPI(listProductsViewAPI);

        setListProductsView(result.data?.listProducts.items);
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductsView();
  }, []);

  return { listProductsView, setListProductsView, isLoading };
}
