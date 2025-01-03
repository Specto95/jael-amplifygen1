//?SRC IMPORTS

//*COMPONENTS
import { MainInventoryRequestsListColumns } from "./Columns/MainInventoryRequestsListColumns";

//*INTERFACES
import { MainInventoryRequestsListProps } from "./interfaces/MainInventoryRequestsList";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";

export function MainInventoryRequestsList({
  MainInventoryRequests,
  isLoading,
}: MainInventoryRequestsListProps) {
  return (
    <ShowTableData
      Data={MainInventoryRequests}
      Columns={MainInventoryRequestsListColumns}
      isLoading={isLoading}
      notFoundDataMessage="No se encontraron Peticiones"
      // customSectionName="inventory/income"
      hasBackground={true}
      hasPagination={true}
      isNavigating={true}
    />
  );
}
