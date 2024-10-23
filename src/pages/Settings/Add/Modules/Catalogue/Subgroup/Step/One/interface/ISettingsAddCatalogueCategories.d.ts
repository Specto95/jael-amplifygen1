import { ISetFieldValue } from "@/interfaces/SideMenuSections/general";

export interface ISettingsAddCatalogueCategories extends ISetFieldValue {
  values?: IAddCatalogueCategoriesGeneralData;
  setCategoryID?: React.Dispatch<React.SetStateAction<number>>;
}
