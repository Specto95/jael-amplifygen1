import { Field } from "formik";

import styles from "../../../../../../InventoryForm.module.css";

//* HOOKS
import { useSessionProvider } from "@/hooks/useSessionProvider";

//* INTERFACES
import { IRegisterIncomeInputsProps } from "@/interfaces/Inventory/inventory";

export function RegisterIncomeGeneralInputs({
  selectedProviderResponsible,
  selectedProviderName,
}: IRegisterIncomeInputsProps) {
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
        <Field
          type="text"
          name={userInfoData.name}
          id={userInfoData.name}
          value={userInfoData.name}
          readOnly
          className={styles["serviceProvider__inputRead"]}
        />
      </div>
      <div className="flexColumn">
        <label
          htmlFor={selectedProviderName}
          className={styles.serviceProvider__labelXL}
        >
          Proveedor
        </label>
        <Field
          type="text"
          name={selectedProviderName}
          id={selectedProviderName}
          value={selectedProviderName}
          readOnly
          className={styles["serviceProvider__inputRead"]}
        />
      </div>
      <div className={styles.flex__columnXL}>
        <label
          htmlFor={selectedProviderResponsible?.fullname}
          className={styles.serviceProvider__label}
        >
          Responsable Proveedor
        </label>
        <Field
          type="text"
          name={selectedProviderResponsible?.fullname}
          placeholder="Encargado Responsable:"
          id={selectedProviderResponsible?.fullname}
          className={styles["serviceProvider__inputRead"]}
          value={selectedProviderResponsible?.fullname || "No Asignado"}
          readOnly
        />
      </div>
    </div>
  );
}
