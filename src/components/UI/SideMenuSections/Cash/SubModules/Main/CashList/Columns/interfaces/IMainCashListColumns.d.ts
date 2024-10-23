export interface IMainCashListColumns {
  Header:
    | "Nombre"
    | "Tipo de usuario"
    | "Sucursal"
    | "Tipo de movimiento"
    | "ID de movimiento"
    | "Total"
    | "Fecha"
    | "Status";

  accessor:
    | "name"
    | "userType"
    | "branchOfficeName"
    | "movementType"
    | "id"
    | "total"
    | "date"
    | "status";
}
