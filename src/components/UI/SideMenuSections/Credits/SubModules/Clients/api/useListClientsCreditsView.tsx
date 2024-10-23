import { useEffect, useState } from "react";

//* INTERFACES
import {
  IListClientsCreditsViewAPI,
  IListClientsCreditsViewAPIResponse,
} from "./interfaces/IUseListClientsCreditsView";

//* AMPLIFY IMPORTS
import { listClientsCreditsViewAPI } from "@/graphql/queries";

import { useSectionProvider } from "@/hooks/useSectionProvider";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function useListClientsCreditsView(branchOfficeID?: string) {
  const { filteredCheckedFields } = useSectionProvider();

  const [listClientsCreditsView, setListClientsCreditsView] = useState<
    IListClientsCreditsViewAPI[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchListClientsCreditsView = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result: any = await clientAPI(
          listClientsCreditsViewAPI,

          {
            creditRequestStatus: filteredCheckedFields[0],
          }
        );

        const clientCreditsView: IListClientsCreditsViewAPI[] =
          result.data.listCreditRequests.items.map(
            ({ client }: IListClientsCreditsViewAPIResponse) => {
              const clientsCreditsViewObj: IListClientsCreditsViewAPI = {
                id: client.id,
                clientName: client.name + " " + client.lastname,
                startDate: client.credit?.startDate || "N/A",
                totalCredit: client.credit?.totalCredit || 0,
                last_payment_date: client.credit?.last_payment_date || "N/A",
              };
              return clientsCreditsViewObj;
            }
          );

        setListClientsCreditsView(clientCreditsView);
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListClientsCreditsView();
  }, [filteredCheckedFields]);

  return { listClientsCreditsView, setListClientsCreditsView, isLoading };
}
