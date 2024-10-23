import { useState, useEffect } from "react";

import { IUseGetInventoryQuantityAPI } from "./interfaces/IUseGetInventoryQuantity";

//* AMPLIFY IMPORTS
import { clientAPI } from "@/utils/amplifyAPI/client";
import { getInventoryQuantityAPI } from "@/graphql/queries";

export function useGetInventoryQuantity(id: string) {
  const [inventory, setInventory] = useState<IUseGetInventoryQuantityAPI[]>([]);

  useEffect(() => {
    const fetchInventoryByQuantity = async () => {
      try {
        const result: any = await clientAPI(getInventoryQuantityAPI, { id });

        setInventory(result.data.getInventory.products.items);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchInventoryByQuantity();
  }, []);

  return { inventory, setInventory };
}
