import { IPDVFixedResumeSaleProps } from "@/interfaces/PDV/PDV";
import styles from "../../PDVGeneralForm.module.css";

import { commaSeparatorFloat } from "@/utils/commaSeparator";
import { BackFinishPDV } from "../BackFinishPDV/BackFinishPDV";
import { useGetClientCreditByID } from "../../Steps/Second/api/useGetClientCreditByID";
import { Close } from "../Close/Close";
import { BackContinue } from "../BackContinue/BackContinue";
import { currentIndexObj } from "@/utils/multiStepForm/currentIndexObj";
import { MainHeading } from "@/components/UI/GenericComponents/Headings/Main/MainHeading";

export function FixedResumeSale({
  selectedClient,
  handleBackStep,
  handleNextStep,
  selectedData,
  selectedMonthsToPay,
  setFieldValue,
  totalWithDiscount,
  values,
  currentStepIndex,
  totalToPay,
  totalToPayMinusCredit,
  previousCreditAvailable,
  handleTotalPayableInCash,
  handleTotalPayableInMonths,
  isTyping,
  termDaysToPay,
}: IPDVFixedResumeSaleProps) {
  const { getClientCreditByID } = useGetClientCreditByID(
    selectedClient ? selectedClient!.id : ""
  );
  return (
    <footer
      className={`${styles.PDV__FixedResumeSale} ${
        currentStepIndex === currentIndexObj.TWO || currentStepIndex === currentIndexObj.THREE
          ? styles["PDV__FixedResumeSale-NoM"]
          : ""
      }`}
    >
      <MainHeading title="Resúmen de venta" customStyle="heading__primaryPSM" />

      <div className="flex__spacing2BetweenWrap">
        <div className="flex__spacing2Wrap">
          {
            // currentStepIndex === 0 ? (
            //   <>
            //     <p className="button__primary-blueCR">Total general a pagar</p>
            //     <p className={"button__secondaryCR-NoBr"}>
            //       {"$" + commaSeparatorFloat(totalToPay!)}
            //     </p>
            //   </>
            // ) :
            <div className="flex__spacingWrap">
              {values?.paymentType.includes("credit") ? (
                previousCreditAvailable! >
                (totalWithDiscount! || totalToPay!) ? (
                  <>
                    <p className="button__primary-blueCR">
                      Total a pagar a crédito
                    </p>
                    <p
                      className={`${
                        currentStepIndex === currentIndexObj.THREE
                          ? styles.PDVResume__DataFields
                          : "button__secondaryCR-NoBr"
                      }`}
                    >
                      {"$" +
                        commaSeparatorFloat(totalWithDiscount! || totalToPay!)}
                    </p>
                    {selectedMonthsToPay! > 0 && (
                      <div className="flex__spacing">
                        <p className="button__primary-blueCR">
                          {termDaysToPay === "BIWEEKLY"
                            ? "Total a pagar quincenal"
                            : "Total a pagar meses"}
                        </p>
                        <p
                          className={`${
                            currentStepIndex === currentIndexObj.THREE
                              ? styles.PDVResume__DataFields
                              : "button__transparentCR"
                          }`}
                        >
                          {handleTotalPayableInMonths!()}
                        </p>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="flexColumn__spacing">
                    <div className="flex__spacing">
                      <p className="button__primary-blueCR">
                        Total a pagar al contado
                      </p>
                      <p
                        className={`${
                          currentStepIndex === currentIndexObj.THREE
                            ? styles.PDVResume__DataFields
                            : "button__secondaryCR-NoBr"
                        }`}
                      >
                        {"$" + commaSeparatorFloat(totalToPayMinusCredit!)}
                      </p>
                    </div>
                    <div className="flex__spacingWrap">
                      <div className="flex__spacing">
                        <p className="button__primary-blueCR">
                          Total a pagar a credito
                        </p>
                        <p
                          className={`${
                            currentStepIndex === currentIndexObj.THREE
                              ? styles.PDVResume__DataFields
                              : "button__secondaryCR-NoBr"
                          }`}
                        >
                          {"$" + commaSeparatorFloat(previousCreditAvailable!)}
                          {/* // handleTotalPayableInCash!(values!, getClientCreditByID) */}
                        </p>
                      </div>
                      {values?.paymentType?.includes("credit") &&
                        selectedMonthsToPay! > 0 && (
                          <div className="flex__spacing">
                            <p className="button__primary-blueCR">
                              {termDaysToPay === "BIWEEKLY"
                                ? "Total a pagar quincenal"
                                : "Total a pagar meses"}
                            </p>
                            <p
                              className={`${
                                currentStepIndex === currentIndexObj.THREE
                                  ? styles.PDVResume__DataFields
                                  : "button__transparentCR"
                              }`}
                            >
                              {handleTotalPayableInMonths!()}
                            </p>
                          </div>
                        )}
                    </div>
                  </div>
                )
              ) : (
                <div className="flex__spacing">
                  <p className="button__primary-blueCR">
                    Total a pagar de contado
                  </p>
                  <p
                    className={`${
                      currentStepIndex === currentIndexObj.THREE
                        ? styles.PDVResume__DataFields
                        : "button__secondaryCR-NoBr"
                    }`}
                  >
                    {currentStepIndex === currentIndexObj.ONE
                      ? "$" + commaSeparatorFloat(totalToPay!)
                      : "$" +
                        commaSeparatorFloat(
                          handleTotalPayableInCash!(
                            values!,
                            getClientCreditByID
                          )
                        )}
                  </p>
                </div>
              )}
            </div>
          }
        </div>
        {currentStepIndex === 0 ? (
          <BackContinue
            handleBackStep={handleBackStep}
            handleNextStep={handleNextStep}
            selectedData={selectedData!}
          />
        ) : currentStepIndex === 2 ? (
          <Close />
        ) : (
          <BackFinishPDV
            values={values}
            selectedData={selectedData!}
            isClientRegistered={values?.isClientRegistered!}
            clientName={values?.orderManagement.clientName!}
            selectedMonthsToPay={selectedMonthsToPay!}
            termDaysToPay={termDaysToPay!}
            handleBackStep={handleBackStep}
            setFieldValue={setFieldValue}
            isTyping={isTyping}
          />
        )}
      </div>
    </footer>
  );
}
