import { useMemo, useState } from "react";
import { useTable, useSortBy, Column } from "react-table";

import ArrowDown from "@/assets/img/ArrowDown.png";

//* HELPERS
import { formatKey } from "@/utils/helpers";
import { InventoryListTableSpinner } from "@/components/UI/Spinners/Providers/InventoryListTableSpinner";
import { IShowSelectedTableDataProps } from "./interfaces/IShowSelectedTableData";
import { TableDataIDForbidden, TableDataObjs } from "../TableDataObjs";

export function ShowSelectedTableData({
  Data,
  isLoading,
  Columns,
  customSectionName,
  customWidth,
  hasBackground = false,
}: IShowSelectedTableDataProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  const data = useMemo(() => Data || [], [Data]);
  const columns: Column<object>[] = useMemo(() => Columns, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <>
      <div
        className={
          hasBackground
            ? "table__containerBGSecondary"
            : "table__containerBGTransparent"
        }
      >
        <div className="table-wrapper">
          {isLoading ? (
            <InventoryListTableSpinner />
          ) : (
            <table
              {...getTableProps()}
              className={customWidth ? "table__width" : ""}
              cellSpacing="0 0.5rem"
            >
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column: any, index) => (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        <div className="th__flex">
                          {column.render("Header")}
                          <span className="fs-lg">
                            {index !== headerGroup.headers.length - 1 ? (
                              column.isSorted ? (
                                column.isSortedDesc ? (
                                  hovered === column ? (
                                    <img
                                      src={ArrowDown}
                                      alt={"Flecha hacia arriba"}
                                      className="rotateArrow180Deg"
                                    />
                                  ) : (
                                    <img
                                      src={ArrowDown}
                                      alt={"Flecha hacia abajo"}
                                    />
                                  )
                                ) : hovered === column ? (
                                  <img
                                    src={ArrowDown}
                                    alt={"Flecha hacia abajo"}
                                  />
                                ) : (
                                  <img
                                    src={ArrowDown}
                                    alt={"Flecha hacia arriba"}
                                    className="rotateArrow180Deg"
                                  />
                                )
                              ) : (
                                <img
                                  src={ArrowDown}
                                  alt={"Flecha hacia abajo"}
                                />
                              )
                            ) : null}
                          </span>
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        const lowerCaseColumnId: string =
                          cell.column.id.toLowerCase();

                        const includesForbiddenID = Object.values(
                          TableDataIDForbidden
                        ).some((forbiddenId) =>
                          lowerCaseColumnId.includes(forbiddenId)
                        );

                        return ( 
                          <td {...cell.getCellProps()}>
                            {lowerCaseColumnId.endsWith(TableDataObjs.ID) &&
                            !includesForbiddenID &&
                            cell.value!!
                              ? formatKey(cell.value)
                              : cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}
