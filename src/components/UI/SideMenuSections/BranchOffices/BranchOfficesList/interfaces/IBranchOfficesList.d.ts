import {
  IIsLoading,
  ISetIsLoading,
} from "@/interfaces/SideMenuSections/general";
import { IListBranchOfficesViewAPI } from "../../api/interfaces/IUseListBranchOfficesView";

export interface IBranchOfficesListProps extends IIsLoading, ISetIsLoading {
  listBranchOffices: IListBranchOfficesViewAPI[];
  setListBranchOffices: (listBranchOffices: any) => void;
}

export interface IEditingState {
  id: string;
  customCommission: number;
}
