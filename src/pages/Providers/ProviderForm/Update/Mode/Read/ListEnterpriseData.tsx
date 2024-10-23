import styles from "../../UpdateProvider.module.css";

import { IListEnterpriseDataProps } from "@/interfaces/Providers/providers";

export function ListEnterpriseData({
  enterpriseData,
}: IListEnterpriseDataProps) {
  const { enterprise_name, enterprise_RFC, phone, fixed_phone, type } =
    enterpriseData;
  return (
    <>
      <div className={styles.providerInfo__container}>
        <div className={styles.flex__info}>
          <h3 className={styles.providerInfo__name}>Nombre de la empresa: </h3>
          <div className={styles.providerInfo__data}>{enterprise_name}</div>
        </div>
        <div className={styles.flex__info}>
          <h3 className={styles.providerInfo__name}>Celular: </h3>
          <div className={styles.providerInfo__data}>
            {phone || "No Proporcionado"}
          </div>
        </div>
      </div>
      <div className={styles.providerInfo__container}>
        <div className={styles.flex__info}>
          <h3 className={styles.providerInfo__name}>RFC de la empresa: </h3>
          <div className={styles.providerInfo__data}>{enterprise_RFC}</div>
        </div>
        <div className={styles.flex__info}>
          <h3 className={styles.providerInfo__name}>Telefono Fijo: </h3>
          <div className={styles.providerInfo__data}>
            {fixed_phone || "No Proporcionado"}
          </div>
        </div>
      </div>
      <div className={styles.providerInfo__container}>
        <div className={styles.flex__info}>
          <h3 className={styles.providerInfo__name}>Tipo de Proveedor: </h3>
          <select className={styles.providerInfo__select}>
            <option value="product">
              {type === "product" ? "Producto" : "Servicios"}
            </option>
          </select>
        </div>
      </div>
    </>
  );
}
