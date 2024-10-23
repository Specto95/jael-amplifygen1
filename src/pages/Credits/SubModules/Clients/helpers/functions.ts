import {
  CreditRequestStatus,
  CreditStatusSpanish,
} from "@/utils/globalObjs/sideMenuSections/Credits/CreditsObjs";

export function creditStatusSpanishFC(status: string) {
  return status === CreditRequestStatus.APPROVED
    ? CreditStatusSpanish.APPROVED
    : status === CreditRequestStatus.PENDING
    ? CreditStatusSpanish.PENDING
    : status === CreditRequestStatus.REJECTED
    ? CreditStatusSpanish.REJECTED
    : "";
}
