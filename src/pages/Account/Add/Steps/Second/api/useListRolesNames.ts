import { useState, useEffect } from "react";

//* INTERFACES
import { IUseListRolesNamesAPI } from "./interfaces/IUseListRolesNames";

//* AMPLIFY IMPORTS
import { listRolesNamesAPI } from "@/graphql/queries";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function useListRolesNames() {
  const [rolesNames, setRolesNames] = useState<IUseListRolesNamesAPI[]>([]);

  useEffect(() => {
    const fetchListRolesNames = async () => {
      try {
        const result: any = await clientAPI(listRolesNamesAPI);

        setRolesNames(result.data.listRoles.items);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchListRolesNames();
  }, []);

  return { rolesNames, setRolesNames };
}
