export interface IProductsListColumns {
    Header: string;
    accessor:
      | "name"
      | "price"
      | "class_id"
      | "productProviderID"
      | "category_id"
      | "subcategory_id"
      | "actions";
  }