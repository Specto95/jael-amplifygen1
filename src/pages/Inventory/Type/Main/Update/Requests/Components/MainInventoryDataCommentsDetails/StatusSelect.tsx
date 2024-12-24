import { ISetFieldValue } from "@/interfaces/SideMenuSections/general";
import {
  Rejected,
  UpdateMainBOIncomeRequestData,
} from "../../FormProps/initialValues/interfaces/UpdateMainIncomeRequestData.d";
import {
  IOBOInventoryRequestStatusValues,
  IOMainInventoryRequestStatusValues,
  IOInventoryStatus,
  IOInventoryStatusSpanish,
  RoleType,
  IOMainInventoryRequestStatusReturningValues,
} from "@/API";
import { PrimaryHeading } from "@/components/UI/GenericComponents/Headings/Primary/PrimaryHeading";

interface StatusSelectProps extends ISetFieldValue {
  values: UpdateMainBOIncomeRequestData;
  rejected: Rejected;
  setRejected: Dispatch<SetStateAction<Rejected>>;
  isSubmitting: boolean;
  setSubmittedStatus: Dispatch<SetStateAction<IOInventoryStatus>>;
  defaultStatus: MutableRefObject<IOInventoryStatus>;
}

import { useSessionProvider } from "@/hooks/useSessionProvider";
import { Dispatch, MutableRefObject, SetStateAction, useEffect } from "react";

export function StatusSelect({
  setFieldValue,
  values,
  rejected,
  setRejected,
  isSubmitting,
  setSubmittedStatus,
  defaultStatus,
}: StatusSelectProps) {
  const { mainBranchInventory, rolID } = useSessionProvider();

  useEffect(() => {
    setSubmittedStatus(values.status);
    if (
      [
        IOInventoryStatus.CANCELED,
        IOInventoryStatus.FAILED,
        IOInventoryStatus.RETURNING,
        IOInventoryStatus.RETURNED,
      ].includes(values.status as IOInventoryStatus)
    ) {
      setRejected({ ...rejected, isRejected: true });
    } else {
      setRejected({ ...rejected, isRejected: false });
    }
  }, [values.status]);

  return (
    <>
      <PrimaryHeading title={`${isSubmitting ? "Actualización" : ""} Estado`} />
      {isSubmitting ||
      (rolID === RoleType.ADMIN &&
        values.status === IOInventoryStatus.RETURNING)  ? (
        <select
          className="input__min300TLRoundedSMB4"
          onChange={(e) => {
            setFieldValue!("status", e.target.value);
          }}
          value={values.status}
          style={{
            fontWeight: "bold",
          }}
        >
          <option value="" disabled>
            Selecciona un Nuevo Status:
          </option>
          {Object.keys(
            mainBranchInventory.id
              ? defaultStatus.current === IOInventoryStatus.RETURNING
                ? IOMainInventoryRequestStatusReturningValues
                : IOMainInventoryRequestStatusValues
              : IOBOInventoryRequestStatusValues
          ).map((status) => (
            <option
              value={status}
              key={status}
              disabled={
                status === defaultStatus.current ||
                status ===
                  (mainBranchInventory.id
                    ? IOInventoryStatus.PROCESSING
                    : IOInventoryStatus.IN_TRANSIT)
              }
            >
              {
                IOInventoryStatusSpanish[
                  status as keyof typeof IOInventoryStatusSpanish
                ]
              }
            </option>
          ))}
        </select>
      ) : (
        <p className="input__min300TLRoundedSMB4">
          {IOInventoryStatusSpanish[values.status]}
        </p>
      )}
    </>
  );
}
