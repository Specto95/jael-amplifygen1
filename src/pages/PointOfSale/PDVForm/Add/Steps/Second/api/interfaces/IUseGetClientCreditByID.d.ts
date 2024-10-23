export interface IGetClientCreditByID {
  id: string;
  clientID: string;
  credit_available: number;
  outstanding_balance: number;
}

export interface IGetClientCreditByIDResponse {
  id: string;
  creditsClientId: string;
  credit_available: number;
  outstanding_balance: number;
}
