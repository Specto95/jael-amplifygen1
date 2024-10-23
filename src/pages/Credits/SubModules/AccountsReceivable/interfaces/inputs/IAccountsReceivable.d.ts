export interface IUpdateSalesOperationPaymentInput {
    id: string;
    pendingToPay : number;
    amountPaid : number;
    currentTotalPayments : number;
    lastDatePaid: string;
}

export interface IUpdateSalesOperationClientCreditMovementPaymentInput {
    id : string;
    datePaid : string;
    pendingToPay : number;
    amountPaid : number;
    status : string;
}

export interface IUpdateSalesOperationStatusInput {
    id: string;
    status : string;
}