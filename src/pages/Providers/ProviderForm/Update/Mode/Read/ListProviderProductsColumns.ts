import { IProviderProductsColumns } from "@/interfaces/Providers/providers";

export const ProviderProductsColumns: IProviderProductsColumns[] = [
  {
    Header: "PRODUCTO",
    accessor: "name",
  },
  {
    Header: "PRECIO",
    accessor: "price",
  },
  {
    Header: "CLASE",
    accessor: "class_id",
  },
  {
    Header: "GRUPO",
    accessor: "category_id",
  },
  {
    Header: "SUBGRUPO",
    accessor: "subcategory_id",
  },
  {
    Header: "COMISIÓN",
    accessor: "commission",
  },
];