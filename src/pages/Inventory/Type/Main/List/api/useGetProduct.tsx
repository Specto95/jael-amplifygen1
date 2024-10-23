import { useState, useEffect } from "react";

//* AMPLIFY IMPORTS
import { clientAPI } from "@/utils/amplifyAPI/client";
import { getProductAPI } from "@/graphql/queries";
import { IGetProductAPI } from "./interfaces/IUseGetProduct";

export function useGetProduct(id: string) {
  const [product, setProduct] = useState<IGetProductAPI>();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result: any = await clientAPI(getProductAPI, { id });
        setProduct(result.data.getProduct);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchProduct();
  }, []);

  return { product, setProduct };
}
