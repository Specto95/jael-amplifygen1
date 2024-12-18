import { MainInventoryRequestDetailsProps } from "./interface/MainInventoryRequestDetails.d";

import styles from "../../../../InventoryForm.module.css";
import { GeneralBackFinish } from "@/components/UI/GenericComponents/BackFinish/GeneralBackFinish";
import { MainInventoryUserDetails } from "../MainInventoryUserDetails/MainInventoryUserDetails";
import { MainInventoryDataCommentsDetails } from "../MainInventoryDataCommentsDetails/MainInventoryDataCommentsDetails";
import { InventoryListTableSpinner } from "@/components/UI/Spinners/Providers/InventoryListTableSpinner";

import { useSessionProvider } from "@/hooks/useSessionProvider";
import { IOInventoryFinishStatus, IOInventoryStatus, RoleType } from "@/API";
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
                ![
                  IOInventoryStatus.CANCELED,
                  IOInventoryStatus.FAILED,
                  IOInventoryStatus.RETURNED,
                  IOInventoryStatus.DELIVERED,
                ].includes(listMainInventoryRequestDetails?.statusValue)
              }
              rejectedReason={listMainInventoryRequestDetails?.rejectedReason}
            />
          ) : (
            <></>
          )}

          <GeneralBackFinish
            setFieldValue={setFieldValue}
            popUpMessage="¿Estas seguro de realizar el envio?"
            toBeFinished={
              (rolID === RoleType.ADMIN &&
                values.status === IOInventoryStatus.IN_TRANSIT) ||
              (values.status === IOInventoryStatus.CANCELED &&
                !errors.rejectReason) ||
              (rolID === RoleType.BRANCHMANAGER &&
                values.status !== IOInventoryStatus.IN_TRANSIT)
            }
            isSubmitting={
              !isIOInventoryFinishStatus(
                listMainInventoryRequestDetails?.statusValue as unknown as IOInventoryFinishStatus
              )
            }

            // rejectedReason={listMainInventoryRequestDetails?.}
          />
        </>
      )}
    </section>
  );
}
