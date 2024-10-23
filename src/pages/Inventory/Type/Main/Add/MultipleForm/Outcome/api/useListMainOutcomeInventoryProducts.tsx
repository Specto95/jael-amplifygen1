import { useState, useEffect } from "react";

import {
  IUseListMainOutcomeInventoryProductsAPI,
  IUseListMainOutcomeInventoryProductsAPIResponse,
} from "./interfaces/IUseListMainOutcomeInventoryProducts";

//* AMPLIFY IMPORTS
import { clientAPI } from "@/utils/amplifyAPI/client";
import { listMainOutcomeInventoryProductsAPI } from "@/graphql/queries";

export function useListMainOutcomeInventoryProducts(inventoryID: string) {
  const [
    listMainOutcomeInventoryProducts,
    setListMainOutcomeInventoryProducts,
  ] = useState<IUseListMainOutcomeInventoryProductsAPI[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchListMainOutcomeInventoryProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result: any = await clientAPI(
          listMainOutcomeInventoryProductsAPI,
          {
            inventoryID,
          }
        );
        const listMainOutcomeInventoryProducts: IUseListMainOutcomeInventoryProductsAPI[] =
          result.data.inventoryProductsByInventoryIDAndId.items.map(
            (item: IUseListMainOutcomeInventoryProductsAPIResponse) => {
              return {
                inventoryProductID: item.id,
                id: item.product.id,
                name: item.product.name,
                price: item.product.price,
                quantity: item.quantity,
              };
            }
          );

        setListMainOutcomeInventoryProducts(listMainOutcomeInventoryProducts);
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListMainOutcomeInventoryProducts();
  }, [inventoryID]);

  return {
    listMainOutcomeInventoryProducts,
    setListMainOutcomeInventoryProducts,
    isLoading,
  };
}
