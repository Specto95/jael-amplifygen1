export interface IListBranchOfficeInventoryProductsProductObj {
  customPrice: number;
  generalPrice: number;
  id: string;
  product: {
    id: string;
    name: string;
  };
}

export interface IListBranchOfficeInventoryProductsProductObjResponse {
  customPrice: number;
  generalPrice: number;
  id: string;
  productName: string;
  productID: string;
}

export interface IListBranchOfficeProductsAPI {
  id: string;
  inventoryProduct: {
    items: IListBranchOfficeInventoryProductsProductObj[];
  };
  product: {
    id: string;
    name: string;
    price: number;
  };
  branchOffice: {
    id: string;
    name: string;
  };
}

export interface IListBranchOfficeProductsAPIResponseGeneral {
  branchOffice: {
    id: string;
    name: string;
  };
  inventoryProduct: {
    items: IListBranchOfficeInventoryProductsProductObj[];
  };
}

export interface IListBranchOfficeProductsAPIResponse {
  inventoryProduct: IListBranchOfficeInventoryProductsProductObjResponse[];
  // id: string;
  // customPrice: number;
  // price: number;
  // productID: string;
  // productName: string;
  branchOfficeName: string;
  branchOfficeID: string;
}

export interface IListBranchOfficeProductsTransformedDataAPI {
  // inventoryProduct : IListBranchOfficeInventoryProductsProductObjResponse[];
  id: string;
  customPrice: number;
  price: number;
  productID: string;
  productName: string;
  branchOfficeName: string;
  branchOfficeID: string;
}
