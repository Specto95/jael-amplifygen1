import { IListProvidersViewAPI } from '../api/interfaces/IUseListProvidersView';

type providerViewKeys = keyof IListProvidersViewAPI;

export const providerViewFilterObjs = {
    ENTERPRISE_NAME: "enterprise_name" as providerViewKeys,
};
