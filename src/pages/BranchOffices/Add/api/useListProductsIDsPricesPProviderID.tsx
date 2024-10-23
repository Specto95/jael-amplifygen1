import { useState, useEffect } from "react";

//* AMPLIFY IMPORTS
import { listProductsIDsPricesAPI } from "@/graphql/queries";

import { IUseListProductsIDsPricesPProviderIDAPI } from "./interfaces/IUseListProductsIDsPricesPProviderID";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function useListProductsIDsPricesPProviderID() {
  const [
    listProductsIDsPricesPProviderID,
    setListProductsIDsPricesPProviderID,
  ] = useState<IUseListProductsIDsPricesPProviderIDAPI[]>([]);

  useEffect(() => {
    const fetchListProductsIDsPricesPProviderID = async () => {
      try {
        const result: any = await clientAPI(listProductsIDsPricesAPI);

        setListProductsIDsPricesPProviderID(result.data.listProducts.items);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchListProductsIDsPricesPProviderID();
  }, []);

  return {
    listProductsIDsPricesPProviderID,
    setListProductsIDsPricesPProviderID,
  };
}
