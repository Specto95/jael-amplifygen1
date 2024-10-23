export interface IUseListMainOutcomesInventoryViewAPI {
  id: string;
  date: string;
  outcome: string;
  branchOfficeName: string;
}

export interface IUseListMainOutcomesInventoryViewAPIResponse {
  id: string;
  date: string;
  outcome: string;
  branchOffice: {
    name: string;
  };
}
