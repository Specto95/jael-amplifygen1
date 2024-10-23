export interface IListProductProviderProductsByProductProviderIDAPIResponse {
  name: string;
  id: number;
  category_id: number;
  class_id: number;
  price: number;
  subcategory_id: number;
  productProviderID: string;
  inventoryProduct: {
    items: {
      quantity: number;
      id: string;
    }[];
  };
}

export interface IListProductProviderProductsByProductProviderIDAPI {
  id: string;
  name: string;
  category_id: number;
  class_id: number;
  price: number;
  quantity: number;
  subcategory_id: number;
  productProviderID: string;
  inventoryProductID: string;
}
