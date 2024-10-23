import { IListProductsPDV } from "@/interfaces/PDV/PDV";
import { ISetIsModalOpen } from "@/interfaces/UI/Modals/ModalsSuccess";

export interface IModalProductDetailsProps extends ISetIsModalOpen {
    pro: IListProductsPDV;
    handleSelectedData: () => void;
  }