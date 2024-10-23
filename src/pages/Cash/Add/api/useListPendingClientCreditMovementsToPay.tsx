import { useState, useEffect } from "react";

//* INTERFACES
import { IUseListPendingClientCreditMovementsToPayAPI } from "./interfaces/IUseListPendingClientCreditMovementsToPay";

//* AMPLIFY IMPORTS
import { listPendingClientCreditMovementsToPayAPI } from "@/graphql/queries";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function useListPendingClientCreditMovementsToPay(
  salesOperationID: string,
  numberOfPayment: number
) {
  const [
    pendingClientCreditMovementsToPay,
    setPendingClientCreditMovementsToPay,
  ] = useState<IUseListPendingClientCreditMovementsToPayAPI[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchListPendingClientCreditMovementsToPay = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result: any = await clientAPI(
          listPendingClientCreditMovementsToPayAPI,
          {
            salesOperationID,
            numberOfPayment,
          }
        );

        setPendingClientCreditMovementsToPay(
          result.data.listSalesOperationClientCreditMovements.items.sort(
            (
              a: IUseListPendingClientCreditMovementsToPayAPI,
              b: IUseListPendingClientCreditMovementsToPayAPI
            ) => {
              if (a.numberOfPayment < b.numberOfPayment) {
                return -1;
              }
              if (a.numberOfPayment > b.numberOfPayment) {
                return 1;
              }
              return 0;
            }
          )
        );

        console.log(result.data.listSalesOperationClientCreditMovements.items);
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListPendingClientCreditMovementsToPay();
  }, [salesOperationID, numberOfPayment]);

  return {
    pendingClientCreditMovementsToPay,
    setPendingClientCreditMovementsToPay,
    isLoading,
  };
}
