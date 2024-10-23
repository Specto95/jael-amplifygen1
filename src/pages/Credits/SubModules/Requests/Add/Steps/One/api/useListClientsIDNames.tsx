import { useState, useEffect } from "react";

import { useSessionProvider } from "@/hooks/useSessionProvider";

//* AMPLIFY IMPORTS
import { listClientsIDNamesAPI } from "@/graphql/queries";
import {
  IUseListClientsIDNamesAPI,
  IUseListClientsIDNamesProps,
} from "./interfaces/IUseListClientsIDNames";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function useListClientsIDNames({
  withCredits = false,
}: IUseListClientsIDNamesProps) {
  const { branchInventory, mainBranchInventory } = useSessionProvider();

  const [listClientIDNames, setListClientIDNames] = useState<
    IUseListClientsIDNamesAPI[]
  >([]);

  useEffect(() => {
    const fetchListClientIDNames = async () => {
      try {
        interface IFilter {
          hasCredit?: {
            eq: boolean;
          };
          hasCreditRequest: {
            eq: boolean;
          };
          branchOfficeID?: {
            eq: string;
          };
        }

        const filter: IFilter = {
          hasCredit: {
            eq: withCredits,
          },
          hasCreditRequest: {
            eq: false!,
          },
        };

        if (!mainBranchInventory.id && branchInventory.id) {
          filter.branchOfficeID = {
            eq: branchInventory.id,
          };
        }

        const result: any = await clientAPI(listClientsIDNamesAPI, {
            filter,
          }
        );

        const clientDetailsResult: IUseListClientsIDNamesAPI[] =
          result.data.listClients.items.map(
            (client: IUseListClientsIDNamesAPI) => {
              const clientIDNames: IUseListClientsIDNamesAPI = {
                id: client.id,
                name: client.name,
                lastname: client.lastname,
              };
              return clientIDNames;
            }
          );

        setListClientIDNames(clientDetailsResult);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchListClientIDNames();
  }, []);

  return { listClientIDNames, setListClientIDNames };
}
