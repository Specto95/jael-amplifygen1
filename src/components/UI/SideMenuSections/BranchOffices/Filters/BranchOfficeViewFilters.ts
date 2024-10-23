import { IListBranchOfficesViewAPI } from "../api/interfaces/IUseListBranchOfficesView";

type BranchOfficeKeys = keyof IListBranchOfficesViewAPI;

export const branchOfficeViewFilterObjs = {
    NAME: "name" as BranchOfficeKeys,
};
