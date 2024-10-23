export interface IGetCustomerSubscriptionDetailsByIDAPIResponse {
  id?: string;
  name: string;
  second_name?: string;
  lastname: string;
  second_lastname?: string;
  email?: string;
  phone: string;
  createdAt: string;
  credit: {
    credit_available: number;
    outstanding_balance: number;
  };
  branchOffice: {
    name: string;
  };
}

export interface IGetCustomerSubscriptionDetailsByIDAPI {
  id?: string;
  name: string;
  second_name?: string;
  lastname: string;
  second_lastname?: string;
  email?: string;
  phone: string;
  clientSince: string;
  outstanding_balance?: number;
  branchOfficeName?: string;
  credit_available?: number;
}
