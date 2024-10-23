import { IInventoryGeneralDataCommentsProps } from "@/interfaces/Inventory/inventory";
import { Field } from "formik";

export function InventoryGeneralDataComments({
  comments,
}: IInventoryGeneralDataCommentsProps) {
  return (
    <div className="flexColumn__fullMY">
      <Field
        as="textarea"
        name={comments}
        placeholder="Comentarios Adicionales:"
        id={comments}
        className="input__WFullBGSecondaryTLRoundedSMB4"
      />
    </div>
  );
}
