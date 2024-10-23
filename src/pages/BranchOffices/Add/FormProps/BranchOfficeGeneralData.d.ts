export interface IAddBranchOfficeData {
  name: string;
  zipcode?: string;
  state?: string;
  location?: string;
  address?: string;
  phone?: string;
  branchOffice_commission?: number;
}

export interface IBranchOfficeGeneralData {
  addBranchOffice: IAddBranchOfficeData;
  // responsibles?: IBranchManagerResponsiblesFormData;
  branchManager: IBranchManagerResponsiblesFormData;
  isSecondButton: boolean;
}

export interface IBranchManagerResponsiblesFormData {
  responsibles?: IBranchManagerData[];
}

export interface IProviderGeneralFormData {
  providerFormData: IProviderFormData;
  serviceProviderFormData: IServiceProviderFormData;
  productProviderFormData: IProductProviderFormData;
  responsibles?: IServiceProviderResponsibleFormData[];
  productProviderResponsiblesFormData: IProductProviderResponsiblesFormData;
  serviceProviderResponsiblesFormData: IServiceProviderResponsiblesFormData;
  type: "product" | "service" | "";
  isSecondButton: boolean;
}

export interface IBranchManagerData {
  name: string;
  phone?: string;
  email: string;
  // fixed_phone?: string;
  id: string;
}

export interface IListUserInfoAPIResponse {
  id: string;
  email: string;
  userInfo: {
    name: string;
    phone?: string;
  };

  phone?: string;
}

export interface IBranchOfficeInputAPI {
  id?: string;
  name: string;
  zipcode?: string;
  state?: string;
  location?: string;
  address?: string;
  phone?: string;
  isMain: boolean;
  branchOffice_commission?: number;
}

export interface ICreateBranchOfficeUserAPI {
  userId: string;
  branchOfficeId: string;
}

export interface ICreateInventoryInputAPI {
  name: string;
  branchOfficeID: string;
  isMain: boolean;
}
