import styles from "./BackFinish.module.css";

import { useSectionProvider } from "@/hooks/useSectionProvider";

import { IBackFinishProps } from "@/interfaces/SideMenuSections/genericComponents";

export function BackFinish({
  handleBackStep,
  setFieldValue,
  toBeFinished,
  textFinish,
}: IBackFinishProps) {
  const { sectionName } = useSectionProvider();

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
        onClick={() => setFieldValue!("isSecondButton", true)}
        disabled={!toBeFinished}
      >
        {sectionName === "credits"
          ? "Generar Crédito"
          : sectionName === "creditRequests"
          ? "Enviar Solicitud"
          : textFinish || "Finalizar"}
      </button>
    </div>
  );
}
