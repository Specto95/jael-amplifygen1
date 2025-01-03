import { useState, useEffect } from "react";

import {
  IListProductProviderProductsByProductProviderIDAPI,
  IListProductProviderProductsByProductProviderIDAPIResponse,
} from "./interfaces/IUseListProductProviderProductsByProductProviderID";

//* AMPLIFY IMPORTS
import { clientAPI } from "@/utils/amplifyAPI/client";
import { productsByProductProviderIDAndId } from "@/graphql/queries";

export function useListMainProductsByProductProviderID(
  productProviderID: string,
  inventoryID: string
) {
  const [
    listProductProviderProductsByProductProviderID,
    setListProductProviderProductsByProductProviderID,
  ] = useState<IListProductProviderProductsByProductProviderIDAPI[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchListMainProductProviderProductsByProductProviderID =
      async () => {
        try {
          setIsLoading(true);
          setError(null);
          if (!productProviderID) return;
          const result: any = await clientAPI(
            productsByProductProviderIDAndId,
            {
              productProviderID,
              inventoryID,
            }
          );
          const productProviderProductsByProductProviderIDResult: IListProductProviderProductsByProductProviderIDAPI[] =
            result.data.productsByProductProviderIDAndId.items.map(
              (
                item: IListProductProviderProductsByProductProviderIDAPIResponse
              ) => {
                return {
                  id: item.id,
                  category_id: item.category_id,
                  subcategory_id: item.subcategory_id,
                  class_id: item.class_id,
                  name: item.name,
                  price: item.price,
                  quantity: item.inventoryProduct.items[0].quantity,
                  productProviderID: item.productProviderID,
                  inventoryProductID: item.inventoryProduct.items[0].id,
                };
              }
            );
          setListProductProviderProductsByProductProviderID(
            productProviderProductsByProductProviderIDResult
          );
        } catch (er) {
          console.log("Error: ", er);
          setError(er);
        } finally {
          setIsLoading(false);
        }
      };

    fetchListMainProductProviderProductsByProductProviderID();
  }, [productProviderID, inventoryID]);

  return {
    listProductProviderProductsByProductProviderID,
    setListProductProviderProductsByProductProviderID,
    isLoading,
  };
}
