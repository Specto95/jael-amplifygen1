import { useState, useEffect } from "react";

//* AMPLIFY IMPORTS
import { clientAPI } from "@/utils/amplifyAPI/client";
import { getClientCreditByIDAPI } from "@/graphql/queries";
import {
  IGetClientCreditByID,
  IGetClientCreditByIDResponse,
} from "./interfaces/IUseGetClientCreditByID";

export function useGetClientCreditByID(id: string) {
  const [getClientCreditByID, setGetClientCreditByID] =
    useState<IGetClientCreditByID>({
      id: "",
      clientID: "",
      credit_available: 0,
      outstanding_balance: 0,
    });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchGetClientCreditByID = async () => {
      if (!id) return;
      try {
        setIsLoading(true);
        setError(null);
        const result: any = await clientAPI(getClientCreditByIDAPI, { id });

        if (result.data.listCredits.items.length === 0) {
          setGetClientCreditByID({
            id: "",
            clientID: "",
            credit_available: 0,
            outstanding_balance: 0,
          });
          return;
        }
        const clientCreditResult: IGetClientCreditByID[] =
          result.data.listCredits.items.map(
            (client: IGetClientCreditByIDResponse) => {
              const clientCreditResultObj: IGetClientCreditByID = {
                id: client.id,
                clientID: client.creditsClientId,
                credit_available: client?.credit_available || 0,
                outstanding_balance: client?.outstanding_balance || 0,
              };

              return clientCreditResultObj;
            }
          );

        setGetClientCreditByID(clientCreditResult[0]);
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGetClientCreditByID();
  }, [id]);

  return { getClientCreditByID, setGetClientCreditByID, isLoading };
}
