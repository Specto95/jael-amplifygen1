import { ScaleLoader } from "react-spinners";

import styles from "../MainPageSpinner.module.css";
import { IMainSpinnerTableProps } from "./interfaces/IMainSpinnerTable";

export function InventoryListTableSpinner({
  hasBackground,
}: IMainSpinnerTableProps) {
  return (
    <div
      className={
        styles[
          `${hasBackground} ? "providerTableSpinner__container" : "providerTableSpinner__containerNoBG"`
        ]
      }
    >
      <div className={styles["providersSpinner-center"]}>
        <ScaleLoader color="#3ea2f7" />
      </div>
    </div>
  );
}
