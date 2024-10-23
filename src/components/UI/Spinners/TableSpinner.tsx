import { ScaleLoader } from "react-spinners";

import styles from "./MainPageSpinner.module.css";

export function TableSpinner() {
  return (
    <div className={styles["providerTableSpinner__container"]}>
      <div className={styles["providersSpinner-center"]}>
        <ScaleLoader color="#3ea2f7" />
      </div>
    </div>
  );
}
