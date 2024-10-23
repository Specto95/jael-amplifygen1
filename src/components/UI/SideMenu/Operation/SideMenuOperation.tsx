import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../SideMenu.module.css";

//* ASSETS
import Catalogue from "@/assets/img/Catalogue.svg";
import PointOfSale from "@/assets/img/PointOfSale.png";
import Clients from "@/assets/img/Clients.svg";
import Credits from "@/assets/img/Credits.svg";
import Account from "@/assets/img/Account.svg";
import Orders from "@/assets/img/Orders.svg";
import Inventory from "@/assets/img/Inventory.svg";
import InventoryMain from "@/assets/img/inventoryMain.png";
import BranchOffices from "@/assets/img/BranchOffices.svg";
import Providers from "@/assets/img/Providers.svg";
import Commissions from "@/assets/img/Commissions.png";
import ArrowDown from "@/assets/img/ArrowDown.png";
import Cash from "@/assets/img/Cash.png";
import Settings from "@/assets/img/Settings.svg";

//* HOOKS
import { useSectionProvider } from "@/hooks/useSectionProvider";
import { useSessionProvider } from "@/hooks/useSessionProvider";
import { userDataRoles } from "../../SideMenuSections/Sales/List/helpers/userDataRoles";

//* INTERFACES
import { ILayoutSideMenuOperation } from "./interfaces/ISideMenuOperation";
import { ISectionDisplayed } from "../interfaces/ISectionDisplayed";
import { ISectionName } from "@/interfaces/main";

