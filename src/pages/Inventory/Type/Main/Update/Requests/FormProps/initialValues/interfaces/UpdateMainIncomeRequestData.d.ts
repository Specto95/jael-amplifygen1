import {
  IOBOInventoryRequestStatus,
  IOInventoryStatus,
  IOMainInventoryRequestStatus,
} from "@/API";

export interface UpdateMainIncomeRequestData {
  status: IOMainInventoryRequestStatus;
  isSecondButton: boolean;
  rejectReason: string;
}

export interface UpdateBOIncomeRequestData {
  status: IOBOInventoryRequestStatus;
  isSecondButton: boolean;
  rejectReason: string;
}

//? USESTATES
export interface Rejected {
  isRejected: boolean;
  reason: string;
}
