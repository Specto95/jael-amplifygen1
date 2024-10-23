import { IUseListMainOutcomesInventoryViewAPI } from '../api/interfaces/IUseListMainOutcomesInventoryView';

type MainOutcomeInventoryKeys = keyof IUseListMainOutcomesInventoryViewAPI;

export const mainOutcomeInventoryKeysViewFilterObjs = {
    NAME: "name" as MainOutcomeInventoryKeys,
};
