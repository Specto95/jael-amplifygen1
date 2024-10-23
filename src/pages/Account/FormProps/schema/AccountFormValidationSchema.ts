import { string, boolean, object, ref } from "yup";

export const NewAccountSchema = object().shape({
  name: string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .required("Nombre requerido"),
  second_name: string().optional(),
  lastname: string()
    .min(2, "El apellido debe tener al menos 2 caracteres")
    .required("Apellido requerido"),
  second_lastname: string().optional(),
  phone: string()
    .matches(
      /^\d{3}-\d{3}-\d{4}$/,
      "El numero de telefono debe tener 10 digitos"
    )
    .optional(),
  RFC: string().matches(/^[A-Z]{4}\d{6}[A-Z,0-9]{3}$/, "RFC inválido"),
  gender: string().optional(),
});

export const NewAccountDetailsSchema = object().shape({
  email: string()
    .email("Correo electrónico inválido")
    .required("Correo electrónico requerido *"),
  autoPassword: boolean(),
  // password: string().optional(),
  // confirmPassword: string()
  //   .optional()
  //   .oneOf([ref("password")], "Las contraseñas no coinciden"),
  password: string().when("autoPassword", {
    is: false,
    then: (schema) =>
      schema
        .matches(
          /[A-Z]/,
          "La contraseña debe contener al menos una letra mayúscula"
        )
        .matches(
          /[a-z]/,
          "La contraseña debe contener al menos una letra minúscula"
        )
        .matches(/[0-9]/, "La contraseña debe contener al menos un número")
        .matches(
          /[$@#%^&*()!]/,
          "La contraseña debe contener al menos un carácter especial"
        )
        .min(8, "La contraseña debe tener al menos 8 caracteres")
        .required("Contraseña requerida"),
  }),
  confirmPassword: string().when("autoPassword", {
    is: false,
    then: (schema) =>
      schema
        .required("Confirmar contraseña requerida")
        .oneOf([ref("password")], "Las contraseñas no coinciden"),
  }),
  userType: string().required("Tipo de usuario requerido *"),
  branchOffice: string().when("userType", {
    is: "ENCARGADO",
    then: (schema) => schema.required("Sucursal requerida *"),
  }),
  sendVia: string()
    .oneOf(["viaEmail", "viaSMS"], "Debe seleccionar al menos una opción")
    .required("Enviar por requerido *"),
});
