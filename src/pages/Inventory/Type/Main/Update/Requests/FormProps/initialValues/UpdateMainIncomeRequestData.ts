import { IOInventoryStatus } from "@/API";
import type { UpdateMainIncomeRequestData } from "./interfaces/UpdateMainIncomeRequestData.d";

export const updateMainIncomeRequestData: UpdateMainIncomeRequestData = {
  status: IOInventoryStatus.PROCESSING,
  isSecondButton: false,
  rejectReason: ''
};

export const updateBOIncomeRequestData: UpdateMainIncomeRequestData = {
  status: IOInventoryStatus.IN_TRANSIT,
  isSecondButton: false,
  rejectReason: ''
};
