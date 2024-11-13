import { FormikErrors, FormikTouched, FormikState } from "formik";

import {
  IHandleBackStep,
  IHandleNextStep,
  ISetFieldValue,
} from "../SideMenuSections/general";
import { IListProductData } from "../Products/products";
import {
  IInventoryGeneralFormData,
  IOutcomeRegisterInputsData,
  IIncomeRegisterInputsData,
} from "@/pages/Inventory/Type/Main/FormProps/initialValues/InventoryFormData.d";
import { IPDVPreviousData } from "../PDV/PDV";
import { IListProvidersInventoryByNameAPI } from "@/pages/Inventory/Type/Main/Add/MultipleForm/Income/Steps/Three/IncomeInventoryGeneralData/api/interfaces/IUseListProvidersInventoryByName";
import {
  ISelectedBranchOfficeState,
  ISelectedOutcomeBranchOfficeProductIDState,
  ISelectedOutcomeBranchOfficeProductsIDState,
  ISelectedProviderObj,
  ISelectedProviderResponsibleState,
  ISelectedProviderState,
  ISetSelectedProviderResponsibleState,
  ISetSelectedProviderState,
} from "@/pages/Inventory/Type/Main/Add/interfaces/IInventoryGeneralForm.d";
import { ISelectedStateState } from "@/pages/Inventory/Type/Main/Add/MultipleForm/Income/Steps/One/interfaces/IIncomeSelectProvider";
import { ISelectedProviderResponsibleObj } from "../../pages/Inventory/Type/Main/Add/interfaces/IInventoryGeneralForm";
import { IListProductsPDVAPI } from "../../pages/PointOfSale/PDVForm/Add/Steps/First/api/interfaces/IUseListProductsPDV";
import {
  IUseListInventoryProductGeneralDetails,
  IUseListInventoryProductIncomeInventoriesHistoryResponse,
  IUseListInventoryProductOutcomeInventoriesHistoryResponse,
} from "@/pages/Inventory/Type/Main/List/api/interfaces/IUseListInventoryProductIncomeOutcomesHistoryByIDAndInventoryID.d";
import { Cell } from "react-table";

export interface IErrors {
  errors?: FormikErrors<IInventoryGeneralFormData>;
  touched?: FormikTouched<IInventoryGeneralFormData>;
}

export interface IOutcomeInventoryErrors {
  errors?: FormikErrors<IOutcomeRegisterInputsData>;
  touched?: FormikTouched<IOutcomeRegisterInputsData>;
}

export interface IIncomeInventoryErrors {
  errors?: FormikErrors<IIncomeRegisterInputsData>;
  touched?: FormikTouched<IIncomeRegisterInputsData>;
}

export interface IInventory {
  id: number;
  name: string;
  quantity: number;
}

export interface IInventoryListActionsProps extends IInventoryListProps {
  cell: any;
}

// export interface ISetInventory {
//   setInventory: (inventory: IInventory[]) => void;
// }

export interface ISelectedIncomeRowsTable {
  id?: string;
  name: string;
  price: number;
  class_id: number;
  category_id: number;
  subcategory_id: number;
  productProviderId: string;
  commission: number;
  quantity?: number;
  branchProductQuantity?: number;
  inventoryProductID: string;
}

export interface IListProductsIncomeInventoryTable {
  id?: string;
  name: string;
  price: number;
  class_id: number;
  category_id: number;
  subcategory_id: number;
  productProviderId?: string;
  quantity?: number;
  checked?: boolean;
}

export interface IListUserNamesInventoryTable {
  name: string;
}

export interface IListProductsOutcomeInventoryTable {
  id?: string;
  name: string;
  price: number;
  quantity?: number;
}

export interface IListUserNameByEmailTable {
  name: string;
}

export interface IListBOfficesInventoryNamesTable {
  name: string;
}

export interface IListInventoryOperationsByProductIDTable {
  id: string;
  operationType: string;
  quantity: number;
  inventoryID: string;
  productID: string;
  userInfoName: string;
  providerName: string;
  branchOfficeName: string;
  createdAt: string;
}

