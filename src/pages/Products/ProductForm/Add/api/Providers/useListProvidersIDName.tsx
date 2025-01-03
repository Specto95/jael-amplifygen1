import { useState, useEffect } from "react";

import { IListProvidersIDNamesAPI } from "./listProductProvidersIDNames";

//* AMPLIFY IMPORTS
import { clientAPI } from "@/utils/amplifyAPI/client";
import { listProvidersIDNamesAPI } from "@/graphql/queries";

export function useListProvidersIDName() {
  const [providersIDName, setProvidersIDName] = useState<
    IListProvidersIDNamesAPI[]
  >([]);

  useEffect(() => {
    const fetchListProvidersIDName = async () => {
      try {
        const result: any = await clientAPI(listProvidersIDNamesAPI);
        // const listProvidersResult: IListProvidersIDNamesAPI[] =
        //   result.data.listProductProviders.items.map(
        //     (item: IListProvidersIDNamesAPIResponse) => {
        //       return {
        //         id: item.id,
        //         name: item.providerID.enterprise_name,
        //       };
        //     }
        //   );
        setProvidersIDName(result.data.listProviders.items);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchListProvidersIDName();
  }, []);

  return { providersIDName, setProvidersIDName };
}
