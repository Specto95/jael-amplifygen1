import { Field, ErrorMessage, FieldProps } from "formik";
import { PatternFormat } from "react-number-format";

import styles from "../../../../../ProviderForm.module.css";

import { IAddOtherResponsiblesProps } from "@/pages/Providers/ProviderForm/IProviderFormData";

export function AddServiceResponsibleForm({
  errors,
  touched,
  index,
}: IAddOtherResponsiblesProps) {

  return (
    <>
      <div className={styles["addresponsible__form-container"]}>
        <div className={styles["addresponsible__form-fullnameContainer"]}>
          <div className="flexColumn">
            <label htmlFor="name" className={styles.serviceProvider__label}>
              Nombre *
            </label>
            <Field
              type="text"
              name={`responsibles.${index}.name`}
              placeholder="Nombre del Servicio:"
              id="name"
              className={`${styles["serviceProvider__input"]} ${
                Array.isArray(touched?.responsibles) &&
                Array.isArray(errors?.responsibles) &&
                touched?.responsibles[`${index}`]?.name &&
                errors?.responsibles[`${index}`]?.name
                  ? "input-error"
                  : ""
              }`}
            />
            <ErrorMessage
              name={`responsibles.${index}.name`}
              component="div"
              className="error_responsibles"
            />
          </div>
          <div className="flexColumn">
            <label
              htmlFor="second_name"
              className={styles.serviceProvider__label}
            >
              Segundo Nombre
            </label>
            <Field
              type="text"
              name={`responsibles.${index}.second_name`}
              placeholder="Nombre del Servicio:"
              id="second_name"
              className={`${styles["serviceProvider__input"]} ${
                Array.isArray(touched?.responsibles) &&
                Array.isArray(errors?.responsibles) &&
                touched?.responsibles[`${index}`]?.second_name &&
                errors?.responsibles[`${index}`]?.second_name
                  ? "input-error"
                  : ""
              }`}
            />
            <ErrorMessage
              name={`responsibles.${index}.second_name`}
              component="div"
              className="error_responsibles"
            />
          </div>
          <div className="flexColumn">
            <label htmlFor="lastname" className={styles.serviceProvider__label}>
              Primer Apellido *
            </label>
            <Field
              type="text"
              name={`responsibles.${index}.lastname`}
              placeholder="Nombre del Servicio:"
              id="lastname"
              className={`${styles["serviceProvider__input"]} ${
                Array.isArray(touched?.responsibles) &&
                Array.isArray(errors?.responsibles) &&
                touched?.responsibles[`${index}`]?.lastname &&
                errors?.responsibles[`${index}`]?.lastname
                  ? "input-error"
                  : ""
              }`}
            />
            <ErrorMessage
              name={`responsibles.${index}.lastname`}
              component="div"
              className="error_responsibles"
            />
          </div>
          <div className="flexColumn">
            <label
              htmlFor="second_lastname"
              className={styles.serviceProvider__label}
            >
              Segundo Apellido
            </label>
            <Field
              type="text"
              name={`responsibles.${index}.second_lastname`}
              placeholder="Nombre del Servicio:"
              id="second_lastname"
              className={`${styles["serviceProvider__input"]} ${
                Array.isArray(touched?.responsibles) &&
                Array.isArray(errors?.responsibles) &&
                touched?.responsibles[`${index}`]?.second_lastname &&
                errors?.responsibles[`${index}`]?.second_lastname
                  ? "input-error"
                  : ""
              }`}
            />
            <ErrorMessage
              name={`responsibles.${index}.second_lastname`}
              component="div"
              className="error_responsibles"
            />
          </div>
        </div>
        <div className={styles["addResponsible__form-userDetailsContainer"]}>
          <div>
            <label htmlFor="phone" className={styles.serviceProvider__label}>
              Celular
            </label>
            <Field name={`responsibles.${index}.phone`}>
              {({ field }: FieldProps) => (
                <PatternFormat
                  format="###-###-####"
                  mask="_"
                  placeholder="555-555-5555"
                  id="phone"
                  className={`${styles["serviceProvider__input"]} ${
                    Array.isArray(touched?.responsibles) &&
                    Array.isArray(errors?.responsibles) &&
                    touched?.responsibles[`${index}`]?.phone &&
                    errors?.responsibles[`${index}`]?.phone
                      ? "input-error"
                      : ""
                  }`}
                  {...field}
                />
              )}
            </Field>
            <ErrorMessage
              name={`responsibles.${index}.phone`}
              component="div"
              className="error_responsibles"
            />
          </div>
          {/* <div>
            <label htmlFor="CURP" className={styles.serviceProvider__label}>
              CURP
            </label>
            <Field
              type="text"
              name={`responsibles.${index}.CURP`}
              placeholder="CURP del encargado:"
              id="CURP"
              className={`${styles["serviceProvider__input"]} ${
                Array.isArray(touched?.responsibles) &&
                Array.isArray(errors?.responsibles) &&
                touched?.responsibles[`${index}`]?.CURP &&
                errors?.responsibles[`${index}`]?.CURP
                  ? "input-error"
                  : ""
              }`}
            />
            <ErrorMessage
              name={`responsibles.${index}.CURP`}
              component="div"
              className="error_responsibles"
            />
          </div> */}
        </div>
        <div className={styles["addResponsible__form-userDetailsContainer"]}>
          <div>
            <label htmlFor="RFC" className={styles.serviceProvider__label}>
              RFC
            </label>
            <Field
              type="text"
              name={`responsibles.${index}.RFC`}
              placeholder="RFC del encargado:"
              id="RFC"
              className={`${styles["serviceProvider__input"]} ${
                Array.isArray(touched?.responsibles) &&
                Array.isArray(errors?.responsibles) &&
                touched?.responsibles[`${index}`]?.RFC &&
                errors?.responsibles[`${index}`]?.RFC
                  ? "input-error"
                  : ""
              }`}
            />
            <ErrorMessage
              name={`responsibles.${index}.RFC`}
              component="div"
              className="error"
            />
          </div>
          {/* <div>
            <label htmlFor="gender" className={styles.serviceProvider__label}>
              Sexo
            </label>
            <Field
              as="select"
              name={`responsibles.${index}.gender`}
              id="gender"
              className={`${styles["serviceProvider__input"]} ${
                Array.isArray(touched?.responsibles) &&
                Array.isArray(errors?.responsibles) &&
                touched?.responsibles[`${index}`]?.gender &&
                errors?.responsibles[`${index}`]?.gender
                  ? "input-error"
                  : ""
              }`}
            >
              <option value="" disabled>
                Elegir Sexo
              </option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
            </Field>
            <ErrorMessage
              name={`responsibles.${index}.gender`}
              component="div"
              className="error"
            />
          </div> */}
        </div>
      </div>
      <div className={styles.divisor}></div>
    </>
  );
}
