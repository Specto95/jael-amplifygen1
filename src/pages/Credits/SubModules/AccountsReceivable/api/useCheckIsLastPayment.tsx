import { useState, useEffect } from "react";

//* INTERFACES
import {
  ICheckIsLastPaymentAPI,
  ICheckIsLastPaymentAPIResponse,
} from "./interfaces/ICheckIsLastPayment";

//* AMPLIFY IMPORTS
import { checkIsLastPaymentAPI } from "@/graphql/queries";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function useCheckIsLastPayment(id: string) {
  const [checkIsLastPayment, setCheckIsLastPayment] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchCheckIsLastPayment = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result: any = await clientAPI(checkIsLastPaymentAPI, { id });

        const checkIsLastPaymentResult: boolean[] =
          result.data.listSalesOperations.items.map(
            (item: ICheckIsLastPaymentAPIResponse) => {
              const checkIsLastPaymentResultObj: ICheckIsLastPaymentAPI = {
                currentTotalPayments: item.currentTotalPayments,
                numberOfPayment:
                  item.salesOperationClientCreditMovements.items.length,
              };

              //? currentTotalPayment + 1 (cuz the payment is not saved yet)
              if (
                checkIsLastPaymentResultObj.currentTotalPayments + 1 >=
                checkIsLastPaymentResultObj.numberOfPayment
              ) {
                return true;
              }
              return false;
            }
          );

        setCheckIsLastPayment(checkIsLastPaymentResult[0]);
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCheckIsLastPayment();
  }, [id]);

  return { checkIsLastPayment };
}
