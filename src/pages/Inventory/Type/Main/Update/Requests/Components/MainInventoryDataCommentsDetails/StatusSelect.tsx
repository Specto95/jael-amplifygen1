import { ISetFieldValue } from "@/interfaces/SideMenuSections/general";
import {
  Rejected,
  UpdateMainIncomeRequestData,
} from "../../FormProps/initialValues/interfaces/UpdateMainIncomeRequestData";
import {
  IOBOInventoryRequestStatusValues,
  IOMainInventoryRequestStatusValues,
  IOInventoryStatus,
  IOInventoryStatusSpanish,
} from "@/API";
import { PrimaryHeading } from "@/components/UI/GenericComponents/Headings/Primary/PrimaryHeading";

interface StatusSelectProps extends ISetFieldValue {
  values: UpdateMainIncomeRequestData;
  rejected: Rejected;
  setRejected: Dispatch<SetStateAction<Rejected>>;
}

import { useSessionProvider } from "@/hooks/useSessionProvider";
import { Dispatch, SetStateAction, useEffect } from "react";

export function StatusSelect({
  setFieldValue,
  values,
  rejected,
  setRejected,
}: StatusSelectProps) {
  const { mainBranchInventory } = useSessionProvider();

  useEffect(() => {
    if (
      [IOInventoryStatus.CANCELED, IOInventoryStatus.FAILED].includes(
        values.status as IOInventoryStatus
      )
    ) {
      setRejected({ ...rejected, isRejected: true });
    } else {
      setRejected({ ...rejected, isRejected: false });
    }
  }, [values.status]);

  return (
    <>
      <PrimaryHeading title="Actualización Status" />
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
            ? IOMainInventoryRequestStatusValues
            : IOBOInventoryRequestStatusValues
        ).map((status) => (
          <option
            value={status}
            key={status}
            disabled={
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
    </>
  );
}
