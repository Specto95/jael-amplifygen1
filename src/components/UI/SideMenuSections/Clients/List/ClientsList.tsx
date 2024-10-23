//?SRC IMPORTS

//*HOOKS
import { useSessionProvider } from "../../../../../hooks/useSessionProvider";

//*COMPONENTS
import { ClientsADMINListColumns } from "./Columns/ADMIN/ClientsADMINListColumns";
import { ClientsBMListColumns } from "./Columns/BranchManager/ClientsBMListColumns";

//* INTERFACES
import { IClientsListProps } from "./interfaces/IClientList";

import { AccountFormObj } from "@/pages/Account/utils/AccountFormObj";

//* COMPONENTS
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";

export function ClientsList({ Clients }: IClientsListProps) {
  const { rolID } = useSessionProvider();

  return (
    <ShowTableData
      Columns={
        rolID === AccountFormObj.BRANCHMANAGER
          ? ClientsBMListColumns
          : ClientsADMINListColumns
      }
      Data={Clients}
      notFoundDataMessage="
        No se encontraron Clientes
      "
      hasBackground={true}
      hasPagination={true}
    />
  );
}
