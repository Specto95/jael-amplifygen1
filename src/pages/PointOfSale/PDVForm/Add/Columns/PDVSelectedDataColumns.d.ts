export interface IPDVSelectedDataColumns {
  Header:
    | "Nombre Producto"
    | "Precio"
    | "Descuento Disponible"
    | "Elegir Cantidad";
  accessor: "name" | "price" | "hasDiscount" | "quantity";
}
