export interface IListProvidersInventoryResponsibleFullname {
  fullname: string;
}

export interface IListProvidersInventoryResponsibleAPI {
  id: string;
  name: string;
  lastname?: string;
  second_name?: string;
  second_lastname: string;
}

export interface IListProvidersInventoryByNameAPI {
  enterprise_name: string;
  responsible?: IListProvidersInventoryResponsibleFullname[];
  providerID: string;
  fullname?: string;
}

export type IListProvidersInventoryByNameAPIUnion =
  | IListProvidersInventoryByNameAPI
  | IListProvidersInventoryByNameAPI[{}];

export interface IListProvidersInventoryResponsibleFullnameGQLAPI {
  id: string;
  productprovider: {
    id: string;
    responsible: {
      items: IListProvidersInventoryResponsibleAPI[];
    };
  };
  enterprise_name?: string;
}
