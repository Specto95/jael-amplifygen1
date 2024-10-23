import { useState, useEffect } from "react";

//* AMPLIFY IMPORTS
import { listProductsAPI } from "@/graphql/queries";
import { IListProductAPI } from "./interfaces/IUseListProducts";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function useListProducts() {
  const [products, setProducts] = useState<IListProductAPI[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result: any = await clientAPI(listProductsAPI);
        console.log("Result: ", result);
        const productResult = result.data.listProducts.items.map(
          (item: any) => {
            const { productProvider, ...rest } = item;
            let productProviderId = null;

            if (productProvider.items && productProvider.items.length > 0) {
              productProviderId = productProvider.items[0].id; // Access the first id of the items array
            }

            return { ...rest, productProviderId };
          }
        );
        setProducts(productResult);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchProducts();
  }, []);

  return { products, setProducts };
}
