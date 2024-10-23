import { IInventoryGeneralDataProductsCommentsProps } from "@/interfaces/Inventory/inventory";
import { InventoryGeneralDataComments } from "./InventoryGeneralDataComments";
import { InventoryGeneralDataProductsTable } from "./InventoryGeneralDataProductsTable";

export function InventoryGeneralDataProductsComments({
  selectedData,
  setSelectedData,
  selectedPreviousOutcomeRows,
  comments,
  selectedMainProductsDetails,
}: IInventoryGeneralDataProductsCommentsProps) {
  return (
    <>
      <InventoryGeneralDataProductsTable
        selectedData={selectedData}
        setSelectedData={setSelectedData}
        selectedPreviousOutcomeRows={selectedPreviousOutcomeRows}
        selectedMainProductsDetails={selectedMainProductsDetails}
      />
      <InventoryGeneralDataComments comments={comments} />
    </>
  );
}
