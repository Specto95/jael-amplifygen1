import { IIsLoading } from "@/interfaces/SideMenuSections/general";
import { IUseListMainIncomesInventoryViewAPI } from "../../api/interfaces/IUseListMainIncomesInventoryView";

export interface IInventoryListProps extends IIsLoading {
  // setInventory: (inventory: IUseListGeneralInventoryViewAPI[]) => void;
  MainIncomeInventory: IUseListMainIncomesInventoryViewAPI[];
}
