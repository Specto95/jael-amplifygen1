import { IClientsBMListColumns } from "./interfaces/IClientsBMListColumns";

export const ClientsBMListColumns: IClientsBMListColumns[] = [
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
];
