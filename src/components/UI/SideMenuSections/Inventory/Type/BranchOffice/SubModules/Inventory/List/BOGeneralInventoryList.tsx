//?SRC IMPORTS

//*COMPONENTS
import { BOGeneralInventoryListColumns } from "./Columns/BOGeneralInventoryListColumns";

//*INTERFACES
import { IBOGeneralInventoryListProps } from "./interfaces/ IBOGeneralInventoryList";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";

export function BOGeneralInventoryList({
  BOInventory,
  isLoading,
}: IBOGeneralInventoryListProps) {
  return (
    <ShowTableData
      Columns={BOGeneralInventoryListColumns}
      Data={BOInventory}
      notFoundDataMessage="No se encontraron Productos"
      isLoading={isLoading}
      hasBackground={true}
      hasPagination={true}
      // isNavigating={true}
      elementDetailsURL={"/inventory"}
      customSectionName="inventory"
      withActions={true}
    />
  );
}
