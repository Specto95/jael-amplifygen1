import { ISectionName } from "@/interfaces/main";

export interface IInputSearcherProps {
    query: string;
    setQuery: (query: string) => void;
    sectionName: ISectionName["sectionName"];
  }