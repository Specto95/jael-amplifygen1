import { useState, useEffect } from "react";

import { MainHeading } from "@/components/UI/GenericComponents/Headings/Main/MainHeading";
import SectionForm from "@/components/UI/GenericComponents/SectionForm/SectionForm";
import { IConfirmEditCSubscriptionPaymentProps } from "./interfaces/IConfirmEditCSubscriptionPayment";
import { convertStringToNumber, formatKey } from "@/utils/helpers";
import BoldField from "@/components/UI/GenericComponents/Fields/Bold";
import { ResumeDataField } from "@/components/UI/GenericComponents/Fields/ResumeDataField";
import { getCurrentDate } from "@/utils/dates";
import { ShowSelectedTableData } from "@/components/UI/GenericComponents/Table/SelectedData/ShowSelectedTableData";
import { AccountsReceivableResumeColumns } from "@/components/UI/SideMenuSections/Credits/SubModules/AccountsReceivable/List/Columns/AccountsReceivableListColumns";
import { ButtonPrimaryBlueRadius } from "@/components/UI/GenericComponents/Buttons/Primary/ButtonPrimaryBlueRadius";
import { commaSeparator } from "@/utils/commaSeparator";
import { Back } from "@/components/UI/GenericComponents/Back/Back";
import { areAlmostEqualWithDecimals } from "../../One/helpers/functions";
import { SubMovementType } from "@/utils/globalObjs/sideMenuSections/Cash/CashObjs";

export function ConfirmEditCSubscriptionPayment({
  paymentID,
  clientData,
  clientSelectedPayment,
  quantity,
  remainingTotal,
  setFieldValue,
  setQuantity,
  setRemainingTotal,
  clientCreditNextTwoPendingToPay,
  pendingClientCreditMovementsToPay,
  setTotalAccumulablePayments,
  isReading,
  handleBackStep,
  subMovementType,
}: IConfirmEditCSubscriptionPaymentProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    setRemainingTotal!(
      convertStringToNumber(
        clientSelectedPayment![0]?.pendingToPay!.toString()
      ) - quantity!
    );

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

  return (
    <SectionForm>
      <div className="flex__spacingBetween-MYMD">
        <MainHeading title={`ID De Pago: ${formatKey(paymentID!)}`} />
        <div className="flex__spacing">
          <button className="button__secondaryFit">Imprimir Ticket</button>
          <button className="button__secondaryFit">Guardar Ticket</button>
        </div>
      </div>
      <MainHeading
        title={
          subMovementType === SubMovementType.OUTCOMEPAYMENTSERVICE
            ? "Usuario"
            : "Cliente"
        }
      />

      <div className="flex__spacing2-MY">
        <BoldField text={
          subMovementType === SubMovementType.OUTCOMEPAYMENTSERVICE
            ? "Nombre Usuario"
            : "Nombre Cliente"
        } />
        <ResumeDataField
          text={`
        ${clientData?.clientName} - ${formatKey(clientData?.id!)}
        
        `}
        />
      </div>

      <div className="flex__spacing2-MY">
        <BoldField text="Fecha de Pago" />
        <ResumeDataField text={getCurrentDate()} />
      </div>

      <MainHeading title="Detalles de la Venta" />
      <div className="selected__fieldsBorder3PX">
        <ShowSelectedTableData
          Data={clientSelectedPayment!}
          Columns={AccountsReceivableResumeColumns}
          hasBackground={true}
          hasBorder={true}
        />
      </div>
      <MainHeading title="Tipo de pago" />

      <BoldField text="De contado" />

      <MainHeading title="Resumen de Abono" />

      <div className="flex__spacing2">
        {isEditing ? (
          <>
            <div className="flex__spacing">
              <p className="bold">Total de contado</p>

              <input
                type="number"
                pattern="^\d+(\.\d{1,2})?$"
                inputMode="decimal"
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
          </>
        ) : (
          <>
            <div className="flex__spacing">
              <ButtonPrimaryBlueRadius text="Total Abonado" />
              <ResumeDataField text={`$${commaSeparator(quantity!)}`} />
            </div>
            <div className="flex__spacing">
              <ButtonPrimaryBlueRadius text="Pago Restante" />
              <ResumeDataField text={`$${commaSeparator(remainingTotal!)}`} />
            </div>
          </>
        )}
      </div>

      <div className="flex__spacing-betweenMY">
        <Back customText="Atras" handleBackStep={handleBackStep} />

        {!isReading && (
          <div className="flex__spacing">
            <button
              type="button"
              className="button__secondaryFit"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Confirmar" : "Editar Pago"}
            </button>

            <button
              type="submit"
              className="button__primary-blue"
              onClick={() => {
                if (confirm("¿Estas seguro de finalizar el pago?")) {
                  setFieldValue!("isSecondButton", true);
                }
              }}
              disabled={isEditing}
            >
              Finalizar Pago
            </button>
          </div>
        )}
      </div>
    </SectionForm>
  );
}
