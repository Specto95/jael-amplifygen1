import { useEffect, useState, lazy, useMemo } from "react";

import styles from "./PDVActionsView.module.css";

//?SRC IMPORTS

//* LAZY FORMS
const FixedResumeSale = lazy(() =>
  import("../../GenericComponents/FixedResumeSale/FixedResumeSale").then(
    (module) => ({
      default: module.FixedResumeSale,
    })
  )
);

//* COMPONENTS
import { PDVSpinner } from "@/components/UI/Spinners/PDV/PDVSpinner";

//* APIs
import { useGetBranchOfficeCommission } from "../Second/api/useGetBranchOfficeCommission";

//* HOOKS
import { useSessionProvider } from "@/hooks/useSessionProvider";

//* INTERFACES
import { IPDVActionsViewProps } from "@/interfaces/PDV/PDV";

//* PAGES
import { PDVImages } from "./PDVCards/PDVImages";
import {
  handleTotalCommission,
  handleTotalToPay,
  handleTotalToPayGeneral,
} from "../../helpers/functions";
import { AccountFormObj } from "@/pages/Account/utils/AccountFormObj";
import { PDVSelectedData } from "./PDVCards/PDVSelectedData";
import { Column } from "react-table";
import { IListProductsPDVAPI } from "./api/interfaces/IUseListProductsPDV";
import { PDVSelectedDataColumns } from "../../Columns/PDVSelectedDataColumns";

export function PDVActionsView({
  handleBackStep,
  handleNextStep,
  selectedData,
  setSelectedData,
  previousData,
  setPreviousData,
  currentStepIndex,
  handleTotalPayableInCash,
  previousCreditAvailable,
  totalToPay,
  setTotalToPay,
  totalWithDiscount,
  setTotalWithDiscount,
  values,
  selectedMonthsToPay,
  handleTotalPayableInMonths,
  setTotalCommission,
  listProductsPDV,
  setListProductsPDV
}: IPDVActionsViewProps) {
  const columns: Column<IListProductsPDVAPI>[] = useMemo(
    () => PDVSelectedDataColumns,
    []
  );

  const { branchInventory, mainBranchInventory, rolID } = useSessionProvider();
  const { getBranchOfficeCommission } = useGetBranchOfficeCommission(
    rolID === AccountFormObj.ADMIN ? mainBranchInventory.id : branchInventory.id
  );
  const [isLoading, setIsLoading] = useState(true);
  // const { listProductsPDV, setListProductsPDV } = useListProductsPDV(
  //   mainBranchInventory.id
  //     ? mainBranchInventory.inventoryID
  //     : branchInventory.inventoryID
  // );

  useEffect(() => {
    if (listProductsPDV!.length > 0) {
      setIsLoading(false);
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [listProductsPDV]);

  useEffect(() => {
    setTotalWithDiscount!(+handleTotalToPayGeneral(selectedData).toFixed(2));
    setTotalToPay!(handleTotalToPay(selectedData));
    setTotalCommission!(
      handleTotalCommission(
        selectedData,
        getBranchOfficeCommission.branchOffice_commission
      )
    );
  }, [selectedData]);

  // useEffect(() => {
  //   if (selectedDiscount === 0) {
  //     setTotalWithDiscount!(0);
  //     setTotalToPay!(handleTotalToPay(selectedData));

  //     return;
  //   }
  //   if (selectedDiscount! > 0) {
  //     setTotalWithDiscount!(
  //       handleTotalToPay(selectedData) -
  //         (handleTotalDiscount(selectedData) * selectedDiscount!) / 100
  //     );
  //     return;
  //   }
  // }, [selectedDiscount, selectedData]);

  return (
    <>
      <section className={styles.main}>
        {isLoading ? (
          <PDVSpinner />
        ) : (
          <PDVImages
            listProductsPDV={listProductsPDV!}
            setListProductsPDV={setListProductsPDV}
            handleBackStep={handleBackStep}
            handleNextStep={handleNextStep}
            selectedData={selectedData}
            previousData={previousData}
            setSelectedData={setSelectedData}
            setPreviousData={setPreviousData}
          />
        )}

        {selectedData?.length! > 0 && (
          <>
            <div
              className={
                selectedData?.length! >= 3
                  ? styles.fixed__divisorLG
                  : styles.fixed__divisor
              }
            ></div>

            <div className={styles.shoppingCart__div}>
              {/* <div className={styles.divisorMX}></div> */}
              <PDVSelectedData
                selectedData={selectedData}
                setSelectedData={setSelectedData}
                setPreviousData={setPreviousData}
                columns={columns}
                previousData={previousData}
              />
              <FixedResumeSale
                selectedData={selectedData}
                currentStepIndex={currentStepIndex}
                handleBackStep={handleBackStep}
                handleNextStep={handleNextStep}
                handleTotalPayableInCash={handleTotalPayableInCash}
                handleTotalPayableInMonths={handleTotalPayableInMonths}
                previousCreditAvailable={previousCreditAvailable}
                totalToPay={totalToPay}
                totalWithDiscount={totalWithDiscount}
                values={values}
                selectedMonthsToPay={selectedMonthsToPay}
              />
            </div>
          </>
        )}
      </section>
    </>
  );
}
