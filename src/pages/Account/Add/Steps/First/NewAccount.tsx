import { INewAccountProps } from "@/interfaces/Account/account";
import { Field, ErrorMessage, FieldProps } from "formik";
import { PatternFormat } from "react-number-format";

import { useSectionProvider } from "@/hooks/useSectionProvider";

export function NewAccount({
  errors,
  touched,
  setErrors,
  setFieldValue,
}: INewAccountProps) {
  const handleErrors = () => {
    if (Object.keys(errors!).includes("RFC")) {
      let updatedErrors = { ...errors };
      delete updatedErrors["RFC"];
      setFieldValue!("RFC", "");
      setErrors!(updatedErrors);
    }
  };

  const { handleBackTo } = useSectionProvider();

  return (
    <section className="generalForm">
      <h1 className="heading__main">Nueva Cuenta</h1>
      <h2 className="heading__primary">Datos del usuario</h2>

      <div className="grid42__spacingMY">
        <div className="flexColumn__spacingXS">
          <label htmlFor="name" className="label__WLB500FLG">
            Nombre
          </label>
          <Field
            type="text"
            name="name"
            placeholder="Primer Nombre: "
            id="name"
            className={`input__WFullTransparentTLRoundedSMB3 ${
              touched?.name && errors?.name ? "input-error" : ""
            }`}
          />
          <ErrorMessage
            name="name"
            component="div"
            className="error_responsibles"
          />
        </div>
        <div className="flexColumn__spacingXS">
          <label htmlFor="second_name" className="label__WLB500FLG">
            Segundo Nombre
          </label>
          <Field
            type="text"
            name="second_name"
            placeholder="Segundo Nombre: "
            id="second_name"
            className={`input__WFullTransparentTLRoundedSMB3 ${
              touched?.second_name && errors?.second_name ? "input-error" : ""
            }`}
          />
          <ErrorMessage
            name="second_name"
            component="div"
            className="error_responsibles"
          />
        </div>
        <div className="flexColumn__spacingXS">
          <label htmlFor="lastname" className="label__WLB500FLG">
            Primer Apellido
          </label>
          <Field
            type="text"
            name="lastname"
            placeholder="Primer Apellido: "
            id="lastname"
            className={`input__WFullTransparentTLRoundedSMB3 ${
              touched?.lastname && errors?.lastname ? "input-error" : ""
            }`}
          />
          <ErrorMessage
            name="lastname"
            component="div"
            className="error_responsibles"
          />
        </div>
        <div className="flexColumn__spacingXS">
          <label htmlFor="second_lastname" className="label__WLB500FLG">
            Segundo Apellido
          </label>
          <Field
            type="text"
            name="second_lastname"
            placeholder="Segundo Apellido: "
            id="second_lastname"
            className={`input__WFullTransparentTLRoundedSMB3 ${
              touched?.second_lastname && errors?.second_lastname
                ? "input-error"
                : ""
            }`}
          />
          <ErrorMessage
            name="second_lastname"
            component="div"
            className="error_responsibles"
          />
        </div>
      </div>
      <div className="flex__spacingMY">
        <div className="flexColumn__Basis1spacingXS">
          <label htmlFor="phone" className="label__WLB500FLG">
            Telefono
          </label>
          <Field name="phone">
            {({ field }: FieldProps) => (
              <PatternFormat
                format="###-###-####"
                mask="_"
                placeholder="Ejemplo: 555-555-5555"
                id="phone"
                className={`input__WFullTransparentTLRoundedSMB3 ${
                  touched?.phone && errors?.phone ? "input-error" : ""
                }`}
                {...field}
              />
            )}
          </Field>
          <ErrorMessage name="phone" component="div" className="error" />
        </div>

        <div className="flexColumn__Basis1spacingXS">
          <label htmlFor="RFC" className="label__WLB500FLG">
            RFC
          </label>
          <Field
            className={`input__WFullTransparentTLRoundedSMB3 ${
              touched?.RFC && errors?.RFC ? "input-error" : ""
            }`}
            type="text"
            name="RFC"
            placeholder="RFC de la empresa"
            maxLength={13}
            id="RFC"
          />
          <ErrorMessage name="RFC" component="div" className="error" />
        </div>
      </div>
      <div className="flexColumn__spacingXS">
        <label htmlFor="gender" className="label__WLB500FLG">
          Sexo
        </label>
        <Field
          as="select"
          name="gender"
          id="gender"
          className={`input__min300TransparentRoundedSMB3 ${
            touched?.gender && errors?.gender ? "input-error" : ""
          }`}
        >
          <option value="" disabled>
            Elegir Sexo
          </option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </Field>
        <ErrorMessage name="gender" component="div" className="error" />
      </div>
      <div className="flex__spacingJustifyEnd-MY">
        <button type="button" className="button__primary-cancel"
          onClick={() => handleBackTo("account")}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="button__primary-blue"
          onClick={handleErrors}
        >
          Siguiente
        </button>
      </div>
    </section>
  );
}
