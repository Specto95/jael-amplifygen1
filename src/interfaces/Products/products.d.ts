import { IListBranchOfficeProductsAPIResponse } from "@/components/UI/SideMenuSections/Product/SubModules/Globals/api/listBranchOfficeProducts";
import { IIsLoading } from "../SideMenuSections/general";

export interface IProduct {
  id: string;
  name: string;
  description?: string;
  price: number;
  class_id: number;
  category_id: number;
  subcategory_id: number;
  provider_id: number;
  unit: string;
  commission: number;
  quantity?: number;
  isSecondButton?: boolean;
}

export interface IListProductsViewData {
  listProductsViewData?: IListProductViewData[];
}

export interface ISetListProductViewData {
  setListProductsViewData?: (product: IListProductViewData[]) => void;
}

export interface IProductImagesProps extends IListProductsViewData, IIsLoading {}

export interface IProductView {
  id?: string | number;
  name: string;
  price: number;
  class_id: number;
  category_id: number;
  subcategory_id: number;
  provider_id: number;
  unit: string;
  commission: number;
  quantity?: number;
  actions?: string | null;
}

export interface IProducts {
  Product: IProduct[];
}

export interface IProductImages {
  [key: string]: string;
}

export interface IProductForm {
  name: string;
  description: string;
  price: number;
  class: string;
  category: string;
  subcategory: string;
  key: string;
  commission?: number;
  hasCommission: boolean;
  hasDiscount: boolean;
  isSecondButton: boolean;
  quantity: number;
  productProvider?: {
    items: {
      id: string;
    }[];
  };
}

export interface IProductTable {
  id?: string;
  name: string;
  price: number;
  class_id: number;
  category_id: number;
  subcategory_id: number;
  productProviderId: string;
}

export interface IProductImageCardProps {
  pro: IListProductViewData;
  productImages?: IProductImages;
}

export interface ISetProduct {
  setProduct?: (product: IProduct[]) => void;
}

export interface IProductListProps
  extends IListProductsViewData,
    ISetListProductViewData,
    IIsLoading {}

export interface IGlobalProductsTableEditingState{
  id: string;
  productID: string;
  productName: string;
  branchOfficeID: string;
  branchOfficeName: string;
  customPrice: number;
}
