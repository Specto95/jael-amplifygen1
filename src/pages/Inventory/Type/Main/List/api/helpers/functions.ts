import {
  IUseListInventoryProductOutcomeInventoriesHistoryResponse,
  IUseListInventoryProductIncomeInventoriesHistoryResponse,
  IUseListInventoryProductIOHistoryByIDAndInventoryIDAPI,
} from "../interfaces/IUseListInventoryProductIncomeOutcomesHistoryByIDAndInventoryID";

export function findMostRecentIncomeDate(
  arr: IUseListInventoryProductIOHistoryByIDAndInventoryIDAPI[]
): IUseListInventoryProductIncomeInventoriesHistoryResponse | null {
  console.log(arr);
  if (arr.length === 0) {
    return null;
  }

  let firstRegister = arr[0].incomeInventories![0];

  arr[0].incomeInventories!.forEach((incomeInventory) => {
    if (incomeInventory.date > firstRegister.date) {
      firstRegister = incomeInventory;
    }
    return firstRegister;
  });
  return firstRegister;
}

export function findMostRecentOutcomeDate(
  arr: IUseListInventoryProductIOHistoryByIDAndInventoryIDAPI[]
): IUseListInventoryProductOutcomeInventoriesHistoryResponse | null {
  if (arr.length === 0) {
    return null;
  }

  let firstRegister = arr[0].outcomeInventories![0];

  arr[0].outcomeInventories!.forEach((incomeInventory) => {
    if (incomeInventory.date > firstRegister.date) {
      firstRegister = incomeInventory;
    }
    return firstRegister;
  });

  return firstRegister;
}
