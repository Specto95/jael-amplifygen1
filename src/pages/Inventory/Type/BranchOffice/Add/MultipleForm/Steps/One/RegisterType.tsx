import { useEffect } from "react";
import { Field } from "formik";

import styles from "../../BOInventoryForm.module.css";

//* HOOKS
import { useSectionProvider } from "@/hooks/useSectionProvider";
import { useSessionProvider } from "@/hooks/useSessionProvider";

//* INTERFACES
import { IBORegisterTypeProps } from "@/interfaces/Inventory/inventory";
import { OperationType } from "@/pages/Inventory/Type/Main/List/ListProductDetailsObj";

export function RegisterType({
  handleInventoryType,
  values,
  setSelectedIncomeRows,
  resetForm,
  setSelectedProvider,
  setSelectedProviderResponsible,
  setSelectedState,
}: IBORegisterTypeProps) {
  const { branchInventory } = useSessionProvider();
  const { handleBackTo } = useSectionProvider();

  const handleGoTo = () => {
    if (values === OperationType.INCOME) {
      handleInventoryType!(OperationType.INCOME);
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
    setSelectedState!({ value: "", label: "" });
    resetForm!();
  }, []);

  return (
    <section className={styles.registerType__container}>
      <div className="selectBGSecondaryWFull">{branchInventory.name}</div>
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
        {/* <div className={styles.flex__spacing}>
          <Field
            name="registerType"
            type="radio"
            value={OperationType.RETURNS}
          />
          <label>Devolución</label>
        </div> */}

        <div className={styles["inventoryForm__buttonsContainer"]}>
          <button
            type="button"
            className="button__secondary-cancel"
            onClick={() => handleBackTo("BOInventory")}
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
