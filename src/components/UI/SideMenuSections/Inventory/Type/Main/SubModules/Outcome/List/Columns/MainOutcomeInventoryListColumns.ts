import { IMainOutcomeInventoryListColumns } from "./interfaces/IMainOutcomeInventoryListColumns";

export const MainOutcomeInventoryListColumns: IMainOutcomeInventoryListColumns[] =
  [
    {
      Header: "ID de Egreso",
      accessor: "id",
    },
    {
      Header: "Fecha de Registro",
      accessor: "date",
    },
    {
      Header: "Tipo de Operación",
      accessor: "outcome",
    },
    {
      Header: "Sucursal Destino",
      accessor: "branchOfficeName",
    },
  ];
