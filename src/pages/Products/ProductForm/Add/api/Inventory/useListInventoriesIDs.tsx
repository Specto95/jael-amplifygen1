import { useState, useEffect } from "react";

import { IUseListInventoriesIDsAPI } from "./interfaces/IUseListInventoriesIDs";

//* AMPLIFY IMPORTS
import { clientAPI } from "@/utils/amplifyAPI/client";
import { listInventoriesIDsAPI } from "@/graphql/queries";

export function useListInventoriesIDs() {
  const [listInventoriesIDs, setListInventoriesIDs] = useState<
    IUseListInventoriesIDsAPI[]
  >([]);

  useEffect(() => {
    const fetchListInventoriesIDs = async () => {
      try {
        const result: any = await clientAPI(listInventoriesIDsAPI);

        setListInventoriesIDs(result.data.listInventories.items);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchListInventoriesIDs();
  }, []);

  return { listInventoriesIDs, setListInventoriesIDs };
}
