import { useState, useEffect } from "react";

import { IListSalesViewAPIReponse } from "./interfaces/IUseListSalesView";

//* AMPLIFY IMPORTS
import { listSalesOperationsViewByBranchOfficeIDAPI } from "@/graphql/queries";
import { SalesOperationStatus } from "@/utils/globalObjs/sideMenuSections/PointOfSale/PointOfSaleObjs";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function useListSalesView(branchOfficeID: string) {
  const [listSalesView, setListSalesView] = useState<
    IListSalesViewAPIReponse[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchListSalesView = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result: any = await clientAPI(
          listSalesOperationsViewByBranchOfficeIDAPI,
          {
            branchOfficeID,
          }
        );

        const listSalesResult = result.data.listSalesOperations.items.map(
          (item: IListSalesViewAPIReponse) => {
            return {
              ...item,
              client: item.client
                ? `${item.client.name} ${item.client.lastname}`
                : item.nonRegisteredClient?.fullName,
              status:
                item.status === SalesOperationStatus.PENDING
                  ? "PENDIENTE"
                  : "PAGADO",
            };
          }
        );
        setListSalesView(listSalesResult);
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListSalesView();
  }, [branchOfficeID]);

  return { listSalesView, setListSalesView, isLoading };
}
