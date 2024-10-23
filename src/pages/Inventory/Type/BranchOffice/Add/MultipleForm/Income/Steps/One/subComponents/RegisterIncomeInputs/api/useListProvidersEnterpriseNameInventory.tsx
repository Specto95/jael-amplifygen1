import { useState, useEffect } from "react";

//* INTERFACES
import { IListProvidersEnterpriseNameInventoryAPI } from "./interfaces/IUseListProvidersEnterpriseNameInventory";

//* AMPLIFY IMPORTS
import { listProvidersEnterpriseNameInventoryAPI } from "@/graphql/queries";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function useListProvidersEnterpriseNameInventory() {
  const [
    providersEnterpriseNameInventory,
    setProvidersEnterpriseNameInventory,
  ] = useState<IListProvidersEnterpriseNameInventoryAPI[]>([]);

  useEffect(() => {
    const fetchListProvidersEnterpriseNameInventory = async () => {
      try {
        const result: any = await clientAPI(
          listProvidersEnterpriseNameInventoryAPI
        );
        setProvidersEnterpriseNameInventory(result.data.listProviders.items);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchListProvidersEnterpriseNameInventory();
  }, []);

  return {
    providersEnterpriseNameInventory,
    setProvidersEnterpriseNameInventory,
  };
}
