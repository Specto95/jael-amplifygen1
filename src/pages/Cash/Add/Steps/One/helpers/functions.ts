import { currentIndexObj } from "@/utils/multiStepForm/currentIndexObj";
import { IMovementType, ISubMovementType } from "../../../interfaces/ICashForm";
import {
  MovementType,
  SubMovementType,
} from "@/utils/globalObjs/sideMenuSections/Cash/CashObjs";

export function handleMovementType(
  movementType: IMovementType["movementType"] = "",
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void
) {
  if (movementType === MovementType.INCOME) {
    setFieldValue("movementType", MovementType.INCOME);
    return;
  }
  if (movementType === MovementType.OUTCOME) {
    setFieldValue("movementType", MovementType.OUTCOME);
    return;
  }
  setFieldValue("movementType", "");
}

export const handleMovementTypeStep = (
  type: IMovementType["movementType"],
  goTo: (index: number) => void
) => {
  if (type === MovementType.INCOME) {
    goTo(currentIndexObj.TWO);
  } else if (type === MovementType.OUTCOME) {
    goTo(currentIndexObj.FIVE);
  }
};

export function handleSubMovementType(
  subMovementType: ISubMovementType["subMovementType"] = "",
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void
) {
  if (subMovementType === SubMovementType.INCOMECUSTOMERSUBSCRIPTION) {
    setFieldValue(
      "subMovementType",
      SubMovementType.INCOMECUSTOMERSUBSCRIPTION
    );
    return;
  }
  if (subMovementType === SubMovementType.INCOMESALES) {
    setFieldValue("subMovementType", SubMovementType.INCOMESALES);
    return;
  }
  if (subMovementType === SubMovementType.OUTCOMEPAYMENTSERVICE) {
    setFieldValue("subMovementType", SubMovementType.OUTCOMEPAYMENTSERVICE);
    return;
  }
  setFieldValue("subMovementType", "");
}

export function areAlmostEqualWithDecimals(
  a: number,
  b: number,
  decimalPlaces: number = 2
): boolean {
  const factor = Math.pow(10, decimalPlaces);
  const roundedA = Math.round(a * factor) / factor;
  const roundedB = Math.round(b * factor) / factor;
  return roundedA === roundedB;
}
