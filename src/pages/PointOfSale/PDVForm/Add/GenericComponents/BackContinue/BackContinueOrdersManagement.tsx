
import { IBackContinueProps } from "@/interfaces/SideMenuSections/genericComponents";
import styles from "./BackContinue.module.css";

export function BackContinueOrderManagement({
  handleBackStep,
  handleNextStep,
}: IBackContinueProps) {
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
        onClick={handleNextStep}
      >
        Finalizar Venta
      </button>
    </div>
  );
}
