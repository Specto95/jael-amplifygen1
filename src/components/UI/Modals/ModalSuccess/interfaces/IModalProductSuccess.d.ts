import { ISetIsModalOpen } from "@/interfaces/UI/Modals/ModalsSuccess";
import { ISectionName } from "@/interfaces/main";

export interface IModalProductSuccessProps extends ISetIsModalOpen {
    title: string;
    backTo? : ISectionName['sectionName']
  }