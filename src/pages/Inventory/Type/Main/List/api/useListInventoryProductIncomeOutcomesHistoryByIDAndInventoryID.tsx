import { useState, useEffect } from "react";

import {
  IUseListInventoryProductIncomeInventoryProductQuantityObj,
  IUseListInventoryProductIOHistoryByIDAndInventoryIDAPI,
  IUseListInventoryProductIOHistoryByIDAndInventoryIDAPIResponse,
  IUseListInventoryProductOutcomeInventoryProductQuantityObj,
  IUseListInventoryProductIncomeInventoriesHistoryResponse,
  IUseListInventoryProductOutcomeInventoriesHistoryResponse,
  IUseListInventoryProductGeneralDetails,
} from "./interfaces/IUseListInventoryProductIncomeOutcomesHistoryByIDAndInventoryID";

//* HOOKS
import { useSessionProvider } from "@/hooks/useSessionProvider";

//* AMPLIFY IMPORTS
import { clientAPI } from "@/utils/amplifyAPI/client";
import { listInventoryProductIncomeOutcomesHistoryByIDAndInventoryIDAPI } from "@/graphql/queries";
import { AccountFormObj } from "@/pages/Account/utils/AccountFormObj";
import {
  findMostRecentIncomeDate,
  findMostRecentOutcomeDate,
} from "./helpers/functions";

