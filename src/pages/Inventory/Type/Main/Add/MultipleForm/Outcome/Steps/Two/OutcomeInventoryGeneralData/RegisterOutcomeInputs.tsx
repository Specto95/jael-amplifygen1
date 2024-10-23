import { useEffect } from "react";
import { Field, ErrorMessage } from "formik";

import styles from "../../../../../../InventoryForm.module.css";

//* HOOKS
import { useSessionProvider } from "@/hooks/useSessionProvider";

//* APIS
import { useListBOfficesOutcomeNamesInventory } from "./api/useListBOfficeOutcomeNamesInventory";
import { listUserNameByEmail } from "../../../../api/listUserNameByEmail";

//* INTERFACES
import { IRegisterOutcomeInputsProps } from "@/interfaces/Inventory/inventory";

export function RegisterOutcomeInputs({
  setSelectedState,
  selectedState,
  setFieldValue,
  errors,
  touched,
  userResponsible,
  selectedBranchOffice,
}: IRegisterOutcomeInputsProps) {
  const { userInfoData } = useSessionProvider();
  const { branchOfficesInventoryNames } = useListBOfficesOutcomeNamesInventory(
    selectedState!
  );
  const { userNameByEmail } = listUserNameByEmail(
    JSON.parse(sessionStorage.getItem("user")!).email
  );

  const responsible = "outcomeRegisterInputs.admin_name";
  const branchOffice = "outcomeRegisterInputs.branchOffice_name";

  useEffect(() => {
    if (!userResponsible) {
      if (userNameByEmail && typeof userNameByEmail === "string") {
        setFieldValue!(responsible, userNameByEmail);
        return;
      }
      return;
    }
  }, [userNameByEmail]);

  return (
    <div className="flex__spacingWrapMY">
      <div className="flexColumn">
        <label
          htmlFor={userInfoData.name}
          className={styles.serviceProvider__label}
        >
          Administrador Responsable*
        </label>
        <Field
          type="text"
          name={userInfoData.name}
          id={userInfoData.name}
          value={userInfoData.name}
          readOnly
          className={styles["serviceProvider__inputRead"]}
        />
      </div>
      <div className={styles.flex__columnXL}>
        <label
          htmlFor={branchOffice}
          className={styles.serviceProvider__labelXL}
        >
          Seleccionar sucursal *
        </label>
        <Field
          as="select"
          name={branchOffice}
          placeholder="Seleccione una sucursal:"
          id={branchOffice}
          className={`${styles["serviceProvider__input"]} ${
            touched?.branchOffice_name && errors?.branchOffice_name
              ? "input-error"
              : ""
          }`}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedState!(e.target.value);
            setFieldValue!(branchOffice, e.target.value);
          }}
          value={selectedBranchOffice?.name}
        >
          <option value="" disabled>
            Seleccione una Sucursal:
          </option>
          {branchOfficesInventoryNames.map((branch_office) => (
            <option key={branch_office.name} value={branch_office.name}>
              {branch_office.name}
            </option>
          ))}
        </Field>
        <ErrorMessage
          name={branchOffice}
          component="div"
          className="error_responsibles"
        />
      </div>
    </div>
  );
}
