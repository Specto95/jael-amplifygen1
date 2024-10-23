export interface IListClientMovementsColumns {
  Header:
    | "ID Venta"
    | "Total venta"
    | "Plazos"
    | "# Pago"
    | "Vencimiento"
    | "Total Pago"
    | "Adeudo";
  accessor:
    | "id"
    | "total"
    | "termDaysToPay"
    | "nextPaymentDate"
    | ((row: ITotalPayments) => string)
    | "amountPaid"
    | "pendingToPay";
}

export interface ITotalPayments {
  currentTotalPayments: number;
  totalPayments: number;
}
