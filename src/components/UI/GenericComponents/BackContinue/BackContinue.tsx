import { IBackContinueProps } from "@/interfaces/SideMenuSections/genericComponents";

import styles from "./BackContinue.module.css";

import { useNavigate } from "react-router-dom";

import { useSectionProvider } from "@/hooks/useSectionProvider";



export function BackContinue({
  handleBackStep,
  handleNextStep,
  customBackStepText = "Atras",
  customNextStepText = "Continuar",
  popUpMessage,
}: IBackContinueProps) {
  const handleSection = () => {
    if (sectionName === "PDV") {
      navigate("/PDV/Add");
    } else if (handleNextStep) {
      handleNextStep!();
    } else return;
  };

  const { sectionName, handleBackTo } = useSectionProvider();
  const navigate = useNavigate();
  return (
    <div className={styles["BackContinue__Container"]}>
      <button
        type="button"
        className={styles["BackContinue__cancel"]}
        onClick={() => handleBackStep || handleBackTo(sectionName)}
      >
        {customBackStepText}
      </button>
      <button
        type="submit"
        className="button__primary-blue"
        onClick={() => {
          if (popUpMessage) {
            if (confirm(popUpMessage)) {
              handleSection();
            }
            return;
          }
          handleSection();
        }}
      >
        {customNextStepText}
      </button>
    </div>
  );
}
