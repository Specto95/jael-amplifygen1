export interface ICreateCreditRequestsAPI {
  clientID: string;
  creditRequestAmount: number;
  creditRequestStatus: string;
  creditRequestReason: string;
  branchOfficeID?: string;
}

export interface IUpdateClientHasCreditRequestAPI {
  id: string;
  hasCreditRequest: boolean;
}