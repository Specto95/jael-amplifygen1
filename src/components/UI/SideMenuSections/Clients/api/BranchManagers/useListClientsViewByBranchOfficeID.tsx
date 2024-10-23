//* INTERFACES
import {
  IListClientsViewByBranchOfficeIDAPI,
  IListClientsViewByBranchOfficeIDAPIResponse,
} from "./interfaces/IUseListClientsViewByBranchOfficeID";

//* AMPLIFY IMPORTS
import { listClientsViewByBranchOfficeIDAPI } from "@/graphql/queries";
import { formatDDMMYYYYDate } from "@/utils/dates";

import { clientAPI } from "@/utils/amplifyAPI/client";

export async function useListClientsViewByBranchOfficeID(
  branchOfficeID: string
) {
  try {
    const result: any = await clientAPI(listClientsViewByBranchOfficeIDAPI, {
      branchOfficeID,
    });

    return result.data.clientsByBranchOfficeIDAndId.items.map(
      (item: IListClientsViewByBranchOfficeIDAPIResponse) => {
        return {
          clientID: item.id,
          clientName: item.name,
          clientSince: formatDDMMYYYYDate(item.createdAt) || "N/A",
          lastSale: item.sale?.items[0]?.id || "No Disponible",
        };
      }
    ) as IListClientsViewByBranchOfficeIDAPI[];
  } catch (er) {
    console.log("Error: ", er);
  }
}
