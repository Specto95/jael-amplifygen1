import { IListProductsPDVAPI } from '../../api/interfaces/IUseListProductsPDV';

type PDVImagesKeys = keyof IListProductsPDVAPI;

export const PDVImagesFilterObjs = {
    NAME: "name" as PDVImagesKeys,
};
