import { lazy, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Navigate } from "react-router-dom";

import styles from "./MainPage.module.css";

const ProductsView = lazy(() =>
  import(
    "@/components/UI/SideMenuSections/Product/SubModules/Products/ProductView"
  ).then((module) => ({ default: module.ProductView }))
);

//SUBMODULES

const GlobalProductsView = lazy(() =>
  import(
    "@/components/UI/SideMenuSections/Product/SubModules/Globals/GlobalProductsView"
  ).then((module) => ({ default: module.GlobalProductsView }))
);

const BranchOfficeProductsView = lazy(() =>
  import(
    "@/components/UI/SideMenuSections/Product/SubModules/BranchOffice/BranchOfficeProductsView"
  ).then((module) => ({ default: module.BranchOfficeProductsView }))
);

const MainInventoryView = lazy(() =>
  import(
    "@/components/UI/SideMenuSections/Inventory/Type/Main/SubModules/Inventory/MainInventoryView"
  ).then((module) => ({ default: module.MainInventoryView }))
);

// INCOME
const MainIncomeInventoryView = lazy(() =>
  import(
    "@/components/UI/SideMenuSections/Inventory/Type/Main/SubModules/Income/MainIncomeInventoryView"
  ).then((module) => ({ default: module.MainIncomeInventoryView }))
);

// OUTCOME
const MainOutcomeInventoryView = lazy(() =>
  import(
    "@/components/UI/SideMenuSections/Inventory/Type/Main/SubModules/Outcome/MainOutcomeInventoryView"
  ).then((module) => ({ default: module.MainOutcomeInventoryView }))
);

//* BO INVENTORY

// INVENTORY
const BOInventoryView = lazy(() =>
  import(
    "@/components/UI/SideMenuSections/Inventory/Type/BranchOffice/SubModules/Inventory/BOInventoryView"
  ).then((module) => ({ default: module.BOInventoryView }))
);

//? MODULES

const ClientsView = lazy(() =>
  import("@/components/UI/SideMenuSections/Clients/ClientsView").then(
    (module) => ({ default: module.ClientsView })
  )
);
const OrdersView = lazy(() =>
  import("@/components/UI/SideMenuSections/Orders/OrdersView").then(
    (module) => ({ default: module.OrdersView })
  )
);
const CreditsRequestsView = lazy(() =>
  import(
    "@/components/UI/SideMenuSections/Credits/SubModules/Requests/CreditsRequestsView"
  ).then((module) => ({ default: module.CreditsRequestsView }))
);

const AccountsReceivableView = lazy(() =>
  import(
    "@/components/UI/SideMenuSections/Credits/SubModules/AccountsReceivable/AccountsReceivableView"
  ).then((module) => ({ default: module.AccountsReceivableView }))
);

const CreditsClientsView = lazy(() =>
  import(
    "@/components/UI/SideMenuSections/Credits/SubModules/Clients/CreditsClientsView"
  ).then((module) => ({ default: module.CreditsClientsView }))
);

const BranchOfficesView = lazy(() =>
  import(
    "@/components/UI/SideMenuSections/BranchOffices/BranchOfficesView"
  ).then((module) => ({
    default: module.BranchOfficesView,
  }))
);
const AccountView = lazy(() =>
  import("@/components/UI/SideMenuSections/Account/AccountView").then(
    (module) => ({ default: module.AccountView })
  )
);
const ProviderView = lazy(() =>
  import("@/components/UI/SideMenuSections/Providers/ProviderView").then(
    (module) => ({ default: module.ProviderView })
  )
);

const CommissionsView = lazy(() =>
  import("@/components/UI/SideMenuSections/Commissions/CommissionsView").then(
    (module) => ({ default: module.CommissionsView })
  )
);

const PDVGeneralForm = lazy(() =>
  import("./PointOfSale/PDVForm/Add/PDVGeneralForm").then((module) => ({
    default: module.PDVGeneralForm,
  }))
);

const SalesView = lazy(() =>
  import("@/components/UI/SideMenuSections/Sales/SalesView").then((module) => ({
    default: module.SalesView,
  }))
);

const MainCashView = lazy(() =>
  import(
    "@/components/UI/SideMenuSections/Cash/SubModules/Main/MainCashView"
  ).then((module) => ({
    default: module.MainCashView,
  }))
);

const SettingsCatalogueCategoriesView = lazy(() =>
  import(
    "@/components/UI/SideMenuSections/Settings/SubModule/Catalogue/Categories/SettingsCatalogueCategoriesView"
  ).then((module) => ({
    default: module.SettingsCatalogueCategoriesView,
  }))
);

//* COMPONENTS
import { UserView } from "@/components/UI/RoleInfo/UserView/UserView";
import { SectionView } from "@/components/UI/RoleInfo/SectionView/SectionView";

//*CONTEXT
import { useSessionProvider } from "@/hooks/useSessionProvider";
import { useSectionProvider } from "@/hooks/useSectionProvider";

//*UTILS
import { userDataLoginObj } from "@/utils/globalObjs/login/loginObjs";
import { AccountFormObj } from "./Account/utils/AccountFormObj";
import { sectionNameObj } from "@/utils/globalObjs/sectionNames/sectionNamesObj";

