export interface IUseListSaleDetailsByIDAPIResponse {
  id: string;
  amountPaid: number;
  pendingToPay: number;
  client: {
    name: string;
    lastname: string;
    id: string;
    credit: {
      credit_available: number;
    };
  };
  date: string;
  status: string;
  salesOperationInventoryProductQuantities: {
    items: {
      productPriceWithDiscount: number;
      soldProductQuantity: number;
      name: string;
      withDiscount: boolean;
    }[];
  };
}

export interface IUseListSaleDetailsByIDAPI {
  id: string;
  amountPaid: number;
  clientName: string;
  clientID: string;
  credit_available: number | string;
  date: string;
  status: string;
  pendingToPay: number;
}

export interface IUseListSaleProductDetailsByIDAPI {
  price: number;
  quantity: number;
  name: string;
  withDiscount: string;
  totalToPay: number;
}

export interface IUseListSaleProductDetailsByIDAPIResponse {
  productPriceWithDiscount?: number;
  soldProductQuantity?: number;
  name?: string;
  withDiscount?: boolean;
  amountToPayWithDiscount?: number;
  amountToPay?: number;
}
