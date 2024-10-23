import { IPDVSelectedData } from "@/interfaces/PDV/PDV";
import { IPDVGeneralFormData } from "../../FormProps/PDVGeneralFormData";

export interface ISalesQuoteProps extends IPDVSelectedData {
  clientName: string;
  clientID: string;
  nonRegisteredClientID: string;
  salesOperationID: string;
  // branchOfficeCommission: number;
  totalToPay: number;
  isClient?: boolean;
  isResume?: boolean;
  operationType?: string;
  PDFName?: string;
  paymentType?: IPDVGeneralFormData["paymentType"];
}
