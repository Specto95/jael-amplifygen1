//?SRC IMPORTS

//*COMPONENTS
import { ProviderListColumns } from "./Columns/ProviderListColumns";
//*INTERFACES
import { IProviderListProps } from "./interfaces/IProviderList";

//*UTILS
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";

export function ProviderList({
  Providers,
  setProviders,
  isLoading,
}: IProviderListProps) {
  return (
    <ShowTableData
      Data={Providers}
      setData={setProviders}
      Columns={ProviderListColumns}
      notFoundDataMessage="No se encontraron proveedores"
      isLoading={isLoading}
      withActions={true}
      hasBackground={true}
      hasPagination={true}
    />
  );
}
