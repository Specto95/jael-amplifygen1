import {
  IListProductDetailsBranchOffice,
  IListProductDetailsColumnOperationType,
  IListProductDetailsColumns,
  IListProductDetailsProvider,
  IListProductDetailsUserInfo,
} from "@/interfaces/Inventory/inventory";
import { formatKey } from "@/utils/helpers";

export const ListProductDetailsColumns: IListProductDetailsColumns[] = [
  {
    Header: "FECHA",
    accessor: "date",
  },
  {
    Header: "CANTIDAD",
    accessor: "quantity",
  },
  {
    Header: "TIPO DE OPERACIÓN",
    accessor: (row: IListProductDetailsColumnOperationType) =>
      `${formatKey(row.inventoryOperationID)} - ${row.inventoryOperationType}`,
  },
  {
    Header: "PROVEEDOR",
    accessor: (row: IListProductDetailsProvider) =>
      `${formatKey(row.providerID)} - ${row.providerName}`,
  },
  {
    Header: "SUCURSAL",
    accessor: (row: IListProductDetailsBranchOffice) =>
      `${formatKey(row.branchOfficeID)} - ${row.branchOfficeName}`,
  },
  {
    Header: "RESPONSABLE",
    accessor: (row: IListProductDetailsUserInfo) =>
      `${formatKey(row.userInfoID)} - ${row.userInfoName}`,
  },
];
