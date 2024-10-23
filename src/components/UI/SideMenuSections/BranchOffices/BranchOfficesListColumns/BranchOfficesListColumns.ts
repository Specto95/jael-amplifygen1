import { IBranchOfficesListColumns } from "./interfaces/IBranchOfficesListColumns";

export const BranchOfficesListColumns: IBranchOfficesListColumns[] = [
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
