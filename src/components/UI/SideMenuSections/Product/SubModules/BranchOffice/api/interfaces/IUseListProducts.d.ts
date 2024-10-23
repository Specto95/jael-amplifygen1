export interface IListProductAPI {
    id: string;
    name: string;
    description: string;
    price: number;
    class: string;
    category: string;
    subcategory: string;
    key: string;
    commission: number;
    unit: string;
    quantity: number;
    isSecondButton: boolean;
    productProvider?: {
      items: {
        id: string;
      }[];
    };
    inventoryID?: string;
  }