import { IEditProviderResponsiblesColumns } from "@/interfaces/Providers/providers";

export const EditProviderResponsiblesColumns: IEditProviderResponsiblesColumns[] = [
  {
    Header: "NOMBRE PROVEEDOR",
    accessor: "name",
  },
  {
    Header: "CELULAR",
    accessor: "phone",
  },
  {
    Header: "RFC",
    accessor: "RFC",
  },
  {
    Header: "",
    accessor: "edit",
  }
];