import { useMemo } from "react";
import { Column, useTable } from "react-table";

import styles from "../../UpdateProvider.module.css";

import { IEditProviderProductsProps } from "@/interfaces/Providers/providers";

import { EditProviderProductsActions } from "./EditProviderProductsActions";
import { EditProviderProductsColumns } from "./EditProviderProductsColumns";

export function EditProviderProducts({
  setUpdateProductsData,
  updateProductsData,
}: IEditProviderProductsProps) {
  const data = useMemo(() => updateProductsData, [updateProductsData]);
  const columns: Column<object>[] = useMemo(
    () => EditProviderProductsColumns,
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <h1 className="heading__primary">Productos del proveedor</h1>

      <div className={styles["productProvider__list-container"]}>
        <div className={styles["table-wrapper"]}>
          {updateProductsData ? (
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
                      No hay Productos por mostrar
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
                                  <EditProviderProductsActions
                                    cell={cell}
                                    setUpdateProductsData={
                                      setUpdateProductsData
                                    }
                                    updateProductsData={updateProductsData}
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
