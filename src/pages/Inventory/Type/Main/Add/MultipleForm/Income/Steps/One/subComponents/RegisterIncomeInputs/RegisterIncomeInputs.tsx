import { Field, ErrorMessage } from "formik";

import styles from "../../../../../../../InventoryForm.module.css";

import { useListProvidersEnterpriseNameInventory } from "./api/useListProvidersEnterpriseNameInventory";

//* INTERFACES
import { IRegisterIncomeInputsProps } from "@/interfaces/Inventory/inventory";

//* HOOKS
import { useSessionProvider } from "@/hooks/useSessionProvider";
import { RegisterIncomeSelectProvider } from "./CustomSelect/RegisterIncomeSelectProvider";

export function RegisterIncomeInputs({
  setSelectedState,
  selectedState,
  setFieldValue,
}: IRegisterIncomeInputsProps) {
  const { providersEnterpriseNameInventory } =
    useListProvidersEnterpriseNameInventory();
  const { userInfoData } = useSessionProvider();
  const provider = "incomeRegisterInputs.provider_name";

  return (
    <div className={styles["addresponsible__form-fullnameContainer"]}>
      <div className="flexColumn">
        <label
          htmlFor={userInfoData.id}
          className={styles.serviceProvider__label}
        >
          Administrador Responsable*
        </label>
        <Field
          type="text"
          name={userInfoData.id}
          id={userInfoData.id}
          value={userInfoData.name}
          readOnly
          className={styles["serviceProvider__inputRead"]}
        />
      </div>
      <div className={styles.flex__columnXL}>
        <label htmlFor={provider} className={styles.serviceProvider__labelXL}>
          Seleccionar proveedor *
        </label>
        <RegisterIncomeSelectProvider
          providersEnterpriseNameInventory={providersEnterpriseNameInventory}
          setSelectedState={setSelectedState}
          setFieldValue={setFieldValue}
          selectedState={selectedState}
        />

        {/* <Field
          as="select"
          name={provider}
          id={provider}
          className={`${styles["serviceProvider__input"]} ${
            touched?.provider_name && errors?.provider_name ? "input-error" : ""
          }`}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedState!(e.target.value);
            setFieldValue!(provider, e.target.value);
          }}
        >
          <option value="" disabled>
            Seleccione un Proveedor de la Lista:
          </option>
          {providersEnterpriseNameInventory.map((category) => (
            <option
              key={category.enterprise_name}
              value={category.enterprise_name}
            >
              {category.enterprise_name}
            </option>
          ))}
        </Field> */}
        <ErrorMessage
          name="incomeRegisterInputs.provider_name"
          component="div"
          className="error_responsibles"
        />
      </div>
    </div>
  );
}
