import { IEditingState } from "@/components/UI/SideMenuSections/BranchOffices/BranchOfficesList/interfaces/IBranchOfficesList";
import { ISetSelectedMainProductsDetails } from "@/interfaces/Inventory/inventory";
import { IGlobalProductsTableEditingState } from "@/interfaces/Products/products";
import {
  IHandleNextStep,
  ISetFieldValue,
} from "@/interfaces/SideMenuSections/general";
import { IListProductProviderProductsByProductProviderIDAPI } from "@/pages/Inventory/Type/Main/Add/MultipleForm/Income/Steps/Two/api/interfaces/IUseListProductProviderProductsByProductProviderID";
import { ISelectedBranchOfficeIDName } from "@/pages/Inventory/Type/Main/Add/interfaces/IInventoryGeneralForm";
import { Dispatch } from "react";

import {
  Column,
  HeaderGroup,
  Row,
  TableBodyPropGetter,
  TableBodyProps,
  TablePropGetter,
  TableProps,
} from "react-table";

export interface IShowTableDataProps<T>
  extends ISetSelectedMainProductsDetails,
    ISetFieldValue,
    IHandleNextStep {
  Data?: T[];
  previousData?: T[];
  setData?: React.Dispatch<React.SetStateAction<T[] | any[] | any>>;
  setPreviousData?: React.Dispatch<React.SetStateAction<T[] | any[]>>;
  isLoading?: boolean;
  Columns?: any[];
  notFoundDataMessage: string;
  children?: React.ReactNode;
  withActions?: boolean;
  withProviderInputCheck?: boolean;
  customSectionName?: string;
  hasBackground?: boolean;
  customWidth?: string;
  isNavigating?: boolean;
  isEditing?: boolean;
  hasPagination?: boolean;
  hasCheckRow?: boolean;
  hasRadioSelect?: boolean;
  hasIDFieldPrefix?: boolean;
  hasQuantityCell?: boolean;
  noHeaders?: boolean;
  selectedData?: T[] | any;
  setSelectedBranchOffice?: Dispatch<
    React.SetStateAction<ISelectedBranchOfficeIDName>
  >;
  selectedBranchOffice?: ISelectedBranchOfficeIDName;
  listSelectedMainProductsDetails?: IListProductProviderProductsByProductProviderIDAPI[];
  hasTBodyBorder?: boolean;
  setIsModalOpen?: Dispatch<React.SetStateAction<boolean>>;
  setEditing?: Dispatch<SetStateAction<IGlobalProductsTableEditingState>>;
  customMemoData?: any[];
  customColumns?: Column<any>[];
  isForm?: boolean;
  isPrintable?: boolean;
  noDataRedirect?: boolean;
  redirectMessage?: string;
  redirectLink?: string;
  elementDetailsURL?: string;

  //?TO FIX LATER
  editingState?: IEditingState;
  updateEditingState?: (newState: any) => void;
  onRowClick?: (rowId: string) => void;
  setIsConfirmDialogOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  tableRef?: React.MutableRefObject<TableProps<any>>;

}
