import { useState } from "react";
import { useTable, useSortBy } from "react-table";

import styles from "./PDVSelectedDataResume.module.css";

import {
  IPDVSelectedDataResumeProps,
} from "@/interfaces/PDV/PDV";
import { IListProductsPDVAPI } from "../First/api/interfaces/IUseListProductsPDV";

import ArrowDown from "@/assets/img/ArrowDown.png";
import { commaSeparator } from "@/utils/commaSeparator";

export function PDVSelectedDataResume({
  selectedData,
  columns,
}: IPDVSelectedDataResumeProps) {
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
                No hay productos seleccionados
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
