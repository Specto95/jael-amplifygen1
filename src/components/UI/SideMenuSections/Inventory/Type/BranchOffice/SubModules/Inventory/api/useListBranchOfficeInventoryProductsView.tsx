import { useState, useEffect } from "react";

//* AMPLIFY IMPORTS
import { generateClient } from "aws-amplify/api";
import { listBranchOfficeInventoryProductsViewAPI } from "@/graphql/queries";
import {
  IUseListBranchOfficeInventoryProductsViewAPI,
  IUseListBranchOfficeInventoryProductsViewAPIResponse,
} from "./interfaces/IUseListMainInventoryProductsView";

export function useListBranchOfficeInventoryProductsView(inventoryID: string) {
  const client = generateClient();

  const [
    listBranchOfficeInventoryProductsView,
    setListBranchOfficeInventoryProductsView,
  ] = useState<IUseListBranchOfficeInventoryProductsViewAPI[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchListBranchOfficeInventoryProductsView = async () => {
      try {
        setIsLoading(true);
        setError(null);
        if (!inventoryID) {
          setListBranchOfficeInventoryProductsView([]);
          return;
        }
        const result: any = await client.graphql({
          query: listBranchOfficeInventoryProductsViewAPI,
          variables: {
            inventoryID,
          },
        });

        const mainInventoryProductsViewResult: IUseListBranchOfficeInventoryProductsViewAPI[] =
          result.data.inventoryProductsByInventoryIDAndId.items.map(
            (item: IUseListBranchOfficeInventoryProductsViewAPIResponse) => {
              return {
                id: item.id,
                name: item.product.name,
                quantity: item.quantity,
                enterprise_name:
                  item.product.productProvider?.providerID?.enterprise_name,
              };
            }
          );

        setListBranchOfficeInventoryProductsView(
          mainInventoryProductsViewResult
        );
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListBranchOfficeInventoryProductsView();
  }, [inventoryID]);

  return {
    listBranchOfficeInventoryProductsView,
    setListBranchOfficeInventoryProductsView,
    isLoading,
  };
}
