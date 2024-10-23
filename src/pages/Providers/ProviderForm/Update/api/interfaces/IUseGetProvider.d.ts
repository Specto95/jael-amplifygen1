export interface IProviderProductData {
  id?: string;
  name: string;
  price: number;
  class_id: number;
  category_id: number;
  subcategory_id: number;
  commission: number;
}

export interface IProviderProductsData {
  products?: IProviderProductData[];
}

export interface IGetProviderResponsibleData {
  id: string;
  name: string;
  phone?: string;
  RFC?: string;
}

export interface IListEnterpriseData {
  enterprise_name: string;
  enterprise_RFC?: string;
  phone?: string;
  fixed_phone?: string;
  type: string;
}

export interface IProviderResponsibleData {
  id?: string;
  name: string;
  second_name?: string;
  lastname?: string;
  second_lastname?: string;
  phone?: string;
  RFC?: string;
  gender?: string;
}

export interface IProviderResponsiblesData {
  responsibles?: IProviderResponsibleData[];
}

export interface IProviderState
  extends IListEnterpriseData,
    IProviderProductsData,
    IProviderResponsiblesData {
  isSecondButton: boolean;
  productprovider?: {
    responsible?: {
      items: IProviderResponsibleData[];
    };
    product?: {
      items: {
        product: IProviderProductsData;
      }[];
    };
  };
}
