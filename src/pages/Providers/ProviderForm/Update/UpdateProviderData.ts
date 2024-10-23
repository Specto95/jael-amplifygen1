import {
  IListEnterpriseData,
  IProviderProductData,
  IProviderProductsData,
  IProviderResponsibleData,
  IProviderResponsiblesData,
} from "./api/interfaces/IUseGetProvider";

export const ProviderEnterpriseFormData: IListEnterpriseData = {
  enterprise_name: "",
  enterprise_RFC: "",
  phone: "",
  fixed_phone: "",
  type: "",
};

export const ProviderResponsibleFormData: IProviderResponsibleData = {
  name: "",
  phone: "",
  RFC: "",
  gender: "",
};

export const ProviderResponsiblesFormData: IProviderResponsiblesData = {
  responsibles: [],
};

export const ProviderProductFormData: IProviderProductData = {
  name: "",
  price: 0,
  class_id: 0,
  category_id: 0,
  subcategory_id: 0,
  commission: 0,
};

export const ProviderProductsFormData: IProviderProductsData = {
  products: [],
};

export const UpdateProviderGeneralFormData = {
  enterpriseData: ProviderEnterpriseFormData,
  responsibleData: ProviderResponsiblesFormData,
  productData: ProviderProductsFormData,
  isSecondButton: false,
};
