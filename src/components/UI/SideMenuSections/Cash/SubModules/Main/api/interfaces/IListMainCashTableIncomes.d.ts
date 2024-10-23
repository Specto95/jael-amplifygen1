export interface IListCashTableInfoAPIResponse {
  client: {
    name: string;
    lastname: string;
  };
  branchOffice: {
    name: string;
  };
  id: string;
  total: number;
  date: string;
  status: string;
}

export interface IListCashTableInfoAPI {
  id: string;
  name: string;
  userType: string;
  branchOfficeName: string;
  movementType: string;
  total: number;
  date: string;
  cutOffDay?: number;
  status: string;
}
