import { useState, useEffect } from "react";

//* INTERFACES
import {
  IUseListAccountsViewAPI,
  IUseListAccountsViewAPIResponse,
} from "./interfaces/IUseListAccountViews";

//* AMPLIFY IMPORTS
import { listAccountViewAPI } from "@/graphql/queries";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function useListAccountsView() {
  const [accountViewData, setAccountViewData] = useState<
    IUseListAccountsViewAPI[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchListAccountViewData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result: any = await clientAPI(listAccountViewAPI);

        const listAccountViewData = result.data.listUserInfos.items.map(
          (item: IUseListAccountsViewAPIResponse) => {
            return {
              id: item.id,
              username: item.name,
              userType: item.user.rolID,
            };
          }
        );

        setAccountViewData(listAccountViewData);
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListAccountViewData();
  }, []);

  return { accountViewData, setAccountViewData, isLoading };
}
