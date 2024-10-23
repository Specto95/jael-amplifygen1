import { IListProductViewAPI } from "../../../api/interfaces/IUseListProductsView";

export interface IProductListProps {
    Products?: IListProductViewAPI[];
    setProducts?: (product: IListProductViewAPI[]) => void;
}