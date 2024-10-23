import { IUseListGeneralInventoryViewAPI } from "@/components/UI/SideMenuSections/Inventory/api/interfaces/IUseListGeneralInventoryView";
import { IIsLoading } from "@/interfaces/SideMenuSections/general";

export interface IBOGeneralInventoryListProps extends IIsLoading {
  setBOInventory: (inventory: IUseListGeneralInventoryViewAPI[]) => void;
  BOInventory: IUseListGeneralInventoryViewAPI[];
}
