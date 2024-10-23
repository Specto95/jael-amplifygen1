import { SearchClientSelect } from "@/pages/Credits/SubModules/Requests/Add/Steps/One/customSelect/SearchClientSelect";
import { commaSeparator } from "@/utils/commaSeparator";
import { ICustomerSubscriptionProps } from "./interfaces/ICustomerSubscription";

export function CustomerSubscription({
  query,
  setQuery,
  selectedClient,
  setSelectedClient,
}: ICustomerSubscriptionProps) {
  return (
    <div className="flexColumn__spacingBasis23">
      <SearchClientSelect
        selectedClient={selectedClient}
        setSelectedClient={setSelectedClient}
        query={query}
        setQuery={setQuery}
        withCredits={true}
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
          <p className="heading__secondary bold">Sucursal</p>
          <span className="input__WFullTransparentRoundedSMB3">
            {selectedClient!.branchOfficeName || "-"}
          </span>
        </div>
        <div className="flexColumn__basis">
          <p className="heading__secondary bold">Crédito Disponible</p>
          <span className="input__WFullTransparentRoundedSMB3">
            ${commaSeparator(selectedClient!.credit_available!)}
          </span>
        </div>

        <div className="flexColumn__basis">
          <p className="heading__secondary bold">Total de Adeudo</p>
          <span className="input__WFullTransparentRoundedSMB3">
            ${commaSeparator(selectedClient!.outstanding_balance!)}
          </span>
        </div>
      </div>
    </div>
  );
}