export interface ISelectedIncomeData {
  selectedIncomeData?: ISelectedIncomeRowsTable[];
}

export interface ISelectedOutcomeData {
  selectedOutcomeData?: ISelectedOutcomeRowsTable[];
}

export interface IIncomeInventoryColumns {
  Header:
    | "Producto"
    | "ID Producto"
    | "Precio"
    | "Clase"
    | "Marca"
    | "SubGrupo"
    | "Clave";
  accessor:
    | "name"
    | "price"
    | "class_id"
    | "category_id"
    | "subcategory_id"
    | "productProviderID"
    | "id";
}

export interface IOutcomeInventoryColumns {
  Header: "Producto" | "Precio" | "Clase" | "Marca" | "SubGrupo" | "Clave";
  accessor:
    | "name"
    | "price"
    | "class_id"
    | "category_id"
    | "subcategory_id"
    | "productProviderId"
    | "id";
}

export interface IOutcomeInventoryGeneralDataProductsTableColumns {
  Header: "Producto" | "Precio" | "ID" | "Cantidad";
  accessor: "name" | "price" | "id" | "quantity";
}

export interface IIncomeInventoryGeneralDataColumns {
  Header: "NOMBRE EMPRESA PROVEEDOR" | "NOMBRE ENCARGADO";
  accessor: "responsible.fullname";
  id: "responsible.id";
}

export interface IOutcomeInventoryGeneralDataColumns {
  Header: "NOMBRE SUCURSAL" | "ID DE SUCURSAL";
  accessor: "name" | "id";
}

export interface ISelectedIncomeRowsState {
  selectedIncomeRows?: ISelectedIncomeRowsTable[];
  setSelectedIncomeRows?: (rows: any) => void;
}

export interface ISetSelectedIncomeRows {
  setSelectedIncomeRows?: (rows: ISelectedIncomeRowsTable[]) => void;
}

export interface ISelectedOutcomeRowsState {
  selectedOutcomeRows?: ISelectedOutcomeRowsTable[];
  setSelectedOutcomeRows?: (rows: any) => void;
}

export interface ISelectedOutcomeRowsState {
  selectedOutcomeRows?: ISelectedOutcomeRowsTable[];
  setSelectedOutcomeRows?: (rows: any) => void;
}

export interface ISetSelectedOutcomeRows {
  setSelectedOutcomeRows?: (rows: ISelectedOutcomeRowsTable[]) => void;
}

export interface IHandleInventoryType {
  handleInventoryType?: (type: IInventoryTypeState["inventoryType"]) => void;
}

export interface IBOHandleInventoryType {
  handleInventoryType?: (type: IBOInventoryTypeState["inventoryType"]) => void;
}

export interface IHandleGoToRegisterType {
  handleGoToRegisterType?: () => void;
}

export interface ISetSelectedPreviousIncomeRows {
  setSelectedPreviousIncomeRows?: (rows: any) => void;
}

export interface ISelectedMainProductsDetailsState {
  setSelectedMainProductsDetails?: React.Dispatch<
    React.SetStateAction<ISelectedIncomeRowsTable[]>
  >;
  selectedMainProductsDetails?: ISelectedIncomeRowsTable[];
}

export interface ISelectedMainProductsDetails {
  selectedMainProductsDetails?: ISelectedIncomeRowsTable[];
}

export interface ISetSelectedMainProductsDetails {
  setSelectedMainProductsDetails?: React.Dispatch<
    React.SetStateAction<ISelectedIncomeRowsTable[]>
  >;
}

export interface ISelectedPreviousOutcomeRowsState {
  selectedPreviousOutcomeRows?: ISelectedOutcomeRowsTable[];
  setSelectedPreviousOutcomeRows?: (rows: any) => void;
}

export interface IIncomeInventoryProps
  extends IHandleBackStep,
    ISelectedIncomeRowsState,
    ISetFieldValue,
    ISelectedIncomeData,
    ISetSelectedPreviousIncomeRows,
    ISelectedProviderState {}

