import { IUseListCreditAccountsReceivableAPI } from "@/components/UI/SideMenuSections/Credits/SubModules/AccountsReceivable/api/interfaces/IUseListCreditAccountsReceivable";
import {
  IHandleBackStep,
  ISetFieldValue,
} from "@/interfaces/SideMenuSections/general";
import { IClientCreditNextTwoPendingToPay } from "../../One/interfaces/ISelectMovementType";
import { IUseListPendingClientCreditMovementsToPayAPI } from "../../../api/interfaces/IUseListPendingClientCreditMovementsToPay";
import { ISubMovementType } from "@/pages/Cash/Add/interfaces/ICashForm";

export interface IConfirmEditCSubscriptionPaymentProps
  extends ISetFieldValue,
    IHandleBackStep {
  paymentID?: string;
  clientData?: clientDataObj;
  clientSelectedPayment?: IUseListCreditAccountsReceivableAPI[];
  setQuantity?: React.Dispatch<React.SetStateAction<number>>;
  quantity?: number;
  setRemainingTotal?: React.Dispatch<React.SetStateAction<number>>;
  remainingTotal?: number;
  clientCreditNextTwoPendingToPay?: IClientCreditNextTwoPendingToPay;
  pendingClientCreditMovementsToPay?: IUseListPendingClientCreditMovementsToPayAPI[];
  setTotalAccumulablePayments?: React.Dispatch<React.SetStateAction<number>>;
  isReading?: boolean;
  subMovementType?: ISubMovementType["subMovementType"];
}

interface clientDataObj {
  clientName: string;
  id: string;
}
