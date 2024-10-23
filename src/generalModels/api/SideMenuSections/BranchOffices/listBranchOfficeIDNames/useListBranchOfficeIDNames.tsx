import { useState, useEffect } from "react";

//* INTERFACES
import { IListBOfficeIDNames } from "./interfaces/IUseListBranchOfficeIDNames";

//* AMPLIFY IMPORTS
import { listBranchOfficesIDNamesAPI } from "@/graphql/queries";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function useListBranchOfficeIDNames() {
  const [branchOfficeIDNames, setBranchOfficeIDNames] = useState<
    IListBOfficeIDNames[]
  >([]);
  useEffect(() => {
    const fetchListBranchOfficeIDNames = async () => {
      try {
        const result: any = await clientAPI(listBranchOfficesIDNamesAPI);

        setBranchOfficeIDNames(result.data.listBranchOffices.items);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchListBranchOfficeIDNames();
  }, []);

  return { branchOfficeIDNames, setBranchOfficeIDNames };
}
