import { IInventoryGeneralDataProductsCommentsProps } from "@/interfaces/Inventory/inventory";
import { InventoryGeneralDataComments } from "./InventoryGeneralDataComments";
import { InventoryGeneralDataProductsTable } from "./InventoryGeneralDataProductsTable";

export function InventoryGeneralDataProductsComments({
  selectedData,
  setSelectedData,
  selectedPreviousOutcomeRows,
  comments,
}: IInventoryGeneralDataProductsCommentsProps) {
  return (
    <>
      <InventoryGeneralDataProductsTable
        selectedData={selectedData}
        setSelectedData={setSelectedData}
        selectedPreviousOutcomeRows={selectedPreviousOutcomeRows}
      />
      <InventoryGeneralDataComments comments={comments} />
    </>
  );
}
