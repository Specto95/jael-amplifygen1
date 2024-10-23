import { IListMainOutcomeInventoryProductDetailsColumns } from "./interfaces/IListMainIncomeInventoryProductDetailsColumns";
export const ListMainOutcomeInventoryProductDetailsColumns: IListMainOutcomeInventoryProductDetailsColumns[] =
  [
    {
      Header: "Nombre Producto",
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
      Header: "Grupo",
      accessor: "category_id",
    },
    {
      Header: "Subgrupo",
      accessor: "subcategory_id",
    },
    {
      Header: "Cantidad",
      accessor: "quantity",
    },
  ];