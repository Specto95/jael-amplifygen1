import { ErrorMessage, Field, FormikErrors, FormikTouched } from "formik";
import { UpdateMainIncomeRequestData } from "../../FormProps/initialValues/interfaces/UpdateMainIncomeRequestData";

interface RejectedReasonProps {
  rejectedReason: string;
  errors: FormikErrors<UpdateMainIncomeRequestData>;
  touched: FormikTouched<UpdateMainIncomeRequestData>;
  isSubmitting: boolean;
  rejectedReasonSubmitted: string;
}

export function RejectedReason({
  rejectedReason,
  errors,
  touched,
  isSubmitting,
  rejectedReasonSubmitted,
}: RejectedReasonProps) {
  return (
    <div className="flexColumnMY">
      <label htmlFor={rejectedReason} className="bold">
        Motivo del Rechazo
      </label>
      {isSubmitting ? (
        <>
          <Field
            as="textarea"
            name={rejectedReason}
            placeholder="Motivo del rechazo:"
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
