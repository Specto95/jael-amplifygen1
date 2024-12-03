import { IOInventoryStatusSpanish } from "@/API";

export interface ListMainInventoryRequestsAPIResponse {
  id: string;
  date: string;
  branchOfficeName: string;
  status: IOInventoryStatusSpanish;
}
