import { FormikErrors, FormikTouched } from "formik";
import { ForgotPasswordFormData } from "../../../FormProps/initialValues/interfaces/ForgotPasswordFormData";
import { SubmitMessage, SubmitType } from "../../../ForgotPasswordForm";
import { ISetFieldValue } from "@/interfaces/SideMenuSections/general";
import { Dispatch, SetStateAction } from "react";

export interface ForgotPasswordProps extends ISetFieldValue {
  errors?: FormikErrors<ForgotPasswordFormData>;
  touched?: FormikTouched<ForgotPasswordFormData>;
  submitMessage?: SubmitMessage;
  setSubmitType?: Dispatch<SetStateAction<SubmitType>>;
}
