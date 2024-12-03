import { useContext, useState, useEffect } from "react";
import { CiLogout } from "react-icons/ci";

import styles from "./SideMenu.module.css";

//* ASSETS
import Catalogue from "@/assets/img/Catalogue.svg";
import PointOfSale from "@/assets/img/PointOfSale.png";
import Clients from "@/assets/img/Clients.svg";
import Credits from "@/assets/img/Credits.svg";
import Account from "@/assets/img/Account.svg";
import Orders from "@/assets/img/Orders.svg";
import InventoryMain from "@/assets/img/inventoryMain.png";
import BranchOffices from "@/assets/img/BranchOffices.svg";
import Providers from "@/assets/img/Providers.svg";
import Commissions from "@/assets/img/Commissions.png";
import ArrowDown from "@/assets/img/ArrowDown.png";
import Cash from "@/assets/img/Cash.png";
import Settings from "@/assets/img/Settings.svg";

//* CONTEXT
import { SectionContext } from "@/context/SectionContext";

//* COMPONENTS
import { userDataRoles } from "../SideMenuSections/Sales/List/helpers/userDataRoles";

//* HOOKS
import { useSessionProvider } from "@/hooks/useSessionProvider";

//* INTERFACES
import { ISectionDisplayed } from "./interfaces/ISectionDisplayed";
import { AccountFormObj } from "@/pages/Account/utils/AccountFormObj";
import { ISectionName, ISubSectionName } from "@/interfaces/main";

