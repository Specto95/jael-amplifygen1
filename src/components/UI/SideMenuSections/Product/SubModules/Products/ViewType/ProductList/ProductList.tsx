//*INTERFACES
import { IProductListProps } from "./interfaces/IProductList";

//* COMPONENTS
import { ProductListColumns } from "./Columns/ProductListColumns";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";

export function ProductList({ Products, setProducts }: IProductListProps) {
  return (
    <ShowTableData
      Data={Products!}
      Columns={ProductListColumns}
      notFoundDataMessage="No se encontraron productos"
      withActions={true}
      hasBackground={true}
      setData={setProducts! as React.Dispatch<React.SetStateAction<any[]>>}
    />
  );
}
