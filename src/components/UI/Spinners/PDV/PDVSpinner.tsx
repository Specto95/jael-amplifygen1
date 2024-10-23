import { ScaleLoader } from "react-spinners";

import styles from "./PDVSpinner.module.css";

export function PDVSpinner() {
  return (
    <div className={styles["PDVSpinner__container"]}>
      <div className={styles["PDV-center"]}>
        <ScaleLoader color="#3ea2f7" />
      </div>
    </div>
  );
}
