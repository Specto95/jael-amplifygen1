import { FormikTouched, FormikErrors } from "formik";

import {
  IAccountFormData,
  IRoleDataState,
} from "@/pages/Account/FormProps/AccountFormData.d";
import {
  IHandleBackStep,
  IHandleNextStep,
  ISetFieldValue,
} from "../SideMenuSections/general";

export interface IAccountTouchedErrors {
  touched?: FormikTouched<IAccountFormData>;
  errors?: FormikErrors<IAccountFormData>;
}

export interface IAccountSetTouchedErrors {
  setTouched?: (
    touched: FormikTouched<IAccountFormData>,
    shouldValidate?: boolean | undefined
  ) => void;
  setErrors?: (errors: FormikErrors<IAccountFormData>) => void;
}

export interface INewAccountProps extends IAccountTouchedErrors, ISetFieldValue {
  setErrors?: (errors: FormikErrors<IAccountFormData>) => void;
}

export interface INewAccountDetailsProps
  extends IHandleBackStep,
    ISetFieldValue,
    IAccountTouchedErrors,
    IAccountSetTouchedErrors {
  autoPassword?: boolean;
  setRoleData?: (roleData: IRoleDataState) => void;
  userType?: string;
}

export interface INewEmailUserProps {
  email: string;
  password: string;
  name: string;
  fullName?: string;
  phone?: string;
  RFC?: string;
  gender?: string;
  role: string;
  branchOffice: string;
}
