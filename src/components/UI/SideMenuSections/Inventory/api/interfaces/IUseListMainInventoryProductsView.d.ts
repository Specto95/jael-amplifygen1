export interface IUseListMainInventoryProductsViewAPI {
  id: string;
  name: string;
  quantity: number;
  enterprise_name: string;
}

export interface IUseListMainInventoryProductsViewAPIResponse {
  product: {
    id: string;
    name: string;
    productProvider: {
      providerID: {
        enterprise_name: string;
      };
    };
  };
  quantity: number;
}
