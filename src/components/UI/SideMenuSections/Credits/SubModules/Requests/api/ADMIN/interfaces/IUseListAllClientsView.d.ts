export interface IListClientsViewByBranchOfficeIDAPI {
    clientName: string;
    clientID: string;
    clientSince: string;
    lastSale: string;
    branchOfficeName: string;
  }
  
  export interface IListClientsViewByBranchOfficeIDAPIResponse {
    branchOffice: {
      name: string;
    };
    createdAt: string;
    id: string;
    name: string;
    sale: {
      items: {
        id: string;
      }[];
    };
  }
  