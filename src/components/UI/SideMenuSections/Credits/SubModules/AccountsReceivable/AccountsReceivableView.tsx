import styles from "../../../MainView.module.css";

import { GenericFilteredItems } from "@/components/UI/GenericComponents/FilteredItems/GenericFilteredItems";

import { SectionTopOptions } from "@/components/UI/SectionTopOptions/SectionTopOptions";
import { AccountsReceivableList } from "./List/AccountsReceivableList";

//* HOOKS
import { useListCreditAccountsReceivable } from "./api/useListCreditAccountsReceivable";
import { fieldFiltersObjs } from "@/utils/globalObjs/Filters/fieldFIlters";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { AccountsReceivableReport } from "@/pages/PrintComponents/SideMenuSections/Credits/AccountsReceivable/AccountsReceivableReport";
import { PDFNamesSpanish } from "@/utils/PDF/PDFObjects";

import { useSessionProvider } from "@/hooks/useSessionProvider";
import { UserView } from "@/components/UI/RoleInfo/UserView/UserView";

export function AccountsReceivableView() {
  const { mainBranchInventory, branchInventory } = useSessionProvider();

  const { listCreditAccountsReceivable, isLoading } =
    useListCreditAccountsReceivable();
  const { filteredItems, query, setQuery } = GenericFilteredItems(
    listCreditAccountsReceivable,
    fieldFiltersObjs.CLIENTNAME as any
  );

  return (
    <>
      <UserView query={query} setQuery={setQuery} />
      <section className={styles.section__module}>
        <div className="flex__spacing-betweenMY">
          {/* <PDFDownloadLink
          document={
            <AccountsReceivableReport
              //   clientName={selectedClient?.fullName!}
              //   clientID={selectedClient?.id!}
              //   nonRegisteredClientID={nonRegisteredClientID!}
              //   salesOperationID={salesOperationID!}
              //   selectedData={selectedData!}
              //   totalToPay={totalWithDiscount! || totalToPay!}
              //   isClient={false}
              //   PDFName={PDFNamesSpanish.PointOfSale.salesQuoteName}
              //   operationType={PDFNamesSpanish.PointOfSale.operationType.quote}
              PDFName={PDFNamesSpanish.Credits.AccountReceivable.documentName}
              isBranchOfficeMain={mainBranchInventory.id ? true : false}
              branchOfficeName={
                mainBranchInventory.id
                  ? mainBranchInventory.name
                  : branchInventory.name
              }
            />
          }
          fileName={
            PDFNamesSpanish.Credits.AccountReceivable.PDFs.ADMIN.PDFName
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

        <AccountsReceivableList
          AccountsReceivable={filteredItems}
          isLoading={isLoading}
        />
      </section>
    </>
  );
}
