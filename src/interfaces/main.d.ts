export interface ISectionName {
  sectionName:
    | "products"
    | "productsCatalogue"
    | "globalProducts"
    | "bOfficeProducts"
    | "clients"
    | "orders"
    | "credits"
    | "creditRequests"
    | "creditsAccountsReceivable"
    | "branch-offices"
    | "account"
    | "BOInventory"
    | "BOInventory-Income"
    | "BOInventory-Outcome"
    | "BOInventory-Returns"
    | "BOInventory-Inventory"
    | "mainInventory"
    | "mainInventory-Movements"
    | "mainInventory-Outcome"
    | "mainInventory-Returns"
    | "mainInventory-Inventory"
    | "providers"
    | "PDV"
    | "sales"
    | "commissions"
    | "cash"
    | "mainCash"
    | "BOCash"
    | "settings"
    | "settings-Catalogue"
    | "settings-CatalogueCategories"
    | "";
}

export interface ISubSectionName {
  subSectionName:
    | "productsCatalogue"
    | "globalProducts"
    | "bOfficeProducts"
    | "creditRequests"
    | "creditsAccountsReceivable"
    | "credits"
    | "BOInventory-Income"
    | "BOInventory-Outcome"
    | "BOInventory-Returns"
    | "BOInventory-Inventory"
    | "mainInventory"
    | "mainInventory-Movements"
    | "mainInventory-Outcome"
    | "mainInventory-Returns"
    | "mainInventory-Inventory"
    | "mainCash"
    | "BOCash"
    | "settings"
    | "settings-Catalogue"
    | "settings-CatalogueCategories"
    | "";
}


export interface IChildren {
  children: React.ReactNode;
}
