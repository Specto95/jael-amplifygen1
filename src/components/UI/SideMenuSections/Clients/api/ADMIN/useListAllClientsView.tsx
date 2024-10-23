//* INTERFACES
import {
  IListClientsViewByBranchOfficeIDAPI,
  IListClientsViewByBranchOfficeIDAPIResponse,
} from "./interfaces/IUseListAllClientsView";

//* AMPLIFY IMPORTS
import { listAllClientsViewAPI } from "@/graphql/queries";

import { clientAPI } from "@/utils/amplifyAPI/client";

export async function useListAllClientsView() {
  try {
    const result: any = await clientAPI(listAllClientsViewAPI);

    return result.data.listClients.items.map(
      (item: IListClientsViewByBranchOfficeIDAPIResponse) => {
        return {
          branchOfficeName: item.branchOffice.name,
          clientID: item.id,
          clientName: item.name,
          clientSince: item.createdAt.split("T")[0] || "N/A",
          lastSale: item.salesOperation?.items[0]?.id || "No Disponible",
        };
      }
    ) as IListClientsViewByBranchOfficeIDAPI[];
  } catch (er) {
    console.log("Error: ", er);
  }
}
