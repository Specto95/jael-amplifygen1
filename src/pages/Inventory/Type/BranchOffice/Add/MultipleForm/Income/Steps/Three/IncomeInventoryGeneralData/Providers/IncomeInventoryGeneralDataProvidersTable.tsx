import { useMemo } from "react";
import { Column, useSortBy, useTable } from "react-table";

//* HOOKS
import { useSectionProvider } from "@/hooks/useSectionProvider";

import styles from "../../../../../BOInventoryForm.module.css";

import { IncomeInventoryGeneralDataColumns } from "../../../../Columns/IncomeInventoryGeneralDataColumns";
import { IIncomeInventoryGeneralDataProvidersProps } from "@/interfaces/Inventory/inventory";
import { isArrayEmpty, reshapeData } from "../../../One/helpers/functions";

export function IncomeInventoryGeneralDataProvidersTable({
  providersInventoryByName,
  setSelectedProviderResponsible,
  selectedProviderResponsible,
}: IIncomeInventoryGeneralDataProvidersProps) {
  const { handleBackTo } = useSectionProvider();

  const data = useMemo(
    () =>
      isArrayEmpty(providersInventoryByName)
        ? providersInventoryByName
        : reshapeData(providersInventoryByName) || [],
    [providersInventoryByName]
  );
  const columns: Column<object>[] = useMemo(
    () => IncomeInventoryGeneralDataColumns,
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);
  return (
    <div className={styles["productProvider__list-container"]}>
      {data.length > 0 && (
        <div className={styles["table-wrapper"]}>
          <table {...getTableProps()}>
            {data && data !== providersInventoryByName && (
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column: any) => (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
            )}

            <tbody {...getTableBodyProps()}>
              {data === providersInventoryByName ? (
                <tr>
                  <td colSpan={columns.length} className="flexColumn__spacing">
                    <h2>Este proveedor no cuenta con productos registrados</h2>

                    <div className="flex__spacing">
                      Seleccionar otro Proveedor o ir a
                      <button
                        type="button"
                        className="button__primary-bluefit"
                        onClick={() => handleBackTo("productsCatalogue")}
                      >
                        {" "}
                        Registrar Producto
                      </button>
                    </div>
                  </td>
                </tr>
              ) : (
                rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell: any) => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            onClick={() => {
                              setSelectedProviderResponsible!({
                                ...cell.row.original.responsible,
                              });
                              console.log(cell);
                            }}
                            className={`td ${
                              selectedProviderResponsible?.fullname ===
                              cell.value
                                ? "td__selected"
                                : ""
                            }`}
                          >
                            {cell.render("Cell") || "N/A"}
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
      )}
    </div>
  );
}
