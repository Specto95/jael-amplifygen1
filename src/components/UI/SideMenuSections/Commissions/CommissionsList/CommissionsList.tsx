//?SRC IMPORTS

//*COMPONENTS
import { CommissionsListColumns } from "../CommissionsListColumns/CommissionsListColumns";

//*INTERFACES
import { ICommissionsListProps } from "./interfaces/ICommissionsList";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";

export function CommissionsList({
  listCommissions,
  setListCommissions,
  isLoading
}: ICommissionsListProps) {

  return (
    <ShowTableData 
      Columns={CommissionsListColumns}
      Data={listCommissions}
      notFoundDataMessage="No se encontraron comisiones"
      isLoading={isLoading}
      hasBackground={true}
      hasPagination={true}

    />
  );
}
