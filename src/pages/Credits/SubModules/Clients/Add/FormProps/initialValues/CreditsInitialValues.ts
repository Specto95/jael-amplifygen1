import { CreditRequestStatus } from "@/utils/globalObjs/sideMenuSections/Credits/CreditsObjs";
import { ICreditsGeneralFormData } from "./interfaces/ICreditsInitialValues";

export const CreditGeneralFormData: ICreditsGeneralFormData = {
  creditRequestAmount: 0,
  creditRequestStatus: CreditRequestStatus.PENDING,
  creditRequestReason: "",
  isCheckedClientDocuments: false,
  isSecondButton: false,
  newClientCreditAmount: 0,
  newClientTotalCredit: 0,
};
