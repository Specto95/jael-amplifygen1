import { IIsLoading } from "@/interfaces/SideMenuSections/general";
import { IListProvidersViewAPI } from "../../api/interfaces/IUseListProvidersView";

export interface IProviderListProps extends IIsLoading {
  Providers: IListProvidersViewAPI[];
  setProviders: React.Dispatch<
    React.SetStateAction<IListProvidersViewAPI[] | any[]>
  >;
}
