import {
  IHandleBackStep,
  ISetFieldValue,
} from "@/interfaces/SideMenuSections/general";
import { IGetClientDetailsByIDAPI } from "../../Uno/api/interfaces/IUseGetClientDetailsByID";
import {
  IFileNameFrenteINEStates,
  IFileNameProofAddressStates,
  IFileNameTraseroINEStates,
} from "../../../interfaces/ICreditsGeneralForm";

export interface ICreditRequestDataProps
  extends IHandleBackStep,
    ISetFieldValue,
    IFileNameFrenteINEStates,
    IFileNameTraseroINEStates,
    IFileNameProofAddressStates {
  selectedClient?: IGetClientDetailsByIDAPI;
  currentStepIndex?: number;
  isCheckedClientDocuments?: boolean;
  creditRequestAmount?: number;
}
