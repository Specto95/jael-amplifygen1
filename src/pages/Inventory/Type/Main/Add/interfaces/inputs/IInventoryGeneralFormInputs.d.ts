export interface IIncomeInventoryInput {
  id: string;
  // quantity: number;
  productProviderResponsibleID: string;
  providerID: string;
  userInfoID: string;
  date: string;
  incomeInventoryInventoryOperationIDId: string;
  comments?: string;
  branchOfficeID: string;
}

export interface IIncomeInventoryProductQuantityInput {
  // id: string;
  incomeQuantity : number;
  incomeInventoryID : string;
}

export interface IInventoryProductIncomeInventoryInput {
  incomeInventoryProductQuantityId: string;
  // incomeInventoryId: string;
  inventoryProductId: string;
}

export interface IOutcomeInventoryInput {
  id: string;
  // quantity: number;
  userInfoID: string;
  branchOfficeID: string;
  date: string;
  comments?: string;
  outcomeInventoryInventoryOperationIDId: string;
}

export interface IOutcomeInventoryProductQuantityInput {
  outcomeQuantity : number;
  outcomeInventoryID : string;
}

export interface IInventoryProductOutcomeInventoryInput {
  outcomeInventoryProductQuantityId : string;
  inventoryProductId : string;
}

export interface IInventoryOperationInput {
  id: string;
  operationType: string;
  inventoryID: string;
  inventoryOperationIncomeInventoryId: string;
}
