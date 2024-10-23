import { IBOInventoryTypeState } from "@/interfaces/Inventory/inventory";
import { IRegisterTypeValue } from "../../../../../interfaces/Inventory/inventory";

export interface IUpdateProductInventoryData {
  id: string;
  quantity: number;
}

export interface ICreateInventoryOperationData {
  inventoryID: string;
  operationType: OperationType | "";
}

export enum OperationType {
  INCOME,
  OUTCOME,
}

export interface IIncomeRegisterInputsData {
  date: string;
  admin_name: string;
  provider_name: string;
  comments?: string;
}

export interface IBOIncomeRegisterInputsData {
  comments?: string;
  outcomeComments?: string;
}

export interface IOutcomeRegisterInputsData {
  date: string;
  admin_name: string;
  branchOffice_name: string;
  comments?: string;
}

export interface IInventoryGeneralFormData {
  updateProductInventory: IUpdateProductInventoryData;
  createInventoryOperation: ICreateInventoryOperationData;
  incomeRegisterInputs: IIncomeRegisterInputsData;
  outcomeRegisterInputs: IOutcomeRegisterInputsData;
  registerType: IRegisterTypeValue["values"];
  isSecondButton: boolean;
}

export interface IBOInventoryGeneralFormData {
  incomeRegisterInputs: IBOIncomeRegisterInputsData;
  registerType: IBOInventoryTypeState["inventoryType"];
  isSecondButton: boolean;
}
