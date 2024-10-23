export interface ICreateSalesOperationCustomerSubscriptionInput {
  id: string;
  salesOperationID: string;
  clientID: string;
  date: string;
  advancePayment: number;
}

export interface IUpdateSalesOperationClientCreditMovementPaymentInput {
  id : string;
  datePaid? : string;
  pendingToPay : number;
  amountPaid : number;
  status? : string;
}

export interface IUpdateSalesOperationPaymentInput {
  id: string;
  pendingToPay : number;
  amountPaid : number;
  currentTotalPayments? : number;
  lastDatePaid?: string;
}