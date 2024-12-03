import { useState, useEffect } from "react";

//* AMPLIFY IMPORTS
import { listMainInventoryRequestsViewAPI } from "@/graphql/queries";

//*INTERFACES
import { ListMainInventoryRequestsAPIResponse } from "./interfaces/ListMainInventoryRequests";

import { clientAPI } from "@/utils/amplifyAPI/client";
import {
  IOInventoryStatusSpanish,
  ListIncomeInventoryRequestsQuery,
} from "@/API";

export function useListMainInventoryRequests() {
  const [listMainInventoryRequests, setMainInventoryRequests] = useState<
    ListMainInventoryRequestsAPIResponse[]
  >([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchListMainIncomesInventoryView = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const mainInventoryRequestsResult = (await clientAPI(
          listMainInventoryRequestsViewAPI
        )) as {
          data: ListIncomeInventoryRequestsQuery;
        };

        const listMainIncomesInventoryView =
          mainInventoryRequestsResult.data.listIncomeInventoryRequests!.items.map(
            (listIncomeInventoryRequest) => {
              const listIncomeInventoryRequestObj: ListMainInventoryRequestsAPIResponse =
                {
                  id: listIncomeInventoryRequest!.id,
                  date: listIncomeInventoryRequest!.date,
                  branchOfficeName:
                    listIncomeInventoryRequest!.branchOffice?.name!,
                  status:
                    IOInventoryStatusSpanish[
                      listIncomeInventoryRequest?.status!
                    ],
                };
              return listIncomeInventoryRequestObj;
            }
          );
        setMainInventoryRequests(listMainIncomesInventoryView);
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListMainIncomesInventoryView();
  }, []);

  return {
    listMainInventoryRequests,
    setMainInventoryRequests,
    isLoading,
  };
}
