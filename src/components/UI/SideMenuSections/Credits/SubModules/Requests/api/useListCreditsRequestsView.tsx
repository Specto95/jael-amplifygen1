import { useEffect, useState } from "react";

//* INTERFACES
import { IListCreditsRequestsViewAPI } from "./interfaces/IUseListCreditsRequestsView";

//* AMPLIFY IMPORTS
import {
  listCreditRequestsBOAPI,
  listCreditRequestsMainAPI,
} from "@/graphql/queries";
import { CreditRequestStatus } from "@/utils/globalObjs/sideMenuSections/Credits/CreditsObjs";

import { clientAPI } from "@/utils/amplifyAPI/client";
import { ListCreditRequestsQuery } from "@/API";

import { useSessionProvider } from "@/hooks/useSessionProvider";

export function useListCreditsRequestsView() {
  const { branchInventory, mainBranchInventory } = useSessionProvider();
  const [listCreditsRequestsView, setListCreditsRequestsView] = useState<
    IListCreditsRequestsViewAPI[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (!branchInventory.id && !mainBranchInventory.id) return;
    const fetchListCreditsRequestsView = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = (await clientAPI(
          branchInventory.id
            ? listCreditRequestsBOAPI
            : listCreditRequestsMainAPI,
          {
            branchOfficeID: branchInventory.id || mainBranchInventory.id,
          }
        )) as { data: ListCreditRequestsQuery };

        const creditRequestsResult =
          result.data.listCreditRequests!.items.length > 0
            ? result.data.listCreditRequests!.items.map((item) => {
                const clientsCreditsViewObj: IListCreditsRequestsViewAPI = {
                  clientID: item!.client!.id,
                  clientName: item!.client!.name + " " + item!.client!.lastname,
                  creditStatus:
                    item!.creditRequestStatus === CreditRequestStatus.REJECTED
                      ? "Rechazado"
                      : item!.creditRequestStatus ===
                        CreditRequestStatus.APPROVED
                      ? "Aprobado"
                      : "Pendiente",
                };

                if (mainBranchInventory.id) {
                  clientsCreditsViewObj.branchOfficeName =
                    item?.branchOffice?.name;
                }
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
  }, [branchInventory.id, mainBranchInventory.id]);

  return { listCreditsRequestsView, setListCreditsRequestsView, isLoading };
}
