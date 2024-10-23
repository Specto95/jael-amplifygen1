import { IListCashTableInfoAPI } from "@/components/UI/SideMenuSections/Cash/SubModules/Main/api/interfaces/IListMainCashTableIncomes";
import {
  OperationTypeSpanish,
} from "@/pages/Inventory/Type/Main/List/ListProductDetailsObj";
import { MovementTypeSpanish } from "@/utils/globalObjs/sideMenuSections/Cash/CashObjs";

export function sumOutcomesCash(movements: IListCashTableInfoAPI[]): number {
  return movements.reduce((acc, movement) => {
    if (movement.movementType === OperationTypeSpanish.OUTCOME) {
      return acc + movement.total;
    }
    return acc;
  }, 0);
}

export function sumIncomesCash(movements: IListCashTableInfoAPI[]): number {
  return movements.reduce((acc, movement) => {
    if (
      movement.movementType === MovementTypeSpanish.INCOME ||
      movement.movementType === MovementTypeSpanish.INCOMEPENDING
    ) {
      return acc + movement.total;
    }
    return acc;
  }, 0);
}

export function resultOutcomesMinusIncomesCash(
  movements: IListCashTableInfoAPI[]
): number {
  return sumIncomesCash(movements) - sumOutcomesCash(movements);
}
