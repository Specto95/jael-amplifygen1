//* INTERFACES
import { IGeneralBackFinishProps } from "@/interfaces/SideMenuSections/genericComponents";

import styles from "./BackFinish.module.css";

import { useSectionProvider } from "../../../../hooks/useSectionProvider";

export function GeneralBackFinish({
  handleBackStep,
  setFieldValue,
  toBeFinished,
  SubmitText,
  popUpMessage,
  isSubmitting = true,
}: IGeneralBackFinishProps) {
  const { handleBackTo, sectionName } = useSectionProvider();

  return (
    <div className={styles["BackContinue__Container"]}>
      <button
        type="button"
        className={styles["BackContinue__cancel"]}
        onClick={
          handleBackStep ? handleBackStep : () => handleBackTo(sectionName)
        }
      >
        {!isSubmitting ? "Regresar" : "Atras"}
      </button>
      {isSubmitting ? (
        <button
          type="submit"
          className="button__primary-blue"
          onClick={() => {
            console.log('clic')
            if (popUpMessage) {
              if (confirm(popUpMessage)) {
                setFieldValue!("isSecondButton", true);
              }
              return;
            }
            setFieldValue!("isSecondButton", true);
          }}
          disabled={!toBeFinished}
        >
          {SubmitText || "Finalizar"}
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
