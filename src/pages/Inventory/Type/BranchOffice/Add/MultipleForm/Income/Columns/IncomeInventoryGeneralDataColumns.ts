import { IIncomeInventoryGeneralDataColumns } from "@/interfaces/Inventory/inventory";

export const IncomeInventoryGeneralDataColumns: IIncomeInventoryGeneralDataColumns[] =
  [
    {
      Header: "NOMBRE ENCARGADO",
      accessor: 'responsible.fullname',
      id: 'responsible.id',
    },
  ];
