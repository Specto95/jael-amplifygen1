import { IIncomeInventoryColumns } from "@/interfaces/Inventory/inventory";

export const IncomeInventoryColumns: IIncomeInventoryColumns[] = [
  {
    Header: "Producto",
    accessor: "name",
  },
  {
    Header: "ID Producto",
    accessor: "id",
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
  }
];
