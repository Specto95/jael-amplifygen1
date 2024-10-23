import styles from "../../../../../../InventoryForm.module.css";

import { IConfirmOutcomeInventoryProps } from "@/interfaces/Inventory/inventory";

import { ConfirmInputs } from "./ConfirmInputs";
import { ConfirmIncomeInventoryProductsTable } from "./ConfirmOutcomeInventoryProductsTable";
import { useEffect } from "react";
import { ISelectedOutcomeBranchOfficeProductsIDObj } from "@/pages/Inventory/Type/Main/Add/interfaces/IInventoryGeneralForm";

export function ConfirmOutcomeInventory({
  handleBackStep,
  setFieldValue,
  selectedOutcomeData,
  setSelectedOutcomeRows,
  values,
  selectedPreviousOutcomeRows,
  selectedBranchOffice,
  setSelectedOutcomeBranchOfficeProductsID,
}: IConfirmOutcomeInventoryProps) {
  useEffect(() => {
    const fetchListSelectedOutcomeInventoryProductID = async () => {
      //! UPDATING PRODUCT QUANTITY FROM THE SELECTED BRANCHOFFICE-INVENTORY
      if (selectedBranchOffice?.inventoryID) {
        const { clientAPI } = await import("@/utils/amplifyAPI/client");
        const { listSelectedOutcomeInventoryProductIDAPI } = await import(
          "@/graphql/queries"
        );

        //?CONFIRM THIS API AMPLIFYV6
        const result: ISelectedOutcomeBranchOfficeProductsIDObj[] =
          await Promise.all(
            selectedPreviousOutcomeRows!.map(async (productID) => {
              const selectedResult: any = await clientAPI(
                listSelectedOutcomeInventoryProductIDAPI,
                {
                  filter: {
                    inventoryID: { eq: selectedBranchOffice.inventoryID },
                    and: { productID: { eq: productID.id } },
                  },
                }
              );

              const inventoryProduct =
                selectedResult.data.listInventoryProducts.items[0];
              return {
                inventoryProductID: inventoryProduct.id,
                productID: inventoryProduct.product.id,
                quantity: inventoryProduct.quantity,
              };
            })
          );

        setSelectedOutcomeBranchOfficeProductsID(result);
      }
    };

    fetchListSelectedOutcomeInventoryProductID();
  }, []);

  return (
    <section className={styles.providerform}>
      <h1 className="heading__main">Nuevo Egreso</h1>
      <h2 className="heading__primary">
        Confirmar salida de los siguientes productos de
      </h2>
      <ConfirmInputs values={values} />

      <ConfirmIncomeInventoryProductsTable
        selectedOutcomeData={selectedOutcomeData}
        setSelectedOutcomeRows={setSelectedOutcomeRows}
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
