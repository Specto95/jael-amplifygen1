import { useNavigate } from "react-router-dom";

import styles from "./ViewImages.module.css";

export function ProductImageAdd() {
  const navigate = useNavigate();

  return (
    <div
      className={styles["productCard__addProduct-container"]}
      onClick={() => navigate("/products/add")}
    >
      <div className={styles["productCard__addProduct-circle"]}></div>
      <h6>Click aquí para Agregar Producto</h6>
    </div>
  );
}
