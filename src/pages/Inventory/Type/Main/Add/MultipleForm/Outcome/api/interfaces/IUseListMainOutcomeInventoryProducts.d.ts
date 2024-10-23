export interface IUseListMainOutcomeInventoryProductsAPI {
  inventoryProductID: string;
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface IUseListMainOutcomeInventoryProductsAPIResponse {
  id: string;
  product: {
    id: string;
    name: string;
    price: number;
  };
  quantity: number;
}
