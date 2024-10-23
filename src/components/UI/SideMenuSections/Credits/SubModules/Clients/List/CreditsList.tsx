//*INTERFACES
import { ICreditsListProps } from "./interfaces/ICreditsList";

import { ClientCreditsColumns } from "./Columns/CreditsListColumns";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";

import { useSectionProvider } from "@/hooks/useSectionProvider";
import { CreditRequestStatus } from "@/utils/globalObjs/sideMenuSections/Credits/CreditsObjs";

export function CreditsList({ ClientCredits, isLoading }: ICreditsListProps) {
  const { filteredCheckedFields } = useSectionProvider();

  return (
    <ShowTableData
      Columns={ClientCreditsColumns}
      Data={ClientCredits}
      notFoundDataMessage="No se encontraron créditos"
      isLoading={isLoading}
      hasBackground={true}
      hasPagination={true}
      isNavigating={
        filteredCheckedFields.includes(CreditRequestStatus.APPROVED)
          ? true
          : false
      }
      customSectionName="clientMovements"
    />
  );
}
