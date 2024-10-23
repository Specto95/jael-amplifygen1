export interface ICreateCreditRequestsAPI {
  clientID: string;
  creditRequestAmount: number;
  creditRequestStatus: string;
  creditRequestReason: string;
}

export interface IUpdateClientHasCreditRequestAPI {
  id: string;
  hasCreditRequest: boolean;
}