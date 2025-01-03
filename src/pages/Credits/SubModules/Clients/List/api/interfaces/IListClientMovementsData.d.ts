export interface IListClientMovementsDataAPIResponse {
  id: string;
  name: string;
  lastname: string;
  credit: {
    credit_available: number;
    outstanding_balance: number;
    createdAt: string;
  };
  salesOperation: {
    items: IListClientSalesOperationsObj[];
  };
}

export interface IListClientSalesOperationsObj {
  amountPaid: number;
  id: string;
  pendingToPay: number;
  total: number;
  termDaysToPay: number;
  currentTotalPayments: number;
  totalPayments: number;
  lastPaymentDate: string;
}

export interface IListClientMovementsDataAPI {
  clientID: string;
  clientName: string;
  credit_available: number;
  outstanding_balance: number;
  creditSince: string;
  totalToPay?: number;
  totalPayments?: number;
}

export interface IListClientMovementsDataTableAPI {
  amountPaid: number;
  id: string;
  pendingToPay: number;
  total: number | string;
  termDaysToPay: number | string;
  currentTotalPayments: number;
  totalPayments: number;
  paymentDate?: string;
  nextPaymentDate?: string;
  salesOperationClientMovementID?: string;
  amountToPayMovement?: number;
  pendingToPayMovement?: number;
}
