import { useState, useEffect } from "react";

//* AMPLIFY IMPORTS
import { listCommissionsViewAPI } from "@/graphql/queries";
import { IListCommissionsViewAPI } from "./interfaces/IUseListCommissionsView";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function useListCommissionsView() {
  const [listCommissionsView, setListCommissionsView] = useState<
    IListCommissionsViewAPI[]
  >([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchListCommissionsView = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const result: any = await clientAPI(listCommissionsViewAPI);
        setListCommissionsView(result.data.listBranchOffices.items);
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListCommissionsView();
  }, []);

  return { listCommissionsView, setListCommissionsView, isLoading };
}
