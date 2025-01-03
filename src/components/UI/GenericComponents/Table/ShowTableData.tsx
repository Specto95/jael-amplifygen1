import { useMemo, useState, lazy } from "react";
import { useTable, useSortBy, Column } from "react-table";

import { Link, useNavigate } from "react-router-dom";

import { useSectionProvider } from "@/hooks/useSectionProvider";

import ArrowDown from "@/assets/img/ArrowDown.png";

import { BottomPagination } from "@/components/UI/GenericComponents/BackContinue/Tables/BottomPagination/BottomPagination";

//* INTERFACES
import { IShowTableDataProps } from "./interfaces/IShowTableData";

//* HELPERS
import {
  formatKey,
  isValidCustomId,
  isValidMoneyFormat,
} from "@/utils/helpers";
import {
  AccountFormObj,
  AccountFormObjSpanish,
} from "@/pages/Account/utils/AccountFormObj";
import {
  CashMovementType,
  CashMovementTypeSpanish,
  TableDataIDForbidden,
  TableDataObjs,
} from "./TableDataObjs";
import { InventoryListTableSpinner } from "../../Spinners/Providers/InventoryListTableSpinner";
import { commaSeparator } from "@/utils/commaSeparator";
import { InputCheckRow } from "../Inputs/CheckRow/InputCheckRow";
import RadioSelect from "../Inputs/RadioButton/RadioSelect";
import { IListProvidersViewAPI } from "../../SideMenuSections/Providers/api/interfaces/IUseListProvidersView";
import { InputCheck as ProviderInputCheck } from "../Inputs/Check/InputCheck";
import { ProductListActions } from "../../SideMenuSections/Product/SubModules/Products/ViewType/ProductList/Actions/ProductListActions";
import { IListProductViewAPI } from "../../SideMenuSections/Product/SubModules/Products/api/interfaces/IUseListProductsView";
import { updateQuantity } from "../Inputs/helpers/functions";
import { globalProductsListObj } from "../../SideMenuSections/Product/SubModules/Globals/utils/globalProductsListObj";
import {
  resultOutcomesMinusIncomesCash,
  sumIncomesCash,
  sumOutcomesCash,
} from "./helpers/functions";
import { SalesOperationStatusSpanish } from "@/utils/globalObjs/sideMenuSections/PointOfSale/PointOfSaleObjs";
import { MovementTypeSpanish } from "@/utils/globalObjs/sideMenuSections/Cash/CashObjs";

//* LAZY COMPONENTS
const ProviderListActions = lazy(() =>
  import(
    "../../SideMenuSections/Providers/List/Actions/ProviderListActions"
  ).then((module) => ({ default: module.ProviderListActions }))
);

const SalesListActions = lazy(() =>
  import("../../SideMenuSections/Sales/List/Actions/SalesListActions").then(
    (module) => ({ default: module.SalesListActions })
  )
);

const ShowSelectedTableData = lazy(() =>
  import("./SelectedData/ShowSelectedTableData").then((module) => ({
    default: module.ShowSelectedTableData,
  }))
);

const QuantityCell = lazy(() =>
  import("@/pages/Inventory/Type/Main/Add/MultipleForm/QuantityCell").then(
    (module) => ({
      default: module.QuantityCell,
    })
  )
);

const ElementDetails = lazy(() =>
  import("../BackContinue/Tables/ElementDetails/ElementDetails").then(
    (module) => ({
      default: module.ElementDetails,
    })
  )
);

