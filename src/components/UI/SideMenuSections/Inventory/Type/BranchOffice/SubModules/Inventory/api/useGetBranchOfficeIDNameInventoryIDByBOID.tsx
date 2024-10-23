import { useState, useEffect } from "react";

//* AMPLIFY IMPORTS
import { getBranchOfficeIDNameInventoryIDByBOIDAPI } from "@/graphql/queries";
import { IGetBranchOfficeIDNameInventoryIDByBOIDAPI } from "./interfaces/IUseGetBranchOfficeIDNameInventoryIDByBOID";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function useGetBranchOfficeIDNameInventoryIDByBOID(id: string) {
  const [
    getBranchOfficeIDNameInventoryID,
    setGetBranchOfficeIDNameInventoryID,
  ] = useState<IGetBranchOfficeIDNameInventoryIDByBOIDAPI[]>([]);

  useEffect(() => {
    const fetchGetBranchOfficeIDNameInventoryID = async () => {
      try {
        if (!id) {
          setGetBranchOfficeIDNameInventoryID([]);
          return;
        }
        const result: any = await clientAPI(
          getBranchOfficeIDNameInventoryIDByBOIDAPI,
          {
            id,
          }
        );

        const branchOfficeIDNameInventoryIDResult: IGetBranchOfficeIDNameInventoryIDByBOIDAPI =
          {
            id: result.data.getBranchOffice.id,
            name: result.data.getBranchOffice.name,
            inventoryID: result.data.getBranchOffice.inventories.items[0].id,
          };
        setGetBranchOfficeIDNameInventoryID([
          branchOfficeIDNameInventoryIDResult,
        ]);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchGetBranchOfficeIDNameInventoryID();
  }, [id]);

  return {
    getBranchOfficeIDNameInventoryID,
    setGetBranchOfficeIDNameInventoryID,
  };
}
