import styles from "../../../../BOInventoryForm.module.css";

import { IBOConfirmIncomeInventoryProps } from "@/interfaces/Inventory/inventory";

import { BOConfirmInputs } from "./BOConfirmInputs";
import { ConfirmIncomeInventoryProductsTable } from "./ConfirmIncomeInventoryProductsTable";

export function BOConfirmIncomeInventory({
  handleBackStep,
  setFieldValue,
  selectedIncomeData,
  setSelectedIncomeRows,
  values,
  selectedProviderResponsible,
}: IBOConfirmIncomeInventoryProps) {
  return (
    <section className={styles.providerform}>
      <h1 className="heading__main">Nuevo Ingreso</h1>
      <h2 className="heading__primary">
        Confirmar entrada de los siguientes productos de
      </h2>
      <BOConfirmInputs
        values={values}
        selectedProviderResponsible={selectedProviderResponsible}
      />

      <ConfirmIncomeInventoryProductsTable
        selectedIncomeData={selectedIncomeData}
        setSelectedIncomeRows={setSelectedIncomeRows}
      />

      {/* <div className="flexColumn__fullMY">
        <p className="bold">Comentarios Adicionales Egreso</p>
        <div className={styles["serviceProvider__readInput"]}>
          {values.outcomeComments}
        </div>
      </div> */}

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
