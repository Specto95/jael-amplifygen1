import { useState, useEffect } from "react";

//* AMPLIFY IMPORTS
import { listBOInventoryRequestsViewAPI } from "@/graphql/queries";

//*INTERFACES
import { ListBOInventoryRequestsAPIResponse } from "./interfaces/ListMainInventoryRequests";

import { clientAPI } from "@/utils/amplifyAPI/client";
import {
  IOInventoryStatus,
  IOInventoryStatusSpanish,
  ListIncomeInventoryRequestsQuery,
} from "@/API";

export function useListBOInventoryRequests(
  branchOfficeID: string,
  status: IOInventoryStatus
) {
  const [listBOInventoryRequests, setBOInventoryRequests] = useState<
    ListBOInventoryRequestsAPIResponse[]
  >([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchListBOInventoryRequestView = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const mainInventoryRequestsResult = (await clientAPI(
          listBOInventoryRequestsViewAPI,
          {
            branchOfficeID,
            status,
          }
        )) as {
          data: ListIncomeInventoryRequestsQuery;
        };

        const listBOIncomesInventoryView =
          mainInventoryRequestsResult.data.listIncomeInventoryRequests!.items.map(
            (listIncomeInventoryRequest) => {
              const listIncomeInventoryRequestObj: ListBOInventoryRequestsAPIResponse =
                {
                  id: listIncomeInventoryRequest!.id,
                  date: listIncomeInventoryRequest!.date,
                  status:
                    IOInventoryStatusSpanish[
                      listIncomeInventoryRequest?.status!
                    ],
                };
              return listIncomeInventoryRequestObj;
            }
          );
        setBOInventoryRequests(listBOIncomesInventoryView);
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListBOInventoryRequestView();
  }, [status, branchOfficeID]);

  return {
    listBOInventoryRequests,
    setBOInventoryRequests,
    isLoading,
  };
}
