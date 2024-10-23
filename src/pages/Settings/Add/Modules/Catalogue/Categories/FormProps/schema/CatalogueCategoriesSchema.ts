import { string, object } from "yup";

export const AddCatalogueCategoriesSchema = object().shape({
  name: string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .required("Nombre requerido *"),
  // enterprise_name: string()
  // .required("Proovedor requerido *"),
});

