import { IProductImages } from "../Products/products";
import { Column } from "react-table";
import { TableOptions } from "react-table";

import {
  IHandleBackStep,
  IHandleNextStep,
  ISetFieldValue,
} from "../SideMenuSections/general";
import {
  IPDVGeneralFormData,
  IUpdateCreditClientInput,
} from "@/pages/PointOfSale/PDVForm/Add/FormProps/PDVGeneralFormData.d";
import { IGetClientCreditByID } from "@/pages/PointOfSale/PDVForm/Add/Steps/Second/api/interfaces/IUseGetClientCreditByID";
import { IListProductsPDVAPI } from "../../pages/PointOfSale/PDVForm/Add/Steps/First/api/interfaces/IUseListProductsPDV";
import { Dispatch, SetStateAction } from "react";

export interface IPDVSelectedData {
  selectedData?: IListProductsPDVAPI[];
}

export interface IPDVPreviousData {
  previousData?: IListProductsPDVAPI[];
}

export interface IPDVSetPreviousData {
  setPreviousData?: (previousData: any) => void;
}

export interface IPDVSelectedDataMemo {
  data?: readonly IListProductsPDV[];
}

export interface IListProductsPDVProps {
  listProductsPDV: IListProductsPDV[];
}

export interface ISetListProductsPDV {
  setListProductsPDV?: (listProductsPDV: any) => void;
}

export interface IPDVImagesProps
  extends IListProductsPDVProps,
    ISetListProductsPDV,
    IPDVSetSelectedDataSetter,
    IPDVSelectedData,
    IHandleBackStep,
    IHandleNextStep,
    IPDVPreviousData,
    IPDVSetPreviousData {}

export interface IPDVCardProps
  extends IPDVSetSelectedDataSetter,
    IPDVSelectedData,
    IPDVSetPreviousData {
  pro: IListProductsPDV;
  productImages?: IProductImages;
}

export interface IPDVSetSelectedDataSetter {
  setSelectedData?: (selectedData: any) => void;
}

export interface IPDVStatus {
  status: "pendingToPay" | "paid" | "canceled";
}

export interface IPDVSelectedDataProps
  extends IPDVSelectedData,
    IPDVSetSelectedDataSetter,
    IPDVSetPreviousData,
    IPDVPreviousData {
  columns: IPDVSelectedDiscountsDataColumns[];
  currentStepIndex?: number;
}

export interface IPDVAvailableDiscountsTableProps
  extends IPDVSelectedDataProps {}

export interface IPDVSelectedDataActionsProps
  extends IPDVSetSelectedDataSetter,
    IPDVSelectedData,
    IPDVSetPreviousData {
  cell: any;
  currentStepIndex?: number;
}

export interface IPDVSelectedDataResumeProps extends IPDVSelectedData {
  columns: Column<IListProductsPDV>[];
}

export interface IPDVActionsViewProps
  extends IHandleBackStep,
    ISetTotalWithDiscount,
    IPDVSetSelectedDataSetter,
    IHandleNextStep,
    IPDVSelectedData,
    IPDVPreviousData,
    IPDVSetPreviousData,
    ISetTotalCommission {
  listProductsPDV?: IListProductsPDVAPI[];
  setListProductsPDV?: React.Dispatch<
    React.SetStateAction<IListProductsPDVAPI[]>
  >;
  currentStepIndex?: number;
  previousCreditAvailable?: number;
  totalWithDiscount?: number;
  totalToPay?: number;
  setTotalToPay?: any;
  values?: IPDVGeneralFormData;
  selectedMonthsToPay?: number;
  handleTotalPayableInMonths?: () => string;
  handleTotalPayableInCash?: (
    values: IPDVGeneralFormData,
    getClientCreditByID: IGetClientCreditByID
  ) => string | number;
}

export interface IIsClientRegistered {
  isClientRegistered: "yes" | "no";
}

export interface ISetTotalCommission {
  setTotalCommission?: Dispatch<SetStateAction<number>>;
}

export interface ITotalCommission {
  totalCommission?: number;
}

export interface ITotalToPayMinusCredit {
  totalToPayMinusCredit?: number;
}

