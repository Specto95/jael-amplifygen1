export interface IListProductViewAPI {
    id: string;
    name: string;
    price: number;
    class_id: number;
    category_id: number;
    subcategory_id: number;
    productProviderId?: string;
    commission: number;
    hasCommission: boolean;
    hasDiscount: boolean;
  }