import { useState, useEffect } from "react";

import { IListCategoriesAPI } from "./interfaces/IUseListCategories";

//* AMPLIFY IMPORTS
import { clientAPI } from "@/utils/amplifyAPI/client";
import { listCategoriesAPI } from "@/graphql/queries";

export function useListCategories() {
  const [listCategories, setListCategories] = useState<IListCategoriesAPI[]>(
    []
  );

  useEffect(() => {
    const fetchListCategories = async () => {
      try {
        const result: any = await clientAPI(listCategoriesAPI);

        setListCategories(result.data.listCategories.items);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchListCategories();
  }, []);

  return { listCategories, setListCategories };
}
