import { useState, useEffect } from "react";

//* AMPLIFY IMPORTS
import { listPDVProductsByInventoryIDAPI } from "@/graphql/queries";
import {
  IListProductsPDVAPI,
  IListProductsPDVAPIResponse,
} from "./interfaces/IUseListProductsPDV";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function useListProductsPDV(inventoryID: string) {
  const [listProductsPDV, setListProductsPDV] = useState<IListProductsPDVAPI[]>(
    []
  );

  useEffect(() => {
    const fetchListProductsPDV = async () => {
      try {
        const result: any = await clientAPI(listPDVProductsByInventoryIDAPI, {
          inventoryID,
        });

        // console.log(result.data.inventoryProductsByInventoryIDAndId.items)

        const productsPDVResult: IListProductsPDVAPI[] =
          result.data.inventoryProductsByInventoryIDAndId.items.map(
            (productPDV: IListProductsPDVAPIResponse) => {
              return {
                inventoryProductID: productPDV.id,
                id: productPDV.product.id,
                name: productPDV.product.name,
                description: productPDV.product.description || "N/A",
                price: productPDV.customPrice,
                quantity: productPDV.quantity,
                hasCommission: productPDV.product.hasCommission,
                hasDiscount: productPDV.product.hasDiscount,
                withDiscount: false,
                discountPercentage: 0,
                totalDiscounted: 0,
                // unitPrice: row.price,
                amountToPay: productPDV.customPrice,
              };
            }
          );
        setListProductsPDV(productsPDVResult);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchListProductsPDV();
  }, [inventoryID]);

  return { listProductsPDV, setListProductsPDV };
}
