import { Link } from "react-router-dom";
import styles from "./SectionTopOptions.module.css";

//* ASSETS
import Search from "@/assets/img/Search.png";

//* COMPONENTS
import { SelectVisualizationMode } from "../Selects/SelectVisualizationMode";
import { FiltersSelect } from "./Filters/FiltersSelect";
import { FiltersIcon } from "./Filters/FiltersIcon";

//* CUSTOM HOOKS
import { useSectionProvider } from "@/hooks/useSectionProvider";
import { useSessionProvider } from "@/hooks/useSessionProvider";

//* INTERFACES
import { ISectionTopOptionsProps } from "./interfaces/ISectionTopOptions";
import { AccountFormObj } from "@/pages/Account/utils/AccountFormObj";
import { ISectionName } from "@/interfaces/main";

export function SectionTopOptions({
  setViewType,
  setListProductsViewData,
  query,
  setQuery,
  noMB,
  customInput = "STO__search-inputSecondary",
  buttonAction = false,
  isForm = false,
}: ISectionTopOptionsProps): JSX.Element {
  const { rolID } = useSessionProvider();

  const { sectionName, hasParams } = useSectionProvider();
  return (
    <section
      className={noMB ? styles["STO__sectionNoMB"] : styles["STO__section"]}
    >
      <div className={styles["STO__container"]}>
        {(sectionName !== "BOInventory" || buttonAction) && (
          <div className={styles["STO__search-container"]}>
            <input
              value={query}
              onChange={(e) => setQuery!(e.target.value)}
              type="text"
              placeholder={
                sectionName === "productsCatalogue" ||
                sectionName === "products" ||
                sectionName === "mainInventory" ||
                sectionName === "mainInventory-Outcome" ||
                sectionName === "BOInventory" ||
                sectionName === "BOInventory-Inventory" ||
                sectionName === "providers" ||
                sectionName === "PDV"
                  ? "Buscar por nombre del producto:"
                  : sectionName === "mainInventory-Movements"
                  ? "Buscar por tipo de operación..."
                  : sectionName === "mainInventory-Requests"
                  ? "Buscar por estado..."
                  : sectionName === "clients"
                  ? "Buscar por nombre, #cliente..."
                  : sectionName === "commissions" ||
                    sectionName === "branch-offices"
                  ? "Buscar por sucursal"
                  : sectionName === "account"
                  ? "Buscar por nombre de usuario, id.."
                  : sectionName === "credits" ||
                    sectionName === "creditRequests"
                  ? "Buscar por nombre de cliente"
                  : sectionName === "creditsAccountsReceivable"
                  ? "Buscar por nombre:"
                  : "Buscar"
              }
              className={styles[customInput]}
            />
            <img
              src={Search}
              alt="search"
              className={styles["STO__search-icon"]}
            />
          </div>
        )}
        {(!hasParams &&
        (sectionName as ISectionName["sectionName"]) === "creditRequests" &&
        rolID === AccountFormObj.ADMIN
          ? false
          : true) && (
          <div className={styles["STO__buttons-container"]}>
            {sectionName !== "PDV" &&
            sectionName !== "commissions" &&
            sectionName !== "sales" &&
            sectionName !== "creditsAccountsReceivable" &&
            sectionName !== "cash" ? (
              sectionName === "settings-Catalogue" ? (
                <div className="flex__spacing">
                  <Link to="newClass/add" className="link__primary">
                    Nueva Clase
                  </Link>
                  <Link to="newGroup/add" className="link__primary">
                    Nuevo Grupo
                  </Link>
                  <Link to="newSubgroup/add" className="link__primary">
                    Nuevo Subgrupo
                  </Link>
                </div>
              ) : buttonAction ||
                !(
                  sectionName === "BOInventory" ||
                  sectionName === "mainInventory-Requests"
                ) ? (
                <Link
                  to={`${
                    sectionName === "productsCatalogue" ||
                    sectionName === "products"
                      ? "products/add"
                      : sectionName === "clients"
                      ? "clients/add"
                      : sectionName === "providers"
                      ? "provider/add"
                      : sectionName === "mainInventory" ||
                        sectionName === "mainInventory-Outcome" ||
                        sectionName === "mainInventory-Movements"
                      ? "/inventory/add"
                      : sectionName === "mainInventory-Requests"
                      ? "/mainInventoryRequests"
                      : sectionName === "BOInventory" ||
                        sectionName === "BOInventory-Inventory" ||
                        sectionName === "BOInventory-Income" ||
                        sectionName === "BOInventory-Outcome"
                      ? "BOInventory/add"
                      : sectionName === "branch-offices"
                      ? "branchOffices/add"
                      : sectionName === "account"
                      ? "account/add"
                      : sectionName === "credits"
                      ? "credits/add"
                      : sectionName === "creditRequests"
                      ? "creditRequests/add"
                      : ""
                  }`}
                  className="link__primary"
                >
                  {`
            ${
              sectionName === "productsCatalogue" || sectionName === "products"
                ? "Agregar Producto"
                : sectionName === "clients"
                ? "Agregar Cliente"
                : sectionName === "providers"
                ? "Agregar Proveedor"
                : sectionName === "mainInventory" ||
                  sectionName === "mainInventory-Movements" ||
                  sectionName === "mainInventory-Outcome" ||
                  sectionName === "BOInventory" ||
                  sectionName === "BOInventory-Inventory" ||
                  sectionName === "BOInventory-Income" ||
                  sectionName === "BOInventory-Outcome"
                ? "Nuevo Registro"
                : sectionName === "branch-offices"
                ? "Agregar Sucursal"
                : sectionName === "account"
                ? "Agregar Cuenta"
                : sectionName === "credits"
                ? "Nuevo Crédito"
                : sectionName === "creditRequests"
                ? "Solicitar Crédito"
                : ""
            }
              `}
                </Link>
              ) : null
            ) : null}
            {/* REACT-SELECT */}
            {(sectionName === "products" ||
              sectionName === "productsCatalogue") && (
              <SelectVisualizationMode setViewType={setViewType!} />
            )}
          </div>
        )}
      </div>
    </section>
  );
}
