import { ISetFieldValue } from "@/interfaces/SideMenuSections/general";

export interface IAddBranchOfficeManagersProps
extends ISelectedRowsState,
  ISetFieldValue {
handleBackStep?: () => void;
branchOfficeName?: string;
}

interface ISelectedRowsState {
    selectedRows?: IBranchManagerData[];
    setSelectedRows?: (rows: any) => void;
  }
