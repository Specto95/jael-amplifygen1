import { IUseListCreditAccountsReceivableAPI } from "@/components/UI/SideMenuSections/Credits/SubModules/AccountsReceivable/api/interfaces/IUseListCreditAccountsReceivable";

export interface IAccountsReceivableReportProps {
  PDFName: string;
  isBranchOfficeMain?: boolean;
  branchOfficeName?: string;
  clientName: string;
  clientID: string;
  clientData: IUseListCreditAccountsReceivableAPI[];
}
