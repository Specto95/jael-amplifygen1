import { useState, useEffect } from "react";

import { IListBOfficesInventoryNamesTable } from "@/interfaces/Inventory/inventory";

//* AMPLIFY IMPORTS
import { listBranchOfficesNames } from "@/graphql/queries";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function useListBranchOfficeNames() {
  const [branchOfficeNames, setBranchOfficeNames] = useState<
    IListBOfficesInventoryNamesTable[]
  >([]);

  useEffect(() => {
    const fetchListBranchOfficeNames = async () => {
      try {
        const result: any = await clientAPI(listBranchOfficesNames);
        setBranchOfficeNames(result.data.listBranchOffices.items);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchListBranchOfficeNames();
  }, []);

  return { branchOfficeNames, setBranchOfficeNames };
}
