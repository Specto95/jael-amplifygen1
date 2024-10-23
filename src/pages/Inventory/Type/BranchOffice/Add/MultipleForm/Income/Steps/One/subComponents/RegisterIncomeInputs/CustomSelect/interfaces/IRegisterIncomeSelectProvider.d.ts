import { ISelectedOptionsState } from "@/interfaces/Inventory/inventory";
import { IListProvidersEnterpriseNameInventoryAPI } from "../../api/interfaces/IUseListProvidersEnterpriseNameInventory";
import { ISetFieldValue } from "@/interfaces/SideMenuSections/general";
// import { IOptionType } from "@/components/UI/SectionTopOptions/interfaces/ISelectTopSectionsData";
import { ISelectedStateState } from "../../../../interfaces/IIncomeSelectProvider";

// export interface ICustomSelectedState {
//   selectedState: IOptionType | null;
//   setSelectedState: React.Dispatch<React.SetStateAction<IOptionType | null>>;
// }

export interface IRegisterIncomeSelectProviderProps
  extends ISelectedStateState,
    ISetFieldValue {
  providersEnterpriseNameInventory: IListProvidersEnterpriseNameInventoryAPI[];
}
