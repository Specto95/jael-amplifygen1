import { ICommissionListColumns } from "./interfaces/ICommissionsListColumns";

export const CommissionsListColumns: ICommissionListColumns[] = [
  {
    Header: "Nombre Sucursal",
    accessor: "name",
  },
  {
    Header: "Estado/Ciudad",
    accessor: "location",
  },
  {
    Header: "ID Sucursal",
    accessor: "id",
  },
  {
    Header: "Comisión Sucursal",
    accessor: "branchOffice_commission",
  },
];
