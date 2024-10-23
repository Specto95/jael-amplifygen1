import { useState, useEffect } from "react";
import { PatternFormat } from "react-number-format";
import { Field, FieldProps, ErrorMessage } from "formik";

import styles2 from "../../BranchOfficeForm.module.css";

//?SRC IMPORTS
//*INTERFACES
import { IMexicanCities } from "@/interfaces/utils/mexicanStates";

import { useSectionProvider } from "@/hooks/useSectionProvider";

//*UTILS
import { toTitleCase } from "@/utils/helpers";
import MexicanStates from "@/utils/mexicanStates.json";
import MexicanCities from "@/utils/mexicanStatesMun.json";
import { IAddBranchOfficeProps } from "./interfaces/IAddBranchOffice";

export function AddBranchOffice({
  handleNextStep,
  setFieldValue,
}: IAddBranchOfficeProps): JSX.Element {
  const { handleBackTo } = useSectionProvider();
  const MexicanCitis = MexicanCities as IMexicanCities;
  const [cities, setCities] = useState<string[]>([]);
  const [selectedState, setSelectedState] = useState<string>("");

  useEffect(() => {
    if (selectedState) {
      setCities(MexicanCitis[selectedState]);
    } else {
      setCities([]);
    }
  }, [selectedState]);

  return (
    <section className={styles2.branchOfficeform}>
      <h1 className="heading__main">Agregar Sucursal</h1>
      <div className="flexColumn__fullMY">
        <label htmlFor="addBranchOffice.name" className="label__blockFull">
          Nombre Sucursal *
        </label>
        <Field
          type="text"
          name="addBranchOffice.name"
          placeholder="Nombre de Sucursal:"
          id="addBranchOffice.name"
          className="input__minQuarterRoundedSMB4"
        />
        <ErrorMessage
          name="addBranchOffice.name"
          component="div"
          className="error_start bold"
        />
      </div>

      <div className="flexColumn__fullMY">
        <label htmlFor="addBranchOffice.zipcode" className="label__blockFull">
          Codigo Postal
        </label>
        <Field name="addBranchOffice.zipcode">
          {({ field }: FieldProps) => (
            <PatternFormat
              format="#####"
              mask=""
              placeholder="Ejemplo: 63111"
              id="addBranchOffice.zipcode"
              className="input__minQuarterRoundedSMB4"
              {...field}
            />
          )}
        </Field>
        <ErrorMessage
          name="addBranchOffice.zipcode"
          component="div"
          className="error_start bold"
        />
      </div>
      <div className="flexColumn__fullMY">
        <label htmlFor="addBranchOffice.state" className="label__blockFull">
          Estado
        </label>
        <select
          name="addBranchOffice.state"
          id="addBranchOffice.state"
          className="input__minHalfRoundedSMB4"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedState(toTitleCase(e.target.value));
            setFieldValue!("addBranchOffice.state", selectedState);
          }}
        >
          <option value="" disabled>
            Elige tu estado:
          </option>
          {MexicanStates.map((state) => (
            <option key={state.clave} value={state.nombre}>
              {state.nombre}
            </option>
          ))}
        </select>
        <ErrorMessage
          name="state"
          component="div"
          className="error_start bold"
        />
      </div>
      <div className="flexColumn__fullMY">
        <label htmlFor="addBranchOffice.location" className="label__blockFull">
          Ciudad
        </label>
        <Field
          as="select"
          name="addBranchOffice.location"
          id="addBranchOffice.location"
          className="input__minHalfRoundedSMB4"
        >
          <option value="" disabled>
            Elegir Ciudad
          </option>
          {cities.map((city) => (
            <option key={city}>{city.toUpperCase()}</option>
          ))}
        </Field>
        <ErrorMessage
          name="addBranchOffice.location"
          component="div"
          className="error_start bold"
        />
      </div>
      <div className="flexColumn__fullMY">
        <label htmlFor="addBranchOffice.address" className="label__blockFull">
          Calle y Número
        </label>
        <Field
          type="text"
          name="addBranchOffice.address"
          placeholder="Calle y Número:"
          id="addBranchOffice.address"
          className="input__minHalfRoundedSMB4"
        />
        <ErrorMessage
          name="addBranchOffice.address"
          component="div"
          className="error_start bold"
        />
      </div>

      <div className="flexColumn__fullMY">
        <label htmlFor="addBranchOffice.phone" className="label__blockFull">
          Telefono
        </label>
        <Field name="addBranchOffice.phone">
          {({ field }: FieldProps) => (
            <PatternFormat
              format="###-###-####"
              mask="_"
              placeholder="Ejemplo: 555-555-5555"
              id="addBranchOffice.phone"
              className="input__minThirdRoundedSMB4"
              {...field}
            />
          )}
        </Field>
        <ErrorMessage
          name="addBranchOffice.phone"
          component="div"
          className="error_start bold"
        />
      </div>
      <div className="flexColumn__fullMY">
        <label
          htmlFor="addBranchOffice.branchOffice_commission"
          className="label__blockFull"
        >
          Comisión de Sucursal
        </label>
        <Field name="addBranchOffice.branchOffice_commission">
          {({ field }: FieldProps) => (
            <PatternFormat
              format="##"
              mask="_"
              placeholder="Ejemplo: 10%"
              id="addBranchOffice.branchOffice_commission"
              className="input__minThirdRoundedSMB4"
              {...field}
            />
          )}
        </Field>

        <ErrorMessage
          name="addBranchOffice.branchOffice_commission"
          component="div"
          className="error_start bold"
        />
      </div>
      <div className="flex__spacingJustifyEnd-MY">
        <button
          onClick={() => handleBackTo("branch-offices")}
          className="button__transparentXS2PX"
        >
          Cancelar
        </button>
        <button type="submit" className="button__transparentXS2PX">
          Continuar
        </button>
      </div>
    </section>
  );
}
