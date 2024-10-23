import styles from "./BackFinishPDV.module.css";

import { IBackFinishPDVProps } from "@/interfaces/SideMenuSections/genericComponents";

export function BackFinishPDV({
  handleBackStep,
  setFieldValue,
  selectedMonthsToPay,
  values,
  selectedData,
  isTyping,
  termDaysToPay,
}: IBackFinishPDVProps) {
  const handleDisabled = () => {
    return (values?.paymentType.includes("cash") &&
      selectedData!.length > 0 &&
      (!values?.paymentType.includes("credit") || selectedMonthsToPay > 0)) ||
      (selectedMonthsToPay > 0 &&
        values?.paymentType.includes("credit") &&
        values.orderManagement.clientName.length > 0)
      ? false
      : true;
  };
  return (
    <div className={styles["BackContinue__Container"]}>
      <button
        type="button"
        className={styles["BackContinue__cancel"]}
        onClick={handleBackStep}
      >
        Atras
      </button>
      <button
        type="submit"
        className="button__primary-blue"
        disabled={
          isTyping ||
          handleDisabled() ||
          selectedData!.some(
            (item) => item.hasDiscount && item.discountPercentage === 0
          ) ||
          (selectedMonthsToPay > 0 && termDaysToPay! === "")
        }
        onClick={() => {
          setFieldValue!("isSecondButton", true);
          console.log("cliquee");
        }}
      >
        Finalizar Venta
      </button>
    </div>
  );
}
