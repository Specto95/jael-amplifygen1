import {
  IIsLoading,
  ISetFieldValue,
} from "@/interfaces/SideMenuSections/general";
import { ListMainInventoryRequestDetailsAPI } from "../../../api/interfaces/ListMainInventoryRequestDetailsByID";
import {
  Rejected,
  UpdateMainIncomeRequestData,
} from "../../../FormProps/initialValues/interfaces/UpdateMainIncomeRequestData";
import { FormikErrors, FormikTouched } from "formik";

export interface MainInventoryRequestDetailsProps
  extends ISetFieldValue,
    IIsLoading {
  listMainInventoryRequestDetails: ListMainInventoryRequestDetailsAPI;
  values: UpdateMainIncomeRequestData;
  errors: FormikErrors<UpdateMainIncomeRequestData>;
  touched: FormikTouched<UpdateMainIncomeRequestData>;
  rejected: Rejected;
  setRejected: Dispatch<SetStateAction<Rejected>>;
}