export interface IBOIncomeInventoryProps
  extends IHandleBackStep,
    ISelectedIncomeRowsState,
    ISetFieldValue,
    ISelectedIncomeData,
    ISetSelectedPreviousIncomeRows,
    ISelectedProviderState,
    ISetSelectedMainProductsDetails {}

export interface IEnterpriseNameArray {
  enterprise_name: string;
}

export interface IEnterpriseNameValue {
  enterprise_name: string;
}

export interface IIncomeInventoryGeneralDataProps
  extends IHandleBackStep,
    ISetFieldValue,
    ISelectedIncomeData,
    ISelectedIncomeRowsState,
    IIncomeInventoryErrors,
    ISelectedProviderState,
    ISelectedProviderResponsibleState {
  userResponsible?: string;
  selectedProviderName?: string;
}

export interface IBOIncomeInventoryGeneralDataProps
  extends IHandleBackStep,
    ISetFieldValue,
    ISelectedIncomeData,
    ISelectedIncomeRowsState,
    IIncomeInventoryErrors,
    ISelectedProviderState,
    ISelectedProviderResponsibleState,
    ISelectedMainProductsDetails {
  userResponsible?: string;
  selectedProviderName?: string;
}

export interface IIncomeSelectProviderProps
  extends IIncomeInventoryGeneralDataProps,
    ISetSelectedProviderState,
    ISelectedStateState {}

export interface IBOIncomeSelectProviderProps
  extends IIncomeInventoryGeneralDataProps,
    ISetSelectedProviderState,
    ISelectedStateState {}

// export interface ISelectedProviderResponsibleState {
//   selectedProviderResponsible?: string;
//   setSelectedProviderResponsible?: (
//     selectedProviderResponsible: string
//   ) => void;
// }

export interface IIncomeInventoryGeneralDataValues {
  values?: IIncomeRegisterInputsData;
}

export interface IOutcomeInventoryGeneralDataValues {
  values?: IOutcomeRegisterInputsData;
}

export interface IIncomeInventoryConfirmInputsProps
  extends IIncomeInventoryGeneralDataValues {
  selectedProviderResponsible?: ISelectedProviderResponsibleObj;
}

export interface IOutcomeInventoryConfirmInputsProps
  extends IOutcomeInventoryGeneralDataValues {}

export interface IOutcomeInventoryGeneralDataProps
  extends IHandleBackStep,
    ISetFieldValue,
    ISelectedOutcomeData,
    ISelectedOutcomeRowsState,
    IOutcomeInventoryErrors,
    ISelectedPreviousOutcomeRowsState,
    ISelectedBranchOfficeState {
  userResponsible?: string;
}

export interface IConfirmIncomeInventoryProps
  extends IHandleBackStep,
    ISetFieldValue,
    ISelectedIncomeData,
    ISelectedIncomeRowsState,
    IIncomeInventoryGeneralDataValues {}

export interface IBOConfirmIncomeInventoryProps
  extends IHandleBackStep,
    ISetFieldValue,
    ISelectedIncomeData,
    ISelectedIncomeRowsState,
    IIncomeInventoryGeneralDataValues {
  selectedProviderResponsible?: ISelectedProviderResponsibleObj;
}

export interface IConfirmOutcomeInventoryProps
  extends IHandleBackStep,
    ISetFieldValue,
    ISelectedOutcomeData,
    ISelectedOutcomeRowsState,
    IOutcomeInventoryGeneralDataValues,
    ISelectedPreviousOutcomeRowsState,
    ISelectedBranchOfficeState,
    ISelectedOutcomeBranchOfficeProductsIDState {}
{
}

export interface IUpdateQuantityCell {
  updateQuantity: (rowIndex: number, newQuantity: number) => void;
}

export interface IQuantityCellProps
  extends IUpdateQuantityCell,
    IPDVPreviousData,
    ISelectedPreviousOutcomeRowsState {
  selectedData?: IListProductsPDV[];
  index: number;
  cell: any;
  selectedIncomeData?: ISelectedIncomeRowsTable[];
  selectedOutcomeData?: ISelectedOutcomeRowsTable[];
}

