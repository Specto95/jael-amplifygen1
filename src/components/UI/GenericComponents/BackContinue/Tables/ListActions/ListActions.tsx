//*ASSETS
import Delete from "@/assets/img/Delete.png";
import Edit from "@/assets/img/Edit.svg";

import { IListActionsProps } from "@/interfaces/SideMenuSections/genericComponents";

import { Link } from "react-router-dom";

import styles from "./ListActions.module.css";


export function ListActions({ cell, handleDelete }: IListActionsProps) {
  return (
    <div className={styles.ListActions__container}>
      <Link to={`/products/update/${cell.row.original.id}`}>
        <img src={Edit} alt="Edit" />
      </Link>
      <button className={styles.ListActions__delete} onClick={handleDelete}>
        <img src={Delete} alt="Delete" />
      </button>
    </div>
  );
}
