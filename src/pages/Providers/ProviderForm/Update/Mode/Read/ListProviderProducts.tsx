import { useMemo } from "react";
import { Column, useTable } from "react-table";

import styles from "../../UpdateProvider.module.css";

import { IProviderProductsProps } from "@/interfaces/Providers/providers";
import { ProviderProductsColumns } from "./ListProviderProductsColumns";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";

export function ListProviderProducts({ productData }: IProviderProductsProps) {
  return (
    <>
      <h1 className="heading__primary">Productos del proveedor</h1>

      <ShowTableData
        Data={productData!}
        Columns={ProviderProductsColumns}
        notFoundDataMessage="No se encontraron productos registrados."
        hasBackground={true}
      />
    </>
  );
}
