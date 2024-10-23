import {
  IPDVProductGeneralDetailsColumns,
  IPDVProductGeneralDetailsNoDiscountsColumns,
} from "./interfaces/IPDVProductGeneralDetailsColumns";

export const PDVProductGeneralDetailsColumns: IPDVProductGeneralDetailsColumns[] =
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
      Header: "% Descuento",
      accessor: "discountPercentage",
    },
    {
      Header: "Descuento Por Producto",
      accessor: "discountPerProduct",
    },
    {
      Header: "Precio con Descuento",
      accessor: "productPriceWithDiscount",
    },
    {
      Header: "Total Descontado",
      accessor: "totalDiscounted",
    },
    {
      Header: "Total con Descuento",
      accessor: "amountToPayWithDiscount",
    },
  ];

export const PDVProductGeneralDetailsNoDiscountsColumns: IPDVProductGeneralDetailsNoDiscountsColumns[] =
  [
    {
      Header: "Nombre Producto",
      accessor: "name",
    },
    {
      Header: "Precio Unitario",
      accessor: "price",
    },
    {
      Header: "Cantidad",
      accessor: "quantity",
    },
    {
      Header: "Total",
      accessor: "amountToPay",
    },
  ];
