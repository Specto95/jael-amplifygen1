import { useState, useEffect } from "react";

import ArrowDown from "@/assets/img/ArrowDown.png";

import styles from "../../InventoryForm.module.css";

//* INTERFACES
import { IQuantityCellProps } from "@/interfaces/Inventory/inventory";

export function QuantityCell({
  cell,
  index,
  updateQuantity,
  selectedPreviousOutcomeRows,
  selectedIncomeData,
  selectedOutcomeData,
}: IQuantityCellProps) {
  const [quantity, setQuantity] = useState(cell.value);

  const handleIncomeOrOutcome = () => {
    if (selectedIncomeData?.length! > 0) {
      return selectedIncomeData;
    }
    if (selectedOutcomeData?.length! > 0) {
      return selectedOutcomeData;
    }
  };

  useEffect(() => {
    if (selectedIncomeData && selectedIncomeData.length > index) {
      const row = selectedIncomeData[index];
      setQuantity(row.quantity);
    }
  }, [selectedIncomeData, index]);

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
      <p className="bold">Elegir Cantidad</p>
      <button
        type="button"
        onClick={incrementQuantity}
        className="button__nobg"
        disabled={
          selectedPreviousOutcomeRows
            ? selectedPreviousOutcomeRows![index].quantity === quantity
            : false
        }
      >
        <img
          src={ArrowDown}
          alt={"Flecha hacia Abajo"}
          className="fs-xl rotateArrow180Deg"
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
          if (selectedPreviousOutcomeRows?.length! > 0) {
            if (newQuantity > selectedPreviousOutcomeRows![index].quantity) {
              alert(
                "No puedes sacar más productos de los que tienes en inventario"
              );
              return;
            }
            if (newQuantity === 0) {
              return;
            }
          }
          if (newQuantity === 0) {
            alert("No puedes agregar 0 productos");
            return;
          }
          if (newQuantity >= 999) {
            alert("No puedes agregar más de 999 productos");
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
        <img src={ArrowDown} alt={"Flecha hacia Abajo"} className="fs-xl" />
      </button>
    </div>
  );
}
