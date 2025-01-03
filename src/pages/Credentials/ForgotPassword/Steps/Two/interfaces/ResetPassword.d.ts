import { ISetFieldValue } from "@/interfaces/SideMenuSections/general";
import { FormikErrors, FormikTouched } from "formik";
import { ForgotPasswordFormData } from "../../../FormProps/initialValues/interfaces/ForgotPasswordFormData";
import { Dispatch, SetStateAction } from "react";
import { SubmitType } from "../../../ForgotPasswordForm";

export interface ResetPasswordProps extends ISetFieldValue {
  errors?: FormikErrors<ForgotPasswordFormData>;
  touched?: FormikTouched<ForgotPasswordFormData>;
  setSubmitType?: Dispatch<SetStateAction<SubmitType>>;
}
