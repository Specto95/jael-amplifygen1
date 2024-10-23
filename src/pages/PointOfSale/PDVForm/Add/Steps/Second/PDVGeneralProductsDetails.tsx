import { useState } from "react";
import { useTable, useSortBy } from "react-table";

import styles from "../ViewImages.module.css";

import ArrowDown from "@/assets/img/ArrowDown.png";

import { IPDVSelectedDataProps } from "@/interfaces/PDV/PDV";
import { IListProductsPDVAPI } from "../First/api/interfaces/IUseListProductsPDV";

import { commaSeparator } from "@/utils/commaSeparator";

export function PDVGeneralProductsDetails({
  selectedData,
  setSelectedData,
  columns,
  setPreviousData,
  previousData,
  currentStepIndex,
}: IPDVSelectedDataProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<IListProductsPDVAPI>({ columns, data: selectedData! }, useSortBy);

  const updateQuantity = (rowIndex: number, newQuantity: number) => {
    setSelectedData!((prevRows: IListProductsPDVAPI[]) => {
      const updatedRows = prevRows.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...row,
            quantity: newQuantity,
            withDiscount: false,
            discountPercentage: 0,
            totalDiscounted: 0,
            unitPrice: row.price,
            amountToPay: row.price * newQuantity,
          };
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
                {selectedData?.length !== previousData?.length
                  ? "No hay descuentos aplicados"
                  : "No hay productos seleccionados"}
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
                        {cell.column.id === "price"
                          ? `$${commaSeparator(cell.value)}`
                          : cell.render("Cell")}
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
