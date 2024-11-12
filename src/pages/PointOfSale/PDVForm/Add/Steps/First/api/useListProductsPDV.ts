import { useState, useEffect } from "react";

//* AMPLIFY IMPORTS
import { listPDVProductsByInventoryIDAPI } from "@/graphql/queries";
import {
  IListProductsPDVAPI,
  IListProductsPDVAPIResponse,
} from "./interfaces/IUseListProductsPDV";

import { clientAPI } from "@/utils/amplifyAPI/client";
import { InventoryProductsByInventoryIDAndIdQuery } from "@/API";

export function useListProductsPDV(inventoryID: string) {
  const [listProductsPDV, setListProductsPDV] = useState<IListProductsPDVAPI[]>(
    []
  );

  useEffect(() => {
    const fetchListProductsPDV = async () => {
      try {
        if (!inventoryID) return;
        const result = (await clientAPI(listPDVProductsByInventoryIDAPI, {
          inventoryID,
        })) as { data: InventoryProductsByInventoryIDAndIdQuery };

        const productsPDVResult =
          result.data.inventoryProductsByInventoryIDAndId!.items.map(
            (productPDV) => {
              return {
                inventoryProductID: productPDV!.id,
                id: productPDV!.product!.id,
                name: productPDV!.product!.name,
                description: productPDV!.product!.description || "N/A",
                price: productPDV!.customPrice,
                quantity: productPDV!.quantity,
                hasCommission: productPDV!.product!.hasCommission,
                hasDiscount: productPDV!.product!.hasDiscount,
                withDiscount: false,
                discountPercentage: 0,
                totalDiscounted: 0,
                // unitPrice: row.price,
                amountToPay: productPDV!.customPrice,
              };
            }
          );
        setListProductsPDV(productsPDVResult as IListProductsPDVAPI[]);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchListProductsPDV();
  }, [inventoryID]);

  return { listProductsPDV, setListProductsPDV };
}
