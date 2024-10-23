export interface IGetClientDetailsByIDAPIResponse {
  id?: string;
  name: string;
  second_name?: string;
  lastname: string;
  second_lastname?: string;
  email?: string;
  phone: string;
  createdAt: string;
  address?: string;
  state?: string;
  credit: {
    credit_available?: number;
  };
}

export interface IGetClientDetailsByIDAPI{
    id?: string;
    name: string;
    second_name?: string;
    lastname: string;
    second_lastname?: string;
    email?: string;
    phone: string;
    clientSince: string;
    address?: string;
    state?: string;
    credit_available?: number;
}