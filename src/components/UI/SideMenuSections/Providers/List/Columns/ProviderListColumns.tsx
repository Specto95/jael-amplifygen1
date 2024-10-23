import { IProvidersListColumns } from "./interfaces/IProviderListColumns";

export const ProviderListColumns: IProvidersListColumns[] = [
  {
    Header: "Nombre del proovedor",
    accessor: "enterprise_name",
  },
  {
    Header: "ID Proovedor",
    accessor: "id",
  },
  {
    Header: "Tipo de Proovedor",
    accessor: "type",
  },
  {
    Header: "",
    accessor: "actions",
  }
];

