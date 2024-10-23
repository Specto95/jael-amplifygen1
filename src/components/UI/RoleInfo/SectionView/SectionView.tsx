import { AccountFormObj } from "@/pages/Account/utils/AccountFormObj";
import styles from "./SectionView.module.css";

import { ISectionView } from "./interfaces/ISectionView";

import { useSessionProvider } from "@/hooks/useSessionProvider";

export function SectionView({ title }: ISectionView): JSX.Element {
  const { branchInventory, rolID } = useSessionProvider();

  return (
    <div className={styles.section__container}>
      <h1 className={styles.section__title}>{title}</h1>
      {rolID === AccountFormObj.BRANCHMANAGER && (
        <div className={styles["branchO__container"]}>
          <h3 className={styles.branchO__name}>{branchInventory.name}</h3>
          {rolID === AccountFormObj.ADMIN && (
            <h5 className={styles.branchO__change}>Cambiar sucursal</h5>
          )}
        </div>
      )}
    </div>
  );
}
