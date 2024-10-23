import { IListClientSelectedFullDetailsAPIResponse } from "../../One/api/interfaces/IListClientsWithoutCreditTableDetails";

export function setNewClientTotalCredit(
  newClientCreditAmount: number,
  clientData: IListClientSelectedFullDetailsAPIResponse
): number {
  return (
    (clientData!.totalCredit || clientData!.creditRequestAmount!) +
    newClientCreditAmount!
  );
}
