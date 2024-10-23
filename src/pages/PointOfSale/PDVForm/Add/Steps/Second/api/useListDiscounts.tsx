import { useState, useEffect } from "react";

//* AMPLIFY IMPORTS
import { clientAPI } from "@/utils/amplifyAPI/client";
import { listDiscountsAPI } from "@/graphql/queries";
import { IUseListDiscounts } from "./interfaces/IUseListDiscounts";

export function useListDiscounts() {
  const [listDiscounts, setListDiscounts] = useState<IUseListDiscounts[]>([]);

  useEffect(() => {
    const fetchListDiscounts = async () => {
      try {
        const result: any = await clientAPI(listDiscountsAPI);

        setListDiscounts(result.data.listDiscounts.items);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchListDiscounts();
  }, []);

  return { listDiscounts, setListDiscounts };
}
