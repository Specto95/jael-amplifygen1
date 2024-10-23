import { IOutComeInventoryColumns } from "./interfaces/IOutcomeInventoryColumns";

export const OutcomeInventoryColumns: IOutComeInventoryColumns[] = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Producto",
    accessor: "name",
  },
  {
    Header: "Cantidad",
    accessor: "quantity",
  },
];
