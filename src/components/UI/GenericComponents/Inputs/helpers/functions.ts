import { ISelectedIncomeRowsTable } from "@/interfaces/Inventory/inventory";

export const updateQuantity = (
  rowIndex: number,
  newQuantity: number,
  setData:
    | React.Dispatch<React.SetStateAction<ISelectedIncomeRowsTable[]>>
    | undefined
) => {
  setData!((prevRows: ISelectedIncomeRowsTable[]) => {
    const updatedRows = prevRows.map((row, index) => {
      if (index === rowIndex) {
        return { ...row, quantity: newQuantity };
      }
      return row;
    });
    return updatedRows;
  });
};
