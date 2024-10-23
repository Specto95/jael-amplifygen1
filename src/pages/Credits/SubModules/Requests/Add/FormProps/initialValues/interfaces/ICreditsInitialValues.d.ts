export interface ICreditsGeneralFormData {
  creditRequestAmount: number;
  creditRequestStatus: string;
  creditRequestReason: string;
  isCheckedClientDocuments: boolean;
  isSecondButton?: boolean;
}

export interface ICreditRequestStatus {
  status: "APPROVED" | "REJECTED" | "PENDING" | "";
}
