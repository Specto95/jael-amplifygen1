import { useState, useEffect } from "react";

//* GRAPHQL
import { getClientDetailsByID } from "@/graphql/queries";

//* INTERFACES
import { ISearchClientProps } from "./interfaces/ISearchClient";
import { SearchClientSelect } from "./customSelect/SearchClientSelect";
import { IGetClientDetailsByIDAPI } from "./api/interfaces/IUseGetClientDetailsByID";
import { GeneralBackContinue } from "@/components/UI/GenericComponents/BackContinue/General/GeneralBackContinue";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function SearchClient({
  setSelectedClient,
  selectedClient,
  handleBackStep,
  handleNextStep,
  currentStepIndex,
}: ISearchClientProps) {
  const [query, setQuery] = useState<string>("");

  const [toBeNext, setToBeNext] = useState<boolean>(false);

  useEffect(() => {
    if (selectedClient!.id) {
      setToBeNext(true);
    } else {
      setToBeNext(false);
    }
  }, [selectedClient]);

  useEffect(() => {
    const fetchGetClientDetailsByID = async () => {
      if (!query) return;
      try {
        const result : any = await clientAPI(getClientDetailsByID, {
          id: query,
        });

        const clientDetailsResult: IGetClientDetailsByIDAPI = {
          id: result.data.getClient.id,
          name: result.data.getClient.name,
          second_name: result.data.getClient.second_name,
          lastname: result.data.getClient.lastname,
          second_lastname: result.data.getClient.second_lastname,
          email: result.data.getClient.email,
          phone: result.data.getClient.phone,
          address: result.data.getClient.address,
          state: result.data.getClient.state,
          clientSince: result.data.getClient.createdAt.split("T")[0],
          // credit_available: result.data.getClient.credit.credit_available,
        };

        setSelectedClient!(clientDetailsResult);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchGetClientDetailsByID();
  }, [query]);

  return (
    <section className="generalForm__MW34">
      <h2 className="heading__main">Solicitud de Crédito</h2>

      <h3 className="heading__primary">Introducir nombre del cliente o ID</h3>

      <SearchClientSelect
        selectedClient={selectedClient}
        setSelectedClient={setSelectedClient}
        query={query}
        setQuery={setQuery}
      />

      <div className="grid42__spacingMYWrap">
        <div className="flexColumn__basis">
          <p className="heading__secondary bold">Nombre</p>
          <span className="input__WFullTransparentRoundedSMB3">
            {selectedClient!.name || "-"}
          </span>
        </div>
        <div className="flexColumn__basis">
          <p className="heading__secondary bold">Segundo Nombre</p>
          <span className="input__WFullTransparentRoundedSMB3">
            {selectedClient!.second_name || "-"}
          </span>
        </div>
        <div className="flexColumn__basis">
          <p className="heading__secondary bold">Primer Apellido</p>
          <span className="input__WFullTransparentRoundedSMB3">
            {selectedClient!.lastname || "-"}
          </span>
        </div>
        <div className="flexColumn__basis">
          <p className="heading__secondary bold">Segundo Apellido</p>
          <span className="input__WFullTransparentRoundedSMB3">
            {selectedClient!.second_lastname || "-"}
          </span>
        </div>
      </div>

      <div className="flex__spacingMYFull">
        <div className="flexColumn__basis">
          <p className="heading__secondary bold">Número de Cliente</p>
          <span className="input__WFullTransparentRoundedSMB3">
            {selectedClient!.phone || "-"}
          </span>
        </div>
        <div className="flexColumn__basis">
          <p className="heading__secondary bold">Cliente desde</p>
          <span className="input__WFullTransparentRoundedSMB3">
            {selectedClient!.clientSince || "-"}
          </span>
        </div>
      </div>

      <div className="flex__spacingMYFull">
        <div className="flexColumn__basis">
          <p className="heading__secondary bold">Calle y Número</p>
          <span className="input__WFullTransparentRoundedSMB3">
            {selectedClient!.address || "-"}
          </span>
        </div>
        <div className="flexColumn__basis">
          <p className="heading__secondary bold">Estado</p>
          <span className="input__WFullTransparentRoundedSMB3">
            {selectedClient!.state || "-"}
          </span>
        </div>
      </div>

      <GeneralBackContinue
        handleBackStep={handleBackStep}
        handleNextStep={handleNextStep}
        currentStepIndex={currentStepIndex!}
        toBeNext={toBeNext}
      />
    </section>
  );
}
