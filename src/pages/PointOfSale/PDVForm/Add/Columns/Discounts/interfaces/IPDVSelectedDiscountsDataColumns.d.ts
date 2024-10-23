export interface IPDVSelectedDiscountsDataColumns {
  Header:
    | "Nombre Producto"
    | "Precio"
    | "Cantidad"
    | "Descuento / "
    | "Total descontado"
    | "Importe";
  accessor:
    | "name"
    | "price"
    | "quantity"
    | "discountPercentage"
    | "discountPerProduct"
    | "amountToPayWithDiscount";
}
