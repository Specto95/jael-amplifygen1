import { useMemo } from "react";
import { Column } from "react-table";

import styles from "../../PDVGeneralForm.module.css";
import { IPDVOrdersManagementResumeProps } from "@/interfaces/PDV/PDV";
import { IListProductsPDVAPI } from "../First/api/interfaces/IUseListProductsPDV";

import { commaSeparatorFloat } from "@/utils/commaSeparator";
import { formatSpanishDate } from "@/utils/dates";
import { PDVSelectedDataResume } from "./PDVSelectedDataResume";
import { PDVResumeSelectedDataColumns } from "../../Columns/Resume/PDVResumeSelectedDataColumns";
import {
  handleTotalCommission,
  handleTotalDiscount,
} from "../../helpers/functions";

//* APIs
import { useGetClientCreditByID } from "../Second/api/useGetClientCreditByID";
import { useGetBranchOfficeCommission } from "../Second/api/useGetBranchOfficeCommission";
import { formatKey } from "@/utils/helpers";
import { FixedResumeSale } from "../../GenericComponents/FixedResumeSale/FixedResumeSale";
import { globalFormsValues } from "@/pages/fixedTemporalFields";
import { PDVSelectedDiscountsDataColumns } from "../../Columns/Discounts/PDVSelectedDiscountsDataColumns";
import { IPDVSelectedDiscountsDataColumns } from "../../Columns/Discounts/interfaces/IPDVSelectedDiscountsDataColumns";
import { PDVSelectedDataDiscountsResume } from "./PDVSelectedDataDiscountsResume";
import { SalesOperationTermDaysToPay } from "@/utils/globalObjs/sideMenuSections/PointOfSale/PointOfSaleObjs";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { SalesQuote as ProofOfPayment } from "@/pages/PrintComponents/SalesQuote";
import { PDFNamesSpanish } from "@/utils/PDF/PDFObjects";

