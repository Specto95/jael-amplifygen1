import {
  IUseListInventoryProductIncomeInventoriesHistoryResponse,
  IUseListInventoryProductOutcomeInventoriesHistoryResponse,
} from "../api/interfaces/IUseListInventoryProductIncomeOutcomesHistoryByIDAndInventoryID";

type productDetailsKeys = keyof (
      | IUseListInventoryProductIncomeInventoriesHistoryResponse
      | IUseListInventoryProductOutcomeInventoriesHistoryResponse
    )[];

export const providerViewFilterObjs = {
  INVENTORYOPERATIONTYPE: "inventoryOperationType" as productDetailsKeys,
};
