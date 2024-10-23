import { IClientForm } from "@/interfaces/Clients/clients";
import { IInventoryGeneralFormData } from "@/pages/Inventory/FormProps/initialValues/InventoryFormData";
import { IProductForm } from "@/interfaces/Products/products";
import { IProviderGeneralFormData } from "@/pages/Providers/ProviderForm/IProviderFormData";

export interface ILayoutFormProps {
    values?:
      | IProductForm
      | IClientForm
      | IProviderGeneralFormData
      | IInventoryGeneralFormData;
    fileName?: File | null;
    children?: React.ReactNode;
  }