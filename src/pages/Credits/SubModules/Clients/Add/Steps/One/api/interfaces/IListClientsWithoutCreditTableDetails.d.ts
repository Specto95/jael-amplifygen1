export interface IListClientSelectedFullDetailsAPI {
  id: string;
  creditRequestAmount: number;
  creditRequestReason: string;
  creditRequestStatus: string;
  client: {
    id: string;
    name: string;
    lastname: string;
    phone: string;
    email: string;
    hasCredit: boolean;
    address: string;
    settlement: string;
    state: string;
    postal_code: string;
    city: string;
    createdAt: string;
    credit: {
      id?: string;
      credit_available: number;
      outstanding_balance: number;
      createdAt: string;
      totalCredit?: number;
    };
  };
  
}

export interface IListClientSelectedFullDetailsAPIResponse {
  creditRequestID: string;
  creditID?: string;
  id: string;
  name: string;
  // lastname: string;
  email: string;
  phone: string;
  hasCredit: boolean;
  address: string;
  settlement: string;
  state: string;
  postal_code: string;
  city: string;
  clientSince: string;
  credit_available: number;
  creditSince?: string;
  outstanding_balance: number;
  creditRequestAmount?: number;
  creditRequestReason?: string;
  creditRequestStatus?: string;
  totalCredit?: number;
}

export interface IListClientsWithoutCreditTableDetailsAPI {
  id: string;
  name: string;
  lastname: string;
  state: string;
  createdAt: string;
}

export interface IListClientsWithoutCreditTableDetailsAPIResponse {
  id: string;
  name: string;
  clientSince: string;
  state: string;
}
