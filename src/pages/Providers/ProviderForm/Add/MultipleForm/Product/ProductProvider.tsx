import { useState, useEffect, useMemo } from "react";
import { Column, useTable, useSortBy } from "react-table";

import Search from "@/assets/img/Search.png";
import ArrowDown from "@/assets/img/ArrowDown.png";

import styles from "../../../../ProviderForm.module.css";

//?SRC IMPORTS

//*COMPONENTS
import { ProvidersTableSpinner } from "@/components/UI/Spinners/Providers/ProvidersTableSpinner";

//* PAGES
import { ProductProviderColumns } from "./ProductProviderColumns";
import { ProductProviderSelectedProducts } from "./ProductProviderSelectedProducts";
import { IProductProviderProps } from "../../../IProviderFormData";

//* APIs
import { useListProductsView } from "@/components/UI/SideMenuSections/Product/SubModules/Products/api/useListProductsView";
import { formatKey } from "@/utils/helpers";

export function ProductProvider({
  handleNextStep,
  handleBackProviderType,
  enterprise_name,
  selectedRows,
  setSelectedRows,
}: IProductProviderProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  // const [products, setProducts] = useState<IProductTable[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { listProductsView: listProducts } = useListProductsView();

  const data = useMemo(() => listProducts, [listProducts]);
  const selectedData = useMemo(() => selectedRows, [selectedRows]);
  const columns: Column<object>[] = useMemo(() => ProductProviderColumns, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  // useEffect(() => {
  //   const fetchProductProviderProducts = async () => {
  //     try {
  //       const result: GraphQLQuery<any> = await API.graphql<
  //         GraphQLQuery<ListProductProviderProductsQuery>
  //       >(graphqlOperation(listProductProviderProducts));
  //       console.log(result);
  //       const productResult = result.data.listProductProviderProducts.items.map(
  //         (item: any) => {
  //           const { product, ...rest } = item;
  //           return { ...rest, ...product };
  //         }
  //       );
  //       setProducts(productResult);
  //     } catch (error) {
  //       console.log("Error: ", error);
  //     }
  //   };

  //   fetchProductProviderProducts();
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={styles["productProvider-container"]}>
      <h1 className={styles.productProvider__enterpriseName}>
        {enterprise_name}
        <p className={styles.productProvider__type}>Proovedor de Productos</p>
      </h1>
      <h2 className={styles.heading}>Lista de Productos a Agregar</h2>
      <div className={styles["productProvider__list-container"]}>
        <div className={styles["productProvider__search-container"]}>
          <input
            type="text"
            placeholder="Buscar por nombre, clase, grupo..."
            className={styles["section__search-input"]}
          />
          <img
            src={Search}
            alt="buscar"
            className={styles["section__search-icon"]}
          />
        </div>
        {isLoading ? (
          <ProvidersTableSpinner />
        ) : (
          <>
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
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map((cell) => {
                            return (
                              <td {...cell.getCellProps()}>
                                {cell.column.id === "name" ? (
                                  <div className={styles.flex__spacing}>
                                    <input
                                      type="checkbox"
                                      {...cell.getCellProps()}
                                      onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                      ) => {
                                        const isChecked = e.target.checked;
                                        setSelectedRows &&
                                          setSelectedRows((prev: any) => {
                                            if (isChecked) {
                                              return [...prev, row.original];
                                            } else {
                                              return prev.filter(
                                                (r: { id: string }) =>
                                                  r.id !==
                                                  (
                                                    row.original as {
                                                      id: string;
                                                    }
                                                  ).id
                                              );
                                            }
                                          });
                                      }}
                                    />
                                    {cell.value}
                                  </div>
                                ) : cell.column.id === "productProviderId" ? (
                                  formatKey(cell.value)
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
            </div>
          </>
        )}
      </div>
      <h3 className={styles.heading__selecteds}>
        {selectedRows && selectedRows.length} Seleccionados
      </h3>
      <div className={styles.selected__fields}>
        {selectedRows && selectedRows.length > 0 && (
          <ProductProviderSelectedProducts
            data={selectedData}
            columns={columns}
            hovered={hovered}
          />
        )}
      </div>
      <div className={styles["providerform__form-buttons"]}>
        <button
          type="button"
          onClick={handleBackProviderType}
          className={styles["serviceProvider__cancel"]}
        >
          Atras
        </button>
        <button
          onClick={handleNextStep}
          type="button"
          className={styles["serviceProvider__next"]}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
