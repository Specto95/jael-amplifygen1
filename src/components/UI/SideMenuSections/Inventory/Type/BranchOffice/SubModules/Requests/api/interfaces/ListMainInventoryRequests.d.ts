import { IOInventoryStatusSpanish } from "@/API";

export interface ListBOInventoryRequestsAPIResponse {
  id: string;
  date: string;
  status: IOInventoryStatusSpanish;
}
