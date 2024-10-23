import { useState, useMemo } from "react";

import styles from "../../../../../MainView.module.css";

//?SRC IMPORTS

//*ASSETS
import ArrowBack from "@/assets/img/ArrowBack.png";

//*COMPONENTS
import { BOGeneralInventoryList } from "./List/BOGeneralInventoryList";
import { SectionTopOptions } from "../../../../../../SectionTopOptions/SectionTopOptions";

//*HOOKS
import { useSessionProvider } from "@/hooks/useSessionProvider";
import { useListBranchOfficeInventoryProductsView } from "./api/useListBranchOfficeInventoryProductsView";

import { useListBranchOfficeIDNamesInventoryID } from "@/generalModels/api/SideMenuSections/BranchOffices/listBranchOfficeIDNamesInventoryID/useListBranchOfficeIDNamesInventoryID";
import { IUseListUserDataLoginBranchOfficeNameStorage } from "@/context/api/userDataLogin/interfaces/IUseListUserDataLogin";
import { sessionStorageObjs } from "@/utils/globalObjs/sessionStorage/sessionStorageObjs";
import { AccountFormObj } from "@/pages/Account/utils/AccountFormObj";
import { GenericFilteredItems } from "@/components/UI/GenericComponents/FilteredItems/GenericFilteredItems";
import { BOInventoryViewFilterObjs } from "./Filters/BOInventoryViewFIlterObjs";
import { UserView } from "@/components/UI/RoleInfo/UserView/UserView";

export function BOInventoryView() {
  const { branchInventory, setBranchInventory, rolID } = useSessionProvider();
  const {
    listBranchOfficeInventoryProductsView,
    setListBranchOfficeInventoryProductsView,
    isLoading,
  } = useListBranchOfficeInventoryProductsView(branchInventory.inventoryID);
  const { branchOfficeIDNamesInventoryID } =
    useListBranchOfficeIDNamesInventoryID();

  const { filteredItems, query, setQuery } = GenericFilteredItems(
    listBranchOfficeInventoryProductsView,
    BOInventoryViewFilterObjs.NAME
  );

  const handleBranchOfficeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedBranchId = e.target.value;
    const selectedBranchName = e.target.options[e.target.selectedIndex].text;

    const selectedBranch = branchOfficeIDNamesInventoryID.find(
      (branch) => branch.id === selectedBranchId
    );
    const selectedBranchInventoryId = selectedBranch
      ? selectedBranch.inventoryID
      : "";

    const userDataLoginString = sessionStorage.getItem(
      sessionStorageObjs.userDataLogin
    );
    let userDataLogin: IUseListUserDataLoginBranchOfficeNameStorage[] = [];
    if (userDataLoginString) {
      userDataLogin = JSON.parse(userDataLoginString);
    }

    const userDataLoginUpdated = userDataLogin.map((item) => {
      if (!item.branchOfficeData) {
        return {
          ...item,
          branchOfficeData: {
            id: selectedBranchId,
            name: selectedBranchName,
            inventoryID: selectedBranchInventoryId,
          },
        };
      }
      return item;
    });

    const updatedUserDataLoginString = JSON.stringify(userDataLoginUpdated);

    sessionStorage.setItem(
      sessionStorageObjs.userDataLogin,
      updatedUserDataLoginString
    );

    setBranchInventory({
      id: selectedBranchId,
      name: selectedBranchName,
      inventoryID: selectedBranchInventoryId,
    });
  };

  const clearBranchOfficeData = () => {
    const userDataLoginString = sessionStorage.getItem(
      sessionStorageObjs.userDataLogin
    );
    let userDataLogin: IUseListUserDataLoginBranchOfficeNameStorage[] = [];
    if (userDataLoginString) {
      userDataLogin = JSON.parse(userDataLoginString);
    }

    const userDataLoginUpdated = userDataLogin.map((item) => {
      if (item.branchOfficeData) {
        const { branchOfficeData, ...itemWithoutBranchOfficeData } = item;
        return itemWithoutBranchOfficeData;
      }
      return item;
    });

    const updatedUserDataLoginString = JSON.stringify(userDataLoginUpdated);

    sessionStorage.setItem(
      sessionStorageObjs.userDataLogin,
      updatedUserDataLoginString
    );

    setBranchInventory({
      id: "",
      name: "",
      inventoryID: "",
    });
  };

  return (
    <>
      <UserView
        query={query}
        setQuery={setQuery}
        buttonAction={!!branchInventory.name}
      />

      <section className={styles.section__module}>
        <>
          <div className="my-2">
            {branchInventory.name && rolID !== AccountFormObj.BRANCHMANAGER && (
              <div className="relative">
                <div className="selectBGSecondaryWFull">
                  {branchInventory.name}
                </div>
                <img
                  src={ArrowBack}
                  alt="Atras"
                  className="absoluteLeft__img"
                  onClick={clearBranchOfficeData}
                />
              </div>
            )}
            {!branchInventory.name &&
              rolID !== AccountFormObj.BRANCHMANAGER && (
                <select
                  className="selectBGSecondaryWFull"
                  onChange={handleBranchOfficeChange}
                  value={branchInventory.id || ""}
                >
                  <option value="" disabled>
                    Selecciona una sucursal
                  </option>
                  {branchOfficeIDNamesInventoryID.map((branch) => (
                    <option value={branch.id} key={branch.name}>
                      {branch.name}
                    </option>
                  ))}
                </select>
              )}
          </div>

          {branchInventory.name && (
            <>
              <BOGeneralInventoryList
                BOInventory={filteredItems}
                setBOInventory={setListBranchOfficeInventoryProductsView}
                isLoading={isLoading}
              />
            </>
          )}
        </>
      </section>
    </>
  );
}
