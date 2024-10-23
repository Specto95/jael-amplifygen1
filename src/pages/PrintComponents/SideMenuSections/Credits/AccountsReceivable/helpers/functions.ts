import { IUseListCreditAccountsReceivableAPI } from "@/components/UI/SideMenuSections/Credits/SubModules/AccountsReceivable/api/interfaces/IUseListCreditAccountsReceivable";
import { convertStringToNumber } from "@/utils/helpers";

export function totalSale(arr: IUseListCreditAccountsReceivableAPI[]): number {
  return arr.reduce(
    (acc, obj) => acc + convertStringToNumber(obj.total.toString()),
    0
  );
}
