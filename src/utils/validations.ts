import { string, number, object, array, boolean } from "yup";

//? PRODUCTS

export const validateAddProduct = object().shape({
  name: string().required("Producto requerido"),
  description: string().optional(),
  price: number()
    .min(1, "El precio debe ser mayor que 1")
    .max(999999)
    .required("Precio requerido"),
  class: string()
    .matches(/^\d{1,4}$/, "Clase inválida")
    .required("Clase requerida"),
  category: string()
    .matches(/^\d{1,4}$/, "Subgrupo Invalido")
    .required("Subgrupo requerido"),
  subcategory: string()
    .matches(/^\d{1,4}$/, "Subcategoria inválida")
    .required("Subcategoria requerida"),
  key: string().required("Proveedor requerido"),
  commission: number().optional(),
  hasCommission: boolean().optional(),
  hasDiscount: boolean().optional(),
});

//? CLIENTS

export const validateAddClient = object().shape({
  name: string().min(3).required("Nombre requerido *"),
  second_name: string().min(
    3,
    "Segundo nombre debe tener al menos 3 caracteres"
  ),
  lastname: string().min(3).required("Apellido paterno requerido *"),
  second_lastname: string().min(3),
  phone: string()
    .matches(
      /^\d{3}-\d{3}-\d{4}$/,
      "El numero de telefono debe tener 10 digitos"
    )
    .required("El número de teléfono es obligatorio *"),
  fixed_phone: string().matches(
    /^\d{3}-\d{3}-\d{4}$/,
    "El numero de telefono debe tener 10 digitos"
  ),
  email: string().email("Correo electrónico inválido"),
  // .required("Correo electrónico requerido *"),
  birthday: string(),
  RFC: string().matches(/^[A-Z]{4}\d{6}[A-Z,0-9]{3}$/, "RFC inválido"),
  address: string(),
  settlement: string(),
  postal_code: string(),
  state: string(),
  city: string(),
  branchOfficeID: string(),
});

//? PROVIDERS

export const providerFormDataSchema = object().shape({
  id: string().optional(),
  providerProductproviderId: string().optional(),
  providerServiceproviderId: string().optional(),
  enterprise_name: string()
    .min(3, "El nombre de la empresa debe tener al menos 3 caracteres")
    .required("El nombre de la empresa es requerido"),
  enterprise_RFC: string()
    .optional()
    .matches(/^[A-Z]{4}\d{6}[A-Z,0-9]{3}$/, { message: "RFC inválido" }),
  phone: string()
    .matches(/^\d{3}-\d{3}-\d{4}$/, {
      message: "El numero de telefono debe tener 10 digitos",
    })
    .optional(),
  fixed_phone: string()
    .matches(/^\d{3}-\d{3}-\d{4}$/, {
      message: "El numero de telefono debe tener 10 digitos",
    })
    .optional(),
  type: string()
    .oneOf(["product", "service"], "El valor debe ser 'producto' o 'servicio'")
    .optional(),
});

export const productProviderResponsibleFormDataSchema = object().shape({
  productproviderID: string().optional(),
  name: string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .required("Nombre requerido"),
  second_name: string().optional().default(""),
  lastname: string()
    .min(3, "El apellido debe tener al menos 3 caracteres")
    .required("Apellido paterno requerido"),
  second_lastname: string().optional().default(""),
  phone: string()
    .matches(/^\d{3}-\d{3}-\d{4}$/, {
      message: "El numero de telefono debe tener 10 digitos",
    })
    .required(
      "El número de teléfono es obligatorio, si no tiene, ingrese 000-000-0000"
    ),
  RFC: string()
    .optional()
    .matches(/^[A-Z]{4}\d{6}[A-Z,0-9]{3}$/, { message: "RFC inválido" }),
  // CURP: string()
  //   .optional()
  //   .matches(/^[A-Z]{4}\d{6}[H,M][A-Z]{5}\w\d$/, { message: "CURP inválido" }),
  // gender: string().optional(),
});

export const productProviderFormDataSchema = object().shape({
  id: string().optional(),
  productProviderProviderIDId: string().optional(),
});

