import { object, string, number } from "yup";

export const updateProductInventoryFormDataSchema = object().shape({
  id: string().required("ID requerido"),
  quantity: number().required("Cantidad requerida"),
});

export const updateProductInventorySchema = object().shape({
  updateProductInventory: updateProductInventoryFormDataSchema,
});

export const createInventoryOperationFormDataSchema = object().shape({
  inventoryID: string().required("ID requerido"),
  operationType: string().required("Tipo de operación requerido"),
});

export const createInventoryOperationSchema = object().shape({
  createInventoryOperation: createInventoryOperationFormDataSchema,
});

export const incomeRegisterInputsFormDataSchema = object().shape({
  comments: string().optional(),
});

export const incomeRegisterInputsSchema = object().shape({
  incomeRegisterInputs: incomeRegisterInputsFormDataSchema,
});

export const outcomeRegisterInputsFormDataSchema = object().shape({
  admin_name: string().required("Nombre de administrador requerido").optional(),
  branchOffice_name: string().required("Nombre de sucursal requerido"),
  comments: string().optional(),
});

export const outcomeRegisterInputsSchema = object().shape({
  outcomeRegisterInputs: outcomeRegisterInputsFormDataSchema,
});
