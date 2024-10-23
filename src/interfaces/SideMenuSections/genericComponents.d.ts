import {
  IHandleBackStep,
  IHandleNextStep,
  ISetFieldValue,
  IToBeFinished,
} from "./general";
import {
  IPDVGeneralFormData,
  IPaymentType,
} from "../../pages/PointOfSale/PDVForm/Add/FormProps/PDVGeneralFormData";
import {
  IIsClientRegistered,
  IPDVSelectedData,
  ITermDaysToPay,
} from "../PDV/PDV";
import { ISectionName } from "../main";
import { IHandleBackStep } from "./general";

export interface IBackProps extends IHandleBackStep {
  customText?: string;
}

export interface IBackContinueProps
  extends IHandleBackStep,
    IHandleNextStep,
    IPDVSelectedData {
  customNextStepText?: string;
  customBackStepText?: string;
  popUpMessage?: string;
}

export interface IBackContinueGeneralProps
  extends IHandleBackStep,
    IHandleNextStep {
  disabled?: boolean;
}

export interface IBackFinishProps
  extends IHandleBackStep,
    ISetFieldValue,
    IToBeFinished {
  text?: string;
  textFinish?: string;
}

export interface IGeneralBackFinishProps
  extends IHandleBackStep,
    ISetFieldValue,
    IToBeFinished {
  SubmitText?: string;
  popUpMessage?: string;
}

export interface ICustomGeneralBackFinishProps extends IGeneralBackFinishProps {
  CustomSubmitText?: string;
  setCustomValue?: (value: any) => void;
  showFinish?: boolean;
  showActions?: boolean;
}

export interface IBackFinishPDVProps
  extends IHandleBackStep,
    ISetFieldValue,
    IPDVSelectedData,
    ITermDaysToPay {
  values?: IPDVGeneralFormData;
  selectedMonthsToPay: number;
  clientName: string;
  isClientRegistered: IIsClientRegistered["isClientRegistered"];
  isTyping?: boolean;
}

export interface IListActionsProps {
  cell: any;
  handleDelete?: () => void;
}
