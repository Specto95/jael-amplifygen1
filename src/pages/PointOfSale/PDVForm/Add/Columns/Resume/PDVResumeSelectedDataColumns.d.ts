export interface IPDVResumeSelectedDataColumns {
  Header:
    | "Nombre Producto"
    | "Precio"
    | "Descuento Disponible"
    | "Cantidad";
  accessor: "name" | "price" | "hasDiscount" | "quantity";
}
