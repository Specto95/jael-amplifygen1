import { useState, useEffect } from "react";

import { useSectionProvider } from "@/hooks/useSectionProvider";

import { IListProductProviderProductsByProductProviderIDAPI } from "./interfaces/IUseListProductProviderProductsByProductProviderID";

//* AMPLIFY IMPORTS
import { clientAPI } from "@/utils/amplifyAPI/client";
import {
  productsByProductProviderIDAndId,
  listAvailableProductsByProviderIDAPI,
} from "@/graphql/queries";

export function useListProductsByProductProviderID(
  productProviderID: string,
  inventoryID: string
) {
  const { sectionName } = useSectionProvider();

  const [
    listProductProviderProductsByProductProviderID,
    setListProductProviderProductsByProductProviderID,
  ] = useState<IListProductProviderProductsByProductProviderIDAPI[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchListProductProviderProductsByProductProviderID = async () => {
      try {
        setIsLoading(true);
        setError(null);
        if (!productProviderID) return;
        const result: any = await clientAPI(
          sectionName === "BOInventory"
            ? listAvailableProductsByProviderIDAPI
            : productsByProductProviderIDAndId,
          {
            productProviderID,
            inventoryID,
          }
        );

        const productProviderProductsResult: IListProductProviderProductsByProductProviderIDAPI[] =
          sectionName === "BOInventory"
            ? result.data.listInventoryProducts.items
            : result.data.productsByProductProviderIDAndId.items;

        const finalResult: IListProductProviderProductsByProductProviderIDAPI[] =
          productProviderProductsResult.map((item: any) => {
            if (sectionName === "BOInventory") {
              return {
                id: item.product.id,
                quantity: item.quantity,
                category_id: item.product.category_id,
                subcategory_id: item.product.subcategory_id,
                class_id: item.product.class_id,
                name: item.product.name,
                price: item.product.price,
                productProviderID: item.product.productProviderID,
                inventoryProductID: item.id,
              };
            }
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
          });
        setListProductProviderProductsByProductProviderID(finalResult);
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListProductProviderProductsByProductProviderID();
  }, [productProviderID, inventoryID]);

  return {
    listProductProviderProductsByProductProviderID,
    setListProductProviderProductsByProductProviderID,
    isLoading,
  };
}
