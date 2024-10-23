import {Column} from 'react-table';

export interface IData {
    data: {
      producto: string;
      precio: number;
      clase: string;
      clave: string;
      marca: string;
      subGrupo: string;
      comision: string;
      unidad: string;
    }[];
  }
  
  export interface IColumns {
    columns: readonly Column<{
      producto: string;
      precio: number;
      clase: string;
      clave: string;
      marca: string;
      subGrupo: string;
      comision: string;
      unidad: string;
    }>[];
  }