import { IFieldFilters } from "./interfaces/IFieldFilters";

type fieldFiltersKeys = keyof IFieldFilters

export const fieldFiltersObjs = {
  NAME: "name" as fieldFiltersKeys,
  CLIENTNAME: "clientName" as fieldFiltersKeys,
};
