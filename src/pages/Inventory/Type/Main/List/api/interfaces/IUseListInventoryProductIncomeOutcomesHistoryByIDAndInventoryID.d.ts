//?---------------- INCOME INVENTORY INTERFACES

export interface IUseListInventoryProductFunctionArrayParams {
  incomeInventories?: IUseListInventoryProductIncomeInventoriesHistoryResponse[];
  outcomeInventories?: IUseListInventoryProductOutcomeInventoriesHistoryResponse[];
}
[];

export interface IUseListInventoryProductIOHistoryByIDAndInventoryIDTableData {
  date: string;
  quantity: number;
  operationTypeID: string;
  operationType: string;
  enterprise_name: string;
  branchOfficeName: string;
  userInfoName: string;
}

export interface IUseListInventoryProductOutcomeInventoriesHistoryResponse {
  id: string;
  date: string;
  inventoryOperationID: string;
  inventoryOperationType: string;
  branchOfficeID: string;
  branchOfficeName: string;
  userInfoID: string;
  userInfoName: string;
  quantity: number;
}

export interface IUseListInventoryProductIncomeInventoriesHistoryResponse {
  id: string;
  date: string;
  inventoryOperationID: string;
  inventoryOperationType: string;
  providerID: string;
  providerName: string;
  userInfoID: string;
  userInfoName: string;
  quantity: number;
}

export interface IUseListInventoryProductIncomeInventoryProductQuantityObj {
  incomeInventoryProductQuantity: {
    incomeQuantity: number;
    incomeInventory: {
      id: string;
      date: string;
      inventoryOperationID: {
        id: string;
        operationType: string;
      };
      provider: {
        enterprise_name: string;
        id: string;
      };
      userInfo: {
        id: string;
        name: string;
      };
    };
  };
}

export interface IUseListInventoryProductGeneralDetailsProp{
  inventoryProductGeneralDetails: IUseListInventoryProductGeneralDetails;
}

export interface IUseListInventoryProductGeneralDetails {
  inventoryProductID: string;
  productName: string;
  inventoryProductQuantity: number;
}

export interface IUseListInventoryProductIOHistoryByIDAndInventoryIDAPI {
  inventoryProductID: string;
  productName: string;
  inventoryProductQuantity: number;
  incomeInventories?: IUseListInventoryProductIncomeInventoriesHistoryResponse[];
  outcomeInventories?: IUseListInventoryProductOutcomeInventoriesHistoryResponse[];
}

export interface IUseListInventoryProductIOHistoryByIDAndInventoryIDAPIResponse {
  id: string;
  product: {
    name: string;
  };
  quantity: number;
  inventoryProductIncomeInventory: {
    items: IUseListInventoryProductIncomeInventoryProductQuantityObj[];
  };
  inventoryProductOutcomeInventory: {
    items: IUseListInventoryProductOutcomeInventoryProductQuantityObj[];
  };
}

//?---------------- OUTCOME INVENTORY INTERFACES

export interface IUseListInventoryProductOutcomeInventoryProductQuantityObj {
  outcomeInventoryProductQuantity: {
    outcomeQuantity: number;
    outcomeInventory: {
      id: string;
      date: string;
      inventoryOperationID: {
        id: string;
        operationType: string;
      };
      branchOffice: {
        id: string;
        name: string;
      };
      userInfo: {
        id: string;
        name: string;
      };
    };
  };
}
