import { IPDVSelectedDataColumns } from "./PDVSelectedDataColumns.d";

export const PDVSelectedDataColumns: IPDVSelectedDataColumns[] = [
  {
    Header: "Nombre Producto",
    accessor: "name",
  },
  {
    Header: "Precio",
    accessor: "price",
  },
  {
    Header: "Descuento Disponible",
    accessor: "hasDiscount",
  },
  {
    Header: "Elegir Cantidad",
    accessor: "quantity",
  }
];
