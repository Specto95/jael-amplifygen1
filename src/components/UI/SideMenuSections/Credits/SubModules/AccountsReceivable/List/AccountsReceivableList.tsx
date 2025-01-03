//*INTERFACES
import { IAccountsReceivableListProps } from "./interfaces/IAccountsReceivableList";

import { AccountsReceivableColumns } from "./Columns/AccountsReceivableListColumns";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";
import { InventoryListTableSpinner } from "@/components/UI/Spinners/Providers/InventoryListTableSpinner";
import { IUseListCreditAccountsReceivableAPI } from "../api/interfaces/IUseListCreditAccountsReceivable";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { AccountsReceivableReport } from "@/pages/PrintComponents/SideMenuSections/Credits/AccountsReceivable/AccountsReceivableReport";

import { useSessionProvider } from "@/hooks/useSessionProvider";
import { PDFNamesSpanish } from "@/utils/PDF/PDFObjects";
import BoldField from "@/components/UI/GenericComponents/Fields/Bold";

export function AccountsReceivableList({
  AccountsReceivable,
  isLoading,
}: IAccountsReceivableListProps) {
  const { mainBranchInventory, branchInventory } = useSessionProvider();

  const groupedData = AccountsReceivable.reduce<
    Record<string, IUseListCreditAccountsReceivableAPI[]>
  >((acc, cur) => {
    const clientName = cur.clientName;
    if (!acc[clientName]) {
      acc[clientName] = [];
    }
    acc[clientName].push(cur);
    return acc;
  }, {});

  return (
    <>
      {isLoading ? (
        <InventoryListTableSpinner hasBackground={true} />
      ) : Object.keys(groupedData).length > 0 ? (
        Object.keys(groupedData).map((clientName) => {
          return (
            <div key={clientName} className="my-1">
              <div className="flex__endMY">
                {/* <PDFDownloadLink
                    document={
                      <AccountsReceivableReport
                        PDFName={
                          PDFNamesSpanish.Credits.AccountReceivable.documentName
                        }
                        isBranchOfficeMain={
                          mainBranchInventory.id ? true : false
                        }
                        branchOfficeName={
                          mainBranchInventory.id
                            ? mainBranchInventory.name
                            : branchInventory.name
                        }
                        clientName={groupedData[clientName][0].clientName}
                        clientID={groupedData[clientName][0].id}
                        clientData={groupedData[clientName]}
                      />
                    }
                    fileName={
                      PDFNamesSpanish.Credits.AccountReceivable.PDFs.ADMIN
                        .PDFName
                    }
                  >
                    {({ loading }) =>
                      loading ? (
                        <button className="button__secondaryFit" type="button">
                          Cargando PDF...
                        </button>
                      ) : (
                        <button className="button__secondaryFit" type="button">
                          Descargar PDF
                        </button>
                      )
                    }
                  </PDFDownloadLink> */}
              </div>
              <ShowTableData
                Columns={AccountsReceivableColumns}
                Data={groupedData[clientName]}
                notFoundDataMessage="No se encontraron movimientos de crédito."
                hasBackground={true}
                customSectionName={`accountsReceivable`}
                isPrintable={true}
              />
            </div>
          );
        })
      ) : (
        <BoldField text="No hay resultados" />
      )}
    </>
  );
}