export function MainPage() {
  const {
    sectionName,
    setSectionName,
    setHasParams,
    setFilteredCheckedFields,
    hasParams,
  } = useSectionProvider();
  const {
    isLogged,
    setBranchInventory,
    rolID,
    setRolID,
    setUserInfoData,
    setMainBranchInventory,
    mainBranchInventory,
    branchInventory,
  } = useSessionProvider();

  useEffect(() => {
    if (!!sessionStorage.getItem(userDataLoginObj.userDataLogin) && !rolID) {
      if (
        JSON.parse(sessionStorage.getItem(userDataLoginObj.userDataLogin)!)[0]
          .rolID === AccountFormObj.BRANCHMANAGER &&
        JSON.parse(sessionStorage.getItem(userDataLoginObj.userDataLogin)!)[0]
          .branchOfficeData
      ) {
        setBranchInventory(
          JSON.parse(sessionStorage.getItem(userDataLoginObj.userDataLogin)!)[0]
            .branchOfficeData
        );
        setMainBranchInventory(
          JSON.parse(sessionStorage.getItem(userDataLoginObj.userDataLogin)!)[0]
            .branchMainData
        );
        setRolID(
          JSON.parse(sessionStorage.getItem(userDataLoginObj.userDataLogin)!)[0]
            .rolID
        );
        setUserInfoData(
          JSON.parse(sessionStorage.getItem(userDataLoginObj.userDataLogin)!)[0]
            .userInfoData
        );

        return;
      }
      if (
        JSON.parse(sessionStorage.getItem(userDataLoginObj.userDataLogin)!)[0]
          .rolID === AccountFormObj.ADMIN
      ) {
        if (
          JSON.parse(sessionStorage.getItem(userDataLoginObj.userDataLogin)!)[0]
            .branchOfficeData
        ) {
          setBranchInventory(
            JSON.parse(
              sessionStorage.getItem(userDataLoginObj.userDataLogin)!
            )[0].branchOfficeData
          );
        }
        setMainBranchInventory(
          JSON.parse(sessionStorage.getItem(userDataLoginObj.userDataLogin)!)[0]
            .branchMainData
        );
        setRolID(
          JSON.parse(sessionStorage.getItem(userDataLoginObj.userDataLogin)!)[0]
            .rolID
        );
        setUserInfoData(
          JSON.parse(sessionStorage.getItem(userDataLoginObj.userDataLogin)!)[0]
            .userInfoData
        );
        return;
      }
    }
  }, [rolID]);

  useEffect(() => {
    setHasParams(false);

    if (!sectionName) {
      setSectionName("PDV");
    }

    sessionStorage.setItem(
      sectionNameObj.SECTIONNAME,
      JSON.stringify(sectionName)
    );
  }, [sectionName]);

  useEffect(() => {
    if (sectionName !== "credits") {
      setFilteredCheckedFields([]);
    }
  }, [sectionName]);

  return isLogged ? (
    <>
      {/* TITLE/DESCRIPTION OF EVERY VIEW */}
      <Helmet>
        <title>
          Jael |{" "}
          {sectionName === "productsCatalogue" || sectionName === "products"
            ? "Catalogo General"
            : sectionName === "globalProducts"
            ? "Costos Globales"
            : sectionName === "clients"
            ? "Clientes"
            : sectionName === "orders"
            ? "Pedidos"
            : sectionName === "credits"
            ? "Creditos - Clientes"
            : sectionName === "creditRequests"
            ? "Creditos - Solicitudes"
            : sectionName === "creditsAccountsReceivable"
            ? "Creditos - Cuentas por Cobrar"
            : sectionName === "branch-offices"
            ? "Sucursales"
            : sectionName === "account"
            ? "Cuenta"
            : sectionName === "mainInventory"
            ? "Inventario Matriz"
            : sectionName === "mainInventory-Movements"
            ? "Inventario Matriz - Movimientos"
            : sectionName === "mainInventory-Outcome"
            ? "Inventario Matriz - Egresos"
            : sectionName === "BOInventory"
            ? "Inventario Sucursal"
            : sectionName === "BOInventory-Inventory"
            ? "Inventario Sucursal - Inventario"
            : sectionName === "BOInventory-Income"
            ? "Inventario Sucursal - Ingresos"
            : sectionName === "providers"
            ? "Proveedores"
            : sectionName === "PDV"
            ? "Punto de Venta"
            : sectionName === "sales"
            ? "Ventas"
            : sectionName === "commissions"
            ? "Comisiones"
            : sectionName === "cash"
            ? "Caja"
            : "App"}
        </title>
        <meta
          name="description"
          content={
            sectionName === "productsCatalogue" || sectionName === "products"
              ? "Catalogo General"
              : sectionName === "globalProducts"
              ? "Costos Globales"
              : sectionName === "clients"
              ? "Clientes"
              : sectionName === "orders"
              ? "Pedidos"
              : sectionName === "credits"
              ? "Creditos - Clientes"
              : sectionName === "creditRequests"
              ? "Creditos - Solicitudes"
              : sectionName === "creditsAccountsReceivable"
              ? "Creditos - Cuentas por Cobrar"
              : sectionName === "branch-offices"
              ? "Sucursales"
              : sectionName === "account"
              ? "Cuenta"
              : sectionName === "mainInventory"
              ? "Inventario Matriz"
              : sectionName === "mainInventory-Movements"
              ? "Inventario Matriz - Movimientos"
              : sectionName === "mainInventory-Outcome"
              ? "Inventario Matriz - Egresos"
              : sectionName === "BOInventory"
              ? "Inventario Sucursal"
              : sectionName === "BOInventory-Inventory"
              ? "Inventario Sucursal - Inventario"
              : sectionName === "BOInventory-Income"
              ? "Inventario Sucursal - Ingresos"
              : sectionName === "providers"
              ? "Proveedores"
              : sectionName === "PDV"
              ? "Punto de Venta"
              : sectionName === "sales"
              ? "Ventas"
              : sectionName === "commissions"
              ? "Comisiones"
              : sectionName === "cash"
              ? "Caja"
              : "App"
          }
        />
      </Helmet>
      <main className={styles.mainpage__container}>
        {/* <section className={styles.fixed__UserSectionView}>
          {sectionName !== "PDV" ? (
            <>
              <UserView />
              <SectionView
                title={`${
                  sectionName === "productsCatalogue" ||
                  sectionName === "products"
                    ? "Catalogo General"
                    : sectionName === "globalProducts"
                    ? "Costos Globales"
                    : sectionName === "clients"
                    ? "Clientes"
                    : sectionName === "orders"
                    ? "Pedidos"
                    : sectionName === "credits"
                    ? "Creditos - Clientes"
                    : sectionName === "creditRequests"
                    ? "Creditos - Solicitudes"
                    : sectionName === "creditsAccountsReceivable"
                    ? "Creditos - Cuentas por Cobrar"
                    : sectionName === "branch-offices"
                    ? "Sucursales"
                    : sectionName === "account"
                    ? "Cuenta"
                    : sectionName === "mainInventory"
                    ? "Inventario Matriz"
                    : sectionName === "mainInventory-Movements"
                    ? "Inventario Matriz - Movimientos"
                    : sectionName === "mainInventory-Outcome"
                    ? "Inventario Matriz - Egresos"
                    : sectionName === "BOInventory"
                    ? "Inventario Sucursal"
                    : sectionName === "BOInventory-Inventory"
                    ? "Inventario Sucursal - Inventario"
                    : sectionName === "BOInventory-Income"
                    ? "Inventario Sucursal - Ingresos"
                    : sectionName === "providers"
                    ? "Proveedores"
                    : sectionName === "sales"
                    ? `Ventas - Sucursal ${
                        rolID === AccountFormObj.ADMIN
                          ? mainBranchInventory.name
                          : branchInventory.name
                      }`
                    : sectionName === "commissions"
                    ? "Comisiones"
                    : sectionName === "cash"
                    ? "Caja"
                    : sectionName === "settings-Catalogue"
                    ? "Configuración Categorías"
                    : "App"
                }`}
              />
            </>
          ) : (
            <></>
          )}
        </section> */}
        {/* 
        <div
          className={

            sectionName !== "PDV"
              ? styles.fixed__divisor
              : 
              styles.fixed__divisorCustom
          }
        ></div> */}

        {/* SectionNameViewss */}
        {sectionName === "productsCatalogue" || sectionName === "products" ? (
          <ProductsView />
        ) : sectionName === "globalProducts" ? (
          <GlobalProductsView />
        ) : sectionName === "bOfficeProducts" ? (
          <BranchOfficeProductsView />
        ) : sectionName === "clients" ? (
          <ClientsView />
        ) : sectionName === "orders" ? (
          <OrdersView />
        ) : sectionName === "creditRequests" ? (
          <CreditsRequestsView />
        ) : sectionName === "creditsAccountsReceivable" ? (
          <AccountsReceivableView />
        ) : sectionName === "credits" ? (
          <CreditsClientsView />
        ) : sectionName === "branch-offices" ? (
          <BranchOfficesView />
        ) : sectionName === "account" ? (
          <AccountView />
        ) : sectionName === "mainInventory" ? (
          <MainInventoryView />
        ) : sectionName === "mainInventory-Movements" ||
          sectionName === "BOInventory-Income" ? (
          <MainIncomeInventoryView />
        ) : sectionName === "BOInventory" ||
          sectionName === "BOInventory-Inventory" ? (
          <BOInventoryView />
        ) : sectionName === "providers" ? (
          <ProviderView />
        ) : sectionName === "PDV" ? (
          <PDVGeneralForm />
        ) : sectionName === "sales" ? (
          <SalesView />
        ) : sectionName === "commissions" ? (
          <CommissionsView />
        ) : sectionName === "cash" ? (
          <MainCashView />
        ) : sectionName === "settings-Catalogue" ? (
          <SettingsCatalogueCategoriesView />
        ) : null}
      </main>
    </>
  ) : (
    <Navigate to="/login" />
  );
}
