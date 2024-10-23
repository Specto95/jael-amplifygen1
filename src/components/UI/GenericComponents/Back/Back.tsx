import { IBackProps } from "@/interfaces/SideMenuSections/genericComponents";
import styles from "../BackFinish/BackFinish.module.css";

import { useSectionProvider } from "@/hooks/useSectionProvider";

export function Back({ handleBackStep, customText = "Atras" }: IBackProps) {
  const { sectionName, handleBackTo } = useSectionProvider();

  return (
    <div className={styles["BackContinue__Container"]}>
      <button
        type="button"
        className={styles["BackContinue__cancel"]}
        onClick={() => {
          if (handleBackStep) {
            handleBackStep();
            return;
          }
          handleBackTo(sectionName);
        }}
      >
        {customText}
      </button>
    </div>
  );
}
