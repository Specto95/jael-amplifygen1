import { useState, useEffect } from "react";

import { IListCategoriesAPI } from "./interfaces/IUseListCategories";

//* AMPLIFY IMPORTS
import { clientAPI } from "@/utils/amplifyAPI/client";
import { listSubCategoriesAPI } from "@/graphql/queries";

export function useListSubCategories(categoryID?: string) {
  const [listSubCategories, setSubCategories] = useState<IListCategoriesAPI[]>(
    []
  );

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const result: any = await clientAPI(listSubCategoriesAPI, {
          filter: {
            categoryID: {
              eq: categoryID,
            },
          },
        });
        setSubCategories(result.data.listSubCategories.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSubCategories();
  }, [categoryID]);

  return { listSubCategories, setSubCategories };
}
