import { IInventoryGeneralDataProductsTableColumns } from "./interfaces/IInventoryGeneralDataProductsColumns";

export const IncomeInventoryGeneralDataProductsTableColumns: IInventoryGeneralDataProductsTableColumns[] =
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
      Header: "ID Producto",
      accessor: "id",
    },
    {
      Header: "Cantidad",
      accessor: "quantity",
    },
  ];
