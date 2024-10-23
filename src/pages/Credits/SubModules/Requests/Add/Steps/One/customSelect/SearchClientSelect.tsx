import Select from "react-select";
import { ISearchClientSelectProps } from "./interfaces/ISearchClientSelect";

import { useListClientsIDNames } from "../api/useListClientsIDNames";
import { formatKey } from "@/utils/helpers";

export function SearchClientSelect({
  selectedClient,
  query,
  setQuery,
  withCredits = false,
}: ISearchClientSelectProps) {
  const { listClientIDNames } = useListClientsIDNames({
    withCredits,
  });

  const options = [
    {
      options: listClientIDNames?.map((client) => ({
        label: `${formatKey(client?.id)} - ${client?.name} ${client?.lastname}`,
        value: client?.id,
      })),
    },
  ];

  return (
    <Select
      options={options as any}
      name={selectedClient?.id}
      id={selectedClient?.id}
      value={selectedClient?.id}
      isClearable={true}
      onChange={(option: any) => {
        // setSelectedClient(option);
        setQuery(option?.value);
      }}
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
  );
}
