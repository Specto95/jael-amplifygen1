import { BackContinue } from "@/components/UI/GenericComponents/BackContinue/BackContinue";
import {
  OutcomeCostType,
  OutcomeCostTypeSpanish,
} from "@/utils/globalObjs/sideMenuSections/Cash/CashObjs";
import { ErrorMessage, Field } from "formik";
import { IOutcomePaymentServiceProps } from "./interfaces/IOutcomePaymentService";

export function OutcomePaymentService({
  handleBackStep,
  handleNextStep,
}: IOutcomePaymentServiceProps) {
  return (
    <>
      <div className="flexColumn__spacing">
        <div className="flex__spacing2-MY">
          <label htmlFor="name" className="label__sm">
            Nombre
          </label>
          <Field
            type="text"
            name="name"
            placeholder="Nombre del Pago: "
            id="name"
            className="input__min300SecondaryRoundedSMB3"
          />
          <ErrorMessage
            name="name"
            component="div"
            className="error_responsibles"
          />
        </div>

        <div className="flex__spacing2-MY">
          <label htmlFor="description" className="label__sm">
            Descripción
          </label>
          <Field
            as="textarea"
            name="description"
            placeholder="Nombre del Pago: "
            id="description"
            className="input__min300SecondaryRoundedSMB3"
            style={{ height: "200px" }}
          />
          <ErrorMessage
            name="description"
            component="div"
            className="error_responsibles"
          />
        </div>

        <div className="flex__spacing2-MY">
          <label htmlFor="costType" className="label__sm">
            Tipo de Costo
          </label>
          <Field
            as="select"
            name="costType"
            placeholder="Nombre del Pago: "
            id="costType"
            className="input__min300SecondaryRoundedSMB3"
          >
            <option value={OutcomeCostType.FIXED}>
              {OutcomeCostTypeSpanish.FIXED}
            </option>
            <option value={OutcomeCostType.VARIABLE}>
              {OutcomeCostTypeSpanish.VARIABLE}
            </option>
          </Field>
          <ErrorMessage
            name="costType"
            component="div"
            className="error_responsibles"
          />
        </div>

        <div className="flex__spacing2-MY">
          <label htmlFor="quantity" className="label__sm">
            Cantidad
          </label>
          <Field
            type="number"
            name="quantity"
            min="0"
            
            placeholder="Cantidad: "
            id="quantity"
            className="input__min300SecondaryRoundedSMB3"
          />
          <ErrorMessage
            name="quantity"
            component="div"
            className="error_responsibles"
          />
        </div>
      </div>

      <BackContinue
        customNextStepText="Pagar"
        customBackStepText="Cancelar"
        handleBackStep={handleBackStep}
      />
    </>
  );
}
