import { IListMainIncomeInventoryProductInputDetailsProps } from "./interfaces/IListMainIncomeInventoryProductInputDetails";
import styles from "../../../InventoryForm.module.css";

export function ListMainIncomeInventoryProductInputDetails({
  productInputsDetails,
}: IListMainIncomeInventoryProductInputDetailsProps) {
  return (
    <div className={styles["addresponsible__form-fullnameContainer"]}>
      <div className="flexColumn">
        <h2 className={styles.serviceProvider__label}>Fecha*</h2>
        <div className={styles["serviceProvider__readInput"]}>
          {productInputsDetails.date}
        </div>
      </div>
      <div className="flexColumn">
        <h2 className={styles.serviceProvider__label}>
          Administrador Responsable*
        </h2>
        <div className={styles["serviceProvider__readInput"]}>
          {productInputsDetails.userInfoName}
        </div>
      </div>
      <div className={styles.flex__columnXL}>
        <h2 className={styles.serviceProvider__labelXL}>Proveedor</h2>
        <div className={styles["serviceProvider__readInput"]}>
          {productInputsDetails.providerName}
        </div>
      </div>
    </div>
  );
}
