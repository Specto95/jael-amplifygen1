import { IIncomeInventoryConfirmInputsProps } from "@/interfaces/Inventory/inventory";
import styles from "../../../../BOInventoryForm.module.css";
import { formatSpanishDate } from "@/utils/dates";

import { useSessionProvider } from "@/hooks/useSessionProvider";

export function BOConfirmInputs({
  values,
  selectedProviderResponsible,
}: IIncomeInventoryConfirmInputsProps) {
  const { userInfoData } = useSessionProvider();
  return (
    <div className={styles["addresponsible__form-fullnameContainer"]}>
      <div className="flexColumn">
        <h2 className={styles.serviceProvider__label}>Fecha*</h2>
        <div className={styles["serviceProvider__readInput"]}>
          {formatSpanishDate()}
        </div>
      </div>
      <div className="flexColumn">
        <h2 className={styles.serviceProvider__label}>
          Administrador Responsable*
        </h2>
        <div className={styles["serviceProvider__readInput"]}>
          {userInfoData.name}
        </div>
      </div>
      <div className={styles.flex__columnXL}>
        <h2 className={styles.serviceProvider__labelXL}>Proveedor</h2>
        <div className={styles["serviceProvider__readInput"]}>
          {selectedProviderResponsible?.fullname}
        </div>
      </div>
    </div>
  );
}
