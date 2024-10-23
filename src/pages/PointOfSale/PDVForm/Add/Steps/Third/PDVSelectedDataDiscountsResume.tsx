import { useState } from "react";
import { useTable, useSortBy } from "react-table";

import styles from "../First/ViewImages.module.css";
import styles2 from "../../PDVGeneralForm.module.css";

import ArrowDown from "@/assets/img/ArrowDown.png";

import { IPDVSelectedDataProps } from "@/interfaces/PDV/PDV";
import { IListProductsPDVAPI } from "../First/api/interfaces/IUseListProductsPDV";

import { commaSeparator } from "@/utils/commaSeparator";
import { PDVColumnsTableData } from "@/utils/globalObjs/sideMenuSections/PointOfSale/PointOfSaleObjs";

export function PDVSelectedDataDiscountsResume({
  selectedData,
  setSelectedData,
  columns,
  previousData,
}: IPDVSelectedDataProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<IListProductsPDVAPI>({ columns, data: selectedData! }, useSortBy);

  return (
    <div className={styles["PDV__tableWrapperResume"]}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
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
                <tr
                  {...row.getRowProps()}
                  // onClick={() => {
                  //   console.log(row.original)
                  // }}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        onClick={() => {
                          console.log(cell);
                        }}
                        className={
                          cell.column.id === PDVColumnsTableData.TOTAL ||
                          cell.column.id === PDVColumnsTableData.DISCOUNT
                            ? "td__noPadding"
                            : ""
                        }
                      >
                        {cell.column.id === PDVColumnsTableData.PRICE ||
                        cell.column.id === PDVColumnsTableData.SUBTOTAL ? (
                          `$${commaSeparator(cell.value)}`
                        ) : cell.column.id === PDVColumnsTableData.TOTAL ? (
                          <div
                            className={
                              cell.column.id === PDVColumnsTableData.TOTAL
                                ? styles2["PDVOrdersManagement__total"]
                                : ""
                            }
                          >
                            ${commaSeparator(cell.value)}
                          </div>
                        ) : cell.column.id === PDVColumnsTableData.DISCOUNT ? (
                          <div
                            className={styles2["PDVOrdersManagement__total"]}
                          >
                            {cell.value}%
                          </div>
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
