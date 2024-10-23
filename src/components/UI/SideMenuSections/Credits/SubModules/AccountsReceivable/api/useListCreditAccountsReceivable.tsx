import { useEffect, useState } from "react";

//* INTERFACES
import { IUseListCreditAccountsReceivableAPI } from "./interfaces/IUseListCreditAccountsReceivable";
import { listCreditAccountsReceivableData } from "./helpers/functions";

export function useListCreditAccountsReceivable(
  clientID?: string,
  subMovementType?: string
) {
  const [listCreditAccountsReceivable, setListCreditAccountsReceivable] =
    useState<IUseListCreditAccountsReceivableAPI[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchListCreditAccountsReceivable = async () => {
      try {
        setIsLoading(true);
        setError(null);

        //? Check if clientID is in params, otherwise [].
        const data =
          (await listCreditAccountsReceivableData(
            subMovementType!,
            clientID!
          )) || [];
        // : [];

        setListCreditAccountsReceivable(data!);
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListCreditAccountsReceivable();
  }, [clientID, subMovementType]);

  return {
    listCreditAccountsReceivable,
    setListCreditAccountsReceivable,
    isLoading,
  };
}
