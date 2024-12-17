import { MainInventoryProductsColumns } from "./interfaces/MainInventoryProductsColumns";

export const mainInventoryProductsColumns: MainInventoryProductsColumns[] = [
  {
    Header: "Producto",
    accessor: "productName",
  },
  {
    Header: "Precio",
    accessor: "price",
  },
  {
    Header: "ID Producto",
    accessor: "productID",
  },
  {
    Header: "Cantidad",
    accessor: "incomeQuantity",
  },
];
