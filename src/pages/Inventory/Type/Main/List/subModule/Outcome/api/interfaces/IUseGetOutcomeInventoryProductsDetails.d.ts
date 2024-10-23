export interface IUseGetOutcomeInventoryProductsDetailsUserInfoName {
  name: string;
}

export interface IUseGetOutcomeInventoryProductsDetailsBranchOfficeName {
  name: string;
}

export interface IUseGetOutcomeInventoryProductsDetailsProducts {
  id: string;
  name: string;
  class_id: string;
  category_id: string;
  subcategory_id: string;
}

export interface IUseGetOutcomeInventoryProductsDetailsInventoryProducts {
  inventoryProducts: {
    items: {
      inventoryProduct: {
        product: IUseGetOutcomeInventoryProductsDetailsProducts;
        customPrice: number;
      };
    }[];
  };
}

export interface IUseGetOutcomeInventoryProductsDetailsAPI {
  id: string;
  date: string;
  comments?: string;
  userInfo: IUseGetOutcomeInventoryProductsDetailsUserInfoName;
  branchOffice: IUseGetOutcomeInventoryProductsDetailsBranchOfficeName;
  outcomeInventoryProductQuantities: {
    items: IUseGetOutcomeInventoryProductsDetailsInventoryProducts[];
  };
}

export interface IUseGetOutcomeInventoryProductsOutcomeInventoryProductQuantitiesResponse {
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
        };
        productProviderID: string;
      };
    }[];
  };
  outcomeQuantity: number;
}

export interface IUseGetOutcomeInventoryProductsInputDetails {
  id: string;
  date: string;
  userInfoName: string;
  branchOfficeName: string;
  comments: string;
}

export interface IUseGetOutcomeInventoryProductsDetailsAPIResponse {
  id: string;
  name: string;
  class_id: number;
  category_id: number;
  subcategory_id: number;
  productProviderID: string;
  price: number;
  quantity: number;
}
[];
