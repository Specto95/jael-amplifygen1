import { useState, useEffect } from "react";

//* INTERFACES

import {
  IUseListSaleDetailsByIDAPI,
  IUseListSaleDetailsByIDAPIResponse,
  IUseListSaleProductDetailsByIDAPI,
  IUseListSaleProductDetailsByIDAPIResponse,
} from "./interfaces/IUseListSaleDetailsByID";

//* AMPLIFY IMPORTS
import { clientAPI } from "@/utils/amplifyAPI/client";
import { listSaleDetailsByIDAPI } from "@/graphql/queries";
import { SalesOperationWithDiscountSpanish } from "@/utils/globalObjs/sideMenuSections/PointOfSale/PointOfSaleObjs";

export function useListSaleDetailsByID(id: string) {
  const [listSaleDetailsByID, setListSaleDetailsByID] =
    useState<IUseListSaleDetailsByIDAPI>();
  const [listSaleProductDetailsByID, setListSaleProductDetailsByID] = useState<
    IUseListSaleProductDetailsByIDAPI[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchListSaleDetailsByID = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result: any = await clientAPI(listSaleDetailsByIDAPI, {
          id,
        });

        const listSaleProductDetailsByIDResult: IUseListSaleProductDetailsByIDAPI[] =
          [];
        const listSaleDetail = result.data.listSalesOperations.items[0];
        const listSaleDetailsByIDObj: IUseListSaleDetailsByIDAPI = {
          id: listSaleDetail?.id || "",
          amountPaid: listSaleDetail?.amountPaid || 0,
          clientID: listSaleDetail?.client.id || "",
          clientName:
            listSaleDetail?.client.name +
              " " +
              listSaleDetail?.client.lastname || "",
          credit_available: listSaleDetail?.client.credit.credit_available || 0,
          status: listSaleDetail?.status || "",

          date: listSaleDetail?.date || "",
          pendingToPay: listSaleDetail?.pendingToPay || 0,
        };

        setListSaleDetailsByID(listSaleDetailsByIDObj);

        result.data.listSalesOperations.items.forEach(
          (item: IUseListSaleDetailsByIDAPIResponse) => {
            item.salesOperationInventoryProductQuantities.items.forEach(
              (product: IUseListSaleProductDetailsByIDAPIResponse) => {
                const productDetailsObj: IUseListSaleProductDetailsByIDAPI = {
                  name: product.name!,
                  price: product.productPriceWithDiscount!,
                  quantity: product.soldProductQuantity!,
                  withDiscount: product.withDiscount
                    ? SalesOperationWithDiscountSpanish.AVAILABLE
                    : SalesOperationWithDiscountSpanish.UNAVAILABLE,
                  totalToPay:
                    product.amountToPayWithDiscount || product.amountToPay || 0,
                };
                listSaleProductDetailsByIDResult.push(productDetailsObj);
              }
            );
          }
        );

        setListSaleProductDetailsByID(listSaleProductDetailsByIDResult);
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListSaleDetailsByID();
  }, [id]);

  return {
    listSaleDetailsByID,
    setListSaleDetailsByID,
    listSaleProductDetailsByID,
    isLoading,
  };
}
