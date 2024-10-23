import { useState } from "react";
import { useTable, useSortBy } from "react-table";

import styles from "../First/ViewImages.module.css";

import ArrowDown from "@/assets/img/ArrowDown.png";

import { IPDVAvailableDiscountsTableProps } from "@/interfaces/PDV/PDV";
import { IListProductsPDVAPI } from "../First/api/interfaces/IUseListProductsPDV";

import { QuantityCell } from "../First/PDVCards/QuantityCell";
import { PDVSelectedDataActions } from "../First/PDVCards/PDVSelectedDataActions";
import { commaSeparator } from "@/utils/commaSeparator";

export function PDVAvailableDiscountsTable({
  selectedData,
  setSelectedData,
  columns,
}: IPDVAvailableDiscountsTableProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<IListProductsPDVAPI>({ columns, data: selectedData! }, useSortBy);

  const updateQuantity = (rowIndex: number, newQuantity: number) => {
    setSelectedData!((prevRows: IListProductsPDVAPI[]) => {
      const updatedRows = prevRows.map((row, index) => {
        if (index === rowIndex) {
          return { ...row, quantity: newQuantity };
        }
        return row;
      });
      return updatedRows;
    });
  };

  return (
    <div className={styles["PDV__table-wrapper"]}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className={styles.PDV__tr}
            >
              {headerGroup.headers.map((column: any) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <div>
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          hovered === column ? (
                            <img
                              src={ArrowDown}
                              alt={"Flecha hacia arriba"}
                              className="rotateArrow180Deg"
                            />
                          ) : (
                            <img src={ArrowDown} alt={"Flecha hacia abajo"} />
                          )
                        ) : hovered === column ? (
                          <img src={ArrowDown} alt={"Flecha hacia abajo"} />
                        ) : (
                          <img
                            src={ArrowDown}
                            alt={"Flecha hacia arriba"}
                            className="rotateArrow180Deg"
                          />
                        )
                      ) : (
                        <img src={ArrowDown} alt={"Flecha hacia abajo"} />
                      )}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="center">
                No hay productos con descuento
              </td>
            </tr>
          ) : (
            rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>
                        {cell.column.id === "price" ? (
                          `$${commaSeparator(cell.value)}`
                        ) : cell.column.id === "quantity" ? (
                          <div className="flex__spacing2">
                            <QuantityCell
                              cell={cell}
                              index={row.index}
                              updateQuantity={(rowIndex, newQuantity) =>
                                updateQuantity(rowIndex, newQuantity)
                              }
                            />
                            <PDVSelectedDataActions
                              cell={cell}
                              setSelectedData={setSelectedData}
                            />
                          </div>
                        ) : cell.column.id === "hasDiscount" && !cell.value ? (
                          "No disponible"
                        ) : cell.column.id === "hasDiscount" && cell.value ? (
                          "Disponible"
                        ) : (
                          cell.render("Cell")
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
