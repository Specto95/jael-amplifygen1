import { useState, useEffect } from "react";

//* AMPLIFY IMPORTS
import {
  listMainIncomeInventoriesViewAPI,
  listMainOutcomesInventoryViewAPI,
} from "@/graphql/queries";
import {
  IUseListMainIncomesInventoryViewAPI,
  IUseListMainIncomesInventoryViewAPIResponse,
} from "./interfaces/IUseListMainIncomesInventoryView";

import { useSessionProvider } from "@/hooks/useSessionProvider";
import { useSectionProvider } from "@/hooks/useSectionProvider";
import { OperationTypeSpanish } from "@/components/UI/GenericComponents/Table/TableDataObjs";

import { clientAPI } from "@/utils/amplifyAPI/client";

//? THIS HOOK IS TO RETRIEVE AS MAIN MOVEMENTS (INCOME/OUTCOMES) OR BO INCOMES
export function useListMainIncomesInventoryView() {
  const { branchInventory, mainBranchInventory, rolID } = useSessionProvider();
  const { sectionName } = useSectionProvider();

  const [listMainIncomesInventoryView, setListMainIncomesInventoryView] =
    useState<IUseListMainIncomesInventoryViewAPI[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    console.log("aqui");
    const fetchListMainIncomesOrOutcomeInventoryView = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const incomeResult: any = await clientAPI(
          listMainIncomeInventoriesViewAPI,
          {
            branchOfficeID:
              sectionName === "BOInventory-Income" && branchInventory.id
                ? branchInventory.id
                : mainBranchInventory.id,
          }
        );

        const listMainIncomesInventoryView: IUseListMainIncomesInventoryViewAPI[] =
          incomeResult.data.listIncomeInventories.items.map(
            (item: IUseListMainIncomesInventoryViewAPIResponse) => {
              return {
                id: item.id,
                date: item.date,
                operationType: OperationTypeSpanish.INCOME,
                branchOfficeName: "/",
              };
            }
          );

        if (sectionName === "mainInventory-Movements") {
          const outcomeResult: any = await clientAPI(
            listMainOutcomesInventoryViewAPI,
            {
              branchOfficeID: branchInventory.id,
            }
          );

          console.log(outcomeResult.data.listOutcomeInventories.items);

          const listMainOutcomesInventoryView: IUseListMainIncomesInventoryViewAPI[] =
            outcomeResult.data.listOutcomeInventories.items.map(
              (item: IUseListMainIncomesInventoryViewAPIResponse) => {
                return {
                  id: item.id,
                  date: item.date,
                  operationType: OperationTypeSpanish.OUTCOME,
                  branchOfficeName: item.branchOffice?.name,
                };
              }
            );

          listMainIncomesInventoryView.push(...listMainOutcomesInventoryView);
        }

        setListMainIncomesInventoryView(
          listMainIncomesInventoryView.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
        );
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListMainIncomesOrOutcomeInventoryView();
  }, [sectionName]);

  return {
    listMainIncomesInventoryView,
    setListMainIncomesInventoryView,
    isLoading,
  };
}
