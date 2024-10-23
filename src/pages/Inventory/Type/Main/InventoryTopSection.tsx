import Search from "@/assets/img/Search.png";

import styles from "./InventoryForm.module.css";

import { FiltersSelect } from "@/components/UI/SectionTopOptions/Filters/FiltersSelect";

export function InventoryTopSection() {
  return (
    <div className={styles["productProvider__spaceBetween"]}>
      <div className={styles["productProvider__searchOut-container"]}>
        <input
          type="text"
          placeholder="Buscar por nombre, clase, grupo..."
          className={styles["section__search-input"]}
        />
        <img
          src={Search}
          alt="Buscar"
          className={styles["section__search-icon"]}
        />
      </div>
      <FiltersSelect />
    </div>
  );
}
