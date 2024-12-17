import styles from "../../../../../../../Inventory/Type/Main/InventoryForm.module.css";

//* HOOKS
import { useSessionProvider } from "@/hooks/useSessionProvider";

//* INTERFACES
import { MainInventoryUserDetailsProps } from "./interfaces/MainInventoryUserDetails";

export function MainInventoryUserDetails({
  providerName,
  providerResponsibleName,
}: MainInventoryUserDetailsProps) {
  const { userInfoData } = useSessionProvider();

  return (
    <div className={styles["addresponsible__form-fullnameContainer"]}>
      <div className="flexColumn">
        <label
          htmlFor={userInfoData.name}
          className={styles.serviceProvider__label}
        >
          Administrador Responsable
        </label>
        <p className={styles["serviceProvider__inputRead"]}>
          {userInfoData.name}
        </p>
      </div>
      <div className="flexColumn">
        <label
          htmlFor={providerName}
          className={styles.serviceProvider__labelXL}
        >
          Proveedor
        </label>
        <p className={styles["serviceProvider__inputRead"]}>{providerName}</p>
      </div>
      <div className="flexColumn">
        <label
          htmlFor={providerResponsibleName}
          className={styles.serviceProvider__label}
        >
          Responsable Proveedor
        </label>
        <p className={styles["serviceProvider__inputRead"]}>
          {providerResponsibleName}
        </p>
      </div>
    </div>
  );
}
