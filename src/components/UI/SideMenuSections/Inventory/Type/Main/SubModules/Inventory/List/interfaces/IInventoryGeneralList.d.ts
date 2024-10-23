import { IIsLoading } from "@/interfaces/SideMenuSections/general";
import { IUseListGeneralInventoryViewAPI } from "../../../api/interfaces/IUseListGeneralInventoryView";

export interface IInventoryGeneralListProps extends IIsLoading{
  setInventory: (inventory: IUseListGeneralInventoryViewAPI[]) => void;
  Inventory: IUseListGeneralInventoryViewAPI[];
}
