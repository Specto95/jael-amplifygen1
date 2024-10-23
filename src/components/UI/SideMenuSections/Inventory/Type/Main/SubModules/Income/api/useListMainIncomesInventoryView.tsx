import { useState, useEffect } from "react";

//* AMPLIFY IMPORTS
import { listMainIncomeInventoriesViewAPI } from "@/graphql/queries";
import {
  IUseListMainIncomesInventoryViewAPI,
  IUseListMainIncomesInventoryViewAPIResponse,
} from "./interfaces/IUseListMainIncomesInventoryView";

import { useSessionProvider } from "@/hooks/useSessionProvider";
import { useSectionProvider } from "@/hooks/useSectionProvider";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function useListMainIncomesInventoryView() {
  const { branchInventory, mainBranchInventory, rolID } = useSessionProvider();
  const { sectionName } = useSectionProvider();

  const [listMainIncomesInventoryView, setListMainIncomesInventoryView] =
    useState<IUseListMainIncomesInventoryViewAPI[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchListMainIncomesInventoryView = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result: any = await clientAPI(listMainIncomeInventoriesViewAPI, {
          branchOfficeID:
            sectionName === "BOInventory-Income" && branchInventory.id
              ? branchInventory.id
              : mainBranchInventory.id,
        });

        const listMainIncomesInventoryView: IUseListMainIncomesInventoryViewAPI[] =
          result.data.listIncomeInventories.items.map(
            (item: IUseListMainIncomesInventoryViewAPIResponse) => {
              return {
                id: item.id,
                date: item.date,
                income: "Ingreso",
              };
            }
          );
        setListMainIncomesInventoryView(listMainIncomesInventoryView);
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListMainIncomesInventoryView();
  }, []);

  return {
    listMainIncomesInventoryView,
    setListMainIncomesInventoryView,
    isLoading,
  };
}
