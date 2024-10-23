import { useEffect, useState } from "react";

//* AMPLIFY IMPORTS
import { listBranchOfficeManagersAPI } from "@/graphql/queries";
import {
  IBranchManagerData,
  IListUserInfoAPIResponse,
} from "../../../FormProps/BranchOfficeGeneralData.d";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function useListBranchOfficeManagers() {
  const [listBranchOfficeManagers, setListBranchOfficeManagers] = useState<
    IBranchManagerData[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchBranchOfficeManagers = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result: any = await clientAPI(listBranchOfficeManagersAPI);

        const branchOfficeManagerResult = result.data?.listUsers.items.map(
          (item: IListUserInfoAPIResponse) => {
            return {
              id: item.id,
              name: item.userInfo.name,
              phone: item.userInfo.phone,
              email: item.email,
            };
          }
        );
        setListBranchOfficeManagers(branchOfficeManagerResult);
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBranchOfficeManagers();
  }, []);

  return { listBranchOfficeManagers, setListBranchOfficeManagers, isLoading };
}
