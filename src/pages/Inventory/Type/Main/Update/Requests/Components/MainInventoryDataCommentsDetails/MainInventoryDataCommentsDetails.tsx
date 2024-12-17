import { MainInventoryDataCommentsDetailsProps } from "./interfaces/MainInventoryDataCommentsDetails.d";
import { ShowSelectedTableData } from "@/components/UI/GenericComponents/Table/SelectedData/ShowSelectedTableData";
import { mainInventoryProductsColumns } from "./Columns/MainInventoryProductsColumns";
import { StatusSelect } from "./StatusSelect";
import { IOInventoryStatus } from "@/API";
import { RejectedReason } from "./RejectedReason";

export function MainInventoryDataCommentsDetails({
  mainInventoryData,
  comments,
  setFieldValue,
  values,
  errors,
  touched,
  rejected,
  setRejected,
}: MainInventoryDataCommentsDetailsProps) {
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
      />

      {values.status === IOInventoryStatus.CANCELED ? (
        <RejectedReason
          rejectedReason="rejectReason"
          errors={errors}
          touched={touched}
        />
      ) : (
        <></>
      )}
    </>
  );
}
