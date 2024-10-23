export interface IListClientsCreditsViewAPI {
  id: string;
  clientName: string;
  startDate: string;
  totalCredit: number;
  last_payment_date: string;
}

export interface IListClientsCreditsViewAPIResponse {
  client : {
    id: string;
    name: string;
    lastname: string;
    credit: {
      startDate: string;
      totalCredit: number;
      last_payment_date: string;
    };
  }
}
