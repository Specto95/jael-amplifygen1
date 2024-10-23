import { Field, ErrorMessage, FieldProps } from "formik";

import styles from "../../UpdateProvider.module.css";

import { PatternFormat } from "react-number-format";

export function EditEnterpriseData() {
  return (
    <>
      <div className={styles.providerInfo__container}>
        <div className={styles.flex__info}>
          <label
            htmlFor="enterprise_name"
            className={styles.providerInfo__name}
          >
            Nombre de la empresa:{" "}
          </label>
          <Field
            className={styles["providerInfo__data-edit"]}
            type="text"
            name="enterprise_name"
            placeholder="Nombre de la empresa"
            id="enterprise_name"
          />

          <ErrorMessage
            name="enterprise_name"
            component="div"
            className="error"
          />
        </div>
        <div className={styles.flex__info}>
          <label htmlFor="phone" className={styles.providerInfo__name}>
            Celular:{" "}
          </label>
          <Field name="phone">
            {({ field }: FieldProps) => (
              <PatternFormat
                format="###-###-####"
                mask="_"
                placeholder="Ejemplo: 555-555-5555"
                id="phone"
                className={styles["providerInfo__data-edit"]}
                {...field}
              />
            )}
          </Field>
          <ErrorMessage name="phone" component="div" className="error" />
        </div>
      </div>
      <div className={styles.providerInfo__container}>
        <div className={styles.flex__info}>
          <label htmlFor="enterprise_RFC" className={styles.providerInfo__name}>
            RFC de la empresa:{" "}
          </label>
          <Field
            className={styles["providerInfo__data-edit"]}
            type="text"
            name="enterprise_RFC"
            placeholder="RFC de la empresa"
            id="enterprise_RFC"
          />
          <ErrorMessage
            name="enterprise_RFC"
            component="div"
            className="error"
          />
        </div>
        <div className={styles.flex__info}>
          <label htmlFor="fixed_phone" className={styles.providerInfo__name}>
            Telefono Fijo:{" "}
          </label>

          <Field name="fixed_phone">
            {({ field }: FieldProps) => (
              <PatternFormat
                format="###-###-####"
                mask="_"
                placeholder="Ejemplo: 555-555-5555"
                id="fixed_phone"
                className={styles["providerInfo__data-edit"]}
                {...field}
              />
            )}
          </Field>
          <ErrorMessage name="fixed_phone" component="div" className="error" />
        </div>
      </div>
      <div className={styles.providerInfo__container}>
        <div className={styles.flex__info}>
          <label htmlFor="type" className={styles.providerInfo__name}>
            Tipo de Proveedor:{" "}
          </label>
          <Field
            as="select"
            className={styles["providerInfo__select-edit"]}
            name="type"
            id="type"
          >
            <option value="product">Producto</option>
          </Field>
          <ErrorMessage name="type" component="div" className="error" />
        </div>
      </div>
    </>
  );
}
