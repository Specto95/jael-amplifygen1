import { IListCommissionsViewAPI } from "../api/interfaces/IUseListCommissionsView";

type CommissionsKeys = keyof IListCommissionsViewAPI;

export const CommissionsViewFilterObjs = {
    NAME: "name" as CommissionsKeys,
};
