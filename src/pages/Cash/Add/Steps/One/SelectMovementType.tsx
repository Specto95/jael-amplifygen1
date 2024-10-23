import { useEffect, useState, lazy } from "react";

import SectionForm from "@/components/UI/GenericComponents/SectionForm/SectionForm";
import { ISelectMovementTypeProps } from "./interfaces/ISelectMovementType";
import {
  areAlmostEqualWithDecimals,
  handleMovementType,
  handleSubMovementType,
} from "./helpers/functions";
import {
  MovementType,
  MovementTypeSpanish,
} from "@/utils/globalObjs/sideMenuSections/Cash/CashObjs";
import { ISubMovementType } from "../../interfaces/ICashForm";
import { SubMovementType } from "../../../../../utils/globalObjs/sideMenuSections/Cash/CashObjs";

import { useListCreditAccountsReceivable } from "@/components/UI/SideMenuSections/Credits/SubModules/AccountsReceivable/api/useListCreditAccountsReceivable";

//* LAZY COMPONENTS

const SearchClientSelect = lazy(() =>
  import(
    "@/pages/Credits/SubModules/Requests/Add/Steps/One/customSelect/SearchClientSelect"
  ).then((module) => ({
    default: module.SearchClientSelect,
  }))
);

const ShowTableData = lazy(() =>
  import("@/components/UI/GenericComponents/Table/ShowTableData").then(
    (module) => ({
      default: module.ShowTableData,
    })
  )
);

const ShowSelectedTableData = lazy(() =>
  import(
    "@/components/UI/GenericComponents/Table/SelectedData/ShowSelectedTableData"
  ).then((module) => ({
    default: module.ShowSelectedTableData,
  }))
);

const CustomerSubscription = lazy(() =>
  import("../Income/CustomerSubscription/CustomerSubscription").then(
    (module) => ({
      default: module.CustomerSubscription,
    })
  )
);

const OutcomePaymentService = lazy(() =>
  import("../Outcome/OutcomePaymentService").then((module) => ({
    default: module.OutcomePaymentService,
  }))
);

