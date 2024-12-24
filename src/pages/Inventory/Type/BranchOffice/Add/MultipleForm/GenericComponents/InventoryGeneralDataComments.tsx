import { IInventoryGeneralDataCommentsProps } from "@/interfaces/Inventory/inventory";
import { Field } from "formik";

export function InventoryGeneralDataComments({
  comments,
}: IInventoryGeneralDataCommentsProps) {
  const outcomeComments = "incomeRegisterInputs.outcomeComments";

  return (
    <>
      {/* <div className="flexColumn__spacingMY">
        <label htmlFor={outcomeComments} className="label__blockFull">
          Comentarios Adicionales Egreso:
        </label>
        <Field
          as="textarea"
          name={outcomeComments}
          placeholder="Comentarios Adicionales Egreso:"
          id={outcomeComments}
          className="input__WFullBGSecondaryTLRoundedSMB4"
        />
      </div> */}
      <div className="flexColumn__spacingMY">
        <label htmlFor={comments} className="label__blockFull">
          Comentarios Adicionales:
        </label>
        <Field
          as="textarea"
          name={comments}
          placeholder="Comentarios Adicionales:"
          id={comments}
          className="input__WFullBGSecondaryTLRoundedSMB4"
        />
      </div>
    </>
  );
}
