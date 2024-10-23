export interface ISaleProductDetailsColumns {
  Header:
    | "Nombre Producto"
    | "Precio"
    | "Descuento Disponible"
    | "Cantidad"
    | "Total a Pagar";
  accessor: "name" | "price" | "withDiscount" | "quantity" | "totalToPay";
}
