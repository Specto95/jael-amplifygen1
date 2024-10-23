import { number, object } from "yup";

//? PRODUCTS

export const validateUpdateProductPriceSchema = object().shape({
  customPrice: number().required("El precio es requerido"),
});