export interface ISalesListColumns {
    Header: "ID Operacion" | "Estatus" | "Cliente" | "";
    accessor: "id" | "status" | "client" | "actions" | ((row: any) => any);
  }