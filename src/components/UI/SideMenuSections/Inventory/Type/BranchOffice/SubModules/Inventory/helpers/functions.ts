import { IUseListUserDataLoginBranchOfficeNameStorage } from "@/context/api/userDataLogin/interfaces/IUseListUserDataLogin";
import { IBranchInventory } from "@/context/interfaces/ISessionContext";
import { sessionStorageObjs } from "@/utils/globalObjs/sessionStorage/sessionStorageObjs";

export const clearBranchOfficeData = (
  setBranchInventory?: (branch: IBranchInventory) => void
) => {
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

  if (setBranchInventory) {
    setBranchInventory({
      id: "",
      name: "",
      inventoryID: "",
    });
  }
};
