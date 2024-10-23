import { Link } from "react-router-dom";

import styles from "../Sales.module.css";

//?SRC IMPORTS

//*ASSETS
import Delete from "@/assets/img/Delete.png";
import Edit from "@/assets/img/Edit.svg";

//*INTERFACES
import { ISalesListActionsProps } from "./interfaces/ISalesListActions";
import { paths } from "@/utils/paths/paths";

export function SalesListActions({
  cell,
  Sales,
  setSales,
}: ISalesListActionsProps) {
  const handleDelete = async () => {
    if (
      confirm(
        `¿Estas seguro de eliminar esta operación de las ventas: ${cell.row.original.client}?`
      )
    ) {
    }
  };

  return (
    <div className={styles["tableData-btnContainer"]}>
      <Link to={`${paths.SALES.UPDATE}/${cell.row.original.id}`}>
        <img src={Edit} alt="Edit" />
      </Link>
      <button className={styles["tableData-btnDelete"]} onClick={handleDelete}>
        <img src={Delete} alt="Delete" />
      </button>
    </div>
  );
}
