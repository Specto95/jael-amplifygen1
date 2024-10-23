import { useMemo, useState } from "react";

import styles from "../../../MainView.module.css";
import styles2 from "./BranchOfficeProducts.module.css";

//?SRC IMPORTS

//* APIs
import { useListBranchOfficeIDNames } from "@/generalModels/api/SideMenuSections/BranchOffices/listBranchOfficeIDNames/useListBranchOfficeIDNames";
import { UserView } from "@/components/UI/RoleInfo/UserView/UserView";

export function BranchOfficeProductsView() {
  const [query, setQuery] = useState("");
  const { branchOfficeIDNames } = useListBranchOfficeIDNames();

  return (
    <>
      <UserView query={query} setQuery={setQuery} />
      <section className={styles.section__module}>
        {/* <InputSearcher
        query={query}
        setQuery={setQuery}
        sectionName={sectionName}
      /> */}

        <select
          name="branchOffice"
          id="branchOffice"
          onChange={(e) =>
            sessionStorage.setItem("branchOffice", e.target.value)
          }
          className={styles2.BOP__Select}
        >
          <option value="" disabled>
            Selecciona una sucursal
          </option>
          {branchOfficeIDNames.map((branchOfficeName) => (
            <option value={branchOfficeName.id} key={branchOfficeName.name}>
              {branchOfficeName.name}
            </option>
          ))}
        </select>
      </section>
    </>
  );
}
