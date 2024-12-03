import { IUseListMainIncomesInventoryViewAPI } from "../../Movements/api/interfaces/IUseListMainIncomesInventoryView";

type MainIncomeInventoryKeys = keyof IUseListMainIncomesInventoryViewAPI;

export const mainIncomeInventoryKeysViewFilterObjs = {
  DATE: "date" as MainIncomeInventoryKeys,
  OPERATIONTYPE: "operationType" as MainIncomeInventoryKeys,
};
