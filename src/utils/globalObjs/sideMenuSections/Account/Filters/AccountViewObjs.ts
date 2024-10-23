import { IUseListAccountsViewAPI } from "@/components/UI/SideMenuSections/Account/api/interfaces/IUseListAccountViews";

type AccountKeys = keyof IUseListAccountsViewAPI;

export const accountViewFilterObjs = {
  USERNAME: "username" as AccountKeys,
};
