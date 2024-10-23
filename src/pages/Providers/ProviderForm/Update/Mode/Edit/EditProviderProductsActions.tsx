import { Link } from "react-router-dom";

import styles from "../../UpdateProvider.module.css";

//?SRC IMPORTS

//*ASSETS
import Delete from "@/assets/img/Delete.png";
import Edit from "@/assets/img/Edit.svg";

//*INTERFACES
import { IEditProviderProductsActionsProps } from "@/interfaces/Providers/providers";

export function EditProviderProductsActions({
  cell,
  setUpdateProductsData,
  updateProductsData,
}: IEditProviderProductsActionsProps) {
  const handleDelete = async () => {
    if (
      confirm(
        `¿Estas seguro de eliminar el producto ${cell.row.original.name}?`
      )
    ) {
      try {
        setUpdateProductsData(
          updateProductsData.filter(
            (product) => product.id !== cell.row.original.id
          )
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className={styles.flex__spacing}>
      <Link to={``}>
        <img src={Edit} alt="Edit" />
      </Link>
      <button className={styles["tableData-btnDelete"]} onClick={handleDelete}>
        <img src={Delete} alt="Delete" />
      </button>
    </div>
  );
}
