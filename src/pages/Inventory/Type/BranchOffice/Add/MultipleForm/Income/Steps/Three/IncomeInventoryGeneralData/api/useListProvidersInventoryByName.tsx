import { useState, useEffect } from "react";

import {
  IListProvidersInventoryByNameAPI,
  IListProvidersInventoryResponsibleAPI,
} from "./interfaces/IUseListProvidersInventoryByName";

//* AMPLIFY IMPORTS
import { listProvidersInventoryByNameAPI } from "@/graphql/queries";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function useListProvidersInventoryByName(enterprise_name: string) {
  const [providersInventoryByName, setProvidersInventoryByName] = useState<
    IListProvidersInventoryByNameAPI[]
  >([]);

  useEffect(() => {
    const fetchProviderInventoryByName = async () => {
      try {
        const result : any = await clientAPI(listProvidersInventoryByNameAPI, {
          enterprise_name,
        });

        const enterpriseResponsibleResult: IListProvidersInventoryByNameAPI[] =
          result.data.listProviders.items.map((item: any) => {
            return {
              responsible: item.productprovider?.responsible?.items.map(
                (responsibleItem: IListProvidersInventoryResponsibleAPI) => {
                  return {
                    fullname: `${responsibleItem.name ?? ""} ${
                      responsibleItem.second_name ?? ""
                    } ${responsibleItem.lastname ?? ""} ${
                      responsibleItem.second_lastname ?? ""
                    }`,
                  };
                }
              ),
            };
          });

        console.log(enterpriseResponsibleResult);

        setProvidersInventoryByName(enterpriseResponsibleResult);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchProviderInventoryByName();
  }, [enterprise_name]);

  return { providersInventoryByName, setProvidersInventoryByName };
}
