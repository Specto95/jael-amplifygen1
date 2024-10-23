export interface IUseListBranchOfficeInventoryProductsViewAPI {
  id: string;
  name: string;
  quantity: number;
  enterprise_name: string;
}

export interface IUseListBranchOfficeInventoryProductsViewAPIResponse {
  id: string;
  product: {
    id?: string;
    name: string;
    productProvider: {
      providerID: {
        enterprise_name: string;
      };
    };
  };
  quantity: number;
}
