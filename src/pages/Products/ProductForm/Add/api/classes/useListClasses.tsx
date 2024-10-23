import { useState, useEffect } from "react";

import { IListClassesAPI } from "./interfaces/IUseListClasses";

//* AMPLIFY IMPORTS
import { clientAPI } from "@/utils/amplifyAPI/client";
import { listClassesAPI } from "@/graphql/queries";

export function useListClasses(createdBy?: string) {
  const [listClasses, setListClasses] = useState<IListClassesAPI[]>([]);

  useEffect(() => {
    const fetchListClasses = async () => {
      try {
        const result: any = await clientAPI(listClassesAPI);

        const listClassesResult: IListClassesAPI[] =
          result.data.listClasses.items.map((item: IListClassesAPI) => {
            if (createdBy) {
              return {
                id: item.id,
                name: item.name,
                createdBy: createdBy,
              };
            } else {
              return {
                id: item.id,
                name: item.name,
              };
            }
          });
        setListClasses(listClassesResult);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchListClasses();
  }, []);

  return { listClasses, setListClasses };
}
