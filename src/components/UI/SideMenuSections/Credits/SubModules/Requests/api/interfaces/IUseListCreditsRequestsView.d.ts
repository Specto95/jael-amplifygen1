export interface IListCreditsRequestsViewAPI {
  clientID: string;
  clientName: string;
  creditStatus: string;
}

export interface IListCreditsRequestsViewAPIResponse {
  creditRequests: {
    items: {
      creditRequestStatus: string;
      client: {
        id: string;
        name: string;
        lastname: string;
      };
    }[];
  };
}
