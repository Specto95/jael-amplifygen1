export interface IPDVProductGeneralDetailsColumns {
  Header:
    | "Nombre Producto"
    | "Precio"
    | "Cantidad"
    | "% Descuento"
    | "Descuento Por Producto"
    | "Precio con Descuento"
    | "Total Descontado"
    | "Total sin Descuento"
    | "Total con Descuento";
  accessor:
    | "name"
    | "price"
    | "productPriceWithDiscount"
    | "quantity"
    | "discountPercentage"
    | "discountPerProduct"
    | "totalDiscounted"
    | "amountToPayWithDiscount"
    | "amountToPay";
}

export interface IPDVProductGeneralDetailsNoDiscountsColumns {
  Header: "Nombre Producto" | "Precio Unitario" | "Cantidad" | "Total";
  accessor: "name" | "price" | "quantity" | "amountToPay";
}
