import { string, number, object, array, boolean } from "yup";

export const outcomePaymentSchema = object().shape({
  name: string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .required("Nombre requerido"),
  description: string().optional(),
  costType: string().optional(),
  quantity: number()
    .min(1, "La cantidad debe ser mayor a 0")
    .required("La cantidad es requerida"),
});
