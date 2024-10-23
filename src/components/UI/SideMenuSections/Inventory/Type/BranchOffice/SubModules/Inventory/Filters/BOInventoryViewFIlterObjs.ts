import { IUseListBranchOfficeInventoryProductsViewAPI } from '../api/interfaces/IUseListMainInventoryProductsView';

type BOInventoryKeys = keyof IUseListBranchOfficeInventoryProductsViewAPI;

export const BOInventoryViewFilterObjs = {
  NAME: "name" as BOInventoryKeys,
};
