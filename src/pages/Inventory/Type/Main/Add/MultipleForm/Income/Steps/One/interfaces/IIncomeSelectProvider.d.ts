export interface ISelectedStateObj {
  value: string;
  label: string;
}

export interface ISelectedStateState {
  selectedState?: ISelectedStateObj;
  setSelectedState?: React.Dispatch<React.SetStateAction<ISelectedStateObj>>;
}
