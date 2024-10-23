import styles from "./FiltersIcon.module.css";

export function FiltersIcon() {
  return (
    <div className={styles["section__filters-right"]}>
      <button className="button__primary">Imprimir PDF</button>
    </div>
  );
}
