import { IBranchOfficeManagersFormColumns } from "./interfaces/IBranchOfficeManagersColumns";

export const BranchOfficeManagerColumns: IBranchOfficeManagersFormColumns[] = [
  {
    Header: "NOMBRE ENCARGADO",
    accessor: "name",
  },
  {
    Header: "CELULAR",
    accessor: "phone",
  },
  {
    Header: "CORREO",
    accessor: "email",
  },
  {
    Header: "ID EMPLEADO",
    accessor: "id",
  },
];
