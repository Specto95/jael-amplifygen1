export interface IListProductsPDVAPI {
  inventoryProductID: string;
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  hasCommission?: boolean;
  commission?: number;
  hasDiscount?: boolean;
  withDiscount ?: boolean;
  discountPercentage ?: number;
  discountPerProduct ?: number;
  totalDiscounted ?: number;
  productPriceWithDiscount ?: number;
  amountToPayWithDiscount ?: number;
  amountToPay ?: number;
}

export interface IListProductsPDVAPIResponse {
  id: string;
  quantity: number;
  customPrice: number;
  product: {
    id: string;
    name: string;
    description: string;
    hasCommission?: boolean;
    hasDiscount?: boolean;
    discount: number;
    total: number;
    subTotal: number;
  };
}
