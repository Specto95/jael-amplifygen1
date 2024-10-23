import { formatSpanishDate } from "@/utils/dates";
import styles from "../../../../../../InventoryForm.module.css";

import { IOutcomeInventoryConfirmInputsProps } from "@/interfaces/Inventory/inventory";

export function ConfirmInputs({ values }: IOutcomeInventoryConfirmInputsProps) {
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
          {values?.admin_name}
        </div>
      </div>
      <div className={styles.flex__columnXL}>
        <h2 className={styles.serviceProvider__labelXL}>Sucursal</h2>
        <div className={styles["serviceProvider__readInput"]}>
          {values?.branchOffice_name}
        </div>
      </div>
    </div>
  );
}
