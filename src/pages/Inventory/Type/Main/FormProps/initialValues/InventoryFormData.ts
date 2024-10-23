import {
  IInventoryGeneralFormData,
  IUpdateProductInventoryData,
  ICreateInventoryOperationData,
  IIncomeRegisterInputsData,
  IBOIncomeRegisterInputsData,
  IOutcomeRegisterInputsData,
  IBOInventoryGeneralFormData,
} from "./interfaces/IInventoryFormData";

export const UpdateProductInventoryData: IUpdateProductInventoryData = {
  id: "",
  quantity: 0,
};

export const CreateInventoryOperationData: ICreateInventoryOperationData = {
  inventoryID: "",
  operationType: "",
};

export const IncomeRegisterInputsData: IIncomeRegisterInputsData = {
  date: "",
  admin_name: "",
  provider_name: "",
  comments: "",
};

export const BOIncomeRegisterInputsData: IBOIncomeRegisterInputsData = {
  comments: "",
  outcomeComments: "",
};

export const OutcomeRegisterInputsData: IOutcomeRegisterInputsData = {
  date: "",
  admin_name: "",
  branchOffice_name: "",
  comments: "",
};

export const InventoryGeneralFormData: IInventoryGeneralFormData = {
  updateProductInventory: UpdateProductInventoryData,
  createInventoryOperation: CreateInventoryOperationData,
  incomeRegisterInputs: IncomeRegisterInputsData,
  outcomeRegisterInputs: OutcomeRegisterInputsData,
  registerType: "INCOME",
  isSecondButton: false,
};

export const BOInventoryGeneralFormData: IBOInventoryGeneralFormData = {
  incomeRegisterInputs: BOIncomeRegisterInputsData,
  isSecondButton: false,
  registerType: "INCOME",
};
