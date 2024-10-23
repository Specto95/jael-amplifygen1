import { Link } from "react-router-dom";

import styles from "../BranchOffices.module.css";

//?SRC IMPORTS

//*ASSETS
import Delete from "@/assets/img/Delete.png";
import Edit from "@/assets/img/Edit.svg";

//*INTERFACES
import { IBranchOfficesListActionsProps } from "./interfaces/IBranchOfficesListActions";

export function BranchOfficesListActions({
  cell,
  listBranchOffices,
  setListBranchOffices,
}: IBranchOfficesListActionsProps) {
  const handleDelete = async () => {
    // if (
    //   confirm(
    //     `¿Estas seguro de eliminar comisión de la sucursal ${cell.row.original.name}?`
    //   )
    // ) {
    // }
  };

  return (
    <div className={styles["tableData-btnContainer"]}>
      <Link to={`/`}>
        <img src={Edit} alt="Edit" />
      </Link>
      <button className={styles["tableData-btnDelete"]} onClick={handleDelete}>
        <img src={Delete} alt="Delete" />
      </button>
    </div>
  );
}
