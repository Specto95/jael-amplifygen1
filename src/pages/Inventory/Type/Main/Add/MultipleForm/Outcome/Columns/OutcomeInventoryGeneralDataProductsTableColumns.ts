import { IOutcomeInventoryGeneralDataProductsTableColumns } from "@/interfaces/Inventory/inventory";

export const OutcomeInventoryGeneralDataProductsTableColumns: IOutcomeInventoryGeneralDataProductsTableColumns[] =
  [
    {
      Header: "Producto",
      accessor: "name",
    },
    {
      Header: "Precio",
      accessor: "price",
    },
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Cantidad",
      accessor: "quantity",
    },
  ];
