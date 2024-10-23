import { useEffect, useState } from "react";

//* INTERFACES
import {
  IListCreditsRequestsViewAPI,
  IListCreditsRequestsViewAPIResponse,
} from "./interfaces/IUseListCreditsRequestsView";

//* AMPLIFY IMPORTS
import { listCreditRequestsViewAPI } from "@/graphql/queries";
import { CreditRequestStatus } from "@/utils/globalObjs/sideMenuSections/Credits/CreditsObjs";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function useListCreditsRequestsView(branchOfficeID: string) {
  const [listCreditsRequestsView, setListCreditsRequestsView] = useState<
    IListCreditsRequestsViewAPI[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchListCreditsRequestsView = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result: any = await clientAPI(listCreditRequestsViewAPI, {
          branchOfficeID,
        });

        console.log(result)

        const creditRequestsResult: IListCreditsRequestsViewAPI[] =
          result.data.listClients.items.length > 0
            ? result.data.listClients.items.map(
                (item: IListCreditsRequestsViewAPIResponse) => {
                  const clientsCreditsViewObj: IListCreditsRequestsViewAPI = {
                    clientID: item.creditRequests.items[0].client.id,
                    clientName:
                      item.creditRequests.items[0].client.name +
                      " " +
                      item.creditRequests.items[0].client.lastname,
                    creditStatus:
                      item.creditRequests.items[0].creditRequestStatus ===
                      CreditRequestStatus.REJECTED
                        ? "Rechazado"
                        : item.creditRequests.items[0].creditRequestStatus ===
                          CreditRequestStatus.APPROVED
                        ? "Aprobado"
                        : "Pendiente",
                  };
                  return clientsCreditsViewObj;
                }
              )
            : [];

        setListCreditsRequestsView(creditRequestsResult);
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListCreditsRequestsView();
  }, [branchOfficeID]);

  return { listCreditsRequestsView, setListCreditsRequestsView, isLoading };
}
