import { IMainInventoryListColumns } from "./interfaces/IInventoryGeneralListColumns";

export const MainInventoryListColumns: IMainInventoryListColumns[] = [
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
    Header: "Nombre Proveedor",
    accessor: "enterprise_name",
  },
];
