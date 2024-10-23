import { IProductsListColumns } from "./interfaces/IProductListColumns";

export const ProductListColumns: IProductsListColumns[] = [
  {
    Header: "Nombre del producto",
    accessor: "name",
  },
  {
    Header: "Precio",
    accessor: "price",
  },
  {
    Header: "Clase",
    accessor: "class_id",
  },
  {
    Header: "Clave",
    accessor: "productProviderID",
  },
  {
    Header: "Marca",
    accessor: "category_id",
  },
  {
    Header: "SubGrupo",
    accessor: "subcategory_id",
  },
  {
    Header: "",
    accessor: "actions",
  },
];
