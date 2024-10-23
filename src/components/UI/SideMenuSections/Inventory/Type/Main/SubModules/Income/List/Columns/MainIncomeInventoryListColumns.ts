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
      accessor: "operationType",
    },
    {
      Header: "Sucursal",
      accessor: "branchOfficeName",
    },
  ];

export const BOIncomeInventoryListColumns: IMainIncomeInventoryListColumns[] = [
  {
    Header: "ID de Ingreso",
    accessor: "id",
  },
  {
    Header: "Fecha de Registro",
    accessor: "date",
  },
  {
    Header: "Ingreso",
    accessor: "operationType",
  },
];
