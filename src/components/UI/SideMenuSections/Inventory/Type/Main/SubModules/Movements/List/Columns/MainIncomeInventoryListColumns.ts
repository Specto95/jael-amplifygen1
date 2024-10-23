import { IMainIncomeInventoryListColumns } from "./interfaces/IInventoryListColumns";

export const MainIncomeInventoryListColumns: IMainIncomeInventoryListColumns[] =
  [
    {
      Header: "ID de Ingreso",
      accessor: "id",
    },
    {
      Header: "Fecha de Registro",
      accessor: "date",
    },
    {
      Header: "Tipo de Operación",
      accessor: "income",
    },
  ];
