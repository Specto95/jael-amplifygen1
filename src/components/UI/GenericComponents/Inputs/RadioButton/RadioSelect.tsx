import { IRadioSelectProps } from "./interfaces/IRadioSelect";

export default function RadioSelect({
  cell,
  data,
  setData,
}: IRadioSelectProps) {
  return (
    <div className="flex__spacing">
      <input
        type="radio"
        name="selectedClient"
        {...cell.getCellProps()}
        checked={(data as any)?.id === cell.row.original.id}
        onChange={() => {
          setData!(cell.row.original);
        }}
      />
      {cell.value}
    </div>
  );
}