//* GRAPHQL
import { getCustomerSubscriptionDetailsByID } from "@/graphql/queries";
import { IGetCustomerSubscriptionDetailsByIDAPI } from "./api/interfaces/IGetCustomerSubscriptionDetailsByID";
import { commaSeparator } from "../../../../../utils/commaSeparator";
import { MainHeading } from "../../../../../components/UI/GenericComponents/Headings/Main/MainHeading";
import {
  AccountsReceivableFormColumns,
  AccountsReceivableSelectedColumns,
  CashIncomeSalesColumns,
} from "@/components/UI/SideMenuSections/Credits/SubModules/AccountsReceivable/List/Columns/AccountsReceivableListColumns";
import { PrimaryHeading } from "@/components/UI/GenericComponents/Headings/Primary/PrimaryHeading";
import { Field } from "formik";
import { convertStringToNumber } from "@/utils/helpers";
import { BackContinue } from "@/components/UI/GenericComponents/BackContinue/BackContinue";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function SelectMovementType({
  movementType,
  setFieldValue,
  goTo,
  subMovementType,
  setSubMovementType,
  setClientSelectedPayment,
  clientSelectedPayment,
  selectedClient,
  setSelectedClient,
  quantity,
  setQuantity,
  totalAccumulablePayments,
  setTotalAccumulablePayments,
  clientCreditNextTwoPendingToPay,
  lastQuantity,
  setLastQuantity,
  pendingClientCreditMovementsToPay,
  handleBackStep,
  handleNextStep,
  setRemainingTotal,
  remainingTotal,
  setIsReading,
}: ISelectMovementTypeProps) {
  const [isMovementTypeChanging, setIsMovementTypeChanging] =
    useState<boolean>(false);

  const [activeButton, setActiveButton] =
    useState<ISubMovementType["subMovementType"]>("");

  const { listCreditAccountsReceivable, isLoading } =
    useListCreditAccountsReceivable(selectedClient!.id!, subMovementType);

  const [query, setQuery] = useState<string>("");

  // useEffect(() => {
  //   setFieldValue!("movementType", "");
  // }, []);

  useEffect(() => {
    if (subMovementType === SubMovementType.INCOMECUSTOMERSUBSCRIPTION) {
      setIsReading!(false);
      return;
    }
    if (subMovementType === SubMovementType.INCOMESALES) {
      setIsReading!(true);
      return;
    }
  }, [subMovementType]);

  useEffect(() => {
    if (clientSelectedPayment?.length! > 0) {
      setRemainingTotal!(
        convertStringToNumber(
          clientSelectedPayment![0]?.pendingToPay!.toString()
        ) - quantity!
      );
    }

    let auxQuantity = quantity;
    if (
      auxQuantity! >= clientCreditNextTwoPendingToPay?.first! ||
      areAlmostEqualWithDecimals(
        clientCreditNextTwoPendingToPay?.first!,
        auxQuantity!
      )
    ) {
      setTotalAccumulablePayments!(0);
      pendingClientCreditMovementsToPay?.forEach(
        (pendingClientCreditMovementToPay) => {
          if (
            auxQuantity! < 1 &&
            areAlmostEqualWithDecimals(
              pendingClientCreditMovementToPay.pendingToPay!,
              auxQuantity!
            )
          ) {
            return;
          }

          if (
            auxQuantity! >= pendingClientCreditMovementToPay.pendingToPay! ||
            areAlmostEqualWithDecimals(
              pendingClientCreditMovementToPay.pendingToPay!,
              auxQuantity!
            )
          ) {
            auxQuantity! -= pendingClientCreditMovementToPay.pendingToPay!;
            setTotalAccumulablePayments!((prev) => prev + 1);
            return;
          }
        }
      );
    } else {
      setTotalAccumulablePayments!(0);
    }
  }, [quantity]);

  useEffect(() => {
    if (query) {
      setClientSelectedPayment!([]);
    }

    const fetchGetClientDetailsByID = async () => {
      if (!query) return;
      try {
        const result: any = await clientAPI(
          getCustomerSubscriptionDetailsByID,
          { id: query }
        );

        const clientDetailsResult: IGetCustomerSubscriptionDetailsByIDAPI = {
          id: result.data.getClient.id,
          name: result.data.getClient.name,
          second_name: result.data.getClient.second_name,
          lastname: result.data.getClient.lastname,
          second_lastname: result.data.getClient.second_lastname,
          email: result.data.getClient.email,
          phone: result.data.getClient.phone,

          credit_available: result.data.getClient.credit?.credit_available,
          outstanding_balance:
            result.data.getClient.credit?.outstanding_balance,
          branchOfficeName: result.data.getClient.branchOffice?.name,
          clientSince: result.data.getClient.createdAt.split("T")[0],
        };

        setSelectedClient!(clientDetailsResult);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchGetClientDetailsByID();
  }, [query, setQuery]);

  return (
    <SectionForm
      fullWidthBGMain={selectedClient!.id && movementType ? true : false}
    >
      <div className={selectedClient!.id && "flex__spacing"}>
        <div className="flexColumn__spacingBasis13">
          <h1 className="heading__borderTransparent">Tipo de Movimiento</h1>

          <div className="flex__spacing">
            <button
              type="button"
              className="button__transparentWFullBorder3PXRadiusSM"
              onClick={() => {
                handleMovementType("INCOME", setFieldValue!);
                handleSubMovementType("", setFieldValue!);
              }}
            >
              Ingreso
            </button>
            <button
              type="button"
              className="button__transparentWFullBorder3PXRadiusSM"
              onClick={() => {
                handleMovementType("OUTCOME", setFieldValue!);
                handleSubMovementType("", setFieldValue!);
              }}
            >
              Egreso
            </button>
          </div>

          {movementType && (
            <>
              <h1 className="heading__borderTransparent">
                Tipo de{" "}
                {movementType === MovementType.INCOME
                  ? MovementTypeSpanish.INCOME
                  : MovementTypeSpanish.OUTCOME}
              </h1>

              {movementType === MovementType.INCOME ? (
                <>
                  <div className="flex__spacing-MY">
                    <button
                      type="button"
                      className={
                        subMovementType ===
                        SubMovementType.INCOMECUSTOMERSUBSCRIPTION
                          ? "button__primary-blueWFull"
                          : "button__transparentWFullBorder3PXRadiusSM"
                      }
                      onClick={() => {
                        setActiveButton("IncomeCustomerSubscription");
                        console.log("aqui");
                        handleSubMovementType(
                          "IncomeCustomerSubscription",
                          setFieldValue!
                        );
                      }}
                    >
                      Abono de Clientes
                    </button>
                    <button
                      type="button"
                      className={
                        subMovementType === SubMovementType.INCOMESALES
                          ? "button__primary-blueWFull"
                          : "button__transparentWFullBorder3PXRadiusSM"
                      }
                      onClick={() => {
                        handleSubMovementType("IncomeSales", setFieldValue!);
                      }}
                    >
                      Ventas
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex__center">
                  <button
                    type="button"
                    className="button__primary-bluefit"
                    onClick={() => {
                      setActiveButton("OutcomePaymentService");
                      handleSubMovementType(
                        "OutcomePaymentService",
                        setFieldValue!
                      );
                      setSubMovementType!("OutcomePaymentService");
                    }}
                  >
                    Pago de Servicios
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {movementType === MovementType.INCOME &&
        (subMovementType === SubMovementType.INCOMECUSTOMERSUBSCRIPTION ||
          subMovementType === SubMovementType.INCOMESALES) ? (
          <CustomerSubscription
            selectedClient={selectedClient!}
            setSelectedClient={setSelectedClient!}
            query={query}
            setQuery={setQuery}
          />
        ) : movementType === MovementType.OUTCOME &&
          subMovementType === SubMovementType.OUTCOMEPAYMENTSERVICE ? (
          <OutcomePaymentService
            handleNextStep={handleNextStep}
            handleBackStep={handleBackStep}
          />
        ) : (
          <></>
        )}
      </div>

      {selectedClient!.id && (
        <ShowTableData
          key={subMovementType}
          Columns={
            subMovementType === SubMovementType.INCOMECUSTOMERSUBSCRIPTION
              ? AccountsReceivableFormColumns
              : subMovementType === SubMovementType.INCOMESALES
              ? CashIncomeSalesColumns
              : []
          }
          Data={listCreditAccountsReceivable}
          notFoundDataMessage="No se encontraron movimientos de este Usuario."
          hasBackground={true}
          isLoading={isLoading}
          setData={
            setClientSelectedPayment as React.Dispatch<
              React.SetStateAction<any[]>
            >
          }
          isForm={true}
          handleNextStep={
            subMovementType === SubMovementType.INCOMESALES
              ? handleNextStep
              : undefined
          }
        />
      )}

      {clientSelectedPayment!.length > 0 && (
        <>
          <div className="my-1"></div>

          <MainHeading title="Resumen de Pago" />
          <div className="selected__fieldsBorder3PX">
            <ShowSelectedTableData
              Data={clientSelectedPayment!}
              Columns={AccountsReceivableSelectedColumns}
              hasBackground={true}
              hasBorder={true}
              isLoading={isLoading}
            />
          </div>

          <PrimaryHeading title="Seleccionar tipo de pago" />

          <div className="flex__spacing-MR">
            <Field
              name="paymentType"
              type="checkbox"
              value="cash"
              id="cash"
              checked
              disabled
            />
            <label htmlFor="cash" className="bold">
              De contado
            </label>
          </div>

          <div className="flex__spacing2-MY">
            <div className="flex__spacing">
              <p className="bold">Total de contado</p>

              <input
                type="number"
                pattern="^\d+(\.\d{1,2})?$"
                inputMode="decimal"
                // step="0.01"
                // min="1"
                className="button__secondaryCR"
                value={quantity}
                onChange={(e) => {
                  const newQuantity = +e.target.value;
                  if (clientSelectedPayment?.length! > 0) {
                    if (
                      newQuantity >
                      convertStringToNumber(
                        clientSelectedPayment![0].pendingToPay!.toString()
                      )
                    ) {
                      alert(
                        "El pago es mayor al adeudo, por favor selecciona un monto menor."
                      );
                      return;
                    }
                    if (newQuantity === 0) {
                      return;
                    }
                  }
                  if (newQuantity === 0) {
                    alert("No pueden abonarse $0.00");
                    return;
                  }

                  setQuantity!(newQuantity);
                }}
              />
            </div>

            <div className="flex__spacing">
              <p className="bold">Total restante</p>

              <div className="button__transparentCR">
                {clientSelectedPayment?.length! > 0
                  ? `$${commaSeparator(
                      convertStringToNumber(
                        clientSelectedPayment![0].pendingToPay!.toString()
                      ) - quantity!
                    )}`
                  : "$0.00"}
              </div>
            </div>
          </div>

          <BackContinue
            customNextStepText="Realizar Pago"
            customBackStepText="Cerrar"
            handleNextStep={handleNextStep}
          />
        </>
      )}
    </SectionForm>
  );
}
