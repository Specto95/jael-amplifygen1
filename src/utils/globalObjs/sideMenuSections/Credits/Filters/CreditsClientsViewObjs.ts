import { IListCreditsRequestsViewAPI } from "@/components/UI/SideMenuSections/Credits/SubModules/Requests/api/interfaces/IUseListCreditsRequestsView";

type ClientCreditKeys = keyof IListCreditsRequestsViewAPI;

export const creditsClientsViewFilterObjs = {
    CLIENTNAME: "clientName" as ClientCreditKeys,
};
