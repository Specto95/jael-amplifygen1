import { IListClientsViewByBranchOfficeIDAPI } from "../api/ADMIN/interfaces/IUseListAllClientsView";

type ClientKeys = keyof IListClientsViewByBranchOfficeIDAPI;

export const ClientsViewFilterObjs = {
    CLIENTNAME: "clientName" as ClientKeys,
};
