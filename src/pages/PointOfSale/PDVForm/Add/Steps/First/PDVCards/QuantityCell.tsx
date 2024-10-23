import { useEffect, useState } from "react";

import ArrowDown from "@/assets/img/ArrowDown.png";

import styles from "../../../PDVGeneralForm.module.css";

//* INTERFACES
import { IQuantityCellProps } from "@/interfaces/Inventory/inventory";

export function QuantityCell({
  cell,
  selectedData,
  index,
  updateQuantity,
  previousData,
}: IQuantityCellProps) {
  const [quantity, setQuantity] = useState(cell.value);
  useEffect(() => {
    if (selectedData && selectedData.length > index) {
      const row = selectedData[index];
      setQuantity(row.quantity);
    }
  }, [selectedData, index]);

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateQuantity(index, newQuantity);
  };

  const decrementQuantity = () => {
    if (quantity === 1) {
      setQuantity(quantity);
      updateQuantity(index, quantity);
      return;
    }
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateQuantity(index, newQuantity);
      return;
    }
  };

  return (
    <div className={styles.quantity__container}>
      <button
        type="button"
        onClick={incrementQuantity}
        className="button__nobg"
        disabled={
          previousData![index].quantity === selectedData![index].quantity
        }
      >
        <img
          src={ArrowDown}
          alt={"Flecha hacia Abajo"}
          className="rotateArrow180Deg custom__imgWidth"
        />
      </button>
      <input
        type="number"
        pattern="[1-9][0-9]*"
        inputMode="numeric"
        min="1"
        className={styles.quantity__input}
        value={quantity}
        onChange={(e) => {
          const newQuantity = +e.target.value;
          if (newQuantity > previousData![index].quantity) {
            alert(
              "No puedes agregar más productos de los que tienes en inventario"
            );
            return;
          }
          if(newQuantity === 0) {
            return;
          }

          setQuantity(newQuantity);
          updateQuantity(index, newQuantity);
        }}
      />
      <button
        type="button"
        onClick={decrementQuantity}
        className="button__nobg"
      >
        <img
          src={ArrowDown}
          alt={"Flecha hacia Abajo"}
          className="custom__imgWidth"
        />
      </button>
    </div>
  );
}
