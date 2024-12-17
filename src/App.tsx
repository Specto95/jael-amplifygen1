import { Suspense, lazy } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import { MainPageSpinner } from "./components/UI/Spinners/MainPageSpinner";
import { ProtectedRoute } from "./pages/ProtectedRoutes/ProtectedRoute";
import { SectionProvider } from "./context/SectionContext";
import { useSessionProvider } from "./hooks/useSessionProvider";

const Layout = lazy(() =>
  import("./components/Layouts/Layout").then((module) => ({
    default: module.Layout,
  }))
);
const LayoutOperation = lazy(() =>
  import("./components/Layouts/LayoutOperation").then((module) => ({
    default: module.LayoutOperation,
  }))
);

//*LAZY PAGES
const MainPage = lazy(() =>
  import("./pages/home").then((module) => ({ default: module.MainPage }))
);
const AddProduct = lazy(() =>
  import("./pages/Products/ProductForm/Add/AddProduct").then((module) => ({
    default: module.AddProduct,
  }))
);
const AddClient = lazy(() =>
  import("./pages/Clients/Add/AddClient").then((module) => ({
    default: module.AddClient,
  }))
);

const AddCreditRequestGeneralForm = lazy(() =>
  import(
    "./pages/Credits/SubModules/Requests/Add/CreditsRequestsGeneralForm"
  ).then((module) => ({
    default: module.CreditsRequestsGeneralForm,
  }))
);

const AddCreditClientsGeneralForm = lazy(() =>
  import(
    "./pages/Credits/SubModules/Clients/Add/CreditsClientsGeneralForm"
  ).then((module) => ({
    default: module.CreditsClientsGeneralForm,
  }))
);

const AccountsReceivableForm = lazy(() =>
  import(
    "./pages/Credits/SubModules/AccountsReceivable/AccountsReceivableForm"
  ).then((module) => ({
    default: module.AccountsReceivableForm,
  }))
);

const UpdateClientCreditDetailsForm = lazy(() =>
  import(
    "./pages/Credits/SubModules/Requests/Update/UpdateClientCreditDetailsForm"
  ).then((module) => ({
    default: module.UpdateClientCreditDetailsForm,
  }))
);

const AddProvider = lazy(() =>
  import("./pages/Providers/ProviderForm/Add/ProviderGeneralForm").then(
    (module) => ({ default: module.ProviderGeneralForm })
  )
);
const UpdateProvider = lazy(() =>
  import("./pages/Providers/ProviderForm/Update/UpdateProvider").then(
    (module) => ({ default: module.UpdateProvider })
  )
);
const UpdateProduct = lazy(() =>
  import("@/pages/Products/ProductForm/Update/UpdateProduct").then(
    (module) => ({ default: module.UpdateProduct })
  )
);

//? INVENTORY LAZY PAGES
const AddMainInventory = lazy(() =>
  import("./pages/Inventory/Type/Main/Add/InventoryGeneralForm").then(
    (module) => ({
      default: module.InventoryGeneralForm,
    })
  )
);

const AddBOInventory = lazy(() =>
  import("./pages/Inventory/Type/BranchOffice/Add/BOInventoryGeneralForm").then(
    (module) => ({
      default: module.BOInventoryGeneralForm,
    })
  )
);
const AddBranchOffice = lazy(() =>
  import("./pages/BranchOffices/Add/BranchOfficeGeneralForm").then(
    (module) => ({
      default: module.BranchOfficeGeneralForm,
    })
  )
);

const ListProductDetails = lazy(() =>
  import("./pages/Inventory/Type/Main/List/ListProductDetails").then(
    (module) => ({
      default: module.ListProductDetails,
    })
  )
);

const ListMainIncomeInventoryProductDetails = lazy(() =>
  import(
    "./pages/Inventory/Type/Main/List/subModule/Income/ListMainIncomeInventoryProductDetailsView"
  ).then((module) => ({
    default: module.ListMainIncomeInventoryProductDetailsView,
  }))
);

const ListMainOutcomeInventoryProductDetails = lazy(() =>
  import(
    "./pages/Inventory/Type/Main/List/subModule/Outcome/ListMainOutcomeInventoryProductDetailsView"
  ).then((module) => ({
    default: module.ListMainOutcomeInventoryProductDetailsView,
  }))
);

const ListClientMovements = lazy(() =>
  import("./pages/Credits/SubModules/Clients/List/ListClientMovements").then(
    (module) => ({
      default: module.ListClientMovements,
    })
  )
);

//? CREDENTIALS LAZY PAGES
const Login = lazy(() =>
  import("./pages/Credentials/Login/Login").then((module) => ({
    default: module.Login,
  }))
);
const ForgotPassword = lazy(() =>
  import("./pages/Credentials/ForgotPassword/ForgotPassword").then(
    (module) => ({ default: module.ForgotPassword })
  )
);
const UserData = lazy(() =>
  import("./pages/Credentials/UserData/UserData").then((module) => ({
    default: module.UserData,
  }))
);

