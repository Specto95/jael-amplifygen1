import { useState, useEffect } from "react";

import { IListUserNamesInventoryTable } from "@/interfaces/Inventory/inventory";

//* AMPLIFY IMPORTS
import { clientAPI } from "@/utils/amplifyAPI/client";
import { listUsersNamesAPI } from "@/graphql/queries";

export function useListUserNamesInventory() {
  const [userNamesInventory, setUserNamesInventory] = useState<
    IListUserNamesInventoryTable[]
  >([]);

  useEffect(() => {
    const fetchIncomeInventoryProducts = async () => {
      try {
        const result: any = await clientAPI(listUsersNamesAPI);

        setUserNamesInventory(result.data.listUserInfos.items);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchIncomeInventoryProducts();
  }, []);

  return { userNamesInventory, setUserNamesInventory };
}
