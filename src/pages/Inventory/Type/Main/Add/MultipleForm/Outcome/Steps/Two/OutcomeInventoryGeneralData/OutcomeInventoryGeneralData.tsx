import { useState, useEffect } from "react";

import styles from "../../../../../../InventoryForm.module.css";

import { IOutcomeInventoryGeneralDataProps } from "@/interfaces/Inventory/inventory";
import {
  IListBOfficesInventoryNameIDAPI,
  IListBOfficesInventoryNameIDAPIResponse,
} from "./interfaces/IOutcomeInventoryGeneralData";

import { OutcomeInventoryGeneralDataBOfficesTable } from "./BranchOffices/OutcomeInventoryGeneralDataBOfficesTable";
import { RegisterOutcomeInputs } from "./RegisterOutcomeInputs";
import { InventoryGeneralDataProductsComments } from "../../../../GenericComponents/InventoryGeneralDataProductsComments";

export function OutcomeInventoryGeneralData({
  handleBackStep,
  setFieldValue,
  selectedOutcomeData,
  setSelectedOutcomeRows,
  errors,
  touched,
  selectedPreviousOutcomeRows,
  userResponsible,
  setSelectedBranchOffice,
  selectedBranchOffice,
}: IOutcomeInventoryGeneralDataProps) {
  const [branchOfficesInventoryNameID, setBranchOfficesInventoryNameID] =
    useState<IListBOfficesInventoryNameIDAPI[]>([]);

  const [selectedState, setSelectedState] = useState<string>("");

  useEffect(() => {
    const fetchBranchOfficeInventoryIDsName = async () => {
      if (selectedBranchOffice?.id || selectedState) {
        const { clientAPI } = await import("@/utils/amplifyAPI/client");

        const { listBranchOfficesNameID } = await import("@/graphql/queries");
        try {
          const result: any = await clientAPI(listBranchOfficesNameID, {
            name: selectedState ? selectedState : selectedBranchOffice?.name,
          });

          const branchOfficeInventoryIDsNameResult: IListBOfficesInventoryNameIDAPI[] =
            result.data.listBranchOffices.items.map(
              (branchOffice: IListBOfficesInventoryNameIDAPIResponse) => {
                return {
                  id: branchOffice.id,
                  name: branchOffice.name,
                  inventoryID: branchOffice.inventories.items[0].id,
                };
              }
            );

          setSelectedBranchOffice(branchOfficeInventoryIDsNameResult[0]);
          setBranchOfficesInventoryNameID(branchOfficeInventoryIDsNameResult);
        } catch (error) {
          console.log("Error: ", error);
        }
      }
    };

    fetchBranchOfficeInventoryIDsName();
  }, [selectedBranchOffice?.id, selectedState]);

  const comments = "outcomeRegisterInputs.comments";
  return (
    <section className={styles.providerform}>
      <h1 className="heading__main">Nuevo Egreso</h1>
      <RegisterOutcomeInputs
        selectedBranchOffice={selectedBranchOffice}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
        setFieldValue={setFieldValue}
        errors={errors}
        touched={touched}
        userResponsible={userResponsible!}
      />
      <OutcomeInventoryGeneralDataBOfficesTable
        branchOfficesInventoryNameID={branchOfficesInventoryNameID}
        setSelectedBranchOffice={setSelectedBranchOffice}
        selectedBranchOffice={selectedBranchOffice}
      />

      <div className="margin__blockMD"></div>

      <InventoryGeneralDataProductsComments
        selectedData={selectedOutcomeData}
        setSelectedData={setSelectedOutcomeRows}
        selectedPreviousOutcomeRows={selectedPreviousOutcomeRows}
        comments={comments}
      />

      <div className={styles["providerform__form-buttons"]}>
        <button
          type="button"
          className="button__primary-submit"
          onClick={handleBackStep}
        >
          Atras
        </button>
        <button type="submit" className="button__primary-blue">
          Continuar
        </button>
      </div>
    </section>
  );
}
