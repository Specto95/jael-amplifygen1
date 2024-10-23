export interface IInventoryOperationInput {
    id: string;
    operationType: string;
    inventoryID: string;
    inventoryOperationSalesOperationId: string;
  }

export interface INonRegisteredClientInput {
    id: string;
    fullName: string;
    nonRegisteredClientSaleOperationId: string;
}