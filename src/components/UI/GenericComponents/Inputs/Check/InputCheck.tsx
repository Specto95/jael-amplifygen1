import { IInputCheckProps } from "./IInputCheck";
import { ISelectedIncomeRowsTable } from "@/interfaces/Inventory/inventory";

export function InputCheck({
  selectedData,
  setSelectedData,
  setSelectedPreviousData,
  setSelectedMainProductsDetails,
  listSelectedMainProductsDetails,
  cell,
  row,
}: IInputCheckProps) {
  return (
    <input
      key={row.id}
      type="checkbox"
      {...cell.getCellProps()}
      checked={selectedData!.some(
        (row: any) => row.id === cell.row.original.id
      )}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;

        setSelectedData &&
          setSelectedData((prev: any) => {
            if (isChecked) {
              if (
                !prev.some(
                  (row: ISelectedIncomeRowsTable) =>
                    row.id === cell.row.original.id
                )
              ) {
                return [
                  ...prev,
                  {
                    ...row.original,
                    quantity: 1,
                  },
                ];
              }
            } else {
              return prev.filter(
                (r: { id: string }) => r.id !== cell.row.original.id
              );
            }
            return prev;
          });

        setSelectedPreviousData!((prev: any) => {
          if (isChecked) {
            if (
              !prev.some(
                (row: ISelectedIncomeRowsTable) =>
                  row.id === cell.row.original.id
              )
            ) {
              return [...prev, row.original];
            }
          } else {
            return prev.filter(
              (r: { id: string }) => r.id !== cell.row.original.id
            );
          }
          return prev;
        });

        // ...
        setSelectedMainProductsDetails &&
          setSelectedMainProductsDetails!((prev: any) => {
            if (isChecked) {
              const itemFromSecondApi = listSelectedMainProductsDetails!.find(
                (item) => item.id === cell.row.original.id
              );

              if (
                itemFromSecondApi &&
                !prev.some(
                  (row: ISelectedIncomeRowsTable) =>
                    row.id === cell.row.original.id
                )
              ) {
                return [...prev, { ...itemFromSecondApi }];
              }
            } else {
              return prev.filter(
                (r: { id: string }) => r.id !== cell.row.original.id
              );
            }
            return prev;
          });
      }}
    />
  );
}
