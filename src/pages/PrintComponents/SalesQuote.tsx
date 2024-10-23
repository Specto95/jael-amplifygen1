import { getCurrentDate } from "@/utils/dates";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { ISalesQuoteProps } from "./interfaces/ISalesQuote";
import { formatKey } from "@/utils/helpers";
import { commaSeparator } from "@/utils/commaSeparator";
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
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
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
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

export const SalesQuote = ({
  clientName,
  clientID,
  nonRegisteredClientID,
  salesOperationID,
  selectedData,
  totalToPay,
  isClient,
  isResume,
  operationType = "Cotización",
  PDFName,
  paymentType,
}: ISalesQuoteProps) => {
  return (
    <Document>
      <Page size="A2" style={styles.page}>
        <View style={styles.section}>
          <View style={styles.section__header}>
            <Text style={styles.companyName}>Jael Distribuciones</Text>
            <Text style={styles.PDFName}>{PDFName}</Text>
          </View>

          <View style={styles.section__clientDetails}>
            <Text>Detalles del Cliente</Text>
            <Text>{getCurrentDate()}</Text>
          </View>

          <View style={styles.flexRow}>
            <Text style={styles.section__clientNameHeader}>Nombre</Text>
            <Text style={styles.section__clientNameText}>
              {clientName || "Anonimo"}
            </Text>
          </View>

          <View style={styles.flexRow}>
            <Text style={styles.section__clientNameHeader}>ID de Cliente</Text>
            <Text style={styles.section__clientNameText}>
              {formatKey(clientID) || formatKey(nonRegisteredClientID)}
            </Text>
          </View>

          <View style={styles.flexRow}>
            <Text style={styles.section__clientNameHeader}>
              Estatus de Operación
            </Text>
            <Text style={styles.section__clientNameText}>
              {isResume
                ? paymentType.includes("credit")
                  ? "Pago a Crédito"
                  : "Pago al Contado"
                : operationType}
            </Text>
          </View>

          <View style={styles.section__salesID}>
            <Text style={styles.section__quotationID}>
              ID de cotización: <Text>{formatKey(salesOperationID)}</Text>
            </Text>
          </View>

          <View style={styles.sectionFull}>
            <View style={!isClient ? styles.W25 : styles.W35}>
              <View style={styles.flexColumnBGSecondary}>
                <Text style={styles.BGSecondaryMB10}>Nombre del Producto</Text>

                {selectedData!.map((item) => (
                  <Text style={styles.colorBlack} key={item.id}>
                    {item.name}
                  </Text>
                ))}
              </View>
            </View>
            <View style={styles.W10}>
              <View style={styles.flexColumnBGSecondary}>
                <Text style={styles.BGSecondaryMB10Center}>Cantidad</Text>
                {selectedData!.map((item) => (
                  <Text style={styles.colorBlack} key={item.id}>
                    {item.quantity}
                  </Text>
                ))}
              </View>
            </View>
            <View style={styles.W10}>
              <View style={styles.flexColumnBGSecondary}>
                <Text style={styles.BGSecondaryMB10Center}>Precio</Text>
                {selectedData!.map((item) => (
                  <Text style={styles.colorBlack} key={item.id}>
                    {`$ ${commaSeparator(
                      item.productPriceWithDiscount || item.price
                    )}`}
                  </Text>
                ))}
              </View>
            </View>
            <View style={!isClient ? styles.W10 : styles.W20}>
              <View style={styles.flexColumnBGSecondary}>
                <Text style={styles.BGSecondaryMB10}>Descuento</Text>
                {selectedData!.map((item) => (
                  <Text style={styles.colorBlack} key={item.id}>
                    {item.hasDiscount
                      ? `${item.discountPercentage}% - $${commaSeparator(
                          item.totalDiscounted!
                        )}`
                      : "N/A"}
                  </Text>
                ))}
              </View>
            </View>
            {!isClient && (
              <View style={styles.W20}>
                <View style={styles.flexColumnBGSecondary}>
                  <Text style={styles.BGSecondaryMB10}>Comisión</Text>
                  {selectedData!.map((item) => (
                    <Text style={styles.colorBlack} key={item.id}>
                      {item.hasCommission
                        ? `$${commaSeparator(item.commission!)}`
                        : "N/A"}
                    </Text>
                  ))}
                </View>
              </View>
            )}

            <View style={styles.W10}>
              <View style={styles.flexColumnBGSecondary}>
                <Text style={styles.BGSecondaryMB10}>Estatus</Text>
                {selectedData!.map((item) => (
                  <Text style={styles.colorBlack} key={item.id}>
                    {isResume
                      ? paymentType.includes("credit")
                        ? "Por Pagar"
                        : "Pagado"
                      : operationType}
                  </Text>
                ))}
              </View>
            </View>
            <View style={styles.W15}>
              <View style={styles.flexColumnBGSecondary}>
                <Text style={styles.BGSecondaryMB10}>Fecha de Cotización</Text>
                {selectedData!.map((item) => (
                  <Text style={styles.colorBlack} key={item.id}>
                    {getCurrentDate()}
                  </Text>
                ))}
              </View>
            </View>
          </View>

          <View style={styles.totalView}>
            <Text style={styles.total__description}>Total</Text>
            <Text style={styles.total__ammount}>
              $ {commaSeparator(totalToPay)}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};
