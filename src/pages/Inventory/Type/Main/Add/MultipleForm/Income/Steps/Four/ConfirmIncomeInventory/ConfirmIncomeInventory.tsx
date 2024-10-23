import styles from "../../../../../../InventoryForm.module.css";

import { IConfirmIncomeInventoryProps } from "@/interfaces/Inventory/inventory";

import { ConfirmInputs } from "./ConfirmInputs";
import { ConfirmIncomeInventoryProductsTable } from "./ConfirmIncomeInventoryProductsTable";

export function ConfirmIncomeInventory({
  handleBackStep,
  setFieldValue,
  selectedIncomeData,
  setSelectedIncomeRows,
  values,
}: IConfirmIncomeInventoryProps) {
  return (
    <section className={styles.providerform}>
      <h1 className="heading__main">Nuevo Ingreso</h1>
      <h2 className="heading__primary">
        Confirmar entrada de los siguientes productos de
      </h2>
      <ConfirmInputs values={values} />

      <ConfirmIncomeInventoryProductsTable
        selectedIncomeData={selectedIncomeData}
        setSelectedIncomeRows={setSelectedIncomeRows}
      />

      <div className="flexColumn__fullMY">
        <p className="bold">Comentarios Adicionales</p>
        <div className={styles["serviceProvider__readInput"]}>
          {values.comments}
        </div>
      </div>

      <div className={styles["providerform__form-buttons"]}>
        <button
          type="button"
          className="button__primary-submit"
          onClick={handleBackStep}
        >
          Atras
        </button>
        <button
          type="submit"
          className="button__primary-blue"
          onClick={() => setFieldValue!("isSecondButton", true)}
        >
          Finalizar
        </button>
      </div>
    </section>
  );
}
