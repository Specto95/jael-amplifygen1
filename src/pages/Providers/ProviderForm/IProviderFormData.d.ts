import { FormikErrors, FormikTouched } from "formik";
import { FormEvent } from "react";
import { Column } from "react-table";

import {
  IListProductsIncomeInventoryTable,
  IListProductsOutcomeInventoryTable,
} from "@/interfaces/Inventory/inventory";

import {
  IHandleBackStep,
  IHandleNextStep,
  ISetFieldValue,
} from "@/interfaces/SideMenuSections/general";
import { IProductTable } from "@/interfaces/Products/products";

export interface IProviderFormData {
  id?: string;
  providerServiceproviderId?: null | string;
  providerProductproviderId?: null | string;
  enterprise_name: string;
  enterprise_RFC?: string;
  phone?: string;
  fixed_phone?: string;
  type?: string;
}

export interface IProductProviderFormData {
  id?: string;
  productProviderProviderIDId?: string;
}

export interface IProductProviderResponsiblesFormData {
  responsibles?: IProductProviderResponsibleFormData[];
}

export interface IProductProviderResponsibleFormData {
  id?: string;
  productproviderID?: string;
  name: string;
  second_name?: string;
  lastname: string;
  second_lastname?: string;
  phone?: string;
  RFC?: string;
  // CURP?: string;
  // gender?: string;
}

export interface IServiceProviderResponsiblesFormData {
  responsibles?: IServiceProviderResponsibleFormData[];
}

export interface IServiceProviderResponsibleFormData {
  id?: string;
  serviceproviderID?: string;
  name: string;
  second_name?: string;
  lastname: string;
  second_lastname?: string;
  phone?: string;
  RFC?: string;
  // CURP?: string;
  // gender?: string;
}

export interface IServiceProviderFormData {
  id?: string;
  service_name: string;
  service_description?: string;
  cost_type?: string;
  serviceProviderProviderIDId?: string;
}

export interface IProviderGeneralFormData {
  providerFormData: IProviderFormData;
  serviceProviderFormData: IServiceProviderFormData;
  productProviderFormData: IProductProviderFormData;
  responsibles?: IServiceProviderResponsibleFormData[];
  productProviderResponsiblesFormData: IProductProviderResponsiblesFormData;
  serviceProviderResponsiblesFormData: IServiceProviderResponsiblesFormData;
  type: "product" | "service" | "";
  isSecondButton: boolean;
}

export interface IHandleProviderType {
  handleProviderType?: (type: "product" | "service") => void;
}

export interface IProviderHandlerSteps
  extends IHandleBackStep,
    IHandleNextStep,
    ISetFieldValue,
    IErrors,
    IEnterpriseName,
    IProviderFormDataValues {}

export interface IAddServiceResponsibleProps
  extends IHandleBackStep,
    IHandleNextStep,
    ISetFieldValue,
    IServiceResponsibleErrors,
    IEnterpriseName,
    IServiceProviderResponsiblesValues {}

export interface IAddProductResponsibleProps
  extends IHandleBackStep,
    IHandleNextStep,
    ISetFieldValue,
    IServiceResponsibleErrors,
    IEnterpriseName,
    IProductProviderResponsiblesValues {
  handleBackProviderType?: () => void;
}

export interface ISetProviderType {
  setProviderType?: (type: "product" | "service" | "") => void;
}

export interface IEnterpriseName {
  enterprise_name?: string;
}

export interface IProviderType
  extends IHandleProviderType,
    ISetProviderType,
    ISetFieldValue,
    IEnterpriseName,
    ISelectedRowsState {}

export interface ISelectedRowsState {
  selectedRows?: IProductTable[];
  setSelectedRows?: (rows: any) => void;
}

export interface IProductProviderProps
  extends IEnterpriseName,
    ISelectedRowsState {
  handleNextStep?: () => void;
  handleBackProviderType?: () => void;
}

export interface ITableFunctionProps {
  data:
    | IListProductsIncomeInventoryTable[]
    | IListProductsOutcomeInventoryTable[]
    | ISelectedOutcomeRowsTable[]
    | IProductTable[]
    | undefined;
  columns: Column<object>[];
  hovered: boolean;
}

export interface IErrors {
  errors?: FormikErrors<IProviderGeneralFormData>;
  touched?: FormikTouched<IProviderGeneralFormData>;
  isValid?: boolean;
  dirty?: boolean;
}

export interface IServiceResponsibleErrors {
  errors?: FormikErrors<IServiceProviderResponsiblesFormData>;
  touched?: FormikTouched<IServiceProviderResponsiblesFormData>;
  isValid?: boolean;
  dirty?: boolean;
}

export interface IProductResponsibleErrors {
  errors?: FormikErrors<IProductProviderResponsiblesFormData>;
  touched?: FormikTouched<IProductProviderResponsiblesFormData>;
}

export interface IProviderFormDataValues {
  values?: any;
}

export interface IServiceProviderResponsiblesValues {
  responsibles?: IServiceProviderResponsibleFormData[];
}

export interface IProductProviderResponsiblesValues {
  responsibles?: IProductProviderResponsibleFormData[];
}

export interface IHandleSubmit {
  handleSubmit?: (e?: FormEvent<HTMLFormElement> | undefined) => void;
}

export interface IAddProviderProps
  extends IErrors,
    IProviderFormDataValues,
    IHandleSubmit {
  handleNextStep?: () => void;
}

export interface IAddResponsiblesProps extends ISetFieldValue {
  key: number;
  name: IServiceProviderResponsibleFormData;
}

export interface IAddOtherResponsiblesProps
  extends ISetFieldValue,
    IServiceResponsibleErrors,
    IServiceProviderResponsiblesValues {
  index: number;
}

export interface IAddProductResponsibleFormProps
  extends ISetFieldValue,
    IProductResponsibleErrors,
    IProductProviderResponsiblesValues {
  index: number;
}
