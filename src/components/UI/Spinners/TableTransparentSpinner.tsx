import { ScaleLoader } from "react-spinners";

import styles from "./MainPageSpinner.module.css";

export function TableTransparentSpinner() {
  return (
    <div className={styles["TableTransparent__container"]}>
      <div className={styles["TableTransparent-center"]}>
        <ScaleLoader color="#3ea2f7" />
      </div>
    </div>
  );
}
