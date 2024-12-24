import { IOInventoryFinishStatus, IOInventoryStatus, RoleType } from "@/API";
import { MutableRefObject } from "react";

export const getStatusValue = (status: IOInventoryStatus) => {
  return status;
};

export const isIOInventoryFinishStatusAPI = (
  status: IOInventoryFinishStatus
) => {
  return Object.values(IOInventoryFinishStatus).includes(status);
};

export const isIOInventoryFinishStatus = (
  status: IOInventoryFinishStatus,
  rolID?: string,
  defaultStatus?: MutableRefObject<IOInventoryStatus>
) => {
  return rolID
    ? (rolID === RoleType.ADMIN &&
        Object.values(IOInventoryFinishStatus).includes(status)) 
        // ||
        // defaultStatus?.current !== status ||
        // (rolID === RoleType.BRANCHMANAGER &&
        //   defaultStatus?.current === IOInventoryStatus.IN_TRANSIT)
    : false;
};

// export const isToBeFinished = (
//   rolID: string,
//   values: IOInventoryStatus,
//   defaultStatus: MutableRefObject<IOInventoryStatus>,
//   rejectReason?: string
// ) => {
//   return (
//     (rolID === RoleType.ADMIN &&
//       (values === IOInventoryStatus.IN_TRANSIT ||
//         defaultStatus === IOInventoryStatus.RETURNING ||
//         values === IOInventoryStatus.RETURNED)) ||
//     (values === IOInventoryStatus.CANCELED && !rejectReason) ||
//     (rolID === RoleType.BRANCHMANAGER &&
//       values !== IOInventoryStatus.IN_TRANSIT)
//   );
// };
