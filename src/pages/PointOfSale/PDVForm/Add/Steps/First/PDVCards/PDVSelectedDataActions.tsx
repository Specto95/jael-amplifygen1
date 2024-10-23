import styles from "../PDVActionsView.module.css";

//?SRC IMPORTS

//*ASSETS
import DeleteCross from "@/assets/img/DeleteCross.png";

//*INTERFACES
import { IPDVSelectedDataActionsProps } from "@/interfaces/PDV/PDV";

export function PDVSelectedDataActions({
  cell,
  setSelectedData,
  selectedData,
  setPreviousData,
  currentStepIndex,
}: IPDVSelectedDataActionsProps) {
  const handleDelete = async () => {
    if (
      confirm(
        `¿Estas seguro de eliminar el producto ${cell.row.original.name} del carrito?`
      )
    ) {
      setSelectedData!((prevRows: any) => {
        // if (currentStepIndex === 1 && selectedData?.length === 1) return prevRows;
        const updatedRows = prevRows.filter(
          (row: any) => row.id !== cell.row.original.id
        );
        return updatedRows;
      });
      setPreviousData!((prevRows: any) => {
        // if (currentStepIndex === 1 && selectedData?.length === 1) return prevRows;
        const updatedRows = prevRows.filter(
          (row: any) => row.id !== cell.row.original.id
        );
        return updatedRows;
      });
    }
  };

  return (
    <button
      type="button"
      className={styles["tableData-btnDelete"]}
      onClick={handleDelete}
    >
      <img
        className={styles.custom__imgWidthXL}
        src={DeleteCross}
        alt="Eliminar"
      />
    </button>
  );
}
