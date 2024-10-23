//* INTERFACES
import { ICustomGeneralBackFinishProps } from "@/interfaces/SideMenuSections/genericComponents";

import styles from "../BackFinish/BackFinish.module.css";

import { useSectionProvider } from "@/hooks/useSectionProvider";


export function CustomGeneralBackFinish({
  handleBackStep,
  setFieldValue,
  toBeFinished,
  SubmitText,
  CustomSubmitText,
  setCustomValue,
  showFinish = true,
  showActions = true,
}: ICustomGeneralBackFinishProps) {
  const { handleBackTo, sectionName } = useSectionProvider();

  return (
    <div className="flex__spacing-betweenWrap">
      <button
        type="button"
        className={styles["BackContinue__cancel"]}
        onClick={handleBackStep || (() => handleBackTo(sectionName))}
      >
        Atras
      </button>
      {showActions && (
        <>
          <div className="flex__spacing">
            {showFinish && (
              <button
                type="submit"
                className="button__secondaryFit"
                onClick={() => {
                  setFieldValue!("isSecondButton", true);
                  setCustomValue!(true);
                }}
              >
                {CustomSubmitText}
              </button>
            )}
            {showFinish && (
              <button
                type="submit"
                className="button__primary-blue"
                onClick={() => setFieldValue!("isSecondButton", true)}
                disabled={!toBeFinished}
              >
                {SubmitText || "Finalizar"}
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
