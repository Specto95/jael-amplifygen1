import { string, object } from "yup";

export const updateIncomeRequestDataSchema = object().shape({
  rejectReason: string()
    .min(3, "El motivo de rechazo debe tener al menos 3 caracteres")
    .required("Ingresa el motivo de rechazo"),
});
