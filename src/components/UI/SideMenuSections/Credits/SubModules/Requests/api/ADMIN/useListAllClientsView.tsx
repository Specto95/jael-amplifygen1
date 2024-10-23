//* INTERFACES
import {
  IListClientsViewByBranchOfficeIDAPI,
  IListClientsViewByBranchOfficeIDAPIResponse,
} from "./interfaces/IUseListAllClientsView";

import { clientAPI } from "@/utils/amplifyAPI/client";

//* AMPLIFY IMPORTS
import { listAllClientsViewAPI } from "@/graphql/queries";

export async function useListAllClientsView() {
  try {
    const result: any = await clientAPI(listAllClientsViewAPI);

    return result.data.listClients.items.map(
      (item: IListClientsViewByBranchOfficeIDAPIResponse) => {
        return {
          branchOfficeName: item.branchOffice.name,
          clientID: item.id,
          clientName: item.name,
          clientSince: item.createdAt,
          lastSale: item.sale?.items[0]?.id || "No Disponible",
        };
      }
    ) as IListClientsViewByBranchOfficeIDAPI[];
  } catch (er) {
    console.log("Error: ", er);
  }
}