export function SideMenuOperation({
  values,
  fileName,
}: ILayoutSideMenuOperation): JSX.Element {
  const navigate = useNavigate();
  const [sectionDisplayed, setSectionDisplayed] =
    useState<ISectionDisplayed["section"]>("");
  const { setSectionName } = useSectionProvider();
  const { userData } = useSessionProvider();

  const handleBack = () => {
    setTimeout(() => {
      navigate("/");
    }, 300);
  };

  const handleSection = (sectionName: ISectionName["sectionName"]) => {
    if (values) {
      if (
        (Object.values(values).every((value) => !value) && fileName === null) ||
        ("providerFormData" in values &&
          Object.values(values.providerFormData).every(
            (value) => !value || value === 1
          )) ||
        values.hasOwnProperty("isClientRegistered")
      ) {
        handleBack();
        setSectionName(sectionName);
        return;
      }
      if (
        Object.values(values).some((value) => value) ||
        fileName ||
        Object.keys(values).length === 0
      ) {
        if (
          confirm(
            "¿Estás seguro de que quieres salir? Se perderán los cambios realizados."
          )
        ) {
          handleBack();
          setSectionName(sectionName);
          return;
        }
        return;
      }
      handleBack();
      setSectionName(sectionName);
    } else {
      handleBack();
      setSectionName(sectionName);
    }
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles["sidebar__box-logo"]}>
        <h2 className={styles.sidebar__logo}>JAEL</h2>
      </div>

      <div className={styles.sidebar__buttons}>
        {userData.rolID === userDataRoles.ADMIN && (
          <div
            onClick={() => {
              handleSection("products");
            }}
            className={styles["sidebar__buttons-container"]}
          >
            <img
              src={Catalogue}
              alt="Catalogue"
              className={styles.sidebar__icons}
            />
            <h4>Catálogo</h4>
          </div>
        )}

        <div
          onClick={() => handleSection("PDV")}
          className={styles["sidebar__buttons-container"]}
        >
          <img
            src={PointOfSale}
            alt="Punto de Venta"
            className={styles.sidebar__icons}
          />
          <h4>Punto de Venta</h4>
        </div>
        <div
          onClick={() => handleSection("clients")}
          className={styles["sidebar__buttons-container"]}
        >
          <img src={Clients} alt="Clients" className={styles.sidebar__icons} />
          <h4>Clientes</h4>
        </div>
        <div
          onClick={() => handleSection("orders")}
          className={styles["sidebar__buttons-container"]}
        >
          <img src={Orders} alt="Orders" className={styles.sidebar__icons} />
          <h4>Pedidos</h4>
        </div>
        {userData.rolID === userDataRoles.ADMIN && (
          <div
            onClick={() => handleSection("credits")}
            className={styles["sidebar__buttons-container"]}
          >
            <img
              src={Credits}
              alt="Credits"
              className={styles.sidebar__icons}
            />
            <h4>Créditos</h4>
          </div>
        )}
        <div
          onClick={() => handleSection("sales")}
          className={styles["sidebar__buttons-container"]}
        >
          <img
            src={PointOfSale}
            alt="Ventas"
            className={styles.sidebar__icons}
          />
          <h4>Ventas</h4>
        </div>
        {userData.rolID === userDataRoles.ADMIN && (
          <div
            onClick={() => handleSection("branch-offices")}
            className={styles["sidebar__buttons-container"]}
          >
            <img
              src={BranchOffices}
              alt="Branch Offices"
              className={styles.sidebar__icons}
            />
            <h4>Sucursales</h4>
          </div>
        )}
        {userData.rolID === userDataRoles.ADMIN && (
          <div
            onClick={() => handleSection("account")}
            className={styles["sidebar__buttons-container"]}
          >
            <img
              src={Account}
              alt="Account"
              className={styles.sidebar__icons}
            />
            <h4>Cuenta</h4>
          </div>
        )}
        <div
          onClick={() => {
            // setSectionName("BOInventory");
            // setSectionDisplayed("BOInventory");
            handleSection("BOInventory");
          }}
          className={styles["sidebar__buttons-container"]}
        >
          <img
            src={Catalogue}
            alt="BranchOffice Inventory"
            className={styles.sidebar__icons}
          />
          <h4>Inventario Sucursal</h4>
          <img
            src={ArrowDown}
            alt="Flecha hacia abajo"
            className={`arrow__sideMenu ${
              sectionDisplayed === "BOInventory" ? "rotateArrow180Deg" : ""
            }`}
          />
        </div>
        {sectionDisplayed === "BOInventory" && (
          <>
            <div
              className={styles.sidebar__subSection}
              onClick={() => setSectionName("BOInventory-Inventory")}
            >
              Inventario
            </div>
            <div
              className={styles.sidebar__subSection}
              onClick={() => setSectionName("BOInventory-Income")}
            >
              Ingreso
            </div>
            <div
              className={styles.sidebar__subSection}
              onClick={() => setSectionName("BOInventory-Returns")}
            >
              Devoluciones
            </div>
          </>
        )}
        {userData.rolID === userDataRoles.ADMIN && (
          <div
            onClick={() => {
              // setSectionName("mainInventory");
              // setSectionDisplayed("mainInventory");
              handleSection("mainInventory");
            }}
            className={styles["sidebar__buttons-container"]}
          >
            <img
              src={InventoryMain}
              alt="Main Inventory"
              className={styles.sidebar__icons}
            />
            <h4>Inventario Matríz</h4>
            <img
              src={ArrowDown}
              alt="Flecha hacia abajo"
              className={`arrow__sideMenu ${
                sectionDisplayed === "mainInventory" ? "rotateArrow180Deg" : ""
              }`}
            />
          </div>
        )}

        {sectionDisplayed === "mainInventory" && (
          <>
            <div
              className={styles.sidebar__subSection}
              onClick={() => setSectionName("mainInventory-Inventory")}
            >
              Inventario
            </div>
            <div
              className={styles.sidebar__subSection}
              onClick={() => setSectionName("mainInventory")}
            >
              Ingreso
            </div>
            <div
              className={styles.sidebar__subSection}
              onClick={() => setSectionName("mainInventory-Outcome")}
            >
              Egreso
            </div>
            <div
              className={styles.sidebar__subSection}
              onClick={() => setSectionName("mainInventory-Returns")}
            >
              Devoluciones
            </div>
          </>
        )}
        <div
          onClick={() => handleSection("providers")}
          className={styles["sidebar__buttons-container"]}
        >
          <img
            src={Providers}
            alt="Providers"
            className={styles.sidebar__icons}
          />
          <h4>Proovedores</h4>
        </div>
        {userData.rolID === userDataRoles.ADMIN && (
          <>
            <div
              onClick={() => handleSection("commissions")}
              className={styles["sidebar__buttons-container"]}
            >
              <img
                src={Commissions}
                alt="Comisiones"
                className={styles.sidebar__icons}
              />
              <h4>Comisiones</h4>
            </div>
            <div
              onClick={() => {
                setSectionName("settings");
                setSectionDisplayed("settings");
              }}
              className={styles["sidebar__buttons-container"]}
            >
              <img
                src={Settings}
                alt="Settings"
                className={styles.sidebar__icons}
              />
              <h4>Configuración</h4>
              <img
                src={ArrowDown}
                alt="Flecha hacia abajo"
                className={`arrow__sideMenu ${
                  sectionDisplayed === "settings" ? "rotateArrow180Deg" : ""
                }`}
              />
            </div>

            {sectionDisplayed === "settings" && (
              <>
                <div className={styles.sidebar__subSection}>Catalogo</div>
                <ul>
                  <li className={styles["sidebar__subSection-li"]}>
                    Formato de Claves
                  </li>
                  <li
                    className={styles["sidebar__subSection-li"]}
                    onClick={() => setSectionName("settings-Catalogue")}
                  >
                    Categorias
                  </li>
                  <li
                    className={styles["sidebar__subSection-li"]}
                    // onClick={() => setSectionName("mainInventory-Returns")}
                  >
                    Gastos Fijos
                  </li>
                </ul>
              </>
            )}
            <div
              onClick={() => {
                setSectionName("cash");
                setSectionDisplayed("cash");
              }}
              className={styles["sidebar__buttons-container"]}
            >
              <img src={Cash} alt="Cash" className={styles.sidebar__icons} />
              <h4>Caja</h4>
              <img
                src={ArrowDown}
                alt="Flecha hacia abajo"
                className={`arrow__sideMenu ${
                  sectionDisplayed === "cash" ? "rotateArrow180Deg" : ""
                }`}
              />
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
