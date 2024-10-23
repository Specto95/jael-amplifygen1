export interface IUseGetIncomeInventoryProductsDetailsUserInfoName {
  name: string;
}

export interface IUseGetIncomeInventoryProductsDetailsProviderName {
  enterprise_name: string;
}

export interface IUseGetIncomeInventoryProductsDetailsProducts {
  id: string;
  name: string;
  class_id: string;
  category_id: string;
  subcategory_id: string;
}

export interface IUseGetIncomeInventoryProductsDetailsInventoryProducts {
  inventoryProducts: {
    items: {
      inventoryProduct: {
        product: IUseGetIncomeInventoryProductsDetailsProducts;
        customPrice: number;
      };
    }[];
  };
}

export interface IUseGetIncomeInventoryProductsDetailsAPI {
  id: string;
  date: string;
  comments?: string;
  userInfo: IUseGetIncomeInventoryProductsDetailsUserInfoName;
  provider: IUseGetIncomeInventoryProductsDetailsProviderName;
  incomeInventoryProductQuantities: {
    items: IUseGetIncomeInventoryProductsDetailsInventoryProducts[];
  };
}

export interface IUseGetIncomeInventoryProductsTableData {
  id: string;
  name: string;
  class_id: number;
  category_id: number;
  subcategory_id: number;
  productProviderID: string;
  price: number;
  quantity: number;
}

export interface IUseGetIncomeInventoryProductsIncomeInventoryProductQuantitiesResponse {
  inventoryProducts: {
    items: {
      inventoryProduct: {
        customPrice: number;
        product: {
          id: string;
          name: string;
          class_id: number;
          category_id: number;
          subcategory_id: number;
        }
        productProviderID: string;
      }
    }[]
  }
  incomeQuantity: number;
}

export interface IUseGetIncomeInventoryProductsInputDetails {
  id: string;
  date: string;
  userInfoName: string;
  providerName: string;
  comments: string;
}

export interface IUseGetIncomeInventoryProductsDetailsAPIResponse {
  
  incomeInventoryProducts: IUseGetIncomeInventoryProductsTableData[];
}
