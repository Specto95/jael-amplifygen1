import { IListSalesViewAPIReponse } from '../api/interfaces/IUseListSalesView';

type salesViewKeys = keyof IListSalesViewAPIReponse;

export const salesViewFilterObjs = {
    CLIENT: "client" as salesViewKeys,
};
