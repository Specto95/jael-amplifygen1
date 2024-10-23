export interface IClientAPIResponse<T> {
    data: {
      [key: string]: {
        items: T[];
      };
    };
  }