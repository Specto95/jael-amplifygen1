export interface IListProvidersInventoryResponsibleFullname {
  // name: string;
  // lastname?: string;
  // second_name?: string;
  // second_lastname: string;
  fullname: string;
}

export interface IListProvidersInventoryResponsibleAPI {
  name: string;
  lastname?: string;
  second_name?: string;
  second_lastname: string;
}

export interface IListProvidersInventoryByNameAPI {
  // enterprise_name: string;
  responsible?: IListProvidersInventoryResponsibleFullname[];
  fullname?: string;
  id?: string;
}
