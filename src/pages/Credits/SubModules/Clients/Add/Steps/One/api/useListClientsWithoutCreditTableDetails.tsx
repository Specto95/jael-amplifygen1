import { useState, useEffect } from "react";

//* AMPLIFY IMPORTS
import {
  listClientsWithoutCreditTableDetailsAPI,
  listClientCreditRequestDetailsAPI,
} from "@/graphql/queries";
import {
  IListClientSelectedFullDetailsAPI,
  IListClientSelectedFullDetailsAPIResponse,
} from "./interfaces/IListClientsWithoutCreditTableDetails";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function useListClientsWithoutCreditTableDetails(clientID?: string) {
  const [
    listClientsWithoutCreditTableDetails,
    setListClientsWithoutCreditTableDetails,
  ] = useState<IListClientSelectedFullDetailsAPIResponse[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchListClientsWithoutCreditTableDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);
        let result: any = await clientAPI(
          !clientID
            ? listClientsWithoutCreditTableDetailsAPI
            : listClientCreditRequestDetailsAPI,
          {
            clientID,
          }
        );

        const resultListClientsWithoutCreditTableDetails: IListClientSelectedFullDetailsAPIResponse[] =
          result.data.listCreditRequests.items.map(
            (client: IListClientSelectedFullDetailsAPI) => {
              const listClientWithoutCreditTableDetailsObj: IListClientSelectedFullDetailsAPIResponse =
                {
                  creditRequestID: client.id,
                  id: client.client.id,
                  name: client.client.name + " " + client.client.lastname,
                  clientSince: client.client.createdAt.split("T")[0],
                  state: client.client.state || "N/A",
                  address: client.client.address || "N/A",
                  email: client.client.email || "N/A",
                  hasCredit: client.client.hasCredit,
                  city: client.client.city || "N/A",
                  postal_code: client.client.postal_code || "N/A",
                  settlement: client.client.settlement || "N/A",
                  phone: client.client.phone || "N/A",
                  credit_available: client.client.credit?.credit_available || 0,
                  creditRequestAmount: client.creditRequestAmount,
                  outstanding_balance:
                    client.client.credit?.outstanding_balance || 0,
                  creditRequestReason: client.creditRequestReason,
                  creditRequestStatus: client.creditRequestStatus,
                  creditSince:
                    client.client.credit?.createdAt.split("T")[0] || "N/A",
                };
              if (client.client.credit?.credit_available > 0) {
                listClientWithoutCreditTableDetailsObj["totalCredit"] =
                  client.client.credit?.totalCredit || 0;
                listClientWithoutCreditTableDetailsObj["creditID"] =
                  client.client.credit?.id || "";
              }

              return listClientWithoutCreditTableDetailsObj;
            }
          );

        setListClientsWithoutCreditTableDetails(
          resultListClientsWithoutCreditTableDetails
        );
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListClientsWithoutCreditTableDetails();
  }, [clientID]);

  return {
    listClientsWithoutCreditTableDetails,
    setListClientsWithoutCreditTableDetails,
    isLoading,
  };
}
