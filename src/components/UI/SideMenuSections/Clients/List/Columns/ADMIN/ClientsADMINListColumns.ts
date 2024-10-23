import { IClientsADMINListColumns } from "./interfaces/IClientsADMINListColumns";

export const ClientsADMINListColumns: IClientsADMINListColumns[] = [
  {
    Header: "Nombre del cliente",
    accessor: "clientName",
  },
  {
    Header: "# Cliente",
    accessor: "clientID",
  },
  {
    Header: "Cliente Desde",
    accessor: "clientSince",
  },
  {
    Header: "Ultima Venta",
    accessor: "lastSale",
  },
  {
    Header: "Sucursal",
    accessor: "branchOfficeName",
  },
];
