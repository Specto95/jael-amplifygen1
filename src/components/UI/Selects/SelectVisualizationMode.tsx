import { useState } from "react";
import Select, { components } from "react-select";

//*COMPONENTS
import { options } from "../SectionTopOptions/SectionTopOptionsData";
import { ISelectTopSectionsData as OptionType } from "../SectionTopOptions/interfaces/ISelectTopSectionsData";

//* INTERFACES
import { ISetViewType } from "./interfaces/ISelectVisualizationMode";

const customOption = (props: any) => (
  <components.Option {...props}>
    {props.data?.image && <img src={props.data.image} alt="icon" />}
    {props.label}
  </components.Option>
);

export function SelectVisualizationMode({ setViewType }: ISetViewType) {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  function handleViewChange(selectedOption: OptionType | null) {
    if (selectedOption) {
      setViewType(selectedOption.value);
      setSelectedOption(selectedOption);
    }
  }
  return (
    <>
      <Select
        options={options}
        components={{ Option: customOption }}
        value={selectedOption}
        onChange={handleViewChange}
        placeholder="Visualización"
        isSearchable={false}
        isClearable={false}
        styles={{
          option: (provided) => ({
            ...provided,
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            backgroundColor: "var(--bg-secondary)",
            color: "var(--text-primary)",
            fontWeight: "bold",
            cursor: "pointer",
            borderBottom: "2px solid var(--text-primary)",
            ":last-of-type": {
              borderBottom: "none",
            },
            ":hover": {
              backgroundColor: "var(--text-secondary)",
            },
          }),

          control: (provided) => ({
            ...provided,
            display: "flex",
            width: "var(--w-selectView)",
            height: "var(--h-button)",
            backgroundColor: "var(--bg-secondary)",
            border: "2px solid var(--text-primary)",
            borderRadius: "var(--radius-sm)",
            cursor: "pointer",
            ":hover": {
              border: "2px solid var(--text-primary)",
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
            width: "var(--w-selectView)",
          }),
          singleValue: (provided) => ({
            ...provided,
            color: "var(--text-primary)",
            fontWeight: "bold",
          }),
          menuList: (provided) => ({
            ...provided,
            cursor: "pointer",
            margin: "0",
            padding: "0",
            backgroundColor: "var(--text-secondary)",
            color: "var(--text-primary)",
          }),
        }}
      />
    </>
  );
}
