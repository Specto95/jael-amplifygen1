import { IAccountListColumns } from "./interfaces/IAccountListColumns";

export const AccountListColumns: IAccountListColumns[] = [
  {
    Header: "Nombre de Usuario",
    accessor: "username",
  },
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Tipo de usuario",
    accessor: "userType",
  },
  // {
  //   Header: "Sucursales",
  //   accessor: "branchOffices",
  // },
];
