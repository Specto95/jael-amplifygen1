import { useEffect, useState } from "react";

//* INTERFACES
import {
  IListClientMovementsDataAPI,
  IListClientMovementsDataTableAPI,
  IListClientMovementsDataAPIResponse,
} from "./interfaces/IListClientMovementsData";

import { useSectionProvider } from "@/hooks/useSectionProvider";

//* AMPLIFY IMPORTS
import { commaSeparator } from "../../../../../../utils/commaSeparator";
import { listClientCreditMovementsDataAPI } from "@/graphql/queries";
import {
  SalesOperationClientCreditMovementStatus,
  SalesOperationTermDaysToPay,
  SalesOperationTermDaysToPayNumber,
} from "@/utils/globalObjs/sideMenuSections/PointOfSale/PointOfSaleObjs";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function useListClientMovementsData(id: string, isPaying?: boolean) {
  const { filteredCheckedFields } = useSectionProvider();

  const [listClientMovementsData, setListClientMovementsData] = useState<
    IListClientMovementsDataAPI[]
  >([]);

  const [listClientMovementsDataTable, setListClientMovementsDataTable] =
    useState<IListClientMovementsDataTableAPI[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchListClientMovementsOperations = async () => {
      try {
        setIsLoading(true);
        setError(null);

        if (isPaying) {
          const {
            listClientCreditMovementsOperationsToPayAPI,
            listNextClientPaymentDateAPI,
          } = await import("@/graphql/queries");

          const result: any = await clientAPI(
            listClientCreditMovementsOperationsToPayAPI,
            {
              id,
            }
          );

          const salesOperations = result.data.listSalesOperations.items;
          const clientMovementsOperationsResult: IListClientMovementsDataTableAPI[] =
            [];
          for (const sale of salesOperations) {
            const clientMovementsDataresult: IListClientMovementsDataAPI = {
              clientID: sale.client.id,
              clientName: sale.client.name + " " + sale.client.lastname,
              credit_available: sale.client.credit?.credit_available,
              outstanding_balance: sale.client.credit?.outstanding_balance,
              creditSince: sale.client.credit?.createdAt.split("T")[0],
              totalToPay: sale.total / sale.totalPayments,
            };

            setListClientMovementsData([clientMovementsDataresult]);

            const nextPaymentResult: any = await clientAPI(
              listNextClientPaymentDateAPI,
              {
                salesOperationID: sale.id,
                //? +1 Because the currentTotalPayment starts at 0 and API excepts since 1
                numberOfPayment: sale.currentTotalPayments + 1,
              }
            );

            const nextPaymentDate =
              nextPaymentResult.data.listSalesOperationClientCreditMovements
                .items[0]?.paymentDate || "N/A";

            const salesOperationClientMovementID =
              nextPaymentResult.data.listSalesOperationClientCreditMovements
                .items[0]?.id || "N/A";

            const amountToPayMovement =
              nextPaymentResult.data.listSalesOperationClientCreditMovements
                .items[0]?.amountToPay || "N/A";

            const pendingToPayMovement =
              nextPaymentResult.data.listSalesOperationClientCreditMovements
                .items[0]?.pendingToPay || "N/A";

            const clientMovementOperationObj: IListClientMovementsDataTableAPI =
              {
                id: sale.id,
                amountPaid: sale.amountPaid,
                pendingToPay: sale.pendingToPay,
                termDaysToPay:
                  sale.termDaysToPay === SalesOperationTermDaysToPay.BIWEEKLY
                    ? SalesOperationTermDaysToPayNumber.BIWEEKLY
                    : SalesOperationTermDaysToPayNumber.MONTHLY,
                total: sale.total,
                currentTotalPayments: sale.currentTotalPayments,
                totalPayments: sale.totalPayments,
                nextPaymentDate,
                salesOperationClientMovementID,
                amountToPayMovement,
                pendingToPayMovement,
              };

            clientMovementsOperationsResult.push(clientMovementOperationObj);
          }

          setListClientMovementsDataTable(clientMovementsOperationsResult);
        } else {
          const {
            listClientCreditMovementsOperationsAPI,
            listNextClientPaymentDateAPI,
          } = await import("@/graphql/queries");

          interface IFilter {
            clientID?: {
              eq: string;
            };
            status?: {
              eq: string;
            };
            id?: {
              eq: string;
            };
          }

          const filter: IFilter = {
            clientID: {
              eq: id!,
            },
          };

          if (
            filteredCheckedFields.includes(
              SalesOperationClientCreditMovementStatus.EXPIRED
            )
          ) {
            filter["status"] = {
              eq: SalesOperationClientCreditMovementStatus.EXPIRED,
            };
          }
          // if (isPaying) {
          //   filter["id"] = {
          //     eq: id!,
          //   };
          // } else {
          //   filter["clientID"] = {
          //     eq: id!,
          //   };
          // }

          const result: any = await clientAPI(
            listClientCreditMovementsOperationsAPI,
            {
              filter: filter,
            }
          );

          const salesOperations = result.data.listSalesOperations.items;
          const clientMovementsOperationsResult: IListClientMovementsDataTableAPI[] =
            [];

          for (const sale of salesOperations) {
            const nextPaymentResult: any = await clientAPI(
              listNextClientPaymentDateAPI,
              {
                salesOperationID: sale.id,
                //? +1 Because the currentTotalPayment starts at 0 and API excepts since 1
                numberOfPayment: sale.currentTotalPayments + 1,
              }
            );

            const nextPaymentDate =
              nextPaymentResult.data.listSalesOperationClientCreditMovements
                .items[0]?.paymentDate || "N/A";

            const clientMovementOperationObj: IListClientMovementsDataTableAPI =
              {
                id: sale.id,
                amountPaid: sale.amountPaid,
                pendingToPay: sale.pendingToPay,
                termDaysToPay:
                  sale.termDaysToPay === SalesOperationTermDaysToPay.BIWEEKLY
                    ? SalesOperationTermDaysToPayNumber.BIWEEKLY
                    : SalesOperationTermDaysToPayNumber.MONTHLY,
                total: "$" + commaSeparator(sale.total),
                currentTotalPayments: sale.currentTotalPayments,
                totalPayments: sale.totalPayments,
                nextPaymentDate,
              };

            clientMovementsOperationsResult.push(clientMovementOperationObj);
          }

          setListClientMovementsDataTable(clientMovementsOperationsResult);
        }
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListClientMovementsOperations();
  }, [filteredCheckedFields]);

  useEffect(() => {
    const fetchListClientMovementsData = async () => {
      if (isPaying) return;
      try {
        setIsLoading(true);
        setError(null);
        const result: any = await clientAPI(listClientCreditMovementsDataAPI, {
          id,
        });

        const clientMovementsData: IListClientMovementsDataAPI[] =
          result.data.listClients.items.map(
            (item: IListClientMovementsDataAPIResponse) => {
              const clientMovementDataObj: IListClientMovementsDataAPI = {
                clientID: item.id,
                clientName: item.name + " " + item.lastname,
                credit_available: item.credit?.credit_available,
                outstanding_balance: item.credit?.outstanding_balance,
                creditSince: item.credit?.createdAt.split("T")[0],
              };

              return clientMovementDataObj;
            }
          );

        setListClientMovementsData(clientMovementsData);
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListClientMovementsData();
  }, []);

  return {
    listClientMovementsData,
    setListClientMovementsData,
    isLoading,
    listClientMovementsDataTable,
  };
}
