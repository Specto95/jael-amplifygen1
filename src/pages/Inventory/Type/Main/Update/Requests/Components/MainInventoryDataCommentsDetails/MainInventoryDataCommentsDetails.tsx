import { MainInventoryDataCommentsDetailsProps } from "./interfaces/MainInventoryDataCommentsDetails.d";
import { ShowSelectedTableData } from "@/components/UI/GenericComponents/Table/SelectedData/ShowSelectedTableData";
import { mainInventoryProductsColumns } from "./Columns/MainInventoryProductsColumns";
import { StatusSelect } from "./StatusSelect";
import {
  IOInventoryStatus,
  IOMainInventorySelectStatus,
  RoleType,
} from "@/API";
import { RejectedReason } from "./RejectedReason";

import { useSessionProvider } from "@/hooks/useSessionProvider";

export function MainInventoryDataCommentsDetails({
  mainInventoryData,
  comments,
  setFieldValue,
  values,
  errors,
  touched,
  rejected,
  setRejected,
  isSubmitting,
  rejectedReason,
  setSubmittedStatus,
  defaultStatus,
}: MainInventoryDataCommentsDetailsProps) {
  const { rolID } = useSessionProvider();

  return (
    <>
      <ShowSelectedTableData
        Data={mainInventoryData}
        Columns={mainInventoryProductsColumns}
        hasBackground
      />
      <div className="flexColumn__fullMY">
        <p className="input__WFullTransparentTLRoundedSMB3">{comments}</p>
      </div>

      <StatusSelect
        values={values}
        setFieldValue={setFieldValue}
        rejected={rejected}
        setRejected={setRejected}
        isSubmitting={
          rolID == RoleType.ADMIN
            ? (defaultStatus.current as IOInventoryStatus) in
              IOMainInventorySelectStatus
            : isSubmitting
        }
        setSubmittedStatus={setSubmittedStatus}
        defaultStatus={defaultStatus}
      />

      {values.status === IOInventoryStatus.CANCELED ||
      values.status === IOInventoryStatus.RETURNING ||
      (rolID === RoleType.ADMIN &&
        values.status === IOInventoryStatus.RETURNED) ? (
        <RejectedReason
          rejectedReason="rejectReason"
          errors={errors}
          touched={touched}
          isSubmitting={
            rolID === RoleType.ADMIN
              ? defaultStatus.current !== values.status &&
                values.status === IOInventoryStatus.CANCELED
              : isSubmitting
          }
          rejectedReasonSubmitted={rejectedReason!}
          values={values}
        />
      ) : (
        <></>
      )}
    </>
  );
}
