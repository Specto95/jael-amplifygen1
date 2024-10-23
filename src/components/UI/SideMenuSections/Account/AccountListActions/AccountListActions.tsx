import { Link } from "react-router-dom";

import styles from "../Account.module.css";

//?SRC IMPORTS

//*ASSETS
import Delete from "@/assets/img/Delete.png";
import Edit from "@/assets/img/Edit.svg";

//*INTERFACES
import { IAccountListActionsProps } from "./interfaces/IAccountListActions";

export function AccountListActions({
  cell,
  listAccounts,
}: IAccountListActionsProps) {
  const handleDelete = async () => {
    if (confirm(`¿Estas seguro de eliminar el  ${cell.row.original.name}?`)) {
    }
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
