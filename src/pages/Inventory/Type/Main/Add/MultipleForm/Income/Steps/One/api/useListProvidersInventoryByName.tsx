import {
  IListProvidersInventoryResponsibleAPI,
  IListProvidersInventoryResponsibleFullnameGQLAPI,
} from "./interfaces/IUseListProvidersInventoryByName";

//* AMPLIFY IMPORTS
import { clientAPI } from "@/utils/amplifyAPI/client";
import { listProvidersInventoryByNameAPI } from "@/graphql/queries";

export async function useListProvidersInventoryByName(
  enterprise_name: string,
  setSelectedProvider: React.Dispatch<
    React.SetStateAction<{ id: string; name: string }>
  >
) {
  try {
    const result: any = await clientAPI(listProvidersInventoryByNameAPI, {
      enterprise_name,
    });

    console.log(result);

    setSelectedProvider({
      id: result.data.listProviders.items[0].productprovider.id,
      name: result.data.listProviders.items[0].enterprise_name,
    });

    return result.data.listProviders.items.map(
      (item: IListProvidersInventoryResponsibleFullnameGQLAPI) => {
        return {
          enterprise_name: item.enterprise_name,
          productProviderID: item.productprovider.id,
          responsible: item.productprovider?.responsible?.items.map(
            (responsibleItem: IListProvidersInventoryResponsibleAPI) => {
              return {
                id: responsibleItem.id,
                fullname: `${responsibleItem.name ?? ""} ${
                  responsibleItem.second_name ?? ""
                } ${responsibleItem.lastname ?? ""} ${
                  responsibleItem.second_lastname ?? ""
                }`,
              };
            }
          ),
        };
      }
    );
  } catch (error) {
    console.log("Error: ", error);
  }
}
