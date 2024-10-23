export interface IMainIncomeInventoryListColumns {
  Header:
    | "ID de Ingreso"
    | "Fecha de Registro"
    | "Tipo de Operación"
    | "Ingreso"
    | "Sucursal";
  accessor: "id" | "date" | "operationType" | "branchOfficeName";
}
