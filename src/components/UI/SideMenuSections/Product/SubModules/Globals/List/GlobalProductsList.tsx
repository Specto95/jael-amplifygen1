import { useMemo, useState, lazy } from "react";
import { useTable, useSortBy } from "react-table";

import ArrowDown from "@/assets/img/ArrowDown.png";

import styles from "../../ProductList.module.css";

import { BottomPagination } from "@/components/UI/GenericComponents/BackContinue/Tables/BottomPagination/BottomPagination";
import { getGlobalProductsColumns } from "./Columns/GlobalProductsColumns";

//*INTERFACES
import { IGlobalProductsListProps } from "./interfaces/IGlobalProductsList";
import { IGlobalProductsTableEditingState } from "../../../../../../../interfaces/Products/products";

//* UTILS
import { globalProductsListObj } from "../utils/globalProductsListObj";
import { transformData } from "../utils/helpers";

const ModalEditProduct = lazy(() =>
  import(
    "@/components/UI/Modals/SideMenuSections/Products/ModalEditProduct"
  ).then((module) => ({
    default: module.ModalEditProduct,
  }))
);

export function GlobalProductsList({
  branchOfficeProducts,
}: IGlobalProductsListProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editing, setEditing] = useState<IGlobalProductsTableEditingState>({
    id: "",
    productID: "",
    productName: "",
    branchOfficeID: "",
    branchOfficeName: "",
    customPrice: 0,
  });

  const transformedData = transformData(branchOfficeProducts);

  const updatedColumns = getGlobalProductsColumns(branchOfficeProducts);

  const data = useMemo(() => transformedData || [], [branchOfficeProducts]);

  const columns = useMemo(() => updatedColumns || [], [branchOfficeProducts]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <>
      <div className={styles.productList__container}>
        <div className="table-wrapper">
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column: any, index) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      <div className={styles.th__flex}>
                        {column.render("Header")}
                        <span className={styles["fs-lg"]}>
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
                              <img src={ArrowDown} alt={"Flecha hacia abajo"} />
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
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={columns.length} className="center">
                    No hay Resultados
                  </td>
                </tr>
              ) : (
                rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} key={row.cells[0].value}>
                      {row.cells.map((cell: any) => {
                        return (
                          <>
                            <td
                              {...cell.getCellProps()}
                              onClick={() => {
                                if (
                                  cell.column.Header !==
                                  globalProductsListObj.productNameID
                                ) {
                                  setIsModalOpen(true);
                                  setEditing({
                                    id: cell.row.original[
                                      `${cell.column.Header}_id`
                                    ],
                                    productID: cell.row.original.productID,
                                    productName: cell.row.original.productName,
                                    branchOfficeID: cell.column.id,
                                    branchOfficeName: cell.column.Header,
                                    customPrice: cell.value,
                                  });
                                }
                              }}
                              className={
                                cell.row.original[
                                  `${cell.column.Header}_customPrice`
                                ] !== cell.row.original.price &&
                                cell.column.Header !==
                                  globalProductsListObj.productNameID
                                  ? styles.td__wCustomPrice
                                  : styles.td
                              }
                              key={
                                cell.row.original[`${cell.column.Header}_id`]
                              }
                            >
                              {cell.render("Cell") || "N/A"}
                            </td>
                          </>
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
      <BottomPagination />
      {isModalOpen && (
        <ModalEditProduct
          setIsModalOpen={setIsModalOpen}
          pro={{ ...editing }}
        />
      )}
    </>
  );
}
