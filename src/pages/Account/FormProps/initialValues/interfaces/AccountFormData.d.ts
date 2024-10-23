export interface IAccountFormData {
  name: string;
  second_name?: string;
  lastname: string;
  second_lastname?: string;
  phone: string;
  RFC?: string;
  gender?: string;
  email: string;
  autoPassword?: boolean;
  password: string;
  confirmPassword?: string;
  userType: string;
  branchOffice: string;
  sendVia: ISendVia["sendVia"];
  // sendEmail?: boolean;
  // sendSMS?: boolean;
  isSecondButton?: boolean;
}

export interface ISendVia {
  sendVia: "viaEmail" | "viaSMS";
}

export interface ICreateUserInput {
  id?: string;
  email: string;
  password: string;
  rolID: string;
  hasBranchOffice: boolean;
  userUserInfoId: string;
}

export interface ICreateUserInfoInput {
  id?: string;
  name: string;
  phone?: string;
  RFC?: string;
  gender?: string;
  userInfoUserId: string;
}

export interface IRoleDataState{
  id: string;
  name: string;
}
