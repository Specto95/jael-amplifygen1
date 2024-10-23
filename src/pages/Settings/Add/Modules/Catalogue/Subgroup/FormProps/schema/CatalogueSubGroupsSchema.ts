import { string, object } from "yup";

export const AddCatalogueSubGroupsSchema = object().shape({
  subcategory_name: string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .required("Subcategoria requerida *"),
  categoryID: string().required("Categoria requerida *"),
});
