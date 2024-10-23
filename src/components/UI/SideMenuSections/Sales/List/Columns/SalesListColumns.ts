import { ISalesListColumns } from "./interfaces/ISalesListColumns";

export const SalesListColumns: ISalesListColumns[] = [
  {
    Header: "ID Operacion",
    accessor: "id",
  },
  {
    Header: "Estatus",
    accessor: "status",
  },
  {
    Header: "Cliente",
    accessor: (row: any) => row.client || row.nonRegisteredClientName,
  },
  {
    Header: "",
    accessor: "actions",
  },
];
