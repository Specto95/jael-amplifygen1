import styles from "./BackContinue.module.css";

import { useSectionProvider } from "@/hooks/useSectionProvider";

import { IBackContinueProps } from "@/interfaces/SideMenuSections/genericComponents";

export function BackContinue({
  handleBackStep,
  handleNextStep,
  selectedData,
}: IBackContinueProps) {
  const { handleBackTo } = useSectionProvider();
  return (
    <div className={styles["BackContinue__Container"]}>
      <button
        type="button"
        className={styles["BackContinue__cancel"]}
        onClick={() => handleBackTo!("PDV")}
      >
        Cancelar
      </button>
      <button
        type="button"
        className="button__primary-blue"
        onClick={handleNextStep}
        disabled={selectedData?.length! === 0}
      >
        Continuar
      </button>
    </div>
  );
}
