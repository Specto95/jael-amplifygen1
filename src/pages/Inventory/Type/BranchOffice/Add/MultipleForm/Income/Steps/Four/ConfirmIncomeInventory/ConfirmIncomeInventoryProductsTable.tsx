import { IncomeInventoryGeneralDataProductsTableColumns } from "../../../../GenericComponents/Columns/InventoryGeneralDataProductsColumns";
import { IIncomeInventoryGeneralDataProductsTableProps } from "@/interfaces/Inventory/inventory";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";

export function ConfirmIncomeInventoryProductsTable({
  selectedIncomeData,
}: IIncomeInventoryGeneralDataProductsTableProps) {
  return (
    <ShowTableData
      Data={selectedIncomeData!}
      Columns={IncomeInventoryGeneralDataProductsTableColumns}
      notFoundDataMessage="No hay productos agregados"
      hasBackground={true}
    />
  );
}
