import { useMemo } from "react";
import { Column, useSortBy, useTable } from "react-table";

import styles from "../BOInventoryForm.module.css";

import { IncomeInventoryGeneralDataProductsTableColumns } from "./Columns/InventoryGeneralDataProductsColumns";
import { BOQuantityCell } from "../BOQuantityCell";
import { IInventoryGeneralDataProductsTableProps } from "@/interfaces/Inventory/inventory";

import { updateQuantity } from "@/components/UI/GenericComponents/Inputs/helpers/functions";
import { commaSeparator } from "@/utils/commaSeparator";
import { formatKey } from "@/utils/helpers";
import { InventoryColumnsObjs } from "@/pages/Inventory/Type/Main/helpers/inventoryColumnsObjs";

export function InventoryGeneralDataProductsTable({
  selectedData,
  setSelectedData,
  selectedPreviousOutcomeRows,
  selectedMainProductsDetails,
}: IInventoryGeneralDataProductsTableProps) {
  const data = useMemo(() => selectedData!, [selectedData]);
  const columns: Column<object>[] = useMemo(
    () => IncomeInventoryGeneralDataProductsTableColumns,
    []
  );

  const { getTableProps, getTableBodyProps, rows, prepareRow } = useTable(
    { columns, data },
    useSortBy
  );

  return (
    <>
      {selectedData!.length === 0 ? (
        <div className={styles["productProvider__list-container"]}>
          <h1 className="text-center">No hay productos Seleccionados</h1>
        </div>
      ) : (
        <div className={styles["table-wrapper"]}>
          <table {...getTableProps()} className={styles.table__spacing}>
            <tbody {...getTableBodyProps()}>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={columns.length} className="center">
                    No hay productos a seleccionar
                  </td>
                </tr>
              ) : (
                rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} className={styles.tr__bg}>
                      {row.cells.map((cell) => {
                        if (cell.column.id === InventoryColumnsObjs.quantity) {
                          return (
                            <td {...cell.getCellProps()}>
                              <BOQuantityCell
                                cell={cell}
                                index={row.index}
                                selectedIncomeData={selectedData}
                                updateQuantity={(rowIndex, newQuantity) =>
                                  updateQuantity(
                                    rowIndex,
                                    newQuantity,
                                    setSelectedData
                                  )
                                }
                                selectedPreviousOutcomeRows={
                                  selectedPreviousOutcomeRows
                                }
                                selectedMainProductsDetails={
                                  selectedMainProductsDetails
                                }
                              />
                            </td>
                          );
                        } else if (
                          cell.column.id ===
                            InventoryColumnsObjs.productProviderId &&
                          cell.value
                        ) {
                          return (
                            <td {...cell.getCellProps()}>
                              {formatKey(cell.value)}
                            </td>
                          );
                        } else if (cell.column.id === InventoryColumnsObjs.id) {
                          return (
                            <td
                              {...cell.getCellProps()}
                              className="td__rightBRadius"
                            >
                              <span className="bold">ID:</span>{" "}
                              {formatKey(cell.value)}
                            </td>
                          );
                        } else if (
                          cell.column.id === InventoryColumnsObjs.price
                        ) {
                          return (
                            <td {...cell.getCellProps()}>
                              ${commaSeparator(cell.value)}
                            </td>
                          );
                        } else {
                          return (
                            <td {...cell.getCellProps()}>
                              {cell.value || "N/A"}
                            </td>
                          );
                        }
                      })}
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
