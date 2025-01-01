import { MainCashListColumns } from "./Columns/MainCashListColumns";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";
import { IMainCashListProps } from "./interfaces/IMainCashList";
import { formatDateToSpanish, isSameOrLaterMonth } from "../helpers/functions";
import LinkPrimaryBlueFit from "@/components/UI/GenericComponents/Links/LinkPrimaryBlueFit";

import { useSectionProvider } from "@/hooks/useSectionProvider";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { CashReport } from "@/pages/PrintComponents/SideMenuSections/Cash/CashReport";
import React from "react";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Este será el documento de los movimientos de caja</Text>
      </View>
    </Page>
  </Document>
);

export function MainCashList({ CashList }: IMainCashListProps) {
  const { isDownloading, setIsDownloading } = useSectionProvider();

  const groupedByDate = CashList!.reduce<Record<string, typeof CashList>>(
    (acc, cur) => {
      const dateKey = cur.date.slice(0, 7);
      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }
      acc[dateKey]!.push(cur);
      return acc;
    },
    {}
  );

  return (
    <>
      {CashList?.length! > 0 ? (
        Object.keys(groupedByDate).map((dateKey) => {
          return (
            <>
              <div key={dateKey} className="my-1">
                <div className="flex__spacing-betweenMY">
                  <h2>{formatDateToSpanish(dateKey)}</h2>
                  <div className="flex__spacing">
                    <h2>Fecha de corte: {CashList![0]?.cutOffDay}</h2>
                    <button className="button__secondaryFit">
                      Cambiar fecha de corte
                    </button>
                  </div>
                  <div className="flex__spacing">
                    {isSameOrLaterMonth(groupedByDate[dateKey]!) && (
                      <LinkPrimaryBlueFit
                        text="Agregar movimiento"
                        to="/cash/add"
                      />
                    )}
                    {/* <PDFDownloadLink
                      document={<CashReport data={groupedByDate[dateKey]!} />}
                      fileName="reportecaja.pdf"
                    >
                      {({ loading }) =>
                        loading ? (
                          <button
                            className="button__primary-bluefit"
                            type="button"
                            onClick={() => setIsDownloading(true)}
                          >
                            Cargando PDF...
                          </button>
                        ) : (
                          <button
                            className="button__primary-bluefit"
                            type="button"
                            onClick={() => setIsDownloading(true)}
                          >
                            Imprimir PDF
                          </button>
                        )
                      }
                    </PDFDownloadLink> */}
                  </div>
                </div>
                <ShowTableData
                  Columns={MainCashListColumns}
                  Data={groupedByDate[dateKey]}
                  notFoundDataMessage="No se encontraron movimientos de crédito."
                  hasBackground={true}
                  customSectionName={`accountsReceivable`}
                />
              </div>
            </>
          );
        })
      ) : (
        <h2>No se encontraron movimientos de Caja.</h2>
      )}
    </>
  );
}
