import { ISaleProductDetailsColumns } from "./interfaces/ISaleProductDetailsColumns";

export const SaleProductDetailsColumns: ISaleProductDetailsColumns[] = [
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
    accessor: "withDiscount",
  },
  {
    Header: "Cantidad",
    accessor: "quantity",
  },
  {
    Header: "Total a Pagar",
    accessor: "totalToPay",
  },
];
