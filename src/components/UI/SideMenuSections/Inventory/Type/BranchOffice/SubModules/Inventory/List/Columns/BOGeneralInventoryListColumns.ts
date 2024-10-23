import { IBOGeneralInventoryListColumns } from "./interfaces/IBOGeneralInventoryListColumns";

export const BOGeneralInventoryListColumns: IBOGeneralInventoryListColumns[] = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Producto",
    accessor: "name",
  },
  {
    Header: "Cantidad",
    accessor: "quantity",
  },
  {
    Header: "Nombre de Proveedor",
    accessor: "enterprise_name",
  },
  {
    Header: "",
    accessor: "actions",
  },
];
