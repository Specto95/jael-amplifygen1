import { IBOInventoryRequestsListColumns } from "./interfaces/BOInventoryRequestsListColumns";

export const BOInventoryRequestsListColumns: IBOInventoryRequestsListColumns[] =
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
      Header: "Estado",
      accessor: "status",
    },
  ];
