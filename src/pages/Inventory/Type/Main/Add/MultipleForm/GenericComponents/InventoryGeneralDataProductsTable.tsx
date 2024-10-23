import { IncomeInventoryGeneralDataProductsTableColumns } from "./Columns/InventoryGeneralDataProductsColumns";

import { IInventoryGeneralDataProductsTableProps } from "@/interfaces/Inventory/inventory";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";

export function InventoryGeneralDataProductsTable({
  selectedData,
  setSelectedData,
  selectedPreviousOutcomeRows,
}: IInventoryGeneralDataProductsTableProps) {
  return (
    <ShowTableData
      Data={selectedData!}
      Columns={IncomeInventoryGeneralDataProductsTableColumns}
      setData={setSelectedData}
      previousData={selectedPreviousOutcomeRows}
      notFoundDataMessage="No se encontraron productos"
      hasBackground={true}
      hasQuantityCell={true}
      noHeaders={true}
      hasIDFieldPrefix={true}
    />
  );
}
