import { ICreditsListColumns } from "./interfaces/ICreditsListColumns";

export const ClientCreditsColumns: ICreditsListColumns[] = [
  {
    Header: "Nombre del cliente",
    accessor: "clientName",
  },
  {
    Header: "ID Cliente",
    accessor: "id",
  },
  {
    Header: "Inicio Crédito",
    accessor: "startDate",
  },
  {
    Header: "Credito Total",
    accessor: "totalCredit",
  },
  {
    Header: "Último Abono",
    accessor: "last_payment_date",
  },
];
