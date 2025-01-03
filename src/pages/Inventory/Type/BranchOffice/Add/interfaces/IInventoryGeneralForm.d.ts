export interface ISelectedProviderObj {
  id: string;
  name: string;
  productProviderID?: string;
}

export interface ISelectedProviderState {
  selectedProvider?: ISelectedProviderObj;
}

export interface ISetSelectedProviderState {
  setSelectedProvider?: Dispatch<SetStateAction<List>>;
}

export interface ISelectedProviderResponsibleObj {
  id: string;
  fullname: string;
}

export interface ISelectedProviderResponsibleState {
  selectedProviderResponsible?: ISelectedProviderResponsibleObj;
  setSelectedProviderResponsible?: Dispatch<
    SetStateAction<ISelectedProviderResponsibleObj>
  >;
}

export interface ISelectedBranchOfficeObj {
  id: string;
  name: string;
  inventoryID: string;
}

export interface ISelectedBranchOfficeState {
  selectedBranchOffice?: ISelectedBranchOfficeObj;
  setSelectedBranchOffice?: Dispatch<SetStateAction<ISelectedBranchOfficeObj>>;
}

export interface ISetSelectedProviderResponsibleState {
  setSelectedProviderResponsible?: Dispatch<
    SetStateAction<ISelectedProviderResponsibleObj>
  >;
}

export interface ISelectedOutcomeBranchOfficeProductsIDObj {
  inventoryProductID: string;
  productID: string;
  quantity: number;
}

export interface ISelectedOutcomeBranchOfficeProductsIDState {
  selectedOutcomeBranchOfficeProductsID?: ISelectedOutcomeBranchOfficeProductsIDObj[];
  setSelectedOutcomeBranchOfficeProductsID?: Dispatch<
    SetStateAction<ISelectedOutcomeBranchOfficeProductsIDObj[]>
  >;
}

export interface ISelectedOutcomeBranchOfficeProductsIDResponse {
  id: string;
  product: {
    id: string;
  };
}
