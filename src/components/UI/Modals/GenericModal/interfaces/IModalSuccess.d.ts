import { ISectionName } from "@/interfaces/main";
import { IModalProductSuccessProps } from "../../ModalSuccess/interfaces/IModalProductSuccess";

export interface IModalSuccess extends IModalProductSuccessProps {
    sectionName: ISectionName["sectionName"];
  }