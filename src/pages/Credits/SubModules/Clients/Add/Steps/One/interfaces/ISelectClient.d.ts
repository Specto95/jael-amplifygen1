import {
  IHandleBackStep,
  ISetFieldValue,
} from "@/interfaces/SideMenuSections/general";
import { IListClientSelectedFullDetailsAPIResponse } from "../api/interfaces/IListClientsWithoutCreditTableDetails";
import { IHandleNextStep } from "../../../../../../../../interfaces/SideMenuSections/general";

export interface ISelectClientProps
  extends IHandleBackStep,
    IHandleNextStep,
    ISetFieldValue {
  clientData?: IListClientSelectedFullDetailsAPIResponse;
  setClientData?: React.Dispatch<
    React.SetStateAction<IListClientSelectedFullDetailsAPIResponse>
  >;
  currentStepIndex?: number;
  newClientCreditAmount?: number;
}
