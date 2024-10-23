import styles from "../BackFinish/BackFinish.module.css";

import { IBackFinishProps } from "@/interfaces/SideMenuSections/genericComponents";

export function Finish({
  setFieldValue,
  toBeFinished,
  text,
}: IBackFinishProps) {

  return (
    <div className={styles["finish__container"]}>
      <button
        type="submit"
        className="button__primary-blue"
        onClick={() => setFieldValue!("isSecondButton", true)}
        disabled={!toBeFinished}
      >
        {text}
      </button>
    </div>
  );
}
