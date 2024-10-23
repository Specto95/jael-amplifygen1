import { IIsLoading } from "@/interfaces/SideMenuSections/general";
import { IUseListMainOutcomesInventoryViewAPI } from "../../api/interfaces/IUseListMainOutcomesInventoryView";

export interface IMainOutcomesInventoryListProps extends IIsLoading {
  // setInventory: (inventory: IUseListGeneralInventoryViewAPI[]) => void;
  MainOutcomeInventory: IUseListMainOutcomesInventoryViewAPI[];
}
