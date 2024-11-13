import { useState, useEffect } from "react";

//* AMPLIFY IMPORTS
import { clientAPI } from "@/utils/amplifyAPI/client";
import {
  listDiscountInventoryProductsAPI,
  listDiscountsAPI,
} from "@/graphql/queries";
import { IUseListDiscountInventoryProducts } from "./interfaces/IUseListDiscountInventoryProducts";
import { ListDiscountInventoryProductsQuery } from "@/API";

export function useListDiscountInventoryProducts(inventoryProductId: string) {
  const [listDiscounts, setListDiscounts] = useState<
    IUseListDiscountInventoryProducts[]
  >([]);

  useEffect(() => {
    const fetchListDiscounts = async () => {
      try {
        if (!inventoryProductId) return;
        const result = (await clientAPI(listDiscountInventoryProductsAPI, {
          inventoryProductId,
        })) as {
          data: ListDiscountInventoryProductsQuery;
        };

        const ListDiscountInventoryProducts =
          result.data.listDiscountInventoryProducts?.items.map(
            (inventoryProduct) => {
              const ListDiscountInventoryProductsObj: IUseListDiscountInventoryProducts =
                {
                  discount: inventoryProduct?.discounts.discount!,
                };

              return ListDiscountInventoryProductsObj;
            }
          ) || [];

        setListDiscounts(ListDiscountInventoryProducts);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchListDiscounts();
  }, [inventoryProductId]);

  return { listDiscounts, setListDiscounts };
}
