import { IGlobalProductsTableEditingState } from "@/interfaces/Products/products";
import { ISetIsModalOpen } from "@/interfaces/UI/Modals/ModalsSuccess";

export interface IModalEditProductProps extends ISetIsModalOpen {
    pro: IGlobalProductsTableEditingState;
  }