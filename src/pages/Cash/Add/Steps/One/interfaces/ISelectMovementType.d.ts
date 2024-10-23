import {
  IHandleBackStep,
  IHandleNextStep,
  ISetFieldValue,
} from "@/interfaces/SideMenuSections/general";
import { IMovementType, ISubMovementType } from "../../../interfaces/ICashForm";
import { IUseListCreditAccountsReceivableAPI } from "@/components/UI/SideMenuSections/Credits/SubModules/AccountsReceivable/api/interfaces/IUseListCreditAccountsReceivable";
import { IGetCustomerSubscriptionDetailsByIDAPI } from "../api/interfaces/IGetCustomerSubscriptionDetailsByID";
import { IUseListPendingClientCreditMovementsToPayAPI } from "../../../api/interfaces/IUseListPendingClientCreditMovementsToPay";

export interface ISelectMovementTypeProps
  extends ISetFieldValue,
    IHandleBackStep,
    IHandleNextStep {
  setMovementType?: React.Dispatch<
    React.SetStateAction<IMovementType["movementType"]>
  >;
  movementType?: IMovementType["movementType"];
  subMovementType?: ISubMovementType["subMovementType"];
  setSubMovementType?: React.Dispatch<
    React.SetStateAction<ISubMovementType["subMovementType"]>
  >;
  goTo?: (index: number) => void;
  setClientSelectedPayment?: React.Dispatch<
    React.SetStateAction<IUseListCreditAccountsReceivableAPI[]>
  >;
  clientSelectedPayment?: IUseListCreditAccountsReceivableAPI[];
  selectedClient?: IGetCustomerSubscriptionDetailsByIDAPI;
  setSelectedClient?: React.Dispatch<
    React.SetStateAction<IGetCustomerSubscriptionDetailsByIDAPI>
  >;
  quantity?: number;
  setQuantity?: React.Dispatch<React.SetStateAction<number>>;
  totalAccumulablePayments?: number;
  setTotalAccumulablePayments?: React.Dispatch<React.SetStateAction<number>>;
  clientCreditNextTwoPendingToPay?: IClientCreditNextTwoPendingToPay;
  setLastQuantity?: React.Dispatch<React.SetStateAction<number>>;
  lastQuantity?: number;
  pendingClientCreditMovementsToPay?: IUseListPendingClientCreditMovementsToPayAPI[];
  setRemainingTotal?: React.Dispatch<React.SetStateAction<number>>;
  remainingTotal?: number;
  setIsReading?: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IClientCreditNextTwoPendingToPay {
  first: number;
  second: number;
}
