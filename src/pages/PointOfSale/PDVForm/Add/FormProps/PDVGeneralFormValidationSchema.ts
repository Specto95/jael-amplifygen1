import { string, number, object, array } from "yup";

export const PDVOrdersManagementSchema = object().shape({
  isClientRegistered: string().required(),
  paymentType: array()
    .of(string().oneOf(["cash", "credit"]))
    .required(),
  orderManagement: object()
    .shape({
      clientName: string()
        .min(3, "El nombre del cliente debe tener al menos 3 caracteres")
        .optional(),
      selectDiscount: string().optional(),
      termToPay: number().optional(),
    })
    .required(),
});

// export const PDVGeneralFormDataSchema = object().shape({

// });
