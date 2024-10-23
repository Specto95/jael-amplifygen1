import { IListBranchOfficeProductsAPIResponse } from '../api/listBranchOfficeProducts';

type GlobalProductsView = keyof IListBranchOfficeProductsAPIResponse;

export const globalProductsViewFilterObjs = {
    NAME: "name" as GlobalProductsView,
};
