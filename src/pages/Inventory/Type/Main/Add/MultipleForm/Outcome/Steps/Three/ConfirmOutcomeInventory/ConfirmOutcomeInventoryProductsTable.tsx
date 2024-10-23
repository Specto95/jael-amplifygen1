import { OutcomeInventoryGeneralDataProductsTableColumns } from "../../../Columns/OutcomeInventoryGeneralDataProductsTableColumns";
import { IOutcomeInventoryGeneralDataProductsTableProps } from "@/interfaces/Inventory/inventory";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";

export function ConfirmIncomeInventoryProductsTable({
  selectedOutcomeData,
}: IOutcomeInventoryGeneralDataProductsTableProps) {

  return (
    <ShowTableData 
      Data={selectedOutcomeData!}
      Columns={OutcomeInventoryGeneralDataProductsTableColumns}
      notFoundDataMessage="No hay productos registrados en esta entrada."
      hasBackground={true}
      
    />
  );
}
