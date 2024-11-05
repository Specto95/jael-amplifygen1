import { useEffect, useState } from "react";

//* INTERFACES
import { IListCreditsRequestsViewAPI } from "./interfaces/IUseListCreditsRequestsView";

//* AMPLIFY IMPORTS
import {
  listCreditRequestsBOAPI,
  listCreditRequestsMainAPI,
  listCreditRequestsViewAPI,
} from "@/graphql/queries";
import { CreditRequestStatus } from "@/utils/globalObjs/sideMenuSections/Credits/CreditsObjs";

import { clientAPI } from "@/utils/amplifyAPI/client";
import { ListCreditRequestsQuery } from "@/API";

import { useSessionProvider } from "@/hooks/useSessionProvider";

const { branchInventory } = useSessionProvider();

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
        const result = (await clientAPI(
          branchInventory.id
            ? listCreditRequestsBOAPI
            : listCreditRequestsMainAPI,
          {
            branchOfficeID,
          }
        )) as { data: ListCreditRequestsQuery };

        const creditRequestsResult =
          result.data.listCreditRequests!.items.length > 0
            ? result.data.listCreditRequests!.items.map((item) => {
                const clientsCreditsViewObj: IListCreditsRequestsViewAPI = {
                  clientID: item!.id,
                  clientName: item!.client!.name + " " + item!.client!.lastname,
                  creditStatus:
                    item!.creditRequestStatus === CreditRequestStatus.REJECTED
                      ? "Rechazado"
                      : item!.creditRequestStatus ===
                        CreditRequestStatus.APPROVED
                      ? "Aprobado"
                      : "Pendiente",
                };
                return clientsCreditsViewObj;
              })
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
