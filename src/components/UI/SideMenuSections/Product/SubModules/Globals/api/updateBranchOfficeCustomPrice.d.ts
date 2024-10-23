export interface IUpdateBranchOfficeCustomPriceAPI {
    id: string;
    customPrice: number;
    
}

export interface IUpdateSelectedBranchOfficeCustomPrice {
    id: string;
    branchOfficeName: string;
    productName: string;
    customPrice: number;
}