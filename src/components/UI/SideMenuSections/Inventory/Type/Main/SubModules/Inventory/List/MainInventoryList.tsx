//?SRC IMPORTS

//*COMPONENTS
import { MainInventoryListColumns } from "./Columns/InventoryGeneralListColumns";

//*INTERFACES
import { IInventoryGeneralListProps } from "./interfaces/IInventoryGeneralList";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";

export function MainInventoryList({
  Inventory,
  isLoading,
}: IInventoryGeneralListProps) {
  return (
    <ShowTableData
      Data={Inventory}
      Columns={MainInventoryListColumns}
      isLoading={isLoading}
      notFoundDataMessage="No se encontraron operaciones de inventario"
      customSectionName="inventory"
      hasBackground={true}
      hasPagination={true}
      isNavigating={true}
    />
  );
}
