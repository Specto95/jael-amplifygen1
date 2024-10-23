import { IUseListMainInventoryProductsViewAPI } from '@/components/UI/SideMenuSections/Inventory/api/interfaces/IUseListMainInventoryProductsView';

type MainInventoryKeys = keyof IUseListMainInventoryProductsViewAPI;

export const mainInventoryKeysViewFilterObjs = {
    NAME: "name" as MainInventoryKeys,
};
