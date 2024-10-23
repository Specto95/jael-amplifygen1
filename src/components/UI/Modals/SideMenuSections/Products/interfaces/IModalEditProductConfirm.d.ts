import { IGlobalProductsTableEditingState } from "@/interfaces/Products/products";
import { IHandleSubmit, ISetFieldValue } from "@/interfaces/SideMenuSections/general";
import { ISetIsModalOpen } from "@/interfaces/UI/Modals/ModalsSuccess";

export interface IModalEditProductConfirmProps
  extends ISetIsModalOpen,
    ISetFieldValue,
    IHandleSubmit {
  setIsPressed: (value: boolean) => void;
  setIsConfirming: (value: boolean) => void;
  pro: IGlobalProductsTableEditingState;
  newCustomPrice: number;
}