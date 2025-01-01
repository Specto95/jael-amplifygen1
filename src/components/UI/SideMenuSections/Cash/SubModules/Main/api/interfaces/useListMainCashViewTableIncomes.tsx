import { useState, useEffect } from "react";

//* INTERFACES
import {
  IListCashTableInfoAPIResponse,
  IListCashTableInfoAPI,
} from "./IListMainCashTableIncomes";

//* AMPLIFY IMPORTS
import { listPaidSalesOperationsAPI } from "@/graphql/queries";
import {
  CashUserTypeTableSpanish,
  MovementTypeSpanish,
} from "@/utils/globalObjs/sideMenuSections/Cash/CashObjs";
import {
  SalesOperationPaymentStatus,
  SalesOperationStatusSpanish,
} from "@/utils/globalObjs/sideMenuSections/PointOfSale/PointOfSaleObjs";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function useListMainCashViewTableIncomes() {
  const [listMainCashTableIncomes, setlistMainCashTableIncomes] = useState<
    IListCashTableInfoAPI[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchListlistMainCashTableIncomes = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // interface IFilter {
        //   status: {
        //     eq: string;
        //   };
        // }

        // const filter: IFilter = {
        //   status: {
        //     eq: SalesOperationPaymentStatus.PAID,
        //   },
        // };

        const result: any = await clientAPI(listPaidSalesOperationsAPI);

        const listlistMainCashTableIncomesResult: IListCashTableInfoAPI[] =
          result.data.listSalesOperations.items.map(
            (item: IListCashTableInfoAPIResponse) => {
              const listlistMainCashTableIncomesObj: IListCashTableInfoAPI = {
                id: item.id,
                branchOfficeName: item.branchOffice.name,
                date: item.date,
                cutOffDay: 1,
                movementType:
                  item.status === SalesOperationPaymentStatus.PAID
                    ? MovementTypeSpanish.INCOME
                    : SalesOperationPaymentStatus.PENDING
                    ? MovementTypeSpanish.INCOMEPENDING
                    : MovementTypeSpanish.OUTCOME,
                // item.status ===
                // MovementTypeSpanish.INCOME.toUpperCase(),
                name: item.client
                  ? item.client.name + " " + item.client.lastname
                  : "N/A",
                total: item.total,
                userType: CashUserTypeTableSpanish.CLIENT,
                status:
                  item.status === SalesOperationPaymentStatus.PAID
                    ? SalesOperationStatusSpanish.PAID
                    : SalesOperationPaymentStatus.PENDING
                    ? SalesOperationStatusSpanish.PENDING
                    : SalesOperationStatusSpanish.EXPIRED,
              };

              return listlistMainCashTableIncomesObj;
            }
          );

        setlistMainCashTableIncomes(listlistMainCashTableIncomesResult);
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListlistMainCashTableIncomes();
  }, []);

  return { listMainCashTableIncomes, setlistMainCashTableIncomes, isLoading };
}
