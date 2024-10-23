import { Cell } from "react-table";
import { IRow } from "@/interfaces/SideMenuSections/general";

export interface IInputCheckRowProps extends IRow {
  cell: Cell<object, T>;
  setSelectedRows: React.Dispatch<React.SetStateAction<T>>;
}
