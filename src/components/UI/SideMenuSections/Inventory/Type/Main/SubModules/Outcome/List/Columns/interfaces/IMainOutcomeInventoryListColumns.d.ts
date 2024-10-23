export interface IMainOutcomeInventoryListColumns {
  Header:
    | "ID de Egreso"
    | "Fecha de Registro"
    | "Tipo de Operación"
    | "Sucursal Destino";
  accessor: "id" | "date" | "outcome" | "branchOfficeName";
}
