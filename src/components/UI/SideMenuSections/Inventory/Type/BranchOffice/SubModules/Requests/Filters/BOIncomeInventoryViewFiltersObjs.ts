import { IUseListMainIncomesInventoryViewAPI } from "../../../../Main/SubModules/Income/api/interfaces/IUseListMainIncomesInventoryView";

type MainIncomeInventoryKeys = keyof IUseListMainIncomesInventoryViewAPI;

export const mainIncomeInventoryKeysViewFilterObjs = {
  DATE: "date" as MainIncomeInventoryKeys,
  OPERATIONTYPE: "operationType" as MainIncomeInventoryKeys,
};
