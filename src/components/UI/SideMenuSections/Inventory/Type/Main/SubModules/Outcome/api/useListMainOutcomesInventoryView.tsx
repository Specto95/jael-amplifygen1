import { useState, useEffect } from "react";

//* AMPLIFY IMPORTS
import { listMainOutcomesInventoryViewAPI } from "@/graphql/queries";
import {
  IUseListMainOutcomesInventoryViewAPI,
  IUseListMainOutcomesInventoryViewAPIResponse,
} from "./interfaces/IUseListMainOutcomesInventoryView";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function useListMainOutcomesInventoryView() {
  const [listMainOutcomesInventoryView, setListMainOutcomesInventoryView] =
    useState<IUseListMainOutcomesInventoryViewAPI[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchListMainOutcomesInventoryView = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result: any = await clientAPI(listMainOutcomesInventoryViewAPI);

        const listMainOutcomesInventoryView: IUseListMainOutcomesInventoryViewAPI[] =
          result.data.listOutcomeInventories.items.map(
            (item: IUseListMainOutcomesInventoryViewAPIResponse) => {
              return {
                id: item.id,
                date: item.date,
                outcome: "Egreso",
                branchOfficeName: item.branchOffice.name,
              };
            }
          );

        setListMainOutcomesInventoryView(listMainOutcomesInventoryView);
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListMainOutcomesInventoryView();
  }, []);

  return {
    listMainOutcomesInventoryView,
    setListMainOutcomesInventoryView,
    isLoading,
  };
}
