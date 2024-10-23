import styles from "../../../../BOInventoryForm.module.css";

import { IBOIncomeInventoryGeneralDataProps } from "@/interfaces/Inventory/inventory";

import { RegisterIncomeGeneralInputs } from "./RegisterIncomeGeneralInputs";
import { InventoryGeneralDataProductsComments } from "../../../../GenericComponents/InventoryGeneralDataProductsComments";

export function BOIncomeInventoryGeneralData({
  handleBackStep,
  setFieldValue,
  selectedIncomeData,
  setSelectedIncomeRows,
  errors,
  touched,
  selectedIncomeRows,
  selectedProviderResponsible,
  selectedProviderName,
  selectedMainProductsDetails
}: IBOIncomeInventoryGeneralDataProps) {

  const comments = "incomeRegisterInputs.comments";
  return (
    <section className={styles.providerform}>
      <h1 className="heading__main">Nuevo Ingreso</h1>
      <RegisterIncomeGeneralInputs
        selectedProviderName={selectedProviderName}
        selectedProviderResponsible={selectedProviderResponsible}
      />

      <h3 className={styles.heading__selecteds}>
        {selectedIncomeRows && selectedIncomeRows.length} Seleccionados
      </h3>

      <InventoryGeneralDataProductsComments
        selectedData={selectedIncomeData}
        setSelectedData={setSelectedIncomeRows}
        comments={comments}
        selectedMainProductsDetails={selectedMainProductsDetails}
      />

      <div className={styles["providerform__form-buttons"]}>
        <button
          type="button"
          className="button__primary-submit"
          onClick={handleBackStep}
        >
          Atras
        </button>
        <button type="submit" className="button__primary-blue">
          Continuar
        </button>
      </div>
    </section>
  );
}
