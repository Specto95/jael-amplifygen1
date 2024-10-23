import { Field, ErrorMessage } from "formik";

import styles from "../../../../ProviderForm.module.css";

import { IProviderHandlerSteps } from "../../../IProviderFormData";

export function ServiceProvider({
  handleBackStep,
  touched,
  errors,
  enterprise_name,
}: IProviderHandlerSteps) {
  return (
    <div className={styles["providerType-container"]}>
      <h1 className={styles.providerform__enterpriseName}>
        {enterprise_name}
        <p className={styles.serviceProvider__type}>Proovedor de Servicios</p>
      </h1>
      <div className={styles.serviceProvider__containers}>
        <label
          htmlFor="serviceProviderFormData.service_name"
          className={styles.serviceProvider__label}
        >
          Nombre *
        </label>
        <Field
          type="text"
          name="serviceProviderFormData.service_name"
          placeholder="Nombre del Servicio:"
          id="serviceProviderFormData.service_name"
          className={`${styles["serviceProvider__input"]} ${
            touched?.serviceProviderFormData?.service_name &&
            errors?.serviceProviderFormData?.service_name
              ? "input-error"
              : ""
          }`}
        />
      </div>
      <ErrorMessage
        name="serviceProviderFormData.service_name"
        component="div"
        className="error"
      />
      <div className={styles.serviceProvider__containers}>
        <label
          htmlFor="serviceProviderFormData.service_description"
          className={styles.serviceProvider__label}
        >
          Descripción
        </label>
        <Field
          component="textarea"
          name="serviceProviderFormData.service_description"
          placeholder="Descripción del Servicio:"
          id="serviceProviderFormData.service_description"
          className={styles["serviceProvider__input"]}
          style={{ height: "200px" }}
        />
        <ErrorMessage
          name="serviceProviderFormData.service_description"
          component="div"
          className="error"
        />
      </div>
      <div className={styles.serviceProvider__containers}>
        <label
          htmlFor="serviceProviderFormData.cost_type"
          className={styles.serviceProvider__label}
        >
          Tipo de Costo
        </label>
        <Field
          as="select"
          name="serviceProviderFormData.cost_type"
          placeholder="Nombre de la empresa:"
          id="serviceProviderFormData.cost_type"
          className={styles["serviceProvider__input"]}
        >
          <option value="" disabled>
            Elegir tipo de costo:
          </option>
          <option value="1">Fijo</option>
          <option value="2">Variable</option>
        </Field>
        <ErrorMessage
          name="serviceProviderFormData.cost_type"
          component="div"
          className="error"
        />
      </div>
      <div className={styles["providerform__form-buttons"]}>
        <button
          type="button"
          onClick={handleBackStep}
          className={styles["serviceProvider__cancel"]}
        >
          Cancelar
        </button>
        <button type="submit" className={styles["serviceProvider__next"]}>
          Continuar
        </button>
      </div>
    </div>
  );
}
