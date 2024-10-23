import { useEffect, useState } from "react";

import {
  IUseListUserDataLoginAPI,
  IUseListUserDataLoginAPIResponse,
  IUseListUserDataLoginBranchOfficeNameAPI,
} from "./interfaces/IUseListUserDataLogin";

//* AMPLIFY IMPORTS
import { listUserDataLoginAPI } from "@/graphql/queries";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function useListUserDataLogin(email: string) {
  const [listUserDataLogin, setListUserDataLogin] = useState<
    IUseListUserDataLoginAPI[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchListUserData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result : any = await clientAPI(listUserDataLoginAPI, { email });
        setTimeout(() => {
          setListUserDataLogin(result.data.listUsers.items);
        }, 200);

        const userDataLoginResult: IUseListUserDataLoginAPI[] =
          result.data.listUsers.items.map(
            (item: IUseListUserDataLoginAPIResponse) => {
              return {
                // id: item.branchOffice.items.
                branchOfficeName: item.branchOffice.items.map(
                  ({
                    branchOffice,
                  }: IUseListUserDataLoginBranchOfficeNameAPI) => {
                    return branchOffice.name;
                  }
                ),
                rolID: item.rolID,
                userInfoName: item.userInfo.name,
              };
            }
          );
      } catch (er) {
        console.log("Error: ", er);
        setError(er);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListUserData();
  }, [email]);

  return { listUserDataLogin, setListUserDataLogin, isLoading };
}
