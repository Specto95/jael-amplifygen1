import { formatSpanishDate } from "@/utils/dates";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { convertStringToNumber, formatKey } from "@/utils/helpers";
import { IAccountsReceivableReportProps } from "./interfaces/AccountsReceivableReport";
import { totalSale } from "./helpers/functions";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    color: "#0D8DFB", //TEXT-PRIMARYSTRONG
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  colorBlack: {
    paddingLeft: 10,
    color: "#000",
    width: "100%",
    border: "2px solid #0D8DFB",
  },

  flexEndPMB10: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 10,
    marginBottom: 10,
  },

  flexColumnBGSecondary: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid #0D8DFB",
    color: "#0D8DFB", //TEXT-PRIMARYSTRONG
    width: "100%",
  },
  BGSecondaryMB10: {
    paddingLeft: 10,
    width: "100%",
    backgroundColor: "#eef7ff", //BG-PRIMARY
    border: "2px solid #0D8DFB",
  },
  BGSecondaryMB10Center: {
    paddingLeft: 10,
    width: "100%",
    border: "2px solid #0D8DFB",
    backgroundColor: "#eef7ff", //BG-PRIMARY
  },
  noBGBorder: {
    backgroundColor: "#fff",
    border: "1px solid #0D8DFB",
  },

  section: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  sectionFull: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  flexRowBetween: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
    marginRight: 185,
  },
  bold: {
    fontWeight: "bold",
  },
  section__salesID: {
    padding: 10,
    color: "#0D8DFB", //TEXT-PRIMARYSTRONG
  },
  section__quotationID: {
    fontSize: 20,
    marginTop: 30,
  },
  section__header: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0D8DFB", //TEXT-PRIMARYSTRONG
    color: "#eef7ff", //BG-PRIMARY
    fontWeight: "bold",
  },
  section__clientDetails: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#0D8DFB", //TEXT-PRIMARYSTRONG
    fontWeight: "bold",
    borderBottom: "3px solid #0D8DFB",
  },
  section__clientNameHeader: {
    padding: 10,
    width: "25%",
    color: "#0D8DFB", //TEXT-PRIMARYSTRONG
    fontWeight: "bold",
    border: "2px solid #0D8DFB",
  },
  section__clientNameText: {
    padding: 10,
    width: "75%",
    color: "#0D8DFB", //TEXT-PRIMARYSTRONG
    fontWeight: "bold",
    border: "2px solid #0D8DFB",
  },
  section__total: {
    marginTop: 10,
    width: "100%",
  },
  total__description: {
    width: "150px",
    backgroundColor: "#0D8DFB", //BG-PRIMARY
    color: "#eef7ff", //TEXT-PRIMARYSTRONG
    padding: 5,
  },
  userID: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#0D8DFB", //BG-PRIMARY
    color: "#eef7ff", //TEXT-PRIMARYSTRONG
    gap: 10,
  },
  total__ammount: {
    width: "200px",
    backgroundColor: "#eef7ff", //BG-PRIMARY
    color: "#0D8DFB", //TEXT-PRIMARYSTRONG
    fontWeight: "bold",
    padding: 5,
  },

  productNameHeader: {
    padding: 5,
    width: "25%",
    color: "#0D8DFB", //TEXT-PRIMARYSTRONG
    backgroundColor: "#eef7ff", //BG-PRIMARY
    fontWeight: "bold",
    borderBottom: "2px solid #0D8DFB",
  },
  header10PC: {
    padding: 10,
    width: "10%",
    color: "#0D8DFB", //TEXT-PRIMARYSTRONG
    backgroundColor: "#eef7ff", //BG-PRIMARY
    fontWeight: "bold",
    borderBottom: "2px solid #0D8DFB",
  },
  quotationDateHeader: {
    padding: 10,
    width: "15%",
    color: "#0D8DFB", //TEXT-PRIMARYSTRONG
    backgroundColor: "#eef7ff", //BG-PRIMARY
    fontWeight: "bold",
    borderBottom: "2px solid #0D8DFB",
  },

  W10: {
    width: "10%",
  },
  W15: {
    width: "15%",
  },
  W20: {
    width: "20%",
  },
  W25: {
    width: "25%",
  },
  W35: {
    width: "35%",
  },
  W50: {
    width: "50%",
  },
  companyName: {
    marginLeft: 30,
    fontWeight: "black",
    fontSize: 20,
  },
  PDFName: {
    fontWeight: "black",
    fontSize: 20,
  },
  border: {
    border: "1px solid #0D8DFB",
  },
});