export function SideMenu(): JSX.Element {
  const [sectionDisplayed, setSectionDisplayed] =
    useState<ISectionDisplayed["section"]>("");
  const [displayedSection, setDisplayedSection] =
    useState<ISectionName["sectionName"]>("");
  const [displayedSubSection, setDisplayedSubSection] =
    useState<ISubSectionName["subSectionName"]>("");
  const { setSectionName } = useContext(SectionContext);
  const { userData, setUserData, logOut, rolID } = useSessionProvider();

  const toggleSection = (section: ISectionName["sectionName"]) => {
    if (displayedSection === section) {
      setDisplayedSection("");
    } else {
      setDisplayedSection(section);
    }
  };

  const handleSubSection = (subSection: ISubSectionName["subSectionName"]) => {
    // if (displayedSubSection === subSection) {
    //   setDisplayedSubSection("");
    // } else {
    setSectionName(subSection);
    setDisplayedSubSection(subSection);
    // }
  };

  useEffect(() => {
    const storedData = JSON.parse(sessionStorage.getItem("user") || "{}");
    if (!storedData) {
      setUserData(storedData);
    }
  }, [userData]);

  return (
    <aside className={styles.sidebar}>
      <div className="flex__spacing-between">
        <div className={styles["sidebar__box-logo"]}>
          <h2 className={styles.sidebar__logo}>JAEL</h2>
        </div>
        <div className={styles.sidebar__logout} onClick={logOut}>
          <CiLogout className="fs-2" />
          <h6>Cerrar Sesión</h6>
        </div>
      </div>
      <div className={styles.sidebar__buttons}>
        {userData.rolID === userDataRoles.ADMIN && (
          <div
            onClick={() => {
              setSectionName("products");
              toggleSection("products");
              setDisplayedSubSection("productsCatalogue");
            }}
            className={styles["sidebar__buttons-container"]}
          >
            <img
              src={Catalogue}
              alt="Catalogo"
              className={styles.sidebar__icons}
            />
            <h4>Catálogo</h4>
            <img
              src={ArrowDown}
              alt="Flecha hacia abajo"
              className={`arrow__sideMenu ${
                displayedSection === "products" ? "rotateArrow180Deg" : ""
              }`}
            />
          </div>
        )}

        {displayedSection === "products" && (
          <>
            <div
              className={
                displayedSubSection === "productsCatalogue"
                  ? styles.sidebar__subMenuSelected
                  : styles.sidebar__subSection
              }
              onClick={() => handleSubSection("productsCatalogue")}
            >
              Productos
            </div>
            <div
              className={
                displayedSubSection === "globalProducts"
                  ? styles.sidebar__subMenuSelected
                  : styles.sidebar__subSection
              }
              onClick={() => handleSubSection("globalProducts")}
            >
              Costos Globales
            </div>
            <div
              className={
                displayedSubSection === "bOfficeProducts"
                  ? styles.sidebar__subMenuSelected
                  : styles.sidebar__subSection
              }
              onClick={() => handleSubSection("bOfficeProducts")}
            >
              Por Sucursal
            </div>
          </>
        )}

        <div
          onClick={() => setSectionName("PDV")}
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
          onClick={() => setSectionName("clients")}
          className={styles["sidebar__buttons-container"]}
        >
          <img src={Clients} alt="Clients" className={styles.sidebar__icons} />
          <h4>Clientes</h4>
        </div>
        <div
          onClick={() => setSectionName("orders")}
          className={styles["sidebar__buttons-container"]}
        >
          <img src={Orders} alt="Orders" className={styles.sidebar__icons} />
          <h4>Pedidos</h4>
        </div>
        <div
          onClick={() => {
            setSectionName(
              rolID === AccountFormObj.ADMIN ? "credits" : "creditRequests"
            );
            toggleSection(
              rolID === AccountFormObj.ADMIN ? "credits" : "creditRequests"
            );
            setDisplayedSubSection("credits");
          }}
          className={styles["sidebar__buttons-container"]}
        >
          <img src={Credits} alt="Credits" className={styles.sidebar__icons} />
          <h4>
            {rolID === AccountFormObj.ADMIN ? "Créditos" : "Solicitar Crédito"}
          </h4>
          {rolID === AccountFormObj.ADMIN && (
            <img
              src={ArrowDown}
              alt="Flecha hacia abajo"
              className={`arrow__sideMenu ${
                displayedSection === "credits" ? "rotateArrow180Deg" : ""
              }`}
            />
          )}
        </div>

        {displayedSection === "credits" && (
          <>
            <div
              className={
                displayedSubSection === "creditRequests"
                  ? styles.sidebar__subMenuSelected
                  : styles.sidebar__subSection
              }
              onClick={() => handleSubSection("creditRequests")}
            >
              Solicitudes
            </div>
            {rolID === AccountFormObj.ADMIN && (
              <>
                <div
                  className={
                    displayedSubSection === "credits"
                      ? styles.sidebar__subMenuSelected
                      : styles.sidebar__subSection
                  }
                  onClick={() => handleSubSection("credits")}
                >
                  Clientes
                </div>
                <div
                  className={
                    displayedSubSection === "creditsAccountsReceivable"
                      ? styles.sidebar__subMenuSelected
                      : styles.sidebar__subSection
                  }
                  onClick={() => handleSubSection("creditsAccountsReceivable")}
                >
                  Cuentas por Cobrar
                </div>
              </>
            )}
          </>
        )}

        <div
          onClick={() => setSectionName("sales")}
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
            onClick={() => setSectionName("branch-offices")}
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
            onClick={() => setSectionName("account")}
            className={styles["sidebar__buttons-container"]}
          >
            <img src={Account} alt="Cuenta" className={styles.sidebar__icons} />
            <h4>Cuenta</h4>
          </div>
        )}

        <div
          onClick={() => {
            setSectionName("BOInventory");
            toggleSection("BOInventory");
            setDisplayedSubSection("BOInventory-Inventory");
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
              displayedSection === "BOInventory" ? "rotateArrow180Deg" : ""
            }`}
          />
        </div>
        {displayedSection === "BOInventory" && (
          <>
            <div
              className={
                displayedSubSection === "BOInventory-Inventory"
                  ? styles.sidebar__subMenuSelected
                  : styles.sidebar__subSection
              }
              onClick={() => handleSubSection("BOInventory-Inventory")}
            >
              Inventario
            </div>
            <div
              className={
                displayedSubSection === "BOInventory-Income"
                  ? styles.sidebar__subMenuSelected
                  : styles.sidebar__subSection
              }
              onClick={() => handleSubSection("BOInventory-Income")}
            >
              Ingreso
            </div>
            <div
              className={
                displayedSubSection === "BOInventory-Returns"
                  ? styles.sidebar__subMenuSelected
                  : styles.sidebar__subSection
              }
              onClick={() => handleSubSection("BOInventory-Returns")}
            >
              Devoluciones
            </div>
          </>
        )}

        {userData.rolID === userDataRoles.ADMIN && (
          <>
            <div
              onClick={() => {
                setSectionName("mainInventory");
                setSectionDisplayed("mainInventory");
                setDisplayedSubSection("mainInventory");
              }}
              className={styles["sidebar__buttons-container"]}
            >
              <img
                src={InventoryMain}
                alt="MainInventory"
                className={styles.sidebar__icons}
              />
              <h4>Inventario Matríz</h4>
              <img
                src={ArrowDown}
                alt="Flecha hacia abajo"
                className={`arrow__sideMenu ${
                  displayedSection === "mainInventory"
                    ? "rotateArrow180Deg"
                    : ""
                }`}
              />
            </div>

            {sectionDisplayed === "mainInventory" && (
              <>
                <div
                  className={
                    displayedSubSection === "mainInventory"
                      ? styles.sidebar__subMenuSelected
                      : styles.sidebar__subSection
                  }
                  onClick={() => handleSubSection("mainInventory")}
                >
                  Inventario
                </div>
                <div
                  className={
                    displayedSubSection === "mainInventory-Movements"
                      ? styles.sidebar__subMenuSelected
                      : styles.sidebar__subSection
                  }
                  onClick={() => handleSubSection("mainInventory-Movements")}
                >
                  Movimientos
                </div>
                <div
                  className={
                    displayedSubSection === "mainInventory-Requests"
                      ? styles.sidebar__subMenuSelected
                      : styles.sidebar__subSection
                  }
                  onClick={() => handleSubSection("mainInventory-Requests")}
                >
                  Peticiones
                </div>
                <div
                  className={
                    displayedSubSection === "mainInventory-Returns"
                      ? styles.sidebar__subMenuSelected
                      : styles.sidebar__subSection
                  }
                  onClick={() => handleSubSection("mainInventory-Returns")}
                >
                  Devoluciones
                </div>
              </>
            )}
          </>
        )}

        <div
          onClick={() => setSectionName("providers")}
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
          <div
            onClick={() => setSectionName("commissions")}
            className={styles["sidebar__buttons-container"]}
          >
            <img
              src={Commissions}
              alt="Comisiones"
              className={styles.sidebar__icons}
            />
            <h4>Comisiones</h4>
          </div>
        )}

        {userData.rolID === userDataRoles.ADMIN && (
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
        )}

        {sectionDisplayed === "settings" && (
          <>
            <div className={styles.sidebar__subSection}>Catalogo</div>
            <ul>
              <li className={styles["sidebar__subSection-li"]}>
                Formato de Claves
              </li>
              <li
                className={
                  displayedSubSection === "settings-Catalogue"
                    ? styles.sidebar_twoSubMenuSelected
                    : styles["sidebar__subSection-li"]
                }
                onClick={() => handleSubSection("settings-Catalogue")}
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

        {sectionDisplayed === "cash" && (
          <>
            <div
              className={
                displayedSubSection === "mainCash"
                  ? styles.sidebar__subMenuSelected
                  : styles.sidebar__subSection
              }
              onClick={() => handleSubSection("mainCash")}
            >
              Matríz
            </div>
            <div
              className={
                displayedSubSection === "BOCash"
                  ? styles.sidebar__subMenuSelected
                  : styles.sidebar__subSection
              }
              onClick={() => handleSubSection("BOCash")}
            >
              Sucursal
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
