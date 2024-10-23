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
  productProviderID: string;
  fullname?: string;
}

export type IListProvidersInventoryByNameAPIUnion =
  | IListProvidersInventoryByNameAPI
  | IListProvidersInventoryByNameAPI[{}];

export interface IListProvidersInventoryResponsibleFullnameGQLAPI {
  productprovider: {
    id: string;
    responsible: {
      items: IListProvidersInventoryResponsibleAPI[];
    };
  };
  enterprise_name?: string;
}
