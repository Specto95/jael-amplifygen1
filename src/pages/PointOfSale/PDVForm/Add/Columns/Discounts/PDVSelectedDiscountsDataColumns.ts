import { IPDVSelectedDiscountsDataColumns } from "./interfaces/IPDVSelectedDiscountsDataColumns";

export const PDVSelectedDiscountsDataColumns: IPDVSelectedDiscountsDataColumns[] =
  [
    {
      Header: "Nombre Producto",
      accessor: "name",
    },
    {
      Header: "Precio",
      accessor: "price",
    },
    {
      Header: "Cantidad",
      accessor: "quantity",
    },
    {
      Header: "Descuento / ",
      accessor: "discountPercentage",
    },
    {
      Header: "Total descontado",
      accessor: "discountPerProduct",
    },
    {
      Header: "Importe",
      accessor: "amountToPayWithDiscount",
    },
  ];
