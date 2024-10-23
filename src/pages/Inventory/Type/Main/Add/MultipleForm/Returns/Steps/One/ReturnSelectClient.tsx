// import { useState, useEffect } from "react";

// import styles from "../../../../../InventoryForm.module.css";

import { IIncomeSelectProviderProps } from "@/interfaces/Inventory/inventory";
// import {
//   IListProvidersInventoryResponsibleAPI,
//   IListProvidersInventoryResponsibleFullnameGQLAPI,
//   IListProvidersInventoryByNameAPIUnion,
// } from "./api/interfaces/IUseListProvidersInventoryByName";

// import { IncomeInventoryGeneralDataProvidersTable } from "../Three/IncomeInventoryGeneralData/Providers/IncomeInventoryGeneralDataProvidersTable";
// import { RegisterIncomeInputs } from "./subComponents/RegisterIncomeInputs/RegisterIncomeInputs";
// import { isArrayEmpty } from "./helpers/functions";

export function ReturnSelectClient({
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
}: IIncomeSelectProviderProps) {
  // const [providersInventoryByName, setProvidersInventoryByName] = useState<
  //   IListProvidersInventoryByNameAPIUnion[]
  // >([]);
  // useEffect(() => {
  //   const fetchProviderData = async () => {
  //     if (selectedProvider?.id || selectedState) {
  //       if (selectedState === null) {
  //         setProvidersInventoryByName([]);
  //         return;
  //       }
  //       const { generateClient } = await import("aws-amplify/api");
  //       const { listProvidersInventoryByNameAPI } = await import(
  //         "@/graphql/queries"
  //       );
  //       try {
  //         const result: any = await API.graphql(
  //           graphqlOperation(listProvidersInventoryByNameAPI, {
  //             enterprise_name: selectedState
  //               ? selectedState.value
  //               : selectedProvider?.name,
  //           })
  //         );
  //         if (
  //           result.data.listProviders.items[0].productprovider.product.items
  //             .length === 0
  //         ) {
  //           setProvidersInventoryByName([{}]);
  //           return;
  //         }
  //         setSelectedProvider({
  //           id: result.data.listProviders.items[0].productprovider.id,
  //           name: result.data.listProviders.items[0].enterprise_name,
  //         });
  //         setProvidersInventoryByName(
  //           result.data.listProviders.items.map(
  //             (item: IListProvidersInventoryResponsibleFullnameGQLAPI) => {
  //               return {
  //                 enterprise_name: item.enterprise_name,
  //                 productProviderID: item.productprovider.id,
  //                 responsible: item.productprovider?.responsible?.items.map(
  //                   (
  //                     responsibleItem: IListProvidersInventoryResponsibleAPI
  //                   ) => {
  //                     return {
  //                       id: responsibleItem.id,
  //                       fullname: `${responsibleItem.name ?? ""} ${
  //                         responsibleItem.second_name ?? ""
  //                       } ${responsibleItem.lastname ?? ""} ${
  //                         responsibleItem.second_lastname ?? ""
  //                       }`,
  //                     };
  //                   }
  //                 ),
  //               };
  //             }
  //           )
  //         );
  //       } catch (error) {
  //         console.log("Error: ", error);
  //       }
  //     }
  //   };
  //   fetchProviderData();
  // }, [selectedProvider?.id, selectedState]);
  // return (
  //   <section className={styles.providerform}>
  //     <h1 className="heading__main">Nuevo Ingreso</h1>
  //     <RegisterIncomeInputs
  //       selectedState={selectedState}
  //       setSelectedState={setSelectedState}
  //       setFieldValue={setFieldValue}
  //       errors={errors}
  //       touched={touched}
  //     />
  //     <IncomeInventoryGeneralDataProvidersTable
  //       setSelectedProviderResponsible={setSelectedProviderResponsible}
  //       selectedProviderResponsible={selectedProviderResponsible}
  //       providersInventoryByName={providersInventoryByName}
  //     />
  //     <div className="margin__blockMD"></div>
  //     <div className={styles["providerform__form-buttons"]}>
  //       <button
  //         type="button"
  //         className="button__primary-submit"
  //         onClick={handleBackStep}
  //       >
  //         Atras
  //       </button>
  //       <button
  //         type="submit"
  //         className="button__primary-blue"
  //         disabled={
  //           isArrayEmpty(providersInventoryByName) ||
  //           providersInventoryByName.length === 0
  //         }
  //       >
  //         Continuar
  //       </button>
  //     </div>
  //   </section>
  // );
}
