import { IClassesListColumns } from "./interface/IClassesListColumns";

export const ClassesListColumns: IClassesListColumns[] = [
  {
    Header: "Nombre de Clases",
    accessor: "name",
  },
  {
    Header: "ID de clase",
    accessor: "id",
  },
  {
    Header: "Creado por",
    accessor: "createdBy",
  },
];
