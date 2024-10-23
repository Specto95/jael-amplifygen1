import { useState, useEffect } from "react";

//* API
import { useListClientsWithoutCreditTableDetails } from "./api/useListClientsWithoutCreditTableDetails";

//* PAGES
import { SelectClientColumns } from "./Columns/SelectClientColumns";
import { ISelectClientProps } from "./interfaces/ISelectClient";
import { GeneralBackContinue } from "@/components/UI/GenericComponents/BackContinue/General/GeneralBackContinue";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";
import { IListClientsWithoutCreditTableDetailsAPI } from "./api/interfaces/IListClientsWithoutCreditTableDetails";
import { GenericFilteredItems } from "@/components/UI/GenericComponents/FilteredItems/GenericFilteredItems";
import { fieldFiltersObjs } from "@/utils/globalObjs/Filters/fieldFIlters";
import SectionForm from "@/components/UI/GenericComponents/SectionForm/SectionForm";

export function SelectClient({
  handleBackStep,
  handleNextStep,
  clientData,
  setClientData,
  currentStepIndex,
  newClientCreditAmount,
  setFieldValue,
}: ISelectClientProps) {
  useEffect(() => {
    setFieldValue!("newClientCreditAmount", 0);
  }, []);

  useEffect(() => {
    if (clientData?.id) {
      setToBeNext(true);
      return;
    }
    setToBeNext(false);
  }, [clientData]);

  const { listClientsWithoutCreditTableDetails, isLoading } =
    useListClientsWithoutCreditTableDetails();

  const [toBeNext, setToBeNext] = useState<boolean>(false);

  const { filteredItems, query, setQuery } = GenericFilteredItems(
    listClientsWithoutCreditTableDetails,
    fieldFiltersObjs.NAME as any
  );

  return (
    <SectionForm
      headingTitle="Nuevo Crédito"
      headingSubtitle="Clientes"
      hasTopSection={true}
      fullWidthBGMain={true}
      query={query}
      setQuery={setQuery}
      withFiltering={true}
    >
      <ShowTableData
        Data={filteredItems || listClientsWithoutCreditTableDetails}
        Columns={SelectClientColumns}
        notFoundDataMessage="No hay Clientes con Créditos"
        hasBackground={true}
        hasRadioSelect={true}
        isLoading={isLoading}
        setData={
          setClientData as unknown as React.Dispatch<
            React.SetStateAction<IListClientsWithoutCreditTableDetailsAPI[]>
          >
        }
        selectedData={
          clientData! as unknown as IListClientsWithoutCreditTableDetailsAPI
        }
        noDataRedirect={
          !!(
            !filteredItems.length ||
            !listClientsWithoutCreditTableDetails.length
          )
        }
        redirectMessage="Dar de Alta Crédito Cliente"
        redirectLink="/creditRequests/add"
      />

      {filteredItems.length && listClientsWithoutCreditTableDetails.length ? (
        <h3 className="heading__tertiaryCenter">
          Seleccionar cliente para continuar
        </h3>
      ) : (
        <></>
      )}

      <GeneralBackContinue
        handleBackStep={handleBackStep}
        handleNextStep={handleNextStep}
        currentStepIndex={currentStepIndex}
        toBeNext={toBeNext}
      />
    </SectionForm>
  );
}
