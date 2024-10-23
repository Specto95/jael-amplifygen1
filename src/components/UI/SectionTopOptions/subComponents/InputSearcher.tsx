import styles from "../SectionTopOptions.module.css";

//* ASSETS
import Search from "@/assets/img/Search.png";

//* INTERFACES
import { IInputSearcherProps } from "./interfaces/IInputSearcher";

export function InputSearcher({
  query,
  setQuery,
  sectionName,
}: IInputSearcherProps) {
  return (
    <div
      className={` ${
        sectionName === "globalProducts"
          ? styles["STO__search-containerFull"]
          : styles["STO__search-container"]
      } `}
    >
      <input
        value={query}
        onChange={(e) => setQuery!(e.target.value)}
        type="text"
        placeholder={
          sectionName === "products" ||
          sectionName === "mainInventory" ||
          sectionName === "mainInventory-Movements" ||
          sectionName === "mainInventory-Outcome" ||
          sectionName === "BOInventory" ||
          sectionName === "BOInventory-Inventory" ||
          sectionName === "providers" ||
          sectionName === "PDV"
            ? "Buscar por nombre, clase, grupo..."
            : sectionName === "clients"
            ? "Buscar por nombre, #cliente..."
            : sectionName === "commissions" || sectionName === "branch-offices"
            ? "Buscar por sucursal"
            : sectionName === "account"
            ? "Buscar por nombre de usuario, id.."
            : "Buscar"
        }
        className={styles["STO__search-input"]}
      />
      <img src={Search} alt="search" className={styles["STO__search-icon"]} />
    </div>
  );
}
