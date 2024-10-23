import { useEffect, useState } from "react";

import { IUseListUserDataAPI } from "./interfaces/IUseListUserData";

//* AMPLIFY IMPORTS
import { clientAPI } from "@/utils/amplifyAPI/client";
// import { GraphQLResult } from "@aws-amplify/api";
import { listUserDataAPI } from "@/graphql/queries";

export function useListUserData() {
  const [listUserData, setListUserData] = useState<IUseListUserDataAPI[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchListUserData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result: any = await clientAPI(listUserDataAPI);
        setTimeout(() => {
          setListUserData(result.data.listUsers.items);
        }, 200);
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListUserData();
  }, []);

  return { listUserData, setListUserData, isLoading };
}
