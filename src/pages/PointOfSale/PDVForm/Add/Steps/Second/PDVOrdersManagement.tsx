import { useCallback, useEffect, useMemo, useState } from "react";
import { Column } from "react-table";
import { Field } from "formik";

import styles from "../../PDVGeneralForm.module.css";
import styles2 from "../First/PDVActionsView.module.css";

//*DEBOUNCER
import debounce from "just-debounce-it";

import {
  IPDVOrdersManagementClientSelected,
  IPDVOrdersManagementProps,
} from "@/interfaces/PDV/PDV";
import { IListProductsPDVAPI } from "../First/api/interfaces/IUseListProductsPDV";

import { PDVSelectedData } from "../First/PDVCards/PDVSelectedData";
import { PDVSelectedDataColumns } from "../../Columns/PDVSelectedDataColumns";
import { commaSeparatorFloat } from "@/utils/commaSeparator";
import {
  handleTotalCommission,
  handleTotalToPay,
  handleTotalToPayGeneral,
} from "../../helpers/functions";

//*APIs
import { useListClientsFullNameByBranchOfficeID } from "./api/useListClientsFullNameByBranchOfficeID";
import { useGetClientCreditByID } from "./api/useGetClientCreditByID";
import { useGetBranchOfficeCommission } from "./api/useGetBranchOfficeCommission";

//*HOOKS
import { useSessionProvider } from "@/hooks/useSessionProvider";
import { useSectionProvider } from "@/hooks/useSectionProvider";

//* PAGES
import {
  PDVGeneralFormData,
  initialOrderManagement,
} from "../../FormProps/PDVGeneralFormData";
import { FixedResumeSale } from "../../GenericComponents/FixedResumeSale/FixedResumeSale";
import { IGetClientCreditByID } from "./api/interfaces/IUseGetClientCreditByID";
import { PDVSelectedDiscounts } from "../First/PDVCards/PDVSelectedDiscounts";
import { PDVSelectedDiscountsDataColumns } from "../../Columns/Discounts/PDVSelectedDiscountsDataColumns";
import { IPDVSelectedDiscountsDataColumns } from "../../Columns/Discounts/interfaces/IPDVSelectedDiscountsDataColumns";
import { AccountFormObj } from "@/pages/Account/utils/AccountFormObj";
import {
  PDVProductGeneralDetailsColumns,
  PDVProductGeneralDetailsNoDiscountsColumns,
} from "../../Columns/ProductGeneralDetails/PDVProductGeneralDetailsColumns";

//*PDF
import { SalesQuote } from "@/pages/PrintComponents/SalesQuote";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { PDFNamesSpanish } from "@/utils/PDF/PDFObjects";
import { validateCreditAvailable } from "./helpers/functions";

