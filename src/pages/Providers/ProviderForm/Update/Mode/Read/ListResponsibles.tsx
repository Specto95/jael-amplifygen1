import { IListResponsiblesProps } from "@/interfaces/Providers/providers";
import { ProviderResponsiblesColumns } from "./ListResponsiblesColumns";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";

export function ListResponsibles({ responsibleData }: IListResponsiblesProps) {
  return (
    <>
      <h1 className="heading__primary">Encargados</h1>
      <ShowTableData
        Data={responsibleData}
        Columns={ProviderResponsiblesColumns}
        notFoundDataMessage="No se encontraron responsables registrados."
        hasBackground={true}
      />
    </>
  );
}
