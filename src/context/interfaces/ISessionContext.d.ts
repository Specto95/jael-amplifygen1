export interface IUserDataContext {
  email?: string;
  role?: string;
}

export interface IUserData {
  email: string;
  // password: string;
  rolID: string;
}

export interface CustomError extends Error {
  code?: string;
}


export interface IBranchInventory {
  id: string;
  name: string;
  inventoryID: string;
}

export interface IUserInfoData{
  id: string;
  name: string;
}

export interface IInventoryID{
  id: string;
}