export const serviceProviderResponsibleFormDataSchema = object().shape({
  serviceproviderID: string().optional(),
  name: string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .required("Nombre requerido"),
  second_name: string().optional().default(""),
  lastname: string()
    .min(3, "El apellido debe tener al menos 3 caracteres")
    .required("Apellido paterno requerido"),
  second_lastname: string().optional().default(""),
  phone: string()
    .matches(/^\d{3}-\d{3}-\d{4}$/, {
      message: "El numero de telefono debe tener 10 digitos",
    })
    .optional(),
  RFC: string()
    .optional()
    .matches(/^[A-Z]{4}\d{6}[A-Z,0-9]{3}$/, { message: "RFC inválido" }),
  // CURP: string()
  //   .optional()
  //   .matches(/^[A-Z]{4}\d{6}[H,M][A-Z]{5}\w\d$/, { message: "CURP inválido" }),
  // gender: string().optional(),
});

export const serviceProviderFormDataSchema = object().shape({
  id: string().optional(),
  service_name: string().required("El nombre del servicio es requerido *"),
  service_description: string().optional(),
  cost_type: string().optional(),
  serviceProviderProviderIDId: string().optional(),
});

export const providerSchema = object().shape({
  providerFormData: providerFormDataSchema,
});

export const serviceProviderSchema = object().shape({
  serviceProviderFormData: serviceProviderFormDataSchema,
});

export const serviceProviderResponsiblesSchema = object().shape({
  responsibles: array().of(serviceProviderResponsibleFormDataSchema),
});

export const productProviderSchema = object().shape({
  productProviderFormData: productProviderFormDataSchema,
});

export const productProviderResponsiblesSchema = object().shape({
  responsibles: array().of(productProviderResponsibleFormDataSchema),
});

export const updateEnterpriseSchema = object().shape({
  enterprise_name: string()
    .min(3, "El nombre de la empresa debe tener al menos 3 caracteres")
    .required("El nombre de la empresa es requerido"),
  enterprise_RFC: string()
    .optional()
    .matches(/^[A-Z]{4}\d{6}[A-Z,0-9]{3}$/, { message: "RFC inválido" }),
  phone: string()
    .matches(/^\d{3}-\d{3}-\d{4}$/, {
      message: "El numero de telefono debe tener 10 digitos",
    })
    .optional(),
  fixed_phone: string()
    .matches(/^\d{3}-\d{3}-\d{4}$/, {
      message: "El numero de telefono debe tener 10 digitos",
    })
    .optional(),
  type: string().optional(),
});

export const updateProviderResponsiblesSchema = object().shape({
  name: string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .required("Nombre requerido"),
  phone: string()
    .matches(/^\d{3}-\d{3}-\d{4}$/, {
      message: "El numero de telefono debe tener 10 digitos",
    })
    .optional(),
  RFC: string()
    .optional()
    .matches(/^[A-Z]{4}\d{6}[A-Z,0-9]{3}$/, { message: "RFC inválido" }),
  gender: string().optional(),
});

export const updateProviderProductsSchema = object().shape({
  name: string().required("Producto requerido"),
  price: number()
    .min(1, "El precio debe ser mayor que 1")
    .max(999999)
    .required("Precio requerido"),
  class: string()
    .matches(/^\d{1,4}$/, "Clase inválida")
    .required("Clase requerida"),
  category: string()
    .matches(/^\d{1,4}$/, "Subgrupo Invalido")
    .required("Subgrupo requerido"),
  subcategory: string()
    .matches(/^\d{1,4}$/, "Subcategoria inválida")
    .required("Subcategoria requerida"),
  commission: number()
    .min(1, "La comisión debe ser mayor a 1%")
    .max(100)
    .required("Comisión requerida"),
});

export const updateProviderSchema = object().shape({
  enterpriseData: updateEnterpriseSchema,
  responsibles: array().of(updateProviderResponsiblesSchema),
  products: array().of(updateProviderProductsSchema),
});

//* CREDENTIALS

//? LOGIN

export const loginSchema = object().shape({
  email: string()
    .email("Correo electrónico inválido *")
    .required("Correo electrónico requerido *"),
  password: string().required("Contraseña requerida *"),
});

export const forgotPasswordSchema = object().shape({
  email: string()
    .email("Correo electrónico inválido *")
    .required("Correo electrónico requerido *"),
});
