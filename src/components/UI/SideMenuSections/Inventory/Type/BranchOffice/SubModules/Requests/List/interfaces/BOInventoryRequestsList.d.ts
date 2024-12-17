import { IIsLoading } from "@/interfaces/SideMenuSections/general";
import { ListBOInventoryRequestsAPIResponse } from "../../api/interfaces/ListMainInventoryRequests";

export interface BOInventoryRequestsListProps extends IIsLoading {
  BOInventoryRequests: ListBOInventoryRequestsAPIResponse[];
}
