export interface IUseListCreditAccountsReceivableAPI {
  lastDatePaid?: string;
  clientName: string;
  termDaysToPay: number | string;
  pendingToPay?: number | string;
  // totalPayments?: number | null;
  currentTotalPayments?: number | null;
  totalPayments?: string | number | null;
  amountPaid?: number | null;
  status: string;
  paymentDate: string;
  datePaid?: string;
  saleSince: string;
  id: string;
  total: number | string;
  statusActions: string;
  branchOfficeName?: string;
  paymentStatus?: string;
}

export interface IUseListCreditAccountsReceivableAPIResponse {
  client: {
    name: string;
    lastname: string;
  };
  status: string;
  termDaysToPay: number;
  pendingToPay: number;
  salesOperationClientCreditMovements: {
    items: {
      paymentDate: string;
      datePaid?: string;
    }[];
  };
  branchOffice?: {
    name?: string;
  };
  createdAt: string;
  id: string;
  total: number;
  totalPayments?: number;
  currentTotalPayments?: number;
  amountPaid?: number;
}
