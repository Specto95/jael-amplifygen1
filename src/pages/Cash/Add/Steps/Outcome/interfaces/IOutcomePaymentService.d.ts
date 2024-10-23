import {
  IHandleBackStep,
  IHandleNextStep,
} from "@/interfaces/SideMenuSections/general";

export interface IOutcomePaymentServiceProps
  extends IHandleNextStep,
    IHandleBackStep {}
