import { useState, useEffect } from "react";

import ArrowDown from "@/assets/img/ArrowDown.png";

import styles from "./BOInventoryForm.module.css";

//* INTERFACES
import { IBOQuantityCellProps } from "@/interfaces/Inventory/inventory";

export function BOQuantityCell({
  cell,
  index,
  updateQuantity,
  selectedPreviousOutcomeRows,
  selectedIncomeData,
  selectedMainProductsDetails,
}: IBOQuantityCellProps) {
  const [quantity, setQuantity] = useState(cell.value);

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
          selectedMainProductsDetails
            ? selectedMainProductsDetails![index].quantity === quantity
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
          if (selectedMainProductsDetails?.length! > 0) {
            if (newQuantity > selectedMainProductsDetails![index].quantity!) {
              alert("No puedes ingresar más productos de los inexistentes");
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
