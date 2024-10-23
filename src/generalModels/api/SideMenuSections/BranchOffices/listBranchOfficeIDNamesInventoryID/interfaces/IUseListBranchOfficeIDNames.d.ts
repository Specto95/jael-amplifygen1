export interface IListBOfficeIDNamesInventoryID {
  id: string;
  name: string;
  inventoryID: string;
}

export interface IListBOfficeIDNamesInventoryIDResponse {
  id: string;
  name: string;
  inventories: {
    items: {
      id: string;
    }[];
  };
}
