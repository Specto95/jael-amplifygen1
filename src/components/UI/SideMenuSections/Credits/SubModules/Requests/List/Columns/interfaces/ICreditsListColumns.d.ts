export interface ICreditsListColumns {
  Header: "Nombre del cliente" | "ID Cliente" | "Status de Crédito";
  accessor: "clientName" | "clientID" | "creditStatus";
}

export interface ICreditsListMainColumns {
  Header:
    | "Nombre del cliente"
    | "ID Cliente"
    | "Status de Crédito"
    | "Sucursal";
  accessor: "clientName" | "clientID" | "creditStatus" | "branchOfficeName";
}
