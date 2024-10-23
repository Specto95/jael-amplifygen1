import { ISelectClientColumns } from "./interfaces/SelectClientColumns";

export const SelectClientColumns: ISelectClientColumns[] = [
  {
    Header: "Nombre de Cliente",
    accessor: "name",
  },
  {
    Header: "ID Cliente",
    accessor: "id",
  },
  {
    Header: "Cliente Desde",
    accessor: "clientSince",
  },
  {
    Header: "Estado",
    accessor: "state",
  },
];
