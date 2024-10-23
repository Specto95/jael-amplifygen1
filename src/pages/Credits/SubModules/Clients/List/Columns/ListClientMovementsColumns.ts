import {
  IListClientMovementsColumns,
  ITotalPayments,
} from "./interfaces/IListClientMovementsColumns";

export const ListClientMovementsColumns: IListClientMovementsColumns[] = [
  {
    Header: "ID Venta",
    accessor: "id",
  },
  {
    Header: "Total venta",
    accessor: "total",
  },
  {
    Header: "Plazos",
    accessor: "termDaysToPay",
  },
  {
    Header: "# Pago",
    accessor: (row: ITotalPayments) =>
      `${row.currentTotalPayments}/${row.totalPayments}`,
  },
  {
    Header: "Vencimiento",
    accessor: "nextPaymentDate",
  },
  {
    Header: "Total Pago",
    accessor: "amountPaid",
  },
  {
    Header: "Adeudo",
    accessor: "pendingToPay",
  },
];
