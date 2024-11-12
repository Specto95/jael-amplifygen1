import { useState, useEffect } from "react";

//* AMPLIFY IMPORTS
import { clientAPI } from "@/utils/amplifyAPI/client";
import {
  listPDVClientsFullNameAPI,
  listPDVClientsFullNameBOAPI,
} from "@/graphql/queries";
import { IUseListClientsFullNameAPI } from "./interfaces/IUseListClientsFullName";
import { ListClientsQuery } from "@/API";

import { useSessionProvider } from "@/hooks/useSessionProvider";
import { IIsClientRegistered } from "@/interfaces/PDV/PDV";

export function useListRegisteredClients(
  branchOfficeID: string,
  isActive: IIsClientRegistered["isClientRegistered"]
) {
  const [listClientsFullName, setListClientsFullName] = useState<
    IUseListClientsFullNameAPI[]
  >([]);

  const { mainBranchInventory } = useSessionProvider();

  useEffect(() => {
    const fetchListRegisteredClients = async () => {
      try {
        if (isActive === "no") return;

        const result = (await clientAPI(
          branchOfficeID === mainBranchInventory.id
            ? listPDVClientsFullNameBOAPI
            : listPDVClientsFullNameAPI,
          {
            branchOfficeID,
          }
        )) as { data: ListClientsQuery };

        const ListRegisteredClients = result.data.listClients!.items.map(
          (client) => {
            const ListRegisteredClientsObj: IUseListClientsFullNameAPI = {
              id: client!.id,
              hasCredit: client!.hasCredit,
              fullName: `${client!.name} ${client!.lastname}`,
            };

            if (branchOfficeID === mainBranchInventory.id) {
              (ListRegisteredClientsObj["branchOfficeID"] =
                client?.branchOffice?.id),
                (ListRegisteredClientsObj["branchOfficeName"] =
                  client?.branchOffice?.name);
            }

            return ListRegisteredClientsObj;
          }
        );

        console.log(ListRegisteredClients);

        setListClientsFullName(ListRegisteredClients);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchListRegisteredClients();
  }, [branchOfficeID, isActive]);

  return { listClientsFullName, setListClientsFullName };
}
