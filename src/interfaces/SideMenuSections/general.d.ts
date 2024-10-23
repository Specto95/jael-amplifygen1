import { Row } from "react-table";
import { IListProductsPDV } from "../PDV/PDV";
import { ISetListProductViewData } from "../Products/products";
import { FormEvent } from "react";

export interface IHandleNextStep {
  handleNextStep?: () => void;
}

export interface IHandleBackStep {
  handleBackStep?: () => void;
}

export interface IHandleBack {
  handleBack: () => void;
}

export interface IHandleBothSteps extends IHandleNextStep, IHandleBackStep {}

export interface ISetFieldValue {
  setFieldValue?: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
}

export interface IToBeFinished {
  toBeFinished?: boolean;
}

export interface IToBeNext {
  toBeNext?: boolean;
}

export interface IHandleSubmit {
  handleSubmit: (e?: FormEvent<HTMLFormElement> | undefined) => void;
}

export interface IIsLoading {
  isLoading?: boolean;
}

export interface ISetIsLoading {
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IRow {
  row: Row<object>;
}

export interface IQuery {
  query?: string;
  setQuery?: (query: string) => void;
}

export interface IIsEditing {
  isEditing?: boolean;
}

export interface ISetIsEditing {
  setIsEditing?: React.Dispatch<React.SetStateAction<boolean>>;
}
