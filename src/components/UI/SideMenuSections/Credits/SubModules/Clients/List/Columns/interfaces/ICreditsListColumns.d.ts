export interface ICreditsListColumns {
    Header: "Nombre del cliente" | "ID Cliente" | "Inicio Crédito" | "Credito Total" | "Último Abono";
    accessor: "clientName" | "id" | "startDate" | "totalCredit" | "last_payment_date";
}