export function PDVOrdersManagementResume({
  selectedData,
  salesID,
  selectedClient,
  isClientRegistered,
  clientName,
  selectedDiscount,
  totalWithDiscount,
  totalToPay,
  totalToPayMinusCredit,
  selectedMonthsToPay,
  values,
  currentStepIndex,
  previousCreditAvailable,
  setCreditAvailable,
  handleTotalPayableInCash,
  handleTotalPayableInMonths,
  totalCommission,
  termDaysToPay,
  nonRegisteredClientID,
  salesOperationID,
  paymentType,
}: IPDVOrdersManagementResumeProps) {
  const columns: Column<IListProductsPDVAPI>[] = useMemo(
    () => PDVResumeSelectedDataColumns,
    []
  );

  const columnsDiscount: IPDVSelectedDiscountsDataColumns[] = useMemo(
    () => PDVSelectedDiscountsDataColumns,
    []
  );

  const handleFilterAvailableDiscounts = (
    data: readonly IListProductsPDVAPI[]
  ) => {
    return data.filter((item) => item.hasDiscount);
  };

  const { getClientCreditByID } = useGetClientCreditByID(selectedClient!.id);
  const { getBranchOfficeCommission } = useGetBranchOfficeCommission(
    globalFormsValues.branchOfficeID
  );

  return (
    <>
      <section className={styles.PDVOrdersManagement__Container}>
        <div className="flex__spacingJustifyEnd-MY">
          <PDFDownloadLink
            document={
              <ProofOfPayment
                clientName={clientName! || selectedClient?.fullName!}
                clientID={selectedClient?.id!}
                nonRegisteredClientID={nonRegisteredClientID!}
                salesOperationID={salesOperationID!}
                selectedData={selectedData!}
                totalToPay={totalWithDiscount! || totalToPay!}
                isClient={true}
                operationType={
                  paymentType?.includes("credit")
                    ? PDFNamesSpanish.PointOfSale.operationType.creditPayment
                    : PDFNamesSpanish.PointOfSale.operationType.cashPayment
                }
                PDFName={PDFNamesSpanish.PointOfSale.proofOfPaymentName}
                isResume={true}
                paymentType={paymentType!}
              />
            }
            fileName={PDFNamesSpanish.PointOfSale.proofOfPayment}
          >
            {/* {({ loading }) =>
              loading ? (
                <button
                  className="button__secondaryFit"
                  type="button"
                  // onClick={() => setIsDownloading(true)}
                >
                  Cargando Ticket...
                </button>
              ) : (
                <button
                  className="button__secondaryFit"
                  type="button"
                  // onClick={() => setIsDownloading(true)}
                >
                  Descargar Ticket
                </button>
              )
            } */}
          </PDFDownloadLink>
          {/* <button className="button__secondaryFit">Guardar Ticket</button> */}
        </div>
        <h2 className="heading__main">ID de Venta: {formatKey(salesID!)}</h2>
        <div className={styles.divisor}></div>

        <h3 className="heading__primary">Cliente</h3>
        <div className="flex__spacing2-MY">
          <p>Nombre cliente</p>
          <p className={styles.PDVResume__DataFields}>
            {isClientRegistered === "yes"
              ? selectedClient?.fullName.length! > 0 && `${clientName}`
              : isClientRegistered === "no" &&
                values?.orderManagement.clientName.length! > 0
              ? values?.orderManagement.clientName + " (No Registrado)"
              : "Anonimo"}
          </p>
        </div>
        <div className="flex__spacing2-MY">
          <p>Fecha de Venta</p>
          <p className={styles.PDVResume__DataFields}> {formatSpanishDate()}</p>
        </div>
        <div className={styles.divisor}></div>

        <h3 className="heading__primary">Carrito</h3>
        <PDVSelectedDataResume selectedData={selectedData!} columns={columns} />
        <div className={styles.divisor}></div>

        {handleFilterAvailableDiscounts(selectedData!).length > 0 &&
        selectedDiscount! > 0 ? (
          <>
            <h3 className="heading__primary">Descuentos Aplicados</h3>
            <div className="flex__spacing2 my-1">
              <label htmlFor="selectDiscount">Descuento</label>
              <p className={styles.PDVResume__DataFields}>
                {selectedDiscount ? "APLICADO" : "No Aplica"}
              </p>
            </div>
            <PDVSelectedDataDiscountsResume
              selectedData={handleFilterAvailableDiscounts(selectedData!)}
              columns={columnsDiscount}
            />
            <div className="flex__spacing2 my-1 ml-3">
              <p>Total Descuento</p>
              <p className={styles.PDVResume__DataFields}>
                ${commaSeparatorFloat(selectedDiscount!)}
              </p>
            </div>
          </>
        ) : (
          <h1 className="heading__main">
            No hay descuentos{" "}
            {selectedDiscount! > 0 ? "aplicados" : "disponibles"}
          </h1>
        )}

        <div className={styles.divisor}></div>
        <h3 className="heading__main">Tipo de Pago</h3>
        <div className="flex__spacing">
          <div className="flex__spacing-MR">
            <p>
              {values?.paymentType?.includes("credit") ? "Mixto" : "Contado"}
            </p>
          </div>
        </div>
        <h3 className="heading__main">Resúmen de Pago</h3>
        <div className="flex__spacing2-MY">
          <p>Total de contado</p>
          <p className={styles.PDVResume__DataFields}>
            {values?.paymentType.includes("credit")
              ? "$" + commaSeparatorFloat(totalToPayMinusCredit!)
              : "$" + commaSeparatorFloat(totalWithDiscount! || totalToPay!)}
          </p>
          <p>Total de comisión</p>
          <p className={styles.PDVResume__DataFields}>
            ${commaSeparatorFloat(totalCommission!)}
          </p>
        </div>
        {values?.paymentType?.includes("credit") ? (
          <div className="flex__spacing-MY">
            <p>Total a crédito</p>
            <p className={styles.PDVResume__DataFields}>
              {selectedClient!.hasCredit
                ? getClientCreditByID.credit_available >
                  (totalWithDiscount || totalToPay!)
                  ? `$${commaSeparatorFloat(totalWithDiscount! || totalToPay!)}`
                  : `$${commaSeparatorFloat(
                      getClientCreditByID.credit_available
                    )}`
                : "Credito No Disponible"}
            </p>
            <p>Plazo a pagar</p>
            <p className={styles.PDVResume__DataFields}>
              {selectedMonthsToPay} Meses
            </p>

            <p>Días a pagar</p>
            <p className={styles.PDVResume__DataFields}>
              {termDaysToPay === SalesOperationTermDaysToPay.BIWEEKLY
                ? "15 Dias"
                : "1 Mes"}
            </p>
          </div>
        ) : (
          <></>
        )}
        <div className={styles.fixed__divisor}></div>
      </section>
      <FixedResumeSale
        selectedClient={selectedClient}
        selectedData={selectedData}
        selectedMonthsToPay={selectedMonthsToPay}
        totalWithDiscount={totalWithDiscount}
        totalToPay={totalToPay}
        termDaysToPay={termDaysToPay}
        values={values}
        currentStepIndex={currentStepIndex}
        previousCreditAvailable={previousCreditAvailable}
        setCreditAvailable={setCreditAvailable}
        totalToPayMinusCredit={totalToPayMinusCredit}
        handleTotalPayableInCash={handleTotalPayableInCash}
        handleTotalPayableInMonths={handleTotalPayableInMonths}
      />
    </>
  );
}
