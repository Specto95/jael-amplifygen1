//*INTERFACES
import { ICreditsListProps } from "./interfaces/ICreditsList";

import { ClientCreditsColumns } from "./Columns/CreditsListColumns";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";

export function CreditsRequestsList({
  ClientCredits,
  isLoading,
}: ICreditsListProps) {
  return (
    <ShowTableData
      Columns={ClientCreditsColumns}
      Data={ClientCredits}
      notFoundDataMessage="No se encontraron solicitudes de créditos"
      isLoading={isLoading}
      isNavigating={true}
      hasBackground={true}
      hasPagination={true}
      customSectionName="creditRequests/update"
    />
  );
}
