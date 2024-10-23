export interface ICheckIsLastPaymentAPIResponse {
  currentTotalPayments: number;
  salesOperationClientCreditMovements: {
    items: {
      numberOfPayment: number;
    }[];
  };
}

export interface ICheckIsLastPaymentAPI {
  currentTotalPayments: number;
  numberOfPayment: number;
}
