import {
  IProductProviderFormData,
  IProductProviderResponsibleFormData,
  IProductProviderResponsiblesFormData,
  IProviderFormData,
  IProviderGeneralFormData,
  IServiceProviderFormData,
  IServiceProviderResponsibleFormData,
  IServiceProviderResponsiblesFormData,
} from "./ProviderForm/IProviderFormData";

export const ProviderFormData: IProviderFormData = {
  id: "",
  providerServiceproviderId: "",
  providerProductproviderId: "",
  enterprise_name: "",
  enterprise_RFC: "",
  phone: "",
  fixed_phone: "",
  type: "",
};

export const ProductProviderFormData: IProductProviderFormData = {
  id: "",
  productProviderProviderIDId: "",
};

export const ProductProviderResponsibleFormData: IProductProviderResponsibleFormData =
  {
    productproviderID: "",
    name: "",
    second_name: "",
    lastname: "",
    second_lastname: "",
    phone: "",
    RFC: "",
    // CURP: "",
    // gender: "",
  };

export const ServiceProviderResponsibleFormData: IServiceProviderResponsibleFormData =
  {
    serviceproviderID: "",
    name: "",
    second_name: "",
    lastname: "",
    second_lastname: "",
    phone: "",
    RFC: "",
    // CURP: "",
    // gender: "",
  };

export const ProductProviderResponsiblesFormData: IProductProviderResponsiblesFormData =
  {
    responsibles: [],
  };

export const ServiceProviderResponsiblesFormData: IServiceProviderResponsiblesFormData =
  {
    responsibles: [],
  };

export const ServiceProviderFormData: IServiceProviderFormData = {
  id: "",
  service_name: "",
  service_description: "",
  cost_type: "",
  serviceProviderProviderIDId: "",
};

export const ProviderGeneralFormData: IProviderGeneralFormData = {
  providerFormData: ProviderFormData,
  serviceProviderFormData: ServiceProviderFormData,
  productProviderFormData: ProductProviderFormData,
  productProviderResponsiblesFormData: ProductProviderResponsiblesFormData,
  serviceProviderResponsiblesFormData: ServiceProviderResponsiblesFormData,
  type: "",
  isSecondButton: false,
};
