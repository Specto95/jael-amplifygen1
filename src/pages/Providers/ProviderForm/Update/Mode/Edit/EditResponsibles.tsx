import { useMemo } from "react";
import { Column, useTable } from "react-table";

import styles from "../../UpdateProvider.module.css";

//* INTERFACES
import { IProviderResponsiblesProps } from "@/interfaces/Providers/providers";

//* PAGES
import { EditProviderResponsiblesColumns } from "./EditResponsiblesColumns";
import { EditResponsiblesActions } from "./EditResponsiblesActions";

export function EditResponsibles({
  updateResponsiblesData,
  setUpdateResponsiblesData,
}: IProviderResponsiblesProps) {
  const data = useMemo(() => updateResponsiblesData, [updateResponsiblesData]);
  const columns: Column<object>[] = useMemo(
    () => EditProviderResponsiblesColumns,
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <h1 className="heading__primary">Encargados</h1>

      <div className={styles["productProvider__list-container"]}>
        <div className={styles["table-wrapper"]}>
          {updateResponsiblesData ? (
            <table {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column: any) => (
                      <th {...column.getHeaderProps()}>
                        <div className={styles.th__flex}>
                          {column.render("Header")}
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
                      No hay encargados por mostrar
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
                              {cell.column.id === "edit" ? (
                                <div>
                                  {cell.value}
                                  <EditResponsiblesActions
                                    cell={cell}
                                    setUpdateResponsiblesData={
                                      setUpdateResponsiblesData
                                    }
                                    updateResponsiblesData={
                                      updateResponsiblesData
                                    }
                                  />
                                </div>
                              ) : cell.value || cell.value === 0 ? (
                                cell.render("Cell")
                              ) : (
                                "N/A"
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
          ) : (
            <p>No hay encargados</p>
          )}
        </div>
      </div>
    </>
  );
}
