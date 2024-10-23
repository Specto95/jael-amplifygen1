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

export interface IOutcomeInventoryInput {
  quantity: number;
  userInfoID: string;
  branchOfficeID: string;
  date: string;
  comments?: string;
  outcomeInventoryInventoryOperationIDId: string;
}

export interface IInventoryOperationInput {
  id: string;
  operationType: string;
  inventoryID: string;
  inventoryOperationIncomeInventoryId: string;
}
