import {
  IAccountsReceivableListColumns,
  ICashIncomeSalesColumns,
} from "./interfaces/IAccountsReceivableListColumns";

export const AccountsReceivableColumns: IAccountsReceivableListColumns[] = [
  {
    Header: "Nombre del cliente",
    accessor: "clientName",
  },
  {
    Header: "Días Pagos",
    accessor: "termDaysToPay",
  },
  {
    Header: "Estado",
    accessor: "status",
  },
  {
    Header: "Vencimiento",
    accessor: "paymentDate",
  },
  {
    Header: "Fecha de Pago",
    accessor: "datePaid",
  },
  {
    Header: "Fecha Compra",
    accessor: "saleSince",
  },
  {
    Header: "ID Venta",
    accessor: "id",
  },
  {
    Header: "Total Factura",
    accessor: "total",
  },
  {
    Header: "Status Pago",
    accessor: "statusActions",
  },
];

export const AccountsReceivableResumeColumns: IAccountsReceivableListColumns[] =
  [
    {
      Header: "Nombre del cliente",
      accessor: "clientName",
    },
    {
      Header: "Días Pagos",
      accessor: "termDaysToPay",
    },
    {
      Header: "Estado",
      accessor: "status",
    },
    {
      Header: "Vencimiento",
      accessor: "paymentDate",
    },
    {
      Header: "Fecha de Pago",
      accessor: "datePaid",
    },
    {
      Header: "Fecha Compra",
      accessor: "saleSince",
    },
    {
      Header: "ID Venta",
      accessor: "id",
    },
    {
      Header: "Total Factura",
      accessor: "total",
    },
  ];

export const AccountsReceivableFormColumns: IAccountsReceivableListColumns[] = [
  {
    Header: "Nombre del cliente",
    accessor: "clientName",
  },
  {
    Header: "Días Pagos",
    accessor: "termDaysToPay",
  },
  {
    Header: "Estado",
    accessor: "status",
  },
  {
    Header: "Vencimiento",
    accessor: "paymentDate",
  },
  {
    Header: "Fecha de Pago",
    accessor: "datePaid",
  },
  {
    Header: "Fecha Compra",
    accessor: "saleSince",
  },
  {
    Header: "ID Venta",
    accessor: "id",
  },
  {
    Header: "Total Factura",
    accessor: "total",
  },
  {
    Header: "Pendiente de Pago",
    accessor: "pendingToPay",
  },
  {
    Header: "Status Pago",
    accessor: "statusActions",
  },
];

export const CashIncomeSalesColumns: ICashIncomeSalesColumns[] = [
  {
    Header: "Cliente",
    accessor: "clientName",
  },
  {
    Header: "ID Venta",
    accessor: "id",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Sucursal",
    accessor: "branchOfficeName",
  },
  {
    Header: "Total",
    accessor: "total",
  },
  {
    Header: "Status Pago",
    accessor: "paymentStatus",
  },
  {
    Header: "Fecha",
    accessor: "datePaid",
  },
  {
    Header: "",
    accessor: "statusActions",
  },
];

export const AccountsReceivableSelectedColumns: IAccountsReceivableListColumns[] =
  [
    {
      Header: "Nombre del cliente",
      accessor: "clientName",
    },
    {
      Header: "Días Pagos",
      accessor: "termDaysToPay",
    },
    {
      Header: "Estado",
      accessor: "status",
    },
    {
      Header: "Vencimiento",
      accessor: "paymentDate",
    },
    {
      Header: "Fecha de Pago",
      accessor: "datePaid",
    },
    {
      Header: "Fecha Compra",
      accessor: "saleSince",
    },
    {
      Header: "ID Venta",
      accessor: "id",
    },
    {
      Header: "Total Factura",
      accessor: "total",
    },
    {
      Header: "Pendiente de Pago",
      accessor: "pendingToPay",
    },
  ];
