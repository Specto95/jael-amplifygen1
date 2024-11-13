import { Field } from "formik";
//* APIs
import { useListDiscountInventoryProducts } from "../../Second/api/useListDiscountInventoryProducts";

import styles from "../../../PDVGeneralForm.module.css";

//* INTERFACES
import { ISelectProductDiscountProps } from "@/interfaces/Inventory/inventory";
import { IListProductsPDVAPI } from "../api/interfaces/IUseListProductsPDV";

export function SelectProductDiscount({
  cell,
  setSelectedData,
}: ISelectProductDiscountProps) {
  const { listDiscounts } = useListDiscountInventoryProducts(
    cell.row.original.inventoryProductID
  );

  return (
    <>
      <Field
        as="select"
        id={cell.row.original.id}
        className={styles["PDVOrdersManagement__inputSecondary"]}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          const { value } = e.target;
          setSelectedData!((prevRows: IListProductsPDVAPI[]) => {
            const updatedRows = prevRows.map((row) => {
              if (row.id === cell.row.original.id) {
                const totalProductDiscount = +(
                  row.price *
                  (+value / 100)
                ).toFixed(2);
                return {
                  ...row,
                  discountPercentage: +value,
                  discountPerProduct: +totalProductDiscount,
                  totalDiscounted: +(
                    totalProductDiscount * row.quantity
                  ).toFixed(2),
                  withDiscount: +value > 0 ? true : false,
                  amountToPayWithDiscount: +(
                    (row.price - totalProductDiscount) *
                    row.quantity
                  ).toFixed(2),
                  productPriceWithDiscount: +(
                    row.price - totalProductDiscount
                  ).toFixed(2),
                };
              }
              return row;
            });
            return updatedRows;
          });
        }}
        value={cell.value || ""}
      >
        <option value="">Descuento:</option>
        {listDiscounts
          .sort((a, b) => a.discount - b.discount)
          .map((discount) => {
            return (
              <option key={discount.discount} value={discount.discount}>
                {discount.discount}%
              </option>
            );
          })}
      </Field>
    </>
  );
}