const AccountGeneralForm = lazy(() =>
  import("./pages/Account/Add/AccountGeneralForm").then((module) => ({
    default: module.AccountGeneralForm,
  }))
);

const CashForm = lazy(() =>
  import("./pages/Cash/Add/CashForm").then((module) => ({
    default: module.CashForm,
  }))
);

const CatalogueCategoriesGeneralForm = lazy(() =>
  import(
    "./pages/Settings/Add/Modules/Catalogue/Categories/CatalogueCategoriesGeneralForm"
  ).then((module) => ({
    default: module.CatalogueCategoriesGeneralForm,
  }))
);

const CatalogueGroupGeneralForm = lazy(() =>
  import(
    "./pages/Settings/Add/Modules/Catalogue/Group/CatalogueGroupGeneralForm"
  ).then((module) => ({
    default: module.CatalogueGroupGeneralForm,
  }))
);

const UpdateMainIncomeRequestForm = lazy(() =>
  import(
    "./pages/Inventory/Type/Main/Update/Requests/UpdateMainIncomeRequestForm"
  ).then((module) => ({
    default: module.UpdateMainIncomeRequestForm,
  }))
);

const CatalogueSubGroupGeneralForm = lazy(() =>
  import(
    "./pages/Settings/Add/Modules/Catalogue/Subgroup/CatalogueSubGroupGeneralForm"
  ).then((module) => ({
    default: module.CatalogueSubGroupGeneralForm,
  }))
);

const NotFound = lazy(() =>
  import("./NotFound").then((module) => ({
    default: module.NotFound,
  }))
);

// const PDVGeneralForm = lazy(() =>
//   import("./pages/PointOfSale/PDVForm/Add/PDVGeneralForm").then((module) => ({
//     default: module.PDVGeneralForm,
//   }))
// );

const UpdateSaleForm = lazy(() =>
  import("./pages/Sales/Update/UpdateSaleForm").then((module) => ({
    default: module.UpdateSaleForm,
  }))
);

export function App(): JSX.Element {
  const { isLogged } = useSessionProvider();

  return (
    <div className="App">
      <Suspense fallback={<MainPageSpinner />}>
        <SectionProvider>
          <Routes>
            {/**** CREDENTIALS  ******/}

            <Route element={<ProtectedRoute isLogged={isLogged} />}>
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/userData" element={<UserData />} />
              <Route element={<Layout />}>
                <Route path="/" element={<MainPage />} />
              </Route>

              <Route element={<LayoutOperation />}>
                <Route path="/products/add" element={<AddProduct />} />
                <Route
                  path="/products/update/:id"
                  element={<UpdateProduct />}
                />
                <Route path="/clients/add" element={<AddClient />} />
                <Route path="/provider/add" element={<AddProvider />} />
                <Route
                  path="/provider/update/:id"
                  element={<UpdateProvider />}
                />
                <Route path="/inventory/add" element={<AddMainInventory />} />
                <Route path="/BOinventory/add" element={<AddBOInventory />} />
                <Route path="/inventory/:id" element={<ListProductDetails />} />
                <Route
                  path="/inventory/income/:id"
                  element={<ListMainIncomeInventoryProductDetails />}
                />
                <Route
                  path="/inventory/outcome/:id"
                  element={<ListMainOutcomeInventoryProductDetails />}
                />
                <Route
                  path="/branchOffices/add"
                  element={<AddBranchOffice />}
                />
                <Route path="/account/add" element={<AccountGeneralForm />} />
                <Route
                  path="/credits/add"
                  element={<AddCreditClientsGeneralForm />}
                />
                <Route
                  path="/creditRequests/add"
                  element={<AddCreditRequestGeneralForm />}
                />

                <Route path="/cash/add" element={<CashForm />} />

                <Route
                  path="newClass/add"
                  element={<CatalogueCategoriesGeneralForm />}
                />

                <Route
                  path="newGroup/add"
                  element={<CatalogueGroupGeneralForm />}
                />

                <Route
                  path="newSubgroup/add"
                  element={<CatalogueSubGroupGeneralForm />}
                />

                <Route
                  path="/clientMovements/:id"
                  element={<ListClientMovements />}
                />

                <Route
                  path="/accountsReceivable/:id"
                  element={<AccountsReceivableForm />}
                />
                <Route
                  path="/creditRequests/update/:id"
                  element={<UpdateClientCreditDetailsForm />}
                />

                <Route path="/sales/update/:id" element={<UpdateSaleForm />} />

                <Route
                  path="/mainInventory-Requests/:id"
                  element={<UpdateMainIncomeRequestForm />}
                />

                <Route
                  path="/BOInventory-Requests/:id"
                  element={<UpdateMainIncomeRequestForm />}
                />
              </Route>
            </Route>
            {/* CATCH ALL */}
            <Route path="*" element={<NotFound isLogged={isLogged} />} />
          </Routes>
        </SectionProvider>
      </Suspense>
    </div>
  );
}
