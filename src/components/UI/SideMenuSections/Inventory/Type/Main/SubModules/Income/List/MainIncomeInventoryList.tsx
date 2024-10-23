//?SRC IMPORTS

//*COMPONENTS
import {
  MainIncomeInventoryListColumns,
  BOIncomeInventoryListColumns,
} from "./Columns/MainIncomeInventoryListColumns";

import { useSectionProvider } from "@/hooks/useSectionProvider";

//*INTERFACES
import { IInventoryListProps } from "./interfaces/IMainIncomeInventoryList";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";

export function MainIncomeInventoryList({
  MainIncomeInventory,
  isLoading,
}: IInventoryListProps) {
  const { sectionName } = useSectionProvider();

  return (
    <ShowTableData
      Data={MainIncomeInventory}
      Columns={
        sectionName === "mainInventory-Movements"
          ? MainIncomeInventoryListColumns
          : BOIncomeInventoryListColumns
      }
      isLoading={isLoading}
      notFoundDataMessage="No se encontraron Ingresos"
      customSectionName="inventory/income"
      hasBackground={true}
      hasPagination={true}
      isNavigating={true}
    />
  );
}
