import { IMainCashListColumns } from "./interfaces/IMainCashListColumns";

export const MainCashListColumns: IMainCashListColumns[] = [
  {
    Header: "Nombre",
    accessor: "name",
  },
  {
    Header: "Tipo de usuario",
    accessor: "userType",
  },
  {
    Header: "Sucursal",
    accessor: "branchOfficeName",
  },
  {
    Header: "Tipo de movimiento",
    accessor: "movementType",
  },
  {
    Header: "ID de movimiento",
    accessor: "id",
  },
  {
    Header: "Total",
    accessor: "total",
  },
  {
    Header: "Fecha",
    accessor: "date",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];
