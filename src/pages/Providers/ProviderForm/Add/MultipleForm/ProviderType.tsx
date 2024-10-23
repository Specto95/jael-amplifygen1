import { useEffect } from "react";

import styles from "../../../ProviderForm.module.css";

import { IProviderType } from "../../IProviderFormData";

export function ProviderType({
  setProviderType,
  handleProviderType,
  setFieldValue,
  enterprise_name,
  setSelectedRows,
}: IProviderType) {
  useEffect(() => {
    if (setProviderType) {
      setProviderType("");
      setSelectedRows && setSelectedRows([]);
    }
    //? CLEAR RESPONSIBLES IF THE USER RETURNS TO THIS STEP
    setFieldValue!("responsibles", []);
  }, []);

  const handleType = (type: "service" | "product") => {
    if (handleProviderType) {
      handleProviderType(type);
    }
    if (setFieldValue) {
      setFieldValue("type", type);
    }
  };

  return (
    <div className={styles["providerType-container"]}>
      <h1 className={styles.providerform__enterpriseName}>{enterprise_name}</h1>
      <div className={styles["providerform__label-custom"]}>
        Tipo de proovedor
      </div>
      <div className={styles["providerform__form-buttonsType"]}>
        <button
          type="button"
          onClick={() => handleType("service")}
          className={styles["providerform__buttonType"]}
        >
          Servicio
        </button>
        <button
          onClick={() => handleType("product")}
          type="button"
          className={styles["providerform__buttonType"]}
        >
          Productos
        </button>
      </div>
    </div>
  );
}