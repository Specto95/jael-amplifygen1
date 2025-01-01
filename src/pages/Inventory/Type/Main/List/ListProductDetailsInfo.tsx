import styles from "../InventoryForm.module.css";

import { IListProductDetailsProps } from "@/interfaces/Inventory/inventory";
import { formatKey } from "@/utils/helpers";

export function ListProductDetailsInfo({
  inventoryProductGeneralDetails,
  mostRecentIncomeDate,
  mostRecentOutcomeDate,
}: IListProductDetailsProps) {

  return (
    <div className="my-2">
      <h2 className="heading__main">
        ID de Producto -{" "}
        {formatKey(inventoryProductGeneralDetails.inventoryProductID)}
      </h2>
      {inventoryProductGeneralDetails && (
        <div className="flex__spacing2">
          <div className="flexColumn__spacing">
            <p className={styles.LPDetails__infoTitle}>Nombre de Producto</p>
            <p className={styles.LPDetails__info}>
              {inventoryProductGeneralDetails.productName}
            </p>
          </div>
          <div className="flexColumn__spacing">
            <p className={styles.LPDetails__infoTitle}>Cantidad Total</p>
            <p className={styles.LPDetails__info}>
              {inventoryProductGeneralDetails.inventoryProductQuantity}
            </p>
          </div>
        </div>
      )}
      <div className={styles.LPDDetails__productIO}>
        <div className={styles.LPDetails__grid}>
          <h2 className="heading__primary">Ingreso de Producto</h2>

          <div className="flex__spacing2">
            <div className="flexColumn__spacing">
              <p className="fs-xxlBold">
                ID - {formatKey(mostRecentIncomeDate.id || "N/A")}
              </p>
            </div>
            <div className="flexColumn__spacing">
              <p className={styles.LPDetails__infoTitle}>Ultima Fecha</p>
              <p className={styles.LPDetails__info}>
                {mostRecentIncomeDate.date}
              </p>
            </div>
            <div className="flexColumn__spacing">
              <p className={styles.LPDetails__infoTitle}>Cantidad Total</p>
              <p className={styles.LPDetails__info}>
                {mostRecentIncomeDate.quantity}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.LPDetails__grid}>
          <h2 className="heading__primary">Egreso de Producto</h2>

          <div className="flex__spacing2">
            <div className="flexColumn__spacing">
              <p className="fs-xxlBold">
                ID - {formatKey(mostRecentOutcomeDate.id || "N/A")}
              </p>
            </div>
            <div className="flexColumn__spacing">
              <p className={styles.LPDetails__infoTitle}>Ultima Fecha</p>
              <p className={styles.LPDetails__info}>
                {mostRecentOutcomeDate.date}
              </p>
            </div>

            <div className="flexColumn__spacing">
              <p className={styles.LPDetails__infoTitle}>Cantidad Total</p>
              <p className={styles.LPDetails__info}>
                {mostRecentOutcomeDate.quantity}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
