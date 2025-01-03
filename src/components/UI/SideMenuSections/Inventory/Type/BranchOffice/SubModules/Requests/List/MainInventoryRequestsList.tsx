//?SRC IMPORTS

//*COMPONENTS
import { BOInventoryRequestsListColumns } from "./Columns/BOInventoryRequestsListColumns";

//*INTERFACES
import { BOInventoryRequestsListProps } from "./interfaces/BOInventoryRequestsList";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";

export function MainInventoryRequestsList({
  BOInventoryRequests,
  isLoading,
}: BOInventoryRequestsListProps) {
  return (
    <ShowTableData
      Data={BOInventoryRequests}
      Columns={BOInventoryRequestsListColumns}
      isLoading={isLoading}
      notFoundDataMessage="No se encontraron Peticiones"
      hasBackground={true}
      hasPagination={true}
      isNavigating={true}
    />
  );
}
