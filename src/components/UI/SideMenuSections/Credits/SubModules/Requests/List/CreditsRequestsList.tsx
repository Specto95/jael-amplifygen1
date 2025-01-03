//*INTERFACES
import { ICreditsListProps } from "./interfaces/ICreditsList";

import {
  ClientCreditsColumns,
  ClientCreditsMainColumns,
} from "./Columns/CreditsListColumns";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";

import { useSessionProvider } from "@/hooks/useSessionProvider";

export function CreditsRequestsList({
  ClientCredits,
  isLoading,
}: ICreditsListProps) {
  const { mainBranchInventory } = useSessionProvider();

  return (
    <ShowTableData
      Columns={
        mainBranchInventory?.id
          ? ClientCreditsMainColumns
          : ClientCreditsColumns
      }
      Data={ClientCredits}
      notFoundDataMessage="No se encontraron solicitudes de créditos"
      isLoading={isLoading}
      isNavigating={true}
      hasBackground={true}
      hasPagination={true}
      customSectionName="creditRequests/update"
      redirectLink="creditRequests/add"
      redirectMessage="Solicitar un nuevo crédito"
      noDataRedirect={!ClientCredits.length}
    />
  );
}
