export interface ICommissionListColumns {
    Header:
      | "Nombre Sucursal"
      | "Estado/Ciudad"
      | "ID Sucursal"
      | "Comisión Sucursal";
    accessor: "name" | "location" | "id" | "branchOffice_commission";
  }