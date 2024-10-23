export interface IUseListAccountsViewAPI{
    id: string;
    username: string;
    userType: string;
}

export interface IUseListAccountsViewAPIResponse{
    id: string;
    name: string;
    user : {
        rolID: string;
    }
}