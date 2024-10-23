import { useState, useEffect } from "react";

//* AMPLIFY IMPORTS
import { clientAPI } from "@/utils/amplifyAPI/client";
import { listClientsFullNameAPI } from "@/graphql/queries";
import { IUseListClientsFullNameAPI } from "./interfaces/IUseListClientsFullName";

export function useListClientsFullNameByBranchOfficeID(branchOfficeID: string) {
  
  const [listClientsFullName, setListClientsFullName] = useState<
    IUseListClientsFullNameAPI[]
  >([]);

  useEffect(() => {
    const fetchListClientsFullName = async () => {
      try {
        const result: any = await clientAPI(listClientsFullNameAPI, {
          branchOfficeID,
        });

        console.log(result)

        const fullName = result.data.listClients.items.map((client: any) => {
          return {
            id: client.id,
            hasCredit: client.hasCredit,
            fullName: `${client.name} ${client.lastname}`,
          };
        });

        setListClientsFullName(fullName);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchListClientsFullName();
  }, [branchOfficeID]);

  return { listClientsFullName, setListClientsFullName };
}
