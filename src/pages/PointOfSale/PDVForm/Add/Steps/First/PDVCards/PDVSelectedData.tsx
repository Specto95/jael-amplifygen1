import { useState } from "react";
import { useTable, useSortBy } from "react-table";

import styles from "../ViewImages.module.css";

import ArrowDown from "@/assets/img/ArrowDown.png";

import { IPDVSelectedDataProps } from "@/interfaces/PDV/PDV";
import { IListProductsPDVAPI } from "../api/interfaces/IUseListProductsPDV";

import { PDVSelectedDataActions } from "./PDVSelectedDataActions";
import { commaSeparator } from "@/utils/commaSeparator";
import { QuantityCell } from "./QuantityCell";
import { SalesOperationWithDiscountSpanish } from "@/utils/globalObjs/sideMenuSections/PointOfSale/PointOfSaleObjs";
import { AccountFormObj } from "@/pages/Account/utils/AccountFormObj";
import { useGetBranchOfficeCommission } from "../../Second/api/useGetBranchOfficeCommission";
import { useSessionProvider } from "@/hooks/useSessionProvider";

export function PDVSelectedData({
  selectedData,
  setSelectedData,
  columns,
  setPreviousData,
  previousData,
  currentStepIndex,
}: IPDVSelectedDataProps) {
  const { branchInventory, rolID, mainBranchInventory } = useSessionProvider();

  const { getBranchOfficeCommission } = useGetBranchOfficeCommission(
    rolID === AccountFormObj.ADMIN ? mainBranchInventory.id : branchInventory.id
  );

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
            // productPriceWithDiscount: row.price,
            // amountToPayWithDiscount: row.price * newQuantity,
            amountToPay: row.price * newQuantity,
            totalDiscounted: +(row.discountPerProduct! * newQuantity).toFixed(
              2
            ),
            amountToPayWithDiscount: +(
              row.productPriceWithDiscount! * newQuantity
            ).toFixed(2),
            commission:
              +(
                row.price *
                newQuantity *
                getBranchOfficeCommission.branchOffice_commission
              ) / 100,
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
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="th__PBXS"
                >
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
                        {cell.column.id === "price" ? (
                          `$${commaSeparator(cell.value)}`
                        ) : cell.column.id === "quantity" ? (
                          <div className="flex__spacing2">
                            <QuantityCell
                              cell={cell}
                              selectedData={selectedData}
                              index={row.index}
                              updateQuantity={(rowIndex, newQuantity) =>
                                updateQuantity(rowIndex, newQuantity)
                              }
                              previousData={previousData}
                            />
                            <PDVSelectedDataActions
                              cell={cell}
                              setSelectedData={setSelectedData}
                              selectedData={selectedData}
                              setPreviousData={setPreviousData}
                              currentStepIndex={currentStepIndex}
                            />
                          </div>
                        ) : cell.column.id === "hasDiscount" && !cell.value ? (
                          SalesOperationWithDiscountSpanish.UNAVAILABLE
                        ) : cell.column.id === "hasDiscount" && cell.value ? (
                          SalesOperationWithDiscountSpanish.AVAILABLE
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
