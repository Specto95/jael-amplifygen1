import { ScaleLoader } from "react-spinners";

import ArrowDown from "@/assets/img/ArrowDown.png";

import styles from "../MainPageSpinner.module.css";

export function ProductProviderTableSpinner() {
  return (
    <div className={styles["table-spinner__container"]}>
      <table>
        <thead>
          <tr>
            <th>
              Producto
              <img src={ArrowDown} alt={"Flecha hacia Abajo"} />
            </th>
            <th>
              Precio <img src={ArrowDown} alt={"Flecha hacia Abajo"} />
            </th>
            <th>
              Clase <img src={ArrowDown} alt={"Flecha hacia Abajo"} />
            </th>
            <th>
              Clave <img src={ArrowDown} alt={"Flecha hacia Abajo"} />
            </th>
            <th>
              Marca <img src={ArrowDown} alt={"Flecha hacia Abajo"} />
            </th>
            <th>
              SubGrupo <img src={ArrowDown} alt={"Flecha hacia Abajo"} />
            </th>
          </tr>
        </thead>
      </table>
      <div className={styles["spinner-center"]}>
        <ScaleLoader color="#3ea2f7" />
      </div>
    </div>
  );
}
