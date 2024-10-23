import { useState, useEffect } from "react";

//* AMPLIFY IMPORTS
import { clientAPI } from "@/utils/amplifyAPI/client";
import { getOutcomeInventoryProductDetailsAPI } from "@/graphql/queries";
import {
  IUseGetOutcomeInventoryProductsDetailsAPIResponse,
  IUseGetOutcomeInventoryProductsOutcomeInventoryProductQuantitiesResponse,
  IUseGetOutcomeInventoryProductsInputDetails,
} from "./interfaces/IUseGetOutcomeInventoryProductsDetails";
import { formatKey } from "@/utils/helpers";

export function useGetOutcomeInventoryProductDetails(
  outcomeInventoryID: string
) {
  const [
    getMainOutcomeInventoryProductData,
    setGetMainOutcomeInventoryProductData,
  ] = useState<IUseGetOutcomeInventoryProductsDetailsAPIResponse[]>([]);
  const [inventoryProductInputDetails, setInventoryProductInputDetails] =
    useState<IUseGetOutcomeInventoryProductsInputDetails>({
      id: "",
      comments: "",
      date: "",
      userInfoName: "",
      branchOfficeName: "",
    });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchGetMainOutcomeInventoryProductDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result: any = await clientAPI(
          getOutcomeInventoryProductDetailsAPI,
          {
            id: outcomeInventoryID,
          }
        );

        console.log(result.data.getOutcomeInventory);

        setInventoryProductInputDetails({
          id: result.data.getOutcomeInventory.id,
          date: result.data.getOutcomeInventory.date,
          userInfoName: result.data.getOutcomeInventory.userInfo.name,
          branchOfficeName: result.data.getOutcomeInventory.branchOffice.name,
          comments: result.data.getOutcomeInventory.comments,
        });

        setGetMainOutcomeInventoryProductData(
          result.data.getOutcomeInventory.outcomeInventoryProductQuantities.items.map(
            (
              item: IUseGetOutcomeInventoryProductsOutcomeInventoryProductQuantitiesResponse
            ) => {
              return {
                id: formatKey(
                  item.inventoryProducts.items[0].inventoryProduct.product.id
                ),
                name: item.inventoryProducts.items[0].inventoryProduct.product
                  .name,
                quantity: item.outcomeQuantity,
                price:
                  item.inventoryProducts.items[0].inventoryProduct.customPrice,
                productProviderID: formatKey(
                  item.inventoryProducts.items[0].inventoryProduct
                    .productProviderID
                ),
                class_id:
                  item.inventoryProducts.items[0].inventoryProduct.product
                    .class_id,
                category_id:
                  item.inventoryProducts.items[0].inventoryProduct.product
                    .category_id,
                subcategory_id:
                  item.inventoryProducts.items[0].inventoryProduct.product
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

    fetchGetMainOutcomeInventoryProductDetails();
  }, [outcomeInventoryID]);

  return {
    getMainOutcomeInventoryProductData,
    inventoryProductInputDetails,
    isLoading,
  };
}
