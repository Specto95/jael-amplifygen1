import { IListProductViewAPI } from '../api/interfaces/IUseListProductsView';

type productViewKeys = keyof IListProductViewAPI;

export const productViewFilterObjs = {
    NAME: "name" as productViewKeys,
};

