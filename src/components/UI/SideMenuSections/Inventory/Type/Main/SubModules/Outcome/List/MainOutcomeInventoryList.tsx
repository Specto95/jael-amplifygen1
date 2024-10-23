//?SRC IMPORTS

//*COMPONENTS
import { MainOutcomeInventoryListColumns } from "./Columns/MainOutcomeInventoryListColumns";

//*INTERFACES
import { IMainOutcomesInventoryListProps } from "./interfaces/IMainOutcomesInventoryList";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";

export function MainOutcomeInventoryList({
  MainOutcomeInventory,
  isLoading,
}: IMainOutcomesInventoryListProps) {
  return (
    <ShowTableData
      Data={MainOutcomeInventory}
      Columns={MainOutcomeInventoryListColumns}
      isLoading={isLoading}
      notFoundDataMessage="No se encontraron Egresos"
      customSectionName="inventory/outcome"
      hasBackground={true}
      hasPagination={true}
      isNavigating={true}
    />
  );
}
