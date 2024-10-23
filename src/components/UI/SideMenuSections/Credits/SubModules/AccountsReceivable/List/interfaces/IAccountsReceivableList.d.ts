import { IIsLoading } from "@/interfaces/SideMenuSections/general";
import { IUseListCreditAccountsReceivableAPI } from "../../api/interfaces/IUseListCreditAccountsReceivable";

export interface IAccountsReceivableListProps extends IIsLoading {
  AccountsReceivable: IUseListCreditAccountsReceivableAPI[];
}
