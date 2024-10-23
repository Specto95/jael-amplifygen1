import { useState, useEffect } from "react";

import { IListBranchOfficeIDs } from "./listBranchOfficeIDs";

//* AMPLIFY IMPORTS
import { clientAPI } from "@/utils/amplifyAPI/client";
import { listBranchOfficesIDs } from "@/graphql/queries";

export function useListBranchOfficeIDs() {
  const [branchOfficeIDs, setBranchOfficeIDs] = useState<
    IListBranchOfficeIDs[]
  >([]);

  useEffect(() => {
    const fetchListBranchOfficeIDs = async () => {
      try {
        const result: any = await clientAPI(listBranchOfficesIDs);
        setBranchOfficeIDs(result.data.listBranchOffices.items);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchListBranchOfficeIDs();
  }, []);

  return { branchOfficeIDs, setBranchOfficeIDs };
}
