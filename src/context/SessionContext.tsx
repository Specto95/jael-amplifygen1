import { createContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import CryptoJS from "crypto-js";

//* HOOKS/APIs
import { useListUserData } from "./api/useListUserData";
// import { useListUserDataLogin } from "./api/userDataLogin/useListUserDataLogin";
import { useSectionProvider } from "@/hooks/useSectionProvider";

//* INTERFACES
import {
  IUserDataContext,
  IUserData,
  CustomError,
  IBranchInventory,
  IUserInfoData,
  IInventoryID,
} from "./interfaces/ISessionContext";
import {
  IUseListUserDataLoginAPI,
  IUseListUserDataLoginAPIResponse,
  IUseListUserDataLoginBranchOfficeNameAPI,
} from "./api/userDataLogin/interfaces/IUseListUserDataLogin";
import { IChildren } from "@/interfaces/main";

//* UTILS
import { userDataLoginObj } from "@/utils/globalObjs/login/loginObjs";
import { AccountFormObj } from "@/pages/Account/utils/AccountFormObj";
import { toast } from "react-toastify";

type SectionContextType = {
  user: IUserDataContext;
  setUser: (user: IUserDataContext) => void;
  userData: IUserData;
  setUserData: (userData: IUserData) => void;
  logOut: () => void;
  logIn: (email: string, password: string) => void;
  isAuthenticated: () => void;
  isLogged: boolean;
  setIsLogged: (isLogged: boolean) => void;
  branchInventory: IBranchInventory;
  setBranchInventory: (branch: IBranchInventory) => void;
  mainBranchInventory: IBranchInventory;
  setMainBranchInventory: (branch: IBranchInventory) => void;
  rolID: string;
  setRolID: (rolID: string) => void;
  userInfoData: IUserInfoData;
  setUserInfoData: (userInfoData: IUserInfoData) => void;
};

export const SessionContext = createContext<SectionContextType>(
  {} as SectionContextType
);

export const SessionProvider = ({ children }: IChildren) => {
  const { listUserData } = useListUserData();
  const { setSectionName } = useSectionProvider();

  const [user, setUser] = useState<IUserDataContext>({
    email: "",
    role: "",
  });
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [userData, setUserData] = useState<IUserData>(
    JSON.parse(sessionStorage.getItem("user")!) || {
      email: "",
      role: "",
    }
  );
  const [branchInventory, setBranchInventory] = useState<IBranchInventory>({
    name: "",
    id: "",
    inventoryID: "",
  });
  const [mainBranchInventory, setMainBranchInventory] =
    useState<IBranchInventory>({
      name: "",
      id: "",
      inventoryID: "",
    });
  const [rolID, setRolID] = useState("");
  const [userInfoData, setUserInfoData] = useState<IUserInfoData>({
    name: "",
    id: "",
  });

  const navigate = useNavigate();

  const logOut = async () => {
    const { signOut } = await import("aws-amplify/auth");
    await signOut();
    sessionStorage.clear();
    setIsLogged(false);
    setBranchInventory({
      name: "",
      id: "",
      inventoryID: "",
    });
    setRolID("");
    setUserData(
      JSON.parse(sessionStorage.getItem("user")!) || {
        email: "",
        role: "",
      }
    );
    setUserInfoData({
      name: "",
      id: "",
    });
    setMainBranchInventory({
      name: "",
      id: "",
      inventoryID: "",
    });

    navigate("/login");
  };

  const isAuthenticated = async () => {
    // const { Auth } = await import("aws-amplify");
    // Auth.configure({
    //   storage: window.sessionStorage,
    // });

    try {
      const isLastAuthUser = await getLastAuthUser();
      if (isLastAuthUser) {
        setIsLogged(true);
        return;
      }
    } catch (error) {
      console.log("error", error);
    }
    // await decryptKeys(["LastAuthUser", "refreshToken"]);
    // return Auth.currentAuthenticatedUser()
    //   .then((user) => {
    //     if (user.username) {
    //       console.log("si esta autenticado");
    //       setIsLogged(true);
    //       return !!user.username;
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("no esta autenticado");
    //     return false;
    //   });
  };

  const getLastAuthUser = async () => {
    const storageKeys = Object.keys(localStorage);
    const foundKey = storageKeys.find((key) => {
      return key.endsWith("LastAuthUser");
    });
    if (foundKey) {
      return true;
    }
    return false;
  };

  const logIn = async (email: string, password: string) => {
    const { signIn } = await import("aws-amplify/auth");

    // Auth.configure({
    //   storage: sessionStorage,
    // });
    try {
      const { isSignedIn } = await signIn({
        username: email,
        password,
      });
      console.log(isSignedIn);
      if (isSignedIn) {
        const foundUser = listUserData.find((user) => {
          return user.email === email && user.password === password;
        });
        if (foundUser) {
          try {
            const { clientAPI } = await import("@/utils/amplifyAPI/client");
            const fetchListUserData = async () => {
              const { listUserDataLoginAPI, listMainInventoryIDAPI } =
                await import("@/graphql/queries");
              try {
                const result: any = await clientAPI(listUserDataLoginAPI, {
                  email,
                });

                //TODO FIX CORRECT TYPING
                let userDataLoginResult: any = result.data.listUsers.items.map(
                  async (item: IUseListUserDataLoginAPIResponse) => {
                    const mainBranch = item.branchOffice.items.find(
                      (
                        branchOffice: IUseListUserDataLoginBranchOfficeNameAPI
                      ) => {
                        return branchOffice.branchOffice.isMain === true;
                      }
                    );

                    console.log(mainBranch);

                    if (foundUser.rolID === AccountFormObj.ADMIN) {
                      if (mainBranch) {
                        return {
                          branchMainData: {
                            name: mainBranch.branchOffice.name,
                            id: mainBranch.branchOffice.id,
                            inventoryID:
                              mainBranch.branchOffice.inventories.items[0].id,
                          },
                          rolID: item.rolID,
                          userInfoData: {
                            name: item.userInfo.name,
                            id: item.userInfo.id,
                          },
                        };
                      } else {
                        return {
                          branchMainData: {},
                          rolID: item.rolID,
                          userInfoData: {
                            name: item.userInfo.name,
                            id: item.userInfo.id,
                          },
                        };
                      }
                    } else {
                      const mainInventoryIDResult: any = await clientAPI(
                        listMainInventoryIDAPI,
                        { email }
                      );
                      if (
                        mainInventoryIDResult.data.listInventories.items[0].id
                      ) {
                        return {
                          branchMainData: {
                            inventoryID:
                              mainInventoryIDResult.data.listInventories
                                .items[0].id,
                          },
                          branchOfficeData: {
                            name: item.branchOffice.items[0].branchOffice.name,
                            id: item.branchOffice.items[0].branchOffice.id,
                            inventoryID:
                              item.branchOffice.items[0].branchOffice
                                .inventories.items[0].id,
                          },
                          rolID: item.rolID,
                          userInfoData: {
                            name: item.userInfo.name,
                            id: item.userInfo.id,
                          },
                        };
                      } else {
                        return {
                          branchOfficeData: {
                            name: item.branchOffice.items[0].branchOffice.name,
                            id: item.branchOffice.items[0].branchOffice.id,
                            inventoryID:
                              item.branchOffice.items[0].branchOffice
                                .inventories.items[0].id,
                          },
                          rolID: item.rolID,
                          userInfoData: {
                            name: item.userInfo.name,
                            id: item.userInfo.id,
                          },
                        };
                      }
                    }
                  }
                );

                userDataLoginResult = await Promise.all(userDataLoginResult);

                sessionStorage.setItem(
                  userDataLoginObj.userDataLogin,
                  JSON.stringify(userDataLoginResult)
                );

                setIsLogged(true);

                sessionStorage.setItem(
                  "user",
                  JSON.stringify({
                    email: foundUser.email,
                    rolID: foundUser.rolID,
                  })
                );
                setUserData({
                  email: foundUser.email,
                  rolID: foundUser.rolID,
                });

                // if (foundUser.rolID === userDataRoles.BRANCHMANAGER) {
                //   // setBranch(
                //   //   JSON.parse(sessionStorage.getItem(userDataLoginObj.userDataLogin)!)[0]
                //   //     .branchOfficeData[0]
                //   // );
                //   // setRolID(
                //   //   foundUser.rolID
                //   // );
                //   // setUserInfoName(
                //   //   JSON.parse(sessionStorage.getItem(userDataLoginObj.userDataLogin)!)[0]
                //   //     .userInfoName
                //   // );
                //   setSectionName("clients");
                //   return;
                // }
                // if (foundUser.rolID === userDataRoles.ADMIN) {
                //   setSectionName("PDV");
                // }
                navigate("/");
              } catch (er) {
                console.log("Error: ", er);
              }
            };
            fetchListUserData();
          } catch (error) {
            console.log("error", error);
            return;
          }
        }
      }
    } catch (error) {
      const customError = error as CustomError;
      alert(customError.message);
      // setError(customError);
      // switch (customError.code) {
      //   case "UserNotFoundException":
      //     alert("Usuario no Encontrado");
      //     break;
      //   case "NotAuthorizedException":
      //     alert("El usuario o la contraseña son incorrectos");
      //     break;
      //   case "UserNotConfirmedException":
      //     alert("Tu usuario no ha sido confirmado, revisa tu correo");
      //     break;
      //   default:
      //     break;
      // }
    }
  };

  ////////////////////////////////////
  ////////////////////////////////////
  //? ENCRYPTING SESSION STORAGE

  function encryptData(data: string, encryptionKey: string): string {
    const encrypted = CryptoJS.AES.encrypt(data, encryptionKey).toString();
    return encrypted;
  }

  function decryptData(encryptedData: string, encryptionKey: string): string {
    try {
      const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, encryptionKey);
      const decrypted = decryptedBytes.toString(CryptoJS.enc.Utf8);
      return decrypted;
    } catch (error) {
      console.error("Decryption failed:", error);
      return sessionStorage.getItem(encryptedData)!;
    }
  }

  // function decryptKeys(keys: string[]) {
  //   const storageKeys = Object.keys(sessionStorage);

  //   keys.forEach((str) => {
  //     const foundKey = storageKeys.find((key) => {
  //       return key.endsWith(str);
  //     });

  //     if (foundKey) {
  //       const decryptedKey = decryptData(
  //         foundKey,
  //         import.meta.env.VITE_ENCRYPTION_KEY
  //       );
  //       sessionStorage.setItem(foundKey, decryptedKey!);
  //     } else {
  //       console.log("No se encontraron llaves");
  //     }
  //   });
  // }

  function isEncrypted(value: string[]) {
    const storageKeys = Object.keys(sessionStorage);
    value.forEach((str) => {
      const foundKey = storageKeys.find((key) => {
        return key.endsWith(str);
      });

      const keySessionStorageValue = sessionStorage.getItem(foundKey!);

      if (keySessionStorageValue) {
        try {
          //? Decrypt the value
          const decryptedValue = decryptData(
            keySessionStorageValue,
            import.meta.env.VITE_ENCRYPTION_KEY
          );

          if (decryptedValue) {
            return decryptedValue;
          } else {
            //? Encrypt the value and store it in sessionStorage
            const encryptedValue = encryptData(
              keySessionStorageValue,
              import.meta.env.VITE_ENCRYPTION_KEY
            );
            sessionStorage.setItem(foundKey!, encryptedValue);
            return encryptedValue;
          }
        } catch (error) {
          console.log("Decryption failed:", error);
        }
      } else {
        // console.log("No user value found in sessionStorage");
      }
    });

    return null; // Return null if no value is found
  }

  useEffect(() => {
    const handleAuthenticationEncryption = async () => {
      try {
        await isAuthenticated();
      } catch (error) {
        console.log("Authentication failed:", error);
      }
    };

    handleAuthenticationEncryption();
  }, []);

  useEffect(() => {
    if (isLogged) {
      isEncrypted([
        "idToken",
        "accessToken",
        "refreshToken",
        "LastAuthUser",
        "userData",
      ]);
    }
  }, [isLogged]);

  return (
    <SessionContext.Provider
      value={{
        user,
        setUser,
        userData,
        setUserData,
        logOut,
        logIn,
        isAuthenticated,
        isLogged,
        setIsLogged,
        branchInventory,
        setBranchInventory,
        rolID,
        setRolID,
        userInfoData,
        setUserInfoData,
        mainBranchInventory,
        setMainBranchInventory,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
