import {
  ISelectedIncomeRowsTable,
  ISelectedOutcomeRowsTable,
  ISetSelectedMainProductsDetails,
} from "@/interfaces/Inventory/inventory";
import { IListProductProviderProductsByProductProviderIDAPI } from "@/pages/Inventory/Type/Main/Add/MultipleForm/Income/Steps/Two/api/interfaces/IUseListProductProviderProductsByProductProviderID";
import { Row } from "react-table";

export interface IInputCheckProps extends ISetSelectedMainProductsDetails {
  selectedData: ISelectedIncomeRowsTable[] | ISelectedOutcomeRowsTable[];
  setSelectedData: React.Dispatch<
    React.SetStateAction<
      ISelectedIncomeRowsTable[] | ISelectedOutcomeRowsTable[]
    >
  >;
  setSelectedPreviousData: React.Dispatch<
    React.SetStateAction<
      ISelectedIncomeRowsTable[] | ISelectedOutcomeRowsTable[]
    >
  >;
  cell: T;
  row: Row<object>;
  listSelectedMainProductsDetails?: IListProductProviderProductsByProductProviderIDAPI[];
}
