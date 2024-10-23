import Search from "@/assets/img/Search.png";

import styles from "./SectionTopOptionsForm.module.css";

import { FiltersSelect } from "@/components/UI/SectionTopOptions/Filters/FiltersSelect";
import { ISectionTopOptionsFormProps } from "@/components/UI/GenericComponents/SectionTopOptions/interfaces/ISectionTopOptionsForm";

export function SectionTopOptionsForm({
  query,
  setQuery,
}: ISectionTopOptionsFormProps) {
  return (
    <div className="flex__spacingBetween-MYMD">
      <div className={styles["STOF__searchOut-container"]}>
        <input
          value={query}
          onChange={(e) => setQuery!(e.target.value)}
          type="text"
          className="input__fullSecondaryRoundedSMB2"
          placeholder="Buscar por nombre"
        />
        <img
          src={Search}
          alt="Buscar"
          className={styles["STOF__search-icon"]}
        />
      </div>
      {/* <FiltersSelect /> */}
    </div>
  );
}
