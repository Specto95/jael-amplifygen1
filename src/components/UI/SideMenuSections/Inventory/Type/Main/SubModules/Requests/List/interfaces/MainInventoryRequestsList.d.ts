import { IIsLoading } from "@/interfaces/SideMenuSections/general";
import { ListMainInventoryRequestsAPIResponse } from "../../api/interfaces/ListMainInventoryRequests";

export interface MainInventoryRequestsListProps extends IIsLoading {
  MainInventoryRequests: ListMainInventoryRequestsAPIResponse[];
}
