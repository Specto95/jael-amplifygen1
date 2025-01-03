import { useState, useEffect } from "react";

//* AMPLIFY IMPORTS
import {
  listBOInventoryRequestsViewAPI,
  listBOInventoryRequestsViewByStatusAPI,
} from "@/graphql/queries";

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
  status?: IOInventoryStatus | ""
) {
  const [listBOInventoryRequests, setBOInventoryRequests] = useState<
    ListBOInventoryRequestsAPIResponse[]
  >([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  // Fetch by branchOfficeID only
  const fetchListBOInventoryRequestView = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const mainInventoryRequestsResult = (await clientAPI(
        listBOInventoryRequestsViewAPI,
        { branchOfficeID }
      )) as { data: ListIncomeInventoryRequestsQuery };

      const listBOIncomesInventoryView =
        mainInventoryRequestsResult.data.listIncomeInventoryRequests!.items?.map(
          (listIncomeInventoryRequest) => ({
            id: listIncomeInventoryRequest!.id,
            date: listIncomeInventoryRequest!.date,
            status:
              IOInventoryStatusSpanish[listIncomeInventoryRequest?.status!],
          })
        ) || [];

      setBOInventoryRequests(listBOIncomesInventoryView);
    } catch (er) {
      console.error("Error fetching by branchOfficeID:", er);
      setError(er);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch by branchOfficeID and status
  const fetchListBOInventoryRequestByStatusView = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const mainInventoryRequestsResult = (await clientAPI(
        listBOInventoryRequestsViewByStatusAPI,
        { status, branchOfficeID }
      )) as { data: ListIncomeInventoryRequestsQuery };

      const listBOIncomesInventoryView =
        mainInventoryRequestsResult.data.listIncomeInventoryRequests!.items?.map(
          (listIncomeInventoryRequest) => ({
            id: listIncomeInventoryRequest!.id,
            date: listIncomeInventoryRequest!.date,
            status:
              IOInventoryStatusSpanish[listIncomeInventoryRequest?.status!],
          })
        ) || [];

      setBOInventoryRequests(listBOIncomesInventoryView);
    } catch (er) {
      console.error("Error fetching by status:", er);
      setError(er);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (branchOfficeID && !status) {
      fetchListBOInventoryRequestView();
    }
  }, [branchOfficeID]);

  useEffect(() => {
    if (branchOfficeID && status) {
      fetchListBOInventoryRequestByStatusView();
    }
  }, [branchOfficeID, status]);

  // useEffect(() => {
  //   const fetchListBOInventoryRequestView = async () => {
  //     try {
  //       setIsLoading(true);
  //       setError(null);
  //       const mainInventoryRequestsResult = (await clientAPI(
  //         listBOInventoryRequestsViewAPI,
  //         {
  //           branchOfficeID,
  //         }
  //       )) as {
  //         data: ListIncomeInventoryRequestsQuery;
  //       };

  //       console.log(
  //         mainInventoryRequestsResult.data.listIncomeInventoryRequests!.items
  //       );

  //       const listBOIncomesInventoryView =
  //         mainInventoryRequestsResult.data.listIncomeInventoryRequests!.items?.map(
  //           (listIncomeInventoryRequest) => {
  //             const listIncomeInventoryRequestObj: ListBOInventoryRequestsAPIResponse =
  //               {
  //                 id: listIncomeInventoryRequest!.id,
  //                 date: listIncomeInventoryRequest!.date,
  //                 status:
  //                   IOInventoryStatusSpanish[
  //                     listIncomeInventoryRequest?.status!
  //                   ],
  //               };
  //             return listIncomeInventoryRequestObj;
  //           }
  //         );
  //       setBOInventoryRequests(listBOIncomesInventoryView);
  //     } catch (er) {
  //       console.log("Error: ", er);
  //       setError(er);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchListBOInventoryRequestView();
  // }, [branchOfficeID]);

  // useEffect(() => {
  //   const fetchListBOInventoryRequestByStatusView = async () => {
  //     try {
  //       setIsLoading(true);
  //       setError(null);
  //       const mainInventoryRequestsResult = (await clientAPI(
  //         listBOInventoryRequestsViewByStatusAPI,
  //         {
  //           status,
  //           branchOfficeID,
  //         }
  //       )) as {
  //         data: ListIncomeInventoryRequestsQuery;
  //       };

  //       console.log(
  //         mainInventoryRequestsResult.data.listIncomeInventoryRequests!.items
  //       );

  //       const listBOIncomesInventoryView =
  //         mainInventoryRequestsResult.data.listIncomeInventoryRequests!.items?.map(
  //           (listIncomeInventoryRequest) => {
  //             const listIncomeInventoryRequestObj: ListBOInventoryRequestsAPIResponse =
  //               {
  //                 id: listIncomeInventoryRequest!.id,
  //                 date: listIncomeInventoryRequest!.date,
  //                 status:
  //                   IOInventoryStatusSpanish[
  //                     listIncomeInventoryRequest?.status!
  //                   ],
  //               };
  //             return listIncomeInventoryRequestObj;
  //           }
  //         );
  //       setBOInventoryRequests(listBOIncomesInventoryView);
  //     } catch (er) {
  //       console.log("Error: ", er);
  //       setError(er);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchListBOInventoryRequestByStatusView();
  // }, [status]);

  return {
    listBOInventoryRequests,
    setBOInventoryRequests,
    isLoading,
  };
}
