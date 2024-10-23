import { IIsLoading } from "@/interfaces/SideMenuSections/general";
import { IListCommissionsViewAPI } from "../../api/interfaces/IUseListCommissionsView";

export interface ICommissionsListProps extends IIsLoading {
  listCommissions: IListCommissionsViewAPI[];
  setListCommissions: (listCommissions: any) => void;
}