export function PDVOrdersManagement({
  handleBackStep,
  setFieldValue,
  selectedData,
  setSelectedData,
  values,
  selectedClient,
  setSelectedClient,
  selectedDiscount,
  setSelectedDiscount,
  totalWithDiscount,
  setTotalWithDiscount,
  selectedMonthsToPay,
  setSelectedMonthsToPay,
  termDaysToPay,
  setTermDaysToPay,
  setValues,
  totalToPay,
  totalToPayMinusCredit,
  setTotalToPay,
  pendingToPay,
  setPendingToPay,
  setCreditAvailable,
  updateCreditClientState,
  setUpdateCreditClientState,
  setPreviousData,
  previousData,
  handleTotalPayableInCash,
  handleTotalPayableInMonths,
  currentStepIndex,
  setTotalCommission,
  totalCommission,
  setTotalByDaysToPay,
  handleTotalByDaysToPay,
  handleTotalPayments,
  nonRegisteredClientID,
  salesOperationID,
}: IPDVOrdersManagementProps) {

  console.log(values)

  const { isDownloading, setIsDownloading } = useSectionProvider();
  const { branchInventory, rolID, mainBranchInventory } = useSessionProvider();


  const columns: Column<IListProductsPDVAPI>[] = useMemo(
    () => PDVSelectedDataColumns,
    []
  );

  const columnsDiscount: IPDVSelectedDiscountsDataColumns[] = useMemo(
    () => PDVSelectedDiscountsDataColumns,
    []
  );

  const columnsProductGeneralDetails: Column<IListProductsPDVAPI>[] = useMemo(
    () =>
      selectedData?.every((item) => item.hasDiscount)
        ? PDVProductGeneralDetailsColumns
        : PDVProductGeneralDetailsNoDiscountsColumns,
    [selectedData]
  );

  const [clientCredit, setClientCredit] = useState<IGetClientCreditByID>({
    id: "",
    clientID: "",
    credit_available: 0,
    outstanding_balance: 0,
  });
  const [isTyping, setIsTyping] = useState(false);
  const [toSelectPaymentType, setToSelectPaymentType] = useState(false);

  const { listClientsFullName } = useListClientsFullNameByBranchOfficeID(
    rolID === AccountFormObj.ADMIN ? mainBranchInventory.id : branchInventory.id
  );
  const { getClientCreditByID, isLoading } = useGetClientCreditByID(
    selectedClient!.id
  );
  const { getBranchOfficeCommission } = useGetBranchOfficeCommission(
    rolID === AccountFormObj.ADMIN ? mainBranchInventory.id : branchInventory.id
  );

  console.log(listClientsFullName)

  const debouncedInputClientName = useCallback(
    debounce(() => {
      setIsTyping(false);
    }, 800),
    []
  );

  const handleFilterAvailableDiscounts = (
    data: readonly IListProductsPDVAPI[]
  ) => {
    return data.filter((item) => item.hasDiscount);
  };

  useEffect(() => {
    // setTotalWithDiscount!(handleTotalToPay(selectedData) - selectedDiscount!);
    // setTotalWithDiscount!(handleTotalToPay(selectedData) - selectedDiscount!);
    setTotalWithDiscount!(+handleTotalToPayGeneral(selectedData).toFixed(2));
    setTotalToPay!(handleTotalToPay!(selectedData));
    setSelectedDiscount!(
      +selectedData!
        .map((item) => item.discountPerProduct! * item.quantity)
        .reduce((a, b) => a! + b!, 0)
        .toFixed(2)
    );
  }, [selectedDiscount, selectedData]);

  useEffect(() => {
    if (
      selectedData?.length! > 0 &&
      getBranchOfficeCommission.branchOffice_commission > 0
    ) {
      setTotalCommission!(
        handleTotalCommission(
          selectedData,
          getBranchOfficeCommission.branchOffice_commission
        )
      );
    }
  }, [selectedData, getBranchOfficeCommission.branchOffice_commission]);

  useEffect(() => {
    if (values?.isClientRegistered === "no") {
      const updatedFormData = {
        ...PDVGeneralFormData,
        orderManagement: initialOrderManagement,
      };
      setValues!(updatedFormData);
      setSelectedClient!({
        id: "",
        fullName: "",
        hasCredit: false,
      });
      setUpdateCreditClientState!({
        id: "",
        credit_available: 0,
        outstanding_balance: 0,
      });
      setSelectedMonthsToPay!(0);
      setCreditAvailable!(0);
      setToSelectPaymentType(false);
    }
    if (
      values?.isClientRegistered === "yes" &&
      values.orderManagement.clientName.length > 0
    ) {
      setFieldValue!("orderManagement.clientName", "");
    }
    if (selectedClient?.hasCredit && values?.isClientRegistered === "yes") {
      setFieldValue!("orderManagement.clientName", selectedClient.fullName);
    }
  }, [values?.isClientRegistered]);

  useEffect(() => {
    console.log("aqui");
    const fetchData = async () => {
      if (selectedClient?.hasCredit) {
        console.log("si");
        setClientCredit(getClientCreditByID);
      }
    };
    fetchData();
  }, [selectedClient?.hasCredit]);

  useEffect(() => {
    const fetchData = async () => {
      if (
        validateCreditAvailable(
          getClientCreditByID.credit_available,
          totalToPay!,
          totalWithDiscount!
        )
      ) {
        setToSelectPaymentType(true);
      } else {
        setToSelectPaymentType(false);
      }

      if (getClientCreditByID?.credit_available) {
        setUpdateCreditClientState!({
          id: getClientCreditByID.id,
          credit_available: getClientCreditByID.credit_available,
          outstanding_balance: getClientCreditByID.outstanding_balance,
        });
      }
    };
    fetchData();
  }, [getClientCreditByID]);

  useEffect(() => {
    if (!values?.paymentType.includes("credit")) {
      setSelectedMonthsToPay!(0);
      setCreditAvailable!(0);
      setFieldValue!("orderManagement.termToPay", 0);
    }
  }, [values?.paymentType]);

  useEffect(() => {
    handleTotalPayableInCash!(values!, getClientCreditByID);
    if (
      getClientCreditByID.credit_available > (totalWithDiscount || totalToPay!)
    ) {
      setPendingToPay!(totalWithDiscount || totalToPay!);
      return;
    }
    if (
      getClientCreditByID.credit_available < (totalWithDiscount || totalToPay!)
    ) {
      setPendingToPay!(getClientCreditByID.credit_available);
      return;
    }
  }, [totalToPay, totalWithDiscount, selectedDiscount, values?.paymentType]);

  useEffect(() => {
    handleTotalByDaysToPay!();
    handleTotalPayments!();
  }, [selectedMonthsToPay, termDaysToPay]);

  return (
    <>
      <main className={styles.PDVOrdersManagement__Container}>
        <section className="relative">
          <div className="flex__spacingJustifyEnd-MY">
            <PDFDownloadLink
              document={
                <SalesQuote
                  clientName={selectedClient?.fullName!}
                  clientID={selectedClient?.id!}
                  nonRegisteredClientID={nonRegisteredClientID!}
                  salesOperationID={salesOperationID!}
                  selectedData={selectedData!}
                  totalToPay={totalWithDiscount! || totalToPay!}
                  isClient={false}
                  PDFName={PDFNamesSpanish.PointOfSale.salesQuoteName}
                  operationType={
                    PDFNamesSpanish.PointOfSale.operationType.quote
                  }
                />
              }
              fileName={PDFNamesSpanish.PointOfSale.salesQuote}
            >
              {/* {({ loading }) =>
                loading ? (
                  <button
                    className="button__secondaryFit"
                    type="button"
                    onClick={() => setIsDownloading(true)}
                  >
                    Cargando Cotización...
                  </button>
                ) : (
                  <button
                    className="button__secondaryFit"
                    type="button"
                    onClick={() => setIsDownloading(true)}
                  >
                    Imprimir Cotización
                  </button>
                )
              } */}
            </PDFDownloadLink>

            <PDFDownloadLink
              document={
                <SalesQuote
                  clientName={selectedClient?.fullName!}
                  clientID={selectedClient?.id!}
                  nonRegisteredClientID={nonRegisteredClientID!}
                  salesOperationID={salesOperationID!}
                  selectedData={selectedData!}
                  // branchOfficeCommission={
                  //   getBranchOfficeCommission.branchOffice_commission
                  // }
                  totalToPay={totalWithDiscount! || totalToPay!}
                  PDFName={PDFNamesSpanish.PointOfSale.salesQuoteName}
                  operationType={
                    PDFNamesSpanish.PointOfSale.operationType.quote
                  }
                  isClient={true}
                />
              }
              fileName={PDFNamesSpanish.PointOfSale.salesQuote}
            >
              {/* {({ loading }) =>
                loading ? (
                  <button
                    className="button__secondaryFit"
                    type="button"
                    onClick={() => setIsDownloading(true)}
                  >
                    Cargando Cotización...
                  </button>
                ) : (
                  <button
                    className="button__secondaryFit"
                    type="button"
                    onClick={() => setIsDownloading(true)}
                  >
                    Imprimir Cotización (Cliente)
                  </button>
                )
              } */}
            </PDFDownloadLink>
          </div>
          <h2 className="heading__main">Seleccionar Cliente</h2>

          <div className={styles.flex__columnSpacing}>
            <div className={styles.flex__spacing}>
              <Field
                name="isClientRegistered"
                type="radio"
                value="no"
                id="ventaDeMostrador"
              />
              <label htmlFor="ventaDeMostrador">Venta de Mostrador</label>
            </div>
            <div className={styles.flex__spacing}>
              <Field
                name="isClientRegistered"
                type="radio"
                value="yes"
                id="clienteRegistrado"
                disabled={selectedData?.length === 0}
                className={selectedData?.length === 0 ? "disabled" : ""}
              />
              <label
                htmlFor="clienteRegistrado"
                className={selectedData?.length === 0 ? "disabled" : ""}
              >
                Cliente Registrado
              </label>
            </div>
          </div>

          <div className="flexColumn__spacing">
            <label htmlFor="clientName" className="heading__tertiary">
              {values!.isClientRegistered === "no"
                ? "Nombre de Cliente:"
                : "Cliente Registrado"}
            </label>
            {values!.isClientRegistered === "no" ? (
              <Field
                className={styles.PDVOrdersManagement__SubContainersBG}
                name="orderManagement.clientName"
                type="text"
                id="clientName"
                placeholder="Nombre de Cliente:"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const { value } = e.target;
                  setFieldValue!("orderManagement.clientName", value);
                  setIsTyping(true);
                  debouncedInputClientName();
                }}
              />
            ) : (
              <>
                <Field
                  as="select"
                  name="orderManagement.clientName"
                  id="clientName"
                  className={styles.PDVOrdersManagement__SubContainersBG}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    const { value } = e.target;
                    const selectedClientObj = listClientsFullName.find(
                      (client) => client.fullName === value
                    );

                    setSelectedClient!(
                      (prevState: IPDVOrdersManagementClientSelected) => ({
                        ...prevState,
                        id: selectedClientObj ? selectedClientObj.id : "",
                        fullName: value,
                        hasCredit: selectedClientObj
                          ? selectedClientObj.hasCredit
                          : false,
                      })
                    );

                    setFieldValue!("orderManagement.clientName", value);
                  }}
                >
                  <option value="" disabled>
                    Seleccione un Cliente de la Lista:
                  </option>
                  {listClientsFullName.map((client) => {
                    return (
                      <option key={client.fullName} value={client.fullName}>
                        {client.fullName}
                      </option>
                    );
                  })}
                </Field>
                <div className="flex__spacing">
                  {Object.values(selectedClient!).every((value) => !value) ? (
                    <></>
                  ) : (
                    <>
                      <p>Credito Disponible</p>
                      <p className={styles["PDVOrdersManagement__inputBRSM"]}>
                        {isLoading
                          ? "..."
                          : selectedClient!.hasCredit &&
                            getClientCreditByID?.credit_available > 0
                          ? `$${commaSeparatorFloat(
                              getClientCreditByID.credit_available
                            )}`
                          : "Credito No Disponible"}
                      </p>
                    </>
                  )}
                  {selectedClient!.hasCredit &&
                    getClientCreditByID &&
                    (isLoading ? (
                      <></>
                    ) : (
                      <div className="flex__spacing">
                        <p>Saldo Actual</p>
                        <p className={styles["PDVOrdersManagement__inputBRSM"]}>
                          {`$${commaSeparatorFloat(
                            getClientCreditByID.outstanding_balance
                          )}`}
                        </p>
                      </div>
                    ))}
                </div>
              </>
            )}
          </div>

          <div className={styles.divisor}></div>

          <h3 className="heading__primary">Carrito</h3>
          <PDVSelectedData
            selectedData={selectedData}
            columns={columns}
            setSelectedData={setSelectedData}
            setPreviousData={setPreviousData}
            previousData={previousData}
            currentStepIndex={currentStepIndex}
          />
          <div className={styles.divisor}></div>

          <h3 className="heading__primary">Total de venta</h3>
          <div className="flex__spacing2">
            <p className="button__primary-blueCR">Total a pagar</p>
            <p className="button__secondaryCR-NoBr">
              ${commaSeparatorFloat(handleTotalToPay(selectedData))}
            </p>
          </div>
          <div className={styles.divisor}></div>
          <h3 className="heading__primary">Descuentos disponibles</h3>

          <PDVSelectedDiscounts
            selectedData={handleFilterAvailableDiscounts(selectedData!)}
            columns={columnsDiscount}
            setSelectedData={setSelectedData}
            setPreviousData={setPreviousData}
            previousData={previousData}
            currentStepIndex={currentStepIndex}
          />
          <div className="flex__spacing2-MY">
            <p className="button__primary-blueCR">Total descuento</p>
            <p className="button__secondaryCR-NoBr">
              ${commaSeparatorFloat(selectedDiscount!)}
            </p>
          </div>
          <div className={styles.divisor}></div>
          <h3 className="heading__primary">
            {toSelectPaymentType
              ? "Seleccione el tipo de pago"
              : "Tipo de Pago"}
          </h3>
          <div className="flex__spacing">
            <Field
              as="select"
              name="paymentType"
              id="cash"
              className={styles.PDVOrdersManagement__SubContainersBG}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                const { value } = e.target;

                setFieldValue!("paymentType", [value]);
              }}
            >
              {toSelectPaymentType ? (
                <>
                  <option value="">Selecciona el tipo de pago:</option>
                  <option value="cash">De contado</option>
                  <option value="credit">Crédito</option>
                </>
              ) : (
                <option value="cash">De contado</option>
              )}
            </Field>

            {/* <div className="flex__spacing-MR">
              <Field
                name="paymentType"
                type="checkbox"
                value="cash"
                id="cash"
                checked
                disabled
              />
              <label htmlFor="cash">De contado</label>
            </div>
            <div className="flex__spacing">
              <Field
                name="paymentType"
                type="checkbox"
                value="credit"
                id="credit"
                className={
                  !selectedClient!.hasCredit ||
                  !values?.paymentType.includes("cash")
                    ? "disabled"
                    : ""
                }
              />
              <label
                htmlFor="credit"
                className={
                  !selectedClient!.hasCredit ||
                  !values?.paymentType.includes("cash")
                    ? "disabled"
                    : ""
                }
              >
                {!selectedClient!.hasCredit
                  ? "Credito no disponible"
                  : !values?.paymentType.includes("cash")
                  ? "Credito insuficiente"
                  : "Crédito"}
              </label>
            </div> */}
          </div>
          {values?.paymentType?.includes("cash") && (
            <div className="flex__spacing-MY">
              <p>Total de contado</p>
              <p className="button__secondaryCR">
                {values?.paymentType.includes("credit")
                  ? "$" + commaSeparatorFloat(totalToPayMinusCredit!)
                  : "$" +
                    commaSeparatorFloat(totalWithDiscount! || totalToPay!)}
              </p>
              <p>Total de comisión</p>
              <p className="button__secondaryCR">
                ${commaSeparatorFloat(totalCommission!)}
              </p>
            </div>
          )}

          {values?.paymentType?.includes("credit") ? (
            <div className="flex__spacing-MY">
              <p>Total a crédito</p>
              <p className="button__secondaryCR">
                {selectedClient!.hasCredit
                  ? `$${commaSeparatorFloat(pendingToPay!)}`
                  : "Credito No Disponible"}
              </p>
              <p>Plazo a pagar</p>
              <Field
                as="select"
                name="orderManagement.termToPay"
                id="termToPay"
                className="button__secondaryCR"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  const { value } = e.target;
                  setFieldValue!("orderManagement.termToPay", value);
                  setSelectedMonthsToPay!(() => +value);
                }}
              >
                <option value="0" disabled>
                  Seleccione el Plazo
                </option>

                <option value="1">30 Días</option>
                <option value="2">60 Días</option>
                <option value="3">90 Días</option>
                <option value="4">120 Días</option>
              </Field>

              {values.orderManagement.termToPay > 0 && (
                <>
                  <p>Días entre pagos</p>

                  <Field
                    as="select"
                    id="termDaysToPay"
                    className="button__secondaryCR"
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      const { value } = e.target;
                      setTermDaysToPay!(() => value);
                    }}
                    value={termDaysToPay || ""}
                  >
                    <option value="" disabled>
                      Seleccione los días
                    </option>

                    <option value="BIWEEKLY">15 Días</option>
                    <option value="MONTHLY">1 Mes</option>
                  </Field>
                </>
              )}
            </div>
          ) : (
            <></>
          )}
          <div className={styles.fixed__divisor}></div>
        </section>
      </main>
      {/* <div className={styles2.shoppingCart__div}> */}
      <FixedResumeSale
        selectedClient={selectedClient}
        handleBackStep={handleBackStep}
        selectedData={selectedData}
        selectedMonthsToPay={selectedMonthsToPay}
        termDaysToPay={termDaysToPay}
        setFieldValue={setFieldValue}
        totalWithDiscount={totalWithDiscount}
        values={values}
        totalToPay={totalToPay}
        totalToPayMinusCredit={totalToPayMinusCredit}
        setTotalToPay={setTotalToPay}
        pendingToPay={pendingToPay}
        setPendingToPay={setPendingToPay}
        previousCreditAvailable={updateCreditClientState?.credit_available}
        setUpdateCreditClientState={setUpdateCreditClientState}
        setCreditAvailable={setCreditAvailable}
        handleTotalPayableInCash={handleTotalPayableInCash}
        handleTotalPayableInMonths={handleTotalPayableInMonths}
        isTyping={isTyping}
      />
      {/* </div> */}
    </>
  );
}
