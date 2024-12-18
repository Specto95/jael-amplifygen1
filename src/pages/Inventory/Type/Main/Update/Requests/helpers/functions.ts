import { IOInventoryFinishStatus, IOInventoryStatus } from "@/API";

export const getStatusValue = (status: IOInventoryStatus) => {
  return status;
};

export const isIOInventoryFinishStatus = (status: IOInventoryFinishStatus) => {
  return Object.values(IOInventoryFinishStatus).includes(status);
};
