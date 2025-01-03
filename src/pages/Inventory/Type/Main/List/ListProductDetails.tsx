import { useState, useMemo, useEffect } from "react";
import { Column, useSortBy, useTable } from "react-table";
import { useParams } from "react-router-dom";

import ArrowDown from "@/assets/img/ArrowDown.png";

import styles from "../InventoryForm.module.css";

//*COMPONENTS
import { LayoutForm } from "@/components/Layouts/LayoutForm";

//* HOOKS
import { useSectionProvider } from "@/hooks/useSectionProvider";

//* APIs
import { useListInventoryProductIncomeOutcomesHistoryByIDAndInventoryID } from "./api/useListInventoryProductIncomeOutcomesHistoryByIDAndInventoryID";

//* PAGES
import { ListProductDetailsColumns } from "./ListProductDetailsColumns";
import { ListProductDetailsInfo } from "./ListProductDetailsInfo";

//* COMPONENTS
import { SectionTopOptions } from "@/components/UI/SectionTopOptions/SectionTopOptions";

export function ListProductDetails() {
  const { id } = useParams();
  const { setSectionName, handleBack, setHasParams } = useSectionProvider();
  const [hovered, setHovered] = useState<boolean>(false);

  const {
    listInventoryProductFlatten,
    mostRecentIncomeDate,
    mostRecentOutcomeDate,
    inventoryProductGeneralDetails,
  } = useListInventoryProductIncomeOutcomesHistoryByIDAndInventoryID(id!);

  useEffect(() => {
    setHasParams(true);
  }, []);

  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    return listInventoryProductFlatten
      ? listInventoryProductFlatten!.filter((item) => {
          return item.inventoryOperationType
            .toLowerCase()
            .includes(query.toLowerCase());
        })
      : [];
  }, [listInventoryProductFlatten, query]);

  const columns: any[] = useMemo(() => ListProductDetailsColumns, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: filteredItems }, useSortBy);

  return (
    <LayoutForm>
      <section className={styles.providerform}>
        <ListProductDetailsInfo
          inventoryProductGeneralDetails={inventoryProductGeneralDetails}
          mostRecentIncomeDate={mostRecentIncomeDate}
          mostRecentOutcomeDate={mostRecentOutcomeDate}
        />

        <SectionTopOptions query={query} setQuery={setQuery} />
        <div className={styles["productProvider-container"]}>
          <div className={styles["productProvider__list-container"]}>
            <div className={styles["table-wrapper"]}>
              <table {...getTableProps()}>
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column: any) => (
                        <th
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                        >
                          <div className={styles.th__flex}>
                            {column.render("Header")}
                            <span className={styles["fs-md"]}>
                              {column.isSorted ? (
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
                        No hay productos a seleccionar
                      </td>
                    </tr>
                  ) : (
                    rows.map((row) => {
                      prepareRow(row);
                      // const rowData = row.original as RowData;

                      return (
                        <tr
                          {...row.getRowProps()}
                          onClick={() => {
                          }}
                        >
                          {row.cells.map((cell) => {
                            return (
                              <td {...cell.getCellProps()}>
                                {cell.render("Cell")}
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
          </div>
          <div className={styles["providerform__form-buttons"]}>
            <button
              type="button"
              className="button__primary-bluefit"
              onClick={() => {
                setSectionName("mainInventory");
                handleBack();
              }}
            >
              Regresar a Lista
            </button>
          </div>
        </div>
      </section>
    </LayoutForm>
  );
}
