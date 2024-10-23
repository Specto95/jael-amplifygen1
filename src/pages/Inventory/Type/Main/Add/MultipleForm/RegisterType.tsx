import { useEffect } from "react";
import { Field } from "formik";

import styles from "../../InventoryForm.module.css";

//* HOOKS
import { useSectionProvider } from "@/hooks/useSectionProvider";

//* INTERFACES
import { IRegisterTypeProps } from "@/interfaces/Inventory/inventory";
import { OperationType } from "../../List/ListProductDetailsObj";

export function RegisterType({
  handleInventoryType,
  values,
  setSelectedIncomeRows,
  setSelectedOutcomeRows,
  resetForm,
  setSelectedProvider,
  setSelectedProviderResponsible,
  setSelectedState,
}: IRegisterTypeProps) {
  const { handleBackTo } = useSectionProvider();

  const handleGoTo = () => {
    if (values === OperationType.INCOME) {
      handleInventoryType!(OperationType.INCOME);
      return;
    }
    if (values === OperationType.OUTCOME) {
      handleInventoryType!(OperationType.OUTCOME);
      return;
    }
    if (values === OperationType.RETURNS) {
      handleInventoryType!(OperationType.RETURNS);
      return;
    }
  };

  useEffect(() => {
    setSelectedIncomeRows!([]);
    setSelectedProvider!({ id: "", name: "" });
    setSelectedProviderResponsible!({ id: "", name: "" });
    setSelectedOutcomeRows!([]);
    setSelectedState!({ value: "", label: "" });
    resetForm!();
  }, []);

  return (
    <section className={styles.registerType__container}>
      <h2 className="heading__main">Nuevo Registro</h2>
      <h2 className="heading__primary">Seleccionar tipo de ingreso</h2>

      <div className={styles.flex__columnSpacing}>
        <div className={styles.flex__spacing}>
          <Field
            name="registerType"
            type="radio"
            value={OperationType.INCOME}
          />
          <label>Ingreso</label>
        </div>
        <div className={styles.flex__spacing}>
          <Field
            name="registerType"
            type="radio"
            value={OperationType.RETURNS}
          />
          <label>Devolución</label>
        </div>
        <div className={styles.flex__spacing}>
          <Field
            name="registerType"
            type="radio"
            value={OperationType.OUTCOME}
          />
          <label>Egreso</label>
        </div>

        <div className={styles["inventoryForm__buttonsContainer"]}>
          <button
            type="button"
            className="button__secondary-cancel"
            onClick={() => handleBackTo("mainInventory")}
          >
            Atrás
          </button>
          <button
            type="button"
            className="button__secondary-submit"
            onClick={handleGoTo}
          >
            Continuar
          </button>
        </div>
      </div>
    </section>
  );
}
