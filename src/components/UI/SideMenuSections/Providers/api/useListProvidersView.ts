import { useState, useEffect } from "react";

//* AMPLIFY IMPORTS
import { listProvidersViewAPI } from "@/graphql/queries";

//* INTERFACES
import { IListProvidersViewAPI } from "./interfaces/IUseListProvidersView";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function useListProvidersView() {
  const [listProvidersView, setListProvidersView] = useState<
    IListProvidersViewAPI[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchListProvidersView = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result: any = await clientAPI(listProvidersViewAPI);
        setListProvidersView(result.data.listProviders.items);
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListProvidersView();
  }, []);

  return { listProvidersView, setListProvidersView, isLoading };
}
