export interface IListMainOutcomeInventoryProductDetailsColumns {
  Header:
    | "Nombre Producto"
    | "ID Producto"
    | "Precio"
    | "Clase"
    | "Clave"
    | "Grupo"
    | "Subgrupo"
    | "Cantidad";
  accessor:
    | "name"
    | "id"
    | "price"
    | "class_id"
    | "productProviderID"
    | "category_id"
    | "subcategory_id"
    | "quantity";
}
