import {
  IHandleBackStep,
  IHandleNextStep,
} from "@/interfaces/SideMenuSections/general";
import { IGetClientDetailsByIDAPI } from "../api/interfaces/IUseGetClientDetailsByID";

export interface ISearchClientProps extends IHandleBackStep, IHandleNextStep {
  setSelectedClient?: React.Dispatch<
    React.SetStateAction<IGetClientDetailsByIDAPI>
  >;
  selectedClient?: IGetClientDetailsByIDAPI;
  currentStepIndex?: number;
}
