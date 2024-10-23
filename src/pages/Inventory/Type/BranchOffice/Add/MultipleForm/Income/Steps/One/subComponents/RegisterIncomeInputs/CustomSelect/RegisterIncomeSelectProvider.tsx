import Select from "react-select";
import { IRegisterIncomeSelectProviderProps } from "./interfaces/IRegisterIncomeSelectProvider";
import { Field } from "formik";

export function RegisterIncomeSelectProvider({
  providersEnterpriseNameInventory,
  selectedState,
  setFieldValue,
  setSelectedState,
}: IRegisterIncomeSelectProviderProps) {
  const provider = "incomeRegisterInputs.provider_name";

  const options = [
    {
      options: providersEnterpriseNameInventory.map((provider) => ({
        label: provider.enterprise_name,
        value: provider.enterprise_name,
      })),
    },
  ];

  return (
    <Field>
      {() => (
        <Select
          options={options}
          name={provider}
          id={provider}
          value={selectedState}
          isClearable={true}
          onChange={(option: any) => {
            setSelectedState!(option);
            setFieldValue!(provider, !option ? "" : option.value);
          }}
          //   className={styles["serviceProvider__input"]}
          styles={{
            option: (provided) => ({
              ...provided,
              backgroundColor: "var(--bg-secondary)",
              color: "var(--text-primary)",
              cursor: "pointer",
              ":hover": {
                backgroundColor: "var(--text-secondary)",
              },
            }),

            control: (provided) => ({
              ...provided,
              height: "var(--h-button)",
              backgroundColor: "var(--bg-secondary)",
              border: "var(--border-2px)",
              borderRadius: "var(--radius-sm)",
              cursor: "pointer",
              ":hover": {
                border: "var(--border-2px)",
              },
            }),
            indicatorSeparator: (provided) => ({
              ...provided,
              display: "none",
            }),
            placeholder: (provided) => ({
              ...provided,
              color: "var(--text-primary)",
              fontWeight: "bold",
            }),
            indicatorsContainer: (provided) => ({
              ...provided,
              color: "var(--text-primary)",
            }),
            menu: (provided) => ({
              ...provided,
              margin: "0",
            }),
            singleValue: (provided) => ({
              ...provided,
              color: "var(--text-primary)",
            }),
            menuList: (provided) => ({
              ...provided,
              cursor: "pointer",
              margin: "0",
              padding: "0",
              backgroundColor: "var(--bg-secondary)",
            }),
          }}
        />
      )}
    </Field>
  );
}
