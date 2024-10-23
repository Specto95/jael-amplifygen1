export interface IClientFullName {
  name: string;
  second_name: string;
  lastname: string;
  second_lastname: string;
}

export interface IListSalesViewAPIReponse {
  id: string;
  nonRegisteredClient?: {
    fullName : string;
  }
  status: string;
  client: IClientFullName;
}
