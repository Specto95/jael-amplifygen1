export interface IUpdateCreditRequestsAPI {
  id: string;
  creditRequestStatus: string;
}

export interface ICreateCreditAPI {
  creditsClientId: string;
  totalCredit: number;
  credit_available: number;
  outstanding_balance: number;
  payment_status: string;
  last_payment_date: string | null;
  startDate: string;
}

export interface IUpdateClientCreditInfoInputAPI {
  id: string;
  creditID?: string;
  hasCredit?: boolean;
  hasCreditRequest: boolean;
}

export interface IUpdateClientAmountCreditInputAPI {
  id: string;
  totalCredit: number;
  credit_available: number;
}