export const AccountsReceivableReport = ({
  //   clientName,
  //   clientID,
  //   nonRegisteredClientID,
  //   salesOperationID,
  //   selectedData,
  //   totalToPay,
  //   isClient,
  //   isResume,
  //   operationType = "Cotización",
  //   PDFName,
  //   paymentType,
  PDFName,
  isBranchOfficeMain,
  branchOfficeName,
  clientName,
  clientID,
  clientData,
}: IAccountsReceivableReportProps) => {

  return (
    <Document>
      <Page size="A2" style={styles.page}>
        <View style={styles.section}>
          <View style={styles.section__header}>
            <Text style={styles.companyName}>Jael Distribuciones</Text>
            <Text style={styles.PDFName}>{PDFName}</Text>
          </View>
          <View style={styles.flexEndPMB10}>
            <Text>
              {isBranchOfficeMain ? "Sucursal Matriz" : branchOfficeName}
            </Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.section__clientNameHeader}>Nombre</Text>
            <Text style={styles.section__clientNameText}>{clientName}</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.section__clientNameHeader}>ID de Cliente</Text>
            <Text style={styles.section__clientNameText}>
              {formatKey(clientID)}
            </Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.section__clientNameHeader}>
              Fecha de Reporte
            </Text>
            <Text style={styles.section__clientNameText}>
              {formatSpanishDate()}
            </Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.section__clientNameHeader}>Sucursal</Text>
            <Text style={styles.section__clientNameText}>
              {isBranchOfficeMain ? "Sucursal Matriz" : branchOfficeName}
            </Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.section__clientNameHeader}>Total de Venta</Text>
            <Text style={styles.section__clientNameText}>
              {totalSale(clientData!)}
            </Text>
          </View>
          <View style={styles.userID}>
            <Text>ID de Usuario: {formatKey(clientID)}</Text>
          </View>

          <View style={styles.sectionFull}>
            <View style={styles.W15}>
              <View style={styles.flexColumnBGSecondary}>
                <Text style={styles.BGSecondaryMB10}>Plazo Pagos</Text>

                {clientData!.map((item) => (
                  <Text style={styles.colorBlack} key={item.id}>
                    {item.termDaysToPay}
                  </Text>
                ))}
              </View>
            </View>
            <View style={styles.W10}>
              <View style={styles.flexColumnBGSecondary}>
                <Text style={styles.BGSecondaryMB10}>Estado</Text>
                {clientData!.map((item) => (
                  <Text style={styles.colorBlack} key={item.id}>
                    {item.status}
                  </Text>
                ))}
              </View>
            </View>
            <View style={styles.W15}>
              <View style={styles.flexColumnBGSecondary}>
                <Text style={styles.BGSecondaryMB10}>Vencimiento</Text>
                {clientData!.map((item) => (
                  <Text style={styles.colorBlack} key={item.id}>
                    {item.paymentDate}
                  </Text>
                ))}
              </View>
            </View>
            <View style={styles.W15}>
              <View style={styles.flexColumnBGSecondary}>
                <Text style={styles.BGSecondaryMB10}>Fecha de Pago</Text>
                {clientData!.map((item) => (
                  <Text style={styles.colorBlack} key={item.id}>
                    {item.datePaid}
                  </Text>
                ))}
              </View>
            </View>
            <View style={styles.W15}>
              <View style={styles.flexColumnBGSecondary}>
                <Text style={styles.BGSecondaryMB10}>Fecha de Compra</Text>
                {clientData!.map((item) => (
                  <Text style={styles.colorBlack} key={item.id}>
                    {item.saleSince}
                  </Text>
                ))}
              </View>
            </View>

            <View style={styles.W10}>
              <View style={styles.flexColumnBGSecondary}>
                <Text style={styles.BGSecondaryMB10}>ID venta</Text>
                {clientData!.map((item) => (
                  <Text style={styles.colorBlack} key={item.id}>
                    {formatKey(item.id)}
                  </Text>
                ))}
              </View>
            </View>
            <View style={styles.W15}>
              <View style={styles.flexColumnBGSecondary}>
                <Text style={styles.BGSecondaryMB10}>Total de Venta</Text>
                {clientData!.map((item) => (
                  <Text style={styles.colorBlack} key={item.id}>
                    {convertStringToNumber(item.total.toString())}
                  </Text>
                ))}
              </View>
            </View>

            <View style={styles.W15}>
              <View style={styles.flexColumnBGSecondary}>
                <Text style={styles.BGSecondaryMB10}>Total a Pagar</Text>
                {clientData!.map((item) => (
                  <Text style={styles.colorBlack} key={item.id}>
                    {item.pendingToPay}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
