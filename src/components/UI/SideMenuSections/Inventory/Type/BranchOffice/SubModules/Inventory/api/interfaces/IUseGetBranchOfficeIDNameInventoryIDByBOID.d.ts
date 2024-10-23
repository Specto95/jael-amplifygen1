export interface IGetBranchOfficeIDNameInventoryIDByBOIDAPI {
    id: string;
    name: string;
    inventoryID: string;
  }
  
  export interface IGetBranchOfficeIDNameInventoryIDByBOIDAPIResponse {
    id: string;
    name: string;
    inventories: {
      items: {
        id: string;
      }[];
    };
  }
  