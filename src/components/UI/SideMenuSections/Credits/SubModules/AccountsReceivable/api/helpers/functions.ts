//* AMPLIFY IMPORTS
import {
  listCreditClientAccountReceivableViewAPI,
  listNextClientPaymentDateAPI,
} from "@/graphql/queries";
import { SubMovementType } from "@/utils/globalObjs/sideMenuSections/Cash/CashObjs";
import { IUseListCreditAccountsReceivableAPI } from "../interfaces/IUseListCreditAccountsReceivable";
import {
  SalesOperationStatus,
  SalesOperationStatusSpanish,
  SalesOperationTermDaysToPay,
  SalesOperationTermDaysToPayNumber,
} from "@/utils/globalObjs/sideMenuSections/PointOfSale/PointOfSaleObjs";
import { formatYYYYMMDDDate } from "@/utils/dates";
import { commaSeparator } from "@/utils/commaSeparator";

import { clientAPI } from "@/utils/amplifyAPI/client";
import {
  ListSalesOperationClientCreditMovementsQuery,
  ListSalesOperationsQuery,
} from "@/API";

interface IFilter {
  clientID?: {
    eq: string;
  };
}

export function validateCreditAccountsReceivableFilter(clientID: string) {
  const filter: IFilter = {};
  if (clientID) {
    filter.clientID = {
      eq: clientID,
    };
  }
  return filter;
}

export async function listCreditAccountsReceivableData(
  subMovementType?: string,
  clientID?: string
) {
  const filter: IFilter = {};

  const includeBranchOffice = subMovementType === SubMovementType.INCOMESALES;

  interface IListCreditClientAccountReceivableViewAPIObj {
    includeBranchOffice?: boolean;
    filter?: IFilter;
  }

  const listCreditClientAccountReceivableViewAPIObj: IListCreditClientAccountReceivableViewAPIObj =
    {
      includeBranchOffice,
    };

  if (clientID) {
    filter.clientID = {
      eq: clientID,
    };

    listCreditClientAccountReceivableViewAPIObj.filter =
      validateCreditAccountsReceivableFilter(clientID);
  }

  const result = (await clientAPI(
    listCreditClientAccountReceivableViewAPI,

    listCreditClientAccountReceivableViewAPIObj
  )) as { data: ListSalesOperationsQuery };

  const salesOperations = result.data.listSalesOperations!.items;

  const clientMovementsOperationsResult: IUseListCreditAccountsReceivableAPI[] =
    [];

  for (let sale of salesOperations) {
    const nextPaymentResult = (await clientAPI(listNextClientPaymentDateAPI, {
      salesOperationID: sale!.id,
      //? +1 Because the currentTotalPayment starts at 0 and API excepts since 1
      numberOfPayment: sale!.currentTotalPayments! + 1,
    })) as { data: ListSalesOperationClientCreditMovementsQuery };

    const nextPaymentDate =
      nextPaymentResult.data.listSalesOperationClientCreditMovements!.items[0]
        ?.paymentDate || "N/A";

    const clientMovementOperationObj: IUseListCreditAccountsReceivableAPI = {
      id: sale!.id,
      clientName: sale!.client!.name + " " + sale!.client!.lastname,
      paymentDate: nextPaymentDate,
      datePaid: sale!.lastDatePaid || "N/A",
      saleSince: formatYYYYMMDDDate(sale!.createdAt),
      pendingToPay: "$" + commaSeparator(sale!.pendingToPay!),
      termDaysToPay:
        sale!.termDaysToPay === SalesOperationTermDaysToPay.BIWEEKLY
          ? SalesOperationTermDaysToPayNumber.BIWEEKLY
          : SalesOperationTermDaysToPayNumber.MONTHLY,
      total: "$" + commaSeparator(sale!.total!),
      totalPayments: `${sale!.currentTotalPayments}/${sale!.totalPayments}`,
      status:
        sale!.status === SalesOperationStatus.EXPIRED
          ? SalesOperationStatusSpanish.EXPIRED
          : sale!.status === SalesOperationStatus.PAID
          ? SalesOperationStatusSpanish.PAID
          : subMovementType === SubMovementType.INCOMESALES
          ? SalesOperationStatusSpanish.PENDING_CASHSALE
          : SalesOperationStatusSpanish.PENDING,
      statusActions:
        sale!.status === SalesOperationStatus.EXPIRED ||
        sale!.status === SalesOperationStatus.PENDING
          ? subMovementType === SubMovementType.INCOMESALES
            ? SalesOperationStatusSpanish.SELECT
            : SalesOperationStatusSpanish.PAY
          : SalesOperationStatusSpanish.PAID,
    };

    if (clientID) {
      clientMovementOperationObj["pendingToPay"] =
        "$" + commaSeparator(sale!.pendingToPay!);
      clientMovementOperationObj["totalPayments"] = sale!.totalPayments;
      clientMovementOperationObj["currentTotalPayments"] =
        sale!.currentTotalPayments;
      clientMovementOperationObj["amountPaid"] = sale!.amountPaid;
    }

    if (subMovementType === SubMovementType.INCOMESALES) {
      clientMovementOperationObj["branchOfficeName"] = sale!.branchOffice!.name;
      clientMovementOperationObj["paymentStatus"] =
        sale!.status === SalesOperationStatus.EXPIRED
          ? SalesOperationStatusSpanish.EXPIRED
          : sale!.status === SalesOperationStatus.PAID
          ? SalesOperationStatusSpanish.PAID
          : sale!.amountPaid! > 0
          ? `Abono - $${commaSeparator(sale!.amountPaid!)}`
          : SalesOperationStatusSpanish.PENDING;
    }

    clientMovementsOperationsResult.push(clientMovementOperationObj);
  }

  return clientMovementsOperationsResult;
}
