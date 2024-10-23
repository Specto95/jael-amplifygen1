import { IListClientSelectedFullDetailsAPIResponse } from "../../One/api/interfaces/IListClientsWithoutCreditTableDetails";
import {
  IHandleBackStep,
  ISetFieldValue,
} from "../../../../../../../../interfaces/SideMenuSections/general";

export interface IClientCreditDetailsProps
  extends IHandleBackStep,
    ISetFieldValue {
  clientData?: IListClientSelectedFullDetailsAPIResponse;
  newClientCreditAmount?: number;
  setWasRejected?: (wasRejected: boolean) => void;
  isListing?: boolean;
  isUpdating?: boolean;
  newClientTotalCredit?: number;
}
