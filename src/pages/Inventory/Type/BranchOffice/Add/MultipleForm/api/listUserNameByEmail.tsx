import { useState, useEffect } from "react";

import { IListUserNameByEmailTable } from "@/interfaces/Inventory/inventory";

//* AMPLIFY IMPORTS
import { listUserNamesByEmailAPI } from "@/graphql/queries";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function listUserNameByEmail(email: string) {
  const [userNameByEmail, setUserNameByEmail] = useState<
    IListUserNameByEmailTable[]
  >([]);

  useEffect(() => {
    const fetchListUserNameByEmail = async () => {
      try {
        const result: any = await clientAPI(listUserNamesByEmailAPI, { email });
        setUserNameByEmail(result.data.listUsers.items[0].userInfo.name);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchListUserNameByEmail();
  }, [email]);

  return { userNameByEmail, setUserNameByEmail };
}
