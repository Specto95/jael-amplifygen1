import { ISearchClientProps } from "../../interfaces/ISearchClient";


export interface ISearchClientSelectProps extends ISearchClientProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  withCredits?: boolean;
}
