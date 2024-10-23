import { useState, useEffect } from "react";

//* AMPLIFY IMPORTS
import { clientAPI } from "@/utils/amplifyAPI/client";
import { getIncomeInventoryProductDetailsAPI } from "@/graphql/queries";
import {
  IUseGetIncomeInventoryProductsDetailsAPIResponse,
  IUseGetIncomeInventoryProductsIncomeInventoryProductQuantitiesResponse,
  IUseGetIncomeInventoryProductsInputDetails,
} from "./interfaces/IUseGetIncomeInventoryProductsDetails";
import { formatKey } from "@/utils/helpers";

export function useGetIncomeInventoryProductDetails(incomeInventoryID: string) {
  const [
    getMainIncomeInventoryProductData,
    setGetMainIncomeInventoryProductData,
  ] = useState<IUseGetIncomeInventoryProductsDetailsAPIResponse[]>([]);
  const [inventoryProductInputDetails, setInventoryProductInputDetails] =
    useState<IUseGetIncomeInventoryProductsInputDetails>({
      id: "",
      comments: "",
      date: "",
      userInfoName: "",
      providerName: "",
    });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchGetMainIncomeInventoryProductDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result: any = await clientAPI(
          getIncomeInventoryProductDetailsAPI,
          {
            id: incomeInventoryID,
          }
        );

        setInventoryProductInputDetails({
          id: result.data.getIncomeInventory.id,
          date: result.data.getIncomeInventory.date,
          userInfoName: result.data.getIncomeInventory.userInfo.name,
          providerName:
            result.data.getIncomeInventory?.provider?.enterprise_name,
          comments: result.data.getIncomeInventory.comments,
        });

        setGetMainIncomeInventoryProductData(
          result.data.getIncomeInventory.incomeInventoryProductQuantities.items.map(
            (
              item: IUseGetIncomeInventoryProductsIncomeInventoryProductQuantitiesResponse
            ) => {
              return {
                id: formatKey(
                  item.inventoryProducts.items[0]?.inventoryProduct.product.id
                ),
                name: item.inventoryProducts.items[0]?.inventoryProduct.product
                  .name,
                quantity: item.incomeQuantity,
                price:
                  item.inventoryProducts.items[0]?.inventoryProduct.customPrice,
                productProviderID: formatKey(
                  item.inventoryProducts.items[0]?.inventoryProduct
                    .productProviderID
                ),
                class_id:
                  item.inventoryProducts.items[0]?.inventoryProduct.product
                    .class_id,
                category_id:
                  item.inventoryProducts.items[0]?.inventoryProduct.product
                    .category_id,
                subcategory_id:
                  item.inventoryProducts.items[0]?.inventoryProduct.product
                    .subcategory_id,
              };
            }
          )
        );
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGetMainIncomeInventoryProductDetails();
  }, [incomeInventoryID]);

  return {
    getMainIncomeInventoryProductData,
    inventoryProductInputDetails,
    isLoading,
  };
}
