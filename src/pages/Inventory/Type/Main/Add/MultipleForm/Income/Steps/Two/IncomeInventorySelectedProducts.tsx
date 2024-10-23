// import { useTable, useSortBy } from "react-table";

// import styles from "../../../../../InventoryForm.module.css";

// import ArrowDown from "@/assets/img/ArrowDown.png";

// import { ITableFunctionProps } from "@/pages/Providers/ProviderForm/IProviderFormData";
// import { formatKey } from "@/utils/helpers";
// import { commaSeparator } from "@/utils/commaSeparator";
// import { InventoryColumnsObjs } from "@/pages/Inventory/Type/Main/helpers/inventoryColumnsObjs";
export function IncomeInventorySelectedProducts() {
  return <div></div>;
}

// export function IncomeInventorySelectedProducts({
//   data,
//   columns,
//   hovered,
// }: ITableFunctionProps) {
//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable({ columns, data: data! }, useSortBy);

//   return (
//     <div className="table-wrapper">
//       <table {...getTableProps()}>
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column: any) => (
//                 <th {...column.getHeaderProps(column.getSortByToggleProps())}>
//                   <div className={styles.th__flex}>
//                     {column.render("Header")}
//                     <span className={styles["fs-md"]}>
//                       {column.isSorted ? (
//                         column.isSortedDesc ? (
//                           hovered === column ? (
//                             <img
//                               src={ArrowDown}
//                               alt={"Flecha hacia arriba"}
//                               className="rotateArrow180Deg"
//                             />
//                           ) : (
//                             <img src={ArrowDown} alt={"Flecha hacia abajo"} />
//                           )
//                         ) : hovered === column ? (
//                           <img src={ArrowDown} alt={"Flecha hacia abajo"} />
//                         ) : (
//                           <img
//                             src={ArrowDown}
//                             alt={"Flecha hacia arriba"}
//                             className="rotateArrow180Deg"
//                           />
//                         )
//                       ) : (
//                         <img src={ArrowDown} alt={"Flecha hacia abajo"} />
//                       )}
//                     </span>
//                   </div>
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.length === 0 ? (
//             <tr>
//               <td colSpan={columns.length} className="center">
//                 No hay productos seleccionados
//               </td>
//             </tr>
//           ) : (
//             rows.map((row) => {
//               prepareRow(row);
//               return (
//                 <tr {...row.getRowProps()}>
//                   {row.cells.map((cell) => {
//                     return (
//                       <td {...cell.getCellProps()}>
//                         {cell.column.id === InventoryColumnsObjs.id
//                           ? formatKey(cell.value)
//                           : cell.column.id ===
//                               InventoryColumnsObjs.productProviderID &&
//                             cell.value!!
//                           ? formatKey(cell.value)
//                           : cell.column.id === InventoryColumnsObjs.price
//                           ? `$${commaSeparator(cell.value)}`
//                           : cell.value || cell.value === 0
//                           ? cell.render("Cell")
//                           : "N/A"}
//                       </td>
//                     );
//                   })}
//                 </tr>
//               );
//             })
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }
