import { OutcomeInventoryGeneralDataColumns } from "../../../../Columns/OutcomeInventoryGeneralDataColumns";
import { IOutcomeInventoryGeneralDataBOfficesProps } from "@/interfaces/Inventory/inventory";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";

export function OutcomeInventoryGeneralDataBOfficesTable({
  branchOfficesInventoryNameID,
  setSelectedBranchOffice,
  selectedBranchOffice,
}: IOutcomeInventoryGeneralDataBOfficesProps) {
  return (
    <ShowTableData
      Data={branchOfficesInventoryNameID}
      Columns={OutcomeInventoryGeneralDataColumns}
      setSelectedBranchOffice={setSelectedBranchOffice}
      selectedBranchOffice={selectedBranchOffice}
      notFoundDataMessage="No se encontraron datos de sucursales."
      hasBackground={true}
    />
  );
}
