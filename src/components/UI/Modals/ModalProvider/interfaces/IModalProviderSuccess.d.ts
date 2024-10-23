import { ISetFieldValue } from "@/interfaces/SideMenuSections/general";

export interface IModalProviderSuccessProps extends ISetFieldValue {
    setIsModalOpen: (value: boolean) => void;
    title: string;
    enterprise_name?: string;
  }