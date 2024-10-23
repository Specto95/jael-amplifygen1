import { IHandleBackStep, IToBeNext } from "@/interfaces/SideMenuSections/general";
import { IHandleNextStep } from '../../../../../../interfaces/SideMenuSections/general';

export interface IGeneralBackContinueProps extends IHandleBackStep, IHandleNextStep, IToBeNext {
    currentStepIndex?: number;
}