import { IInputCheckRowProps } from "./interfaces/IInputCheckRow";

export function InputCheckRow({
  setSelectedRows,
  cell,
  row,
}: IInputCheckRowProps) {
  return (
    <div className="flex__spacing">
      <input
        type="checkbox"
        {...cell.getCellProps()}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const isChecked = e.target.checked;
          setSelectedRows &&
            setSelectedRows((prev: any) => {
              if (isChecked) {
                return [...prev, row.original];
              } else {
                return prev.filter(
                  (r: { id: string }) =>
                    r.id !==
                    (
                      row.original as {
                        id: string;
                      }
                    ).id
                );
              }
            });
        }}
      />
      {cell.value}
    </div>
  );
}