export interface IPDVOrdersManagementProps
  extends IPDVActionsViewProps,
    ISetFieldValue,
    ISelectedClient,
    ISetSelectedClient,
    ISelectedClient,
    ISelectedDiscount,
    ISetSelectedDiscount,
    ITotalWithDiscount,
    ISetTotalWithDiscount,
    ISelectedMonthsToPay,
    ITermDaysToPay,
    ISetTermDaysToPay,
    ISetSelectedMonthsToPay,
    ISetValues,
    IPDVSetPreviousData,
    ISetTotalCommission,
    ITotalCommission,
    ITotalToPayMinusCredit {
  values?: IPDVGeneralFormData;
  totalToPay?: number;
  setTotalToPay?: any;
  pendingToPayState?: number;
  updateCreditClientState?: IUpdateCreditClientInput;
  setUpdateCreditClientState?: (
    updateCreditClientState: IUpdateCreditClientInput
  ) => void;
  setCreditAvailable?: (creditAvailable: any) => void;
  pendingToPay?: number;
  setPendingToPay?: (pendingToPay: any) => void;
  handleTotalPayableInCash?: (
    values: IPDVGeneralFormData,
    getClientCreditByID: IGetClientCreditByID
  ) => string | number;
  handleTotalPayableInMonths?: () => string;
  setTotalByDaysToPay?: Dispatch<SetStateAction<number>>;
  handleTotalByDaysToPay?: () => void;
  handleTotalPayments?: () => void;
  nonRegisteredClientID?: string;
  salesOperationID?: string;
}

export interface IPDVFixedResumeSaleProps extends IPDVOrdersManagementProps {
  currentStepIndex?: number;
  creditAvailable?: number;
  previousCreditAvailable?: number;
  isTyping?: boolean;
}

export interface ISetValues {
  setValues?: (
    values: SetStateAction<IPDVGeneralFormData>,
    shouldValidate?: boolean | undefined
  ) => void;
}

export interface ISelectedClient {
  selectedClient?: IPDVOrdersManagementClientSelected;
}

export interface ISetSelectedClient {
  setSelectedClient?: (selectedClient: any) => void;
}

export interface ISelectedDiscount {
  selectedDiscount?: number;
}

export interface ISetSelectedDiscount {
  setSelectedDiscount?: Dispatch<SetStateAction<number | undefined>>;
}

export interface ITotalWithDiscount {
  totalWithDiscount?: number;
}

export interface ISetTotalWithDiscount {
  setTotalWithDiscount?: (totalWithDiscount: any) => void;
}

export interface ISelectedMonthsToPay {
  selectedMonthsToPay?: number;
}

export interface ISetSelectedMonthsToPay {
  setSelectedMonthsToPay?: (selectedMonthsToPay: any) => void;
}

export interface ISetTermDaysToPay {
  setTermDaysToPay?: (termDaysToPay: any) => void;
}

export interface ITermDaysToPay {
  termDaysToPay?: "BIWEEKLY" | "MONTHLY" | "NONE" | "";
}

export interface IPDVOrdersManagementClientSelected {
  id: string;
  fullName: string;
  hasCredit: boolean;
}

export interface IPDVOrdersManagementResumeProps
  extends IPDVSelectedData,
    ISelectedClient,
    ISelectedDiscount,
    ITotalWithDiscount,
    ISelectedMonthsToPay,
    ITotalCommission,
    ITermDaysToPay,
    ITotalToPayMinusCredit {
  salesID?: string;
  isClientRegistered?: IPDVIsClientRegistered["isClientRegistered"];
  clientName?: string;
  values?: IPDVGeneralFormData;
  previousCreditAvailable?: number;
  currentStepIndex?: number;
  totalToPay?: number;
  setCreditAvailable?: (creditAvailable: any) => void;
  handleTotalPayableInCash?: (
    values: IPDVGeneralFormData,
    getClientCreditByID: IGetClientCreditByID
  ) => string | number;
  handleTotalPayableInMonths?: () => string;
  nonRegisteredClientID?: string;
  salesOperationID?: string;
  paymentType?: IPDVGeneralFormData["paymentType"];
}

export interface IPDVIsClientRegistered {
  isClientRegistered: "yes" | "no";
}

export interface CustomTableOptions<D extends object> extends TableOptions<D> {
  selectedData: IListProductsPDV[];
}
