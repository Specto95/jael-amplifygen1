import { IIsLoading } from "@/interfaces/SideMenuSections/general";
import { IListClientsCreditsViewAPI } from "../../api/interfaces/IUseListCreditsRequestsView";

export interface ICreditsListProps extends IIsLoading {
  ClientCredits: IListClientsCreditsViewAPI[];
}
