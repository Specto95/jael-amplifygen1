import { ErrorMessage, Field, FormikErrors, FormikTouched } from "formik";
import {
  UpdateMainBOIncomeRequestData,
  UpdateMainIncomeRequestData,
} from "../../FormProps/initialValues/interfaces/UpdateMainIncomeRequestData";
import { IOInventoryStatus } from "@/API";

interface RejectedReasonProps {
  rejectedReason: string;
  errors: FormikErrors<UpdateMainIncomeRequestData>;
  touched: FormikTouched<UpdateMainIncomeRequestData>;
  isSubmitting: boolean;
  rejectedReasonSubmitted: string;
  values: UpdateMainBOIncomeRequestData;
}

export function RejectedReason({
  rejectedReason,
  errors,
  touched,
  isSubmitting,
  rejectedReasonSubmitted,
  values,
}: RejectedReasonProps) {
  return (
    <div className="flexColumnMY">
      <label htmlFor={rejectedReason} className="bold">
        {values.status === IOInventoryStatus.CANCELED
          ? "Motivo del Rechazo"
          : "Motivo de la Devolución"}
      </label>
      {isSubmitting ? (
        <>
          <Field
            as="textarea"
            name={rejectedReason}
            placeholder="Escribe aquí:"
            id={rejectedReason}
            className={`input__min300TLRoundedSMB4 ${
              touched?.rejectReason && errors?.rejectReason ? "input-error" : ""
            }`}
            style={{
              height: "200px",
            }}
          />
          <ErrorMessage
            name={rejectedReason}
            component="div"
            className="error_start bold"
          />
        </>
      ) : (
        <p className="input__min300TLRoundedSMB4">{rejectedReasonSubmitted}</p>
      )}
    </div>
  );
}
