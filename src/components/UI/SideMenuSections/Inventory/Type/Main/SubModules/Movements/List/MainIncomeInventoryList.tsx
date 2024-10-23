//?SRC IMPORTS

//*COMPONENTS
import { MainIncomeInventoryListColumns } from "./Columns/MainIncomeInventoryListColumns";

//*INTERFACES
import { IInventoryListProps } from "./interfaces/IMainIncomeInventoryList";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";

export function MainIncomeInventoryList({
  MainIncomeInventory,
  isLoading,
}: IInventoryListProps) {
  return (
    <ShowTableData
      Data={MainIncomeInventory}
      Columns={MainIncomeInventoryListColumns}
      isLoading={isLoading}
      notFoundDataMessage="No se encontraron Ingresos"
      customSectionName="inventory/income"
      hasBackground={true}
      hasPagination={true}
      isNavigating={true}
    />
  );
}
