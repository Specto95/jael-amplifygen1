import { ISetFieldValue } from "@/interfaces/SideMenuSections/general";
import { IncomeInventoryProductQuantitiesRequest } from "../../../api/interfaces/ListMainInventoryRequestDetailsByID";
import {
  Rejected,
  UpdateMainBOIncomeRequestData,
} from "../../../FormProps/initialValues/interfaces/UpdateMainIncomeRequestData";
import { FormikErrors, FormikTouched } from "formik";
import { Dispatch, SetStateAction } from "react";

export interface MainInventoryDataCommentsDetailsProps extends ISetFieldValue {
  mainInventoryData: IncomeInventoryProductQuantitiesRequest[];
  comments: string;
  values: UpdateMainBOIncomeRequestData;
  errors: FormikErrors<UpdateMainBOIncomeRequestData>;
  touched: FormikTouched<UpdateMainBOIncomeRequestData>;
  rejected: Rejected;
  setRejected: Dispatch<SetStateAction<Rejected>>;
  isSubmitting: boolean;
  rejectedReason?: string;
}
