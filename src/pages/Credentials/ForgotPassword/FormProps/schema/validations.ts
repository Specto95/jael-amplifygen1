import { object, ref, string } from "yup";

export const forgotPasswordSchema = object().shape({
  email: string()
    .email("Correo electrónico inválido *")
    .required("Correo electrónico requerido *"),
});

export const resetPasswordSchema = object().shape({
  confirmationCode: string()
    .length(6, "El código de confirmación debe tener exactamente 6 dígitos.")
    .matches(/^\d+$/, "El código de confirmación solo debe contener números.")
    .required("Código de confirmación requerido *"),
  newPassword: string()
    .min(8, "La contraseña debe tener al menos 8 caracteres.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "La contraseña debe incluir al menos una mayúscula, una minúscula, un número y un carácter especial."
    )
    .max(128, "La contraseña no puede exceder los 128 caracteres.")
    .matches(/^\S*$/, "La contraseña no debe contener espacios.")
    .required("Contraseña requerida *"),
  confirmPassword: string()
    .oneOf([ref("newPassword"), undefined], "Las contraseñas deben coincidir.")
    .required("Confirmación de contraseña requerida *"),
});
