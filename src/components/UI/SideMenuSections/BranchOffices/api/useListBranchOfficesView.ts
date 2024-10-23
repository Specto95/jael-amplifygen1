import { useState, useEffect } from "react";

//* AMPLIFY IMPORTS
import { listBranchOfficesViewAPI } from "@/graphql/queries";

//* INTERFACES
import { IListBranchOfficesViewAPI } from "./interfaces/IUseListBranchOfficesView";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function useListBranchOfficesView() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [listBranchOfficesView, setListBranchOfficesView] = useState<
    IListBranchOfficesViewAPI[]
  >([]);

  useEffect(() => {
    const fetchListBranchOfficesView = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result: any = await clientAPI(listBranchOfficesViewAPI);

        setListBranchOfficesView(result.data.listBranchOffices.items);
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListBranchOfficesView();
  }, []);

  return {
    listBranchOfficesView,
    setListBranchOfficesView,
    isLoading,
    setIsLoading,
  };
}
