export interface IRadioSelectProps {
  cell: Cell<object, T>;
  data: T[];
  setData: React.Dispatch<React.SetStateAction<T[]>>;
}
