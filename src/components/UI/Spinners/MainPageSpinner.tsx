import { ScaleLoader } from "react-spinners";
import styles from "./MainPageSpinner.module.css";

export function MainPageSpinner() {
  return (
    <div className={styles['mainpage-spinner__container']}>
      <ScaleLoader color="#3ea2f7" />
    </div>
  );
}
