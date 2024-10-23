import { useState } from "react";

import Cancel from "@/assets/img/Cancel.png";
import Confirm from "@/assets/img/Confirm.png";

import styles from "../../UpdateProvider.module.css";

//?SRC IMPORTS

//*ASSETS
import Delete from "@/assets/img/Delete.png";
import Edit from "@/assets/img/Edit.svg";

//*INTERFACES
import { IEditResponsiblesActionsProps } from "@/interfaces/Providers/providers";

export function EditResponsiblesActions({
  cell,
  setUpdateResponsiblesData,
  updateResponsiblesData,
}: IEditResponsiblesActionsProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingRowId, setEditingRowId] = useState(null);

  const handleDelete = async () => {
    if (
      confirm(
        `¿Estas seguro de eliminar el encargado ${cell.row.original.name}?`
      )
    ) {
      try {
        setUpdateResponsiblesData(
          updateResponsiblesData.filter(
            (responsible) => responsible.id !== cell.row.original.id
          )
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      {isEditing ? (
        <div className={styles.flex__spacing}>
          <img
            src={Confirm}
            alt="Confirmar"
            className={styles.custom__button}
          />
          <img
            src={Cancel}
            alt="Cancelar"
            className={styles.custom__button}
            onClick={() => setIsEditing(false)}
          />
        </div>
      ) : (
        <div className={styles.flex__spacing}>
          <button type="button" onClick={() => setIsEditing(true)}>
            <img src={Edit} alt="Edit" />
          </button>
          <button
            className={styles["tableData-btnDelete"]}
            onClick={handleDelete}
          >
            <img src={Delete} alt="Delete" />
          </button>
        </div>
      )}
    </>
  );
}
