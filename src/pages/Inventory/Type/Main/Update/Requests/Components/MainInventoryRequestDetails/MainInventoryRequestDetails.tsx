import { MainInventoryRequestDetailsProps } from "./interface/MainInventoryRequestDetails.d";

import styles from "../../../../InventoryForm.module.css";
import { GeneralBackFinish } from "@/components/UI/GenericComponents/BackFinish/GeneralBackFinish";
import { MainInventoryUserDetails } from "../MainInventoryUserDetails/MainInventoryUserDetails";
import { MainInventoryDataCommentsDetails } from "../MainInventoryDataCommentsDetails/MainInventoryDataCommentsDetails";
import { InventoryListTableSpinner } from "@/components/UI/Spinners/Providers/InventoryListTableSpinner";

import { useSessionProvider } from "@/hooks/useSessionProvider";
import {
  IOBOInventoryToSubmitStatus,
  IOInventoryFinishStatus,
  IOInventoryStatus,
  IOMainInventoryToSubmitStatus,
  RoleType,
} from "@/API";
import { isIOInventoryFinishStatus } from "../../helpers/functions";

export function MainInventoryRequestDetails({
  listMainInventoryRequestDetails,
  setFieldValue,
  values,
  isLoading,
  errors,
  touched,
  rejected,
  setRejected,
  setSubmittedStatus,
  defaultStatus,
}: MainInventoryRequestDetailsProps) {
  const { rolID } = useSessionProvider();

  return (
    <section className="section__form">
      {isLoading ? (
        <InventoryListTableSpinner />
      ) : (
        <>
          <h1 className="heading__main">
            Petición de Ingreso a Sucursal -{" "}
            {listMainInventoryRequestDetails?.branchOfficeName}
          </h1>
          <MainInventoryUserDetails
            providerName={listMainInventoryRequestDetails?.providerName}
            providerResponsibleName={
              listMainInventoryRequestDetails?.providerResponsibleName
            }
          />
          <h3 className={styles.heading__selecteds}>
            {
              listMainInventoryRequestDetails
                ?.incomeInventoryProductQuantitiesRequest.length
            }{" "}
            Seleccionados
          </h3>
          {listMainInventoryRequestDetails
            ?.incomeInventoryProductQuantitiesRequest.length ? (
            <MainInventoryDataCommentsDetails
              mainInventoryData={
                listMainInventoryRequestDetails.incomeInventoryProductQuantitiesRequest
              }
              comments={listMainInventoryRequestDetails.comments}
              values={values}
              setFieldValue={setFieldValue}
              errors={errors}
              touched={touched}
              rejected={rejected}
              setRejected={setRejected}
              isSubmitting={
                rolID === RoleType.ADMIN
                  ? // ![
                    //     IOInventoryStatus.CANCELED,
                    //     IOInventoryStatus.FAILED,
                    //     IOInventoryStatus.RETURNED,
                    //     IOInventoryStatus.RETURNING,
                    //     IOInventoryStatus.DELIVERED,
                    //   ].includes(defaultStatus.current)

                    [
                      IOInventoryStatus.PROCESSING,
                      IOInventoryStatus.IN_TRANSIT,
                      IOInventoryStatus.RETURNING,
                    ].includes(defaultStatus.current)
                  : rolID === RoleType.BRANCHMANAGER
                  ? defaultStatus.current === IOInventoryStatus.IN_TRANSIT
                  : false
              }
              //!CHANGE ISSUBMITTING VALIDATION WHEN BRANCHMANAGER IS PROCESSING.
              rejectedReason={listMainInventoryRequestDetails?.rejectedReason}
              setSubmittedStatus={setSubmittedStatus}
              defaultStatus={defaultStatus}
            />
          ) : (
            <></>
          )}
          <GeneralBackFinish
            setFieldValue={setFieldValue}
            popUpMessage="¿Estas seguro de realizar el envio?"
            toBeFinished={
             rolID === RoleType.ADMIN ?
              defaultStatus.current !== values.status &&
                    (values.status === IOInventoryStatus.IN_TRANSIT ||
                      values.status === IOInventoryStatus.RETURNED) ||
                  (values.status === IOInventoryStatus.CANCELED &&
                    !errors.rejectReason)
                : 
                rolID === RoleType.BRANCHMANAGER
                ? defaultStatus.current !== values.status &&
                    (values.status === IOInventoryStatus.RETURNING &&
                    !errors.rejectReason) ||
                  values.status === IOInventoryStatus.DELIVERED
                : false
            }
            isSubmitting={
              defaultStatus.current !== values.status &&
              rolID === RoleType.ADMIN
                ? (values.status as IOInventoryStatus) in
                  IOMainInventoryToSubmitStatus
                : rolID === RoleType.BRANCHMANAGER
                ? defaultStatus.current !== values.status &&
                  (values.status as IOInventoryStatus) in
                    IOBOInventoryToSubmitStatus
                : // Object.values(IOMainInventoryToSubmitStatus).includes(
                  //   values.status
                  // )
                  false
            }
          />
        </>
      )}
    </section>
  );
}
