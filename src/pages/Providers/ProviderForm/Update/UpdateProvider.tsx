import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

import { ListProviderInfo } from "./Mode/Read/ListProviderInfo";
import { EditProviderInfo } from "./Mode/Edit/EditProviderInfo";

//* INTERFACES
import {
  IProviderProductData,
  IProviderResponsibleData,
} from "./api/interfaces/IUseGetProvider";

//*APIs

import { useGetProvider } from "./api/useGetProvider";

export function UpdateProvider() {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);

  const [updateResponsiblesData, setUpdateResponsiblesData] = useState<
    IProviderResponsibleData[]
  >([]);
  const [updateProductsData, setUpdateProductsData] = useState<
    IProviderProductData[]
  >([]);

  const { provider, enterpriseData, responsibleData, productData } =
    useGetProvider(id!);

  useEffect(() => {
    if (isEditing) {
      setUpdateResponsiblesData(responsibleData);
      setUpdateProductsData(productData);
    }
  }, [isEditing]);

  return (
    <>
      <Helmet title="Jael | Actualizar Proveedor">
        <meta name="description" content="Actualizar Proveedor" />
      </Helmet>
      {!isEditing ? (
        <ListProviderInfo
          setIsEditing={setIsEditing}
          enterpriseData={enterpriseData}
          responsibleData={responsibleData}
          productData={productData}
        />
      ) : (
        <EditProviderInfo
          setIsEditing={setIsEditing}
          id={id!}
          updateResponsiblesData={updateResponsiblesData}
          setUpdateResponsiblesData={setUpdateResponsiblesData}
          updateProductsData={updateProductsData}
          setUpdateProductsData={setUpdateProductsData}
          provider={provider}
        />
      )}
    </>
  );
}
