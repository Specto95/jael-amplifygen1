import {
  IOInventoryStatus,
  IOInventoryStatusSpanish,
  ListIncomeInventoryProductQuantityRequestsQuery,
} from "@/API";

export interface ListMainInventoryRequestDetailsAPI {
  branchOfficeName: string;
  comments: string;
  providerName: string;
  providerResponsibleName: string;
  status: IOInventoryStatusSpanish[IOInventoryStatus];
  statusValue: IOInventoryStatus;
  incomeInventoryProductQuantitiesRequest: IncomeInventoryProductQuantitiesRequest[];
}

export interface IncomeInventoryProductQuantitiesRequest {
  incomeQuantity: number;
  productName: string;
  price: number;
  productID: string;
  inventoryProductID: string;
  mainInventoryProductID?: string;
  currentInventoryQuantity: number;
}
