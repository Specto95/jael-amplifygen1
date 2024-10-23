import { useState, useEffect } from "react";

import {
  IListBranchOfficeProductsAPIResponse,
  IListBranchOfficeProductsAPIResponseGeneral,
} from "./listBranchOfficeProducts";

//* AMPLIFY IMPORTS
import { listBranchOfficeProductsAPI } from "@/graphql/queries";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function useListBranchOfficeProducts() {
  const [branchOfficeProducts, setBranchOfficeProducts] = useState<
    IListBranchOfficeProductsAPIResponse[]
  >([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchListBranchOfficeProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result: any = await clientAPI(listBranchOfficeProductsAPI);

        const branchOfficeInventoryProducts: IListBranchOfficeProductsAPIResponse[] =
          result.data.listInventories.items.map(
            (item: IListBranchOfficeProductsAPIResponseGeneral) => {
              return {
                branchOfficeName: item.branchOffice.name,
                branchOfficeID: item.branchOffice.id,
                inventoryProduct: item.inventoryProduct.items.map((item) => {
                  return {
                    id: item.id,
                    customPrice: item.customPrice,
                    generalPrice: item.generalPrice,
                    productName: item.product.name,
                    productID: item.product.id,
                  };
                }),
              };
            }
          );
        setBranchOfficeProducts(branchOfficeInventoryProducts);
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListBranchOfficeProducts();
  }, []);

  return { branchOfficeProducts, setBranchOfficeProducts, isLoading };
}
