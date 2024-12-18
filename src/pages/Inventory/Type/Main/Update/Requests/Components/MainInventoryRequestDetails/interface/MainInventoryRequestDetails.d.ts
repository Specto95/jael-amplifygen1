import {
  IIsLoading,
  ISetFieldValue,
} from "@/interfaces/SideMenuSections/general";
import { ListMainInventoryRequestDetailsAPI } from "../../../api/interfaces/ListMainInventoryRequestDetailsByID";
import {
  Rejected,
  UpdateMainBOIncomeRequestData,
} from "../../../FormProps/initialValues/interfaces/UpdateMainIncomeRequestData";
import { FormikErrors, FormikTouched } from "formik";

export interface MainInventoryRequestDetailsProps
  extends ISetFieldValue,
    IIsLoading {
  listMainInventoryRequestDetails: ListMainInventoryRequestDetailsAPI;
  values: UpdateMainBOIncomeRequestData;
  errors: FormikErrors<UpdateMainBOIncomeRequestData>;
  touched: FormikTouched<UpdateMainBOIncomeRequestData>;
  rejected: Rejected;
  setRejected: Dispatch<SetStateAction<Rejected>>;
}