export interface ISelectProductDiscountProps
  extends IPDVPreviousData,
    ISelectedPreviousOutcomeRowsState {
  setSelectedData?: React.Dispatch<React.SetStateAction<IListProductsPDVAPI[]>>;
  selectedData?: IListProductsPDVAPI[];
  index: number;
  cell: Cell<IListProductsPDVAPI, any>;
  selectedIncomeData?: ISelectedIncomeRowsTable[];
  selectedOutcomeData?: ISelectedOutcomeRowsTable[];
}

export interface IBOQuantityCellProps
  extends IUpdateQuantityCell,
    IPDVPreviousData,
    ISelectedPreviousOutcomeRowsState,
    ISelectedMainProductsDetails {
  selectedData?: IListProductsPDV[];
  index: number;
  cell: any;
  selectedIncomeData?: ISelectedIncomeRowsTable[];
  selectedOutcomeData?: ISelectedOutcomeRowsTable[];
}

export interface IIncomeInventoryGeneralDataProvidersProps
  extends ISelectedProviderResponsibleState {
  providersInventoryByName: IListProvidersInventoryByNameTable[];
}

export interface IOutcomeInventoryGeneralDataBOfficesProps
  extends ISelectedBranchOfficeState {
  branchOfficesInventoryNameID: IListBOfficesInventoryNameIDTable[];
}

export interface IIncomeInventoryGeneralDataProductsTableProps
  extends ISelectedIncomeData,
    ISelectedIncomeRowsState {}

export interface ISetSelectedPreviousOutcomeRowsState {
  selectedPreviousOutcomeRows?: Dispatch<
    SetStateAction<ISelectedOutcomeRowsTable[]>
  >;
}

export interface IInventoryGeneralDataProductsTableProps
  extends ISetSelectedPreviousOutcomeRowsState,
    ISelectedMainProductsDetails {
  selectedData?: ISelectedIncomeRowsTable[];
  setSelectedData?: Dispatch<SetStateAction<ISelectedIncomeRowsTable[]>>;
}

export interface IInventoryGeneralDataCommentsProps extends ICommentsValues {}

export interface ICommentsValues {
  comments?: string;
}

export interface IInventoryGeneralDataProductsCommentsProps
  extends IInventoryGeneralDataProductsTableProps,
    ISetSelectedPreviousOutcomeRowsState,
    ICommentsValues,
    ISelectedMainProductsDetails {}

export interface IOutcomeInventoryGeneralDataProductsTableProps
  extends ISelectedOutcomeData,
    ISelectedOutcomeRowsState,
    ISelectedPreviousOutcomeRowsState {}

export interface IOutcomeInventoryProps
  extends ISelectedOutcomeData,
    ISetFieldValue,
    ISelectedOutcomeRowsState,
    IHandleGoToRegisterType,
    ISelectedPreviousOutcomeRowsState {}

export interface IListProductDetailsData {
  id: number;
  name: string;
  quantity: number;
  specific_commission?: number;
  general_commission?: number;
  BO_commision?: number;
  income_product: {
    last_date: string;
    quantity: number;
  };
  outcome_product: {
    last_date: string;
    quantity: number;
  };
}

export interface RowData {
  id: number;
  createdAt: string;
  quantity: number;
  operationType: string;
  providerName: number;
  branchOfficeName: string;
  userInfoName: string;
}

export interface IListProductDetailsProps {
  inventoryProductGeneralDetails: IUseListInventoryProductGeneralDetails;
  mostRecentIncomeDate: IUseListInventoryProductIncomeInventoriesHistoryResponse;
  mostRecentOutcomeDate: IUseListInventoryProductOutcomeInventoriesHistoryResponse;
  // productData: IListInventoryOperationsByProductIDTable[];
  // product: IListProductData;
}

export interface IListProductDetailsTopDataProps {
  productData: IListInventoryOperationsByProductIDTable[];
}

export interface IListLatestDateQuantity {
  createdAt: string;
  quantity: number;
}

