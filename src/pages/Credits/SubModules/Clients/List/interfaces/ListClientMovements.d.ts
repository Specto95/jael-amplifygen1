import { ISetFieldValue } from "@/interfaces/SideMenuSections/general";
import {
  IListClientMovementsDataAPI,
  IListClientMovementsDataTableAPI,
} from "../api/interfaces/IListClientMovementsData";

export interface IListClientMovementsProps extends ISetFieldValue {
  isPaying?: boolean;
  handleClientMovementsData?: (
    tableData: IListClientMovementsDataTableAPI[]
  ) => void;
  amountToPay?: number;
}
