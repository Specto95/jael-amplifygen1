export interface IClass {
  id: number;
  name: string;
}

export interface ISubcategory {
  id: number;
  subcategory_name: string;
}

export interface ICategory {
  id: number;
  name: string;
  subcategories: ISubcategory[];
}

export interface ICategorie {
  id: number;
  name: string;
}

export interface IProvider {
  id: number;
  name: string;
}

export interface IProductProvider {
  id: string;
  productProviderProviderIDId: string;
}

export interface IUpdateProductData {
  id: string;
  name: string;
  description: string;
  price: number;
  class: string;
  category: string;
  subcategory: string;
  key: string;
  commission?: number;
  hasCommission: boolean;
  hasDiscount: boolean;
  quantity: number;
  inventoryID: string;
  isSecondButton: boolean;
  productProvider?: {
    items: {
      id: string;
    }[];
  };
  inventoryID?: string;
}

export interface IAddProductInputAPI{
  id?: string;
  class_id: number;
  category_id: number;
  subcategory_id: number;
  name: string;
  description: string;
  price: number;
  commission?: number; 
  hasCommission?: boolean;
  hasDiscount?: boolean;
  productProviderID?: string;
}

export interface IAddProductProviderInputAPI{
  id?: string;
  productProviderProviderIDId: string;
}

export interface IAddInventoryProductInputAPI{
  inventoryID: string;
  productID: string;
  quantity: number;
  customPrice: number;
  generalPrice: number;
  productProviderID?: string;
}

export interface ICreateBranchOfficeProductInputAPI{
  branchOfficeID: string;
  productID: string;
  customPrice: number;
}

export interface IUpdateInventoryProductCustomPriceInputAPI {
  id: string;
  // customPrice?: number;
  generalPrice: number;
}