import { IClientForm } from "@/interfaces/Clients/clients";
import { IProductForm } from "@/interfaces/Products/products";
import { IProviderGeneralFormData } from "@/pages/Providers/ProviderForm/IProviderFormData";

export interface ILayoutSideMenuOperation {
    values?: IProductForm | IClientForm | IProviderGeneralFormData;
    fileName?: File | null;
  }
  