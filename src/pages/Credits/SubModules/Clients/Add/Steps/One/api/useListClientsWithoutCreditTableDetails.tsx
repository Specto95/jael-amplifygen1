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
            (creditRequest: IListClientSelectedFullDetailsAPI) => {
              const listClientWithoutCreditTableDetailsObj: IListClientSelectedFullDetailsAPIResponse =
                {
                  creditRequestID: creditRequest.id,
                  id: creditRequest.client.id,
                  name:
                    creditRequest.client.name +
                    " " +
                    creditRequest.client.lastname,
                  clientSince: creditRequest.client.createdAt.split("T")[0],
                  state: creditRequest.client.state || "N/A",
                  address: creditRequest.client.address || "N/A",
                  email: creditRequest.client.email || "N/A",
                  hasCredit: creditRequest.client.hasCredit,
                  city: creditRequest.client.city || "N/A",
                  postal_code: creditRequest.client.postal_code || "N/A",
                  settlement: creditRequest.client.settlement || "N/A",
                  phone: creditRequest.client.phone || "N/A",
                  credit_available:
                    creditRequest.client.credit?.credit_available || 0,
                  creditRequestAmount: creditRequest.creditRequestAmount,
                  outstanding_balance:
                    creditRequest.client.credit?.outstanding_balance || 0,
                  creditRequestReason: creditRequest.creditRequestReason,
                  creditRequestStatus: creditRequest.creditRequestStatus,
                  creditSince:
                    creditRequest.client.credit?.createdAt.split("T")[0] ||
                    "N/A",
                };
              if (creditRequest.client.credit?.credit_available > 0) {
                listClientWithoutCreditTableDetailsObj["totalCredit"] =
                  creditRequest.client.credit?.totalCredit || 0;
                listClientWithoutCreditTableDetailsObj["creditID"] =
                  creditRequest.client.credit?.id || "";
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