export type AccessorFunction<T> = (row: T) => string;
export type AccessorString =
  | "date"
  | "quantity"
  | "providerName"
  | "branchOfficeName"
  | "userInfoName";

export interface IListProductDetailsColumns {
  Header:
    | "FECHA"
    | "CANTIDAD"
    | "TIPO DE OPERACIÓN"
    | "PROVEEDOR"
    | "SUCURSAL"
    | "RESPONSABLE";
  accessor:
    | AccessorString
    | AccessorFunction<IListProductDetailsColumnOperationType>
    | AccessorFunction<IListProductDetailsProvider>
    | AccessorFunction<IListProductDetailsBranchOffice>
    | AccessorFunction<IListProductDetailsUserInfo>;
}

export interface IListProductDetailsColumnOperationType {
  inventoryOperationType: string;
  inventoryOperationID: string;
}

export interface IListProductDetailsProvider {
  providerID: string;
  providerName: string;
}

export interface IListProductDetailsBranchOffice {
  branchOfficeID: string;
  branchOfficeName: string;
}

export interface IListProductDetailsUserInfo {
  userInfoID: string;
  userInfoName: string;
}

export interface IListProductTableData {
  id: number;
  date: string;
  quantity: number;
  operation_type: "INCOME" | "OUTCOME";
  destination: string;
  responsible: string;
}

export interface IListProductsTableData {
  products: IListProductTableData[];
}

// export interface ISelectedStateState {
//   selectedState?: string;
//   setSelectedState?: (state: string) => void;
// }

// export interface ISelectedOptionsState {
//   selectedState?: string;
//   setSelectedState?: (state: string) => void;
// }

export interface IRegisterIncomeInputsProps
  extends ISelectedStateState,
    ISetFieldValue,
    IIncomeInventoryErrors,
    ISelectedProviderResponsibleState {
  // userResponsible: string;
  selectedProviderName?: string;
}

export interface IRegisterOutcomeInputsProps
  extends ISetFieldValue,
    IOutcomeInventoryErrors,
    ISelectedBranchOfficeState {
  userResponsible: string;
  selectedState?: string;
  setSelectedState?: (state: string) => void;
}

export interface IProvidersEnterpriseNameInventory {
  providersEnterpriseNameInventory: IListProvidersEnterpriseNameInventoryAPI[];
}

export interface IProvidersMultiSelectProps
  extends ISelectedOptionsState,
    ISetFieldValue,
    IProvidersEnterpriseNameInventory {}

export interface IRegisterTypeValue {
  values?: "INCOME" | "OUTCOME";
}

export interface IRegisterTypeFormDataValues {
  registerType: "INCOME" | "OUTCOME";
}

export interface IInventoryTypeState {
  inventoryType: "INCOME" | "OUTCOME" | "RETURNS" | "";
}

export interface IBOInventoryTypeState {
  inventoryType: "INCOME" | "RETURNS" | "";
}

enum InventoryType {
  INCOME = "INCOME",
  OUTCOME = "OUTCOME",
}

export interface IResetForm {
  resetForm?: (
    nextState?: Partial<FormikState<IInventoryGeneralFormData>> | undefined
  ) => void;
}

export interface IRegisterTypeProps
  extends IHandleInventoryType,
    IRegisterTypeValue,
    ISetSelectedIncomeRows,
    ISetSelectedOutcomeRows,
    IResetForm,
    ISetSelectedProviderState,
    ISetSelectedProviderResponsibleState,
    ISelectedStateState {}

export interface IBORegisterTypeProps
  extends IBOHandleInventoryType,
    ISetSelectedIncomeRows,
    IResetForm,
    ISetSelectedProviderState,
    ISetSelectedProviderResponsibleState,
    ISelectedStateState {
  values?: IBOInventoryTypeState["inventoryType"];
}

//?API TYPES

export interface IUpdateProductQuantityAPI {
  input: {
    id: string;
    quantity: number;
  };
}

export interface ICreateInventoryOperationAPI {
  input: {
    operationType: IRegisterTypeValue["values"];
    inventoryID: string;
  };
}
