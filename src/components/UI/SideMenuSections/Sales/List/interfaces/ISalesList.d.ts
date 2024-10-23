import { IIsLoading } from "@/interfaces/SideMenuSections/general";
import { IListSalesViewAPI } from "../../api/interfaces/IUseListSalesView";

export interface ISalesListProps extends IIsLoading {
  Sales: IListSalesViewAPI[];
  setSales: React.Dispatch<React.SetStateAction<IListSalesViewAPI[]>>;
}
