export interface ICreditsGeneralFormData {
  creditRequestAmount: number;
  creditRequestStatus: string;
  creditRequestReason: string;
  isCheckedClientDocuments: boolean;
  isSecondButton?: boolean;
  newClientCreditAmount?: number;
  newClientTotalCredit: number;
}

export interface ICreditRequestStatus {
  status: "APPROVED" | "REJECTED" | "PENDING" | "";
}
