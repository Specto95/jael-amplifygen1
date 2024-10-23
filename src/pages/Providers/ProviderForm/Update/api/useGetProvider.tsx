import { useState, useEffect } from "react";

//* AMPLIFY IMPORTS
import { clientAPI } from "@/utils/amplifyAPI/client";
import { getProviderDetailsAPI } from "@/graphql/queries";
import {
  IGetProviderResponsibleData,
  IListEnterpriseData,
  IProviderState,
} from "./interfaces/IUseGetProvider";

export function useGetProvider(id: string) {
  const [provider, setProvider] = useState<IProviderState>();

  const enterpriseData: IListEnterpriseData = {
    enterprise_name: provider?.enterprise_name ?? "",
    enterprise_RFC: provider?.enterprise_RFC,
    phone: provider?.phone,
    fixed_phone: provider?.fixed_phone,
    type: provider?.type ?? "",
  };

  const responsibleData: IGetProviderResponsibleData[] =
    provider?.productprovider?.responsible?.items.map((responsible) => {
      return {
        id: responsible.id || "No Proporcionado",
        name: `${responsible.name} ${responsible.second_name} ${responsible.lastname} ${responsible.second_lastname} `,
        phone: responsible.phone || "No Proporcionado",
        RFC: responsible.RFC || "No Proporcionado",
      };
    }) ?? [];

  const productData =
    provider?.productprovider?.product?.items?.map((item: any) => {
      return item.product;
    }) ?? [];

  useEffect(() => {
    const fetchProvider = async () => {
      try {
        const result: any = await clientAPI(getProviderDetailsAPI, { id });
        setProvider(result.data.getProvider);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchProvider();
  }, []);

  return {
    provider,
    setProvider,
    enterpriseData,
    responsibleData,
    productData,
  };
}
