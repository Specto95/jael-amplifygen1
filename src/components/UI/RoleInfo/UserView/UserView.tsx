import { useLocation } from "react-router-dom";

import { AccountFormObj } from "@/pages/Account/utils/AccountFormObj";
import styles from "./UserView.module.css";

import { useSectionProvider } from "@/hooks/useSectionProvider";

import { useSessionProvider } from "@/hooks/useSessionProvider";
import { SectionView } from "../SectionView/SectionView";
import { SectionTopOptions } from "../../SectionTopOptions/SectionTopOptions";
import { IUserViewProps } from "./interface/IUserView";

export function UserView<T>({
  Data,
  query,
  setQuery,
  setViewType,
  buttonAction,
  isForm = false,
}: IUserViewProps<T>) {
  const { sectionName } = useSectionProvider();
  const location = useLocation();

  const { branchInventory, rolID, userInfoData, mainBranchInventory } =
    useSessionProvider();
  return (
    <div className="flex__spacing-between">
      <SectionView
        title={`${
          sectionName === "productsCatalogue" || sectionName === "products"
            ? location.pathname.includes("/add")
              ? "Catalogo Producto"
              : "Catalogo General"
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
            : sectionName === "PDV"
            ? "Punto de Venta"
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

      <div className="flex__spacing">
        {!isForm ? (
          <SectionTopOptions
            noMB={true}
            customInput="STO__search-inputSecondary"
            query={query}
            setQuery={setQuery}
            setViewType={setViewType}
            buttonAction={buttonAction!}
            isForm={isForm}
          />
        ) : (
          <></>
        )}

        <div className={styles.userView__container}>
          {rolID === AccountFormObj.BRANCHMANAGER && (
            <div>
              <h2 className={styles.userView__branchName}>Sucursal</h2>
              <h4 className={styles.userView__branchID}>
                {branchInventory.name}
              </h4>
            </div>
          )}
          <div className={styles.userView__line}></div>
          <div>
            <h2 className={styles.userView__branchName}>{userInfoData.name}</h2>
            <h4 className={styles.userView__branchID}>
              {rolID === AccountFormObj.BRANCHMANAGER
                ? "Encargado"
                : "Administrador"}
            </h4>
          </div>
          <div className={styles["userView__logo-container"]}>
            <h1 className="logo-user">
              RO
              {/* {getInitials(userInfoName && userInfoName)} */}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
