import { useState, useEffect } from "react";

//* AMPLIFY IMPORTS
import { getBranchOfficeCommissionAPI } from "@/graphql/queries";

//* INTERFACES
import { IGetBranchOfficeCommissionAPI } from "./interfaces/IUseGetBranchOfficeCommission";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function useGetBranchOfficeCommission(id: string) {
  const [getBranchOfficeCommission, setGetBranchOfficeCommission] =
    useState<IGetBranchOfficeCommissionAPI>({
      branchOffice_commission: 0,
    });

  useEffect(() => {
    const fetchGetBranchOfficeCommission = async () => {
      try {
        // console.log('aqui')
        const result: any = await clientAPI(getBranchOfficeCommissionAPI, {
          id,
        });
        // console.log(result)
        setGetBranchOfficeCommission(result.data.getBranchOffice);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchGetBranchOfficeCommission();
  }, [id]);

  return { getBranchOfficeCommission, setGetBranchOfficeCommission };
}