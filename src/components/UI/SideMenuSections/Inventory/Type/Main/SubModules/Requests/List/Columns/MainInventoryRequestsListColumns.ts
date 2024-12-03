import { IMainInventoryRequestsListColumns } from "./interfaces/MainInventoryRequestsListColumns";

export const MainInventoryRequestsListColumns: IMainInventoryRequestsListColumns[] =
  [
    {
      Header: "ID de Petición",
      accessor: "id",
    },
    {
      Header: "Fecha de Emisión",
      accessor: "date",
    },
    {
      Header: "Sucursal",
      accessor: "branchOfficeName",
    },
    {
      Header: "Estado",
      accessor: "status",
    },
  ];
