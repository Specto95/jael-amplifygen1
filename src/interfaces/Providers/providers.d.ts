import { Dispatch, SetStateAction } from "react";
import { IListProvidersViewAPI } from "../apis/Providers/providersAPI";

export interface IProvider {
  id: number;
  provider_name: string;
  type: string;
}

export interface IProviders {
  Provider: IProvider[];
}

export interface IListProvidersView {
  listProvidersView: IListProvidersViewAPI[];
}

export interface ISetListProvidersView {
  setListProvidersView: (listProvidersView: any) => void;
}

export interface ISetProvider {
  setProvider: (product: IProvider[]) => void;
}

export interface IIsEditing {
  isEditing: boolean;
}

export interface IID {
  id: string;
}

export interface IUpdateProviderIDParams {
  id: string;
}

export interface ISetIsEditing {
  setIsEditing: (isEditing: boolean) => void;
}

export interface IListProviderInfoProps extends ISetIsEditing {
  enterpriseData: IListEnterpriseData;
  responsibleData: IGetProviderResponsibleData[];
  productData: any;
}

export interface IUpdateProviderInfoProps
  extends ISetIsEditing,
    IUpdateProviderIDParams {
  updateResponsiblesData: IProviderResponsibleData[];
  setUpdateResponsiblesData: Dispatch<
    SetStateAction<IProviderResponsibleData[]>
  >;
  updateProductsData: IProviderProductData[];
  setUpdateProductsData: Dispatch<SetStateAction<IProviderProductData[]>>;
  provider?: IProviderState;
}

export interface IEditEnterpriseData {
  enterprise_name: string;
  enterprise_RFC?: string;
  phone?: string;
  fixed_phone?: string;
}

export interface IListEnterpriseDataProps {
  enterpriseData: IListEnterpriseData;
}

export interface IProviderProductsProps {
  productData?: IProviderProductData[];
}

export interface IProviderTypeState {
  values?: "product" | "service" | "returns" | "";
}

export interface IListResponsiblesProps {
  responsibleData: IProviderResponsibleData[];
}

export interface IProviderResponsiblesProps {
  updateResponsiblesData: IProviderResponsibleData[];
  setUpdateResponsiblesData: (
    responsibleData: IProviderResponsibleData[]
  ) => void;
}

export interface IEditProviderProductsProps {
  updateProductsData: IProviderProductData[];
  setUpdateProductsData: (productData: IProviderProductData[]) => void;
}

export interface IEditResponsiblesActionsProps
  extends IProviderResponsiblesProps {
  cell: any;
}

export interface IEditProviderProductsActionsProps
  extends IEditProviderProductsProps {
  cell: any;
}

export interface IEditResponsiblesActionsProps {}

export interface IProviderResponsiblesColumns {
  Header: "NOMBRE PROVEEDOR" | "CELULAR" | "RFC" | "";
  accessor: "name" | "phone" | "RFC" | "edit";
}

export interface IEditProviderResponsiblesColumns {
  Header: "NOMBRE PROVEEDOR" | "CELULAR" | "RFC" | "";
  accessor: "name" | "phone" | "RFC" | "edit";
}

export interface IProviderProductsColumns {
  Header: "PRODUCTO" | "PRECIO" | "CLASE" | "GRUPO" | "SUBGRUPO" | "COMISIÓN";
  accessor:
    | "name"
    | "price"
    | "class_id"
    | "category_id"
    | "subcategory_id"
    | "commission";
}

export interface IEditProviderProductsColumns {
  Header:
    | "PRODUCTO"
    | "PRECIO"
    | "CLASE"
    | "GRUPO"
    | "SUBGRUPO"
    | "COMISIÓN"
    | "";
  accessor:
    | "name"
    | "price"
    | "class_id"
    | "category_id"
    | "subcategory_id"
    | "commission"
    | "edit";
}
