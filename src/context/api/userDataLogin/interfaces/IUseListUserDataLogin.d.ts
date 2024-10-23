export interface IUseListUserDataLoginAPI {
  rolID: string;
  branchOfficeName: string;
  userInfoName: string;
  
}

export interface IUseListUserDataLoginBranchOfficeNameAPI {
  branchOffice: {
    id: string;
    name: string;
    isMain: boolean;
    inventories: {
      items: {
        id: string;
      }[];
    };
  };
}

export interface IUseListUserDataLoginBranchOfficeNameStorage {
  branchOfficeData: {
    id: string;
    name: string;
    inventoryID: string;
  };
}

export interface IUseListUserDataLoginAPIResponse {
  branchOffice: {
    items: IUseListUserDataLoginBranchOfficeNameAPI[];
  };
  rolID: string;
  userInfo: {
    name: string;
    id: string;
  };
}
