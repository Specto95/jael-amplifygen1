import { useState, useEffect } from "react";

import { IListBOfficesInventoryNamesTable } from "@/interfaces/Inventory/inventory";

//* AMPLIFY IMPORTS
import { clientAPI } from "@/utils/amplifyAPI/client";
import { listBranchOfficesNames } from "@/graphql/queries";

export function useListBOfficesOutcomeNamesInventory(name?: string) {
  const [branchOfficesInventoryNames, setBranchOfficesInventoryNames] =
    useState<IListBOfficesInventoryNamesTable[]>([]);

  useEffect(() => {
    const fetchOutcomeInventoryProducts = async () => {
      try {
        const result: any = await clientAPI(listBranchOfficesNames, { name });

        setBranchOfficesInventoryNames(result.data.listBranchOffices.items);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchOutcomeInventoryProducts();
  }, [name]);

  return { branchOfficesInventoryNames, setBranchOfficesInventoryNames };
}
