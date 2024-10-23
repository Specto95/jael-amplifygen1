export interface IListBOfficesInventoryNameIDAPI {
    id: string;
    name: string;
    inventoryID: string;
  }

export interface IListBOfficesInventoryNameIDAPIResponse {
    id: string;
    name: string;
    inventories: {
      items : {
        id: string;
      }[]
    }
}