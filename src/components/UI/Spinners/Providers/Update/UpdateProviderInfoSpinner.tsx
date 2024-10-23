import { ScaleLoader } from "react-spinners";

import styles from "../../MainPageSpinner.module.css";

export function UpdateProviderInfoSpinner() {
  return (
    <div className={styles["providerTableSpinner__containerNoBG"]}>
      <div className={styles["providersSpinner-center"]}>
        <ScaleLoader color="#3ea2f7" />
      </div>
    </div>
  );
}
