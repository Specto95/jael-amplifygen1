import { useState, useEffect } from "react";

import styles from "../../../BOInventoryForm.module.css";

import { IBOIncomeSelectProviderProps } from "@/interfaces/Inventory/inventory";
import {
  IListProvidersInventoryByNameAPIUnion,
  IListProvidersInventoryResponsibleAPI,
  IListProvidersInventoryResponsibleFullnameGQLAPI,
} from "./api/interfaces/IUseListProvidersInventoryByName";

import { IncomeInventoryGeneralDataProvidersTable } from "../Three/IncomeInventoryGeneralData/Providers/IncomeInventoryGeneralDataProvidersTable";
import { RegisterIncomeInputs } from "./subComponents/RegisterIncomeInputs/RegisterIncomeInputs";
import BackContinueGeneral from "@/components/UI/GenericComponents/BackContinue/BackContinueGeneral";
import { ListProvidersQuery } from "../../../../../../../../../API";

export function BOIncomeSelectProvider({
  handleBackStep,
  setFieldValue,
  errors,
  touched,
  setSelectedProviderResponsible,
  selectedProviderResponsible,
  setSelectedProvider,
  selectedProvider,
  selectedState,
  setSelectedState,
}: IBOIncomeSelectProviderProps) {
  const [providersInventoryByName, setProvidersInventoryByName] = useState<
    IListProvidersInventoryByNameAPIUnion[]
  >([]);

  useEffect(() => {
    const fetchProviderData = async () => {
      if (selectedProvider?.id || selectedState?.value) {
        if (selectedState === null) {
          setProvidersInventoryByName([]);
          return;
        }
        const { clientAPI } = await import("@/utils/amplifyAPI/client");
        const { listProvidersInventoryByNameAPI } = await import(
          "@/graphql/queries"
        );
        try {
          const result = (await clientAPI(listProvidersInventoryByNameAPI, {
            enterprise_name: selectedState
              ? selectedState.value
              : selectedProvider?.name,
          })) as { data: ListProvidersQuery };
          if (result.data.listProviders!.items.length === 0) {
            setProvidersInventoryByName([]);
            return;
          }

          if (
            result.data.listProviders?.items[0]?.productprovider?.product?.items
              .length === 0
          ) {
            setProvidersInventoryByName([{}]);
            return;
          }

          setSelectedProvider!({
            id: result.data.listProviders!.items[0]!.id,
            name: result.data.listProviders!.items[0]!.enterprise_name,
            productProviderID:
              result.data.listProviders!.items[0]!.productprovider!.id,
          });

          setProvidersInventoryByName(
            result.data.listProviders!.items.map((item) => {
              return {
                enterprise_name: item!.enterprise_name,
                productProviderID: item!.productprovider!.id,
                responsible: item!.productprovider?.responsible?.items.map(
                  (responsibleItem) => {
                    return {
                      id: responsibleItem.id,
                      fullname: `${responsibleItem.name ?? ""} ${
                        responsibleItem.second_name ?? ""
                      } ${responsibleItem.lastname ?? ""} ${
                        responsibleItem.second_lastname ?? ""
                      }`,
                    };
                  }
                ),
              };
            })
          );
        } catch (error) {
          console.log("Error: ", error);
        }
      }
    };
    fetchProviderData();
  }, [selectedProvider?.id, selectedState]);

  return (
    <section className={styles.providerform}>
      <h1 className="heading__main">Nuevo Ingreso</h1>
      <RegisterIncomeInputs
        selectedState={selectedState}
        setSelectedState={setSelectedState}
        setFieldValue={setFieldValue}
        errors={errors}
        touched={touched}
      />
      <IncomeInventoryGeneralDataProvidersTable
        setSelectedProviderResponsible={setSelectedProviderResponsible}
        selectedProviderResponsible={selectedProviderResponsible}
        providersInventoryByName={providersInventoryByName}
      />

      <div className="margin__blockMD"></div>

      <BackContinueGeneral
        handleBackStep={handleBackStep}
        disabled={!selectedProviderResponsible?.id}
      />
    </section>
  );
}
