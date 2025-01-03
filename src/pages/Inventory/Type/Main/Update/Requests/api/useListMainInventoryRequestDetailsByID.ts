import { useEffect, useRef, useState } from "react";

//* INTERFACES
import {
  IncomeInventoryProductQuantitiesRequest,
  ListMainInventoryRequestDetailsAPI,
} from "./interfaces/ListMainInventoryRequestDetailsByID";

//* API
import {
  listMainInventoryRequestDetailsByIDAPI,
  listMainInventoryProductsQuantityAPI,
} from "@/graphql/queries";

//* AMPLIFY IMPORTS
import { clientAPI } from "@/utils/amplifyAPI/client";
import {
  IOInventoryFinishStatus,
  IOInventoryStatus,
  IOInventoryStatusSpanish,
  ListIncomeInventoryRequestsQuery,
  ListInventoryProductsQuery,
  RoleType,
} from "@/API";

import { useSessionProvider } from "@/hooks/useSessionProvider";
import { isIOInventoryFinishStatusAPI } from "../helpers/functions";

export function useListMainInventoryRequestDetailsByID(
  id: string,
  status?: IOInventoryStatus
) {
  const [listMainInventoryRequestDetails, setListMainInventoryRequestDetails] =
    useState<ListMainInventoryRequestDetailsAPI[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const defaultStatus = useRef<IOInventoryStatus>(status!);

  const { rolID, mainBranchInventory, branchInventory } = useSessionProvider();

  useEffect(() => {
    const fetchListMainInventoryRequestDetailsByID = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = (await clientAPI(
          listMainInventoryRequestDetailsByIDAPI,
          {
            id,
          }
        )) as { data: ListIncomeInventoryRequestsQuery };

        const mainInventoryRequestsResult: ListMainInventoryRequestDetailsAPI[] =
          await Promise.all(
            result.data.listIncomeInventoryRequests?.items.map(
              async (incomeInventoryRequest) => {
                const incomeInventoryProductQuantitiesRequest =
                  await Promise.all(
                    incomeInventoryRequest?.incomeInventoryProductQuantitiesRequest?.items.map(
                      async (incomeInventoryProductQuantityRequest) => {
                        const inventoryProductID =
                          incomeInventoryProductQuantityRequest
                            ?.inventoryProducts?.items[0].inventoryProduct.id!;
                        const productID =
                          incomeInventoryProductQuantityRequest
                            ?.inventoryProducts?.items[0].inventoryProduct
                            .product?.id!;

                        const result = (await clientAPI(
                          listMainInventoryProductsQuantityAPI,
                          {
                            productID,
                            inventoryID:
                              rolID === RoleType.ADMIN
                                ? mainBranchInventory.inventoryID
                                : branchInventory.inventoryID,
                          }
                        )) as { data: ListInventoryProductsQuery };

                        const incomeInventoryProductQuantityRequestObj: IncomeInventoryProductQuantitiesRequest =
                          {
                            incomeQuantity:
                              incomeInventoryProductQuantityRequest?.incomeQuantity!,
                            productName:
                              incomeInventoryProductQuantityRequest
                                ?.inventoryProducts?.items[0].inventoryProduct
                                .product?.name!,
                            price:
                              incomeInventoryProductQuantityRequest
                                ?.inventoryProducts?.items[0].inventoryProduct
                                .customPrice!,
                            productID,
                            inventoryProductID,
                            currentInventoryQuantity:
                              result.data.listInventoryProducts?.items[0]
                                ?.quantity!,
                          };

                        if (rolID === RoleType.ADMIN) {
                          incomeInventoryProductQuantityRequestObj[
                            "mainInventoryProductID"
                          ] = result.data.listInventoryProducts?.items[0]?.id!;
                        }

                        return incomeInventoryProductQuantityRequestObj;
                      }
                    ) || []
                  );

                const incomeInventoryProductQuantitiesRequestObj: ListMainInventoryRequestDetailsAPI =
                  {
                    branchOfficeName:
                      incomeInventoryRequest?.branchOffice?.name!,
                    comments: incomeInventoryRequest?.comments!,
                    providerName:
                      incomeInventoryRequest?.provider?.enterprise_name!,
                    providerResponsibleName:
                      incomeInventoryRequest?.productProviderResponsible?.name!,
                    status:
                      IOInventoryStatusSpanish[incomeInventoryRequest?.status!],
                    incomeInventoryProductQuantitiesRequest,
                    statusValue: incomeInventoryRequest?.status!,
                  };

                if (
                  isIOInventoryFinishStatusAPI(
                    incomeInventoryRequest?.status! as unknown as IOInventoryFinishStatus
                  )
                ) {
                  incomeInventoryProductQuantitiesRequestObj["rejectedReason"] =
                    incomeInventoryRequest?.rejectedReason!;
                }

                return incomeInventoryProductQuantitiesRequestObj;
              }
            ) || []
          );

        // const mainInventoryRequestsResult: ListMainInventoryRequestDetailsAPI[] =
        //   result.data.listIncomeInventoryRequests?.items.map(
        //     (incomeInventoryRequest) => {
        //       const incomeInventoryProductQuantitiesRequest =
        //         incomeInventoryRequest?.incomeInventoryProductQuantitiesRequest?.items.map(
        //           async (incomeInventoryProductQuantityRequest) => {
        //             const inventoryProductID =
        //               incomeInventoryProductQuantityRequest?.inventoryProducts
        //                 ?.items[0].inventoryProduct.id!;
        //             const productID =
        //               incomeInventoryProductQuantityRequest?.inventoryProducts
        //                 ?.items[0].inventoryProduct.product?.id!;

        //             const result = (await clientAPI(
        //               listMainInventoryProductsQuantityAPI,
        //               {
        //                 productID,
        //                 inventoryID: mainBranchInventory.inventoryID,
        //               }
        //             )) as { data: ListInventoryProductsQuery };

        //             const incomeInventoryProductQuantityRequestObj: IncomeInventoryProductQuantitiesRequest =
        //               {
        //                 incomeQuantity:
        //                   incomeInventoryProductQuantityRequest?.incomeQuantity!,
        //                 productName:
        //                   incomeInventoryProductQuantityRequest
        //                     ?.inventoryProducts?.items[0].inventoryProduct
        //                     .product?.name!,
        //                 price:
        //                   incomeInventoryProductQuantityRequest
        //                     ?.inventoryProducts?.items[0].inventoryProduct
        //                     .customPrice!,
        //                 productID:
        //                   incomeInventoryProductQuantityRequest
        //                     ?.inventoryProducts?.items[0].inventoryProduct
        //                     .product?.id!,
        //                 inventoryProductID,
        //                 mainInventoryProductID:
        //                   result.data.listInventoryProducts?.items[0]?.id!,
        //                 mainInventoryQuantity:
        //                   result.data.listInventoryProducts?.items[0]
        //                     ?.quantity!,
        //                 // incomeInventoryProductQuantitiesRequest,
        //               };

        //             return incomeInventoryProductQuantityRequestObj;
        //           }
        //         ) || [];

        //       const incomeInventoryRequestObj: ListMainInventoryRequestDetailsAPI =
        //         {
        //           branchOfficeName: incomeInventoryRequest?.branchOffice?.name!,
        //           comments: incomeInventoryRequest?.comments!,
        //           providerName:
        //             incomeInventoryRequest?.provider?.enterprise_name!,
        //           providerResponsibleName:
        //             incomeInventoryRequest?.productProviderResponsible?.name!,
        //           status:
        //             IOInventoryStatusSpanish[incomeInventoryRequest?.status!],
        //           incomeInventoryProductQuantitiesRequest,
        //         };
        //       return incomeInventoryRequestObj;
        //     }
        //   ) || [];

        setListMainInventoryRequestDetails(mainInventoryRequestsResult);
        defaultStatus.current = mainInventoryRequestsResult[0].statusValue;
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListMainInventoryRequestDetailsByID();
  }, [id]);

  return {
    defaultStatus,
    listMainInventoryRequestDetails,
    setListMainInventoryRequestDetails,
    isLoading,
  };
}
