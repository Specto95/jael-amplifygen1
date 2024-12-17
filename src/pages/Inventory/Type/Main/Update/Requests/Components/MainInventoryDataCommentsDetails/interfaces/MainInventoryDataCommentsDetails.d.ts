import { ISetFieldValue } from "@/interfaces/SideMenuSections/general";
import { IncomeInventoryProductQuantitiesRequest } from "../../../api/interfaces/ListMainInventoryRequestDetailsByID";
import {
  Rejected,
  UpdateMainIncomeRequestData,
} from "../../../FormProps/initialValues/interfaces/UpdateMainIncomeRequestData";
import { FormikErrors, FormikTouched } from "formik";
import { Dispatch, SetStateAction } from "react";

export interface MainInventoryDataCommentsDetailsProps extends ISetFieldValue {
  mainInventoryData: IncomeInventoryProductQuantitiesRequest[];
  comments: string;
  values: UpdateMainIncomeRequestData;
  errors: FormikErrors<UpdateMainIncomeRequestData>;
  touched: FormikTouched<UpdateMainIncomeRequestData>;
  rejected: Rejected;
  setRejected: Dispatch<SetStateAction<Rejected>>;
}
