import { ISetListProductViewData } from "@/interfaces/Products/products";

export interface ISectionTopOptionsProps extends ISetListProductViewData {
  setViewType?: (viewType: string) => void;
  query?: string;
  setQuery?: (query: string) => void;
  noMB?: boolean;
  customInput?: string;
  buttonAction?: boolean;
  isForm?: boolean;
}
