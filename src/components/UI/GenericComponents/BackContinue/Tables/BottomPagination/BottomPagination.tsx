import { Link } from "react-router-dom";

import styles from "./BottomPagination.module.css";

export function BottomPagination() {
  return (
    <div className={styles.BottomPagination__container}>
      <Link to="/" className="button__secondary">
        Anterior
      </Link>
      <p>
        Pagina <b>1</b> de <b>10</b>
      </p>
      <Link to="/" className="button__secondary">
        Siguiente
      </Link>
    </div>
  );
}
