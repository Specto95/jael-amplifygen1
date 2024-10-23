export interface IUserViewProps<T> {
  Data?: T[];
  setViewType?: (viewType: string) => void;
  query?: string;
  setQuery?: React.Dispatch<React.SetStateAction<string>>;
  buttonAction?: boolean;
  isForm?: boolean;
}
