import { useState, useEffect } from "react";

//* AMPLIFY IMPORTS
import { clientAPI } from "@/utils/amplifyAPI/client";
import { listInventoryProductsIDAndProductIDAPI } from "@/graphql/queries";
import { IUseListInventoryProductsIDAndProductIDAPI } from "./interfaces/IUseListInventoryProductsIDAndProductID";

export function useListInventoryProductsIDAndProductID(productID: string) {
  const [
    listInventoryProductsIDAndProductID,
    setListInventoryProductsIDAndProductID,
  ] = useState<IUseListInventoryProductsIDAndProductIDAPI[]>([]);

  useEffect(() => {
    const fetchListInventoryProductsIDAndProductID = async () => {
      try {
        const result: any = !productID
          ? []
          : await clientAPI(listInventoryProductsIDAndProductIDAPI, {
              productID,
            });

        setListInventoryProductsIDAndProductID(
          result.data.listInventoryProducts.items
        );
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchListInventoryProductsIDAndProductID();
  }, [productID]);

  return {
    listInventoryProductsIDAndProductID,
    setListInventoryProductsIDAndProductID,
  };
}