export function ShowTableData<T extends object>({
  Data,
  previousData,
  setData,
  setPreviousData,
  isLoading,
  Columns,
  notFoundDataMessage = "No se encontraron datos",
  withActions = false,
  withProviderInputCheck = false,
  customSectionName,
  hasBackground = false,
  customWidth,
  isNavigating = false,
  isEditing = false,
  hasPagination = false,
  hasCheckRow = false,
  hasRadioSelect = false,
  hasIDFieldPrefix = false,
  hasQuantityCell = false,
  selectedData,
  setSelectedBranchOffice,
  selectedBranchOffice,
  setSelectedMainProductsDetails,
  listSelectedMainProductsDetails = [],
  noHeaders = false,
  hasTBodyBorder = false,
  setIsModalOpen,
  setEditing,
  customMemoData,
  customColumns,
  isForm,
  editingState,
  onRowClick,
  updateEditingState,
  setFieldValue,
  setIsConfirmDialogOpen,
  tableRef,
  handleNextStep,
  isPrintable = false,
  noDataRedirect = false,
  redirectMessage,
  redirectLink,
  elementDetailsURL,
}: IShowTableDataProps<T>) {
  const { sectionName } = useSectionProvider();

  const [hovered, setHovered] = useState<boolean>(false);
  const data = customMemoData || useMemo(() => Data || [], [Data]);

  const columns: Column<object>[] =
    customColumns! || useMemo(() => Columns, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  const navigate = useNavigate();

  const renderCell = (row: any, cell: any) => {
    if (
      editingState?.id === row.original.id &&
      cell.column.id === TableDataObjs.BOCOMMISSION
    ) {
      return (
        <input
          type="number"
          pattern="[1-9][0-9]*"
          inputMode="numeric"
          min="1"
          value={editingState!.customCommission}
          className="input__fullSecondaryRoundedSMB2"
          onChange={(e) => {
            const updatedCommission: number = +e.target.value;

            if (updatedCommission <= 0 || updatedCommission > 100) {
              return;
            }

            updateEditingState!({
              id: editingState!.id,
              customCommission: updatedCommission,
            });
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setIsConfirmDialogOpen!(true);
            }
          }}
        />
      );
    }
    return cell.render("Cell");
  };

  return (
    <>
      <div
        className={
          hasBackground && hasTBodyBorder
            ? "table__containerBGSecondaryBorder3PX"
            : hasTBodyBorder
            ? "table__containerBGTransparentBorder3PX"
            : hasBackground
            ? sectionName === "cash" && customSectionName
              ? "table__containerBGSecondaryFlex"
              : "table__containerBGSecondary"
            : "table__containerBGTransparent"
        }
      >
        <div
          className={
            sectionName === "cash" && customSectionName
              ? "table-wrapper56"
              : "table-wrapper"
          }
        >
          {isLoading ? (
            <InventoryListTableSpinner hasBackground={hasBackground} />
          ) : (
            <table
              {...getTableProps()}
              className={customWidth ? "table__width" : ""}
              cellSpacing="0 0.5rem"
              ref={tableRef}
            >
              {noHeaders || noDataRedirect ? null : (
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column: any, index) => {
                        return (
                          <th
                            {...column.getHeaderProps(
                              column.getSortByToggleProps()
                            )}
                            className={hasBackground ? "" : "th__noBG"}
                            key={column.id}
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
                        );
                      })}
                    </tr>
                  ))}
                </thead>
              )}
              <tbody {...getTableBodyProps()}>
                {noDataRedirect ? (
                  <tr>
                    <td
                      colSpan={columns.length}
                      className="flexColumn__spacing"
                    >
                      <h2>{notFoundDataMessage}</h2>

                      <div className="flex__spacing">
                        <Link
                          to={redirectLink!}
                          className="button__primary-bluefit"
                        >
                          {redirectMessage}
                        </Link>
                      </div>
                    </td>
                  </tr>
                ) : rows.length === 0 ? (
                  <tr>
                    <td colSpan={columns.length} className="center">
                      {notFoundDataMessage}
                    </td>
                  </tr>
                ) : (
                  rows.map((row) => {
                    prepareRow(row);
                    return (
                      <tr
                        {...row.getRowProps()}
                        // key={row.values.id}
                        className={
                          isNavigating || isEditing
                            ? "td"
                            : `${selectedBranchOffice && "td"} ${
                                selectedBranchOffice &&
                                selectedBranchOffice?.name === row.values.name
                                  ? "td__selected"
                                  : ""
                              } : ""`
                        }
                        onClick={() => {
                          if (isNavigating) {
                            navigate(
                              `/${customSectionName || sectionName}/${
                                (row.original as { id: string }).id ||
                                (row.original as { clientID: string }).clientID
                              }`
                            );

                            return;
                          }
                          if (isEditing) {
                            onRowClick!((row.original as { id: string }).id);
                          }
                          if (setSelectedBranchOffice) {
                            setSelectedBranchOffice({
                              id: row.values.id,
                              name: row.values.name,
                            });
                            return;
                          }
                        }}
                      >
                        {row.cells.map((cell: any) => {
                          const lowerCaseColumnId: string =
                            cell.column.id.toLowerCase();

                          const includesForbiddenID = Object.values(
                            TableDataIDForbidden
                          ).some((forbiddenId) =>
                            lowerCaseColumnId.includes(forbiddenId)
                          );

                          return (
                            <td
                              {...cell.getCellProps()}
                              className={
                                (sectionName === "providers" &&
                                  cell.column.id ===
                                    TableDataObjs.PROVIDER__TYPE) ||
                                (sectionName === "cash" &&
                                  cell.column.id ===
                                    TableDataObjs.MOVEMENTTYPE &&
                                  cell.value !==
                                    MovementTypeSpanish.INCOMEPENDING)
                                  ? "provider__type"
                                  : cell.value ===
                                    MovementTypeSpanish.INCOMEPENDING
                                  ? "td__primaryStrongBG"
                                  : hasIDFieldPrefix
                                  ? "td__rightBRadius"
                                  : setEditing
                                  ? cell.row.original[
                                      `${cell.column.Header}_customPrice`
                                    ] !== cell.row.original.price &&
                                    cell.column.Header !==
                                      globalProductsListObj.productNameID
                                    ? "td__wCustomPrice"
                                    : "td"
                                  : ""
                              }
                              onClick={() => {
                                if (setIsModalOpen) {
                                  if (
                                    cell.column.Header !==
                                    globalProductsListObj.productNameID
                                  ) {
                                    setIsModalOpen!(true);
                                    setEditing!({
                                      id: cell.row.original[
                                        `${cell.column.Header}_id`
                                      ],
                                      productID: cell.row.original.productID,
                                      productName:
                                        cell.row.original.productName,
                                      branchOfficeID: cell.column.id,
                                      branchOfficeName: cell.column.Header,
                                      customPrice: cell.value,
                                    });
                                  }
                                }
                              }}
                              key={
                                customMemoData &&
                                cell.row.original[`${cell.column.Header}_id`]
                              }
                            >
                              {isValidCustomId(cell.value) ? (
                                formatKey(cell.value)
                              ) : cell.column.id === TableDataObjs.NAME ? (
                                withProviderInputCheck ? (
                                  <div className="flex__spacing">
                                    <ProviderInputCheck
                                      cell={cell}
                                      selectedData={selectedData!}
                                      setSelectedData={setData!}
                                      setSelectedPreviousData={setPreviousData!}
                                      setSelectedMainProductsDetails={
                                        setSelectedMainProductsDetails
                                      }
                                      listSelectedMainProductsDetails={
                                        listSelectedMainProductsDetails
                                      }
                                      row={row}
                                    />
                                    {cell.value}
                                  </div>
                                ) : hasCheckRow ? (
                                  <InputCheckRow
                                    setSelectedRows={setData!}
                                    cell={cell}
                                    row={row}
                                  />
                                ) : hasRadioSelect ? (
                                  <RadioSelect
                                    cell={cell}
                                    data={selectedData!}
                                    setData={setData!}
                                  />
                                ) : (
                                  cell.value
                                )
                              ) : withActions &&
                                cell.column.id === TableDataObjs.ACTIONS ? (
                                sectionName === "BOInventory" ||
                                sectionName === "mainInventory" ? (
                                  <ElementDetails
                                    url={`${elementDetailsURL!}/${
                                      cell.row.original.id
                                    }`}
                                  />
                                ) : sectionName === "productsCatalogue" ||
                                  sectionName === "products" ? (
                                  <ProductListActions
                                    cell={cell}
                                    setProducts={setData!}
                                    Products={Data as IListProductViewAPI[]}
                                  />
                                ) : sectionName === "providers" ? (
                                  <ProviderListActions
                                    cell={cell}
                                    Providers={Data as IListProvidersViewAPI[]}
                                    setProviders={setData!}
                                  />
                                ) : sectionName === "sales" ? (
                                  <SalesListActions
                                    cell={cell}
                                    Sales={Data!}
                                    setSales={setData!}
                                  />
                                ) : (
                                  <></>
                                )
                              ) : lowerCaseColumnId.endsWith(
                                  TableDataObjs.ID
                                ) &&
                                !includesForbiddenID &&
                                hasIDFieldPrefix ? (
                                <>
                                  <span className="bold">ID:</span>{" "}
                                  {formatKey(cell.value)}
                                </>
                              ) : (lowerCaseColumnId.endsWith(
                                  TableDataObjs.ID
                                ) &&
                                  !includesForbiddenID) ||
                                lowerCaseColumnId === TableDataObjs.LASTSALE ? (
                                formatKey(cell.value)
                              ) : lowerCaseColumnId.endsWith(
                                  TableDataObjs.PRICE
                                ) ||
                                lowerCaseColumnId.endsWith(
                                  TableDataObjs.TOTAL
                                ) ? (
                                // ||
                                // isValidMoneyFormat(cell.value.toString())
                                "$" + commaSeparator(cell.value)
                              ) : cell.column.id === TableDataObjs.QUANTITY ? (
                                hasQuantityCell ? (
                                  <QuantityCell
                                    cell={cell}
                                    index={row.index}
                                    selectedIncomeData={selectedData}
                                    updateQuantity={(rowIndex, newQuantity) =>
                                      updateQuantity(
                                        rowIndex,
                                        newQuantity,

                                        setData as any
                                      )
                                    }
                                    selectedPreviousOutcomeRows={previousData}
                                  />
                                ) : (
                                  cell.value + " pzs"
                                )
                              ) : cell.column.id === TableDataObjs.USERTYPE ? (
                                cell.value === AccountFormObj.BRANCHMANAGER ? (
                                  AccountFormObjSpanish.ENCARGADO
                                ) : cell.value === AccountFormObj.ADMIN ? (
                                  AccountFormObjSpanish.ADMIN
                                ) : (
                                  cell.value
                                )
                              ) : // sectionName === "cash" &&
                              //   cell.column.id ===
                              //     TableDataObjs.MOVEMENTTYPE ? (
                              //   cell.value === CashMovementType.OUTCOME ? (
                              //     CashMovementTypeSpanish.OUTCOME
                              //   ) : (
                              //     CashMovementTypeSpanish.INCOME
                              //   )
                              // ) :
                              cell.column.id === TableDataObjs.STATUSACTIONS ? (
                                cell.value !==
                                  SalesOperationStatusSpanish.PAID &&
                                !isForm ? (
                                  <Link
                                    to={`/${customSectionName || sectionName}/${
                                      (row.original as { id: string }).id
                                    }`}
                                    className={
                                      cell.value ===
                                        SalesOperationStatusSpanish.PAY ||
                                      cell.value ===
                                        SalesOperationStatusSpanish.SELECT
                                        ? "button__primary-bluefit"
                                        : "bold"
                                    }
                                  >
                                    {cell.value}
                                  </Link>
                                ) : (
                                  <>
                                    {cell.value ===
                                      SalesOperationStatusSpanish.PAY ||
                                    cell.value ===
                                      SalesOperationStatusSpanish.SELECT ? (
                                      <button
                                        type="button"
                                        className={
                                          cell.value ===
                                            SalesOperationStatusSpanish.PAY ||
                                          cell.value ===
                                            SalesOperationStatusSpanish.SELECT
                                            ? "button__primary-bluefit"
                                            : "bold"
                                        }
                                        onClick={() => {
                                          //?FILTER ONLY THE SELECTED ROW ID

                                          setData!(
                                            data.filter(
                                              (data) =>
                                                data.id ===
                                                (
                                                  row.original as {
                                                    id: string;
                                                  }
                                                ).id
                                            )
                                          );
                                          if (handleNextStep) {
                                            handleNextStep();
                                          }
                                        }}
                                      >
                                        {cell.value}
                                      </button>
                                    ) : (
                                      cell.value
                                    )}
                                  </>
                                )
                              ) : (
                                renderCell(row, cell)
                                // cell.render("Cell")
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
          )}
        </div>

        {sectionName === "cash" && customSectionName && (
          <div className="flexColumn__endYWQuarter">
            <div className="border2PXRadiusPXSHFit bold">
              <div className="flexColumn">
                <div className="flex__spacing-between">
                  <p>Total Ingresos</p>
                  <p>${commaSeparator(sumIncomesCash(data))}</p>
                </div>
                <div className="flex__spacing-between mb-1">
                  <p>Total Egresos</p>
                  <p>${commaSeparator(sumOutcomesCash(data))}</p>
                </div>
                <div className="flex__spacing-between text-primaryStrong borderTopPrimaryStrong">
                  <p>Total Netos</p>
                  <p>${commaSeparator(resultOutcomesMinusIncomesCash(data))}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {hasPagination && <BottomPagination />}

      {hasCheckRow && (
        <>
          <h3 className="heading__selected">
            {selectedData && selectedData.length} Seleccionados
          </h3>
          <div className="selected__fields">
            {selectedData && selectedData.length > 0 && (
              <ShowSelectedTableData
                Data={previousData || selectedData}
                Columns={columns}
                hasBackground={true}
                isLoading={isLoading}
              />
            )}
          </div>
        </>
      )}
    </>
  );
}
