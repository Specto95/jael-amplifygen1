import { lazy } from "react";

import styles from "../../BranchOfficeForm.module.css";

//?SRC IMPORTS

import { BranchOfficeManagerColumns } from "../../Columns/BranchOfficeManagersColumns";

//* APIs
import { useListBranchOfficeManagers } from "./api/listBranchOfficeManagers";

//* HELPERS
import { IAddBranchOfficeManagersProps } from "./interfaces/IAddBranchOfficeManagersProps";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";

export function AddBranchOfficeManagers({
  handleBackStep,
  branchOfficeName,
  selectedRows,
  setSelectedRows,
  setFieldValue,
}: IAddBranchOfficeManagersProps) {
  const { listBranchOfficeManagers, isLoading } = useListBranchOfficeManagers();

  return (
    <div className={styles.branchOfficeform}>
      <div className={styles.branchOffice__descriptionContainer}>
        <h2>Sucursal</h2>
        <h3>{branchOfficeName}</h3>
      </div>
      <h2 className="heading__secondary">Agregar Encargado</h2>

      <ShowTableData
        Data={listBranchOfficeManagers}
        Columns={BranchOfficeManagerColumns}
        isLoading={isLoading}
        notFoundDataMessage="No se encontraron encargados"
        hasCheckRow={true}
        setData={setSelectedRows}
        selectedData={selectedRows!}
        hasBackground={true}
      />
      <div className={styles["providerform__form-buttons"]}>
        <button
          type="button"
          onClick={handleBackStep}
          className={styles["serviceProvider__cancel"]}
        >
          Atras
        </button>
        <button
          onClick={() => setFieldValue!("isSecondButton", true)}
          type="submit"
          className={styles["serviceProvider__finish"]}
        >
          Finalizar
        </button>
      </div>
    </div>
  );
}
