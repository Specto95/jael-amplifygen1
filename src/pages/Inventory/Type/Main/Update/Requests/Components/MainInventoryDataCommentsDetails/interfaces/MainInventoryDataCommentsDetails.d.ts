import { ISetFieldValue } from "@/interfaces/SideMenuSections/general";
import { IncomeInventoryProductQuantitiesRequest } from "../../../api/interfaces/ListMainInventoryRequestDetailsByID";
import {
  Rejected,
  UpdateMainBOIncomeRequestData,
} from "../../../FormProps/initialValues/interfaces/UpdateMainIncomeRequestData";
import { FormikErrors, FormikTouched } from "formik";
import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { IOInventoryStatus } from "@/API";

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
  setSubmittedStatus: Dispatch<SetStateAction<IOInventoryStatus>>;
  defaultStatus: MutableRefObject<IOInventoryStatus>
}
