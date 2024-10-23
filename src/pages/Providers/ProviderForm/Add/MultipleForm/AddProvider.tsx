import { PatternFormat } from "react-number-format";
import { Field, ErrorMessage, FieldProps } from "formik";

import styles from "../../../ProviderForm.module.css";

//?SRC IMPORTS

//*HOOKS
import { useSectionProvider } from "@/hooks/useSectionProvider";

//*INTERFACES
import { IAddProviderProps } from "../../IProviderFormData";

export function AddProvider({ errors, touched }: IAddProviderProps) {
  const { setSectionName, handleBack } = useSectionProvider();
  return (
    <div className={styles["addProvider-container"]}>
      <div>
        <h1 className={styles.providerform__spacing}>Nuevo Proovedor</h1>
        <h2 className={styles.providerform__spacing}>Datos del Proovedor</h2>
      </div>
      <div className={styles["providerform__form-inputs"]}>
        <label
          htmlFor="providerFormData.enterprise_name"
          className={styles.providerform__label}
        >
          Nombre de la empresa *
        </label>
        <Field
          type="text"
          name="providerFormData.enterprise_name"
          placeholder="Nombre de la empresa:"
          id="providerFormData.enterprise_name"
          className={`${styles["providerform__input-23"]} ${
            touched?.providerFormData?.enterprise_name &&
            errors?.providerFormData?.enterprise_name
              ? "input-error"
              : ""
          }`}
        />

        <ErrorMessage
          name="providerFormData.enterprise_name"
          component="div"
          className="error-provider"
        />
      </div>

      <div className={styles["providerform__form-inputs"]}>
        <label
          htmlFor="providerFormData.enterprise_RFC"
          className={styles.providerform__label}
        >
          RFC de la empresa
        </label>
        <Field
          type="text"
          name="providerFormData.enterprise_RFC"
          placeholder="RFC de la empresa:"
          id="providerFormData.enterprise_RFC"
          className={`${styles.providerform__input} ${
            touched?.providerFormData?.enterprise_RFC &&
            errors?.providerFormData?.enterprise_RFC
              ? "input-error"
              : ""
          }`}
        />
        <ErrorMessage
          name="providerFormData.enterprise_RFC"
          component="div"
          className="error"
        />
      </div>
      <div className={styles["providerform__formInputs-container"]}>
        <div className={styles["providerform__form-inputsCustom"]}>
          <label
            htmlFor="providerFormData.phone"
            className={styles.providerform__label}
          >
            Celular
          </label>
          <Field name="providerFormData.phone">
            {({ field }: FieldProps) => (
              <PatternFormat
                format="###-###-####"
                mask="_"
                placeholder="555-555-5555"
                id="providerFormData.phone"
                className={`${styles.providerform__input} ${
                  touched?.providerFormData?.phone &&
                  errors?.providerFormData?.phone
                    ? "input-error"
                    : ""
                }`}
                {...field}
              />
            )}
          </Field>
          <ErrorMessage
            name="providerFormData.phone"
            component="div"
            className="error"
          />
        </div>
        <div className={styles["providerform__form-inputsCustom"]}>
          <label
            htmlFor="providerFormData.fixed_phone"
            className={styles.providerform__label}
          >
            Telefono fijo
          </label>
          <Field name="providerFormData.fixed_phone">
            {({ field }: FieldProps) => (
              <PatternFormat
                format="###-###-####"
                mask="_"
                placeholder="555-555-5555"
                id="providerFormData.fixed_phone"
                className={`${styles.providerform__input} ${
                  touched?.providerFormData?.fixed_phone &&
                  errors?.providerFormData?.fixed_phone
                    ? "input-error"
                    : ""
                }`}
                {...field}
              />
            )}
          </Field>
          <ErrorMessage
            name="providerFormData.fixed_phone"
            component="div"
            className="error"
          />
        </div>
      </div>

      <div className={styles["providerform__form-buttons"]}>
        <button
          type="button"
          onClick={() => {
            handleBack();
            setSectionName("providers");
          }}
          className={styles.providerform__submit}
        >
          Cancelar
        </button>
        <button type="submit" className={styles.providerform__submit}>
          Continuar
        </button>
      </div>
    </div>
  );
}
