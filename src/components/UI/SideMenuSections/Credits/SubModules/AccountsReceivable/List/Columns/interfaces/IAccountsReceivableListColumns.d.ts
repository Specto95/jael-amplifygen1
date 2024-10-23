export interface IAccountsReceivableListColumns {
  Header:
    | "Nombre del cliente"
    | "Días Pagos"
    | "Estado"
    | "Vencimiento"
    | "Fecha de Pago"
    | "Fecha Compra"
    | "ID Venta"
    | "Total Factura"
    | "Pendiente de Pago"
    | "Status Pago";
  accessor:
    | "clientName"
    | "termDaysToPay"
    | "status"
    | "paymentDate"
    | "datePaid"
    | "saleSince"
    | "id"
    | "total"
    | "pendingToPay"
    | "statusActions";
}

export interface ICashIncomeSalesColumns {
  Header:
    | "Cliente"
    | "ID Venta"
    | "Status"
    | "Sucursal"
    | "Total"
    | "Status Pago"
    | "Fecha"
    | "";

  accessor:
    | "id"
    | "clientName"
    | "status"
    | "branchOfficeName"
    | "total"
    | "paymentStatus"
    | "datePaid"
    | "statusActions";
}
