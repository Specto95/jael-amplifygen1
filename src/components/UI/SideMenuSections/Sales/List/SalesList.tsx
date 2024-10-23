//?SRC IMPORTS

//*COMPONENTS
import { SalesListColumns } from "./Columns/SalesListColumns";

//*INTERFACES
import { ISalesListProps } from "./interfaces/ISalesList";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";

export function SalesList({ Sales, setSales, isLoading }: ISalesListProps) {
  return (
    <ShowTableData
      Data={Sales}
      Columns={SalesListColumns}
      setData={setSales}
      isLoading={isLoading}
      notFoundDataMessage="No se encontraron ventas"
      withActions={true}
      hasBackground={true}
      hasPagination={true}
    />
  );
}
