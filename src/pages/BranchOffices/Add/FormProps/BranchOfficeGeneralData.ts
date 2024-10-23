import {
  IBranchOfficeGeneralData,
  IAddBranchOfficeData,
  IBranchManagerData,
} from "./BranchOfficeGeneralData.d";

export const AddBranchOfficeData: IAddBranchOfficeData = {
  name: "",
  zipcode: "",
  state: "",
  location: "",
  address: "",
  phone: "",
  branchOffice_commission: 0,
};

export const BranchManagerData: IBranchManagerData = {
  name: "",
  phone: "",
  email: "",
  id: "",
};

export const BranchManagers = {
    responsibles: []
}

export const BranchOfficeGeneralData: IBranchOfficeGeneralData = {
  addBranchOffice: AddBranchOfficeData,
  branchManager: BranchManagers,
  isSecondButton: false,
};
