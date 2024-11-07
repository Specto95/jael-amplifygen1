import {
  ICreditsListColumns,
  ICreditsListMainColumns,
} from "./interfaces/ICreditsListColumns";

export const ClientCreditsColumns: ICreditsListColumns[] = [
  {
    Header: "Nombre del cliente",
    accessor: "clientName",
  },
  {
    Header: "ID Cliente",
    accessor: "clientID",
  },
  {
    Header: "Status de Crédito",
    accessor: "creditStatus",
  },
];

export const ClientCreditsMainColumns: ICreditsListMainColumns[] = [
  {
    Header: "Nombre del cliente",
    accessor: "clientName",
  },
  {
    Header: "ID Cliente",
    accessor: "clientID",
  },
  {
    Header: "Status de Crédito",
    accessor: "creditStatus",
  },
  {
    Header: "Sucursal",
    accessor: "branchOfficeName",
  },
];
