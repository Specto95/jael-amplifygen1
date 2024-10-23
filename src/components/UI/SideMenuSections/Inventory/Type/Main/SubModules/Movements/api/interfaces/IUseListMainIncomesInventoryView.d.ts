import { IOperationTypeSpanish } from "@/components/UI/GenericComponents/Table/TableData";

export interface IUseListMainIncomesInventoryViewAPI {
  id: string;
  date: string;
  operationType: IOperationTypeSpanish["operationType"];
  branchOfficeName?: string;
}

export interface IUseListMainIncomesInventoryViewAPIResponse {
  id: string;
  date: string;
  operationType: IOperationTypeSpanish["operationType"];
  branchOffice?: {
    name?: string;
  };
}