export function useListInventoryProductIncomeOutcomesHistoryByIDAndInventoryID(
  productID: string
) {
  const { mainBranchInventory, rolID, branchInventory } = useSessionProvider();
  const [listInventoryProductIOHistory, setListInventoryProductIOHistory] =
    useState<IUseListInventoryProductIOHistoryByIDAndInventoryIDAPI[]>([]);
  const [listInventoryProductFlatten, setListInventoryProductFlatten] =
    useState<
      (
        | IUseListInventoryProductIncomeInventoriesHistoryResponse
        | IUseListInventoryProductOutcomeInventoriesHistoryResponse
      )[]
    >([]);

  const [mostRecentIncomeDate, setMostRecentIncomeDate] =
    useState<IUseListInventoryProductIncomeInventoriesHistoryResponse>(
      {} as IUseListInventoryProductIncomeInventoriesHistoryResponse
    );
  const [mostRecentOutcomeDate, setMostRecentOutcomeDate] =
    useState<IUseListInventoryProductOutcomeInventoriesHistoryResponse>(
      {} as IUseListInventoryProductOutcomeInventoriesHistoryResponse
    );
  const [inventoryProductGeneralDetails, setInventoryProductGeneralDetails] =
    useState<IUseListInventoryProductGeneralDetails>({
      inventoryProductID: "",
      productName: "",
      inventoryProductQuantity: 0,
    });

  useEffect(() => {
    const fetchListInventoryProductIOHistory = async () => {
      try {
        const result: any = await clientAPI(
          listInventoryProductIncomeOutcomesHistoryByIDAndInventoryIDAPI,
          {
            id: productID,
            inventoryID:
              rolID === AccountFormObj.ADMIN
                ? mainBranchInventory.inventoryID
                : branchInventory.inventoryID,
          }
        );

        console.log(result.data.listInventoryProducts.items);

        const data = result.data.listInventoryProducts.items.map(
          (
            item: IUseListInventoryProductIOHistoryByIDAndInventoryIDAPIResponse
          ) => {
            setInventoryProductGeneralDetails({
              inventoryProductID: item.id,
              productName: item.product.name,
              inventoryProductQuantity: item.quantity,
            });
            return {
              outcomeInventories:
                item.inventoryProductOutcomeInventory.items.length > 0
                  ? item.inventoryProductOutcomeInventory.items.map(
                      (
                        outcomeInventory: IUseListInventoryProductOutcomeInventoryProductQuantityObj
                      ) => {
                        return {
                          id: outcomeInventory.outcomeInventoryProductQuantity
                            .outcomeInventory.id,
                          quantity:
                            outcomeInventory.outcomeInventoryProductQuantity
                              .outcomeQuantity,
                          date: outcomeInventory.outcomeInventoryProductQuantity
                            .outcomeInventory.date,
                          inventoryOperationID:
                            outcomeInventory.outcomeInventoryProductQuantity
                              .outcomeInventory.inventoryOperationID.id,
                          inventoryOperationType: "EGRESO",
                          userInfoID:
                            outcomeInventory.outcomeInventoryProductQuantity
                              .outcomeInventory.userInfo.id,
                          userInfoName:
                            outcomeInventory.outcomeInventoryProductQuantity
                              .outcomeInventory.userInfo.name,
                          branchOfficeName:
                            outcomeInventory.outcomeInventoryProductQuantity
                              .outcomeInventory.branchOffice.name,
                          branchOfficeID:
                            outcomeInventory.outcomeInventoryProductQuantity
                              .outcomeInventory.branchOffice.id,
                          providerName: "",
                          providerID: "",
                        };
                      }
                    )
                  : [],
              incomeInventories:
                item.inventoryProductIncomeInventory.items.length > 0
                  ? item.inventoryProductIncomeInventory.items.map(
                      (
                        incomeInventory: IUseListInventoryProductIncomeInventoryProductQuantityObj
                      ) => {
                        console.log(incomeInventory);
                        return {
                          id: incomeInventory.incomeInventoryProductQuantity
                            .incomeInventory.id,
                          quantity:
                            incomeInventory.incomeInventoryProductQuantity
                              .incomeQuantity,
                          date: incomeInventory.incomeInventoryProductQuantity
                            .incomeInventory.date,
                          inventoryOperationID:
                            incomeInventory.incomeInventoryProductQuantity
                              .incomeInventory.inventoryOperationID.id,
                          inventoryOperationType: "INGRESO",
                          providerName:
                            incomeInventory.incomeInventoryProductQuantity
                              .incomeInventory.provider?.enterprise_name ||
                            "Sin Proveedor",
                          providerID:
                            incomeInventory.incomeInventoryProductQuantity
                              .incomeInventory.provider?.id || "Sin Proveedor",
                          userInfoID:
                            incomeInventory.incomeInventoryProductQuantity
                              .incomeInventory.userInfo.id,
                          userInfoName:
                            incomeInventory.incomeInventoryProductQuantity
                              .incomeInventory.userInfo.name,
                          branchOfficeName: "",
                          branchOfficeID: "",
                        };
                      }
                    )
                  : [],
            };
          }
        );

        setListInventoryProductIOHistory(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchListInventoryProductIOHistory();
  }, [productID]);

  useEffect(() => {
    const fetchListMostRecentIncomeDate = async () => {
      const result = findMostRecentIncomeDate(listInventoryProductIOHistory);
      return result;
    };

    fetchListMostRecentIncomeDate().then((result) => {
      if (result != null) {
        setMostRecentIncomeDate(result);
      }
    });

    const fetchListMostRecentOutcomeDate = async () => {
      const result = await findMostRecentOutcomeDate(
        listInventoryProductIOHistory
      );
      return result;
    };

    fetchListMostRecentOutcomeDate().then((result) => {
      if (result != null) {
        setMostRecentOutcomeDate(result);
      }
    });

    const flatListInventoryProductIOHistory = (
      listInventoryProductIOHistory: IUseListInventoryProductIOHistoryByIDAndInventoryIDAPI[]
    ) => {
      const incomeInventories = listInventoryProductIOHistory.flatMap(
        (item) => item.incomeInventories || []
      );
      const outcomeInventories = listInventoryProductIOHistory.flatMap(
        (item) => item.outcomeInventories || []
      );

      setListInventoryProductFlatten([
        ...incomeInventories,
        ...outcomeInventories,
      ]);
    };

    flatListInventoryProductIOHistory(listInventoryProductIOHistory);
  }, [listInventoryProductIOHistory]);

  return {
    listInventoryProductIOHistory,
    listInventoryProductFlatten,
    setListInventoryProductIOHistory,
    mostRecentIncomeDate,
    mostRecentOutcomeDate,
    inventoryProductGeneralDetails,
  };
}
