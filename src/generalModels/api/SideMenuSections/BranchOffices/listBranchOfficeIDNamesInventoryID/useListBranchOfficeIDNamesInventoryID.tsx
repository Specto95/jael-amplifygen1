import { useState, useEffect } from "react";

import {
  IListBOfficeIDNamesInventoryID,
  IListBOfficeIDNamesInventoryIDResponse,
} from "./interfaces/IUseListBranchOfficeIDNames";

//* AMPLIFY IMPORTS
import { clientAPI } from "@/utils/amplifyAPI/client";
import { listBranchOfficesIDNamesInventoryIDAPI } from "@/graphql/queries";

export function useListBranchOfficeIDNamesInventoryID() {
  const [branchOfficeIDNamesInventoryID, setBranchOfficeIDNamesInventoryID] =
    useState<IListBOfficeIDNamesInventoryID[]>([]);

  useEffect(() => {
    const fetchListBranchOfficeIDNamesInventoryID = async () => {
      try {
        const result: any = await clientAPI(
          listBranchOfficesIDNamesInventoryIDAPI
        );
        const branchOfficeInventoryIDsNameResult: IListBOfficeIDNamesInventoryID[] =
          result.data.listBranchOffices.items.map(
            (branchOffice: IListBOfficeIDNamesInventoryIDResponse) => {
              return {
                id: branchOffice.id,
                name: branchOffice.name,
                inventoryID: branchOffice.inventories.items[0].id,
              };
            }
          );

        setBranchOfficeIDNamesInventoryID(branchOfficeInventoryIDsNameResult);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchListBranchOfficeIDNamesInventoryID();
  }, []);

  return { branchOfficeIDNamesInventoryID, setBranchOfficeIDNamesInventoryID };
}
