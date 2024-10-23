//?SRC IMPORTS

//*COMPONENTS
import { AccountListColumns } from "../AccountListColumns/AccountListColumns";

//*INTERFACES
import { IAccountListProps } from "./interfaces/IAccountList";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";

export function AccountList({ listAccounts, isLoading }: IAccountListProps) {
  return (
    <ShowTableData
      Data={listAccounts}
      Columns={AccountListColumns}
      notFoundDataMessage="No hay cuentas registradas"
      hasPagination={true}
      hasBackground={true}
      isLoading={isLoading}
    />
  );
}
