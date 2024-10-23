import { string, number, object } from "yup";

export const AddBranchOfficeSchema = object().shape({
  name: string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .required("Nombre requerido *"),
  zipcode: string().optional(),
  state: string().optional(),
  location: string().optional(),
  address: string().optional(),
  phone: string()
    .matches(
      /^\d{3}-\d{3}-\d{4}$/,
      "El numero de telefono debe tener 10 digitos"
    )
    .optional(),
  // branchOffice_commission: string()
  //   .min(1, "La comision debe ser mayor o igual a 1 *")
  //   .optional(),
});

export const addBranchOfficeDataSchema = object().shape({
  addBranchOffice: AddBranchOfficeSchema,
});
