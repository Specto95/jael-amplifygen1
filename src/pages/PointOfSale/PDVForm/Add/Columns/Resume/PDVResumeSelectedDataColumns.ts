import { IPDVResumeSelectedDataColumns } from "./PDVResumeSelectedDataColumns.d";

export const PDVResumeSelectedDataColumns: IPDVResumeSelectedDataColumns[] = [
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
    Header: "Cantidad",
    accessor: "quantity",
  },
];
