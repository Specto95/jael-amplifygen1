import { IGeneralBackContinueProps } from "./interfaces/IGeneralBackContinue";
import { currentIndexObj } from "@/utils/multiStepForm/currentIndexObj";

import styles from "../BackContinue.module.css";

import { useNavigate } from "react-router-dom";

import { useSectionProvider } from "@/hooks/useSectionProvider";

export function GeneralBackContinue({
  handleBackStep,
  handleNextStep,
  currentStepIndex,
  toBeNext
}: IGeneralBackContinueProps) {
  const { sectionName, handleBackTo } = useSectionProvider();

  const handleSection = () => {
    if (sectionName === "PDV") {
      navigate("/PDV/Add");
    } else {
      handleNextStep!();
    }
  };

  const navigate = useNavigate();
  return (
    <div className={styles["BackContinue__Container"]}>
      <button
        type="button"
        className={styles["BackContinue__cancel"]}
        onClick={() => 
         currentStepIndex !== currentIndexObj.ONE
            ? handleBackStep!()
            : handleBackTo(sectionName)
        }
      >
        {currentStepIndex !== currentIndexObj.ONE ? "Atras" : "Cancelar"}
      </button>
      <button
        type="submit"
        className="button__primary-blue"
        onClick={handleSection}
        disabled={!toBeNext}
      >
        Continuar
      </button>
    </div>
  );
}
