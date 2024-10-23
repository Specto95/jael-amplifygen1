import { IMovementType, ISubMovementType } from "../../../interfaces/ICashForm";

export interface ICashFormData {
  movementType: IMovementType["movementType"];
  subMovementType: ISubMovementType["subMovementType"];
  isSecondButton: boolean;
  name: string;
  description: string;
  costType: ICashFormDataCostType["costType"];
  quantity: number;
}

interface ICashFormDataCostType {
  costType: "FIXED" | "VARIABLE" | "";
}
