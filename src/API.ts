/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCategoryInput = {
  id: number;
  name?: string | null;
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelCategoryConditionInput | null> | null;
  or?: Array<ModelCategoryConditionInput | null> | null;
  not?: ModelCategoryConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Category = {
  __typename: "Category";
  id: number;
  name?: string | null;
  subcategories?: ModelSubCategoryConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelSubCategoryConnection = {
  __typename: "ModelSubCategoryConnection";
  items: Array<SubCategory | null>;
  nextToken?: string | null;
};

export type SubCategory = {
  __typename: "SubCategory";
  id: number;
  categoryID: number;
  subcategory_name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCategoryInput = {
  id: number;
  name?: string | null;
};

export type DeleteCategoryInput = {
  id: number;
};

export type CreateSubCategoryInput = {
  id: number;
  categoryID: number;
  subcategory_name?: string | null;
};

export type ModelSubCategoryConditionInput = {
  categoryID?: ModelIntInput | null;
  subcategory_name?: ModelStringInput | null;
  and?: Array<ModelSubCategoryConditionInput | null> | null;
  or?: Array<ModelSubCategoryConditionInput | null> | null;
  not?: ModelSubCategoryConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateSubCategoryInput = {
  id: number;
  categoryID?: number | null;
  subcategory_name?: string | null;
};

export type DeleteSubCategoryInput = {
  id: number;
};

export type CreateClassInput = {
  id: number;
  name?: string | null;
};

export type ModelClassConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelClassConditionInput | null> | null;
  or?: Array<ModelClassConditionInput | null> | null;
  not?: ModelClassConditionInput | null;
};

export type Class = {
  __typename: "Class";
  id: number;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateClassInput = {
  id: number;
  name?: string | null;
};

export type DeleteClassInput = {
  id: number;
};

export type CreateClientInput = {
  id?: string | null;
  name: string;
  second_name?: string | null;
  lastname: string;
  second_lastname?: string | null;
  phone: string;
  fixed_phone?: string | null;
  email?: string | null;
  birthday?: string | null;
  RFC?: string | null;
  address?: string | null;
  settlement?: string | null;
  postal_code?: string | null;
  state?: string | null;
  city?: string | null;
  creditID?: string | null;
  branchOfficeID: string;
  hasCredit: boolean;
  hasCreditRequest?: boolean | null;
};

export type ModelClientConditionInput = {
  name?: ModelStringInput | null;
  second_name?: ModelStringInput | null;
  lastname?: ModelStringInput | null;
  second_lastname?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  fixed_phone?: ModelStringInput | null;
  email?: ModelStringInput | null;
  birthday?: ModelStringInput | null;
  RFC?: ModelStringInput | null;
  address?: ModelStringInput | null;
  settlement?: ModelStringInput | null;
  postal_code?: ModelStringInput | null;
  state?: ModelStringInput | null;
  city?: ModelStringInput | null;
  creditID?: ModelIDInput | null;
  branchOfficeID?: ModelIDInput | null;
  hasCredit?: ModelBooleanInput | null;
  hasCreditRequest?: ModelBooleanInput | null;
  and?: Array<ModelClientConditionInput | null> | null;
  or?: Array<ModelClientConditionInput | null> | null;
  not?: ModelClientConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Client = {
  __typename: "Client";
  id: string;
  name: string;
  second_name?: string | null;
  lastname: string;
  second_lastname?: string | null;
  phone: string;
  fixed_phone?: string | null;
  email?: string | null;
  birthday?: string | null;
  RFC?: string | null;
  address?: string | null;
  settlement?: string | null;
  postal_code?: string | null;
  state?: string | null;
  city?: string | null;
  salesOperation?: ModelSalesOperationConnection | null;
  creditID?: string | null;
  credit?: Credits | null;
  creditRequests?: ModelCreditRequestsConnection | null;
  branchOfficeID: string;
  branchOffice?: BranchOffice | null;
  hasCredit: boolean;
  hasCreditRequest?: boolean | null;
  returnsInventory?: ModelReturnsInventoryConnection | null;
  salesOperationClientCreditMovements?: ModelSalesOperationClientCreditMovementsConnection | null;
  salesOperationClientCreditFirstLastPayment?: ModelSalesOperationClientCreditFirstLastPaymentConnection | null;
  salesOperationCustomerSubscription?: ModelSalesOperationCustomerSubscriptionConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelSalesOperationConnection = {
  __typename: "ModelSalesOperationConnection";
  items: Array<SalesOperation | null>;
  nextToken?: string | null;
};

export type SalesOperation = {
  __typename: "SalesOperation";
  id: string;
  date?: string | null;
  total?: number | null;
  totalCash?: number | null;
  totalCommission?: number | null;
  nonRegisteredClientID?: string | null;
  nonRegisteredClient?: NonRegisteredClient | null;
  pendingToPay?: number | null;
  amountPaid?: number | null;
  salesOperationType: SalesOperationType;
  status: SalesOperationStatus;
  monthsToPay?: number | null;
  termDaysToPay?: SalesOperationTermDaysToPay | null;
  totalPayments?: number | null;
  currentTotalPayments?: number | null;
  lastPaymentDate?: string | null;
  lastDatePaid?: string | null;
  inventoryOperationID?: InventoryOperation | null;
  clientID?: string | null;
  client?: Client | null;
  userInfoID?: string | null;
  userInfo?: UserInfo | null;
  branchOfficeID: string;
  branchOffice?: BranchOffice | null;
  salesOperationInventoryProductQuantities?: ModelSalesOperationInventoryProductQuantityConnection | null;
  salesOperationClientCreditMovements?: ModelSalesOperationClientCreditMovementsConnection | null;
  salesOperationClientCreditFirstLastPayment?: ModelSalesOperationClientCreditFirstLastPaymentConnection | null;
  salesOperationCustomerSubscription?: ModelSalesOperationCustomerSubscriptionConnection | null;
  createdAt: string;
  updatedAt: string;
  salesOperationInventoryOperationIDId?: string | null;
};

export type NonRegisteredClient = {
  __typename: "NonRegisteredClient";
  id: string;
  fullName: string;
  saleOperation?: SalesOperation | null;
  createdAt: string;
  updatedAt: string;
  nonRegisteredClientSaleOperationId?: string | null;
};

export enum SalesOperationType {
  CASH = "CASH",
  CREDIT = "CREDIT",
}

export enum SalesOperationStatus {
  PENDING = "PENDING",
  PAID = "PAID",
  EXPIRED = "EXPIRED",
}

export enum SalesOperationTermDaysToPay {
  BIWEEKLY = "BIWEEKLY",
  MONTHLY = "MONTHLY",
  NONE = "NONE",
}

export enum SalesOperationTermDaysToPaySpanish {
  BIWEEKLY = "15 Días",
  MONTHLY = "Mensual",
  NONE = "NONE",
}

export type InventoryOperation = {
  __typename: "InventoryOperation";
  id: string;
  operationType: OperationType;
  inventoryID: string;
  inventory: Inventory;
  incomeInventory?: IncomeInventory | null;
  incomeInventoryRequest?: IncomeInventoryRequest | null;
  outcomeInventory?: OutcomeInventory | null;
  outcomeInventoryRequest?: OutcomeInventoryRequest | null;
  salesOperation?: SalesOperation | null;
  createdAt: string;
  updatedAt: string;
  inventoryOperationIncomeInventoryId?: string | null;
  inventoryOperationIncomeInventoryRequestId?: string | null;
  inventoryOperationOutcomeInventoryId?: string | null;
  inventoryOperationOutcomeInventoryRequestId?: string | null;
  inventoryOperationSalesOperationId?: string | null;
};

export enum OperationType {
  INCOME = "INCOME",
  OUTCOME = "OUTCOME",
  SALE = "SALE",
  RETURN = "RETURN",
}

export type Inventory = {
  __typename: "Inventory";
  id: string;
  name: string;
  branchOfficeID?: string | null;
  branchOffice?: BranchOffice | null;
  inventoryOperations?: ModelInventoryOperationConnection | null;
  inventoryProduct?: ModelInventoryProductConnection | null;
  isMain?: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type BranchOffice = {
  __typename: "BranchOffice";
  id: string;
  name: string;
  zipcode?: string | null;
  state?: string | null;
  location: string;
  address?: string | null;
  phone?: string | null;
  branchOffice_commission?: number | null;
  inventories?: ModelInventoryConnection | null;
  isMain?: boolean | null;
  creditRequests?: ModelCreditRequestsConnection | null;
  companyExpenses?: ModelCompanyExpensesConnection | null;
  users?: ModelBranchOfficeUserConnection | null;
  clients?: ModelClientConnection | null;
  outcomeInventories?: ModelOutcomeInventoryConnection | null;
  outcomeInventoriesRequest?: ModelOutcomeInventoryRequestConnection | null;
  incomeInventories?: ModelIncomeInventoryConnection | null;
  incomeInventoriesRequest?: ModelIncomeInventoryRequestConnection | null;
  salesOperations?: ModelSalesOperationConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelInventoryConnection = {
  __typename: "ModelInventoryConnection";
  items: Array<Inventory | null>;
  nextToken?: string | null;
};

export type ModelCreditRequestsConnection = {
  __typename: "ModelCreditRequestsConnection";
  items: Array<CreditRequests | null>;
  nextToken?: string | null;
};

export type CreditRequests = {
  __typename: "CreditRequests";
  id: string;
  clientID?: string | null;
  client?: Client | null;
  branchOfficeID?: string | null;
  branchOffice?: BranchOffice | null;
  creditRequestAmount?: number | null;
  creditRequestStatus?: CreditRequestStatus | null;
  creditRequestReason?: string | null;
  createdAt: string;
  updatedAt: string;
};

export enum CreditRequestStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}

export type ModelCompanyExpensesConnection = {
  __typename: "ModelCompanyExpensesConnection";
  items: Array<CompanyExpenses | null>;
  nextToken?: string | null;
};

export type CompanyExpenses = {
  __typename: "CompanyExpenses";
  id: string;
  name: string;
  description?: string | null;
  costType: CostType;
  date?: string | null;
  amount: number;
  userInfoID?: string | null;
  userInfo?: UserInfo | null;
  branchOfficeID?: string | null;
  branchOffice?: BranchOffice | null;
  createdAt: string;
  updatedAt: string;
};

export enum CostType {
  FIXED = "FIXED",
  VARIABLE = "VARIABLE",
}

export type UserInfo = {
  __typename: "UserInfo";
  id: string;
  name: string;
  phone?: string | null;
  RFC?: string | null;
  gender?: string | null;
  user?: User | null;
  companyExpenses?: ModelCompanyExpensesConnection | null;
  salesOperation?: ModelSalesOperationConnection | null;
  incomeInventories?: ModelIncomeInventoryConnection | null;
  incomeInventoriesRequest?: ModelIncomeInventoryRequestConnection | null;
  outcomeInventories?: ModelOutcomeInventoryConnection | null;
  outcomeInventoriesRequest?: ModelOutcomeInventoryRequestConnection | null;
  returnsInventory?: ModelReturnsInventoryConnection | null;
  createdAt: string;
  updatedAt: string;
  userInfoUserId?: string | null;
};

export type User = {
  __typename: "User";
  id: string;
  email: string;
  password: string;
  rolID: string;
  rol?: Role | null;
  userInfo?: UserInfo | null;
  hasBranchOffice?: boolean | null;
  branchOffice?: ModelBranchOfficeUserConnection | null;
  createdAt: string;
  updatedAt: string;
  userUserInfoId?: string | null;
};

export type Role = {
  __typename: "Role";
  id: string;
  name: RoleType;
  description?: string | null;
  user?: ModelUserConnection | null;
  createdAt: string;
  updatedAt: string;
};

export enum RoleType {
  ADMIN = "ADMIN",
  BRANCHMANAGER = "BRANCHMANAGER",
}

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items: Array<User | null>;
  nextToken?: string | null;
};

export type ModelBranchOfficeUserConnection = {
  __typename: "ModelBranchOfficeUserConnection";
  items: Array<BranchOfficeUser | null>;
  nextToken?: string | null;
};

export type BranchOfficeUser = {
  __typename: "BranchOfficeUser";
  id: string;
  userId: string;
  branchOfficeId: string;
  user: User;
  branchOffice: BranchOffice;
  createdAt: string;
  updatedAt: string;
};

export type ModelIncomeInventoryConnection = {
  __typename: "ModelIncomeInventoryConnection";
  items: Array<IncomeInventory | null>;
  nextToken?: string | null;
};

export type IncomeInventory = {
  __typename: "IncomeInventory";
  id: string;
  date: string;
  comments?: string | null;
  status?: IOInventoryStatus | null;
  inventoryOperationID?: InventoryOperation | null;
  providerID: string;
  provider?: Provider | null;
  productProviderResponsibleID: string;
  productProviderResponsible?: ProductProviderResponsible | null;
  userInfoID: string;
  userInfo?: UserInfo | null;
  branchOfficeID?: string | null;
  branchOffice?: BranchOffice | null;
  incomeInventoryProductQuantities?: ModelIncomeInventoryProductQuantityConnection | null;
  createdAt: string;
  updatedAt: string;
  incomeInventoryInventoryOperationIDId?: string | null;
};

export enum IOInventoryStatus {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  IN_TRANSIT = "IN_TRANSIT",
  DELIVERED = "DELIVERED",
  CANCELED = "CANCELED",
  RETURNING = "RETURNING",
  RETURNED = "RETURNED",
  FAILED = "FAILED",
}

export enum IOInventoryFinishStatus {
  CANCELED = "CANCELED",
  RETURNED = "RETURNED",
  RETURNING = "RETURNING",
  FAILED = "FAILED",
  DELIVERED = "DELIVERED",
}

export enum IOMainInventoryToSubmitStatus {
  IN_TRANSIT = "IN_TRANSIT",
  CANCELED = "CANCELED",
  RETURNED = "RETURNED",
}

export enum IOBOInventoryToSubmitStatus {
  DELIVERED = "DELIVERED",
  RETURNING = "RETURNING",
}

export type IOMainInventorySelectStatusType = Extract<
  IOInventoryStatus,
  | IOInventoryStatus.IN_TRANSIT
  | IOInventoryStatus.CANCELED
  | IOInventoryStatus.RETURNED
>;

export enum IOMainInventoryFinishStatus {
  CANCELED = "CANCELED",
  RETURNED = "RETURNED",
  FAILED = "FAILED",
  DELIVERED = "DELIVERED",
}

export enum IOBOInventoryFinishStatus {
  PROCESSING = "PROCESSING",
  IN_TRANSIT = "IN_TRANSIT",
}

export enum IOMainInventorySelectStatus {
  PROCESSING = "PROCESSING",
  IN_TRANSIT = "IN_TRANSIT",
  RETURNING = "RETURNING",
}

export enum IOMainInventoryRequestStatusValues {
  PROCESSING = "PROCESSING",
  IN_TRANSIT = "IN_TRANSIT",
  CANCELED = "CANCELED",
}

export enum IOMainInventoryRequestStatusReturningValues {
  RETURNING = "RETURNING",
  RETURNED = "RETURNED",
}

export type IOMainInventoryRequestStatus =
  | IOInventoryStatus.PROCESSING
  | IOInventoryStatus.IN_TRANSIT
  | IOInventoryStatus.CANCELED;

export enum IOBOInventoryRequestStatusValues {
  IN_TRANSIT = "IN_TRANSIT",
  DELIVERED = "DELIVERED",
  RETURNING = "RETURNING",
}

export type IOBOInventoryRequestStatus =
  | IOInventoryStatus.IN_TRANSIT
  | IOInventoryStatus.DELIVERED
  | IOInventoryStatus.CANCELED
  | IOInventoryStatus.RETURNED;

export enum IOInventoryStatusSpanish {
  PENDING = "Pendiente",
  PROCESSING = "Procesando",
  IN_TRANSIT = "En Entrega",
  DELIVERED = "Entregado",
  CANCELED = "Cancelado",
  RETURNING = "Devolver",
  RETURNED = "Devolución",
  FAILED = "Fallido",
}

export type Provider = {
  __typename: "Provider";
  id: string;
  enterprise_name: string;
  enterprise_RFC?: string | null;
  phone?: string | null;
  fixed_phone?: string | null;
  type?: string | null;
  productprovider?: ProductProvider | null;
  serviceprovider?: ServiceProvider | null;
  incomeInventories?: ModelIncomeInventoryConnection | null;
  incomeInventoriesRequest?: ModelIncomeInventoryRequestConnection | null;
  createdAt: string;
  updatedAt: string;
  providerProductproviderId?: string | null;
  providerServiceproviderId?: string | null;
};

export type ProductProvider = {
  __typename: "ProductProvider";
  id: string;
  responsible?: ModelProductProviderResponsibleConnection | null;
  providerID?: Provider | null;
  product?: ModelProductConnection | null;
  inventoryProduct?: ModelInventoryProductConnection | null;
  createdAt: string;
  updatedAt: string;
  productProviderProviderIDId?: string | null;
};

export type ModelProductProviderResponsibleConnection = {
  __typename: "ModelProductProviderResponsibleConnection";
  items: Array<ProductProviderResponsible | null>;
  nextToken?: string | null;
};

export type ProductProviderResponsible = {
  __typename: "ProductProviderResponsible";
  id: string;
  productproviderID: string;
  name: string;
  second_name?: string | null;
  lastname: string;
  second_lastname?: string | null;
  phone: string;
  RFC?: string | null;
  incomeInventories?: ModelIncomeInventoryConnection | null;
  incomeInventoriesRequest?: ModelIncomeInventoryRequestConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelIncomeInventoryRequestConnection = {
  __typename: "ModelIncomeInventoryRequestConnection";
  items: Array<IncomeInventoryRequest | null>;
  nextToken?: string | null;
};

export type IncomeInventoryRequest = {
  __typename: "IncomeInventoryRequest";
  id: string;
  date: string;
  comments?: string | null;
  status: IOInventoryStatus;
  inventoryOperationID?: InventoryOperation | null;
  providerID: string;
  provider?: Provider | null;
  productProviderResponsibleID: string;
  productProviderResponsible?: ProductProviderResponsible | null;
  branchOfficeID: string;
  branchOffice?: BranchOffice | null;
  userInfoID: string;
  userInfo?: UserInfo | null;
  incomeInventoryProductQuantitiesRequest?: ModelIncomeInventoryProductQuantityRequestConnection | null;
  createdAt: string;
  updatedAt: string;
  incomeInventoryRequestInventoryOperationIDId?: string | null;
};

export type ModelIncomeInventoryProductQuantityRequestConnection = {
  __typename: "ModelIncomeInventoryProductQuantityRequestConnection";
  items: Array<IncomeInventoryProductQuantityRequest | null>;
  nextToken?: string | null;
};

export type IncomeInventoryProductQuantityRequest = {
  __typename: "IncomeInventoryProductQuantityRequest";
  id: string;
  incomeQuantity: number;
  inventoryProducts?: ModelInventoryProductIncomeInventoryRequestConnection | null;
  incomeInventoryRequestID: string;
  incomeInventoryRequest?: IncomeInventoryRequest | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelInventoryProductIncomeInventoryRequestConnection = {
  __typename: "ModelInventoryProductIncomeInventoryRequestConnection";
  items: Array<InventoryProductIncomeInventoryRequest | null>;
  nextToken?: string | null;
};

export type InventoryProductIncomeInventoryRequest = {
  __typename: "InventoryProductIncomeInventoryRequest";
  id: string;
  incomeInventoryProductQuantityRequestId: string;
  inventoryProductId: string;
  incomeInventoryProductQuantityRequest: IncomeInventoryProductQuantityRequest;
  inventoryProduct: InventoryProduct;
  createdAt: string;
  updatedAt: string;
};

export type InventoryProduct = {
  __typename: "InventoryProduct";
  id: string;
  inventoryID: string;
  inventory?: Inventory | null;
  productID: string;
  product?: Product | null;
  quantity: number;
  customPrice?: number | null;
  generalPrice?: number | null;
  productProviderID?: string | null;
  productProvider?: ProductProvider | null;
  discounts?: ModelDiscountInventoryProductConnection | null;
  inventoryProductIncomeInventory?: ModelInventoryProductIncomeInventoryConnection | null;
  inventoryProductIncomeInventoryRequests?: ModelInventoryProductIncomeInventoryRequestConnection | null;
  inventoryProductOutcomeInventory?: ModelInventoryProductOutcomeInventoryConnection | null;
  inventoryProductOutcomeInventoryRequests?: ModelInventoryProductOutcomeInventoryRequestConnection | null;
  inventoryProductSalesOperation?: ModelInventoryProductSalesOperationConnection | null;
  returnsInventory?: ModelInventoryProductReturnsInventoryConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type Product = {
  __typename: "Product";
  id: string;
  class_id: number;
  category_id: number;
  subcategory_id: number;
  name: string;
  description?: string | null;
  price: number;
  commission?: number | null;
  hasCommission?: boolean | null;
  hasDiscount?: boolean | null;
  class?: Class | null;
  category?: Category | null;
  subcategory?: SubCategory | null;
  productProviderID: string;
  productProvider?: ProductProvider | null;
  inventoryProduct?: ModelInventoryProductConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelInventoryProductConnection = {
  __typename: "ModelInventoryProductConnection";
  items: Array<InventoryProduct | null>;
  nextToken?: string | null;
};

export type ModelDiscountInventoryProductConnection = {
  __typename: "ModelDiscountInventoryProductConnection";
  items: Array<DiscountInventoryProduct | null>;
  nextToken?: string | null;
};

export type DiscountInventoryProduct = {
  __typename: "DiscountInventoryProduct";
  id: string;
  inventoryProductId: string;
  discountsId: string;
  inventoryProduct: InventoryProduct;
  discounts: Discounts;
  createdAt: string;
  updatedAt: string;
};

export type Discounts = {
  __typename: "Discounts";
  id: string;
  discount: number;
  inventoryProducts?: ModelDiscountInventoryProductConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelInventoryProductIncomeInventoryConnection = {
  __typename: "ModelInventoryProductIncomeInventoryConnection";
  items: Array<InventoryProductIncomeInventory | null>;
  nextToken?: string | null;
};

export type InventoryProductIncomeInventory = {
  __typename: "InventoryProductIncomeInventory";
  id: string;
  incomeInventoryProductQuantityId: string;
  inventoryProductId: string;
  incomeInventoryProductQuantity: IncomeInventoryProductQuantity;
  inventoryProduct: InventoryProduct;
  createdAt: string;
  updatedAt: string;
};

export type IncomeInventoryProductQuantity = {
  __typename: "IncomeInventoryProductQuantity";
  id: string;
  incomeQuantity: number;
  inventoryProducts?: ModelInventoryProductIncomeInventoryConnection | null;
  incomeInventoryID: string;
  incomeInventory?: IncomeInventory | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelInventoryProductOutcomeInventoryConnection = {
  __typename: "ModelInventoryProductOutcomeInventoryConnection";
  items: Array<InventoryProductOutcomeInventory | null>;
  nextToken?: string | null;
};

export type InventoryProductOutcomeInventory = {
  __typename: "InventoryProductOutcomeInventory";
  id: string;
  outcomeInventoryProductQuantityId: string;
  inventoryProductId: string;
  outcomeInventoryProductQuantity: OutcomeInventoryProductQuantity;
  inventoryProduct: InventoryProduct;
  createdAt: string;
  updatedAt: string;
};

export type OutcomeInventoryProductQuantity = {
  __typename: "OutcomeInventoryProductQuantity";
  id: string;
  outcomeQuantity: number;
  inventoryProducts?: ModelInventoryProductOutcomeInventoryConnection | null;
  outcomeInventoryID: string;
  outcomeInventory?: OutcomeInventory | null;
  createdAt: string;
  updatedAt: string;
};

export type OutcomeInventory = {
  __typename: "OutcomeInventory";
  id: string;
  date: string;
  comments?: string | null;
  status?: IOInventoryStatus | null;
  userInfoID: string;
  userInfo?: UserInfo | null;
  branchOfficeID?: string | null;
  branchOffice?: BranchOffice | null;
  inventoryOperationID?: InventoryOperation | null;
  outcomeInventoryProductQuantities?: ModelOutcomeInventoryProductQuantityConnection | null;
  createdAt: string;
  updatedAt: string;
  outcomeInventoryInventoryOperationIDId?: string | null;
};

export type ModelOutcomeInventoryProductQuantityConnection = {
  __typename: "ModelOutcomeInventoryProductQuantityConnection";
  items: Array<OutcomeInventoryProductQuantity | null>;
  nextToken?: string | null;
};

export type ModelInventoryProductOutcomeInventoryRequestConnection = {
  __typename: "ModelInventoryProductOutcomeInventoryRequestConnection";
  items: Array<InventoryProductOutcomeInventoryRequest | null>;
  nextToken?: string | null;
};

export type InventoryProductOutcomeInventoryRequest = {
  __typename: "InventoryProductOutcomeInventoryRequest";
  id: string;
  outcomeInventoryProductQuantityRequestId: string;
  inventoryProductId: string;
  outcomeInventoryProductQuantityRequest: OutcomeInventoryProductQuantityRequest;
  inventoryProduct: InventoryProduct;
  createdAt: string;
  updatedAt: string;
};

export type OutcomeInventoryProductQuantityRequest = {
  __typename: "OutcomeInventoryProductQuantityRequest";
  id: string;
  outcomeRequestQuantity: number;
  inventoryProducts?: ModelInventoryProductOutcomeInventoryRequestConnection | null;
  outcomeInventoryRequestID: string;
  outcomeInventoryRequest?: OutcomeInventoryRequest | null;
  createdAt: string;
  updatedAt: string;
};

export type OutcomeInventoryRequest = {
  __typename: "OutcomeInventoryRequest";
  id: string;
  date: string;
  comments?: string | null;
  status?: IOInventoryStatus | null;
  userInfoID: string;
  userInfo?: UserInfo | null;
  branchOfficeID?: string | null;
  branchOffice?: BranchOffice | null;
  inventoryOperationID?: InventoryOperation | null;
  outcomeInventoryProductQuantitiesRequest?: ModelOutcomeInventoryProductQuantityRequestConnection | null;
  createdAt: string;
  updatedAt: string;
  outcomeInventoryRequestInventoryOperationIDId?: string | null;
};

export type ModelOutcomeInventoryProductQuantityRequestConnection = {
  __typename: "ModelOutcomeInventoryProductQuantityRequestConnection";
  items: Array<OutcomeInventoryProductQuantityRequest | null>;
  nextToken?: string | null;
};

export type ModelInventoryProductSalesOperationConnection = {
  __typename: "ModelInventoryProductSalesOperationConnection";
  items: Array<InventoryProductSalesOperation | null>;
  nextToken?: string | null;
};

export type InventoryProductSalesOperation = {
  __typename: "InventoryProductSalesOperation";
  id: string;
  inventoryProductId: string;
  salesOperationInventoryProductQuantityId: string;
  inventoryProduct: InventoryProduct;
  salesOperationInventoryProductQuantity: SalesOperationInventoryProductQuantity;
  createdAt: string;
  updatedAt: string;
};

export type SalesOperationInventoryProductQuantity = {
  __typename: "SalesOperationInventoryProductQuantity";
  id: string;
  name?: string | null;
  salesOperationID: string;
  salesOperation?: SalesOperation | null;
  inventoryProducts?: ModelInventoryProductSalesOperationConnection | null;
  soldProductQuantity: number;
  withDiscount?: boolean | null;
  discountPercentage?: number | null;
  discountPerProduct?: number | null;
  totalDiscounted?: number | null;
  productPriceWithDiscount?: number | null;
  amountToPayWithDiscount?: number | null;
  amountToPay: number;
  createdAt: string;
  updatedAt: string;
};

export type ModelInventoryProductReturnsInventoryConnection = {
  __typename: "ModelInventoryProductReturnsInventoryConnection";
  items: Array<InventoryProductReturnsInventory | null>;
  nextToken?: string | null;
};

export type InventoryProductReturnsInventory = {
  __typename: "InventoryProductReturnsInventory";
  id: string;
  returnsInventoryId: string;
  inventoryProductId: string;
  returnsInventory: ReturnsInventory;
  inventoryProduct: InventoryProduct;
  createdAt: string;
  updatedAt: string;
};

export type ReturnsInventory = {
  __typename: "ReturnsInventory";
  id: string;
  userInfoID: string;
  userInfo?: UserInfo | null;
  clientID: string;
  client?: Client | null;
  comments?: string | null;
  inventoryProducts?: ModelInventoryProductReturnsInventoryConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection";
  items: Array<Product | null>;
  nextToken?: string | null;
};

export type ServiceProvider = {
  __typename: "ServiceProvider";
  id: string;
  service_name?: string | null;
  service_description?: string | null;
  cost_type?: string | null;
  responsible?: ModelServiceProviderResponsibleConnection | null;
  providerID?: Provider | null;
  createdAt: string;
  updatedAt: string;
  serviceProviderProviderIDId?: string | null;
};

export type ModelServiceProviderResponsibleConnection = {
  __typename: "ModelServiceProviderResponsibleConnection";
  items: Array<ServiceProviderResponsible | null>;
  nextToken?: string | null;
};

export type ServiceProviderResponsible = {
  __typename: "ServiceProviderResponsible";
  id: string;
  serviceproviderID: string;
  name: string;
  second_name?: string | null;
  lastname: string;
  second_lastname?: string | null;
  phone?: string | null;
  RFC?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelIncomeInventoryProductQuantityConnection = {
  __typename: "ModelIncomeInventoryProductQuantityConnection";
  items: Array<IncomeInventoryProductQuantity | null>;
  nextToken?: string | null;
};

export type ModelOutcomeInventoryConnection = {
  __typename: "ModelOutcomeInventoryConnection";
  items: Array<OutcomeInventory | null>;
  nextToken?: string | null;
};

export type ModelOutcomeInventoryRequestConnection = {
  __typename: "ModelOutcomeInventoryRequestConnection";
  items: Array<OutcomeInventoryRequest | null>;
  nextToken?: string | null;
};

export type ModelReturnsInventoryConnection = {
  __typename: "ModelReturnsInventoryConnection";
  items: Array<ReturnsInventory | null>;
  nextToken?: string | null;
};

export type ModelClientConnection = {
  __typename: "ModelClientConnection";
  items: Array<Client | null>;
  nextToken?: string | null;
};

export type ModelInventoryOperationConnection = {
  __typename: "ModelInventoryOperationConnection";
  items: Array<InventoryOperation | null>;
  nextToken?: string | null;
};

export type ModelSalesOperationInventoryProductQuantityConnection = {
  __typename: "ModelSalesOperationInventoryProductQuantityConnection";
  items: Array<SalesOperationInventoryProductQuantity | null>;
  nextToken?: string | null;
};

export type ModelSalesOperationClientCreditMovementsConnection = {
  __typename: "ModelSalesOperationClientCreditMovementsConnection";
  items: Array<SalesOperationClientCreditMovements | null>;
  nextToken?: string | null;
};

export type SalesOperationClientCreditMovements = {
  __typename: "SalesOperationClientCreditMovements";
  id: string;
  salesOperationID: string;
  salesOperation?: SalesOperation | null;
  paymentDate?: string | null;
  datePaid?: string | null;
  amountToPay: number;
  pendingToPay?: number | null;
  amountPaid?: number | null;
  status: SalesOperationClientCreditMovementStatus;
  numberOfPayment?: number | null;
  clientID?: string | null;
  client?: Client | null;
  createdAt: string;
  updatedAt: string;
};

export enum SalesOperationClientCreditMovementStatus {
  PENDING = "PENDING",
  PAID = "PAID",
  EXPIRED = "EXPIRED",
}

export type ModelSalesOperationClientCreditFirstLastPaymentConnection = {
  __typename: "ModelSalesOperationClientCreditFirstLastPaymentConnection";
  items: Array<SalesOperationClientCreditFirstLastPayment | null>;
  nextToken?: string | null;
};

export type SalesOperationClientCreditFirstLastPayment = {
  __typename: "SalesOperationClientCreditFirstLastPayment";
  id: string;
  salesOperationID: string;
  salesOperation?: SalesOperation | null;
  startDate?: string | null;
  endDate?: string | null;
  clientID?: string | null;
  client?: Client | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelSalesOperationCustomerSubscriptionConnection = {
  __typename: "ModelSalesOperationCustomerSubscriptionConnection";
  items: Array<SalesOperationCustomerSubscription | null>;
  nextToken?: string | null;
};

export type SalesOperationCustomerSubscription = {
  __typename: "SalesOperationCustomerSubscription";
  id: string;
  salesOperationID: string;
  salesOperation?: SalesOperation | null;
  clientID?: string | null;
  client?: Client | null;
  date?: string | null;
  advancePayment?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type Credits = {
  __typename: "Credits";
  id: string;
  client?: Client | null;
  totalCredit: number;
  credit_available: number;
  outstanding_balance?: number | null;
  payment_status: PaymentStatus;
  last_payment_date?: string | null;
  startDate?: string | null;
  createdAt: string;
  updatedAt: string;
  creditsClientId?: string | null;
};

export enum PaymentStatus {
  PENDING = "PENDING",
  PAID = "PAID",
  FREE = "FREE",
  BLOCKED = "BLOCKED",
}

export type UpdateClientInput = {
  id: string;
  name?: string | null;
  second_name?: string | null;
  lastname?: string | null;
  second_lastname?: string | null;
  phone?: string | null;
  fixed_phone?: string | null;
  email?: string | null;
  birthday?: string | null;
  RFC?: string | null;
  address?: string | null;
  settlement?: string | null;
  postal_code?: string | null;
  state?: string | null;
  city?: string | null;
  creditID?: string | null;
  branchOfficeID?: string | null;
  hasCredit?: boolean | null;
  hasCreditRequest?: boolean | null;
};

export type DeleteClientInput = {
  id: string;
};

export type CreateNonRegisteredClientInput = {
  id?: string | null;
  fullName: string;
  nonRegisteredClientSaleOperationId?: string | null;
};

export type ModelNonRegisteredClientConditionInput = {
  fullName?: ModelStringInput | null;
  and?: Array<ModelNonRegisteredClientConditionInput | null> | null;
  or?: Array<ModelNonRegisteredClientConditionInput | null> | null;
  not?: ModelNonRegisteredClientConditionInput | null;
  nonRegisteredClientSaleOperationId?: ModelIDInput | null;
};

export type UpdateNonRegisteredClientInput = {
  id: string;
  fullName?: string | null;
  nonRegisteredClientSaleOperationId?: string | null;
};

export type DeleteNonRegisteredClientInput = {
  id: string;
};

export type CreateCreditsInput = {
  id?: string | null;
  totalCredit: number;
  credit_available: number;
  outstanding_balance?: number | null;
  payment_status: PaymentStatus;
  last_payment_date?: string | null;
  startDate?: string | null;
  creditsClientId?: string | null;
};

export type ModelCreditsConditionInput = {
  totalCredit?: ModelFloatInput | null;
  credit_available?: ModelFloatInput | null;
  outstanding_balance?: ModelFloatInput | null;
  payment_status?: ModelPaymentStatusInput | null;
  last_payment_date?: ModelStringInput | null;
  startDate?: ModelStringInput | null;
  and?: Array<ModelCreditsConditionInput | null> | null;
  or?: Array<ModelCreditsConditionInput | null> | null;
  not?: ModelCreditsConditionInput | null;
  creditsClientId?: ModelIDInput | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelPaymentStatusInput = {
  eq?: PaymentStatus | null;
  ne?: PaymentStatus | null;
};

export type UpdateCreditsInput = {
  id: string;
  totalCredit?: number | null;
  credit_available?: number | null;
  outstanding_balance?: number | null;
  payment_status?: PaymentStatus | null;
  last_payment_date?: string | null;
  startDate?: string | null;
  creditsClientId?: string | null;
};

export type DeleteCreditsInput = {
  id: string;
};

export type CreateCreditRequestsInput = {
  id?: string | null;
  clientID?: string | null;
  branchOfficeID?: string | null;
  creditRequestAmount?: number | null;
  creditRequestStatus?: CreditRequestStatus | null;
  creditRequestReason?: string | null;
};

export type ModelCreditRequestsConditionInput = {
  clientID?: ModelIDInput | null;
  branchOfficeID?: ModelIDInput | null;
  creditRequestAmount?: ModelFloatInput | null;
  creditRequestStatus?: ModelCreditRequestStatusInput | null;
  creditRequestReason?: ModelStringInput | null;
  and?: Array<ModelCreditRequestsConditionInput | null> | null;
  or?: Array<ModelCreditRequestsConditionInput | null> | null;
  not?: ModelCreditRequestsConditionInput | null;
};

export type ModelCreditRequestStatusInput = {
  eq?: CreditRequestStatus | null;
  ne?: CreditRequestStatus | null;
};

export type UpdateCreditRequestsInput = {
  id: string;
  clientID?: string | null;
  branchOfficeID?: string | null;
  creditRequestAmount?: number | null;
  creditRequestStatus?: CreditRequestStatus | null;
  creditRequestReason?: string | null;
};

export type DeleteCreditRequestsInput = {
  id: string;
};

export type CreateProductInput = {
  id?: string | null;
  class_id: number;
  category_id: number;
  subcategory_id: number;
  name: string;
  description?: string | null;
  price: number;
  commission?: number | null;
  hasCommission?: boolean | null;
  hasDiscount?: boolean | null;
  productProviderID: string;
};

export type ModelProductConditionInput = {
  class_id?: ModelIntInput | null;
  category_id?: ModelIntInput | null;
  subcategory_id?: ModelIntInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  price?: ModelFloatInput | null;
  commission?: ModelIntInput | null;
  hasCommission?: ModelBooleanInput | null;
  hasDiscount?: ModelBooleanInput | null;
  productProviderID?: ModelIDInput | null;
  and?: Array<ModelProductConditionInput | null> | null;
  or?: Array<ModelProductConditionInput | null> | null;
  not?: ModelProductConditionInput | null;
};

export type UpdateProductInput = {
  id: string;
  class_id?: number | null;
  category_id?: number | null;
  subcategory_id?: number | null;
  name?: string | null;
  description?: string | null;
  price?: number | null;
  commission?: number | null;
  hasCommission?: boolean | null;
  hasDiscount?: boolean | null;
  productProviderID?: string | null;
};

export type DeleteProductInput = {
  id: string;
};

export type CreateInventoryOperationInput = {
  id?: string | null;
  operationType: OperationType;
  inventoryID: string;
  inventoryOperationIncomeInventoryId?: string | null;
  inventoryOperationIncomeInventoryRequestId?: string | null;
  inventoryOperationOutcomeInventoryId?: string | null;
  inventoryOperationOutcomeInventoryRequestId?: string | null;
  inventoryOperationSalesOperationId?: string | null;
};

export type ModelInventoryOperationConditionInput = {
  operationType?: ModelOperationTypeInput | null;
  inventoryID?: ModelIDInput | null;
  and?: Array<ModelInventoryOperationConditionInput | null> | null;
  or?: Array<ModelInventoryOperationConditionInput | null> | null;
  not?: ModelInventoryOperationConditionInput | null;
  inventoryOperationIncomeInventoryId?: ModelIDInput | null;
  inventoryOperationIncomeInventoryRequestId?: ModelIDInput | null;
  inventoryOperationOutcomeInventoryId?: ModelIDInput | null;
  inventoryOperationOutcomeInventoryRequestId?: ModelIDInput | null;
  inventoryOperationSalesOperationId?: ModelIDInput | null;
};

export type ModelOperationTypeInput = {
  eq?: OperationType | null;
  ne?: OperationType | null;
};

export type UpdateInventoryOperationInput = {
  id: string;
  operationType?: OperationType | null;
  inventoryID?: string | null;
  inventoryOperationIncomeInventoryId?: string | null;
  inventoryOperationIncomeInventoryRequestId?: string | null;
  inventoryOperationOutcomeInventoryId?: string | null;
  inventoryOperationOutcomeInventoryRequestId?: string | null;
  inventoryOperationSalesOperationId?: string | null;
};

export type DeleteInventoryOperationInput = {
  id: string;
};

export type CreateIncomeInventoryInput = {
  id?: string | null;
  date: string;
  comments?: string | null;
  status?: IOInventoryStatus | null;
  providerID: string;
  productProviderResponsibleID: string;
  userInfoID: string;
  branchOfficeID?: string | null;
  incomeInventoryInventoryOperationIDId?: string | null;
};

export type ModelIncomeInventoryConditionInput = {
  date?: ModelStringInput | null;
  comments?: ModelStringInput | null;
  status?: ModelIOInventoryStatusInput | null;
  providerID?: ModelIDInput | null;
  productProviderResponsibleID?: ModelIDInput | null;
  userInfoID?: ModelIDInput | null;
  branchOfficeID?: ModelIDInput | null;
  and?: Array<ModelIncomeInventoryConditionInput | null> | null;
  or?: Array<ModelIncomeInventoryConditionInput | null> | null;
  not?: ModelIncomeInventoryConditionInput | null;
  incomeInventoryInventoryOperationIDId?: ModelIDInput | null;
};

export type ModelIOInventoryStatusInput = {
  eq?: IOInventoryStatus | null;
  ne?: IOInventoryStatus | null;
};

export type UpdateIncomeInventoryInput = {
  id: string;
  date?: string | null;
  comments?: string | null;
  status?: IOInventoryStatus | null;
  providerID?: string | null;
  productProviderResponsibleID?: string | null;
  userInfoID?: string | null;
  branchOfficeID?: string | null;
  incomeInventoryInventoryOperationIDId?: string | null;
};

export type DeleteIncomeInventoryInput = {
  id: string;
};

export type CreateIncomeInventoryRequestInput = {
  id?: string | null;
  date: string;
  comments?: string | null;
  status: IOInventoryStatus;
  providerID: string;
  productProviderResponsibleID: string;
  branchOfficeID: string;
  userInfoID: string;
  createdAt?: string | null;
  updatedAt?: string | null;
  incomeInventoryRequestInventoryOperationIDId?: string | null;
};

export type ModelIncomeInventoryRequestConditionInput = {
  date?: ModelStringInput | null;
  comments?: ModelStringInput | null;
  status?: ModelIOInventoryStatusInput | null;
  providerID?: ModelIDInput | null;
  productProviderResponsibleID?: ModelIDInput | null;
  branchOfficeID?: ModelIDInput | null;
  userInfoID?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelIncomeInventoryRequestConditionInput | null> | null;
  or?: Array<ModelIncomeInventoryRequestConditionInput | null> | null;
  not?: ModelIncomeInventoryRequestConditionInput | null;
  incomeInventoryRequestInventoryOperationIDId?: ModelIDInput | null;
};

export type UpdateIncomeInventoryRequestInput = {
  id: string;
  date?: string | null;
  comments?: string | null;
  rejectedReason?: string | null;
  status?: IOInventoryStatus | null;
  providerID?: string | null;
  productProviderResponsibleID?: string | null;
  branchOfficeID?: string | null;
  userInfoID?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  incomeInventoryRequestInventoryOperationIDId?: string | null;
};

export type DeleteIncomeInventoryRequestInput = {
  id: string;
};

export type CreateIncomeInventoryProductQuantityInput = {
  id?: string | null;
  incomeQuantity: number;
  incomeInventoryID: string;
};

export type ModelIncomeInventoryProductQuantityConditionInput = {
  incomeQuantity?: ModelIntInput | null;
  incomeInventoryID?: ModelIDInput | null;
  and?: Array<ModelIncomeInventoryProductQuantityConditionInput | null> | null;
  or?: Array<ModelIncomeInventoryProductQuantityConditionInput | null> | null;
  not?: ModelIncomeInventoryProductQuantityConditionInput | null;
};

export type UpdateIncomeInventoryProductQuantityInput = {
  id: string;
  incomeQuantity?: number | null;
  incomeInventoryID?: string | null;
};

export type DeleteIncomeInventoryProductQuantityInput = {
  id: string;
};

export type CreateIncomeInventoryProductQuantityRequestInput = {
  id?: string | null;
  incomeQuantity: number;
  incomeInventoryRequestID: string;
};

export type ModelIncomeInventoryProductQuantityRequestConditionInput = {
  incomeQuantity?: ModelIntInput | null;
  incomeInventoryRequestID?: ModelIDInput | null;
  and?: Array<ModelIncomeInventoryProductQuantityRequestConditionInput | null> | null;
  or?: Array<ModelIncomeInventoryProductQuantityRequestConditionInput | null> | null;
  not?: ModelIncomeInventoryProductQuantityRequestConditionInput | null;
};

export type UpdateIncomeInventoryProductQuantityRequestInput = {
  id: string;
  incomeQuantity?: number | null;
  incomeInventoryRequestID?: string | null;
};

export type DeleteIncomeInventoryProductQuantityRequestInput = {
  id: string;
};

export type CreateOutcomeInventoryInput = {
  id?: string | null;
  date: string;
  comments?: string | null;
  status?: IOInventoryStatus | null;
  userInfoID: string;
  branchOfficeID?: string | null;
  outcomeInventoryInventoryOperationIDId?: string | null;
};

export type ModelOutcomeInventoryConditionInput = {
  date?: ModelStringInput | null;
  comments?: ModelStringInput | null;
  status?: ModelIOInventoryStatusInput | null;
  userInfoID?: ModelIDInput | null;
  branchOfficeID?: ModelIDInput | null;
  and?: Array<ModelOutcomeInventoryConditionInput | null> | null;
  or?: Array<ModelOutcomeInventoryConditionInput | null> | null;
  not?: ModelOutcomeInventoryConditionInput | null;
  outcomeInventoryInventoryOperationIDId?: ModelIDInput | null;
};

export type UpdateOutcomeInventoryInput = {
  id: string;
  date?: string | null;
  comments?: string | null;
  status?: IOInventoryStatus | null;
  userInfoID?: string | null;
  branchOfficeID?: string | null;
  outcomeInventoryInventoryOperationIDId?: string | null;
};

export type DeleteOutcomeInventoryInput = {
  id: string;
};

export type CreateOutcomeInventoryRequestInput = {
  id?: string | null;
  date: string;
  comments?: string | null;
  status?: IOInventoryStatus | null;
  userInfoID: string;
  branchOfficeID?: string | null;
  outcomeInventoryRequestInventoryOperationIDId?: string | null;
};

export type ModelOutcomeInventoryRequestConditionInput = {
  date?: ModelStringInput | null;
  comments?: ModelStringInput | null;
  status?: ModelIOInventoryStatusInput | null;
  userInfoID?: ModelIDInput | null;
  branchOfficeID?: ModelIDInput | null;
  and?: Array<ModelOutcomeInventoryRequestConditionInput | null> | null;
  or?: Array<ModelOutcomeInventoryRequestConditionInput | null> | null;
  not?: ModelOutcomeInventoryRequestConditionInput | null;
  outcomeInventoryRequestInventoryOperationIDId?: ModelIDInput | null;
};

export type UpdateOutcomeInventoryRequestInput = {
  id: string;
  date?: string | null;
  comments?: string | null;
  status?: IOInventoryStatus | null;
  userInfoID?: string | null;
  branchOfficeID?: string | null;
  outcomeInventoryRequestInventoryOperationIDId?: string | null;
};

export type DeleteOutcomeInventoryRequestInput = {
  id: string;
};

export type CreateOutcomeInventoryProductQuantityInput = {
  id?: string | null;
  outcomeQuantity: number;
  outcomeInventoryID: string;
};

export type ModelOutcomeInventoryProductQuantityConditionInput = {
  outcomeQuantity?: ModelIntInput | null;
  outcomeInventoryID?: ModelIDInput | null;
  and?: Array<ModelOutcomeInventoryProductQuantityConditionInput | null> | null;
  or?: Array<ModelOutcomeInventoryProductQuantityConditionInput | null> | null;
  not?: ModelOutcomeInventoryProductQuantityConditionInput | null;
};

export type UpdateOutcomeInventoryProductQuantityInput = {
  id: string;
  outcomeQuantity?: number | null;
  outcomeInventoryID?: string | null;
};

export type DeleteOutcomeInventoryProductQuantityInput = {
  id: string;
};

export type CreateOutcomeInventoryProductQuantityRequestInput = {
  id?: string | null;
  outcomeRequestQuantity: number;
  outcomeInventoryRequestID: string;
};

export type ModelOutcomeInventoryProductQuantityRequestConditionInput = {
  outcomeRequestQuantity?: ModelIntInput | null;
  outcomeInventoryRequestID?: ModelIDInput | null;
  and?: Array<ModelOutcomeInventoryProductQuantityRequestConditionInput | null> | null;
  or?: Array<ModelOutcomeInventoryProductQuantityRequestConditionInput | null> | null;
  not?: ModelOutcomeInventoryProductQuantityRequestConditionInput | null;
};

export type UpdateOutcomeInventoryProductQuantityRequestInput = {
  id: string;
  outcomeRequestQuantity?: number | null;
  outcomeInventoryRequestID?: string | null;
};

export type DeleteOutcomeInventoryProductQuantityRequestInput = {
  id: string;
};

export type CreateReturnsInventoryInput = {
  id?: string | null;
  userInfoID: string;
  clientID: string;
  comments?: string | null;
};

export type ModelReturnsInventoryConditionInput = {
  userInfoID?: ModelIDInput | null;
  clientID?: ModelIDInput | null;
  comments?: ModelStringInput | null;
  and?: Array<ModelReturnsInventoryConditionInput | null> | null;
  or?: Array<ModelReturnsInventoryConditionInput | null> | null;
  not?: ModelReturnsInventoryConditionInput | null;
};

export type UpdateReturnsInventoryInput = {
  id: string;
  userInfoID?: string | null;
  clientID?: string | null;
  comments?: string | null;
};

export type DeleteReturnsInventoryInput = {
  id: string;
};

export type CreateRoleInput = {
  id?: string | null;
  name: RoleType;
  description?: string | null;
};

export type ModelRoleConditionInput = {
  name?: ModelRoleTypeInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelRoleConditionInput | null> | null;
  or?: Array<ModelRoleConditionInput | null> | null;
  not?: ModelRoleConditionInput | null;
};

export type ModelRoleTypeInput = {
  eq?: RoleType | null;
  ne?: RoleType | null;
};

export type UpdateRoleInput = {
  id: string;
  name?: RoleType | null;
  description?: string | null;
};

export type DeleteRoleInput = {
  id: string;
};

export type CreateUserInput = {
  id?: string | null;
  email: string;
  password: string;
  rolID: string;
  hasBranchOffice?: boolean | null;
  userUserInfoId?: string | null;
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null;
  password?: ModelStringInput | null;
  rolID?: ModelIDInput | null;
  hasBranchOffice?: ModelBooleanInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
  userUserInfoId?: ModelIDInput | null;
};

export type UpdateUserInput = {
  id: string;
  email?: string | null;
  password?: string | null;
  rolID?: string | null;
  hasBranchOffice?: boolean | null;
  userUserInfoId?: string | null;
};

export type DeleteUserInput = {
  id: string;
};

export type CreateUserInfoInput = {
  id?: string | null;
  name: string;
  phone?: string | null;
  RFC?: string | null;
  gender?: string | null;
  userInfoUserId?: string | null;
};

export type ModelUserInfoConditionInput = {
  name?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  RFC?: ModelStringInput | null;
  gender?: ModelStringInput | null;
  and?: Array<ModelUserInfoConditionInput | null> | null;
  or?: Array<ModelUserInfoConditionInput | null> | null;
  not?: ModelUserInfoConditionInput | null;
  userInfoUserId?: ModelIDInput | null;
};

export type UpdateUserInfoInput = {
  id: string;
  name?: string | null;
  phone?: string | null;
  RFC?: string | null;
  gender?: string | null;
  userInfoUserId?: string | null;
};

export type DeleteUserInfoInput = {
  id: string;
};

export type CreateInventoryInput = {
  id?: string | null;
  name: string;
  branchOfficeID?: string | null;
  isMain?: boolean | null;
};

export type ModelInventoryConditionInput = {
  name?: ModelStringInput | null;
  branchOfficeID?: ModelIDInput | null;
  isMain?: ModelBooleanInput | null;
  and?: Array<ModelInventoryConditionInput | null> | null;
  or?: Array<ModelInventoryConditionInput | null> | null;
  not?: ModelInventoryConditionInput | null;
};

export type UpdateInventoryInput = {
  id: string;
  name?: string | null;
  branchOfficeID?: string | null;
  isMain?: boolean | null;
};

export type DeleteInventoryInput = {
  id: string;
};

export type CreateInventoryProductInput = {
  id?: string | null;
  inventoryID: string;
  productID: string;
  quantity: number;
  customPrice?: number | null;
  generalPrice?: number | null;
  productProviderID?: string | null;
};

export type ModelInventoryProductConditionInput = {
  inventoryID?: ModelIDInput | null;
  productID?: ModelIDInput | null;
  quantity?: ModelIntInput | null;
  customPrice?: ModelFloatInput | null;
  generalPrice?: ModelFloatInput | null;
  productProviderID?: ModelIDInput | null;
  and?: Array<ModelInventoryProductConditionInput | null> | null;
  or?: Array<ModelInventoryProductConditionInput | null> | null;
  not?: ModelInventoryProductConditionInput | null;
};

export type UpdateInventoryProductInput = {
  id: string;
  inventoryID?: string | null;
  productID?: string | null;
  quantity?: number | null;
  customPrice?: number | null;
  generalPrice?: number | null;
  productProviderID?: string | null;
};

export type DeleteInventoryProductInput = {
  id: string;
};

export type CreateBranchOfficeInput = {
  id?: string | null;
  name: string;
  zipcode?: string | null;
  state?: string | null;
  location: string;
  address?: string | null;
  phone?: string | null;
  branchOffice_commission?: number | null;
  isMain?: boolean | null;
};

export type ModelBranchOfficeConditionInput = {
  name?: ModelStringInput | null;
  zipcode?: ModelStringInput | null;
  state?: ModelStringInput | null;
  location?: ModelStringInput | null;
  address?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  branchOffice_commission?: ModelIntInput | null;
  isMain?: ModelBooleanInput | null;
  and?: Array<ModelBranchOfficeConditionInput | null> | null;
  or?: Array<ModelBranchOfficeConditionInput | null> | null;
  not?: ModelBranchOfficeConditionInput | null;
};

export type UpdateBranchOfficeInput = {
  id: string;
  name?: string | null;
  zipcode?: string | null;
  state?: string | null;
  location?: string | null;
  address?: string | null;
  phone?: string | null;
  branchOffice_commission?: number | null;
  isMain?: boolean | null;
};

export type DeleteBranchOfficeInput = {
  id: string;
};

export type CreateDiscountsInput = {
  id?: string | null;
  discount: number;
};

export type ModelDiscountsConditionInput = {
  discount?: ModelFloatInput | null;
  and?: Array<ModelDiscountsConditionInput | null> | null;
  or?: Array<ModelDiscountsConditionInput | null> | null;
  not?: ModelDiscountsConditionInput | null;
};

export type UpdateDiscountsInput = {
  id: string;
  discount?: number | null;
};

export type DeleteDiscountsInput = {
  id: string;
};

export type CreateSalesOperationInput = {
  id?: string | null;
  date?: string | null;
  total?: number | null;
  totalCash?: number | null;
  totalCommission?: number | null;
  nonRegisteredClientID?: string | null;
  pendingToPay?: number | null;
  amountPaid?: number | null;
  salesOperationType: SalesOperationType;
  status: SalesOperationStatus;
  monthsToPay?: number | null;
  termDaysToPay?: SalesOperationTermDaysToPay | null;
  totalPayments?: number | null;
  currentTotalPayments?: number | null;
  lastPaymentDate?: string | null;
  lastDatePaid?: string | null;
  clientID?: string | null;
  userInfoID?: string | null;
  branchOfficeID: string;
  salesOperationInventoryOperationIDId?: string | null;
};

export type ModelSalesOperationConditionInput = {
  date?: ModelStringInput | null;
  total?: ModelFloatInput | null;
  totalCash?: ModelFloatInput | null;
  totalCommission?: ModelFloatInput | null;
  nonRegisteredClientID?: ModelIDInput | null;
  pendingToPay?: ModelFloatInput | null;
  amountPaid?: ModelFloatInput | null;
  salesOperationType?: ModelSalesOperationTypeInput | null;
  status?: ModelSalesOperationStatusInput | null;
  monthsToPay?: ModelIntInput | null;
  termDaysToPay?: ModelSalesOperationTermDaysToPayInput | null;
  totalPayments?: ModelIntInput | null;
  currentTotalPayments?: ModelIntInput | null;
  lastPaymentDate?: ModelStringInput | null;
  lastDatePaid?: ModelStringInput | null;
  clientID?: ModelIDInput | null;
  userInfoID?: ModelIDInput | null;
  branchOfficeID?: ModelIDInput | null;
  and?: Array<ModelSalesOperationConditionInput | null> | null;
  or?: Array<ModelSalesOperationConditionInput | null> | null;
  not?: ModelSalesOperationConditionInput | null;
  salesOperationInventoryOperationIDId?: ModelIDInput | null;
};

export type ModelSalesOperationTypeInput = {
  eq?: SalesOperationType | null;
  ne?: SalesOperationType | null;
};

export type ModelSalesOperationStatusInput = {
  eq?: SalesOperationStatus | null;
  ne?: SalesOperationStatus | null;
};

export type ModelSalesOperationTermDaysToPayInput = {
  eq?: SalesOperationTermDaysToPay | null;
  ne?: SalesOperationTermDaysToPay | null;
};

export type UpdateSalesOperationInput = {
  id: string;
  date?: string | null;
  total?: number | null;
  totalCash?: number | null;
  totalCommission?: number | null;
  nonRegisteredClientID?: string | null;
  pendingToPay?: number | null;
  amountPaid?: number | null;
  salesOperationType?: SalesOperationType | null;
  status?: SalesOperationStatus | null;
  monthsToPay?: number | null;
  termDaysToPay?: SalesOperationTermDaysToPay | null;
  totalPayments?: number | null;
  currentTotalPayments?: number | null;
  lastPaymentDate?: string | null;
  lastDatePaid?: string | null;
  clientID?: string | null;
  userInfoID?: string | null;
  branchOfficeID?: string | null;
  salesOperationInventoryOperationIDId?: string | null;
};

export type DeleteSalesOperationInput = {
  id: string;
};

export type CreateSalesOperationClientCreditFirstLastPaymentInput = {
  id?: string | null;
  salesOperationID: string;
  startDate?: string | null;
  endDate?: string | null;
  clientID?: string | null;
};

export type ModelSalesOperationClientCreditFirstLastPaymentConditionInput = {
  salesOperationID?: ModelIDInput | null;
  startDate?: ModelStringInput | null;
  endDate?: ModelStringInput | null;
  clientID?: ModelIDInput | null;
  and?: Array<ModelSalesOperationClientCreditFirstLastPaymentConditionInput | null> | null;
  or?: Array<ModelSalesOperationClientCreditFirstLastPaymentConditionInput | null> | null;
  not?: ModelSalesOperationClientCreditFirstLastPaymentConditionInput | null;
};

export type UpdateSalesOperationClientCreditFirstLastPaymentInput = {
  id: string;
  salesOperationID?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  clientID?: string | null;
};

export type DeleteSalesOperationClientCreditFirstLastPaymentInput = {
  id: string;
};

export type CreateSalesOperationClientCreditMovementsInput = {
  id?: string | null;
  salesOperationID: string;
  paymentDate?: string | null;
  datePaid?: string | null;
  amountToPay: number;
  pendingToPay?: number | null;
  amountPaid?: number | null;
  status: SalesOperationClientCreditMovementStatus;
  numberOfPayment?: number | null;
  clientID?: string | null;
};

export type ModelSalesOperationClientCreditMovementsConditionInput = {
  salesOperationID?: ModelIDInput | null;
  paymentDate?: ModelStringInput | null;
  datePaid?: ModelStringInput | null;
  amountToPay?: ModelFloatInput | null;
  pendingToPay?: ModelFloatInput | null;
  amountPaid?: ModelFloatInput | null;
  status?: ModelSalesOperationClientCreditMovementStatusInput | null;
  numberOfPayment?: ModelIntInput | null;
  clientID?: ModelIDInput | null;
  and?: Array<ModelSalesOperationClientCreditMovementsConditionInput | null> | null;
  or?: Array<ModelSalesOperationClientCreditMovementsConditionInput | null> | null;
  not?: ModelSalesOperationClientCreditMovementsConditionInput | null;
};

export type ModelSalesOperationClientCreditMovementStatusInput = {
  eq?: SalesOperationClientCreditMovementStatus | null;
  ne?: SalesOperationClientCreditMovementStatus | null;
};

export type UpdateSalesOperationClientCreditMovementsInput = {
  id: string;
  salesOperationID?: string | null;
  paymentDate?: string | null;
  datePaid?: string | null;
  amountToPay?: number | null;
  pendingToPay?: number | null;
  amountPaid?: number | null;
  status?: SalesOperationClientCreditMovementStatus | null;
  numberOfPayment?: number | null;
  clientID?: string | null;
};

export type DeleteSalesOperationClientCreditMovementsInput = {
  id: string;
};

export type CreateSalesOperationInventoryProductQuantityInput = {
  id?: string | null;
  name?: string | null;
  salesOperationID: string;
  soldProductQuantity: number;
  withDiscount?: boolean | null;
  discountPercentage?: number | null;
  discountPerProduct?: number | null;
  totalDiscounted?: number | null;
  productPriceWithDiscount?: number | null;
  amountToPayWithDiscount?: number | null;
  amountToPay: number;
};

export type ModelSalesOperationInventoryProductQuantityConditionInput = {
  name?: ModelStringInput | null;
  salesOperationID?: ModelIDInput | null;
  soldProductQuantity?: ModelIntInput | null;
  withDiscount?: ModelBooleanInput | null;
  discountPercentage?: ModelIntInput | null;
  discountPerProduct?: ModelFloatInput | null;
  totalDiscounted?: ModelFloatInput | null;
  productPriceWithDiscount?: ModelFloatInput | null;
  amountToPayWithDiscount?: ModelFloatInput | null;
  amountToPay?: ModelFloatInput | null;
  and?: Array<ModelSalesOperationInventoryProductQuantityConditionInput | null> | null;
  or?: Array<ModelSalesOperationInventoryProductQuantityConditionInput | null> | null;
  not?: ModelSalesOperationInventoryProductQuantityConditionInput | null;
};

export type UpdateSalesOperationInventoryProductQuantityInput = {
  id: string;
  name?: string | null;
  salesOperationID?: string | null;
  soldProductQuantity?: number | null;
  withDiscount?: boolean | null;
  discountPercentage?: number | null;
  discountPerProduct?: number | null;
  totalDiscounted?: number | null;
  productPriceWithDiscount?: number | null;
  amountToPayWithDiscount?: number | null;
  amountToPay?: number | null;
};

export type DeleteSalesOperationInventoryProductQuantityInput = {
  id: string;
};

export type CreateCompanyExpensesInput = {
  id?: string | null;
  name: string;
  description?: string | null;
  costType: CostType;
  date?: string | null;
  amount: number;
  userInfoID?: string | null;
  branchOfficeID?: string | null;
};

export type ModelCompanyExpensesConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  costType?: ModelCostTypeInput | null;
  date?: ModelStringInput | null;
  amount?: ModelFloatInput | null;
  userInfoID?: ModelIDInput | null;
  branchOfficeID?: ModelIDInput | null;
  and?: Array<ModelCompanyExpensesConditionInput | null> | null;
  or?: Array<ModelCompanyExpensesConditionInput | null> | null;
  not?: ModelCompanyExpensesConditionInput | null;
};

export type ModelCostTypeInput = {
  eq?: CostType | null;
  ne?: CostType | null;
};

export type UpdateCompanyExpensesInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  costType?: CostType | null;
  date?: string | null;
  amount?: number | null;
  userInfoID?: string | null;
  branchOfficeID?: string | null;
};

export type DeleteCompanyExpensesInput = {
  id: string;
};

export type CreateSalesOperationCustomerSubscriptionInput = {
  id?: string | null;
  salesOperationID: string;
  clientID?: string | null;
  date?: string | null;
  advancePayment?: number | null;
};

export type ModelSalesOperationCustomerSubscriptionConditionInput = {
  salesOperationID?: ModelIDInput | null;
  clientID?: ModelIDInput | null;
  date?: ModelStringInput | null;
  advancePayment?: ModelFloatInput | null;
  and?: Array<ModelSalesOperationCustomerSubscriptionConditionInput | null> | null;
  or?: Array<ModelSalesOperationCustomerSubscriptionConditionInput | null> | null;
  not?: ModelSalesOperationCustomerSubscriptionConditionInput | null;
};

export type UpdateSalesOperationCustomerSubscriptionInput = {
  id: string;
  salesOperationID?: string | null;
  clientID?: string | null;
  date?: string | null;
  advancePayment?: number | null;
};

export type DeleteSalesOperationCustomerSubscriptionInput = {
  id: string;
};

export type CreateProviderInput = {
  id?: string | null;
  enterprise_name: string;
  enterprise_RFC?: string | null;
  phone?: string | null;
  fixed_phone?: string | null;
  type?: string | null;
  providerProductproviderId?: string | null;
  providerServiceproviderId?: string | null;
};

export type ModelProviderConditionInput = {
  enterprise_name?: ModelStringInput | null;
  enterprise_RFC?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  fixed_phone?: ModelStringInput | null;
  type?: ModelStringInput | null;
  and?: Array<ModelProviderConditionInput | null> | null;
  or?: Array<ModelProviderConditionInput | null> | null;
  not?: ModelProviderConditionInput | null;
  providerProductproviderId?: ModelIDInput | null;
  providerServiceproviderId?: ModelIDInput | null;
};

export type UpdateProviderInput = {
  id: string;
  enterprise_name?: string | null;
  enterprise_RFC?: string | null;
  phone?: string | null;
  fixed_phone?: string | null;
  type?: string | null;
  providerProductproviderId?: string | null;
  providerServiceproviderId?: string | null;
};

export type DeleteProviderInput = {
  id: string;
};

export type CreateProductProviderInput = {
  id?: string | null;
  productProviderProviderIDId?: string | null;
};

export type ModelProductProviderConditionInput = {
  and?: Array<ModelProductProviderConditionInput | null> | null;
  or?: Array<ModelProductProviderConditionInput | null> | null;
  not?: ModelProductProviderConditionInput | null;
  productProviderProviderIDId?: ModelIDInput | null;
};

export type UpdateProductProviderInput = {
  id: string;
  productProviderProviderIDId?: string | null;
};

export type DeleteProductProviderInput = {
  id: string;
};

export type CreateProductProviderResponsibleInput = {
  id?: string | null;
  productproviderID: string;
  name: string;
  second_name?: string | null;
  lastname: string;
  second_lastname?: string | null;
  phone: string;
  RFC?: string | null;
};

export type ModelProductProviderResponsibleConditionInput = {
  productproviderID?: ModelIDInput | null;
  name?: ModelStringInput | null;
  second_name?: ModelStringInput | null;
  lastname?: ModelStringInput | null;
  second_lastname?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  RFC?: ModelStringInput | null;
  and?: Array<ModelProductProviderResponsibleConditionInput | null> | null;
  or?: Array<ModelProductProviderResponsibleConditionInput | null> | null;
  not?: ModelProductProviderResponsibleConditionInput | null;
};

export type UpdateProductProviderResponsibleInput = {
  id: string;
  productproviderID?: string | null;
  name?: string | null;
  second_name?: string | null;
  lastname?: string | null;
  second_lastname?: string | null;
  phone?: string | null;
  RFC?: string | null;
};

export type DeleteProductProviderResponsibleInput = {
  id: string;
};

export type CreateServiceProviderInput = {
  id?: string | null;
  service_name?: string | null;
  service_description?: string | null;
  cost_type?: string | null;
  serviceProviderProviderIDId?: string | null;
};

export type ModelServiceProviderConditionInput = {
  service_name?: ModelStringInput | null;
  service_description?: ModelStringInput | null;
  cost_type?: ModelStringInput | null;
  and?: Array<ModelServiceProviderConditionInput | null> | null;
  or?: Array<ModelServiceProviderConditionInput | null> | null;
  not?: ModelServiceProviderConditionInput | null;
  serviceProviderProviderIDId?: ModelIDInput | null;
};

export type UpdateServiceProviderInput = {
  id: string;
  service_name?: string | null;
  service_description?: string | null;
  cost_type?: string | null;
  serviceProviderProviderIDId?: string | null;
};

export type DeleteServiceProviderInput = {
  id: string;
};

export type CreateServiceProviderResponsibleInput = {
  id?: string | null;
  serviceproviderID: string;
  name: string;
  second_name?: string | null;
  lastname: string;
  second_lastname?: string | null;
  phone?: string | null;
  RFC?: string | null;
};

export type ModelServiceProviderResponsibleConditionInput = {
  serviceproviderID?: ModelIDInput | null;
  name?: ModelStringInput | null;
  second_name?: ModelStringInput | null;
  lastname?: ModelStringInput | null;
  second_lastname?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  RFC?: ModelStringInput | null;
  and?: Array<ModelServiceProviderResponsibleConditionInput | null> | null;
  or?: Array<ModelServiceProviderResponsibleConditionInput | null> | null;
  not?: ModelServiceProviderResponsibleConditionInput | null;
};

export type UpdateServiceProviderResponsibleInput = {
  id: string;
  serviceproviderID?: string | null;
  name?: string | null;
  second_name?: string | null;
  lastname?: string | null;
  second_lastname?: string | null;
  phone?: string | null;
  RFC?: string | null;
};

export type DeleteServiceProviderResponsibleInput = {
  id: string;
};

export type CreateInventoryProductIncomeInventoryInput = {
  id?: string | null;
  incomeInventoryProductQuantityId: string;
  inventoryProductId: string;
};

export type ModelInventoryProductIncomeInventoryConditionInput = {
  incomeInventoryProductQuantityId?: ModelIDInput | null;
  inventoryProductId?: ModelIDInput | null;
  and?: Array<ModelInventoryProductIncomeInventoryConditionInput | null> | null;
  or?: Array<ModelInventoryProductIncomeInventoryConditionInput | null> | null;
  not?: ModelInventoryProductIncomeInventoryConditionInput | null;
};

export type UpdateInventoryProductIncomeInventoryInput = {
  id: string;
  incomeInventoryProductQuantityId?: string | null;
  inventoryProductId?: string | null;
};

export type DeleteInventoryProductIncomeInventoryInput = {
  id: string;
};

export type CreateInventoryProductIncomeInventoryRequestInput = {
  id?: string | null;
  incomeInventoryProductQuantityRequestId: string;
  inventoryProductId: string;
};

export type ModelInventoryProductIncomeInventoryRequestConditionInput = {
  incomeInventoryProductQuantityRequestId?: ModelIDInput | null;
  inventoryProductId?: ModelIDInput | null;
  and?: Array<ModelInventoryProductIncomeInventoryRequestConditionInput | null> | null;
  or?: Array<ModelInventoryProductIncomeInventoryRequestConditionInput | null> | null;
  not?: ModelInventoryProductIncomeInventoryRequestConditionInput | null;
};

export type UpdateInventoryProductIncomeInventoryRequestInput = {
  id: string;
  incomeInventoryProductQuantityRequestId?: string | null;
  inventoryProductId?: string | null;
};

export type DeleteInventoryProductIncomeInventoryRequestInput = {
  id: string;
};

export type CreateInventoryProductOutcomeInventoryInput = {
  id?: string | null;
  outcomeInventoryProductQuantityId: string;
  inventoryProductId: string;
};

export type ModelInventoryProductOutcomeInventoryConditionInput = {
  outcomeInventoryProductQuantityId?: ModelIDInput | null;
  inventoryProductId?: ModelIDInput | null;
  and?: Array<ModelInventoryProductOutcomeInventoryConditionInput | null> | null;
  or?: Array<ModelInventoryProductOutcomeInventoryConditionInput | null> | null;
  not?: ModelInventoryProductOutcomeInventoryConditionInput | null;
};

export type UpdateInventoryProductOutcomeInventoryInput = {
  id: string;
  outcomeInventoryProductQuantityId?: string | null;
  inventoryProductId?: string | null;
};

export type DeleteInventoryProductOutcomeInventoryInput = {
  id: string;
};

export type CreateInventoryProductOutcomeInventoryRequestInput = {
  id?: string | null;
  outcomeInventoryProductQuantityRequestId: string;
  inventoryProductId: string;
};

export type ModelInventoryProductOutcomeInventoryRequestConditionInput = {
  outcomeInventoryProductQuantityRequestId?: ModelIDInput | null;
  inventoryProductId?: ModelIDInput | null;
  and?: Array<ModelInventoryProductOutcomeInventoryRequestConditionInput | null> | null;
  or?: Array<ModelInventoryProductOutcomeInventoryRequestConditionInput | null> | null;
  not?: ModelInventoryProductOutcomeInventoryRequestConditionInput | null;
};

export type UpdateInventoryProductOutcomeInventoryRequestInput = {
  id: string;
  outcomeInventoryProductQuantityRequestId?: string | null;
  inventoryProductId?: string | null;
};

export type DeleteInventoryProductOutcomeInventoryRequestInput = {
  id: string;
};

export type CreateInventoryProductReturnsInventoryInput = {
  id?: string | null;
  returnsInventoryId: string;
  inventoryProductId: string;
};

export type ModelInventoryProductReturnsInventoryConditionInput = {
  returnsInventoryId?: ModelIDInput | null;
  inventoryProductId?: ModelIDInput | null;
  and?: Array<ModelInventoryProductReturnsInventoryConditionInput | null> | null;
  or?: Array<ModelInventoryProductReturnsInventoryConditionInput | null> | null;
  not?: ModelInventoryProductReturnsInventoryConditionInput | null;
};

export type UpdateInventoryProductReturnsInventoryInput = {
  id: string;
  returnsInventoryId?: string | null;
  inventoryProductId?: string | null;
};

export type DeleteInventoryProductReturnsInventoryInput = {
  id: string;
};

export type CreateBranchOfficeUserInput = {
  id?: string | null;
  userId: string;
  branchOfficeId: string;
};

export type ModelBranchOfficeUserConditionInput = {
  userId?: ModelIDInput | null;
  branchOfficeId?: ModelIDInput | null;
  and?: Array<ModelBranchOfficeUserConditionInput | null> | null;
  or?: Array<ModelBranchOfficeUserConditionInput | null> | null;
  not?: ModelBranchOfficeUserConditionInput | null;
};

export type UpdateBranchOfficeUserInput = {
  id: string;
  userId?: string | null;
  branchOfficeId?: string | null;
};

export type DeleteBranchOfficeUserInput = {
  id: string;
};

export type CreateDiscountInventoryProductInput = {
  id?: string | null;
  inventoryProductId: string;
  discountsId: string;
};

export type ModelDiscountInventoryProductConditionInput = {
  inventoryProductId?: ModelIDInput | null;
  discountsId?: ModelIDInput | null;
  and?: Array<ModelDiscountInventoryProductConditionInput | null> | null;
  or?: Array<ModelDiscountInventoryProductConditionInput | null> | null;
  not?: ModelDiscountInventoryProductConditionInput | null;
};

export type UpdateDiscountInventoryProductInput = {
  id: string;
  inventoryProductId?: string | null;
  discountsId?: string | null;
};

export type DeleteDiscountInventoryProductInput = {
  id: string;
};

export type CreateInventoryProductSalesOperationInput = {
  id?: string | null;
  inventoryProductId: string;
  salesOperationInventoryProductQuantityId: string;
};

export type ModelInventoryProductSalesOperationConditionInput = {
  inventoryProductId?: ModelIDInput | null;
  salesOperationInventoryProductQuantityId?: ModelIDInput | null;
  and?: Array<ModelInventoryProductSalesOperationConditionInput | null> | null;
  or?: Array<ModelInventoryProductSalesOperationConditionInput | null> | null;
  not?: ModelInventoryProductSalesOperationConditionInput | null;
};

export type UpdateInventoryProductSalesOperationInput = {
  id: string;
  inventoryProductId?: string | null;
  salesOperationInventoryProductQuantityId?: string | null;
};

export type DeleteInventoryProductSalesOperationInput = {
  id: string;
};

export type ModelCategoryFilterInput = {
  id?: ModelIntInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelCategoryFilterInput | null> | null;
  or?: Array<ModelCategoryFilterInput | null> | null;
  not?: ModelCategoryFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection";
  items: Array<Category | null>;
  nextToken?: string | null;
};

export type ModelSubCategoryFilterInput = {
  id?: ModelIntInput | null;
  categoryID?: ModelIntInput | null;
  subcategory_name?: ModelStringInput | null;
  and?: Array<ModelSubCategoryFilterInput | null> | null;
  or?: Array<ModelSubCategoryFilterInput | null> | null;
  not?: ModelSubCategoryFilterInput | null;
};

export type ModelClassFilterInput = {
  id?: ModelIntInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelClassFilterInput | null> | null;
  or?: Array<ModelClassFilterInput | null> | null;
  not?: ModelClassFilterInput | null;
};

export type ModelClassConnection = {
  __typename: "ModelClassConnection";
  items: Array<Class | null>;
  nextToken?: string | null;
};

export type ModelClientFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  second_name?: ModelStringInput | null;
  lastname?: ModelStringInput | null;
  second_lastname?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  fixed_phone?: ModelStringInput | null;
  email?: ModelStringInput | null;
  birthday?: ModelStringInput | null;
  RFC?: ModelStringInput | null;
  address?: ModelStringInput | null;
  settlement?: ModelStringInput | null;
  postal_code?: ModelStringInput | null;
  state?: ModelStringInput | null;
  city?: ModelStringInput | null;
  creditID?: ModelIDInput | null;
  branchOfficeID?: ModelIDInput | null;
  hasCredit?: ModelBooleanInput | null;
  hasCreditRequest?: ModelBooleanInput | null;
  and?: Array<ModelClientFilterInput | null> | null;
  or?: Array<ModelClientFilterInput | null> | null;
  not?: ModelClientFilterInput | null;
};

export type ModelNonRegisteredClientFilterInput = {
  id?: ModelIDInput | null;
  fullName?: ModelStringInput | null;
  and?: Array<ModelNonRegisteredClientFilterInput | null> | null;
  or?: Array<ModelNonRegisteredClientFilterInput | null> | null;
  not?: ModelNonRegisteredClientFilterInput | null;
  nonRegisteredClientSaleOperationId?: ModelIDInput | null;
};

export type ModelNonRegisteredClientConnection = {
  __typename: "ModelNonRegisteredClientConnection";
  items: Array<NonRegisteredClient | null>;
  nextToken?: string | null;
};

export type ModelCreditsFilterInput = {
  id?: ModelIDInput | null;
  totalCredit?: ModelFloatInput | null;
  credit_available?: ModelFloatInput | null;
  outstanding_balance?: ModelFloatInput | null;
  payment_status?: ModelPaymentStatusInput | null;
  last_payment_date?: ModelStringInput | null;
  startDate?: ModelStringInput | null;
  and?: Array<ModelCreditsFilterInput | null> | null;
  or?: Array<ModelCreditsFilterInput | null> | null;
  not?: ModelCreditsFilterInput | null;
  creditsClientId?: ModelIDInput | null;
};

export type ModelCreditsConnection = {
  __typename: "ModelCreditsConnection";
  items: Array<Credits | null>;
  nextToken?: string | null;
};

export type ModelCreditRequestsFilterInput = {
  id?: ModelIDInput | null;
  clientID?: ModelIDInput | null;
  branchOfficeID?: ModelIDInput | null;
  creditRequestAmount?: ModelFloatInput | null;
  creditRequestStatus?: ModelCreditRequestStatusInput | null;
  creditRequestReason?: ModelStringInput | null;
  and?: Array<ModelCreditRequestsFilterInput | null> | null;
  or?: Array<ModelCreditRequestsFilterInput | null> | null;
  not?: ModelCreditRequestsFilterInput | null;
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null;
  class_id?: ModelIntInput | null;
  category_id?: ModelIntInput | null;
  subcategory_id?: ModelIntInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  price?: ModelFloatInput | null;
  commission?: ModelIntInput | null;
  hasCommission?: ModelBooleanInput | null;
  hasDiscount?: ModelBooleanInput | null;
  productProviderID?: ModelIDInput | null;
  and?: Array<ModelProductFilterInput | null> | null;
  or?: Array<ModelProductFilterInput | null> | null;
  not?: ModelProductFilterInput | null;
};

export type ModelInventoryOperationFilterInput = {
  id?: ModelIDInput | null;
  operationType?: ModelOperationTypeInput | null;
  inventoryID?: ModelIDInput | null;
  and?: Array<ModelInventoryOperationFilterInput | null> | null;
  or?: Array<ModelInventoryOperationFilterInput | null> | null;
  not?: ModelInventoryOperationFilterInput | null;
  inventoryOperationIncomeInventoryId?: ModelIDInput | null;
  inventoryOperationIncomeInventoryRequestId?: ModelIDInput | null;
  inventoryOperationOutcomeInventoryId?: ModelIDInput | null;
  inventoryOperationOutcomeInventoryRequestId?: ModelIDInput | null;
  inventoryOperationSalesOperationId?: ModelIDInput | null;
};

export type ModelIncomeInventoryFilterInput = {
  id?: ModelIDInput | null;
  date?: ModelStringInput | null;
  comments?: ModelStringInput | null;
  status?: ModelIOInventoryStatusInput | null;
  providerID?: ModelIDInput | null;
  productProviderResponsibleID?: ModelIDInput | null;
  userInfoID?: ModelIDInput | null;
  branchOfficeID?: ModelIDInput | null;
  and?: Array<ModelIncomeInventoryFilterInput | null> | null;
  or?: Array<ModelIncomeInventoryFilterInput | null> | null;
  not?: ModelIncomeInventoryFilterInput | null;
  incomeInventoryInventoryOperationIDId?: ModelIDInput | null;
};

export type ModelIncomeInventoryRequestFilterInput = {
  id?: ModelIDInput | null;
  date?: ModelStringInput | null;
  comments?: ModelStringInput | null;
  status?: ModelIOInventoryStatusInput | null;
  providerID?: ModelIDInput | null;
  productProviderResponsibleID?: ModelIDInput | null;
  branchOfficeID?: ModelIDInput | null;
  userInfoID?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelIncomeInventoryRequestFilterInput | null> | null;
  or?: Array<ModelIncomeInventoryRequestFilterInput | null> | null;
  not?: ModelIncomeInventoryRequestFilterInput | null;
  incomeInventoryRequestInventoryOperationIDId?: ModelIDInput | null;
};

export type ModelIncomeInventoryProductQuantityFilterInput = {
  id?: ModelIDInput | null;
  incomeQuantity?: ModelIntInput | null;
  incomeInventoryID?: ModelIDInput | null;
  and?: Array<ModelIncomeInventoryProductQuantityFilterInput | null> | null;
  or?: Array<ModelIncomeInventoryProductQuantityFilterInput | null> | null;
  not?: ModelIncomeInventoryProductQuantityFilterInput | null;
};

export type ModelIncomeInventoryProductQuantityRequestFilterInput = {
  id?: ModelIDInput | null;
  incomeQuantity?: ModelIntInput | null;
  incomeInventoryRequestID?: ModelIDInput | null;
  and?: Array<ModelIncomeInventoryProductQuantityRequestFilterInput | null> | null;
  or?: Array<ModelIncomeInventoryProductQuantityRequestFilterInput | null> | null;
  not?: ModelIncomeInventoryProductQuantityRequestFilterInput | null;
};

export type ModelOutcomeInventoryFilterInput = {
  id?: ModelIDInput | null;
  date?: ModelStringInput | null;
  comments?: ModelStringInput | null;
  status?: ModelIOInventoryStatusInput | null;
  userInfoID?: ModelIDInput | null;
  branchOfficeID?: ModelIDInput | null;
  and?: Array<ModelOutcomeInventoryFilterInput | null> | null;
  or?: Array<ModelOutcomeInventoryFilterInput | null> | null;
  not?: ModelOutcomeInventoryFilterInput | null;
  outcomeInventoryInventoryOperationIDId?: ModelIDInput | null;
};

export type ModelOutcomeInventoryRequestFilterInput = {
  id?: ModelIDInput | null;
  date?: ModelStringInput | null;
  comments?: ModelStringInput | null;
  status?: ModelIOInventoryStatusInput | null;
  userInfoID?: ModelIDInput | null;
  branchOfficeID?: ModelIDInput | null;
  and?: Array<ModelOutcomeInventoryRequestFilterInput | null> | null;
  or?: Array<ModelOutcomeInventoryRequestFilterInput | null> | null;
  not?: ModelOutcomeInventoryRequestFilterInput | null;
  outcomeInventoryRequestInventoryOperationIDId?: ModelIDInput | null;
};

export type ModelOutcomeInventoryProductQuantityFilterInput = {
  id?: ModelIDInput | null;
  outcomeQuantity?: ModelIntInput | null;
  outcomeInventoryID?: ModelIDInput | null;
  and?: Array<ModelOutcomeInventoryProductQuantityFilterInput | null> | null;
  or?: Array<ModelOutcomeInventoryProductQuantityFilterInput | null> | null;
  not?: ModelOutcomeInventoryProductQuantityFilterInput | null;
};

export type ModelOutcomeInventoryProductQuantityRequestFilterInput = {
  id?: ModelIDInput | null;
  outcomeRequestQuantity?: ModelIntInput | null;
  outcomeInventoryRequestID?: ModelIDInput | null;
  and?: Array<ModelOutcomeInventoryProductQuantityRequestFilterInput | null> | null;
  or?: Array<ModelOutcomeInventoryProductQuantityRequestFilterInput | null> | null;
  not?: ModelOutcomeInventoryProductQuantityRequestFilterInput | null;
};

export type ModelReturnsInventoryFilterInput = {
  id?: ModelIDInput | null;
  userInfoID?: ModelIDInput | null;
  clientID?: ModelIDInput | null;
  comments?: ModelStringInput | null;
  and?: Array<ModelReturnsInventoryFilterInput | null> | null;
  or?: Array<ModelReturnsInventoryFilterInput | null> | null;
  not?: ModelReturnsInventoryFilterInput | null;
};

export type ModelRoleFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelRoleTypeInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelRoleFilterInput | null> | null;
  or?: Array<ModelRoleFilterInput | null> | null;
  not?: ModelRoleFilterInput | null;
};

export type ModelRoleConnection = {
  __typename: "ModelRoleConnection";
  items: Array<Role | null>;
  nextToken?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  email?: ModelStringInput | null;
  password?: ModelStringInput | null;
  rolID?: ModelIDInput | null;
  hasBranchOffice?: ModelBooleanInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
  userUserInfoId?: ModelIDInput | null;
};

export type ModelUserInfoFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  RFC?: ModelStringInput | null;
  gender?: ModelStringInput | null;
  and?: Array<ModelUserInfoFilterInput | null> | null;
  or?: Array<ModelUserInfoFilterInput | null> | null;
  not?: ModelUserInfoFilterInput | null;
  userInfoUserId?: ModelIDInput | null;
};

export type ModelUserInfoConnection = {
  __typename: "ModelUserInfoConnection";
  items: Array<UserInfo | null>;
  nextToken?: string | null;
};

export type ModelInventoryFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  branchOfficeID?: ModelIDInput | null;
  isMain?: ModelBooleanInput | null;
  and?: Array<ModelInventoryFilterInput | null> | null;
  or?: Array<ModelInventoryFilterInput | null> | null;
  not?: ModelInventoryFilterInput | null;
};

export type ModelInventoryProductFilterInput = {
  id?: ModelIDInput | null;
  inventoryID?: ModelIDInput | null;
  productID?: ModelIDInput | null;
  quantity?: ModelIntInput | null;
  customPrice?: ModelFloatInput | null;
  generalPrice?: ModelFloatInput | null;
  productProviderID?: ModelIDInput | null;
  and?: Array<ModelInventoryProductFilterInput | null> | null;
  or?: Array<ModelInventoryProductFilterInput | null> | null;
  not?: ModelInventoryProductFilterInput | null;
};

export type ModelBranchOfficeFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  zipcode?: ModelStringInput | null;
  state?: ModelStringInput | null;
  location?: ModelStringInput | null;
  address?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  branchOffice_commission?: ModelIntInput | null;
  isMain?: ModelBooleanInput | null;
  and?: Array<ModelBranchOfficeFilterInput | null> | null;
  or?: Array<ModelBranchOfficeFilterInput | null> | null;
  not?: ModelBranchOfficeFilterInput | null;
};

export type ModelBranchOfficeConnection = {
  __typename: "ModelBranchOfficeConnection";
  items: Array<BranchOffice | null>;
  nextToken?: string | null;
};

export type ModelDiscountsFilterInput = {
  id?: ModelIDInput | null;
  discount?: ModelFloatInput | null;
  and?: Array<ModelDiscountsFilterInput | null> | null;
  or?: Array<ModelDiscountsFilterInput | null> | null;
  not?: ModelDiscountsFilterInput | null;
};

export type ModelDiscountsConnection = {
  __typename: "ModelDiscountsConnection";
  items: Array<Discounts | null>;
  nextToken?: string | null;
};

export type ModelSalesOperationFilterInput = {
  id?: ModelIDInput | null;
  date?: ModelStringInput | null;
  total?: ModelFloatInput | null;
  totalCash?: ModelFloatInput | null;
  totalCommission?: ModelFloatInput | null;
  nonRegisteredClientID?: ModelIDInput | null;
  pendingToPay?: ModelFloatInput | null;
  amountPaid?: ModelFloatInput | null;
  salesOperationType?: ModelSalesOperationTypeInput | null;
  status?: ModelSalesOperationStatusInput | null;
  monthsToPay?: ModelIntInput | null;
  termDaysToPay?: ModelSalesOperationTermDaysToPayInput | null;
  totalPayments?: ModelIntInput | null;
  currentTotalPayments?: ModelIntInput | null;
  lastPaymentDate?: ModelStringInput | null;
  lastDatePaid?: ModelStringInput | null;
  clientID?: ModelIDInput | null;
  userInfoID?: ModelIDInput | null;
  branchOfficeID?: ModelIDInput | null;
  and?: Array<ModelSalesOperationFilterInput | null> | null;
  or?: Array<ModelSalesOperationFilterInput | null> | null;
  not?: ModelSalesOperationFilterInput | null;
  salesOperationInventoryOperationIDId?: ModelIDInput | null;
};

export type ModelSalesOperationClientCreditFirstLastPaymentFilterInput = {
  id?: ModelIDInput | null;
  salesOperationID?: ModelIDInput | null;
  startDate?: ModelStringInput | null;
  endDate?: ModelStringInput | null;
  clientID?: ModelIDInput | null;
  and?: Array<ModelSalesOperationClientCreditFirstLastPaymentFilterInput | null> | null;
  or?: Array<ModelSalesOperationClientCreditFirstLastPaymentFilterInput | null> | null;
  not?: ModelSalesOperationClientCreditFirstLastPaymentFilterInput | null;
};

export type ModelSalesOperationClientCreditMovementsFilterInput = {
  id?: ModelIDInput | null;
  salesOperationID?: ModelIDInput | null;
  paymentDate?: ModelStringInput | null;
  datePaid?: ModelStringInput | null;
  amountToPay?: ModelFloatInput | null;
  pendingToPay?: ModelFloatInput | null;
  amountPaid?: ModelFloatInput | null;
  status?: ModelSalesOperationClientCreditMovementStatusInput | null;
  numberOfPayment?: ModelIntInput | null;
  clientID?: ModelIDInput | null;
  and?: Array<ModelSalesOperationClientCreditMovementsFilterInput | null> | null;
  or?: Array<ModelSalesOperationClientCreditMovementsFilterInput | null> | null;
  not?: ModelSalesOperationClientCreditMovementsFilterInput | null;
};

export type ModelSalesOperationInventoryProductQuantityFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  salesOperationID?: ModelIDInput | null;
  soldProductQuantity?: ModelIntInput | null;
  withDiscount?: ModelBooleanInput | null;
  discountPercentage?: ModelIntInput | null;
  discountPerProduct?: ModelFloatInput | null;
  totalDiscounted?: ModelFloatInput | null;
  productPriceWithDiscount?: ModelFloatInput | null;
  amountToPayWithDiscount?: ModelFloatInput | null;
  amountToPay?: ModelFloatInput | null;
  and?: Array<ModelSalesOperationInventoryProductQuantityFilterInput | null> | null;
  or?: Array<ModelSalesOperationInventoryProductQuantityFilterInput | null> | null;
  not?: ModelSalesOperationInventoryProductQuantityFilterInput | null;
};

export type ModelCompanyExpensesFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  costType?: ModelCostTypeInput | null;
  date?: ModelStringInput | null;
  amount?: ModelFloatInput | null;
  userInfoID?: ModelIDInput | null;
  branchOfficeID?: ModelIDInput | null;
  and?: Array<ModelCompanyExpensesFilterInput | null> | null;
  or?: Array<ModelCompanyExpensesFilterInput | null> | null;
  not?: ModelCompanyExpensesFilterInput | null;
};

export type ModelSalesOperationCustomerSubscriptionFilterInput = {
  id?: ModelIDInput | null;
  salesOperationID?: ModelIDInput | null;
  clientID?: ModelIDInput | null;
  date?: ModelStringInput | null;
  advancePayment?: ModelFloatInput | null;
  and?: Array<ModelSalesOperationCustomerSubscriptionFilterInput | null> | null;
  or?: Array<ModelSalesOperationCustomerSubscriptionFilterInput | null> | null;
  not?: ModelSalesOperationCustomerSubscriptionFilterInput | null;
};

export type ModelProviderFilterInput = {
  id?: ModelIDInput | null;
  enterprise_name?: ModelStringInput | null;
  enterprise_RFC?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  fixed_phone?: ModelStringInput | null;
  type?: ModelStringInput | null;
  and?: Array<ModelProviderFilterInput | null> | null;
  or?: Array<ModelProviderFilterInput | null> | null;
  not?: ModelProviderFilterInput | null;
  providerProductproviderId?: ModelIDInput | null;
  providerServiceproviderId?: ModelIDInput | null;
};

export type ModelProviderConnection = {
  __typename: "ModelProviderConnection";
  items: Array<Provider | null>;
  nextToken?: string | null;
};

export type ModelProductProviderFilterInput = {
  id?: ModelIDInput | null;
  and?: Array<ModelProductProviderFilterInput | null> | null;
  or?: Array<ModelProductProviderFilterInput | null> | null;
  not?: ModelProductProviderFilterInput | null;
  productProviderProviderIDId?: ModelIDInput | null;
};

export type ModelProductProviderConnection = {
  __typename: "ModelProductProviderConnection";
  items: Array<ProductProvider | null>;
  nextToken?: string | null;
};

export type ModelProductProviderResponsibleFilterInput = {
  id?: ModelIDInput | null;
  productproviderID?: ModelIDInput | null;
  name?: ModelStringInput | null;
  second_name?: ModelStringInput | null;
  lastname?: ModelStringInput | null;
  second_lastname?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  RFC?: ModelStringInput | null;
  and?: Array<ModelProductProviderResponsibleFilterInput | null> | null;
  or?: Array<ModelProductProviderResponsibleFilterInput | null> | null;
  not?: ModelProductProviderResponsibleFilterInput | null;
};

export type ModelServiceProviderFilterInput = {
  id?: ModelIDInput | null;
  service_name?: ModelStringInput | null;
  service_description?: ModelStringInput | null;
  cost_type?: ModelStringInput | null;
  and?: Array<ModelServiceProviderFilterInput | null> | null;
  or?: Array<ModelServiceProviderFilterInput | null> | null;
  not?: ModelServiceProviderFilterInput | null;
  serviceProviderProviderIDId?: ModelIDInput | null;
};

export type ModelServiceProviderConnection = {
  __typename: "ModelServiceProviderConnection";
  items: Array<ServiceProvider | null>;
  nextToken?: string | null;
};

export type ModelServiceProviderResponsibleFilterInput = {
  id?: ModelIDInput | null;
  serviceproviderID?: ModelIDInput | null;
  name?: ModelStringInput | null;
  second_name?: ModelStringInput | null;
  lastname?: ModelStringInput | null;
  second_lastname?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  RFC?: ModelStringInput | null;
  and?: Array<ModelServiceProviderResponsibleFilterInput | null> | null;
  or?: Array<ModelServiceProviderResponsibleFilterInput | null> | null;
  not?: ModelServiceProviderResponsibleFilterInput | null;
};

export type ModelInventoryProductIncomeInventoryFilterInput = {
  id?: ModelIDInput | null;
  incomeInventoryProductQuantityId?: ModelIDInput | null;
  inventoryProductId?: ModelIDInput | null;
  and?: Array<ModelInventoryProductIncomeInventoryFilterInput | null> | null;
  or?: Array<ModelInventoryProductIncomeInventoryFilterInput | null> | null;
  not?: ModelInventoryProductIncomeInventoryFilterInput | null;
};

export type ModelInventoryProductIncomeInventoryRequestFilterInput = {
  id?: ModelIDInput | null;
  incomeInventoryProductQuantityRequestId?: ModelIDInput | null;
  inventoryProductId?: ModelIDInput | null;
  and?: Array<ModelInventoryProductIncomeInventoryRequestFilterInput | null> | null;
  or?: Array<ModelInventoryProductIncomeInventoryRequestFilterInput | null> | null;
  not?: ModelInventoryProductIncomeInventoryRequestFilterInput | null;
};

export type ModelInventoryProductOutcomeInventoryFilterInput = {
  id?: ModelIDInput | null;
  outcomeInventoryProductQuantityId?: ModelIDInput | null;
  inventoryProductId?: ModelIDInput | null;
  and?: Array<ModelInventoryProductOutcomeInventoryFilterInput | null> | null;
  or?: Array<ModelInventoryProductOutcomeInventoryFilterInput | null> | null;
  not?: ModelInventoryProductOutcomeInventoryFilterInput | null;
};

export type ModelInventoryProductOutcomeInventoryRequestFilterInput = {
  id?: ModelIDInput | null;
  outcomeInventoryProductQuantityRequestId?: ModelIDInput | null;
  inventoryProductId?: ModelIDInput | null;
  and?: Array<ModelInventoryProductOutcomeInventoryRequestFilterInput | null> | null;
  or?: Array<ModelInventoryProductOutcomeInventoryRequestFilterInput | null> | null;
  not?: ModelInventoryProductOutcomeInventoryRequestFilterInput | null;
};

export type ModelInventoryProductReturnsInventoryFilterInput = {
  id?: ModelIDInput | null;
  returnsInventoryId?: ModelIDInput | null;
  inventoryProductId?: ModelIDInput | null;
  and?: Array<ModelInventoryProductReturnsInventoryFilterInput | null> | null;
  or?: Array<ModelInventoryProductReturnsInventoryFilterInput | null> | null;
  not?: ModelInventoryProductReturnsInventoryFilterInput | null;
};

export type ModelBranchOfficeUserFilterInput = {
  id?: ModelIDInput | null;
  userId?: ModelIDInput | null;
  branchOfficeId?: ModelIDInput | null;
  and?: Array<ModelBranchOfficeUserFilterInput | null> | null;
  or?: Array<ModelBranchOfficeUserFilterInput | null> | null;
  not?: ModelBranchOfficeUserFilterInput | null;
};

export type ModelDiscountInventoryProductFilterInput = {
  id?: ModelIDInput | null;
  inventoryProductId?: ModelIDInput | null;
  discountsId?: ModelIDInput | null;
  and?: Array<ModelDiscountInventoryProductFilterInput | null> | null;
  or?: Array<ModelDiscountInventoryProductFilterInput | null> | null;
  not?: ModelDiscountInventoryProductFilterInput | null;
};

export type ModelInventoryProductSalesOperationFilterInput = {
  id?: ModelIDInput | null;
  inventoryProductId?: ModelIDInput | null;
  salesOperationInventoryProductQuantityId?: ModelIDInput | null;
  and?: Array<ModelInventoryProductSalesOperationFilterInput | null> | null;
  or?: Array<ModelInventoryProductSalesOperationFilterInput | null> | null;
  not?: ModelInventoryProductSalesOperationFilterInput | null;
};

export type ModelIntKeyConditionInput = {
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIDKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelSubscriptionCategoryFilterInput = {
  id?: ModelSubscriptionIntInput | null;
  name?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCategoryFilterInput | null> | null;
  or?: Array<ModelSubscriptionCategoryFilterInput | null> | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionSubCategoryFilterInput = {
  id?: ModelSubscriptionIntInput | null;
  categoryID?: ModelSubscriptionIntInput | null;
  subcategory_name?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionSubCategoryFilterInput | null> | null;
  or?: Array<ModelSubscriptionSubCategoryFilterInput | null> | null;
};

export type ModelSubscriptionClassFilterInput = {
  id?: ModelSubscriptionIntInput | null;
  name?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionClassFilterInput | null> | null;
  or?: Array<ModelSubscriptionClassFilterInput | null> | null;
};

export type ModelSubscriptionClientFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  second_name?: ModelSubscriptionStringInput | null;
  lastname?: ModelSubscriptionStringInput | null;
  second_lastname?: ModelSubscriptionStringInput | null;
  phone?: ModelSubscriptionStringInput | null;
  fixed_phone?: ModelSubscriptionStringInput | null;
  email?: ModelSubscriptionStringInput | null;
  birthday?: ModelSubscriptionStringInput | null;
  RFC?: ModelSubscriptionStringInput | null;
  address?: ModelSubscriptionStringInput | null;
  settlement?: ModelSubscriptionStringInput | null;
  postal_code?: ModelSubscriptionStringInput | null;
  state?: ModelSubscriptionStringInput | null;
  city?: ModelSubscriptionStringInput | null;
  creditID?: ModelSubscriptionIDInput | null;
  branchOfficeID?: ModelSubscriptionIDInput | null;
  hasCredit?: ModelSubscriptionBooleanInput | null;
  hasCreditRequest?: ModelSubscriptionBooleanInput | null;
  and?: Array<ModelSubscriptionClientFilterInput | null> | null;
  or?: Array<ModelSubscriptionClientFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type ModelSubscriptionNonRegisteredClientFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  fullName?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionNonRegisteredClientFilterInput | null> | null;
  or?: Array<ModelSubscriptionNonRegisteredClientFilterInput | null> | null;
};

export type ModelSubscriptionCreditsFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  totalCredit?: ModelSubscriptionFloatInput | null;
  credit_available?: ModelSubscriptionFloatInput | null;
  outstanding_balance?: ModelSubscriptionFloatInput | null;
  payment_status?: ModelSubscriptionStringInput | null;
  last_payment_date?: ModelSubscriptionStringInput | null;
  startDate?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCreditsFilterInput | null> | null;
  or?: Array<ModelSubscriptionCreditsFilterInput | null> | null;
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionCreditRequestsFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  clientID?: ModelSubscriptionIDInput | null;
  branchOfficeID?: ModelSubscriptionIDInput | null;
  creditRequestAmount?: ModelSubscriptionFloatInput | null;
  creditRequestStatus?: ModelSubscriptionStringInput | null;
  creditRequestReason?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCreditRequestsFilterInput | null> | null;
  or?: Array<ModelSubscriptionCreditRequestsFilterInput | null> | null;
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  class_id?: ModelSubscriptionIntInput | null;
  category_id?: ModelSubscriptionIntInput | null;
  subcategory_id?: ModelSubscriptionIntInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  price?: ModelSubscriptionFloatInput | null;
  commission?: ModelSubscriptionIntInput | null;
  hasCommission?: ModelSubscriptionBooleanInput | null;
  hasDiscount?: ModelSubscriptionBooleanInput | null;
  productProviderID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionProductFilterInput | null> | null;
  or?: Array<ModelSubscriptionProductFilterInput | null> | null;
};

export type ModelSubscriptionInventoryOperationFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  operationType?: ModelSubscriptionStringInput | null;
  inventoryID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionInventoryOperationFilterInput | null> | null;
  or?: Array<ModelSubscriptionInventoryOperationFilterInput | null> | null;
};

export type ModelSubscriptionIncomeInventoryFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  date?: ModelSubscriptionStringInput | null;
  comments?: ModelSubscriptionStringInput | null;
  status?: ModelSubscriptionStringInput | null;
  providerID?: ModelSubscriptionIDInput | null;
  productProviderResponsibleID?: ModelSubscriptionIDInput | null;
  userInfoID?: ModelSubscriptionIDInput | null;
  branchOfficeID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionIncomeInventoryFilterInput | null> | null;
  or?: Array<ModelSubscriptionIncomeInventoryFilterInput | null> | null;
};

export type ModelSubscriptionIncomeInventoryRequestFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  date?: ModelSubscriptionStringInput | null;
  comments?: ModelSubscriptionStringInput | null;
  status?: ModelSubscriptionStringInput | null;
  providerID?: ModelSubscriptionIDInput | null;
  productProviderResponsibleID?: ModelSubscriptionIDInput | null;
  branchOfficeID?: ModelSubscriptionIDInput | null;
  userInfoID?: ModelSubscriptionIDInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionIncomeInventoryRequestFilterInput | null> | null;
  or?: Array<ModelSubscriptionIncomeInventoryRequestFilterInput | null> | null;
};

export type ModelSubscriptionIncomeInventoryProductQuantityFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  incomeQuantity?: ModelSubscriptionIntInput | null;
  incomeInventoryID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionIncomeInventoryProductQuantityFilterInput | null> | null;
  or?: Array<ModelSubscriptionIncomeInventoryProductQuantityFilterInput | null> | null;
};

export type ModelSubscriptionIncomeInventoryProductQuantityRequestFilterInput =
  {
    id?: ModelSubscriptionIDInput | null;
    incomeQuantity?: ModelSubscriptionIntInput | null;
    incomeInventoryRequestID?: ModelSubscriptionIDInput | null;
    and?: Array<ModelSubscriptionIncomeInventoryProductQuantityRequestFilterInput | null> | null;
    or?: Array<ModelSubscriptionIncomeInventoryProductQuantityRequestFilterInput | null> | null;
  };

export type ModelSubscriptionOutcomeInventoryFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  date?: ModelSubscriptionStringInput | null;
  comments?: ModelSubscriptionStringInput | null;
  status?: ModelSubscriptionStringInput | null;
  userInfoID?: ModelSubscriptionIDInput | null;
  branchOfficeID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionOutcomeInventoryFilterInput | null> | null;
  or?: Array<ModelSubscriptionOutcomeInventoryFilterInput | null> | null;
};

export type ModelSubscriptionOutcomeInventoryRequestFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  date?: ModelSubscriptionStringInput | null;
  comments?: ModelSubscriptionStringInput | null;
  status?: ModelSubscriptionStringInput | null;
  userInfoID?: ModelSubscriptionIDInput | null;
  branchOfficeID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionOutcomeInventoryRequestFilterInput | null> | null;
  or?: Array<ModelSubscriptionOutcomeInventoryRequestFilterInput | null> | null;
};

export type ModelSubscriptionOutcomeInventoryProductQuantityFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  outcomeQuantity?: ModelSubscriptionIntInput | null;
  outcomeInventoryID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionOutcomeInventoryProductQuantityFilterInput | null> | null;
  or?: Array<ModelSubscriptionOutcomeInventoryProductQuantityFilterInput | null> | null;
};

export type ModelSubscriptionOutcomeInventoryProductQuantityRequestFilterInput =
  {
    id?: ModelSubscriptionIDInput | null;
    outcomeRequestQuantity?: ModelSubscriptionIntInput | null;
    outcomeInventoryRequestID?: ModelSubscriptionIDInput | null;
    and?: Array<ModelSubscriptionOutcomeInventoryProductQuantityRequestFilterInput | null> | null;
    or?: Array<ModelSubscriptionOutcomeInventoryProductQuantityRequestFilterInput | null> | null;
  };

export type ModelSubscriptionReturnsInventoryFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  userInfoID?: ModelSubscriptionIDInput | null;
  clientID?: ModelSubscriptionIDInput | null;
  comments?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionReturnsInventoryFilterInput | null> | null;
  or?: Array<ModelSubscriptionReturnsInventoryFilterInput | null> | null;
};

export type ModelSubscriptionRoleFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionRoleFilterInput | null> | null;
  or?: Array<ModelSubscriptionRoleFilterInput | null> | null;
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  email?: ModelSubscriptionStringInput | null;
  password?: ModelSubscriptionStringInput | null;
  rolID?: ModelSubscriptionIDInput | null;
  hasBranchOffice?: ModelSubscriptionBooleanInput | null;
  and?: Array<ModelSubscriptionUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserFilterInput | null> | null;
};

export type ModelSubscriptionUserInfoFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  phone?: ModelSubscriptionStringInput | null;
  RFC?: ModelSubscriptionStringInput | null;
  gender?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionUserInfoFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserInfoFilterInput | null> | null;
};

export type ModelSubscriptionInventoryFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  branchOfficeID?: ModelSubscriptionIDInput | null;
  isMain?: ModelSubscriptionBooleanInput | null;
  and?: Array<ModelSubscriptionInventoryFilterInput | null> | null;
  or?: Array<ModelSubscriptionInventoryFilterInput | null> | null;
};

export type ModelSubscriptionInventoryProductFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  inventoryID?: ModelSubscriptionIDInput | null;
  productID?: ModelSubscriptionIDInput | null;
  quantity?: ModelSubscriptionIntInput | null;
  customPrice?: ModelSubscriptionFloatInput | null;
  generalPrice?: ModelSubscriptionFloatInput | null;
  productProviderID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionInventoryProductFilterInput | null> | null;
  or?: Array<ModelSubscriptionInventoryProductFilterInput | null> | null;
};

export type ModelSubscriptionBranchOfficeFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  zipcode?: ModelSubscriptionStringInput | null;
  state?: ModelSubscriptionStringInput | null;
  location?: ModelSubscriptionStringInput | null;
  address?: ModelSubscriptionStringInput | null;
  phone?: ModelSubscriptionStringInput | null;
  branchOffice_commission?: ModelSubscriptionIntInput | null;
  isMain?: ModelSubscriptionBooleanInput | null;
  and?: Array<ModelSubscriptionBranchOfficeFilterInput | null> | null;
  or?: Array<ModelSubscriptionBranchOfficeFilterInput | null> | null;
};

export type ModelSubscriptionDiscountsFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  discount?: ModelSubscriptionFloatInput | null;
  and?: Array<ModelSubscriptionDiscountsFilterInput | null> | null;
  or?: Array<ModelSubscriptionDiscountsFilterInput | null> | null;
};

export type ModelSubscriptionSalesOperationFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  date?: ModelSubscriptionStringInput | null;
  total?: ModelSubscriptionFloatInput | null;
  totalCash?: ModelSubscriptionFloatInput | null;
  totalCommission?: ModelSubscriptionFloatInput | null;
  nonRegisteredClientID?: ModelSubscriptionIDInput | null;
  pendingToPay?: ModelSubscriptionFloatInput | null;
  amountPaid?: ModelSubscriptionFloatInput | null;
  salesOperationType?: ModelSubscriptionStringInput | null;
  status?: ModelSubscriptionStringInput | null;
  monthsToPay?: ModelSubscriptionIntInput | null;
  termDaysToPay?: ModelSubscriptionStringInput | null;
  totalPayments?: ModelSubscriptionIntInput | null;
  currentTotalPayments?: ModelSubscriptionIntInput | null;
  lastPaymentDate?: ModelSubscriptionStringInput | null;
  lastDatePaid?: ModelSubscriptionStringInput | null;
  clientID?: ModelSubscriptionIDInput | null;
  userInfoID?: ModelSubscriptionIDInput | null;
  branchOfficeID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionSalesOperationFilterInput | null> | null;
  or?: Array<ModelSubscriptionSalesOperationFilterInput | null> | null;
};

export type ModelSubscriptionSalesOperationClientCreditFirstLastPaymentFilterInput =
  {
    id?: ModelSubscriptionIDInput | null;
    salesOperationID?: ModelSubscriptionIDInput | null;
    startDate?: ModelSubscriptionStringInput | null;
    endDate?: ModelSubscriptionStringInput | null;
    clientID?: ModelSubscriptionIDInput | null;
    and?: Array<ModelSubscriptionSalesOperationClientCreditFirstLastPaymentFilterInput | null> | null;
    or?: Array<ModelSubscriptionSalesOperationClientCreditFirstLastPaymentFilterInput | null> | null;
  };

export type ModelSubscriptionSalesOperationClientCreditMovementsFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  salesOperationID?: ModelSubscriptionIDInput | null;
  paymentDate?: ModelSubscriptionStringInput | null;
  datePaid?: ModelSubscriptionStringInput | null;
  amountToPay?: ModelSubscriptionFloatInput | null;
  pendingToPay?: ModelSubscriptionFloatInput | null;
  amountPaid?: ModelSubscriptionFloatInput | null;
  status?: ModelSubscriptionStringInput | null;
  numberOfPayment?: ModelSubscriptionIntInput | null;
  clientID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionSalesOperationClientCreditMovementsFilterInput | null> | null;
  or?: Array<ModelSubscriptionSalesOperationClientCreditMovementsFilterInput | null> | null;
};

export type ModelSubscriptionSalesOperationInventoryProductQuantityFilterInput =
  {
    id?: ModelSubscriptionIDInput | null;
    name?: ModelSubscriptionStringInput | null;
    salesOperationID?: ModelSubscriptionIDInput | null;
    soldProductQuantity?: ModelSubscriptionIntInput | null;
    withDiscount?: ModelSubscriptionBooleanInput | null;
    discountPercentage?: ModelSubscriptionIntInput | null;
    discountPerProduct?: ModelSubscriptionFloatInput | null;
    totalDiscounted?: ModelSubscriptionFloatInput | null;
    productPriceWithDiscount?: ModelSubscriptionFloatInput | null;
    amountToPayWithDiscount?: ModelSubscriptionFloatInput | null;
    amountToPay?: ModelSubscriptionFloatInput | null;
    and?: Array<ModelSubscriptionSalesOperationInventoryProductQuantityFilterInput | null> | null;
    or?: Array<ModelSubscriptionSalesOperationInventoryProductQuantityFilterInput | null> | null;
  };

export type ModelSubscriptionCompanyExpensesFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  costType?: ModelSubscriptionStringInput | null;
  date?: ModelSubscriptionStringInput | null;
  amount?: ModelSubscriptionFloatInput | null;
  userInfoID?: ModelSubscriptionIDInput | null;
  branchOfficeID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionCompanyExpensesFilterInput | null> | null;
  or?: Array<ModelSubscriptionCompanyExpensesFilterInput | null> | null;
};

export type ModelSubscriptionSalesOperationCustomerSubscriptionFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  salesOperationID?: ModelSubscriptionIDInput | null;
  clientID?: ModelSubscriptionIDInput | null;
  date?: ModelSubscriptionStringInput | null;
  advancePayment?: ModelSubscriptionFloatInput | null;
  and?: Array<ModelSubscriptionSalesOperationCustomerSubscriptionFilterInput | null> | null;
  or?: Array<ModelSubscriptionSalesOperationCustomerSubscriptionFilterInput | null> | null;
};

export type ModelSubscriptionProviderFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  enterprise_name?: ModelSubscriptionStringInput | null;
  enterprise_RFC?: ModelSubscriptionStringInput | null;
  phone?: ModelSubscriptionStringInput | null;
  fixed_phone?: ModelSubscriptionStringInput | null;
  type?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionProviderFilterInput | null> | null;
  or?: Array<ModelSubscriptionProviderFilterInput | null> | null;
};

export type ModelSubscriptionProductProviderFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionProductProviderFilterInput | null> | null;
  or?: Array<ModelSubscriptionProductProviderFilterInput | null> | null;
};

export type ModelSubscriptionProductProviderResponsibleFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  productproviderID?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  second_name?: ModelSubscriptionStringInput | null;
  lastname?: ModelSubscriptionStringInput | null;
  second_lastname?: ModelSubscriptionStringInput | null;
  phone?: ModelSubscriptionStringInput | null;
  RFC?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionProductProviderResponsibleFilterInput | null> | null;
  or?: Array<ModelSubscriptionProductProviderResponsibleFilterInput | null> | null;
};

export type ModelSubscriptionServiceProviderFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  service_name?: ModelSubscriptionStringInput | null;
  service_description?: ModelSubscriptionStringInput | null;
  cost_type?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionServiceProviderFilterInput | null> | null;
  or?: Array<ModelSubscriptionServiceProviderFilterInput | null> | null;
};

export type ModelSubscriptionServiceProviderResponsibleFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  serviceproviderID?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  second_name?: ModelSubscriptionStringInput | null;
  lastname?: ModelSubscriptionStringInput | null;
  second_lastname?: ModelSubscriptionStringInput | null;
  phone?: ModelSubscriptionStringInput | null;
  RFC?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionServiceProviderResponsibleFilterInput | null> | null;
  or?: Array<ModelSubscriptionServiceProviderResponsibleFilterInput | null> | null;
};

export type ModelSubscriptionInventoryProductIncomeInventoryFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  incomeInventoryProductQuantityId?: ModelSubscriptionIDInput | null;
  inventoryProductId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionInventoryProductIncomeInventoryFilterInput | null> | null;
  or?: Array<ModelSubscriptionInventoryProductIncomeInventoryFilterInput | null> | null;
};

export type ModelSubscriptionInventoryProductIncomeInventoryRequestFilterInput =
  {
    id?: ModelSubscriptionIDInput | null;
    incomeInventoryProductQuantityRequestId?: ModelSubscriptionIDInput | null;
    inventoryProductId?: ModelSubscriptionIDInput | null;
    and?: Array<ModelSubscriptionInventoryProductIncomeInventoryRequestFilterInput | null> | null;
    or?: Array<ModelSubscriptionInventoryProductIncomeInventoryRequestFilterInput | null> | null;
  };

export type ModelSubscriptionInventoryProductOutcomeInventoryFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  outcomeInventoryProductQuantityId?: ModelSubscriptionIDInput | null;
  inventoryProductId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionInventoryProductOutcomeInventoryFilterInput | null> | null;
  or?: Array<ModelSubscriptionInventoryProductOutcomeInventoryFilterInput | null> | null;
};

export type ModelSubscriptionInventoryProductOutcomeInventoryRequestFilterInput =
  {
    id?: ModelSubscriptionIDInput | null;
    outcomeInventoryProductQuantityRequestId?: ModelSubscriptionIDInput | null;
    inventoryProductId?: ModelSubscriptionIDInput | null;
    and?: Array<ModelSubscriptionInventoryProductOutcomeInventoryRequestFilterInput | null> | null;
    or?: Array<ModelSubscriptionInventoryProductOutcomeInventoryRequestFilterInput | null> | null;
  };

export type ModelSubscriptionInventoryProductReturnsInventoryFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  returnsInventoryId?: ModelSubscriptionIDInput | null;
  inventoryProductId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionInventoryProductReturnsInventoryFilterInput | null> | null;
  or?: Array<ModelSubscriptionInventoryProductReturnsInventoryFilterInput | null> | null;
};

export type ModelSubscriptionBranchOfficeUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  userId?: ModelSubscriptionIDInput | null;
  branchOfficeId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionBranchOfficeUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionBranchOfficeUserFilterInput | null> | null;
};

export type ModelSubscriptionDiscountInventoryProductFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  inventoryProductId?: ModelSubscriptionIDInput | null;
  discountsId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionDiscountInventoryProductFilterInput | null> | null;
  or?: Array<ModelSubscriptionDiscountInventoryProductFilterInput | null> | null;
};

export type ModelSubscriptionInventoryProductSalesOperationFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  inventoryProductId?: ModelSubscriptionIDInput | null;
  salesOperationInventoryProductQuantityId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionInventoryProductSalesOperationFilterInput | null> | null;
  or?: Array<ModelSubscriptionInventoryProductSalesOperationFilterInput | null> | null;
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput;
  condition?: ModelCategoryConditionInput | null;
};

export type CreateCategoryMutation = {
  createCategory?: {
    __typename: "Category";
    id: number;
    name?: string | null;
    subcategories?: {
      __typename: "ModelSubCategoryConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput;
  condition?: ModelCategoryConditionInput | null;
};

export type UpdateCategoryMutation = {
  updateCategory?: {
    __typename: "Category";
    id: number;
    name?: string | null;
    subcategories?: {
      __typename: "ModelSubCategoryConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput;
  condition?: ModelCategoryConditionInput | null;
};

export type DeleteCategoryMutation = {
  deleteCategory?: {
    __typename: "Category";
    id: number;
    name?: string | null;
    subcategories?: {
      __typename: "ModelSubCategoryConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateSubCategoryMutationVariables = {
  input: CreateSubCategoryInput;
  condition?: ModelSubCategoryConditionInput | null;
};

export type CreateSubCategoryMutation = {
  createSubCategory?: {
    __typename: "SubCategory";
    id: number;
    categoryID: number;
    subcategory_name?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateSubCategoryMutationVariables = {
  input: UpdateSubCategoryInput;
  condition?: ModelSubCategoryConditionInput | null;
};

export type UpdateSubCategoryMutation = {
  updateSubCategory?: {
    __typename: "SubCategory";
    id: number;
    categoryID: number;
    subcategory_name?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteSubCategoryMutationVariables = {
  input: DeleteSubCategoryInput;
  condition?: ModelSubCategoryConditionInput | null;
};

export type DeleteSubCategoryMutation = {
  deleteSubCategory?: {
    __typename: "SubCategory";
    id: number;
    categoryID: number;
    subcategory_name?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateClassMutationVariables = {
  input: CreateClassInput;
  condition?: ModelClassConditionInput | null;
};

export type CreateClassMutation = {
  createClass?: {
    __typename: "Class";
    id: number;
    name?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateClassMutationVariables = {
  input: UpdateClassInput;
  condition?: ModelClassConditionInput | null;
};

export type UpdateClassMutation = {
  updateClass?: {
    __typename: "Class";
    id: number;
    name?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteClassMutationVariables = {
  input: DeleteClassInput;
  condition?: ModelClassConditionInput | null;
};

export type DeleteClassMutation = {
  deleteClass?: {
    __typename: "Class";
    id: number;
    name?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateClientMutationVariables = {
  input: CreateClientInput;
  condition?: ModelClientConditionInput | null;
};

export type CreateClientMutation = {
  createClient?: {
    __typename: "Client";
    id: string;
    name: string;
    second_name?: string | null;
    lastname: string;
    second_lastname?: string | null;
    phone: string;
    fixed_phone?: string | null;
    email?: string | null;
    birthday?: string | null;
    RFC?: string | null;
    address?: string | null;
    settlement?: string | null;
    postal_code?: string | null;
    state?: string | null;
    city?: string | null;
    salesOperation?: {
      __typename: "ModelSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    creditID?: string | null;
    credit?: {
      __typename: "Credits";
      id: string;
      totalCredit: number;
      credit_available: number;
      outstanding_balance?: number | null;
      payment_status: PaymentStatus;
      last_payment_date?: string | null;
      startDate?: string | null;
      createdAt: string;
      updatedAt: string;
      creditsClientId?: string | null;
    } | null;
    creditRequests?: {
      __typename: "ModelCreditRequestsConnection";
      nextToken?: string | null;
    } | null;
    branchOfficeID: string;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    hasCredit: boolean;
    hasCreditRequest?: boolean | null;
    returnsInventory?: {
      __typename: "ModelReturnsInventoryConnection";
      nextToken?: string | null;
    } | null;
    salesOperationClientCreditMovements?: {
      __typename: "ModelSalesOperationClientCreditMovementsConnection";
      nextToken?: string | null;
    } | null;
    salesOperationClientCreditFirstLastPayment?: {
      __typename: "ModelSalesOperationClientCreditFirstLastPaymentConnection";
      nextToken?: string | null;
    } | null;
    salesOperationCustomerSubscription?: {
      __typename: "ModelSalesOperationCustomerSubscriptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateClientMutationVariables = {
  input: UpdateClientInput;
  condition?: ModelClientConditionInput | null;
};

export type UpdateClientMutation = {
  updateClient?: {
    __typename: "Client";
    id: string;
    name: string;
    second_name?: string | null;
    lastname: string;
    second_lastname?: string | null;
    phone: string;
    fixed_phone?: string | null;
    email?: string | null;
    birthday?: string | null;
    RFC?: string | null;
    address?: string | null;
    settlement?: string | null;
    postal_code?: string | null;
    state?: string | null;
    city?: string | null;
    salesOperation?: {
      __typename: "ModelSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    creditID?: string | null;
    credit?: {
      __typename: "Credits";
      id: string;
      totalCredit: number;
      credit_available: number;
      outstanding_balance?: number | null;
      payment_status: PaymentStatus;
      last_payment_date?: string | null;
      startDate?: string | null;
      createdAt: string;
      updatedAt: string;
      creditsClientId?: string | null;
    } | null;
    creditRequests?: {
      __typename: "ModelCreditRequestsConnection";
      nextToken?: string | null;
    } | null;
    branchOfficeID: string;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    hasCredit: boolean;
    hasCreditRequest?: boolean | null;
    returnsInventory?: {
      __typename: "ModelReturnsInventoryConnection";
      nextToken?: string | null;
    } | null;
    salesOperationClientCreditMovements?: {
      __typename: "ModelSalesOperationClientCreditMovementsConnection";
      nextToken?: string | null;
    } | null;
    salesOperationClientCreditFirstLastPayment?: {
      __typename: "ModelSalesOperationClientCreditFirstLastPaymentConnection";
      nextToken?: string | null;
    } | null;
    salesOperationCustomerSubscription?: {
      __typename: "ModelSalesOperationCustomerSubscriptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteClientMutationVariables = {
  input: DeleteClientInput;
  condition?: ModelClientConditionInput | null;
};

export type DeleteClientMutation = {
  deleteClient?: {
    __typename: "Client";
    id: string;
    name: string;
    second_name?: string | null;
    lastname: string;
    second_lastname?: string | null;
    phone: string;
    fixed_phone?: string | null;
    email?: string | null;
    birthday?: string | null;
    RFC?: string | null;
    address?: string | null;
    settlement?: string | null;
    postal_code?: string | null;
    state?: string | null;
    city?: string | null;
    salesOperation?: {
      __typename: "ModelSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    creditID?: string | null;
    credit?: {
      __typename: "Credits";
      id: string;
      totalCredit: number;
      credit_available: number;
      outstanding_balance?: number | null;
      payment_status: PaymentStatus;
      last_payment_date?: string | null;
      startDate?: string | null;
      createdAt: string;
      updatedAt: string;
      creditsClientId?: string | null;
    } | null;
    creditRequests?: {
      __typename: "ModelCreditRequestsConnection";
      nextToken?: string | null;
    } | null;
    branchOfficeID: string;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    hasCredit: boolean;
    hasCreditRequest?: boolean | null;
    returnsInventory?: {
      __typename: "ModelReturnsInventoryConnection";
      nextToken?: string | null;
    } | null;
    salesOperationClientCreditMovements?: {
      __typename: "ModelSalesOperationClientCreditMovementsConnection";
      nextToken?: string | null;
    } | null;
    salesOperationClientCreditFirstLastPayment?: {
      __typename: "ModelSalesOperationClientCreditFirstLastPaymentConnection";
      nextToken?: string | null;
    } | null;
    salesOperationCustomerSubscription?: {
      __typename: "ModelSalesOperationCustomerSubscriptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateNonRegisteredClientMutationVariables = {
  input: CreateNonRegisteredClientInput;
  condition?: ModelNonRegisteredClientConditionInput | null;
};

export type CreateNonRegisteredClientMutation = {
  createNonRegisteredClient?: {
    __typename: "NonRegisteredClient";
    id: string;
    fullName: string;
    saleOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    nonRegisteredClientSaleOperationId?: string | null;
  } | null;
};

export type UpdateNonRegisteredClientMutationVariables = {
  input: UpdateNonRegisteredClientInput;
  condition?: ModelNonRegisteredClientConditionInput | null;
};

export type UpdateNonRegisteredClientMutation = {
  updateNonRegisteredClient?: {
    __typename: "NonRegisteredClient";
    id: string;
    fullName: string;
    saleOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    nonRegisteredClientSaleOperationId?: string | null;
  } | null;
};

export type DeleteNonRegisteredClientMutationVariables = {
  input: DeleteNonRegisteredClientInput;
  condition?: ModelNonRegisteredClientConditionInput | null;
};

export type DeleteNonRegisteredClientMutation = {
  deleteNonRegisteredClient?: {
    __typename: "NonRegisteredClient";
    id: string;
    fullName: string;
    saleOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    nonRegisteredClientSaleOperationId?: string | null;
  } | null;
};

export type CreateCreditsMutationVariables = {
  input: CreateCreditsInput;
  condition?: ModelCreditsConditionInput | null;
};

export type CreateCreditsMutation = {
  createCredits?: {
    __typename: "Credits";
    id: string;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    totalCredit: number;
    credit_available: number;
    outstanding_balance?: number | null;
    payment_status: PaymentStatus;
    last_payment_date?: string | null;
    startDate?: string | null;
    createdAt: string;
    updatedAt: string;
    creditsClientId?: string | null;
  } | null;
};

export type UpdateCreditsMutationVariables = {
  input: UpdateCreditsInput;
  condition?: ModelCreditsConditionInput | null;
};

export type UpdateCreditsMutation = {
  updateCredits?: {
    __typename: "Credits";
    id: string;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    totalCredit: number;
    credit_available: number;
    outstanding_balance?: number | null;
    payment_status: PaymentStatus;
    last_payment_date?: string | null;
    startDate?: string | null;
    createdAt: string;
    updatedAt: string;
    creditsClientId?: string | null;
  } | null;
};

export type DeleteCreditsMutationVariables = {
  input: DeleteCreditsInput;
  condition?: ModelCreditsConditionInput | null;
};

export type DeleteCreditsMutation = {
  deleteCredits?: {
    __typename: "Credits";
    id: string;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    totalCredit: number;
    credit_available: number;
    outstanding_balance?: number | null;
    payment_status: PaymentStatus;
    last_payment_date?: string | null;
    startDate?: string | null;
    createdAt: string;
    updatedAt: string;
    creditsClientId?: string | null;
  } | null;
};

export type CreateCreditRequestsMutationVariables = {
  input: CreateCreditRequestsInput;
  condition?: ModelCreditRequestsConditionInput | null;
};

export type CreateCreditRequestsMutation = {
  createCreditRequests?: {
    __typename: "CreditRequests";
    id: string;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    creditRequestAmount?: number | null;
    creditRequestStatus?: CreditRequestStatus | null;
    creditRequestReason?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateCreditRequestsMutationVariables = {
  input: UpdateCreditRequestsInput;
  condition?: ModelCreditRequestsConditionInput | null;
};

export type UpdateCreditRequestsMutation = {
  updateCreditRequests?: {
    __typename: "CreditRequests";
    id: string;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    creditRequestAmount?: number | null;
    creditRequestStatus?: CreditRequestStatus | null;
    creditRequestReason?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteCreditRequestsMutationVariables = {
  input: DeleteCreditRequestsInput;
  condition?: ModelCreditRequestsConditionInput | null;
};

export type DeleteCreditRequestsMutation = {
  deleteCreditRequests?: {
    __typename: "CreditRequests";
    id: string;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    creditRequestAmount?: number | null;
    creditRequestStatus?: CreditRequestStatus | null;
    creditRequestReason?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateProductMutationVariables = {
  input: CreateProductInput;
  condition?: ModelProductConditionInput | null;
};

export type CreateProductMutation = {
  createProduct?: {
    __typename: "Product";
    id: string;
    class_id: number;
    category_id: number;
    subcategory_id: number;
    name: string;
    description?: string | null;
    price: number;
    commission?: number | null;
    hasCommission?: boolean | null;
    hasDiscount?: boolean | null;
    class?: {
      __typename: "Class";
      id: number;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    category?: {
      __typename: "Category";
      id: number;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    subcategory?: {
      __typename: "SubCategory";
      id: number;
      categoryID: number;
      subcategory_name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    productProviderID: string;
    productProvider?: {
      __typename: "ProductProvider";
      id: string;
      createdAt: string;
      updatedAt: string;
      productProviderProviderIDId?: string | null;
    } | null;
    inventoryProduct?: {
      __typename: "ModelInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput;
  condition?: ModelProductConditionInput | null;
};

export type UpdateProductMutation = {
  updateProduct?: {
    __typename: "Product";
    id: string;
    class_id: number;
    category_id: number;
    subcategory_id: number;
    name: string;
    description?: string | null;
    price: number;
    commission?: number | null;
    hasCommission?: boolean | null;
    hasDiscount?: boolean | null;
    class?: {
      __typename: "Class";
      id: number;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    category?: {
      __typename: "Category";
      id: number;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    subcategory?: {
      __typename: "SubCategory";
      id: number;
      categoryID: number;
      subcategory_name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    productProviderID: string;
    productProvider?: {
      __typename: "ProductProvider";
      id: string;
      createdAt: string;
      updatedAt: string;
      productProviderProviderIDId?: string | null;
    } | null;
    inventoryProduct?: {
      __typename: "ModelInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput;
  condition?: ModelProductConditionInput | null;
};

export type DeleteProductMutation = {
  deleteProduct?: {
    __typename: "Product";
    id: string;
    class_id: number;
    category_id: number;
    subcategory_id: number;
    name: string;
    description?: string | null;
    price: number;
    commission?: number | null;
    hasCommission?: boolean | null;
    hasDiscount?: boolean | null;
    class?: {
      __typename: "Class";
      id: number;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    category?: {
      __typename: "Category";
      id: number;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    subcategory?: {
      __typename: "SubCategory";
      id: number;
      categoryID: number;
      subcategory_name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    productProviderID: string;
    productProvider?: {
      __typename: "ProductProvider";
      id: string;
      createdAt: string;
      updatedAt: string;
      productProviderProviderIDId?: string | null;
    } | null;
    inventoryProduct?: {
      __typename: "ModelInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateInventoryOperationMutationVariables = {
  input: CreateInventoryOperationInput;
  condition?: ModelInventoryOperationConditionInput | null;
};

export type CreateInventoryOperationMutation = {
  createInventoryOperation?: {
    __typename: "InventoryOperation";
    id: string;
    operationType: OperationType;
    inventoryID: string;
    inventory: {
      __typename: "Inventory";
      id: string;
      name: string;
      branchOfficeID?: string | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    incomeInventory?: {
      __typename: "IncomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      providerID: string;
      productProviderResponsibleID: string;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      incomeInventoryInventoryOperationIDId?: string | null;
    } | null;
    incomeInventoryRequest?: {
      __typename: "IncomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status: IOInventoryStatus;
      providerID: string;
      productProviderResponsibleID: string;
      branchOfficeID: string;
      userInfoID: string;
      createdAt: string;
      updatedAt: string;
      incomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null;
    outcomeInventory?: {
      __typename: "OutcomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryInventoryOperationIDId?: string | null;
    } | null;
    outcomeInventoryRequest?: {
      __typename: "OutcomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    inventoryOperationIncomeInventoryId?: string | null;
    inventoryOperationIncomeInventoryRequestId?: string | null;
    inventoryOperationOutcomeInventoryId?: string | null;
    inventoryOperationOutcomeInventoryRequestId?: string | null;
    inventoryOperationSalesOperationId?: string | null;
  } | null;
};

export type UpdateInventoryOperationMutationVariables = {
  input: UpdateInventoryOperationInput;
  condition?: ModelInventoryOperationConditionInput | null;
};

export type UpdateInventoryOperationMutation = {
  updateInventoryOperation?: {
    __typename: "InventoryOperation";
    id: string;
    operationType: OperationType;
    inventoryID: string;
    inventory: {
      __typename: "Inventory";
      id: string;
      name: string;
      branchOfficeID?: string | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    incomeInventory?: {
      __typename: "IncomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      providerID: string;
      productProviderResponsibleID: string;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      incomeInventoryInventoryOperationIDId?: string | null;
    } | null;
    incomeInventoryRequest?: {
      __typename: "IncomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status: IOInventoryStatus;
      providerID: string;
      productProviderResponsibleID: string;
      branchOfficeID: string;
      userInfoID: string;
      createdAt: string;
      updatedAt: string;
      incomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null;
    outcomeInventory?: {
      __typename: "OutcomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryInventoryOperationIDId?: string | null;
    } | null;
    outcomeInventoryRequest?: {
      __typename: "OutcomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    inventoryOperationIncomeInventoryId?: string | null;
    inventoryOperationIncomeInventoryRequestId?: string | null;
    inventoryOperationOutcomeInventoryId?: string | null;
    inventoryOperationOutcomeInventoryRequestId?: string | null;
    inventoryOperationSalesOperationId?: string | null;
  } | null;
};

export type DeleteInventoryOperationMutationVariables = {
  input: DeleteInventoryOperationInput;
  condition?: ModelInventoryOperationConditionInput | null;
};

export type DeleteInventoryOperationMutation = {
  deleteInventoryOperation?: {
    __typename: "InventoryOperation";
    id: string;
    operationType: OperationType;
    inventoryID: string;
    inventory: {
      __typename: "Inventory";
      id: string;
      name: string;
      branchOfficeID?: string | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    incomeInventory?: {
      __typename: "IncomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      providerID: string;
      productProviderResponsibleID: string;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      incomeInventoryInventoryOperationIDId?: string | null;
    } | null;
    incomeInventoryRequest?: {
      __typename: "IncomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status: IOInventoryStatus;
      providerID: string;
      productProviderResponsibleID: string;
      branchOfficeID: string;
      userInfoID: string;
      createdAt: string;
      updatedAt: string;
      incomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null;
    outcomeInventory?: {
      __typename: "OutcomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryInventoryOperationIDId?: string | null;
    } | null;
    outcomeInventoryRequest?: {
      __typename: "OutcomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    inventoryOperationIncomeInventoryId?: string | null;
    inventoryOperationIncomeInventoryRequestId?: string | null;
    inventoryOperationOutcomeInventoryId?: string | null;
    inventoryOperationOutcomeInventoryRequestId?: string | null;
    inventoryOperationSalesOperationId?: string | null;
  } | null;
};

export type CreateIncomeInventoryMutationVariables = {
  input: CreateIncomeInventoryInput;
  condition?: ModelIncomeInventoryConditionInput | null;
};

export type CreateIncomeInventoryMutation = {
  createIncomeInventory?: {
    __typename: "IncomeInventory";
    id: string;
    date: string;
    comments?: string | null;
    status?: IOInventoryStatus | null;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    providerID: string;
    provider?: {
      __typename: "Provider";
      id: string;
      enterprise_name: string;
      enterprise_RFC?: string | null;
      phone?: string | null;
      fixed_phone?: string | null;
      type?: string | null;
      createdAt: string;
      updatedAt: string;
      providerProductproviderId?: string | null;
      providerServiceproviderId?: string | null;
    } | null;
    productProviderResponsibleID: string;
    productProviderResponsible?: {
      __typename: "ProductProviderResponsible";
      id: string;
      productproviderID: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      RFC?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    incomeInventoryProductQuantities?: {
      __typename: "ModelIncomeInventoryProductQuantityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    incomeInventoryInventoryOperationIDId?: string | null;
  } | null;
};

export type UpdateIncomeInventoryMutationVariables = {
  input: UpdateIncomeInventoryInput;
  condition?: ModelIncomeInventoryConditionInput | null;
};

export type UpdateIncomeInventoryMutation = {
  updateIncomeInventory?: {
    __typename: "IncomeInventory";
    id: string;
    date: string;
    comments?: string | null;
    status?: IOInventoryStatus | null;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    providerID: string;
    provider?: {
      __typename: "Provider";
      id: string;
      enterprise_name: string;
      enterprise_RFC?: string | null;
      phone?: string | null;
      fixed_phone?: string | null;
      type?: string | null;
      createdAt: string;
      updatedAt: string;
      providerProductproviderId?: string | null;
      providerServiceproviderId?: string | null;
    } | null;
    productProviderResponsibleID: string;
    productProviderResponsible?: {
      __typename: "ProductProviderResponsible";
      id: string;
      productproviderID: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      RFC?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    incomeInventoryProductQuantities?: {
      __typename: "ModelIncomeInventoryProductQuantityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    incomeInventoryInventoryOperationIDId?: string | null;
  } | null;
};

export type DeleteIncomeInventoryMutationVariables = {
  input: DeleteIncomeInventoryInput;
  condition?: ModelIncomeInventoryConditionInput | null;
};

export type DeleteIncomeInventoryMutation = {
  deleteIncomeInventory?: {
    __typename: "IncomeInventory";
    id: string;
    date: string;
    comments?: string | null;
    status?: IOInventoryStatus | null;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    providerID: string;
    provider?: {
      __typename: "Provider";
      id: string;
      enterprise_name: string;
      enterprise_RFC?: string | null;
      phone?: string | null;
      fixed_phone?: string | null;
      type?: string | null;
      createdAt: string;
      updatedAt: string;
      providerProductproviderId?: string | null;
      providerServiceproviderId?: string | null;
    } | null;
    productProviderResponsibleID: string;
    productProviderResponsible?: {
      __typename: "ProductProviderResponsible";
      id: string;
      productproviderID: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      RFC?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    incomeInventoryProductQuantities?: {
      __typename: "ModelIncomeInventoryProductQuantityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    incomeInventoryInventoryOperationIDId?: string | null;
  } | null;
};

export type CreateIncomeInventoryRequestMutationVariables = {
  input: CreateIncomeInventoryRequestInput;
  condition?: ModelIncomeInventoryRequestConditionInput | null;
};

export type CreateIncomeInventoryRequestMutation = {
  createIncomeInventoryRequest?: {
    __typename: "IncomeInventoryRequest";
    id: string;
    date: string;
    comments?: string | null;
    status: IOInventoryStatus;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    providerID: string;
    provider?: {
      __typename: "Provider";
      id: string;
      enterprise_name: string;
      enterprise_RFC?: string | null;
      phone?: string | null;
      fixed_phone?: string | null;
      type?: string | null;
      createdAt: string;
      updatedAt: string;
      providerProductproviderId?: string | null;
      providerServiceproviderId?: string | null;
    } | null;
    productProviderResponsibleID: string;
    productProviderResponsible?: {
      __typename: "ProductProviderResponsible";
      id: string;
      productproviderID: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      RFC?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    branchOfficeID: string;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    incomeInventoryProductQuantitiesRequest?: {
      __typename: "ModelIncomeInventoryProductQuantityRequestConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    incomeInventoryRequestInventoryOperationIDId?: string | null;
  } | null;
};

export type UpdateIncomeInventoryRequestMutationVariables = {
  input: UpdateIncomeInventoryRequestInput;
  condition?: ModelIncomeInventoryRequestConditionInput | null;
};

export type UpdateIncomeInventoryRequestMutation = {
  updateIncomeInventoryRequest?: {
    __typename: "IncomeInventoryRequest";
    id: string;
    date: string;
    comments?: string | null;
    status: IOInventoryStatus;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    providerID: string;
    provider?: {
      __typename: "Provider";
      id: string;
      enterprise_name: string;
      enterprise_RFC?: string | null;
      phone?: string | null;
      fixed_phone?: string | null;
      type?: string | null;
      createdAt: string;
      updatedAt: string;
      providerProductproviderId?: string | null;
      providerServiceproviderId?: string | null;
    } | null;
    productProviderResponsibleID: string;
    productProviderResponsible?: {
      __typename: "ProductProviderResponsible";
      id: string;
      productproviderID: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      RFC?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    branchOfficeID: string;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    incomeInventoryProductQuantitiesRequest?: {
      __typename: "ModelIncomeInventoryProductQuantityRequestConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    incomeInventoryRequestInventoryOperationIDId?: string | null;
  } | null;
};

export type DeleteIncomeInventoryRequestMutationVariables = {
  input: DeleteIncomeInventoryRequestInput;
  condition?: ModelIncomeInventoryRequestConditionInput | null;
};

export type DeleteIncomeInventoryRequestMutation = {
  deleteIncomeInventoryRequest?: {
    __typename: "IncomeInventoryRequest";
    id: string;
    date: string;
    comments?: string | null;
    status: IOInventoryStatus;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    providerID: string;
    provider?: {
      __typename: "Provider";
      id: string;
      enterprise_name: string;
      enterprise_RFC?: string | null;
      phone?: string | null;
      fixed_phone?: string | null;
      type?: string | null;
      createdAt: string;
      updatedAt: string;
      providerProductproviderId?: string | null;
      providerServiceproviderId?: string | null;
    } | null;
    productProviderResponsibleID: string;
    productProviderResponsible?: {
      __typename: "ProductProviderResponsible";
      id: string;
      productproviderID: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      RFC?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    branchOfficeID: string;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    incomeInventoryProductQuantitiesRequest?: {
      __typename: "ModelIncomeInventoryProductQuantityRequestConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    incomeInventoryRequestInventoryOperationIDId?: string | null;
  } | null;
};

export type CreateIncomeInventoryProductQuantityMutationVariables = {
  input: CreateIncomeInventoryProductQuantityInput;
  condition?: ModelIncomeInventoryProductQuantityConditionInput | null;
};

export type CreateIncomeInventoryProductQuantityMutation = {
  createIncomeInventoryProductQuantity?: {
    __typename: "IncomeInventoryProductQuantity";
    id: string;
    incomeQuantity: number;
    inventoryProducts?: {
      __typename: "ModelInventoryProductIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoryID: string;
    incomeInventory?: {
      __typename: "IncomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      providerID: string;
      productProviderResponsibleID: string;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      incomeInventoryInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateIncomeInventoryProductQuantityMutationVariables = {
  input: UpdateIncomeInventoryProductQuantityInput;
  condition?: ModelIncomeInventoryProductQuantityConditionInput | null;
};

export type UpdateIncomeInventoryProductQuantityMutation = {
  updateIncomeInventoryProductQuantity?: {
    __typename: "IncomeInventoryProductQuantity";
    id: string;
    incomeQuantity: number;
    inventoryProducts?: {
      __typename: "ModelInventoryProductIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoryID: string;
    incomeInventory?: {
      __typename: "IncomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      providerID: string;
      productProviderResponsibleID: string;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      incomeInventoryInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteIncomeInventoryProductQuantityMutationVariables = {
  input: DeleteIncomeInventoryProductQuantityInput;
  condition?: ModelIncomeInventoryProductQuantityConditionInput | null;
};

export type DeleteIncomeInventoryProductQuantityMutation = {
  deleteIncomeInventoryProductQuantity?: {
    __typename: "IncomeInventoryProductQuantity";
    id: string;
    incomeQuantity: number;
    inventoryProducts?: {
      __typename: "ModelInventoryProductIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoryID: string;
    incomeInventory?: {
      __typename: "IncomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      providerID: string;
      productProviderResponsibleID: string;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      incomeInventoryInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateIncomeInventoryProductQuantityRequestMutationVariables = {
  input: CreateIncomeInventoryProductQuantityRequestInput;
  condition?: ModelIncomeInventoryProductQuantityRequestConditionInput | null;
};

export type CreateIncomeInventoryProductQuantityRequestMutation = {
  createIncomeInventoryProductQuantityRequest?: {
    __typename: "IncomeInventoryProductQuantityRequest";
    id: string;
    incomeQuantity: number;
    inventoryProducts?: {
      __typename: "ModelInventoryProductIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoryRequestID: string;
    incomeInventoryRequest?: {
      __typename: "IncomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status: IOInventoryStatus;
      providerID: string;
      productProviderResponsibleID: string;
      branchOfficeID: string;
      userInfoID: string;
      createdAt: string;
      updatedAt: string;
      incomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateIncomeInventoryProductQuantityRequestMutationVariables = {
  input: UpdateIncomeInventoryProductQuantityRequestInput;
  condition?: ModelIncomeInventoryProductQuantityRequestConditionInput | null;
};

export type UpdateIncomeInventoryProductQuantityRequestMutation = {
  updateIncomeInventoryProductQuantityRequest?: {
    __typename: "IncomeInventoryProductQuantityRequest";
    id: string;
    incomeQuantity: number;
    inventoryProducts?: {
      __typename: "ModelInventoryProductIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoryRequestID: string;
    incomeInventoryRequest?: {
      __typename: "IncomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status: IOInventoryStatus;
      providerID: string;
      productProviderResponsibleID: string;
      branchOfficeID: string;
      userInfoID: string;
      createdAt: string;
      updatedAt: string;
      incomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteIncomeInventoryProductQuantityRequestMutationVariables = {
  input: DeleteIncomeInventoryProductQuantityRequestInput;
  condition?: ModelIncomeInventoryProductQuantityRequestConditionInput | null;
};

export type DeleteIncomeInventoryProductQuantityRequestMutation = {
  deleteIncomeInventoryProductQuantityRequest?: {
    __typename: "IncomeInventoryProductQuantityRequest";
    id: string;
    incomeQuantity: number;
    inventoryProducts?: {
      __typename: "ModelInventoryProductIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoryRequestID: string;
    incomeInventoryRequest?: {
      __typename: "IncomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status: IOInventoryStatus;
      providerID: string;
      productProviderResponsibleID: string;
      branchOfficeID: string;
      userInfoID: string;
      createdAt: string;
      updatedAt: string;
      incomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateOutcomeInventoryMutationVariables = {
  input: CreateOutcomeInventoryInput;
  condition?: ModelOutcomeInventoryConditionInput | null;
};

export type CreateOutcomeInventoryMutation = {
  createOutcomeInventory?: {
    __typename: "OutcomeInventory";
    id: string;
    date: string;
    comments?: string | null;
    status?: IOInventoryStatus | null;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    outcomeInventoryProductQuantities?: {
      __typename: "ModelOutcomeInventoryProductQuantityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    outcomeInventoryInventoryOperationIDId?: string | null;
  } | null;
};

export type UpdateOutcomeInventoryMutationVariables = {
  input: UpdateOutcomeInventoryInput;
  condition?: ModelOutcomeInventoryConditionInput | null;
};

export type UpdateOutcomeInventoryMutation = {
  updateOutcomeInventory?: {
    __typename: "OutcomeInventory";
    id: string;
    date: string;
    comments?: string | null;
    status?: IOInventoryStatus | null;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    outcomeInventoryProductQuantities?: {
      __typename: "ModelOutcomeInventoryProductQuantityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    outcomeInventoryInventoryOperationIDId?: string | null;
  } | null;
};

export type DeleteOutcomeInventoryMutationVariables = {
  input: DeleteOutcomeInventoryInput;
  condition?: ModelOutcomeInventoryConditionInput | null;
};

export type DeleteOutcomeInventoryMutation = {
  deleteOutcomeInventory?: {
    __typename: "OutcomeInventory";
    id: string;
    date: string;
    comments?: string | null;
    status?: IOInventoryStatus | null;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    outcomeInventoryProductQuantities?: {
      __typename: "ModelOutcomeInventoryProductQuantityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    outcomeInventoryInventoryOperationIDId?: string | null;
  } | null;
};

export type CreateOutcomeInventoryRequestMutationVariables = {
  input: CreateOutcomeInventoryRequestInput;
  condition?: ModelOutcomeInventoryRequestConditionInput | null;
};

export type CreateOutcomeInventoryRequestMutation = {
  createOutcomeInventoryRequest?: {
    __typename: "OutcomeInventoryRequest";
    id: string;
    date: string;
    comments?: string | null;
    status?: IOInventoryStatus | null;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    outcomeInventoryProductQuantitiesRequest?: {
      __typename: "ModelOutcomeInventoryProductQuantityRequestConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    outcomeInventoryRequestInventoryOperationIDId?: string | null;
  } | null;
};

export type UpdateOutcomeInventoryRequestMutationVariables = {
  input: UpdateOutcomeInventoryRequestInput;
  condition?: ModelOutcomeInventoryRequestConditionInput | null;
};

export type UpdateOutcomeInventoryRequestMutation = {
  updateOutcomeInventoryRequest?: {
    __typename: "OutcomeInventoryRequest";
    id: string;
    date: string;
    comments?: string | null;
    status?: IOInventoryStatus | null;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    outcomeInventoryProductQuantitiesRequest?: {
      __typename: "ModelOutcomeInventoryProductQuantityRequestConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    outcomeInventoryRequestInventoryOperationIDId?: string | null;
  } | null;
};

export type DeleteOutcomeInventoryRequestMutationVariables = {
  input: DeleteOutcomeInventoryRequestInput;
  condition?: ModelOutcomeInventoryRequestConditionInput | null;
};

export type DeleteOutcomeInventoryRequestMutation = {
  deleteOutcomeInventoryRequest?: {
    __typename: "OutcomeInventoryRequest";
    id: string;
    date: string;
    comments?: string | null;
    status?: IOInventoryStatus | null;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    outcomeInventoryProductQuantitiesRequest?: {
      __typename: "ModelOutcomeInventoryProductQuantityRequestConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    outcomeInventoryRequestInventoryOperationIDId?: string | null;
  } | null;
};

export type CreateOutcomeInventoryProductQuantityMutationVariables = {
  input: CreateOutcomeInventoryProductQuantityInput;
  condition?: ModelOutcomeInventoryProductQuantityConditionInput | null;
};

export type CreateOutcomeInventoryProductQuantityMutation = {
  createOutcomeInventoryProductQuantity?: {
    __typename: "OutcomeInventoryProductQuantity";
    id: string;
    outcomeQuantity: number;
    inventoryProducts?: {
      __typename: "ModelInventoryProductOutcomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventoryID: string;
    outcomeInventory?: {
      __typename: "OutcomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateOutcomeInventoryProductQuantityMutationVariables = {
  input: UpdateOutcomeInventoryProductQuantityInput;
  condition?: ModelOutcomeInventoryProductQuantityConditionInput | null;
};

export type UpdateOutcomeInventoryProductQuantityMutation = {
  updateOutcomeInventoryProductQuantity?: {
    __typename: "OutcomeInventoryProductQuantity";
    id: string;
    outcomeQuantity: number;
    inventoryProducts?: {
      __typename: "ModelInventoryProductOutcomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventoryID: string;
    outcomeInventory?: {
      __typename: "OutcomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteOutcomeInventoryProductQuantityMutationVariables = {
  input: DeleteOutcomeInventoryProductQuantityInput;
  condition?: ModelOutcomeInventoryProductQuantityConditionInput | null;
};

export type DeleteOutcomeInventoryProductQuantityMutation = {
  deleteOutcomeInventoryProductQuantity?: {
    __typename: "OutcomeInventoryProductQuantity";
    id: string;
    outcomeQuantity: number;
    inventoryProducts?: {
      __typename: "ModelInventoryProductOutcomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventoryID: string;
    outcomeInventory?: {
      __typename: "OutcomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateOutcomeInventoryProductQuantityRequestMutationVariables = {
  input: CreateOutcomeInventoryProductQuantityRequestInput;
  condition?: ModelOutcomeInventoryProductQuantityRequestConditionInput | null;
};

export type CreateOutcomeInventoryProductQuantityRequestMutation = {
  createOutcomeInventoryProductQuantityRequest?: {
    __typename: "OutcomeInventoryProductQuantityRequest";
    id: string;
    outcomeRequestQuantity: number;
    inventoryProducts?: {
      __typename: "ModelInventoryProductOutcomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventoryRequestID: string;
    outcomeInventoryRequest?: {
      __typename: "OutcomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateOutcomeInventoryProductQuantityRequestMutationVariables = {
  input: UpdateOutcomeInventoryProductQuantityRequestInput;
  condition?: ModelOutcomeInventoryProductQuantityRequestConditionInput | null;
};

export type UpdateOutcomeInventoryProductQuantityRequestMutation = {
  updateOutcomeInventoryProductQuantityRequest?: {
    __typename: "OutcomeInventoryProductQuantityRequest";
    id: string;
    outcomeRequestQuantity: number;
    inventoryProducts?: {
      __typename: "ModelInventoryProductOutcomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventoryRequestID: string;
    outcomeInventoryRequest?: {
      __typename: "OutcomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteOutcomeInventoryProductQuantityRequestMutationVariables = {
  input: DeleteOutcomeInventoryProductQuantityRequestInput;
  condition?: ModelOutcomeInventoryProductQuantityRequestConditionInput | null;
};

export type DeleteOutcomeInventoryProductQuantityRequestMutation = {
  deleteOutcomeInventoryProductQuantityRequest?: {
    __typename: "OutcomeInventoryProductQuantityRequest";
    id: string;
    outcomeRequestQuantity: number;
    inventoryProducts?: {
      __typename: "ModelInventoryProductOutcomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventoryRequestID: string;
    outcomeInventoryRequest?: {
      __typename: "OutcomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateReturnsInventoryMutationVariables = {
  input: CreateReturnsInventoryInput;
  condition?: ModelReturnsInventoryConditionInput | null;
};

export type CreateReturnsInventoryMutation = {
  createReturnsInventory?: {
    __typename: "ReturnsInventory";
    id: string;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    clientID: string;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments?: string | null;
    inventoryProducts?: {
      __typename: "ModelInventoryProductReturnsInventoryConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateReturnsInventoryMutationVariables = {
  input: UpdateReturnsInventoryInput;
  condition?: ModelReturnsInventoryConditionInput | null;
};

export type UpdateReturnsInventoryMutation = {
  updateReturnsInventory?: {
    __typename: "ReturnsInventory";
    id: string;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    clientID: string;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments?: string | null;
    inventoryProducts?: {
      __typename: "ModelInventoryProductReturnsInventoryConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteReturnsInventoryMutationVariables = {
  input: DeleteReturnsInventoryInput;
  condition?: ModelReturnsInventoryConditionInput | null;
};

export type DeleteReturnsInventoryMutation = {
  deleteReturnsInventory?: {
    __typename: "ReturnsInventory";
    id: string;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    clientID: string;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments?: string | null;
    inventoryProducts?: {
      __typename: "ModelInventoryProductReturnsInventoryConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateRoleMutationVariables = {
  input: CreateRoleInput;
  condition?: ModelRoleConditionInput | null;
};

export type CreateRoleMutation = {
  createRole?: {
    __typename: "Role";
    id: string;
    name: RoleType;
    description?: string | null;
    user?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateRoleMutationVariables = {
  input: UpdateRoleInput;
  condition?: ModelRoleConditionInput | null;
};

export type UpdateRoleMutation = {
  updateRole?: {
    __typename: "Role";
    id: string;
    name: RoleType;
    description?: string | null;
    user?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteRoleMutationVariables = {
  input: DeleteRoleInput;
  condition?: ModelRoleConditionInput | null;
};

export type DeleteRoleMutation = {
  deleteRole?: {
    __typename: "Role";
    id: string;
    name: RoleType;
    description?: string | null;
    user?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateUserMutationVariables = {
  input: CreateUserInput;
  condition?: ModelUserConditionInput | null;
};

export type CreateUserMutation = {
  createUser?: {
    __typename: "User";
    id: string;
    email: string;
    password: string;
    rolID: string;
    rol?: {
      __typename: "Role";
      id: string;
      name: RoleType;
      description?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    hasBranchOffice?: boolean | null;
    branchOffice?: {
      __typename: "ModelBranchOfficeUserConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userUserInfoId?: string | null;
  } | null;
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput;
  condition?: ModelUserConditionInput | null;
};

export type UpdateUserMutation = {
  updateUser?: {
    __typename: "User";
    id: string;
    email: string;
    password: string;
    rolID: string;
    rol?: {
      __typename: "Role";
      id: string;
      name: RoleType;
      description?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    hasBranchOffice?: boolean | null;
    branchOffice?: {
      __typename: "ModelBranchOfficeUserConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userUserInfoId?: string | null;
  } | null;
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput;
  condition?: ModelUserConditionInput | null;
};

export type DeleteUserMutation = {
  deleteUser?: {
    __typename: "User";
    id: string;
    email: string;
    password: string;
    rolID: string;
    rol?: {
      __typename: "Role";
      id: string;
      name: RoleType;
      description?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    hasBranchOffice?: boolean | null;
    branchOffice?: {
      __typename: "ModelBranchOfficeUserConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userUserInfoId?: string | null;
  } | null;
};

export type CreateUserInfoMutationVariables = {
  input: CreateUserInfoInput;
  condition?: ModelUserInfoConditionInput | null;
};

export type CreateUserInfoMutation = {
  createUserInfo?: {
    __typename: "UserInfo";
    id: string;
    name: string;
    phone?: string | null;
    RFC?: string | null;
    gender?: string | null;
    user?: {
      __typename: "User";
      id: string;
      email: string;
      password: string;
      rolID: string;
      hasBranchOffice?: boolean | null;
      createdAt: string;
      updatedAt: string;
      userUserInfoId?: string | null;
    } | null;
    companyExpenses?: {
      __typename: "ModelCompanyExpensesConnection";
      nextToken?: string | null;
    } | null;
    salesOperation?: {
      __typename: "ModelSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    incomeInventories?: {
      __typename: "ModelIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoriesRequest?: {
      __typename: "ModelIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventories?: {
      __typename: "ModelOutcomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventoriesRequest?: {
      __typename: "ModelOutcomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    returnsInventory?: {
      __typename: "ModelReturnsInventoryConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userInfoUserId?: string | null;
  } | null;
};

export type UpdateUserInfoMutationVariables = {
  input: UpdateUserInfoInput;
  condition?: ModelUserInfoConditionInput | null;
};

export type UpdateUserInfoMutation = {
  updateUserInfo?: {
    __typename: "UserInfo";
    id: string;
    name: string;
    phone?: string | null;
    RFC?: string | null;
    gender?: string | null;
    user?: {
      __typename: "User";
      id: string;
      email: string;
      password: string;
      rolID: string;
      hasBranchOffice?: boolean | null;
      createdAt: string;
      updatedAt: string;
      userUserInfoId?: string | null;
    } | null;
    companyExpenses?: {
      __typename: "ModelCompanyExpensesConnection";
      nextToken?: string | null;
    } | null;
    salesOperation?: {
      __typename: "ModelSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    incomeInventories?: {
      __typename: "ModelIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoriesRequest?: {
      __typename: "ModelIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventories?: {
      __typename: "ModelOutcomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventoriesRequest?: {
      __typename: "ModelOutcomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    returnsInventory?: {
      __typename: "ModelReturnsInventoryConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userInfoUserId?: string | null;
  } | null;
};

export type DeleteUserInfoMutationVariables = {
  input: DeleteUserInfoInput;
  condition?: ModelUserInfoConditionInput | null;
};

export type DeleteUserInfoMutation = {
  deleteUserInfo?: {
    __typename: "UserInfo";
    id: string;
    name: string;
    phone?: string | null;
    RFC?: string | null;
    gender?: string | null;
    user?: {
      __typename: "User";
      id: string;
      email: string;
      password: string;
      rolID: string;
      hasBranchOffice?: boolean | null;
      createdAt: string;
      updatedAt: string;
      userUserInfoId?: string | null;
    } | null;
    companyExpenses?: {
      __typename: "ModelCompanyExpensesConnection";
      nextToken?: string | null;
    } | null;
    salesOperation?: {
      __typename: "ModelSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    incomeInventories?: {
      __typename: "ModelIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoriesRequest?: {
      __typename: "ModelIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventories?: {
      __typename: "ModelOutcomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventoriesRequest?: {
      __typename: "ModelOutcomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    returnsInventory?: {
      __typename: "ModelReturnsInventoryConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userInfoUserId?: string | null;
  } | null;
};

export type CreateInventoryMutationVariables = {
  input: CreateInventoryInput;
  condition?: ModelInventoryConditionInput | null;
};

export type CreateInventoryMutation = {
  createInventory?: {
    __typename: "Inventory";
    id: string;
    name: string;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    inventoryOperations?: {
      __typename: "ModelInventoryOperationConnection";
      nextToken?: string | null;
    } | null;
    inventoryProduct?: {
      __typename: "ModelInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    isMain?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateInventoryMutationVariables = {
  input: UpdateInventoryInput;
  condition?: ModelInventoryConditionInput | null;
};

export type UpdateInventoryMutation = {
  updateInventory?: {
    __typename: "Inventory";
    id: string;
    name: string;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    inventoryOperations?: {
      __typename: "ModelInventoryOperationConnection";
      nextToken?: string | null;
    } | null;
    inventoryProduct?: {
      __typename: "ModelInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    isMain?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteInventoryMutationVariables = {
  input: DeleteInventoryInput;
  condition?: ModelInventoryConditionInput | null;
};

export type DeleteInventoryMutation = {
  deleteInventory?: {
    __typename: "Inventory";
    id: string;
    name: string;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    inventoryOperations?: {
      __typename: "ModelInventoryOperationConnection";
      nextToken?: string | null;
    } | null;
    inventoryProduct?: {
      __typename: "ModelInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    isMain?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateInventoryProductMutationVariables = {
  input: CreateInventoryProductInput;
  condition?: ModelInventoryProductConditionInput | null;
};

export type CreateInventoryProductMutation = {
  createInventoryProduct?: {
    __typename: "InventoryProduct";
    id: string;
    inventoryID: string;
    inventory?: {
      __typename: "Inventory";
      id: string;
      name: string;
      branchOfficeID?: string | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    productID: string;
    product?: {
      __typename: "Product";
      id: string;
      class_id: number;
      category_id: number;
      subcategory_id: number;
      name: string;
      description?: string | null;
      price: number;
      commission?: number | null;
      hasCommission?: boolean | null;
      hasDiscount?: boolean | null;
      productProviderID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    quantity: number;
    customPrice?: number | null;
    generalPrice?: number | null;
    productProviderID?: string | null;
    productProvider?: {
      __typename: "ProductProvider";
      id: string;
      createdAt: string;
      updatedAt: string;
      productProviderProviderIDId?: string | null;
    } | null;
    discounts?: {
      __typename: "ModelDiscountInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductIncomeInventory?: {
      __typename: "ModelInventoryProductIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductIncomeInventoryRequests?: {
      __typename: "ModelInventoryProductIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductOutcomeInventory?: {
      __typename: "ModelInventoryProductOutcomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductOutcomeInventoryRequests?: {
      __typename: "ModelInventoryProductOutcomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductSalesOperation?: {
      __typename: "ModelInventoryProductSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    returnsInventory?: {
      __typename: "ModelInventoryProductReturnsInventoryConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateInventoryProductMutationVariables = {
  input: UpdateInventoryProductInput;
  condition?: ModelInventoryProductConditionInput | null;
};

export type UpdateInventoryProductMutation = {
  updateInventoryProduct?: {
    __typename: "InventoryProduct";
    id: string;
    inventoryID: string;
    inventory?: {
      __typename: "Inventory";
      id: string;
      name: string;
      branchOfficeID?: string | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    productID: string;
    product?: {
      __typename: "Product";
      id: string;
      class_id: number;
      category_id: number;
      subcategory_id: number;
      name: string;
      description?: string | null;
      price: number;
      commission?: number | null;
      hasCommission?: boolean | null;
      hasDiscount?: boolean | null;
      productProviderID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    quantity: number;
    customPrice?: number | null;
    generalPrice?: number | null;
    productProviderID?: string | null;
    productProvider?: {
      __typename: "ProductProvider";
      id: string;
      createdAt: string;
      updatedAt: string;
      productProviderProviderIDId?: string | null;
    } | null;
    discounts?: {
      __typename: "ModelDiscountInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductIncomeInventory?: {
      __typename: "ModelInventoryProductIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductIncomeInventoryRequests?: {
      __typename: "ModelInventoryProductIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductOutcomeInventory?: {
      __typename: "ModelInventoryProductOutcomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductOutcomeInventoryRequests?: {
      __typename: "ModelInventoryProductOutcomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductSalesOperation?: {
      __typename: "ModelInventoryProductSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    returnsInventory?: {
      __typename: "ModelInventoryProductReturnsInventoryConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteInventoryProductMutationVariables = {
  input: DeleteInventoryProductInput;
  condition?: ModelInventoryProductConditionInput | null;
};

export type DeleteInventoryProductMutation = {
  deleteInventoryProduct?: {
    __typename: "InventoryProduct";
    id: string;
    inventoryID: string;
    inventory?: {
      __typename: "Inventory";
      id: string;
      name: string;
      branchOfficeID?: string | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    productID: string;
    product?: {
      __typename: "Product";
      id: string;
      class_id: number;
      category_id: number;
      subcategory_id: number;
      name: string;
      description?: string | null;
      price: number;
      commission?: number | null;
      hasCommission?: boolean | null;
      hasDiscount?: boolean | null;
      productProviderID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    quantity: number;
    customPrice?: number | null;
    generalPrice?: number | null;
    productProviderID?: string | null;
    productProvider?: {
      __typename: "ProductProvider";
      id: string;
      createdAt: string;
      updatedAt: string;
      productProviderProviderIDId?: string | null;
    } | null;
    discounts?: {
      __typename: "ModelDiscountInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductIncomeInventory?: {
      __typename: "ModelInventoryProductIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductIncomeInventoryRequests?: {
      __typename: "ModelInventoryProductIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductOutcomeInventory?: {
      __typename: "ModelInventoryProductOutcomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductOutcomeInventoryRequests?: {
      __typename: "ModelInventoryProductOutcomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductSalesOperation?: {
      __typename: "ModelInventoryProductSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    returnsInventory?: {
      __typename: "ModelInventoryProductReturnsInventoryConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateBranchOfficeMutationVariables = {
  input: CreateBranchOfficeInput;
  condition?: ModelBranchOfficeConditionInput | null;
};

export type CreateBranchOfficeMutation = {
  createBranchOffice?: {
    __typename: "BranchOffice";
    id: string;
    name: string;
    zipcode?: string | null;
    state?: string | null;
    location: string;
    address?: string | null;
    phone?: string | null;
    branchOffice_commission?: number | null;
    inventories?: {
      __typename: "ModelInventoryConnection";
      nextToken?: string | null;
    } | null;
    isMain?: boolean | null;
    creditRequests?: {
      __typename: "ModelCreditRequestsConnection";
      nextToken?: string | null;
    } | null;
    companyExpenses?: {
      __typename: "ModelCompanyExpensesConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelBranchOfficeUserConnection";
      nextToken?: string | null;
    } | null;
    clients?: {
      __typename: "ModelClientConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventories?: {
      __typename: "ModelOutcomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventoriesRequest?: {
      __typename: "ModelOutcomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    incomeInventories?: {
      __typename: "ModelIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoriesRequest?: {
      __typename: "ModelIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    salesOperations?: {
      __typename: "ModelSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateBranchOfficeMutationVariables = {
  input: UpdateBranchOfficeInput;
  condition?: ModelBranchOfficeConditionInput | null;
};

export type UpdateBranchOfficeMutation = {
  updateBranchOffice?: {
    __typename: "BranchOffice";
    id: string;
    name: string;
    zipcode?: string | null;
    state?: string | null;
    location: string;
    address?: string | null;
    phone?: string | null;
    branchOffice_commission?: number | null;
    inventories?: {
      __typename: "ModelInventoryConnection";
      nextToken?: string | null;
    } | null;
    isMain?: boolean | null;
    creditRequests?: {
      __typename: "ModelCreditRequestsConnection";
      nextToken?: string | null;
    } | null;
    companyExpenses?: {
      __typename: "ModelCompanyExpensesConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelBranchOfficeUserConnection";
      nextToken?: string | null;
    } | null;
    clients?: {
      __typename: "ModelClientConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventories?: {
      __typename: "ModelOutcomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventoriesRequest?: {
      __typename: "ModelOutcomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    incomeInventories?: {
      __typename: "ModelIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoriesRequest?: {
      __typename: "ModelIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    salesOperations?: {
      __typename: "ModelSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteBranchOfficeMutationVariables = {
  input: DeleteBranchOfficeInput;
  condition?: ModelBranchOfficeConditionInput | null;
};

export type DeleteBranchOfficeMutation = {
  deleteBranchOffice?: {
    __typename: "BranchOffice";
    id: string;
    name: string;
    zipcode?: string | null;
    state?: string | null;
    location: string;
    address?: string | null;
    phone?: string | null;
    branchOffice_commission?: number | null;
    inventories?: {
      __typename: "ModelInventoryConnection";
      nextToken?: string | null;
    } | null;
    isMain?: boolean | null;
    creditRequests?: {
      __typename: "ModelCreditRequestsConnection";
      nextToken?: string | null;
    } | null;
    companyExpenses?: {
      __typename: "ModelCompanyExpensesConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelBranchOfficeUserConnection";
      nextToken?: string | null;
    } | null;
    clients?: {
      __typename: "ModelClientConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventories?: {
      __typename: "ModelOutcomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventoriesRequest?: {
      __typename: "ModelOutcomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    incomeInventories?: {
      __typename: "ModelIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoriesRequest?: {
      __typename: "ModelIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    salesOperations?: {
      __typename: "ModelSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateDiscountsMutationVariables = {
  input: CreateDiscountsInput;
  condition?: ModelDiscountsConditionInput | null;
};

export type CreateDiscountsMutation = {
  createDiscounts?: {
    __typename: "Discounts";
    id: string;
    discount: number;
    inventoryProducts?: {
      __typename: "ModelDiscountInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateDiscountsMutationVariables = {
  input: UpdateDiscountsInput;
  condition?: ModelDiscountsConditionInput | null;
};

export type UpdateDiscountsMutation = {
  updateDiscounts?: {
    __typename: "Discounts";
    id: string;
    discount: number;
    inventoryProducts?: {
      __typename: "ModelDiscountInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteDiscountsMutationVariables = {
  input: DeleteDiscountsInput;
  condition?: ModelDiscountsConditionInput | null;
};

export type DeleteDiscountsMutation = {
  deleteDiscounts?: {
    __typename: "Discounts";
    id: string;
    discount: number;
    inventoryProducts?: {
      __typename: "ModelDiscountInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateSalesOperationMutationVariables = {
  input: CreateSalesOperationInput;
  condition?: ModelSalesOperationConditionInput | null;
};

export type CreateSalesOperationMutation = {
  createSalesOperation?: {
    __typename: "SalesOperation";
    id: string;
    date?: string | null;
    total?: number | null;
    totalCash?: number | null;
    totalCommission?: number | null;
    nonRegisteredClientID?: string | null;
    nonRegisteredClient?: {
      __typename: "NonRegisteredClient";
      id: string;
      fullName: string;
      createdAt: string;
      updatedAt: string;
      nonRegisteredClientSaleOperationId?: string | null;
    } | null;
    pendingToPay?: number | null;
    amountPaid?: number | null;
    salesOperationType: SalesOperationType;
    status: SalesOperationStatus;
    monthsToPay?: number | null;
    termDaysToPay?: SalesOperationTermDaysToPay | null;
    totalPayments?: number | null;
    currentTotalPayments?: number | null;
    lastPaymentDate?: string | null;
    lastDatePaid?: string | null;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userInfoID?: string | null;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID: string;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    salesOperationInventoryProductQuantities?: {
      __typename: "ModelSalesOperationInventoryProductQuantityConnection";
      nextToken?: string | null;
    } | null;
    salesOperationClientCreditMovements?: {
      __typename: "ModelSalesOperationClientCreditMovementsConnection";
      nextToken?: string | null;
    } | null;
    salesOperationClientCreditFirstLastPayment?: {
      __typename: "ModelSalesOperationClientCreditFirstLastPaymentConnection";
      nextToken?: string | null;
    } | null;
    salesOperationCustomerSubscription?: {
      __typename: "ModelSalesOperationCustomerSubscriptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    salesOperationInventoryOperationIDId?: string | null;
  } | null;
};

export type UpdateSalesOperationMutationVariables = {
  input: UpdateSalesOperationInput;
  condition?: ModelSalesOperationConditionInput | null;
};

export type UpdateSalesOperationMutation = {
  updateSalesOperation?: {
    __typename: "SalesOperation";
    id: string;
    date?: string | null;
    total?: number | null;
    totalCash?: number | null;
    totalCommission?: number | null;
    nonRegisteredClientID?: string | null;
    nonRegisteredClient?: {
      __typename: "NonRegisteredClient";
      id: string;
      fullName: string;
      createdAt: string;
      updatedAt: string;
      nonRegisteredClientSaleOperationId?: string | null;
    } | null;
    pendingToPay?: number | null;
    amountPaid?: number | null;
    salesOperationType: SalesOperationType;
    status: SalesOperationStatus;
    monthsToPay?: number | null;
    termDaysToPay?: SalesOperationTermDaysToPay | null;
    totalPayments?: number | null;
    currentTotalPayments?: number | null;
    lastPaymentDate?: string | null;
    lastDatePaid?: string | null;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userInfoID?: string | null;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID: string;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    salesOperationInventoryProductQuantities?: {
      __typename: "ModelSalesOperationInventoryProductQuantityConnection";
      nextToken?: string | null;
    } | null;
    salesOperationClientCreditMovements?: {
      __typename: "ModelSalesOperationClientCreditMovementsConnection";
      nextToken?: string | null;
    } | null;
    salesOperationClientCreditFirstLastPayment?: {
      __typename: "ModelSalesOperationClientCreditFirstLastPaymentConnection";
      nextToken?: string | null;
    } | null;
    salesOperationCustomerSubscription?: {
      __typename: "ModelSalesOperationCustomerSubscriptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    salesOperationInventoryOperationIDId?: string | null;
  } | null;
};

export type DeleteSalesOperationMutationVariables = {
  input: DeleteSalesOperationInput;
  condition?: ModelSalesOperationConditionInput | null;
};

export type DeleteSalesOperationMutation = {
  deleteSalesOperation?: {
    __typename: "SalesOperation";
    id: string;
    date?: string | null;
    total?: number | null;
    totalCash?: number | null;
    totalCommission?: number | null;
    nonRegisteredClientID?: string | null;
    nonRegisteredClient?: {
      __typename: "NonRegisteredClient";
      id: string;
      fullName: string;
      createdAt: string;
      updatedAt: string;
      nonRegisteredClientSaleOperationId?: string | null;
    } | null;
    pendingToPay?: number | null;
    amountPaid?: number | null;
    salesOperationType: SalesOperationType;
    status: SalesOperationStatus;
    monthsToPay?: number | null;
    termDaysToPay?: SalesOperationTermDaysToPay | null;
    totalPayments?: number | null;
    currentTotalPayments?: number | null;
    lastPaymentDate?: string | null;
    lastDatePaid?: string | null;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userInfoID?: string | null;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID: string;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    salesOperationInventoryProductQuantities?: {
      __typename: "ModelSalesOperationInventoryProductQuantityConnection";
      nextToken?: string | null;
    } | null;
    salesOperationClientCreditMovements?: {
      __typename: "ModelSalesOperationClientCreditMovementsConnection";
      nextToken?: string | null;
    } | null;
    salesOperationClientCreditFirstLastPayment?: {
      __typename: "ModelSalesOperationClientCreditFirstLastPaymentConnection";
      nextToken?: string | null;
    } | null;
    salesOperationCustomerSubscription?: {
      __typename: "ModelSalesOperationCustomerSubscriptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    salesOperationInventoryOperationIDId?: string | null;
  } | null;
};

export type CreateSalesOperationClientCreditFirstLastPaymentMutationVariables =
  {
    input: CreateSalesOperationClientCreditFirstLastPaymentInput;
    condition?: ModelSalesOperationClientCreditFirstLastPaymentConditionInput | null;
  };

export type CreateSalesOperationClientCreditFirstLastPaymentMutation = {
  createSalesOperationClientCreditFirstLastPayment?: {
    __typename: "SalesOperationClientCreditFirstLastPayment";
    id: string;
    salesOperationID: string;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    startDate?: string | null;
    endDate?: string | null;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateSalesOperationClientCreditFirstLastPaymentMutationVariables =
  {
    input: UpdateSalesOperationClientCreditFirstLastPaymentInput;
    condition?: ModelSalesOperationClientCreditFirstLastPaymentConditionInput | null;
  };

export type UpdateSalesOperationClientCreditFirstLastPaymentMutation = {
  updateSalesOperationClientCreditFirstLastPayment?: {
    __typename: "SalesOperationClientCreditFirstLastPayment";
    id: string;
    salesOperationID: string;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    startDate?: string | null;
    endDate?: string | null;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteSalesOperationClientCreditFirstLastPaymentMutationVariables =
  {
    input: DeleteSalesOperationClientCreditFirstLastPaymentInput;
    condition?: ModelSalesOperationClientCreditFirstLastPaymentConditionInput | null;
  };

export type DeleteSalesOperationClientCreditFirstLastPaymentMutation = {
  deleteSalesOperationClientCreditFirstLastPayment?: {
    __typename: "SalesOperationClientCreditFirstLastPayment";
    id: string;
    salesOperationID: string;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    startDate?: string | null;
    endDate?: string | null;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateSalesOperationClientCreditMovementsMutationVariables = {
  input: CreateSalesOperationClientCreditMovementsInput;
  condition?: ModelSalesOperationClientCreditMovementsConditionInput | null;
};

export type CreateSalesOperationClientCreditMovementsMutation = {
  createSalesOperationClientCreditMovements?: {
    __typename: "SalesOperationClientCreditMovements";
    id: string;
    salesOperationID: string;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    paymentDate?: string | null;
    datePaid?: string | null;
    amountToPay: number;
    pendingToPay?: number | null;
    amountPaid?: number | null;
    status: SalesOperationClientCreditMovementStatus;
    numberOfPayment?: number | null;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateSalesOperationClientCreditMovementsMutationVariables = {
  input: UpdateSalesOperationClientCreditMovementsInput;
  condition?: ModelSalesOperationClientCreditMovementsConditionInput | null;
};

export type UpdateSalesOperationClientCreditMovementsMutation = {
  updateSalesOperationClientCreditMovements?: {
    __typename: "SalesOperationClientCreditMovements";
    id: string;
    salesOperationID: string;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    paymentDate?: string | null;
    datePaid?: string | null;
    amountToPay: number;
    pendingToPay?: number | null;
    amountPaid?: number | null;
    status: SalesOperationClientCreditMovementStatus;
    numberOfPayment?: number | null;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteSalesOperationClientCreditMovementsMutationVariables = {
  input: DeleteSalesOperationClientCreditMovementsInput;
  condition?: ModelSalesOperationClientCreditMovementsConditionInput | null;
};

export type DeleteSalesOperationClientCreditMovementsMutation = {
  deleteSalesOperationClientCreditMovements?: {
    __typename: "SalesOperationClientCreditMovements";
    id: string;
    salesOperationID: string;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    paymentDate?: string | null;
    datePaid?: string | null;
    amountToPay: number;
    pendingToPay?: number | null;
    amountPaid?: number | null;
    status: SalesOperationClientCreditMovementStatus;
    numberOfPayment?: number | null;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateSalesOperationInventoryProductQuantityMutationVariables = {
  input: CreateSalesOperationInventoryProductQuantityInput;
  condition?: ModelSalesOperationInventoryProductQuantityConditionInput | null;
};

export type CreateSalesOperationInventoryProductQuantityMutation = {
  createSalesOperationInventoryProductQuantity?: {
    __typename: "SalesOperationInventoryProductQuantity";
    id: string;
    name?: string | null;
    salesOperationID: string;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    inventoryProducts?: {
      __typename: "ModelInventoryProductSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    soldProductQuantity: number;
    withDiscount?: boolean | null;
    discountPercentage?: number | null;
    discountPerProduct?: number | null;
    totalDiscounted?: number | null;
    productPriceWithDiscount?: number | null;
    amountToPayWithDiscount?: number | null;
    amountToPay: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateSalesOperationInventoryProductQuantityMutationVariables = {
  input: UpdateSalesOperationInventoryProductQuantityInput;
  condition?: ModelSalesOperationInventoryProductQuantityConditionInput | null;
};

export type UpdateSalesOperationInventoryProductQuantityMutation = {
  updateSalesOperationInventoryProductQuantity?: {
    __typename: "SalesOperationInventoryProductQuantity";
    id: string;
    name?: string | null;
    salesOperationID: string;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    inventoryProducts?: {
      __typename: "ModelInventoryProductSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    soldProductQuantity: number;
    withDiscount?: boolean | null;
    discountPercentage?: number | null;
    discountPerProduct?: number | null;
    totalDiscounted?: number | null;
    productPriceWithDiscount?: number | null;
    amountToPayWithDiscount?: number | null;
    amountToPay: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteSalesOperationInventoryProductQuantityMutationVariables = {
  input: DeleteSalesOperationInventoryProductQuantityInput;
  condition?: ModelSalesOperationInventoryProductQuantityConditionInput | null;
};

export type DeleteSalesOperationInventoryProductQuantityMutation = {
  deleteSalesOperationInventoryProductQuantity?: {
    __typename: "SalesOperationInventoryProductQuantity";
    id: string;
    name?: string | null;
    salesOperationID: string;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    inventoryProducts?: {
      __typename: "ModelInventoryProductSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    soldProductQuantity: number;
    withDiscount?: boolean | null;
    discountPercentage?: number | null;
    discountPerProduct?: number | null;
    totalDiscounted?: number | null;
    productPriceWithDiscount?: number | null;
    amountToPayWithDiscount?: number | null;
    amountToPay: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateCompanyExpensesMutationVariables = {
  input: CreateCompanyExpensesInput;
  condition?: ModelCompanyExpensesConditionInput | null;
};

export type CreateCompanyExpensesMutation = {
  createCompanyExpenses?: {
    __typename: "CompanyExpenses";
    id: string;
    name: string;
    description?: string | null;
    costType: CostType;
    date?: string | null;
    amount: number;
    userInfoID?: string | null;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateCompanyExpensesMutationVariables = {
  input: UpdateCompanyExpensesInput;
  condition?: ModelCompanyExpensesConditionInput | null;
};

export type UpdateCompanyExpensesMutation = {
  updateCompanyExpenses?: {
    __typename: "CompanyExpenses";
    id: string;
    name: string;
    description?: string | null;
    costType: CostType;
    date?: string | null;
    amount: number;
    userInfoID?: string | null;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteCompanyExpensesMutationVariables = {
  input: DeleteCompanyExpensesInput;
  condition?: ModelCompanyExpensesConditionInput | null;
};

export type DeleteCompanyExpensesMutation = {
  deleteCompanyExpenses?: {
    __typename: "CompanyExpenses";
    id: string;
    name: string;
    description?: string | null;
    costType: CostType;
    date?: string | null;
    amount: number;
    userInfoID?: string | null;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateSalesOperationCustomerSubscriptionMutationVariables = {
  input: CreateSalesOperationCustomerSubscriptionInput;
  condition?: ModelSalesOperationCustomerSubscriptionConditionInput | null;
};

export type CreateSalesOperationCustomerSubscriptionMutation = {
  createSalesOperationCustomerSubscription?: {
    __typename: "SalesOperationCustomerSubscription";
    id: string;
    salesOperationID: string;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    date?: string | null;
    advancePayment?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateSalesOperationCustomerSubscriptionMutationVariables = {
  input: UpdateSalesOperationCustomerSubscriptionInput;
  condition?: ModelSalesOperationCustomerSubscriptionConditionInput | null;
};

export type UpdateSalesOperationCustomerSubscriptionMutation = {
  updateSalesOperationCustomerSubscription?: {
    __typename: "SalesOperationCustomerSubscription";
    id: string;
    salesOperationID: string;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    date?: string | null;
    advancePayment?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteSalesOperationCustomerSubscriptionMutationVariables = {
  input: DeleteSalesOperationCustomerSubscriptionInput;
  condition?: ModelSalesOperationCustomerSubscriptionConditionInput | null;
};

export type DeleteSalesOperationCustomerSubscriptionMutation = {
  deleteSalesOperationCustomerSubscription?: {
    __typename: "SalesOperationCustomerSubscription";
    id: string;
    salesOperationID: string;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    date?: string | null;
    advancePayment?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateProviderMutationVariables = {
  input: CreateProviderInput;
  condition?: ModelProviderConditionInput | null;
};

export type CreateProviderMutation = {
  createProvider?: {
    __typename: "Provider";
    id: string;
    enterprise_name: string;
    enterprise_RFC?: string | null;
    phone?: string | null;
    fixed_phone?: string | null;
    type?: string | null;
    productprovider?: {
      __typename: "ProductProvider";
      id: string;
      createdAt: string;
      updatedAt: string;
      productProviderProviderIDId?: string | null;
    } | null;
    serviceprovider?: {
      __typename: "ServiceProvider";
      id: string;
      service_name?: string | null;
      service_description?: string | null;
      cost_type?: string | null;
      createdAt: string;
      updatedAt: string;
      serviceProviderProviderIDId?: string | null;
    } | null;
    incomeInventories?: {
      __typename: "ModelIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoriesRequest?: {
      __typename: "ModelIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    providerProductproviderId?: string | null;
    providerServiceproviderId?: string | null;
  } | null;
};

export type UpdateProviderMutationVariables = {
  input: UpdateProviderInput;
  condition?: ModelProviderConditionInput | null;
};

export type UpdateProviderMutation = {
  updateProvider?: {
    __typename: "Provider";
    id: string;
    enterprise_name: string;
    enterprise_RFC?: string | null;
    phone?: string | null;
    fixed_phone?: string | null;
    type?: string | null;
    productprovider?: {
      __typename: "ProductProvider";
      id: string;
      createdAt: string;
      updatedAt: string;
      productProviderProviderIDId?: string | null;
    } | null;
    serviceprovider?: {
      __typename: "ServiceProvider";
      id: string;
      service_name?: string | null;
      service_description?: string | null;
      cost_type?: string | null;
      createdAt: string;
      updatedAt: string;
      serviceProviderProviderIDId?: string | null;
    } | null;
    incomeInventories?: {
      __typename: "ModelIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoriesRequest?: {
      __typename: "ModelIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    providerProductproviderId?: string | null;
    providerServiceproviderId?: string | null;
  } | null;
};

export type DeleteProviderMutationVariables = {
  input: DeleteProviderInput;
  condition?: ModelProviderConditionInput | null;
};

export type DeleteProviderMutation = {
  deleteProvider?: {
    __typename: "Provider";
    id: string;
    enterprise_name: string;
    enterprise_RFC?: string | null;
    phone?: string | null;
    fixed_phone?: string | null;
    type?: string | null;
    productprovider?: {
      __typename: "ProductProvider";
      id: string;
      createdAt: string;
      updatedAt: string;
      productProviderProviderIDId?: string | null;
    } | null;
    serviceprovider?: {
      __typename: "ServiceProvider";
      id: string;
      service_name?: string | null;
      service_description?: string | null;
      cost_type?: string | null;
      createdAt: string;
      updatedAt: string;
      serviceProviderProviderIDId?: string | null;
    } | null;
    incomeInventories?: {
      __typename: "ModelIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoriesRequest?: {
      __typename: "ModelIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    providerProductproviderId?: string | null;
    providerServiceproviderId?: string | null;
  } | null;
};

export type CreateProductProviderMutationVariables = {
  input: CreateProductProviderInput;
  condition?: ModelProductProviderConditionInput | null;
};

export type CreateProductProviderMutation = {
  createProductProvider?: {
    __typename: "ProductProvider";
    id: string;
    responsible?: {
      __typename: "ModelProductProviderResponsibleConnection";
      nextToken?: string | null;
    } | null;
    providerID?: {
      __typename: "Provider";
      id: string;
      enterprise_name: string;
      enterprise_RFC?: string | null;
      phone?: string | null;
      fixed_phone?: string | null;
      type?: string | null;
      createdAt: string;
      updatedAt: string;
      providerProductproviderId?: string | null;
      providerServiceproviderId?: string | null;
    } | null;
    product?: {
      __typename: "ModelProductConnection";
      nextToken?: string | null;
    } | null;
    inventoryProduct?: {
      __typename: "ModelInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    productProviderProviderIDId?: string | null;
  } | null;
};

export type UpdateProductProviderMutationVariables = {
  input: UpdateProductProviderInput;
  condition?: ModelProductProviderConditionInput | null;
};

export type UpdateProductProviderMutation = {
  updateProductProvider?: {
    __typename: "ProductProvider";
    id: string;
    responsible?: {
      __typename: "ModelProductProviderResponsibleConnection";
      nextToken?: string | null;
    } | null;
    providerID?: {
      __typename: "Provider";
      id: string;
      enterprise_name: string;
      enterprise_RFC?: string | null;
      phone?: string | null;
      fixed_phone?: string | null;
      type?: string | null;
      createdAt: string;
      updatedAt: string;
      providerProductproviderId?: string | null;
      providerServiceproviderId?: string | null;
    } | null;
    product?: {
      __typename: "ModelProductConnection";
      nextToken?: string | null;
    } | null;
    inventoryProduct?: {
      __typename: "ModelInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    productProviderProviderIDId?: string | null;
  } | null;
};

export type DeleteProductProviderMutationVariables = {
  input: DeleteProductProviderInput;
  condition?: ModelProductProviderConditionInput | null;
};

export type DeleteProductProviderMutation = {
  deleteProductProvider?: {
    __typename: "ProductProvider";
    id: string;
    responsible?: {
      __typename: "ModelProductProviderResponsibleConnection";
      nextToken?: string | null;
    } | null;
    providerID?: {
      __typename: "Provider";
      id: string;
      enterprise_name: string;
      enterprise_RFC?: string | null;
      phone?: string | null;
      fixed_phone?: string | null;
      type?: string | null;
      createdAt: string;
      updatedAt: string;
      providerProductproviderId?: string | null;
      providerServiceproviderId?: string | null;
    } | null;
    product?: {
      __typename: "ModelProductConnection";
      nextToken?: string | null;
    } | null;
    inventoryProduct?: {
      __typename: "ModelInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    productProviderProviderIDId?: string | null;
  } | null;
};

export type CreateProductProviderResponsibleMutationVariables = {
  input: CreateProductProviderResponsibleInput;
  condition?: ModelProductProviderResponsibleConditionInput | null;
};

export type CreateProductProviderResponsibleMutation = {
  createProductProviderResponsible?: {
    __typename: "ProductProviderResponsible";
    id: string;
    productproviderID: string;
    name: string;
    second_name?: string | null;
    lastname: string;
    second_lastname?: string | null;
    phone: string;
    RFC?: string | null;
    incomeInventories?: {
      __typename: "ModelIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoriesRequest?: {
      __typename: "ModelIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateProductProviderResponsibleMutationVariables = {
  input: UpdateProductProviderResponsibleInput;
  condition?: ModelProductProviderResponsibleConditionInput | null;
};

export type UpdateProductProviderResponsibleMutation = {
  updateProductProviderResponsible?: {
    __typename: "ProductProviderResponsible";
    id: string;
    productproviderID: string;
    name: string;
    second_name?: string | null;
    lastname: string;
    second_lastname?: string | null;
    phone: string;
    RFC?: string | null;
    incomeInventories?: {
      __typename: "ModelIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoriesRequest?: {
      __typename: "ModelIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteProductProviderResponsibleMutationVariables = {
  input: DeleteProductProviderResponsibleInput;
  condition?: ModelProductProviderResponsibleConditionInput | null;
};

export type DeleteProductProviderResponsibleMutation = {
  deleteProductProviderResponsible?: {
    __typename: "ProductProviderResponsible";
    id: string;
    productproviderID: string;
    name: string;
    second_name?: string | null;
    lastname: string;
    second_lastname?: string | null;
    phone: string;
    RFC?: string | null;
    incomeInventories?: {
      __typename: "ModelIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoriesRequest?: {
      __typename: "ModelIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateServiceProviderMutationVariables = {
  input: CreateServiceProviderInput;
  condition?: ModelServiceProviderConditionInput | null;
};

export type CreateServiceProviderMutation = {
  createServiceProvider?: {
    __typename: "ServiceProvider";
    id: string;
    service_name?: string | null;
    service_description?: string | null;
    cost_type?: string | null;
    responsible?: {
      __typename: "ModelServiceProviderResponsibleConnection";
      nextToken?: string | null;
    } | null;
    providerID?: {
      __typename: "Provider";
      id: string;
      enterprise_name: string;
      enterprise_RFC?: string | null;
      phone?: string | null;
      fixed_phone?: string | null;
      type?: string | null;
      createdAt: string;
      updatedAt: string;
      providerProductproviderId?: string | null;
      providerServiceproviderId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    serviceProviderProviderIDId?: string | null;
  } | null;
};

export type UpdateServiceProviderMutationVariables = {
  input: UpdateServiceProviderInput;
  condition?: ModelServiceProviderConditionInput | null;
};

export type UpdateServiceProviderMutation = {
  updateServiceProvider?: {
    __typename: "ServiceProvider";
    id: string;
    service_name?: string | null;
    service_description?: string | null;
    cost_type?: string | null;
    responsible?: {
      __typename: "ModelServiceProviderResponsibleConnection";
      nextToken?: string | null;
    } | null;
    providerID?: {
      __typename: "Provider";
      id: string;
      enterprise_name: string;
      enterprise_RFC?: string | null;
      phone?: string | null;
      fixed_phone?: string | null;
      type?: string | null;
      createdAt: string;
      updatedAt: string;
      providerProductproviderId?: string | null;
      providerServiceproviderId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    serviceProviderProviderIDId?: string | null;
  } | null;
};

export type DeleteServiceProviderMutationVariables = {
  input: DeleteServiceProviderInput;
  condition?: ModelServiceProviderConditionInput | null;
};

export type DeleteServiceProviderMutation = {
  deleteServiceProvider?: {
    __typename: "ServiceProvider";
    id: string;
    service_name?: string | null;
    service_description?: string | null;
    cost_type?: string | null;
    responsible?: {
      __typename: "ModelServiceProviderResponsibleConnection";
      nextToken?: string | null;
    } | null;
    providerID?: {
      __typename: "Provider";
      id: string;
      enterprise_name: string;
      enterprise_RFC?: string | null;
      phone?: string | null;
      fixed_phone?: string | null;
      type?: string | null;
      createdAt: string;
      updatedAt: string;
      providerProductproviderId?: string | null;
      providerServiceproviderId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    serviceProviderProviderIDId?: string | null;
  } | null;
};

export type CreateServiceProviderResponsibleMutationVariables = {
  input: CreateServiceProviderResponsibleInput;
  condition?: ModelServiceProviderResponsibleConditionInput | null;
};

export type CreateServiceProviderResponsibleMutation = {
  createServiceProviderResponsible?: {
    __typename: "ServiceProviderResponsible";
    id: string;
    serviceproviderID: string;
    name: string;
    second_name?: string | null;
    lastname: string;
    second_lastname?: string | null;
    phone?: string | null;
    RFC?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateServiceProviderResponsibleMutationVariables = {
  input: UpdateServiceProviderResponsibleInput;
  condition?: ModelServiceProviderResponsibleConditionInput | null;
};

export type UpdateServiceProviderResponsibleMutation = {
  updateServiceProviderResponsible?: {
    __typename: "ServiceProviderResponsible";
    id: string;
    serviceproviderID: string;
    name: string;
    second_name?: string | null;
    lastname: string;
    second_lastname?: string | null;
    phone?: string | null;
    RFC?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteServiceProviderResponsibleMutationVariables = {
  input: DeleteServiceProviderResponsibleInput;
  condition?: ModelServiceProviderResponsibleConditionInput | null;
};

export type DeleteServiceProviderResponsibleMutation = {
  deleteServiceProviderResponsible?: {
    __typename: "ServiceProviderResponsible";
    id: string;
    serviceproviderID: string;
    name: string;
    second_name?: string | null;
    lastname: string;
    second_lastname?: string | null;
    phone?: string | null;
    RFC?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateInventoryProductIncomeInventoryMutationVariables = {
  input: CreateInventoryProductIncomeInventoryInput;
  condition?: ModelInventoryProductIncomeInventoryConditionInput | null;
};

export type CreateInventoryProductIncomeInventoryMutation = {
  createInventoryProductIncomeInventory?: {
    __typename: "InventoryProductIncomeInventory";
    id: string;
    incomeInventoryProductQuantityId: string;
    inventoryProductId: string;
    incomeInventoryProductQuantity: {
      __typename: "IncomeInventoryProductQuantity";
      id: string;
      incomeQuantity: number;
      incomeInventoryID: string;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateInventoryProductIncomeInventoryMutationVariables = {
  input: UpdateInventoryProductIncomeInventoryInput;
  condition?: ModelInventoryProductIncomeInventoryConditionInput | null;
};

export type UpdateInventoryProductIncomeInventoryMutation = {
  updateInventoryProductIncomeInventory?: {
    __typename: "InventoryProductIncomeInventory";
    id: string;
    incomeInventoryProductQuantityId: string;
    inventoryProductId: string;
    incomeInventoryProductQuantity: {
      __typename: "IncomeInventoryProductQuantity";
      id: string;
      incomeQuantity: number;
      incomeInventoryID: string;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteInventoryProductIncomeInventoryMutationVariables = {
  input: DeleteInventoryProductIncomeInventoryInput;
  condition?: ModelInventoryProductIncomeInventoryConditionInput | null;
};

export type DeleteInventoryProductIncomeInventoryMutation = {
  deleteInventoryProductIncomeInventory?: {
    __typename: "InventoryProductIncomeInventory";
    id: string;
    incomeInventoryProductQuantityId: string;
    inventoryProductId: string;
    incomeInventoryProductQuantity: {
      __typename: "IncomeInventoryProductQuantity";
      id: string;
      incomeQuantity: number;
      incomeInventoryID: string;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateInventoryProductIncomeInventoryRequestMutationVariables = {
  input: CreateInventoryProductIncomeInventoryRequestInput;
  condition?: ModelInventoryProductIncomeInventoryRequestConditionInput | null;
};

export type CreateInventoryProductIncomeInventoryRequestMutation = {
  createInventoryProductIncomeInventoryRequest?: {
    __typename: "InventoryProductIncomeInventoryRequest";
    id: string;
    incomeInventoryProductQuantityRequestId: string;
    inventoryProductId: string;
    incomeInventoryProductQuantityRequest: {
      __typename: "IncomeInventoryProductQuantityRequest";
      id: string;
      incomeQuantity: number;
      incomeInventoryRequestID: string;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateInventoryProductIncomeInventoryRequestMutationVariables = {
  input: UpdateInventoryProductIncomeInventoryRequestInput;
  condition?: ModelInventoryProductIncomeInventoryRequestConditionInput | null;
};

export type UpdateInventoryProductIncomeInventoryRequestMutation = {
  updateInventoryProductIncomeInventoryRequest?: {
    __typename: "InventoryProductIncomeInventoryRequest";
    id: string;
    incomeInventoryProductQuantityRequestId: string;
    inventoryProductId: string;
    incomeInventoryProductQuantityRequest: {
      __typename: "IncomeInventoryProductQuantityRequest";
      id: string;
      incomeQuantity: number;
      incomeInventoryRequestID: string;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteInventoryProductIncomeInventoryRequestMutationVariables = {
  input: DeleteInventoryProductIncomeInventoryRequestInput;
  condition?: ModelInventoryProductIncomeInventoryRequestConditionInput | null;
};

export type DeleteInventoryProductIncomeInventoryRequestMutation = {
  deleteInventoryProductIncomeInventoryRequest?: {
    __typename: "InventoryProductIncomeInventoryRequest";
    id: string;
    incomeInventoryProductQuantityRequestId: string;
    inventoryProductId: string;
    incomeInventoryProductQuantityRequest: {
      __typename: "IncomeInventoryProductQuantityRequest";
      id: string;
      incomeQuantity: number;
      incomeInventoryRequestID: string;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateInventoryProductOutcomeInventoryMutationVariables = {
  input: CreateInventoryProductOutcomeInventoryInput;
  condition?: ModelInventoryProductOutcomeInventoryConditionInput | null;
};

export type CreateInventoryProductOutcomeInventoryMutation = {
  createInventoryProductOutcomeInventory?: {
    __typename: "InventoryProductOutcomeInventory";
    id: string;
    outcomeInventoryProductQuantityId: string;
    inventoryProductId: string;
    outcomeInventoryProductQuantity: {
      __typename: "OutcomeInventoryProductQuantity";
      id: string;
      outcomeQuantity: number;
      outcomeInventoryID: string;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateInventoryProductOutcomeInventoryMutationVariables = {
  input: UpdateInventoryProductOutcomeInventoryInput;
  condition?: ModelInventoryProductOutcomeInventoryConditionInput | null;
};

export type UpdateInventoryProductOutcomeInventoryMutation = {
  updateInventoryProductOutcomeInventory?: {
    __typename: "InventoryProductOutcomeInventory";
    id: string;
    outcomeInventoryProductQuantityId: string;
    inventoryProductId: string;
    outcomeInventoryProductQuantity: {
      __typename: "OutcomeInventoryProductQuantity";
      id: string;
      outcomeQuantity: number;
      outcomeInventoryID: string;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteInventoryProductOutcomeInventoryMutationVariables = {
  input: DeleteInventoryProductOutcomeInventoryInput;
  condition?: ModelInventoryProductOutcomeInventoryConditionInput | null;
};

export type DeleteInventoryProductOutcomeInventoryMutation = {
  deleteInventoryProductOutcomeInventory?: {
    __typename: "InventoryProductOutcomeInventory";
    id: string;
    outcomeInventoryProductQuantityId: string;
    inventoryProductId: string;
    outcomeInventoryProductQuantity: {
      __typename: "OutcomeInventoryProductQuantity";
      id: string;
      outcomeQuantity: number;
      outcomeInventoryID: string;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateInventoryProductOutcomeInventoryRequestMutationVariables = {
  input: CreateInventoryProductOutcomeInventoryRequestInput;
  condition?: ModelInventoryProductOutcomeInventoryRequestConditionInput | null;
};

export type CreateInventoryProductOutcomeInventoryRequestMutation = {
  createInventoryProductOutcomeInventoryRequest?: {
    __typename: "InventoryProductOutcomeInventoryRequest";
    id: string;
    outcomeInventoryProductQuantityRequestId: string;
    inventoryProductId: string;
    outcomeInventoryProductQuantityRequest: {
      __typename: "OutcomeInventoryProductQuantityRequest";
      id: string;
      outcomeRequestQuantity: number;
      outcomeInventoryRequestID: string;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateInventoryProductOutcomeInventoryRequestMutationVariables = {
  input: UpdateInventoryProductOutcomeInventoryRequestInput;
  condition?: ModelInventoryProductOutcomeInventoryRequestConditionInput | null;
};

export type UpdateInventoryProductOutcomeInventoryRequestMutation = {
  updateInventoryProductOutcomeInventoryRequest?: {
    __typename: "InventoryProductOutcomeInventoryRequest";
    id: string;
    outcomeInventoryProductQuantityRequestId: string;
    inventoryProductId: string;
    outcomeInventoryProductQuantityRequest: {
      __typename: "OutcomeInventoryProductQuantityRequest";
      id: string;
      outcomeRequestQuantity: number;
      outcomeInventoryRequestID: string;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteInventoryProductOutcomeInventoryRequestMutationVariables = {
  input: DeleteInventoryProductOutcomeInventoryRequestInput;
  condition?: ModelInventoryProductOutcomeInventoryRequestConditionInput | null;
};

export type DeleteInventoryProductOutcomeInventoryRequestMutation = {
  deleteInventoryProductOutcomeInventoryRequest?: {
    __typename: "InventoryProductOutcomeInventoryRequest";
    id: string;
    outcomeInventoryProductQuantityRequestId: string;
    inventoryProductId: string;
    outcomeInventoryProductQuantityRequest: {
      __typename: "OutcomeInventoryProductQuantityRequest";
      id: string;
      outcomeRequestQuantity: number;
      outcomeInventoryRequestID: string;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateInventoryProductReturnsInventoryMutationVariables = {
  input: CreateInventoryProductReturnsInventoryInput;
  condition?: ModelInventoryProductReturnsInventoryConditionInput | null;
};

export type CreateInventoryProductReturnsInventoryMutation = {
  createInventoryProductReturnsInventory?: {
    __typename: "InventoryProductReturnsInventory";
    id: string;
    returnsInventoryId: string;
    inventoryProductId: string;
    returnsInventory: {
      __typename: "ReturnsInventory";
      id: string;
      userInfoID: string;
      clientID: string;
      comments?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateInventoryProductReturnsInventoryMutationVariables = {
  input: UpdateInventoryProductReturnsInventoryInput;
  condition?: ModelInventoryProductReturnsInventoryConditionInput | null;
};

export type UpdateInventoryProductReturnsInventoryMutation = {
  updateInventoryProductReturnsInventory?: {
    __typename: "InventoryProductReturnsInventory";
    id: string;
    returnsInventoryId: string;
    inventoryProductId: string;
    returnsInventory: {
      __typename: "ReturnsInventory";
      id: string;
      userInfoID: string;
      clientID: string;
      comments?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteInventoryProductReturnsInventoryMutationVariables = {
  input: DeleteInventoryProductReturnsInventoryInput;
  condition?: ModelInventoryProductReturnsInventoryConditionInput | null;
};

export type DeleteInventoryProductReturnsInventoryMutation = {
  deleteInventoryProductReturnsInventory?: {
    __typename: "InventoryProductReturnsInventory";
    id: string;
    returnsInventoryId: string;
    inventoryProductId: string;
    returnsInventory: {
      __typename: "ReturnsInventory";
      id: string;
      userInfoID: string;
      clientID: string;
      comments?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateBranchOfficeUserMutationVariables = {
  input: CreateBranchOfficeUserInput;
  condition?: ModelBranchOfficeUserConditionInput | null;
};

export type CreateBranchOfficeUserMutation = {
  createBranchOfficeUser?: {
    __typename: "BranchOfficeUser";
    id: string;
    userId: string;
    branchOfficeId: string;
    user: {
      __typename: "User";
      id: string;
      email: string;
      password: string;
      rolID: string;
      hasBranchOffice?: boolean | null;
      createdAt: string;
      updatedAt: string;
      userUserInfoId?: string | null;
    };
    branchOffice: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateBranchOfficeUserMutationVariables = {
  input: UpdateBranchOfficeUserInput;
  condition?: ModelBranchOfficeUserConditionInput | null;
};

export type UpdateBranchOfficeUserMutation = {
  updateBranchOfficeUser?: {
    __typename: "BranchOfficeUser";
    id: string;
    userId: string;
    branchOfficeId: string;
    user: {
      __typename: "User";
      id: string;
      email: string;
      password: string;
      rolID: string;
      hasBranchOffice?: boolean | null;
      createdAt: string;
      updatedAt: string;
      userUserInfoId?: string | null;
    };
    branchOffice: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteBranchOfficeUserMutationVariables = {
  input: DeleteBranchOfficeUserInput;
  condition?: ModelBranchOfficeUserConditionInput | null;
};

export type DeleteBranchOfficeUserMutation = {
  deleteBranchOfficeUser?: {
    __typename: "BranchOfficeUser";
    id: string;
    userId: string;
    branchOfficeId: string;
    user: {
      __typename: "User";
      id: string;
      email: string;
      password: string;
      rolID: string;
      hasBranchOffice?: boolean | null;
      createdAt: string;
      updatedAt: string;
      userUserInfoId?: string | null;
    };
    branchOffice: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateDiscountInventoryProductMutationVariables = {
  input: CreateDiscountInventoryProductInput;
  condition?: ModelDiscountInventoryProductConditionInput | null;
};

export type CreateDiscountInventoryProductMutation = {
  createDiscountInventoryProduct?: {
    __typename: "DiscountInventoryProduct";
    id: string;
    inventoryProductId: string;
    discountsId: string;
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    discounts: {
      __typename: "Discounts";
      id: string;
      discount: number;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateDiscountInventoryProductMutationVariables = {
  input: UpdateDiscountInventoryProductInput;
  condition?: ModelDiscountInventoryProductConditionInput | null;
};

export type UpdateDiscountInventoryProductMutation = {
  updateDiscountInventoryProduct?: {
    __typename: "DiscountInventoryProduct";
    id: string;
    inventoryProductId: string;
    discountsId: string;
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    discounts: {
      __typename: "Discounts";
      id: string;
      discount: number;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteDiscountInventoryProductMutationVariables = {
  input: DeleteDiscountInventoryProductInput;
  condition?: ModelDiscountInventoryProductConditionInput | null;
};

export type DeleteDiscountInventoryProductMutation = {
  deleteDiscountInventoryProduct?: {
    __typename: "DiscountInventoryProduct";
    id: string;
    inventoryProductId: string;
    discountsId: string;
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    discounts: {
      __typename: "Discounts";
      id: string;
      discount: number;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateInventoryProductSalesOperationMutationVariables = {
  input: CreateInventoryProductSalesOperationInput;
  condition?: ModelInventoryProductSalesOperationConditionInput | null;
};

export type CreateInventoryProductSalesOperationMutation = {
  createInventoryProductSalesOperation?: {
    __typename: "InventoryProductSalesOperation";
    id: string;
    inventoryProductId: string;
    salesOperationInventoryProductQuantityId: string;
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    salesOperationInventoryProductQuantity: {
      __typename: "SalesOperationInventoryProductQuantity";
      id: string;
      name?: string | null;
      salesOperationID: string;
      soldProductQuantity: number;
      withDiscount?: boolean | null;
      discountPercentage?: number | null;
      discountPerProduct?: number | null;
      totalDiscounted?: number | null;
      productPriceWithDiscount?: number | null;
      amountToPayWithDiscount?: number | null;
      amountToPay: number;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateInventoryProductSalesOperationMutationVariables = {
  input: UpdateInventoryProductSalesOperationInput;
  condition?: ModelInventoryProductSalesOperationConditionInput | null;
};

export type UpdateInventoryProductSalesOperationMutation = {
  updateInventoryProductSalesOperation?: {
    __typename: "InventoryProductSalesOperation";
    id: string;
    inventoryProductId: string;
    salesOperationInventoryProductQuantityId: string;
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    salesOperationInventoryProductQuantity: {
      __typename: "SalesOperationInventoryProductQuantity";
      id: string;
      name?: string | null;
      salesOperationID: string;
      soldProductQuantity: number;
      withDiscount?: boolean | null;
      discountPercentage?: number | null;
      discountPerProduct?: number | null;
      totalDiscounted?: number | null;
      productPriceWithDiscount?: number | null;
      amountToPayWithDiscount?: number | null;
      amountToPay: number;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteInventoryProductSalesOperationMutationVariables = {
  input: DeleteInventoryProductSalesOperationInput;
  condition?: ModelInventoryProductSalesOperationConditionInput | null;
};

export type DeleteInventoryProductSalesOperationMutation = {
  deleteInventoryProductSalesOperation?: {
    __typename: "InventoryProductSalesOperation";
    id: string;
    inventoryProductId: string;
    salesOperationInventoryProductQuantityId: string;
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    salesOperationInventoryProductQuantity: {
      __typename: "SalesOperationInventoryProductQuantity";
      id: string;
      name?: string | null;
      salesOperationID: string;
      soldProductQuantity: number;
      withDiscount?: boolean | null;
      discountPercentage?: number | null;
      discountPerProduct?: number | null;
      totalDiscounted?: number | null;
      productPriceWithDiscount?: number | null;
      amountToPayWithDiscount?: number | null;
      amountToPay: number;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type GetCategoryQueryVariables = {
  id: number;
};

export type GetCategoryQuery = {
  getCategory?: {
    __typename: "Category";
    id: number;
    name?: string | null;
    subcategories?: {
      __typename: "ModelSubCategoryConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListCategoriesQueryVariables = {
  id?: number | null;
  filter?: ModelCategoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
};

export type ListCategoriesQuery = {
  listCategories?: {
    __typename: "ModelCategoryConnection";
    items: Array<{
      __typename: "Category";
      id: number;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetSubCategoryQueryVariables = {
  id: number;
};

export type GetSubCategoryQuery = {
  getSubCategory?: {
    __typename: "SubCategory";
    id: number;
    categoryID: number;
    subcategory_name?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListSubCategoriesQueryVariables = {
  id?: number | null;
  filter?: ModelSubCategoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
};

export type ListSubCategoriesQuery = {
  listSubCategories?: {
    __typename: "ModelSubCategoryConnection";
    items: Array<{
      __typename: "SubCategory";
      id: number;
      categoryID: number;
      subcategory_name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetClassQueryVariables = {
  id: number;
};

export type GetClassQuery = {
  getClass?: {
    __typename: "Class";
    id: number;
    name?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListClassesQueryVariables = {
  id?: number | null;
  filter?: ModelClassFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
};

export type ListClassesQuery = {
  listClasses?: {
    __typename: "ModelClassConnection";
    items: Array<{
      __typename: "Class";
      id: number;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetClientQueryVariables = {
  id: string;
};

export type GetClientQuery = {
  getClient?: {
    __typename: "Client";
    id: string;
    name: string;
    second_name?: string | null;
    lastname: string;
    second_lastname?: string | null;
    phone: string;
    fixed_phone?: string | null;
    email?: string | null;
    birthday?: string | null;
    RFC?: string | null;
    address?: string | null;
    settlement?: string | null;
    postal_code?: string | null;
    state?: string | null;
    city?: string | null;
    salesOperation?: {
      __typename: "ModelSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    creditID?: string | null;
    credit?: {
      __typename: "Credits";
      id: string;
      totalCredit: number;
      credit_available: number;
      outstanding_balance?: number | null;
      payment_status: PaymentStatus;
      last_payment_date?: string | null;
      startDate?: string | null;
      createdAt: string;
      updatedAt: string;
      creditsClientId?: string | null;
    } | null;
    creditRequests?: {
      __typename: "ModelCreditRequestsConnection";
      nextToken?: string | null;
    } | null;
    branchOfficeID: string;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    hasCredit: boolean;
    hasCreditRequest?: boolean | null;
    returnsInventory?: {
      __typename: "ModelReturnsInventoryConnection";
      nextToken?: string | null;
    } | null;
    salesOperationClientCreditMovements?: {
      __typename: "ModelSalesOperationClientCreditMovementsConnection";
      nextToken?: string | null;
    } | null;
    salesOperationClientCreditFirstLastPayment?: {
      __typename: "ModelSalesOperationClientCreditFirstLastPaymentConnection";
      nextToken?: string | null;
    } | null;
    salesOperationCustomerSubscription?: {
      __typename: "ModelSalesOperationCustomerSubscriptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListClientsQueryVariables = {
  filter?: ModelClientFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListClientsQuery = {
  listClients?: {
    __typename: "ModelClientConnection";
    items: Array<{
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      salesOperation?: {
        __typename: "ModelSalesOperationConnection";
        nextToken?: string | null;
      } | null;
      creditID?: string | null;
      credit?: {
        __typename: "Credits";
        id: string;
        totalCredit: number;
        credit_available: number;
        outstanding_balance?: number | null;
        payment_status: PaymentStatus;
        last_payment_date?: string | null;
        startDate?: string | null;
        createdAt: string;
        updatedAt: string;
        creditsClientId?: string | null;
      } | null;
      creditRequests?: {
        __typename: "ModelCreditRequestsConnection";
        nextToken?: string | null;
      } | null;
      branchOfficeID: string;
      branchOffice?: {
        __typename: "BranchOffice";
        id: string;
        name: string;
        zipcode?: string | null;
        state?: string | null;
        location: string;
        address?: string | null;
        phone?: string | null;
        branchOffice_commission?: number | null;
        isMain?: boolean | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      returnsInventory?: {
        __typename: "ModelReturnsInventoryConnection";
        nextToken?: string | null;
      } | null;
      salesOperationClientCreditMovements?: {
        __typename: "ModelSalesOperationClientCreditMovementsConnection";
        nextToken?: string | null;
      } | null;
      salesOperationClientCreditFirstLastPayment?: {
        __typename: "ModelSalesOperationClientCreditFirstLastPaymentConnection";
        nextToken?: string | null;
      } | null;
      salesOperationCustomerSubscription?: {
        __typename: "ModelSalesOperationCustomerSubscriptionConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetNonRegisteredClientQueryVariables = {
  id: string;
};

export type GetNonRegisteredClientQuery = {
  getNonRegisteredClient?: {
    __typename: "NonRegisteredClient";
    id: string;
    fullName: string;
    saleOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    nonRegisteredClientSaleOperationId?: string | null;
  } | null;
};

export type ListNonRegisteredClientsQueryVariables = {
  filter?: ModelNonRegisteredClientFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListNonRegisteredClientsQuery = {
  listNonRegisteredClients?: {
    __typename: "ModelNonRegisteredClientConnection";
    items: Array<{
      __typename: "NonRegisteredClient";
      id: string;
      fullName: string;
      createdAt: string;
      updatedAt: string;
      nonRegisteredClientSaleOperationId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetCreditsQueryVariables = {
  id: string;
};

export type GetCreditsQuery = {
  getCredits?: {
    __typename: "Credits";
    id: string;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    totalCredit: number;
    credit_available: number;
    outstanding_balance?: number | null;
    payment_status: PaymentStatus;
    last_payment_date?: string | null;
    startDate?: string | null;
    createdAt: string;
    updatedAt: string;
    creditsClientId?: string | null;
  } | null;
};

export type ListCreditsQueryVariables = {
  filter?: ModelCreditsFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCreditsQuery = {
  listCredits?: {
    __typename: "ModelCreditsConnection";
    items: Array<{
      __typename: "Credits";
      id: string;
      totalCredit: number;
      credit_available: number;
      outstanding_balance?: number | null;
      payment_status: PaymentStatus;
      last_payment_date?: string | null;
      startDate?: string | null;
      createdAt: string;
      updatedAt: string;
      creditsClientId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetCreditRequestsQueryVariables = {
  id: string;
};

export type GetCreditRequestsQuery = {
  getCreditRequests?: {
    __typename: "CreditRequests";
    id: string;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    creditRequestAmount?: number | null;
    creditRequestStatus?: CreditRequestStatus | null;
    creditRequestReason?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListCreditRequestsQueryVariables = {
  filter?: ModelCreditRequestsFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCreditRequestsQuery = {
  listCreditRequests: {
    __typename: "ModelCreditRequestsConnection";
    items: Array<{
      __typename: "CreditRequests";
      id: string;
      clientID?: string | null;
      client?: {
        __typename: "Client";
        id: string;
        name: string;
        second_name?: string | null;
        lastname: string;
        second_lastname?: string | null;
        phone: string;
        fixed_phone?: string | null;
        email?: string | null;
        birthday?: string | null;
        RFC?: string | null;
        address?: string | null;
        settlement?: string | null;
        postal_code?: string | null;
        state?: string | null;
        city?: string | null;
        creditID?: string | null;
        branchOfficeID: string;
        hasCredit: boolean;
        hasCreditRequest?: boolean | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      creditRequestAmount?: number | null;
      creditRequestStatus?: CreditRequestStatus | null;
      creditRequestReason?: string | null;
      createdAt: string;
      updatedAt: string;
      branchOffice?: BranchOffice;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetProductQueryVariables = {
  id: string;
};

export type GetProductQuery = {
  getProduct?: {
    __typename: "Product";
    id: string;
    class_id: number;
    category_id: number;
    subcategory_id: number;
    name: string;
    description?: string | null;
    price: number;
    commission?: number | null;
    hasCommission?: boolean | null;
    hasDiscount?: boolean | null;
    class?: {
      __typename: "Class";
      id: number;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    category?: {
      __typename: "Category";
      id: number;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    subcategory?: {
      __typename: "SubCategory";
      id: number;
      categoryID: number;
      subcategory_name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    productProviderID: string;
    productProvider?: {
      __typename: "ProductProvider";
      id: string;
      createdAt: string;
      updatedAt: string;
      productProviderProviderIDId?: string | null;
    } | null;
    inventoryProduct?: {
      __typename: "ModelInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListProductsQuery = {
  listProducts?: {
    __typename: "ModelProductConnection";
    items: Array<{
      __typename: "Product";
      id: string;
      class_id: number;
      category_id: number;
      subcategory_id: number;
      name: string;
      description?: string | null;
      price: number;
      commission?: number | null;
      hasCommission?: boolean | null;
      hasDiscount?: boolean | null;
      productProviderID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetInventoryOperationQueryVariables = {
  id: string;
};

export type GetInventoryOperationQuery = {
  getInventoryOperation?: {
    __typename: "InventoryOperation";
    id: string;
    operationType: OperationType;
    inventoryID: string;
    inventory: {
      __typename: "Inventory";
      id: string;
      name: string;
      branchOfficeID?: string | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    incomeInventory?: {
      __typename: "IncomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      providerID: string;
      productProviderResponsibleID: string;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      incomeInventoryInventoryOperationIDId?: string | null;
    } | null;
    incomeInventoryRequest?: {
      __typename: "IncomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status: IOInventoryStatus;
      providerID: string;
      productProviderResponsibleID: string;
      branchOfficeID: string;
      userInfoID: string;
      createdAt: string;
      updatedAt: string;
      incomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null;
    outcomeInventory?: {
      __typename: "OutcomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryInventoryOperationIDId?: string | null;
    } | null;
    outcomeInventoryRequest?: {
      __typename: "OutcomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    inventoryOperationIncomeInventoryId?: string | null;
    inventoryOperationIncomeInventoryRequestId?: string | null;
    inventoryOperationOutcomeInventoryId?: string | null;
    inventoryOperationOutcomeInventoryRequestId?: string | null;
    inventoryOperationSalesOperationId?: string | null;
  } | null;
};

export type ListInventoryOperationsQueryVariables = {
  filter?: ModelInventoryOperationFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListInventoryOperationsQuery = {
  listInventoryOperations?: {
    __typename: "ModelInventoryOperationConnection";
    items: Array<{
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetIncomeInventoryQueryVariables = {
  id: string;
};

export type GetIncomeInventoryQuery = {
  getIncomeInventory?: {
    __typename: "IncomeInventory";
    id: string;
    date: string;
    comments?: string | null;
    status?: IOInventoryStatus | null;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    providerID: string;
    provider?: {
      __typename: "Provider";
      id: string;
      enterprise_name: string;
      enterprise_RFC?: string | null;
      phone?: string | null;
      fixed_phone?: string | null;
      type?: string | null;
      createdAt: string;
      updatedAt: string;
      providerProductproviderId?: string | null;
      providerServiceproviderId?: string | null;
    } | null;
    productProviderResponsibleID: string;
    productProviderResponsible?: {
      __typename: "ProductProviderResponsible";
      id: string;
      productproviderID: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      RFC?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    incomeInventoryProductQuantities?: {
      __typename: "ModelIncomeInventoryProductQuantityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    incomeInventoryInventoryOperationIDId?: string | null;
  } | null;
};

export type ListIncomeInventoriesQueryVariables = {
  filter?: ModelIncomeInventoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListIncomeInventoriesQuery = {
  listIncomeInventories?: {
    __typename: "ModelIncomeInventoryConnection";
    items: Array<{
      __typename: "IncomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      providerID: string;
      productProviderResponsibleID: string;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      incomeInventoryInventoryOperationIDId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetIncomeInventoryRequestQueryVariables = {
  id: string;
};

export type GetIncomeInventoryRequestQuery = {
  getIncomeInventoryRequest?: {
    __typename: "IncomeInventoryRequest";
    id: string;
    date: string;
    comments?: string | null;
    status: IOInventoryStatus;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    providerID: string;
    provider?: {
      __typename: "Provider";
      id: string;
      enterprise_name: string;
      enterprise_RFC?: string | null;
      phone?: string | null;
      fixed_phone?: string | null;
      type?: string | null;
      createdAt: string;
      updatedAt: string;
      providerProductproviderId?: string | null;
      providerServiceproviderId?: string | null;
    } | null;
    productProviderResponsibleID: string;
    productProviderResponsible?: {
      __typename: "ProductProviderResponsible";
      id: string;
      productproviderID: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      RFC?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    branchOfficeID: string;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    incomeInventoryProductQuantitiesRequest?: {
      __typename: "ModelIncomeInventoryProductQuantityRequestConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    incomeInventoryRequestInventoryOperationIDId?: string | null;
  } | null;
};

export type ListIncomeInventoryRequestsQueryVariables = {
  filter?: ModelIncomeInventoryRequestFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListIncomeInventoryRequestsQuery = {
  listIncomeInventoryRequests?: {
    __typename?: "ModelIncomeInventoryRequestConnection";
    items: Array<{
      __typename: "IncomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status: IOInventoryStatus;
      rejectedReason?: string | null;
      providerID: string;
      productProviderResponsibleID: string;
      branchOfficeID: string;
      branchOffice?: BranchOffice;
      userInfoID: string;
      createdAt: string;
      updatedAt: string;
      provider?: Provider;
      productProviderResponsible?: ProductProviderResponsible;
      incomeInventoryRequestInventoryOperationIDId?: string | null;
      incomeInventoryProductQuantitiesRequest?: ListIncomeInventoryProductQuantityRequestsQuery["listIncomeInventoryProductQuantityRequests"];
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetIncomeInventoryProductQuantityQueryVariables = {
  id: string;
};

export type GetIncomeInventoryProductQuantityQuery = {
  getIncomeInventoryProductQuantity?: {
    __typename: "IncomeInventoryProductQuantity";
    id: string;
    incomeQuantity: number;
    inventoryProducts?: {
      __typename: "ModelInventoryProductIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoryID: string;
    incomeInventory?: {
      __typename: "IncomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      providerID: string;
      productProviderResponsibleID: string;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      incomeInventoryInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListIncomeInventoryProductQuantitiesQueryVariables = {
  filter?: ModelIncomeInventoryProductQuantityFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListIncomeInventoryProductQuantitiesQuery = {
  listIncomeInventoryProductQuantities?: {
    __typename: "ModelIncomeInventoryProductQuantityConnection";
    items: Array<{
      __typename: "IncomeInventoryProductQuantity";
      id: string;
      incomeQuantity: number;
      incomeInventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryProducts?: ListInventoryProductsQuery;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetIncomeInventoryProductQuantityRequestQueryVariables = {
  id: string;
};

export type GetIncomeInventoryProductQuantityRequestQuery = {
  getIncomeInventoryProductQuantityRequest?: {
    __typename: "IncomeInventoryProductQuantityRequest";
    id: string;
    incomeQuantity: number;
    inventoryProducts?: {
      __typename: "ModelInventoryProductIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoryRequestID: string;
    incomeInventoryRequest?: {
      __typename: "IncomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status: IOInventoryStatus;
      providerID: string;
      productProviderResponsibleID: string;
      branchOfficeID: string;
      userInfoID: string;
      createdAt: string;
      updatedAt: string;
      incomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListIncomeInventoryProductQuantityRequestsQueryVariables = {
  filter?: ModelIncomeInventoryProductQuantityRequestFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListIncomeInventoryProductQuantityRequestsQuery = {
  listIncomeInventoryProductQuantityRequests?: {
    __typename?: "ModelIncomeInventoryProductQuantityRequestConnection";
    items: Array<{
      __typename?: "IncomeInventoryProductQuantityRequest";
      id: string;
      incomeQuantity: number;
      incomeInventoryRequestID: string;
      createdAt: string;
      updatedAt: string;
      inventoryProducts?: {
        items: {
          id: string;
          inventoryProduct: InventoryProduct;
        }[];
      };
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetOutcomeInventoryQueryVariables = {
  id: string;
};

export type GetOutcomeInventoryQuery = {
  getOutcomeInventory?: {
    __typename: "OutcomeInventory";
    id: string;
    date: string;
    comments?: string | null;
    status?: IOInventoryStatus | null;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    outcomeInventoryProductQuantities?: {
      __typename: "ModelOutcomeInventoryProductQuantityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    outcomeInventoryInventoryOperationIDId?: string | null;
  } | null;
};

export type ListOutcomeInventoriesQueryVariables = {
  filter?: ModelOutcomeInventoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListOutcomeInventoriesQuery = {
  listOutcomeInventories?: {
    __typename: "ModelOutcomeInventoryConnection";
    items: Array<{
      __typename: "OutcomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryInventoryOperationIDId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetOutcomeInventoryRequestQueryVariables = {
  id: string;
};

export type GetOutcomeInventoryRequestQuery = {
  getOutcomeInventoryRequest?: {
    __typename: "OutcomeInventoryRequest";
    id: string;
    date: string;
    comments?: string | null;
    status?: IOInventoryStatus | null;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    outcomeInventoryProductQuantitiesRequest?: {
      __typename: "ModelOutcomeInventoryProductQuantityRequestConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    outcomeInventoryRequestInventoryOperationIDId?: string | null;
  } | null;
};

export type ListOutcomeInventoryRequestsQueryVariables = {
  filter?: ModelOutcomeInventoryRequestFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListOutcomeInventoryRequestsQuery = {
  listOutcomeInventoryRequests?: {
    __typename: "ModelOutcomeInventoryRequestConnection";
    items: Array<{
      __typename: "OutcomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetOutcomeInventoryProductQuantityQueryVariables = {
  id: string;
};

export type GetOutcomeInventoryProductQuantityQuery = {
  getOutcomeInventoryProductQuantity?: {
    __typename: "OutcomeInventoryProductQuantity";
    id: string;
    outcomeQuantity: number;
    inventoryProducts?: {
      __typename: "ModelInventoryProductOutcomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventoryID: string;
    outcomeInventory?: {
      __typename: "OutcomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListOutcomeInventoryProductQuantitiesQueryVariables = {
  filter?: ModelOutcomeInventoryProductQuantityFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListOutcomeInventoryProductQuantitiesQuery = {
  listOutcomeInventoryProductQuantities?: {
    __typename: "ModelOutcomeInventoryProductQuantityConnection";
    items: Array<{
      __typename: "OutcomeInventoryProductQuantity";
      id: string;
      outcomeQuantity: number;
      outcomeInventoryID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetOutcomeInventoryProductQuantityRequestQueryVariables = {
  id: string;
};

export type GetOutcomeInventoryProductQuantityRequestQuery = {
  getOutcomeInventoryProductQuantityRequest?: {
    __typename: "OutcomeInventoryProductQuantityRequest";
    id: string;
    outcomeRequestQuantity: number;
    inventoryProducts?: {
      __typename: "ModelInventoryProductOutcomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventoryRequestID: string;
    outcomeInventoryRequest?: {
      __typename: "OutcomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListOutcomeInventoryProductQuantityRequestsQueryVariables = {
  filter?: ModelOutcomeInventoryProductQuantityRequestFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListOutcomeInventoryProductQuantityRequestsQuery = {
  listOutcomeInventoryProductQuantityRequests?: {
    __typename: "ModelOutcomeInventoryProductQuantityRequestConnection";
    items: Array<{
      __typename: "OutcomeInventoryProductQuantityRequest";
      id: string;
      outcomeRequestQuantity: number;
      outcomeInventoryRequestID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetReturnsInventoryQueryVariables = {
  id: string;
};

export type GetReturnsInventoryQuery = {
  getReturnsInventory?: {
    __typename: "ReturnsInventory";
    id: string;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    clientID: string;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments?: string | null;
    inventoryProducts?: {
      __typename: "ModelInventoryProductReturnsInventoryConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListReturnsInventoriesQueryVariables = {
  filter?: ModelReturnsInventoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListReturnsInventoriesQuery = {
  listReturnsInventories?: {
    __typename: "ModelReturnsInventoryConnection";
    items: Array<{
      __typename: "ReturnsInventory";
      id: string;
      userInfoID: string;
      clientID: string;
      comments?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetRoleQueryVariables = {
  id: string;
};

export type GetRoleQuery = {
  getRole?: {
    __typename: "Role";
    id: string;
    name: RoleType;
    description?: string | null;
    user?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListRolesQueryVariables = {
  filter?: ModelRoleFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListRolesQuery = {
  listRoles?: {
    __typename: "ModelRoleConnection";
    items: Array<{
      __typename: "Role";
      id: string;
      name: RoleType;
      description?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetUserQueryVariables = {
  id: string;
};

export type GetUserQuery = {
  getUser?: {
    __typename: "User";
    id: string;
    email: string;
    password: string;
    rolID: string;
    rol?: {
      __typename: "Role";
      id: string;
      name: RoleType;
      description?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    hasBranchOffice?: boolean | null;
    branchOffice?: {
      __typename: "ModelBranchOfficeUserConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userUserInfoId?: string | null;
  } | null;
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListUsersQuery = {
  listUsers?: {
    __typename: "ModelUserConnection";
    items: Array<{
      __typename: "User";
      id: string;
      email: string;
      password: string;
      rolID: string;
      hasBranchOffice?: boolean | null;
      createdAt: string;
      updatedAt: string;
      userUserInfoId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetUserInfoQueryVariables = {
  id: string;
};

export type GetUserInfoQuery = {
  getUserInfo?: {
    __typename: "UserInfo";
    id: string;
    name: string;
    phone?: string | null;
    RFC?: string | null;
    gender?: string | null;
    user?: {
      __typename: "User";
      id: string;
      email: string;
      password: string;
      rolID: string;
      hasBranchOffice?: boolean | null;
      createdAt: string;
      updatedAt: string;
      userUserInfoId?: string | null;
    } | null;
    companyExpenses?: {
      __typename: "ModelCompanyExpensesConnection";
      nextToken?: string | null;
    } | null;
    salesOperation?: {
      __typename: "ModelSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    incomeInventories?: {
      __typename: "ModelIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoriesRequest?: {
      __typename: "ModelIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventories?: {
      __typename: "ModelOutcomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventoriesRequest?: {
      __typename: "ModelOutcomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    returnsInventory?: {
      __typename: "ModelReturnsInventoryConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userInfoUserId?: string | null;
  } | null;
};

export type ListUserInfosQueryVariables = {
  filter?: ModelUserInfoFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListUserInfosQuery = {
  listUserInfos?: {
    __typename: "ModelUserInfoConnection";
    items: Array<{
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetInventoryQueryVariables = {
  id: string;
};

export type GetInventoryQuery = {
  getInventory?: {
    __typename: "Inventory";
    id: string;
    name: string;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    inventoryOperations?: {
      __typename: "ModelInventoryOperationConnection";
      nextToken?: string | null;
    } | null;
    inventoryProduct?: {
      __typename: "ModelInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    isMain?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListInventoriesQueryVariables = {
  filter?: ModelInventoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListInventoriesQuery = {
  listInventories?: {
    __typename: "ModelInventoryConnection";
    items: Array<{
      __typename: "Inventory";
      id: string;
      name: string;
      branchOfficeID?: string | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetInventoryProductQueryVariables = {
  id: string;
};

export type GetInventoryProductQuery = {
  getInventoryProduct?: {
    __typename: "InventoryProduct";
    id: string;
    inventoryID: string;
    inventory?: {
      __typename: "Inventory";
      id: string;
      name: string;
      branchOfficeID?: string | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    productID: string;
    product?: {
      __typename: "Product";
      id: string;
      class_id: number;
      category_id: number;
      subcategory_id: number;
      name: string;
      description?: string | null;
      price: number;
      commission?: number | null;
      hasCommission?: boolean | null;
      hasDiscount?: boolean | null;
      productProviderID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    quantity: number;
    customPrice?: number | null;
    generalPrice?: number | null;
    productProviderID?: string | null;
    productProvider?: {
      __typename: "ProductProvider";
      id: string;
      createdAt: string;
      updatedAt: string;
      productProviderProviderIDId?: string | null;
    } | null;
    discounts?: {
      __typename: "ModelDiscountInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductIncomeInventory?: {
      __typename: "ModelInventoryProductIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductIncomeInventoryRequests?: {
      __typename: "ModelInventoryProductIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductOutcomeInventory?: {
      __typename: "ModelInventoryProductOutcomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductOutcomeInventoryRequests?: {
      __typename: "ModelInventoryProductOutcomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductSalesOperation?: {
      __typename: "ModelInventoryProductSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    returnsInventory?: {
      __typename: "ModelInventoryProductReturnsInventoryConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListInventoryProductsQueryVariables = {
  filter?: ModelInventoryProductFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListInventoryProductsQuery = {
  listInventoryProducts?: {
    __typename: "ModelInventoryProductConnection";
    productsByProductProviderIDAndId?: ProductsByProductProviderIDAndIdQuery["productsByProductProviderIDAndId"];

    items: Array<{
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      inventory?: {
        __typename: "Inventory";
        id: string;
        name: string;
        branchOfficeID?: string | null;
        isMain?: boolean | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      productID: string;
      product?: {
        __typename: "Product";
        id: string;
        class_id: number;
        category_id: number;
        subcategory_id: number;
        name: string;
        description?: string | null;
        price: number;
        commission?: number | null;
        hasCommission?: boolean | null;
        hasDiscount?: boolean | null;
        productProviderID: string;
        createdAt: string;
        updatedAt: string;
        inventoryProduct?: {
          items: InventoryProduct[];
        };
      } | null;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      productProvider?: {
        __typename: "ProductProvider";
        id: string;
        createdAt: string;
        updatedAt: string;
        productProviderProviderIDId?: string | null;
      } | null;
      discounts?: {
        __typename: "ModelDiscountInventoryProductConnection";
        nextToken?: string | null;
      } | null;
      inventoryProductIncomeInventory?: {
        __typename: "ModelInventoryProductIncomeInventoryConnection";
        nextToken?: string | null;
      } | null;
      inventoryProductOutcomeInventory?: {
        __typename: "ModelInventoryProductOutcomeInventoryConnection";
        nextToken?: string | null;
      } | null;
      inventoryProductSalesOperation?: {
        __typename: "ModelInventoryProductSalesOperationConnection";
        nextToken?: string | null;
      } | null;
      returnsInventory?: {
        __typename: "ModelInventoryProductReturnsInventoryConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetBranchOfficeQueryVariables = {
  id: string;
};

export type GetBranchOfficeQuery = {
  getBranchOffice?: {
    __typename: "BranchOffice";
    id: string;
    name: string;
    zipcode?: string | null;
    state?: string | null;
    location: string;
    address?: string | null;
    phone?: string | null;
    branchOffice_commission?: number | null;
    inventories?: {
      __typename: "ModelInventoryConnection";
      nextToken?: string | null;
    } | null;
    isMain?: boolean | null;
    creditRequests?: {
      __typename: "ModelCreditRequestsConnection";
      nextToken?: string | null;
    } | null;
    companyExpenses?: {
      __typename: "ModelCompanyExpensesConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelBranchOfficeUserConnection";
      nextToken?: string | null;
    } | null;
    clients?: {
      __typename: "ModelClientConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventories?: {
      __typename: "ModelOutcomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventoriesRequest?: {
      __typename: "ModelOutcomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    incomeInventories?: {
      __typename: "ModelIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoriesRequest?: {
      __typename: "ModelIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    salesOperations?: {
      __typename: "ModelSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListBranchOfficesQueryVariables = {
  filter?: ModelBranchOfficeFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListBranchOfficesQuery = {
  listBranchOffices?: {
    __typename: "ModelBranchOfficeConnection";
    items: Array<{
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetDiscountsQueryVariables = {
  id: string;
};

export type GetDiscountsQuery = {
  getDiscounts?: {
    __typename: "Discounts";
    id: string;
    discount: number;
    inventoryProducts?: {
      __typename: "ModelDiscountInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListDiscountsQueryVariables = {
  filter?: ModelDiscountsFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListDiscountsQuery = {
  listDiscounts?: {
    __typename: "ModelDiscountsConnection";
    items: Array<{
      __typename: "Discounts";
      id: string;
      discount: number;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetSalesOperationQueryVariables = {
  id: string;
};

export type GetSalesOperationQuery = {
  getSalesOperation?: {
    __typename: "SalesOperation";
    id: string;
    date?: string | null;
    total?: number | null;
    totalCash?: number | null;
    totalCommission?: number | null;
    nonRegisteredClientID?: string | null;
    nonRegisteredClient?: {
      __typename: "NonRegisteredClient";
      id: string;
      fullName: string;
      createdAt: string;
      updatedAt: string;
      nonRegisteredClientSaleOperationId?: string | null;
    } | null;
    pendingToPay?: number | null;
    amountPaid?: number | null;
    salesOperationType: SalesOperationType;
    status: SalesOperationStatus;
    monthsToPay?: number | null;
    termDaysToPay?: SalesOperationTermDaysToPay | null;
    totalPayments?: number | null;
    currentTotalPayments?: number | null;
    lastPaymentDate?: string | null;
    lastDatePaid?: string | null;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userInfoID?: string | null;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID: string;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    salesOperationInventoryProductQuantities?: {
      __typename: "ModelSalesOperationInventoryProductQuantityConnection";
      nextToken?: string | null;
    } | null;
    salesOperationClientCreditMovements?: {
      __typename: "ModelSalesOperationClientCreditMovementsConnection";
      nextToken?: string | null;
    } | null;
    salesOperationClientCreditFirstLastPayment?: {
      __typename: "ModelSalesOperationClientCreditFirstLastPaymentConnection";
      nextToken?: string | null;
    } | null;
    salesOperationCustomerSubscription?: {
      __typename: "ModelSalesOperationCustomerSubscriptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    salesOperationInventoryOperationIDId?: string | null;
  } | null;
};

export type ListSalesOperationsQueryVariables = {
  filter?: ModelSalesOperationFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListSalesOperationsQuery = {
  listSalesOperations?: {
    __typename: "ModelSalesOperationConnection";
    items: Array<{
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      nonRegisteredClient?: {
        __typename: "NonRegisteredClient";
        id: string;
        fullName: string;
        createdAt: string;
        updatedAt: string;
        nonRegisteredClientSaleOperationId?: string | null;
      } | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      inventoryOperationID?: {
        __typename: "InventoryOperation";
        id: string;
        operationType: OperationType;
        inventoryID: string;
        createdAt: string;
        updatedAt: string;
        inventoryOperationIncomeInventoryId?: string | null;
        inventoryOperationOutcomeInventoryId?: string | null;
        inventoryOperationSalesOperationId?: string | null;
      } | null;
      clientID?: string | null;
      client?: {
        __typename: "Client";
        id: string;
        name: string;
        second_name?: string | null;
        lastname: string;
        second_lastname?: string | null;
        phone: string;
        fixed_phone?: string | null;
        email?: string | null;
        birthday?: string | null;
        RFC?: string | null;
        address?: string | null;
        settlement?: string | null;
        postal_code?: string | null;
        state?: string | null;
        city?: string | null;
        creditID?: string | null;
        branchOfficeID: string;
        hasCredit: boolean;
        hasCreditRequest?: boolean | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      userInfoID?: string | null;
      userInfo?: {
        __typename: "UserInfo";
        id: string;
        name: string;
        phone?: string | null;
        RFC?: string | null;
        gender?: string | null;
        createdAt: string;
        updatedAt: string;
        userInfoUserId?: string | null;
      } | null;
      branchOfficeID: string;
      branchOffice?: {
        __typename: "BranchOffice";
        id: string;
        name: string;
        zipcode?: string | null;
        state?: string | null;
        location: string;
        address?: string | null;
        phone?: string | null;
        branchOffice_commission?: number | null;
        isMain?: boolean | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      salesOperationInventoryProductQuantities?: {
        __typename: "ModelSalesOperationInventoryProductQuantityConnection";
        nextToken?: string | null;
      } | null;
      salesOperationClientCreditMovements?: {
        __typename: "ModelSalesOperationClientCreditMovementsConnection";
        nextToken?: string | null;
      } | null;
      salesOperationClientCreditFirstLastPayment?: {
        __typename: "ModelSalesOperationClientCreditFirstLastPaymentConnection";
        nextToken?: string | null;
      } | null;
      salesOperationCustomerSubscription?: {
        __typename: "ModelSalesOperationCustomerSubscriptionConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetSalesOperationClientCreditFirstLastPaymentQueryVariables = {
  id: string;
};

export type GetSalesOperationClientCreditFirstLastPaymentQuery = {
  getSalesOperationClientCreditFirstLastPayment?: {
    __typename: "SalesOperationClientCreditFirstLastPayment";
    id: string;
    salesOperationID: string;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    startDate?: string | null;
    endDate?: string | null;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListSalesOperationClientCreditFirstLastPaymentsQueryVariables = {
  filter?: ModelSalesOperationClientCreditFirstLastPaymentFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListSalesOperationClientCreditFirstLastPaymentsQuery = {
  listSalesOperationClientCreditFirstLastPayments?: {
    __typename: "ModelSalesOperationClientCreditFirstLastPaymentConnection";
    items: Array<{
      __typename: "SalesOperationClientCreditFirstLastPayment";
      id: string;
      salesOperationID: string;
      startDate?: string | null;
      endDate?: string | null;
      clientID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetSalesOperationClientCreditMovementsQueryVariables = {
  id: string;
};

export type GetSalesOperationClientCreditMovementsQuery = {
  getSalesOperationClientCreditMovements?: {
    __typename: "SalesOperationClientCreditMovements";
    id: string;
    salesOperationID: string;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    paymentDate?: string | null;
    datePaid?: string | null;
    amountToPay: number;
    pendingToPay?: number | null;
    amountPaid?: number | null;
    status: SalesOperationClientCreditMovementStatus;
    numberOfPayment?: number | null;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListSalesOperationClientCreditMovementsQueryVariables = {
  filter?: ModelSalesOperationClientCreditMovementsFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListSalesOperationClientCreditMovementsQuery = {
  listSalesOperationClientCreditMovements?: {
    __typename: "ModelSalesOperationClientCreditMovementsConnection";
    items: Array<{
      __typename: "SalesOperationClientCreditMovements";
      id: string;
      salesOperationID: string;
      paymentDate?: string | null;
      datePaid?: string | null;
      amountToPay: number;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      status: SalesOperationClientCreditMovementStatus;
      numberOfPayment?: number | null;
      clientID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetSalesOperationInventoryProductQuantityQueryVariables = {
  id: string;
};

export type GetSalesOperationInventoryProductQuantityQuery = {
  getSalesOperationInventoryProductQuantity?: {
    __typename: "SalesOperationInventoryProductQuantity";
    id: string;
    name?: string | null;
    salesOperationID: string;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    inventoryProducts?: {
      __typename: "ModelInventoryProductSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    soldProductQuantity: number;
    withDiscount?: boolean | null;
    discountPercentage?: number | null;
    discountPerProduct?: number | null;
    totalDiscounted?: number | null;
    productPriceWithDiscount?: number | null;
    amountToPayWithDiscount?: number | null;
    amountToPay: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListSalesOperationInventoryProductQuantitiesQueryVariables = {
  filter?: ModelSalesOperationInventoryProductQuantityFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListSalesOperationInventoryProductQuantitiesQuery = {
  listSalesOperationInventoryProductQuantities?: {
    __typename: "ModelSalesOperationInventoryProductQuantityConnection";
    items: Array<{
      __typename: "SalesOperationInventoryProductQuantity";
      id: string;
      name?: string | null;
      salesOperationID: string;
      soldProductQuantity: number;
      withDiscount?: boolean | null;
      discountPercentage?: number | null;
      discountPerProduct?: number | null;
      totalDiscounted?: number | null;
      productPriceWithDiscount?: number | null;
      amountToPayWithDiscount?: number | null;
      amountToPay: number;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetCompanyExpensesQueryVariables = {
  id: string;
};

export type GetCompanyExpensesQuery = {
  getCompanyExpenses?: {
    __typename: "CompanyExpenses";
    id: string;
    name: string;
    description?: string | null;
    costType: CostType;
    date?: string | null;
    amount: number;
    userInfoID?: string | null;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListCompanyExpensesQueryVariables = {
  filter?: ModelCompanyExpensesFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCompanyExpensesQuery = {
  listCompanyExpenses?: {
    __typename: "ModelCompanyExpensesConnection";
    items: Array<{
      __typename: "CompanyExpenses";
      id: string;
      name: string;
      description?: string | null;
      costType: CostType;
      date?: string | null;
      amount: number;
      userInfoID?: string | null;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetSalesOperationCustomerSubscriptionQueryVariables = {
  id: string;
};

export type GetSalesOperationCustomerSubscriptionQuery = {
  getSalesOperationCustomerSubscription?: {
    __typename: "SalesOperationCustomerSubscription";
    id: string;
    salesOperationID: string;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    date?: string | null;
    advancePayment?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListSalesOperationCustomerSubscriptionsQueryVariables = {
  filter?: ModelSalesOperationCustomerSubscriptionFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListSalesOperationCustomerSubscriptionsQuery = {
  listSalesOperationCustomerSubscriptions?: {
    __typename: "ModelSalesOperationCustomerSubscriptionConnection";
    items: Array<{
      __typename: "SalesOperationCustomerSubscription";
      id: string;
      salesOperationID: string;
      clientID?: string | null;
      date?: string | null;
      advancePayment?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetProviderQueryVariables = {
  id: string;
};

export type GetProviderQuery = {
  getProvider?: {
    __typename: "Provider";
    id: string;
    enterprise_name: string;
    enterprise_RFC?: string | null;
    phone?: string | null;
    fixed_phone?: string | null;
    type?: string | null;
    productprovider?: {
      __typename: "ProductProvider";
      id: string;
      createdAt: string;
      updatedAt: string;
      productProviderProviderIDId?: string | null;
    } | null;
    serviceprovider?: {
      __typename: "ServiceProvider";
      id: string;
      service_name?: string | null;
      service_description?: string | null;
      cost_type?: string | null;
      createdAt: string;
      updatedAt: string;
      serviceProviderProviderIDId?: string | null;
    } | null;
    incomeInventories?: {
      __typename: "ModelIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoriesRequest?: {
      __typename: "ModelIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    providerProductproviderId?: string | null;
    providerServiceproviderId?: string | null;
  } | null;
};

export type ListProvidersQueryVariables = {
  filter?: ModelProviderFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListProvidersQuery = {
  listProviders: {
    __typename: "ModelProviderConnection";
    items: Array<{
      __typename: "Provider";
      id: string;
      enterprise_name: string;
      enterprise_RFC?: string | null;
      phone?: string | null;
      fixed_phone?: string | null;
      type?: string | null;
      productprovider?: {
        __typename: "ProductProvider";
        id: string;
        createdAt: string;
        updatedAt: string;
        productProviderProviderIDId?: string | null;
        product?: {
          items: Product[];
        };
        responsible?: {
          items: ProductProviderResponsible[];
        };
      } | null;
      serviceprovider?: {
        __typename: "ServiceProvider";
        id: string;
        service_name?: string | null;
        service_description?: string | null;
        cost_type?: string | null;
        createdAt: string;
        updatedAt: string;
        serviceProviderProviderIDId?: string | null;
      } | null;
      incomeInventories?: {
        __typename: "ModelIncomeInventoryConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      providerProductproviderId?: string | null;
      providerServiceproviderId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetProductProviderQueryVariables = {
  id: string;
};

export type GetProductProviderQuery = {
  getProductProvider?: {
    __typename: "ProductProvider";
    id: string;
    responsible?: {
      __typename: "ModelProductProviderResponsibleConnection";
      nextToken?: string | null;
    } | null;
    providerID?: {
      __typename: "Provider";
      id: string;
      enterprise_name: string;
      enterprise_RFC?: string | null;
      phone?: string | null;
      fixed_phone?: string | null;
      type?: string | null;
      createdAt: string;
      updatedAt: string;
      providerProductproviderId?: string | null;
      providerServiceproviderId?: string | null;
    } | null;
    product?: {
      __typename: "ModelProductConnection";
      nextToken?: string | null;
    } | null;
    inventoryProduct?: {
      __typename: "ModelInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    productProviderProviderIDId?: string | null;
  } | null;
};

export type ListProductProvidersQueryVariables = {
  filter?: ModelProductProviderFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListProductProvidersQuery = {
  listProductProviders?: {
    __typename: "ModelProductProviderConnection";
    items: Array<{
      __typename: "ProductProvider";
      id: string;
      createdAt: string;
      updatedAt: string;
      productProviderProviderIDId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetProductProviderResponsibleQueryVariables = {
  id: string;
};

export type GetProductProviderResponsibleQuery = {
  getProductProviderResponsible?: {
    __typename: "ProductProviderResponsible";
    id: string;
    productproviderID: string;
    name: string;
    second_name?: string | null;
    lastname: string;
    second_lastname?: string | null;
    phone: string;
    RFC?: string | null;
    incomeInventories?: {
      __typename: "ModelIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoriesRequest?: {
      __typename: "ModelIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListProductProviderResponsiblesQueryVariables = {
  filter?: ModelProductProviderResponsibleFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListProductProviderResponsiblesQuery = {
  listProductProviderResponsibles?: {
    __typename: "ModelProductProviderResponsibleConnection";
    items: Array<{
      __typename: "ProductProviderResponsible";
      id: string;
      productproviderID: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      RFC?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetServiceProviderQueryVariables = {
  id: string;
};

export type GetServiceProviderQuery = {
  getServiceProvider?: {
    __typename: "ServiceProvider";
    id: string;
    service_name?: string | null;
    service_description?: string | null;
    cost_type?: string | null;
    responsible?: {
      __typename: "ModelServiceProviderResponsibleConnection";
      nextToken?: string | null;
    } | null;
    providerID?: {
      __typename: "Provider";
      id: string;
      enterprise_name: string;
      enterprise_RFC?: string | null;
      phone?: string | null;
      fixed_phone?: string | null;
      type?: string | null;
      createdAt: string;
      updatedAt: string;
      providerProductproviderId?: string | null;
      providerServiceproviderId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    serviceProviderProviderIDId?: string | null;
  } | null;
};

export type ListServiceProvidersQueryVariables = {
  filter?: ModelServiceProviderFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListServiceProvidersQuery = {
  listServiceProviders?: {
    __typename: "ModelServiceProviderConnection";
    items: Array<{
      __typename: "ServiceProvider";
      id: string;
      service_name?: string | null;
      service_description?: string | null;
      cost_type?: string | null;
      createdAt: string;
      updatedAt: string;
      serviceProviderProviderIDId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetServiceProviderResponsibleQueryVariables = {
  id: string;
};

export type GetServiceProviderResponsibleQuery = {
  getServiceProviderResponsible?: {
    __typename: "ServiceProviderResponsible";
    id: string;
    serviceproviderID: string;
    name: string;
    second_name?: string | null;
    lastname: string;
    second_lastname?: string | null;
    phone?: string | null;
    RFC?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListServiceProviderResponsiblesQueryVariables = {
  filter?: ModelServiceProviderResponsibleFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListServiceProviderResponsiblesQuery = {
  listServiceProviderResponsibles?: {
    __typename: "ModelServiceProviderResponsibleConnection";
    items: Array<{
      __typename: "ServiceProviderResponsible";
      id: string;
      serviceproviderID: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone?: string | null;
      RFC?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetInventoryProductIncomeInventoryQueryVariables = {
  id: string;
};

export type GetInventoryProductIncomeInventoryQuery = {
  getInventoryProductIncomeInventory?: {
    __typename: "InventoryProductIncomeInventory";
    id: string;
    incomeInventoryProductQuantityId: string;
    inventoryProductId: string;
    incomeInventoryProductQuantity: {
      __typename: "IncomeInventoryProductQuantity";
      id: string;
      incomeQuantity: number;
      incomeInventoryID: string;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListInventoryProductIncomeInventoriesQueryVariables = {
  filter?: ModelInventoryProductIncomeInventoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListInventoryProductIncomeInventoriesQuery = {
  listInventoryProductIncomeInventories?: {
    __typename: "ModelInventoryProductIncomeInventoryConnection";
    items: Array<{
      __typename: "InventoryProductIncomeInventory";
      id: string;
      incomeInventoryProductQuantityId: string;
      inventoryProductId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetInventoryProductIncomeInventoryRequestQueryVariables = {
  id: string;
};

export type GetInventoryProductIncomeInventoryRequestQuery = {
  getInventoryProductIncomeInventoryRequest?: {
    __typename: "InventoryProductIncomeInventoryRequest";
    id: string;
    incomeInventoryProductQuantityRequestId: string;
    inventoryProductId: string;
    incomeInventoryProductQuantityRequest: {
      __typename: "IncomeInventoryProductQuantityRequest";
      id: string;
      incomeQuantity: number;
      incomeInventoryRequestID: string;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListInventoryProductIncomeInventoryRequestsQueryVariables = {
  filter?: ModelInventoryProductIncomeInventoryRequestFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListInventoryProductIncomeInventoryRequestsQuery = {
  listInventoryProductIncomeInventoryRequests?: {
    __typename: "ModelInventoryProductIncomeInventoryRequestConnection";
    items: Array<{
      __typename: "InventoryProductIncomeInventoryRequest";
      id: string;
      incomeInventoryProductQuantityRequestId: string;
      inventoryProductId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetInventoryProductOutcomeInventoryQueryVariables = {
  id: string;
};

export type GetInventoryProductOutcomeInventoryQuery = {
  getInventoryProductOutcomeInventory?: {
    __typename: "InventoryProductOutcomeInventory";
    id: string;
    outcomeInventoryProductQuantityId: string;
    inventoryProductId: string;
    outcomeInventoryProductQuantity: {
      __typename: "OutcomeInventoryProductQuantity";
      id: string;
      outcomeQuantity: number;
      outcomeInventoryID: string;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListInventoryProductOutcomeInventoriesQueryVariables = {
  filter?: ModelInventoryProductOutcomeInventoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListInventoryProductOutcomeInventoriesQuery = {
  listInventoryProductOutcomeInventories?: {
    __typename: "ModelInventoryProductOutcomeInventoryConnection";
    items: Array<{
      __typename: "InventoryProductOutcomeInventory";
      id: string;
      outcomeInventoryProductQuantityId: string;
      inventoryProductId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetInventoryProductOutcomeInventoryRequestQueryVariables = {
  id: string;
};

export type GetInventoryProductOutcomeInventoryRequestQuery = {
  getInventoryProductOutcomeInventoryRequest?: {
    __typename: "InventoryProductOutcomeInventoryRequest";
    id: string;
    outcomeInventoryProductQuantityRequestId: string;
    inventoryProductId: string;
    outcomeInventoryProductQuantityRequest: {
      __typename: "OutcomeInventoryProductQuantityRequest";
      id: string;
      outcomeRequestQuantity: number;
      outcomeInventoryRequestID: string;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListInventoryProductOutcomeInventoryRequestsQueryVariables = {
  filter?: ModelInventoryProductOutcomeInventoryRequestFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListInventoryProductOutcomeInventoryRequestsQuery = {
  listInventoryProductOutcomeInventoryRequests?: {
    __typename: "ModelInventoryProductOutcomeInventoryRequestConnection";
    items: Array<{
      __typename: "InventoryProductOutcomeInventoryRequest";
      id: string;
      outcomeInventoryProductQuantityRequestId: string;
      inventoryProductId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetInventoryProductReturnsInventoryQueryVariables = {
  id: string;
};

export type GetInventoryProductReturnsInventoryQuery = {
  getInventoryProductReturnsInventory?: {
    __typename: "InventoryProductReturnsInventory";
    id: string;
    returnsInventoryId: string;
    inventoryProductId: string;
    returnsInventory: {
      __typename: "ReturnsInventory";
      id: string;
      userInfoID: string;
      clientID: string;
      comments?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListInventoryProductReturnsInventoriesQueryVariables = {
  filter?: ModelInventoryProductReturnsInventoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListInventoryProductReturnsInventoriesQuery = {
  listInventoryProductReturnsInventories?: {
    __typename: "ModelInventoryProductReturnsInventoryConnection";
    items: Array<{
      __typename: "InventoryProductReturnsInventory";
      id: string;
      returnsInventoryId: string;
      inventoryProductId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetBranchOfficeUserQueryVariables = {
  id: string;
};

export type GetBranchOfficeUserQuery = {
  getBranchOfficeUser?: {
    __typename: "BranchOfficeUser";
    id: string;
    userId: string;
    branchOfficeId: string;
    user: {
      __typename: "User";
      id: string;
      email: string;
      password: string;
      rolID: string;
      hasBranchOffice?: boolean | null;
      createdAt: string;
      updatedAt: string;
      userUserInfoId?: string | null;
    };
    branchOffice: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListBranchOfficeUsersQueryVariables = {
  filter?: ModelBranchOfficeUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListBranchOfficeUsersQuery = {
  listBranchOfficeUsers?: {
    __typename: "ModelBranchOfficeUserConnection";
    items: Array<{
      __typename: "BranchOfficeUser";
      id: string;
      userId: string;
      branchOfficeId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetDiscountInventoryProductQueryVariables = {
  id: string;
};

export type GetDiscountInventoryProductQuery = {
  getDiscountInventoryProduct?: {
    __typename: "DiscountInventoryProduct";
    id: string;
    inventoryProductId: string;
    discountsId: string;
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    discounts: {
      __typename: "Discounts";
      id: string;
      discount: number;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListDiscountInventoryProductsQueryVariables = {
  filter?: ModelDiscountInventoryProductFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListDiscountInventoryProductsQuery = {
  listDiscountInventoryProducts?: {
    __typename: "ModelDiscountInventoryProductConnection";
    items: Array<{
      __typename: "DiscountInventoryProduct";
      id: string;
      inventoryProductId: string;
      discountsId: string;
      inventoryProduct: {
        __typename: "InventoryProduct";
        id: string;
        inventoryID: string;
        productID: string;
        quantity: number;
        customPrice?: number | null;
        generalPrice?: number | null;
        productProviderID?: string | null;
        createdAt: string;
        updatedAt: string;
      };
      discounts: {
        __typename: "Discounts";
        id: string;
        discount: number;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetInventoryProductSalesOperationQueryVariables = {
  id: string;
};

export type GetInventoryProductSalesOperationQuery = {
  getInventoryProductSalesOperation?: {
    __typename: "InventoryProductSalesOperation";
    id: string;
    inventoryProductId: string;
    salesOperationInventoryProductQuantityId: string;
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    salesOperationInventoryProductQuantity: {
      __typename: "SalesOperationInventoryProductQuantity";
      id: string;
      name?: string | null;
      salesOperationID: string;
      soldProductQuantity: number;
      withDiscount?: boolean | null;
      discountPercentage?: number | null;
      discountPerProduct?: number | null;
      totalDiscounted?: number | null;
      productPriceWithDiscount?: number | null;
      amountToPayWithDiscount?: number | null;
      amountToPay: number;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListInventoryProductSalesOperationsQueryVariables = {
  filter?: ModelInventoryProductSalesOperationFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListInventoryProductSalesOperationsQuery = {
  listInventoryProductSalesOperations?: {
    __typename: "ModelInventoryProductSalesOperationConnection";
    items: Array<{
      __typename: "InventoryProductSalesOperation";
      id: string;
      inventoryProductId: string;
      salesOperationInventoryProductQuantityId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SubCategoriesByCategoryIDAndIdQueryVariables = {
  categoryID: number;
  id?: ModelIntKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelSubCategoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type SubCategoriesByCategoryIDAndIdQuery = {
  subCategoriesByCategoryIDAndId?: {
    __typename: "ModelSubCategoryConnection";
    items: Array<{
      __typename: "SubCategory";
      id: number;
      categoryID: number;
      subcategory_name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ClientsByCreditIDAndIdQueryVariables = {
  creditID: string;
  id?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelClientFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ClientsByCreditIDAndIdQuery = {
  clientsByCreditIDAndId?: {
    __typename: "ModelClientConnection";
    items: Array<{
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ClientsByBranchOfficeIDAndIdQueryVariables = {
  branchOfficeID: string;
  id?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelClientFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ClientsByBranchOfficeIDAndIdQuery = {
  clientsByBranchOfficeIDAndId?: {
    __typename: "ModelClientConnection";
    items: Array<{
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type CreditRequestsByClientIDAndIdQueryVariables = {
  clientID: string;
  id?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelCreditRequestsFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type CreditRequestsByClientIDAndIdQuery = {
  creditRequestsByClientIDAndId?: {
    __typename: "ModelCreditRequestsConnection";
    items: Array<{
      __typename: "CreditRequests";
      id: string;
      clientID?: string | null;
      branchOfficeID?: string | null;
      creditRequestAmount?: number | null;
      creditRequestStatus?: CreditRequestStatus | null;
      creditRequestReason?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type CreditRequestsByBranchOfficeIDAndIdQueryVariables = {
  branchOfficeID: string;
  id?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelCreditRequestsFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type CreditRequestsByBranchOfficeIDAndIdQuery = {
  creditRequestsByBranchOfficeIDAndId?: {
    __typename: "ModelCreditRequestsConnection";
    items: Array<{
      __typename: "CreditRequests";
      id: string;
      clientID?: string | null;
      branchOfficeID?: string | null;
      creditRequestAmount?: number | null;
      creditRequestStatus?: CreditRequestStatus | null;
      creditRequestReason?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ProductsByProductProviderIDAndIdQueryVariables = {
  productProviderID: string;
  id?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelProductFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ProductsByProductProviderIDAndIdQuery = {
  productsByProductProviderIDAndId?: {
    __typename: "ModelProductConnection";
    items: Array<{
      __typename: "Product";
      id: string;
      class_id: number;
      category_id: number;
      subcategory_id: number;
      name: string;
      description?: string | null;
      price: number;
      commission?: number | null;
      hasCommission?: boolean | null;
      hasDiscount?: boolean | null;
      productProviderID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type InventoryOperationsByInventoryIDQueryVariables = {
  inventoryID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelInventoryOperationFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type InventoryOperationsByInventoryIDQuery = {
  inventoryOperationsByInventoryID?: {
    __typename: "ModelInventoryOperationConnection";
    items: Array<{
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type IncomeInventoriesByProviderIDAndIdQueryVariables = {
  providerID: string;
  id?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelIncomeInventoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type IncomeInventoriesByProviderIDAndIdQuery = {
  incomeInventoriesByProviderIDAndId?: {
    __typename: "ModelIncomeInventoryConnection";
    items: Array<{
      __typename: "IncomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      providerID: string;
      productProviderResponsibleID: string;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      incomeInventoryInventoryOperationIDId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type IncomeInventoriesByProductProviderResponsibleIDAndIdQueryVariables =
  {
    productProviderResponsibleID: string;
    id?: ModelIDKeyConditionInput | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelIncomeInventoryFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
  };

export type IncomeInventoriesByProductProviderResponsibleIDAndIdQuery = {
  incomeInventoriesByProductProviderResponsibleIDAndId?: {
    __typename: "ModelIncomeInventoryConnection";
    items: Array<{
      __typename: "IncomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      providerID: string;
      productProviderResponsibleID: string;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      incomeInventoryInventoryOperationIDId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type IncomeInventoriesByUserInfoIDAndIdQueryVariables = {
  userInfoID: string;
  id?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelIncomeInventoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type IncomeInventoriesByUserInfoIDAndIdQuery = {
  incomeInventoriesByUserInfoIDAndId?: {
    __typename: "ModelIncomeInventoryConnection";
    items: Array<{
      __typename: "IncomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      providerID: string;
      productProviderResponsibleID: string;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      incomeInventoryInventoryOperationIDId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type IncomeInventoriesByBranchOfficeIDAndIdQueryVariables = {
  branchOfficeID: string;
  id?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelIncomeInventoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type IncomeInventoriesByBranchOfficeIDAndIdQuery = {
  incomeInventoriesByBranchOfficeIDAndId?: {
    __typename: "ModelIncomeInventoryConnection";
    items: Array<{
      __typename: "IncomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      providerID: string;
      productProviderResponsibleID: string;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      incomeInventoryInventoryOperationIDId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type IncomeInventoryRequestsByProviderIDAndIdQueryVariables = {
  providerID: string;
  id?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelIncomeInventoryRequestFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type IncomeInventoryRequestsByProviderIDAndIdQuery = {
  incomeInventoryRequestsByProviderIDAndId?: {
    __typename: "ModelIncomeInventoryRequestConnection";
    items: Array<{
      __typename: "IncomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status: IOInventoryStatus;
      providerID: string;
      productProviderResponsibleID: string;
      branchOfficeID: string;
      userInfoID: string;
      createdAt: string;
      updatedAt: string;
      incomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type IncomeInventoryRequestsByProductProviderResponsibleIDAndIdQueryVariables =
  {
    productProviderResponsibleID: string;
    id?: ModelIDKeyConditionInput | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelIncomeInventoryRequestFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
  };

export type IncomeInventoryRequestsByProductProviderResponsibleIDAndIdQuery = {
  incomeInventoryRequestsByProductProviderResponsibleIDAndId?: {
    __typename: "ModelIncomeInventoryRequestConnection";
    items: Array<{
      __typename: "IncomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status: IOInventoryStatus;
      providerID: string;
      productProviderResponsibleID: string;
      branchOfficeID: string;
      userInfoID: string;
      createdAt: string;
      updatedAt: string;
      incomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type IncomeInventoryRequestsByBranchOfficeIDAndIdQueryVariables = {
  branchOfficeID: string;
  id?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelIncomeInventoryRequestFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type IncomeInventoryRequestsByBranchOfficeIDAndIdQuery = {
  incomeInventoryRequestsByBranchOfficeIDAndId?: {
    __typename: "ModelIncomeInventoryRequestConnection";
    items: Array<{
      __typename: "IncomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status: IOInventoryStatus;
      providerID: string;
      productProviderResponsibleID: string;
      branchOfficeID: string;
      userInfoID: string;
      createdAt: string;
      updatedAt: string;
      incomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type IncomeInventoryRequestsByUserInfoIDAndIdQueryVariables = {
  userInfoID: string;
  id?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelIncomeInventoryRequestFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type IncomeInventoryRequestsByUserInfoIDAndIdQuery = {
  incomeInventoryRequestsByUserInfoIDAndId?: {
    __typename: "ModelIncomeInventoryRequestConnection";
    items: Array<{
      __typename: "IncomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status: IOInventoryStatus;
      providerID: string;
      productProviderResponsibleID: string;
      branchOfficeID: string;
      userInfoID: string;
      createdAt: string;
      updatedAt: string;
      incomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type IncomeInventoryProductQuantitiesByIncomeInventoryIDAndIdQueryVariables =
  {
    incomeInventoryID: string;
    id?: ModelIDKeyConditionInput | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelIncomeInventoryProductQuantityFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
  };

export type IncomeInventoryProductQuantitiesByIncomeInventoryIDAndIdQuery = {
  incomeInventoryProductQuantitiesByIncomeInventoryIDAndId?: {
    __typename: "ModelIncomeInventoryProductQuantityConnection";
    items: Array<{
      __typename: "IncomeInventoryProductQuantity";
      id: string;
      incomeQuantity: number;
      incomeInventoryID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type IncomeInventoryProductQuantityRequestsByIncomeInventoryRequestIDAndIdQueryVariables =
  {
    incomeInventoryRequestID: string;
    id?: ModelIDKeyConditionInput | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelIncomeInventoryProductQuantityRequestFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
  };

export type IncomeInventoryProductQuantityRequestsByIncomeInventoryRequestIDAndIdQuery =
  {
    incomeInventoryProductQuantityRequestsByIncomeInventoryRequestIDAndId?: {
      __typename: "ModelIncomeInventoryProductQuantityRequestConnection";
      items: Array<{
        __typename: "IncomeInventoryProductQuantityRequest";
        id: string;
        incomeQuantity: number;
        incomeInventoryRequestID: string;
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
  };

export type OutcomeInventoriesByUserInfoIDAndIdQueryVariables = {
  userInfoID: string;
  id?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelOutcomeInventoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type OutcomeInventoriesByUserInfoIDAndIdQuery = {
  outcomeInventoriesByUserInfoIDAndId?: {
    __typename: "ModelOutcomeInventoryConnection";
    items: Array<{
      __typename: "OutcomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryInventoryOperationIDId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type OutcomeInventoriesByBranchOfficeIDAndIdQueryVariables = {
  branchOfficeID: string;
  id?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelOutcomeInventoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type OutcomeInventoriesByBranchOfficeIDAndIdQuery = {
  outcomeInventoriesByBranchOfficeIDAndId?: {
    __typename: "ModelOutcomeInventoryConnection";
    items: Array<{
      __typename: "OutcomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryInventoryOperationIDId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type OutcomeInventoryRequestsByUserInfoIDAndIdQueryVariables = {
  userInfoID: string;
  id?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelOutcomeInventoryRequestFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type OutcomeInventoryRequestsByUserInfoIDAndIdQuery = {
  outcomeInventoryRequestsByUserInfoIDAndId?: {
    __typename: "ModelOutcomeInventoryRequestConnection";
    items: Array<{
      __typename: "OutcomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type OutcomeInventoryRequestsByBranchOfficeIDAndIdQueryVariables = {
  branchOfficeID: string;
  id?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelOutcomeInventoryRequestFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type OutcomeInventoryRequestsByBranchOfficeIDAndIdQuery = {
  outcomeInventoryRequestsByBranchOfficeIDAndId?: {
    __typename: "ModelOutcomeInventoryRequestConnection";
    items: Array<{
      __typename: "OutcomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type OutcomeInventoryProductQuantitiesByOutcomeInventoryIDAndIdQueryVariables =
  {
    outcomeInventoryID: string;
    id?: ModelIDKeyConditionInput | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelOutcomeInventoryProductQuantityFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
  };

export type OutcomeInventoryProductQuantitiesByOutcomeInventoryIDAndIdQuery = {
  outcomeInventoryProductQuantitiesByOutcomeInventoryIDAndId?: {
    __typename: "ModelOutcomeInventoryProductQuantityConnection";
    items: Array<{
      __typename: "OutcomeInventoryProductQuantity";
      id: string;
      outcomeQuantity: number;
      outcomeInventoryID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type OutcomeInventoryProductQuantityRequestsByOutcomeInventoryRequestIDAndIdQueryVariables =
  {
    outcomeInventoryRequestID: string;
    id?: ModelIDKeyConditionInput | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelOutcomeInventoryProductQuantityRequestFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
  };

export type OutcomeInventoryProductQuantityRequestsByOutcomeInventoryRequestIDAndIdQuery =
  {
    outcomeInventoryProductQuantityRequestsByOutcomeInventoryRequestIDAndId?: {
      __typename: "ModelOutcomeInventoryProductQuantityRequestConnection";
      items: Array<{
        __typename: "OutcomeInventoryProductQuantityRequest";
        id: string;
        outcomeRequestQuantity: number;
        outcomeInventoryRequestID: string;
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
  };

export type ReturnsInventoriesByUserInfoIDAndIdQueryVariables = {
  userInfoID: string;
  id?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelReturnsInventoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ReturnsInventoriesByUserInfoIDAndIdQuery = {
  returnsInventoriesByUserInfoIDAndId?: {
    __typename: "ModelReturnsInventoryConnection";
    items: Array<{
      __typename: "ReturnsInventory";
      id: string;
      userInfoID: string;
      clientID: string;
      comments?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ReturnsInventoriesByClientIDAndIdQueryVariables = {
  clientID: string;
  id?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelReturnsInventoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ReturnsInventoriesByClientIDAndIdQuery = {
  returnsInventoriesByClientIDAndId?: {
    __typename: "ModelReturnsInventoryConnection";
    items: Array<{
      __typename: "ReturnsInventory";
      id: string;
      userInfoID: string;
      clientID: string;
      comments?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type UsersByRolIDAndIdQueryVariables = {
  rolID: string;
  id?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type UsersByRolIDAndIdQuery = {
  usersByRolIDAndId?: {
    __typename: "ModelUserConnection";
    items: Array<{
      __typename: "User";
      id: string;
      email: string;
      password: string;
      rolID: string;
      hasBranchOffice?: boolean | null;
      createdAt: string;
      updatedAt: string;
      userUserInfoId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type InventoriesByBranchOfficeIDAndIdQueryVariables = {
  branchOfficeID: string;
  id?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelInventoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type InventoriesByBranchOfficeIDAndIdQuery = {
  inventoriesByBranchOfficeIDAndId?: {
    __typename: "ModelInventoryConnection";
    items: Array<{
      __typename: "Inventory";
      id: string;
      name: string;
      branchOfficeID?: string | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type InventoryProductsByInventoryIDAndIdQueryVariables = {
  inventoryID: string;
  id?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelInventoryProductFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type InventoryProductsByInventoryIDAndIdQuery = {
  inventoryProductsByInventoryIDAndId?: {
    __typename: "ModelInventoryProductConnection";
    items: Array<{
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      inventory?: {
        __typename: "Inventory";
        id: string;
        name: string;
        branchOfficeID?: string | null;
        isMain?: boolean | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      productID: string;
      product?: {
        __typename: "Product";
        id: string;
        class_id: number;
        category_id: number;
        subcategory_id: number;
        name: string;
        description?: string | null;
        price: number;
        commission?: number | null;
        hasCommission?: boolean | null;
        hasDiscount?: boolean | null;
        productProviderID: string;
        createdAt: string;
        updatedAt: string;
      } | null;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      productProvider?: {
        __typename: "ProductProvider";
        id: string;
        createdAt: string;
        updatedAt: string;
        productProviderProviderIDId?: string | null;
      } | null;
      discounts?: {
        __typename: "ModelDiscountInventoryProductConnection";
        nextToken?: string | null;
      } | null;
      inventoryProductIncomeInventory?: {
        __typename: "ModelInventoryProductIncomeInventoryConnection";
        nextToken?: string | null;
      } | null;
      inventoryProductOutcomeInventory?: {
        __typename: "ModelInventoryProductOutcomeInventoryConnection";
        nextToken?: string | null;
      } | null;
      inventoryProductSalesOperation?: {
        __typename: "ModelInventoryProductSalesOperationConnection";
        nextToken?: string | null;
      } | null;
      returnsInventory?: {
        __typename: "ModelInventoryProductReturnsInventoryConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};
export type InventoryProductsByProductIDAndIdQueryVariables = {
  productID: string;
  id?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelInventoryProductFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type InventoryProductsByProductIDAndIdQuery = {
  inventoryProductsByProductIDAndId?: {
    __typename: "ModelInventoryProductConnection";
    items: Array<{
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type InventoryProductsByProductProviderIDAndIdQueryVariables = {
  productProviderID: string;
  id?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelInventoryProductFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type InventoryProductsByProductProviderIDAndIdQuery = {
  inventoryProductsByProductProviderIDAndId?: {
    __typename: "ModelInventoryProductConnection";
    items: Array<{
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SalesOperationsByNonRegisteredClientIDAndIdQueryVariables = {
  nonRegisteredClientID: string;
  id?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelSalesOperationFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type SalesOperationsByNonRegisteredClientIDAndIdQuery = {
  salesOperationsByNonRegisteredClientIDAndId?: {
    __typename: "ModelSalesOperationConnection";
    items: Array<{
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SalesOperationsByClientIDAndIdQueryVariables = {
  clientID: string;
  id?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelSalesOperationFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type SalesOperationsByClientIDAndIdQuery = {
  salesOperationsByClientIDAndId?: {
    __typename: "ModelSalesOperationConnection";
    items: Array<{
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SalesOperationsByUserInfoIDAndIdQueryVariables = {
  userInfoID: string;
  id?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelSalesOperationFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type SalesOperationsByUserInfoIDAndIdQuery = {
  salesOperationsByUserInfoIDAndId?: {
    __typename: "ModelSalesOperationConnection";
    items: Array<{
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SalesOperationsByBranchOfficeIDAndIdQueryVariables = {
  branchOfficeID: string;
  id?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelSalesOperationFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type SalesOperationsByBranchOfficeIDAndIdQuery = {
  salesOperationsByBranchOfficeIDAndId?: {
    __typename: "ModelSalesOperationConnection";
    items: Array<{
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SalesOperationClientCreditFirstLastPaymentsBySalesOperationIDAndIdQueryVariables =
  {
    salesOperationID: string;
    id?: ModelIDKeyConditionInput | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelSalesOperationClientCreditFirstLastPaymentFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
  };

export type SalesOperationClientCreditFirstLastPaymentsBySalesOperationIDAndIdQuery =
  {
    salesOperationClientCreditFirstLastPaymentsBySalesOperationIDAndId?: {
      __typename: "ModelSalesOperationClientCreditFirstLastPaymentConnection";
      items: Array<{
        __typename: "SalesOperationClientCreditFirstLastPayment";
        id: string;
        salesOperationID: string;
        startDate?: string | null;
        endDate?: string | null;
        clientID?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
  };

export type SalesOperationClientCreditFirstLastPaymentsByClientIDAndIdQueryVariables =
  {
    clientID: string;
    id?: ModelIDKeyConditionInput | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelSalesOperationClientCreditFirstLastPaymentFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
  };

export type SalesOperationClientCreditFirstLastPaymentsByClientIDAndIdQuery = {
  salesOperationClientCreditFirstLastPaymentsByClientIDAndId?: {
    __typename: "ModelSalesOperationClientCreditFirstLastPaymentConnection";
    items: Array<{
      __typename: "SalesOperationClientCreditFirstLastPayment";
      id: string;
      salesOperationID: string;
      startDate?: string | null;
      endDate?: string | null;
      clientID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SalesOperationClientCreditMovementsBySalesOperationIDAndIdQueryVariables =
  {
    salesOperationID: string;
    id?: ModelIDKeyConditionInput | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelSalesOperationClientCreditMovementsFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
  };

export type SalesOperationClientCreditMovementsBySalesOperationIDAndIdQuery = {
  salesOperationClientCreditMovementsBySalesOperationIDAndId?: {
    __typename: "ModelSalesOperationClientCreditMovementsConnection";
    items: Array<{
      __typename: "SalesOperationClientCreditMovements";
      id: string;
      salesOperationID: string;
      paymentDate?: string | null;
      datePaid?: string | null;
      amountToPay: number;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      status: SalesOperationClientCreditMovementStatus;
      numberOfPayment?: number | null;
      clientID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SalesOperationClientCreditMovementsByClientIDAndIdQueryVariables = {
  clientID: string;
  id?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelSalesOperationClientCreditMovementsFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type SalesOperationClientCreditMovementsByClientIDAndIdQuery = {
  salesOperationClientCreditMovementsByClientIDAndId?: {
    __typename: "ModelSalesOperationClientCreditMovementsConnection";
    items: Array<{
      __typename: "SalesOperationClientCreditMovements";
      id: string;
      salesOperationID: string;
      paymentDate?: string | null;
      datePaid?: string | null;
      amountToPay: number;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      status: SalesOperationClientCreditMovementStatus;
      numberOfPayment?: number | null;
      clientID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SalesOperationInventoryProductQuantitiesBySalesOperationIDAndIdQueryVariables =
  {
    salesOperationID: string;
    id?: ModelIDKeyConditionInput | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelSalesOperationInventoryProductQuantityFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
  };

export type SalesOperationInventoryProductQuantitiesBySalesOperationIDAndIdQuery =
  {
    salesOperationInventoryProductQuantitiesBySalesOperationIDAndId?: {
      __typename: "ModelSalesOperationInventoryProductQuantityConnection";
      items: Array<{
        __typename: "SalesOperationInventoryProductQuantity";
        id: string;
        name?: string | null;
        salesOperationID: string;
        soldProductQuantity: number;
        withDiscount?: boolean | null;
        discountPercentage?: number | null;
        discountPerProduct?: number | null;
        totalDiscounted?: number | null;
        productPriceWithDiscount?: number | null;
        amountToPayWithDiscount?: number | null;
        amountToPay: number;
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
  };

export type CompanyExpensesByUserInfoIDAndIdQueryVariables = {
  userInfoID: string;
  id?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelCompanyExpensesFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type CompanyExpensesByUserInfoIDAndIdQuery = {
  companyExpensesByUserInfoIDAndId?: {
    __typename: "ModelCompanyExpensesConnection";
    items: Array<{
      __typename: "CompanyExpenses";
      id: string;
      name: string;
      description?: string | null;
      costType: CostType;
      date?: string | null;
      amount: number;
      userInfoID?: string | null;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type CompanyExpensesByBranchOfficeIDAndIdQueryVariables = {
  branchOfficeID: string;
  id?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelCompanyExpensesFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type CompanyExpensesByBranchOfficeIDAndIdQuery = {
  companyExpensesByBranchOfficeIDAndId?: {
    __typename: "ModelCompanyExpensesConnection";
    items: Array<{
      __typename: "CompanyExpenses";
      id: string;
      name: string;
      description?: string | null;
      costType: CostType;
      date?: string | null;
      amount: number;
      userInfoID?: string | null;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SalesOperationCustomerSubscriptionsBySalesOperationIDAndIdQueryVariables =
  {
    salesOperationID: string;
    id?: ModelIDKeyConditionInput | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelSalesOperationCustomerSubscriptionFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
  };

export type SalesOperationCustomerSubscriptionsBySalesOperationIDAndIdQuery = {
  salesOperationCustomerSubscriptionsBySalesOperationIDAndId?: {
    __typename: "ModelSalesOperationCustomerSubscriptionConnection";
    items: Array<{
      __typename: "SalesOperationCustomerSubscription";
      id: string;
      salesOperationID: string;
      clientID?: string | null;
      date?: string | null;
      advancePayment?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SalesOperationCustomerSubscriptionsByClientIDAndIdQueryVariables = {
  clientID: string;
  id?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelSalesOperationCustomerSubscriptionFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type SalesOperationCustomerSubscriptionsByClientIDAndIdQuery = {
  salesOperationCustomerSubscriptionsByClientIDAndId?: {
    __typename: "ModelSalesOperationCustomerSubscriptionConnection";
    items: Array<{
      __typename: "SalesOperationCustomerSubscription";
      id: string;
      salesOperationID: string;
      clientID?: string | null;
      date?: string | null;
      advancePayment?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ProductProviderResponsiblesByProductproviderIDAndIdQueryVariables =
  {
    productproviderID: string;
    id?: ModelIDKeyConditionInput | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelProductProviderResponsibleFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
  };

export type ProductProviderResponsiblesByProductproviderIDAndIdQuery = {
  productProviderResponsiblesByProductproviderIDAndId?: {
    __typename: "ModelProductProviderResponsibleConnection";
    items: Array<{
      __typename: "ProductProviderResponsible";
      id: string;
      productproviderID: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      RFC?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ServiceProviderResponsiblesByServiceproviderIDAndIdQueryVariables =
  {
    serviceproviderID: string;
    id?: ModelIDKeyConditionInput | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelServiceProviderResponsibleFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
  };

export type ServiceProviderResponsiblesByServiceproviderIDAndIdQuery = {
  serviceProviderResponsiblesByServiceproviderIDAndId?: {
    __typename: "ModelServiceProviderResponsibleConnection";
    items: Array<{
      __typename: "ServiceProviderResponsible";
      id: string;
      serviceproviderID: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone?: string | null;
      RFC?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type InventoryProductIncomeInventoriesByIncomeInventoryProductQuantityIdQueryVariables =
  {
    incomeInventoryProductQuantityId: string;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelInventoryProductIncomeInventoryFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
  };

export type InventoryProductIncomeInventoriesByIncomeInventoryProductQuantityIdQuery =
  {
    inventoryProductIncomeInventoriesByIncomeInventoryProductQuantityId?: {
      __typename: "ModelInventoryProductIncomeInventoryConnection";
      items: Array<{
        __typename: "InventoryProductIncomeInventory";
        id: string;
        incomeInventoryProductQuantityId: string;
        inventoryProductId: string;
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
  };

export type InventoryProductIncomeInventoriesByInventoryProductIdQueryVariables =
  {
    inventoryProductId: string;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelInventoryProductIncomeInventoryFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
  };

export type InventoryProductIncomeInventoriesByInventoryProductIdQuery = {
  inventoryProductIncomeInventoriesByInventoryProductId?: {
    __typename: "ModelInventoryProductIncomeInventoryConnection";
    items: Array<{
      __typename: "InventoryProductIncomeInventory";
      id: string;
      incomeInventoryProductQuantityId: string;
      inventoryProductId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type InventoryProductIncomeInventoryRequestsByIncomeInventoryProductQuantityRequestIdQueryVariables =
  {
    incomeInventoryProductQuantityRequestId: string;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelInventoryProductIncomeInventoryRequestFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
  };

export type InventoryProductIncomeInventoryRequestsByIncomeInventoryProductQuantityRequestIdQuery =
  {
    inventoryProductIncomeInventoryRequestsByIncomeInventoryProductQuantityRequestId?: {
      __typename: "ModelInventoryProductIncomeInventoryRequestConnection";
      items: Array<{
        __typename: "InventoryProductIncomeInventoryRequest";
        id: string;
        incomeInventoryProductQuantityRequestId: string;
        inventoryProductId: string;
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
  };

export type InventoryProductIncomeInventoryRequestsByInventoryProductIdQueryVariables =
  {
    inventoryProductId: string;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelInventoryProductIncomeInventoryRequestFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
  };

export type InventoryProductIncomeInventoryRequestsByInventoryProductIdQuery = {
  inventoryProductIncomeInventoryRequestsByInventoryProductId?: {
    __typename: "ModelInventoryProductIncomeInventoryRequestConnection";
    items: Array<{
      __typename: "InventoryProductIncomeInventoryRequest";
      id: string;
      incomeInventoryProductQuantityRequestId: string;
      inventoryProductId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type InventoryProductOutcomeInventoriesByOutcomeInventoryProductQuantityIdQueryVariables =
  {
    outcomeInventoryProductQuantityId: string;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelInventoryProductOutcomeInventoryFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
  };

export type InventoryProductOutcomeInventoriesByOutcomeInventoryProductQuantityIdQuery =
  {
    inventoryProductOutcomeInventoriesByOutcomeInventoryProductQuantityId?: {
      __typename: "ModelInventoryProductOutcomeInventoryConnection";
      items: Array<{
        __typename: "InventoryProductOutcomeInventory";
        id: string;
        outcomeInventoryProductQuantityId: string;
        inventoryProductId: string;
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
  };

export type InventoryProductOutcomeInventoriesByInventoryProductIdQueryVariables =
  {
    inventoryProductId: string;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelInventoryProductOutcomeInventoryFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
  };

export type InventoryProductOutcomeInventoriesByInventoryProductIdQuery = {
  inventoryProductOutcomeInventoriesByInventoryProductId?: {
    __typename: "ModelInventoryProductOutcomeInventoryConnection";
    items: Array<{
      __typename: "InventoryProductOutcomeInventory";
      id: string;
      outcomeInventoryProductQuantityId: string;
      inventoryProductId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type InventoryProductOutcomeInventoryRequestsByOutcomeInventoryProductQuantityRequestIdQueryVariables =
  {
    outcomeInventoryProductQuantityRequestId: string;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelInventoryProductOutcomeInventoryRequestFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
  };

export type InventoryProductOutcomeInventoryRequestsByOutcomeInventoryProductQuantityRequestIdQuery =
  {
    inventoryProductOutcomeInventoryRequestsByOutcomeInventoryProductQuantityRequestId?: {
      __typename: "ModelInventoryProductOutcomeInventoryRequestConnection";
      items: Array<{
        __typename: "InventoryProductOutcomeInventoryRequest";
        id: string;
        outcomeInventoryProductQuantityRequestId: string;
        inventoryProductId: string;
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
  };

export type InventoryProductOutcomeInventoryRequestsByInventoryProductIdQueryVariables =
  {
    inventoryProductId: string;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelInventoryProductOutcomeInventoryRequestFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
  };

export type InventoryProductOutcomeInventoryRequestsByInventoryProductIdQuery =
  {
    inventoryProductOutcomeInventoryRequestsByInventoryProductId?: {
      __typename: "ModelInventoryProductOutcomeInventoryRequestConnection";
      items: Array<{
        __typename: "InventoryProductOutcomeInventoryRequest";
        id: string;
        outcomeInventoryProductQuantityRequestId: string;
        inventoryProductId: string;
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
  };

export type InventoryProductReturnsInventoriesByReturnsInventoryIdQueryVariables =
  {
    returnsInventoryId: string;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelInventoryProductReturnsInventoryFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
  };

export type InventoryProductReturnsInventoriesByReturnsInventoryIdQuery = {
  inventoryProductReturnsInventoriesByReturnsInventoryId?: {
    __typename: "ModelInventoryProductReturnsInventoryConnection";
    items: Array<{
      __typename: "InventoryProductReturnsInventory";
      id: string;
      returnsInventoryId: string;
      inventoryProductId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type InventoryProductReturnsInventoriesByInventoryProductIdQueryVariables =
  {
    inventoryProductId: string;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelInventoryProductReturnsInventoryFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
  };

export type InventoryProductReturnsInventoriesByInventoryProductIdQuery = {
  inventoryProductReturnsInventoriesByInventoryProductId?: {
    __typename: "ModelInventoryProductReturnsInventoryConnection";
    items: Array<{
      __typename: "InventoryProductReturnsInventory";
      id: string;
      returnsInventoryId: string;
      inventoryProductId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type BranchOfficeUsersByUserIdQueryVariables = {
  userId: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelBranchOfficeUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type BranchOfficeUsersByUserIdQuery = {
  branchOfficeUsersByUserId?: {
    __typename: "ModelBranchOfficeUserConnection";
    items: Array<{
      __typename: "BranchOfficeUser";
      id: string;
      userId: string;
      branchOfficeId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type BranchOfficeUsersByBranchOfficeIdQueryVariables = {
  branchOfficeId: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelBranchOfficeUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type BranchOfficeUsersByBranchOfficeIdQuery = {
  branchOfficeUsersByBranchOfficeId?: {
    __typename: "ModelBranchOfficeUserConnection";
    items: Array<{
      __typename: "BranchOfficeUser";
      id: string;
      userId: string;
      branchOfficeId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type DiscountInventoryProductsByInventoryProductIdQueryVariables = {
  inventoryProductId: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelDiscountInventoryProductFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type DiscountInventoryProductsByInventoryProductIdQuery = {
  discountInventoryProductsByInventoryProductId?: {
    __typename: "ModelDiscountInventoryProductConnection";
    items: Array<{
      __typename: "DiscountInventoryProduct";
      id: string;
      inventoryProductId: string;
      discountsId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type DiscountInventoryProductsByDiscountsIdQueryVariables = {
  discountsId: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelDiscountInventoryProductFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type DiscountInventoryProductsByDiscountsIdQuery = {
  discountInventoryProductsByDiscountsId?: {
    __typename: "ModelDiscountInventoryProductConnection";
    items: Array<{
      __typename: "DiscountInventoryProduct";
      id: string;
      inventoryProductId: string;
      discountsId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type InventoryProductSalesOperationsByInventoryProductIdQueryVariables =
  {
    inventoryProductId: string;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelInventoryProductSalesOperationFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
  };

export type InventoryProductSalesOperationsByInventoryProductIdQuery = {
  inventoryProductSalesOperationsByInventoryProductId?: {
    __typename: "ModelInventoryProductSalesOperationConnection";
    items: Array<{
      __typename: "InventoryProductSalesOperation";
      id: string;
      inventoryProductId: string;
      salesOperationInventoryProductQuantityId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type InventoryProductSalesOperationsBySalesOperationInventoryProductQuantityIdQueryVariables =
  {
    salesOperationInventoryProductQuantityId: string;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelInventoryProductSalesOperationFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
  };

export type InventoryProductSalesOperationsBySalesOperationInventoryProductQuantityIdQuery =
  {
    inventoryProductSalesOperationsBySalesOperationInventoryProductQuantityId?: {
      __typename: "ModelInventoryProductSalesOperationConnection";
      items: Array<{
        __typename: "InventoryProductSalesOperation";
        id: string;
        inventoryProductId: string;
        salesOperationInventoryProductQuantityId: string;
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
  };

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null;
};

export type OnCreateCategorySubscription = {
  onCreateCategory?: {
    __typename: "Category";
    id: number;
    name?: string | null;
    subcategories?: {
      __typename: "ModelSubCategoryConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null;
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?: {
    __typename: "Category";
    id: number;
    name?: string | null;
    subcategories?: {
      __typename: "ModelSubCategoryConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null;
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?: {
    __typename: "Category";
    id: number;
    name?: string | null;
    subcategories?: {
      __typename: "ModelSubCategoryConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateSubCategorySubscriptionVariables = {
  filter?: ModelSubscriptionSubCategoryFilterInput | null;
};

export type OnCreateSubCategorySubscription = {
  onCreateSubCategory?: {
    __typename: "SubCategory";
    id: number;
    categoryID: number;
    subcategory_name?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateSubCategorySubscriptionVariables = {
  filter?: ModelSubscriptionSubCategoryFilterInput | null;
};

export type OnUpdateSubCategorySubscription = {
  onUpdateSubCategory?: {
    __typename: "SubCategory";
    id: number;
    categoryID: number;
    subcategory_name?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteSubCategorySubscriptionVariables = {
  filter?: ModelSubscriptionSubCategoryFilterInput | null;
};

export type OnDeleteSubCategorySubscription = {
  onDeleteSubCategory?: {
    __typename: "SubCategory";
    id: number;
    categoryID: number;
    subcategory_name?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateClassSubscriptionVariables = {
  filter?: ModelSubscriptionClassFilterInput | null;
};

export type OnCreateClassSubscription = {
  onCreateClass?: {
    __typename: "Class";
    id: number;
    name?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateClassSubscriptionVariables = {
  filter?: ModelSubscriptionClassFilterInput | null;
};

export type OnUpdateClassSubscription = {
  onUpdateClass?: {
    __typename: "Class";
    id: number;
    name?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteClassSubscriptionVariables = {
  filter?: ModelSubscriptionClassFilterInput | null;
};

export type OnDeleteClassSubscription = {
  onDeleteClass?: {
    __typename: "Class";
    id: number;
    name?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateClientSubscriptionVariables = {
  filter?: ModelSubscriptionClientFilterInput | null;
};

export type OnCreateClientSubscription = {
  onCreateClient?: {
    __typename: "Client";
    id: string;
    name: string;
    second_name?: string | null;
    lastname: string;
    second_lastname?: string | null;
    phone: string;
    fixed_phone?: string | null;
    email?: string | null;
    birthday?: string | null;
    RFC?: string | null;
    address?: string | null;
    settlement?: string | null;
    postal_code?: string | null;
    state?: string | null;
    city?: string | null;
    salesOperation?: {
      __typename: "ModelSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    creditID?: string | null;
    credit?: {
      __typename: "Credits";
      id: string;
      totalCredit: number;
      credit_available: number;
      outstanding_balance?: number | null;
      payment_status: PaymentStatus;
      last_payment_date?: string | null;
      startDate?: string | null;
      createdAt: string;
      updatedAt: string;
      creditsClientId?: string | null;
    } | null;
    creditRequests?: {
      __typename: "ModelCreditRequestsConnection";
      nextToken?: string | null;
    } | null;
    branchOfficeID: string;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    hasCredit: boolean;
    hasCreditRequest?: boolean | null;
    returnsInventory?: {
      __typename: "ModelReturnsInventoryConnection";
      nextToken?: string | null;
    } | null;
    salesOperationClientCreditMovements?: {
      __typename: "ModelSalesOperationClientCreditMovementsConnection";
      nextToken?: string | null;
    } | null;
    salesOperationClientCreditFirstLastPayment?: {
      __typename: "ModelSalesOperationClientCreditFirstLastPaymentConnection";
      nextToken?: string | null;
    } | null;
    salesOperationCustomerSubscription?: {
      __typename: "ModelSalesOperationCustomerSubscriptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateClientSubscriptionVariables = {
  filter?: ModelSubscriptionClientFilterInput | null;
};

export type OnUpdateClientSubscription = {
  onUpdateClient?: {
    __typename: "Client";
    id: string;
    name: string;
    second_name?: string | null;
    lastname: string;
    second_lastname?: string | null;
    phone: string;
    fixed_phone?: string | null;
    email?: string | null;
    birthday?: string | null;
    RFC?: string | null;
    address?: string | null;
    settlement?: string | null;
    postal_code?: string | null;
    state?: string | null;
    city?: string | null;
    salesOperation?: {
      __typename: "ModelSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    creditID?: string | null;
    credit?: {
      __typename: "Credits";
      id: string;
      totalCredit: number;
      credit_available: number;
      outstanding_balance?: number | null;
      payment_status: PaymentStatus;
      last_payment_date?: string | null;
      startDate?: string | null;
      createdAt: string;
      updatedAt: string;
      creditsClientId?: string | null;
    } | null;
    creditRequests?: {
      __typename: "ModelCreditRequestsConnection";
      nextToken?: string | null;
    } | null;
    branchOfficeID: string;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    hasCredit: boolean;
    hasCreditRequest?: boolean | null;
    returnsInventory?: {
      __typename: "ModelReturnsInventoryConnection";
      nextToken?: string | null;
    } | null;
    salesOperationClientCreditMovements?: {
      __typename: "ModelSalesOperationClientCreditMovementsConnection";
      nextToken?: string | null;
    } | null;
    salesOperationClientCreditFirstLastPayment?: {
      __typename: "ModelSalesOperationClientCreditFirstLastPaymentConnection";
      nextToken?: string | null;
    } | null;
    salesOperationCustomerSubscription?: {
      __typename: "ModelSalesOperationCustomerSubscriptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteClientSubscriptionVariables = {
  filter?: ModelSubscriptionClientFilterInput | null;
};

export type OnDeleteClientSubscription = {
  onDeleteClient?: {
    __typename: "Client";
    id: string;
    name: string;
    second_name?: string | null;
    lastname: string;
    second_lastname?: string | null;
    phone: string;
    fixed_phone?: string | null;
    email?: string | null;
    birthday?: string | null;
    RFC?: string | null;
    address?: string | null;
    settlement?: string | null;
    postal_code?: string | null;
    state?: string | null;
    city?: string | null;
    salesOperation?: {
      __typename: "ModelSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    creditID?: string | null;
    credit?: {
      __typename: "Credits";
      id: string;
      totalCredit: number;
      credit_available: number;
      outstanding_balance?: number | null;
      payment_status: PaymentStatus;
      last_payment_date?: string | null;
      startDate?: string | null;
      createdAt: string;
      updatedAt: string;
      creditsClientId?: string | null;
    } | null;
    creditRequests?: {
      __typename: "ModelCreditRequestsConnection";
      nextToken?: string | null;
    } | null;
    branchOfficeID: string;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    hasCredit: boolean;
    hasCreditRequest?: boolean | null;
    returnsInventory?: {
      __typename: "ModelReturnsInventoryConnection";
      nextToken?: string | null;
    } | null;
    salesOperationClientCreditMovements?: {
      __typename: "ModelSalesOperationClientCreditMovementsConnection";
      nextToken?: string | null;
    } | null;
    salesOperationClientCreditFirstLastPayment?: {
      __typename: "ModelSalesOperationClientCreditFirstLastPaymentConnection";
      nextToken?: string | null;
    } | null;
    salesOperationCustomerSubscription?: {
      __typename: "ModelSalesOperationCustomerSubscriptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateNonRegisteredClientSubscriptionVariables = {
  filter?: ModelSubscriptionNonRegisteredClientFilterInput | null;
};

export type OnCreateNonRegisteredClientSubscription = {
  onCreateNonRegisteredClient?: {
    __typename: "NonRegisteredClient";
    id: string;
    fullName: string;
    saleOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    nonRegisteredClientSaleOperationId?: string | null;
  } | null;
};

export type OnUpdateNonRegisteredClientSubscriptionVariables = {
  filter?: ModelSubscriptionNonRegisteredClientFilterInput | null;
};

export type OnUpdateNonRegisteredClientSubscription = {
  onUpdateNonRegisteredClient?: {
    __typename: "NonRegisteredClient";
    id: string;
    fullName: string;
    saleOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    nonRegisteredClientSaleOperationId?: string | null;
  } | null;
};

export type OnDeleteNonRegisteredClientSubscriptionVariables = {
  filter?: ModelSubscriptionNonRegisteredClientFilterInput | null;
};

export type OnDeleteNonRegisteredClientSubscription = {
  onDeleteNonRegisteredClient?: {
    __typename: "NonRegisteredClient";
    id: string;
    fullName: string;
    saleOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    nonRegisteredClientSaleOperationId?: string | null;
  } | null;
};

export type OnCreateCreditsSubscriptionVariables = {
  filter?: ModelSubscriptionCreditsFilterInput | null;
};

export type OnCreateCreditsSubscription = {
  onCreateCredits?: {
    __typename: "Credits";
    id: string;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    totalCredit: number;
    credit_available: number;
    outstanding_balance?: number | null;
    payment_status: PaymentStatus;
    last_payment_date?: string | null;
    startDate?: string | null;
    createdAt: string;
    updatedAt: string;
    creditsClientId?: string | null;
  } | null;
};

export type OnUpdateCreditsSubscriptionVariables = {
  filter?: ModelSubscriptionCreditsFilterInput | null;
};

export type OnUpdateCreditsSubscription = {
  onUpdateCredits?: {
    __typename: "Credits";
    id: string;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    totalCredit: number;
    credit_available: number;
    outstanding_balance?: number | null;
    payment_status: PaymentStatus;
    last_payment_date?: string | null;
    startDate?: string | null;
    createdAt: string;
    updatedAt: string;
    creditsClientId?: string | null;
  } | null;
};

export type OnDeleteCreditsSubscriptionVariables = {
  filter?: ModelSubscriptionCreditsFilterInput | null;
};

export type OnDeleteCreditsSubscription = {
  onDeleteCredits?: {
    __typename: "Credits";
    id: string;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    totalCredit: number;
    credit_available: number;
    outstanding_balance?: number | null;
    payment_status: PaymentStatus;
    last_payment_date?: string | null;
    startDate?: string | null;
    createdAt: string;
    updatedAt: string;
    creditsClientId?: string | null;
  } | null;
};

export type OnCreateCreditRequestsSubscriptionVariables = {
  filter?: ModelSubscriptionCreditRequestsFilterInput | null;
};

export type OnCreateCreditRequestsSubscription = {
  onCreateCreditRequests?: {
    __typename: "CreditRequests";
    id: string;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    creditRequestAmount?: number | null;
    creditRequestStatus?: CreditRequestStatus | null;
    creditRequestReason?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateCreditRequestsSubscriptionVariables = {
  filter?: ModelSubscriptionCreditRequestsFilterInput | null;
};

export type OnUpdateCreditRequestsSubscription = {
  onUpdateCreditRequests?: {
    __typename: "CreditRequests";
    id: string;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    creditRequestAmount?: number | null;
    creditRequestStatus?: CreditRequestStatus | null;
    creditRequestReason?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteCreditRequestsSubscriptionVariables = {
  filter?: ModelSubscriptionCreditRequestsFilterInput | null;
};

export type OnDeleteCreditRequestsSubscription = {
  onDeleteCreditRequests?: {
    __typename: "CreditRequests";
    id: string;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    creditRequestAmount?: number | null;
    creditRequestStatus?: CreditRequestStatus | null;
    creditRequestReason?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null;
};

export type OnCreateProductSubscription = {
  onCreateProduct?: {
    __typename: "Product";
    id: string;
    class_id: number;
    category_id: number;
    subcategory_id: number;
    name: string;
    description?: string | null;
    price: number;
    commission?: number | null;
    hasCommission?: boolean | null;
    hasDiscount?: boolean | null;
    class?: {
      __typename: "Class";
      id: number;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    category?: {
      __typename: "Category";
      id: number;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    subcategory?: {
      __typename: "SubCategory";
      id: number;
      categoryID: number;
      subcategory_name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    productProviderID: string;
    productProvider?: {
      __typename: "ProductProvider";
      id: string;
      createdAt: string;
      updatedAt: string;
      productProviderProviderIDId?: string | null;
    } | null;
    inventoryProduct?: {
      __typename: "ModelInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null;
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?: {
    __typename: "Product";
    id: string;
    class_id: number;
    category_id: number;
    subcategory_id: number;
    name: string;
    description?: string | null;
    price: number;
    commission?: number | null;
    hasCommission?: boolean | null;
    hasDiscount?: boolean | null;
    class?: {
      __typename: "Class";
      id: number;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    category?: {
      __typename: "Category";
      id: number;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    subcategory?: {
      __typename: "SubCategory";
      id: number;
      categoryID: number;
      subcategory_name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    productProviderID: string;
    productProvider?: {
      __typename: "ProductProvider";
      id: string;
      createdAt: string;
      updatedAt: string;
      productProviderProviderIDId?: string | null;
    } | null;
    inventoryProduct?: {
      __typename: "ModelInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null;
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?: {
    __typename: "Product";
    id: string;
    class_id: number;
    category_id: number;
    subcategory_id: number;
    name: string;
    description?: string | null;
    price: number;
    commission?: number | null;
    hasCommission?: boolean | null;
    hasDiscount?: boolean | null;
    class?: {
      __typename: "Class";
      id: number;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    category?: {
      __typename: "Category";
      id: number;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    subcategory?: {
      __typename: "SubCategory";
      id: number;
      categoryID: number;
      subcategory_name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    productProviderID: string;
    productProvider?: {
      __typename: "ProductProvider";
      id: string;
      createdAt: string;
      updatedAt: string;
      productProviderProviderIDId?: string | null;
    } | null;
    inventoryProduct?: {
      __typename: "ModelInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateInventoryOperationSubscriptionVariables = {
  filter?: ModelSubscriptionInventoryOperationFilterInput | null;
};

export type OnCreateInventoryOperationSubscription = {
  onCreateInventoryOperation?: {
    __typename: "InventoryOperation";
    id: string;
    operationType: OperationType;
    inventoryID: string;
    inventory: {
      __typename: "Inventory";
      id: string;
      name: string;
      branchOfficeID?: string | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    incomeInventory?: {
      __typename: "IncomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      providerID: string;
      productProviderResponsibleID: string;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      incomeInventoryInventoryOperationIDId?: string | null;
    } | null;
    incomeInventoryRequest?: {
      __typename: "IncomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status: IOInventoryStatus;
      providerID: string;
      productProviderResponsibleID: string;
      branchOfficeID: string;
      userInfoID: string;
      createdAt: string;
      updatedAt: string;
      incomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null;
    outcomeInventory?: {
      __typename: "OutcomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryInventoryOperationIDId?: string | null;
    } | null;
    outcomeInventoryRequest?: {
      __typename: "OutcomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    inventoryOperationIncomeInventoryId?: string | null;
    inventoryOperationIncomeInventoryRequestId?: string | null;
    inventoryOperationOutcomeInventoryId?: string | null;
    inventoryOperationOutcomeInventoryRequestId?: string | null;
    inventoryOperationSalesOperationId?: string | null;
  } | null;
};

export type OnUpdateInventoryOperationSubscriptionVariables = {
  filter?: ModelSubscriptionInventoryOperationFilterInput | null;
};

export type OnUpdateInventoryOperationSubscription = {
  onUpdateInventoryOperation?: {
    __typename: "InventoryOperation";
    id: string;
    operationType: OperationType;
    inventoryID: string;
    inventory: {
      __typename: "Inventory";
      id: string;
      name: string;
      branchOfficeID?: string | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    incomeInventory?: {
      __typename: "IncomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      providerID: string;
      productProviderResponsibleID: string;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      incomeInventoryInventoryOperationIDId?: string | null;
    } | null;
    incomeInventoryRequest?: {
      __typename: "IncomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status: IOInventoryStatus;
      providerID: string;
      productProviderResponsibleID: string;
      branchOfficeID: string;
      userInfoID: string;
      createdAt: string;
      updatedAt: string;
      incomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null;
    outcomeInventory?: {
      __typename: "OutcomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryInventoryOperationIDId?: string | null;
    } | null;
    outcomeInventoryRequest?: {
      __typename: "OutcomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    inventoryOperationIncomeInventoryId?: string | null;
    inventoryOperationIncomeInventoryRequestId?: string | null;
    inventoryOperationOutcomeInventoryId?: string | null;
    inventoryOperationOutcomeInventoryRequestId?: string | null;
    inventoryOperationSalesOperationId?: string | null;
  } | null;
};

export type OnDeleteInventoryOperationSubscriptionVariables = {
  filter?: ModelSubscriptionInventoryOperationFilterInput | null;
};

export type OnDeleteInventoryOperationSubscription = {
  onDeleteInventoryOperation?: {
    __typename: "InventoryOperation";
    id: string;
    operationType: OperationType;
    inventoryID: string;
    inventory: {
      __typename: "Inventory";
      id: string;
      name: string;
      branchOfficeID?: string | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    incomeInventory?: {
      __typename: "IncomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      providerID: string;
      productProviderResponsibleID: string;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      incomeInventoryInventoryOperationIDId?: string | null;
    } | null;
    incomeInventoryRequest?: {
      __typename: "IncomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status: IOInventoryStatus;
      providerID: string;
      productProviderResponsibleID: string;
      branchOfficeID: string;
      userInfoID: string;
      createdAt: string;
      updatedAt: string;
      incomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null;
    outcomeInventory?: {
      __typename: "OutcomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryInventoryOperationIDId?: string | null;
    } | null;
    outcomeInventoryRequest?: {
      __typename: "OutcomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    inventoryOperationIncomeInventoryId?: string | null;
    inventoryOperationIncomeInventoryRequestId?: string | null;
    inventoryOperationOutcomeInventoryId?: string | null;
    inventoryOperationOutcomeInventoryRequestId?: string | null;
    inventoryOperationSalesOperationId?: string | null;
  } | null;
};

export type OnCreateIncomeInventorySubscriptionVariables = {
  filter?: ModelSubscriptionIncomeInventoryFilterInput | null;
};

export type OnCreateIncomeInventorySubscription = {
  onCreateIncomeInventory?: {
    __typename: "IncomeInventory";
    id: string;
    date: string;
    comments?: string | null;
    status?: IOInventoryStatus | null;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    providerID: string;
    provider?: {
      __typename: "Provider";
      id: string;
      enterprise_name: string;
      enterprise_RFC?: string | null;
      phone?: string | null;
      fixed_phone?: string | null;
      type?: string | null;
      createdAt: string;
      updatedAt: string;
      providerProductproviderId?: string | null;
      providerServiceproviderId?: string | null;
    } | null;
    productProviderResponsibleID: string;
    productProviderResponsible?: {
      __typename: "ProductProviderResponsible";
      id: string;
      productproviderID: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      RFC?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    incomeInventoryProductQuantities?: {
      __typename: "ModelIncomeInventoryProductQuantityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    incomeInventoryInventoryOperationIDId?: string | null;
  } | null;
};

export type OnUpdateIncomeInventorySubscriptionVariables = {
  filter?: ModelSubscriptionIncomeInventoryFilterInput | null;
};

export type OnUpdateIncomeInventorySubscription = {
  onUpdateIncomeInventory?: {
    __typename: "IncomeInventory";
    id: string;
    date: string;
    comments?: string | null;
    status?: IOInventoryStatus | null;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    providerID: string;
    provider?: {
      __typename: "Provider";
      id: string;
      enterprise_name: string;
      enterprise_RFC?: string | null;
      phone?: string | null;
      fixed_phone?: string | null;
      type?: string | null;
      createdAt: string;
      updatedAt: string;
      providerProductproviderId?: string | null;
      providerServiceproviderId?: string | null;
    } | null;
    productProviderResponsibleID: string;
    productProviderResponsible?: {
      __typename: "ProductProviderResponsible";
      id: string;
      productproviderID: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      RFC?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    incomeInventoryProductQuantities?: {
      __typename: "ModelIncomeInventoryProductQuantityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    incomeInventoryInventoryOperationIDId?: string | null;
  } | null;
};

export type OnDeleteIncomeInventorySubscriptionVariables = {
  filter?: ModelSubscriptionIncomeInventoryFilterInput | null;
};

export type OnDeleteIncomeInventorySubscription = {
  onDeleteIncomeInventory?: {
    __typename: "IncomeInventory";
    id: string;
    date: string;
    comments?: string | null;
    status?: IOInventoryStatus | null;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    providerID: string;
    provider?: {
      __typename: "Provider";
      id: string;
      enterprise_name: string;
      enterprise_RFC?: string | null;
      phone?: string | null;
      fixed_phone?: string | null;
      type?: string | null;
      createdAt: string;
      updatedAt: string;
      providerProductproviderId?: string | null;
      providerServiceproviderId?: string | null;
    } | null;
    productProviderResponsibleID: string;
    productProviderResponsible?: {
      __typename: "ProductProviderResponsible";
      id: string;
      productproviderID: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      RFC?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    incomeInventoryProductQuantities?: {
      __typename: "ModelIncomeInventoryProductQuantityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    incomeInventoryInventoryOperationIDId?: string | null;
  } | null;
};

export type OnCreateIncomeInventoryRequestSubscriptionVariables = {
  filter?: ModelSubscriptionIncomeInventoryRequestFilterInput | null;
};

export type OnCreateIncomeInventoryRequestSubscription = {
  onCreateIncomeInventoryRequest?: {
    __typename: "IncomeInventoryRequest";
    id: string;
    date: string;
    comments?: string | null;
    status: IOInventoryStatus;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    providerID: string;
    provider?: {
      __typename: "Provider";
      id: string;
      enterprise_name: string;
      enterprise_RFC?: string | null;
      phone?: string | null;
      fixed_phone?: string | null;
      type?: string | null;
      createdAt: string;
      updatedAt: string;
      providerProductproviderId?: string | null;
      providerServiceproviderId?: string | null;
    } | null;
    productProviderResponsibleID: string;
    productProviderResponsible?: {
      __typename: "ProductProviderResponsible";
      id: string;
      productproviderID: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      RFC?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    branchOfficeID: string;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    incomeInventoryProductQuantitiesRequest?: {
      __typename: "ModelIncomeInventoryProductQuantityRequestConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    incomeInventoryRequestInventoryOperationIDId?: string | null;
  } | null;
};

export type OnUpdateIncomeInventoryRequestSubscriptionVariables = {
  filter?: ModelSubscriptionIncomeInventoryRequestFilterInput | null;
};

export type OnUpdateIncomeInventoryRequestSubscription = {
  onUpdateIncomeInventoryRequest?: {
    __typename: "IncomeInventoryRequest";
    id: string;
    date: string;
    comments?: string | null;
    status: IOInventoryStatus;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    providerID: string;
    provider?: {
      __typename: "Provider";
      id: string;
      enterprise_name: string;
      enterprise_RFC?: string | null;
      phone?: string | null;
      fixed_phone?: string | null;
      type?: string | null;
      createdAt: string;
      updatedAt: string;
      providerProductproviderId?: string | null;
      providerServiceproviderId?: string | null;
    } | null;
    productProviderResponsibleID: string;
    productProviderResponsible?: {
      __typename: "ProductProviderResponsible";
      id: string;
      productproviderID: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      RFC?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    branchOfficeID: string;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    incomeInventoryProductQuantitiesRequest?: {
      __typename: "ModelIncomeInventoryProductQuantityRequestConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    incomeInventoryRequestInventoryOperationIDId?: string | null;
  } | null;
};

export type OnDeleteIncomeInventoryRequestSubscriptionVariables = {
  filter?: ModelSubscriptionIncomeInventoryRequestFilterInput | null;
};

export type OnDeleteIncomeInventoryRequestSubscription = {
  onDeleteIncomeInventoryRequest?: {
    __typename: "IncomeInventoryRequest";
    id: string;
    date: string;
    comments?: string | null;
    status: IOInventoryStatus;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    providerID: string;
    provider?: {
      __typename: "Provider";
      id: string;
      enterprise_name: string;
      enterprise_RFC?: string | null;
      phone?: string | null;
      fixed_phone?: string | null;
      type?: string | null;
      createdAt: string;
      updatedAt: string;
      providerProductproviderId?: string | null;
      providerServiceproviderId?: string | null;
    } | null;
    productProviderResponsibleID: string;
    productProviderResponsible?: {
      __typename: "ProductProviderResponsible";
      id: string;
      productproviderID: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      RFC?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    branchOfficeID: string;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    incomeInventoryProductQuantitiesRequest?: {
      __typename: "ModelIncomeInventoryProductQuantityRequestConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    incomeInventoryRequestInventoryOperationIDId?: string | null;
  } | null;
};

export type OnCreateIncomeInventoryProductQuantitySubscriptionVariables = {
  filter?: ModelSubscriptionIncomeInventoryProductQuantityFilterInput | null;
};

export type OnCreateIncomeInventoryProductQuantitySubscription = {
  onCreateIncomeInventoryProductQuantity?: {
    __typename: "IncomeInventoryProductQuantity";
    id: string;
    incomeQuantity: number;
    inventoryProducts?: {
      __typename: "ModelInventoryProductIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoryID: string;
    incomeInventory?: {
      __typename: "IncomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      providerID: string;
      productProviderResponsibleID: string;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      incomeInventoryInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateIncomeInventoryProductQuantitySubscriptionVariables = {
  filter?: ModelSubscriptionIncomeInventoryProductQuantityFilterInput | null;
};

export type OnUpdateIncomeInventoryProductQuantitySubscription = {
  onUpdateIncomeInventoryProductQuantity?: {
    __typename: "IncomeInventoryProductQuantity";
    id: string;
    incomeQuantity: number;
    inventoryProducts?: {
      __typename: "ModelInventoryProductIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoryID: string;
    incomeInventory?: {
      __typename: "IncomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      providerID: string;
      productProviderResponsibleID: string;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      incomeInventoryInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteIncomeInventoryProductQuantitySubscriptionVariables = {
  filter?: ModelSubscriptionIncomeInventoryProductQuantityFilterInput | null;
};

export type OnDeleteIncomeInventoryProductQuantitySubscription = {
  onDeleteIncomeInventoryProductQuantity?: {
    __typename: "IncomeInventoryProductQuantity";
    id: string;
    incomeQuantity: number;
    inventoryProducts?: {
      __typename: "ModelInventoryProductIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoryID: string;
    incomeInventory?: {
      __typename: "IncomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      providerID: string;
      productProviderResponsibleID: string;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      incomeInventoryInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateIncomeInventoryProductQuantityRequestSubscriptionVariables =
  {
    filter?: ModelSubscriptionIncomeInventoryProductQuantityRequestFilterInput | null;
  };

export type OnCreateIncomeInventoryProductQuantityRequestSubscription = {
  onCreateIncomeInventoryProductQuantityRequest?: {
    __typename: "IncomeInventoryProductQuantityRequest";
    id: string;
    incomeQuantity: number;
    inventoryProducts?: {
      __typename: "ModelInventoryProductIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoryRequestID: string;
    incomeInventoryRequest?: {
      __typename: "IncomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status: IOInventoryStatus;
      providerID: string;
      productProviderResponsibleID: string;
      branchOfficeID: string;
      userInfoID: string;
      createdAt: string;
      updatedAt: string;
      incomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateIncomeInventoryProductQuantityRequestSubscriptionVariables =
  {
    filter?: ModelSubscriptionIncomeInventoryProductQuantityRequestFilterInput | null;
  };

export type OnUpdateIncomeInventoryProductQuantityRequestSubscription = {
  onUpdateIncomeInventoryProductQuantityRequest?: {
    __typename: "IncomeInventoryProductQuantityRequest";
    id: string;
    incomeQuantity: number;
    inventoryProducts?: {
      __typename: "ModelInventoryProductIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoryRequestID: string;
    incomeInventoryRequest?: {
      __typename: "IncomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status: IOInventoryStatus;
      providerID: string;
      productProviderResponsibleID: string;
      branchOfficeID: string;
      userInfoID: string;
      createdAt: string;
      updatedAt: string;
      incomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteIncomeInventoryProductQuantityRequestSubscriptionVariables =
  {
    filter?: ModelSubscriptionIncomeInventoryProductQuantityRequestFilterInput | null;
  };

export type OnDeleteIncomeInventoryProductQuantityRequestSubscription = {
  onDeleteIncomeInventoryProductQuantityRequest?: {
    __typename: "IncomeInventoryProductQuantityRequest";
    id: string;
    incomeQuantity: number;
    inventoryProducts?: {
      __typename: "ModelInventoryProductIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoryRequestID: string;
    incomeInventoryRequest?: {
      __typename: "IncomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status: IOInventoryStatus;
      providerID: string;
      productProviderResponsibleID: string;
      branchOfficeID: string;
      userInfoID: string;
      createdAt: string;
      updatedAt: string;
      incomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateOutcomeInventorySubscriptionVariables = {
  filter?: ModelSubscriptionOutcomeInventoryFilterInput | null;
};

export type OnCreateOutcomeInventorySubscription = {
  onCreateOutcomeInventory?: {
    __typename: "OutcomeInventory";
    id: string;
    date: string;
    comments?: string | null;
    status?: IOInventoryStatus | null;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    outcomeInventoryProductQuantities?: {
      __typename: "ModelOutcomeInventoryProductQuantityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    outcomeInventoryInventoryOperationIDId?: string | null;
  } | null;
};

export type OnUpdateOutcomeInventorySubscriptionVariables = {
  filter?: ModelSubscriptionOutcomeInventoryFilterInput | null;
};

export type OnUpdateOutcomeInventorySubscription = {
  onUpdateOutcomeInventory?: {
    __typename: "OutcomeInventory";
    id: string;
    date: string;
    comments?: string | null;
    status?: IOInventoryStatus | null;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    outcomeInventoryProductQuantities?: {
      __typename: "ModelOutcomeInventoryProductQuantityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    outcomeInventoryInventoryOperationIDId?: string | null;
  } | null;
};

export type OnDeleteOutcomeInventorySubscriptionVariables = {
  filter?: ModelSubscriptionOutcomeInventoryFilterInput | null;
};

export type OnDeleteOutcomeInventorySubscription = {
  onDeleteOutcomeInventory?: {
    __typename: "OutcomeInventory";
    id: string;
    date: string;
    comments?: string | null;
    status?: IOInventoryStatus | null;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    outcomeInventoryProductQuantities?: {
      __typename: "ModelOutcomeInventoryProductQuantityConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    outcomeInventoryInventoryOperationIDId?: string | null;
  } | null;
};

export type OnCreateOutcomeInventoryRequestSubscriptionVariables = {
  filter?: ModelSubscriptionOutcomeInventoryRequestFilterInput | null;
};

export type OnCreateOutcomeInventoryRequestSubscription = {
  onCreateOutcomeInventoryRequest?: {
    __typename: "OutcomeInventoryRequest";
    id: string;
    date: string;
    comments?: string | null;
    status?: IOInventoryStatus | null;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    outcomeInventoryProductQuantitiesRequest?: {
      __typename: "ModelOutcomeInventoryProductQuantityRequestConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    outcomeInventoryRequestInventoryOperationIDId?: string | null;
  } | null;
};

export type OnUpdateOutcomeInventoryRequestSubscriptionVariables = {
  filter?: ModelSubscriptionOutcomeInventoryRequestFilterInput | null;
};

export type OnUpdateOutcomeInventoryRequestSubscription = {
  onUpdateOutcomeInventoryRequest?: {
    __typename: "OutcomeInventoryRequest";
    id: string;
    date: string;
    comments?: string | null;
    status?: IOInventoryStatus | null;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    outcomeInventoryProductQuantitiesRequest?: {
      __typename: "ModelOutcomeInventoryProductQuantityRequestConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    outcomeInventoryRequestInventoryOperationIDId?: string | null;
  } | null;
};

export type OnDeleteOutcomeInventoryRequestSubscriptionVariables = {
  filter?: ModelSubscriptionOutcomeInventoryRequestFilterInput | null;
};

export type OnDeleteOutcomeInventoryRequestSubscription = {
  onDeleteOutcomeInventoryRequest?: {
    __typename: "OutcomeInventoryRequest";
    id: string;
    date: string;
    comments?: string | null;
    status?: IOInventoryStatus | null;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    outcomeInventoryProductQuantitiesRequest?: {
      __typename: "ModelOutcomeInventoryProductQuantityRequestConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    outcomeInventoryRequestInventoryOperationIDId?: string | null;
  } | null;
};

export type OnCreateOutcomeInventoryProductQuantitySubscriptionVariables = {
  filter?: ModelSubscriptionOutcomeInventoryProductQuantityFilterInput | null;
};

export type OnCreateOutcomeInventoryProductQuantitySubscription = {
  onCreateOutcomeInventoryProductQuantity?: {
    __typename: "OutcomeInventoryProductQuantity";
    id: string;
    outcomeQuantity: number;
    inventoryProducts?: {
      __typename: "ModelInventoryProductOutcomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventoryID: string;
    outcomeInventory?: {
      __typename: "OutcomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateOutcomeInventoryProductQuantitySubscriptionVariables = {
  filter?: ModelSubscriptionOutcomeInventoryProductQuantityFilterInput | null;
};

export type OnUpdateOutcomeInventoryProductQuantitySubscription = {
  onUpdateOutcomeInventoryProductQuantity?: {
    __typename: "OutcomeInventoryProductQuantity";
    id: string;
    outcomeQuantity: number;
    inventoryProducts?: {
      __typename: "ModelInventoryProductOutcomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventoryID: string;
    outcomeInventory?: {
      __typename: "OutcomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteOutcomeInventoryProductQuantitySubscriptionVariables = {
  filter?: ModelSubscriptionOutcomeInventoryProductQuantityFilterInput | null;
};

export type OnDeleteOutcomeInventoryProductQuantitySubscription = {
  onDeleteOutcomeInventoryProductQuantity?: {
    __typename: "OutcomeInventoryProductQuantity";
    id: string;
    outcomeQuantity: number;
    inventoryProducts?: {
      __typename: "ModelInventoryProductOutcomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventoryID: string;
    outcomeInventory?: {
      __typename: "OutcomeInventory";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateOutcomeInventoryProductQuantityRequestSubscriptionVariables =
  {
    filter?: ModelSubscriptionOutcomeInventoryProductQuantityRequestFilterInput | null;
  };

export type OnCreateOutcomeInventoryProductQuantityRequestSubscription = {
  onCreateOutcomeInventoryProductQuantityRequest?: {
    __typename: "OutcomeInventoryProductQuantityRequest";
    id: string;
    outcomeRequestQuantity: number;
    inventoryProducts?: {
      __typename: "ModelInventoryProductOutcomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventoryRequestID: string;
    outcomeInventoryRequest?: {
      __typename: "OutcomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateOutcomeInventoryProductQuantityRequestSubscriptionVariables =
  {
    filter?: ModelSubscriptionOutcomeInventoryProductQuantityRequestFilterInput | null;
  };

export type OnUpdateOutcomeInventoryProductQuantityRequestSubscription = {
  onUpdateOutcomeInventoryProductQuantityRequest?: {
    __typename: "OutcomeInventoryProductQuantityRequest";
    id: string;
    outcomeRequestQuantity: number;
    inventoryProducts?: {
      __typename: "ModelInventoryProductOutcomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventoryRequestID: string;
    outcomeInventoryRequest?: {
      __typename: "OutcomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteOutcomeInventoryProductQuantityRequestSubscriptionVariables =
  {
    filter?: ModelSubscriptionOutcomeInventoryProductQuantityRequestFilterInput | null;
  };

export type OnDeleteOutcomeInventoryProductQuantityRequestSubscription = {
  onDeleteOutcomeInventoryProductQuantityRequest?: {
    __typename: "OutcomeInventoryProductQuantityRequest";
    id: string;
    outcomeRequestQuantity: number;
    inventoryProducts?: {
      __typename: "ModelInventoryProductOutcomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventoryRequestID: string;
    outcomeInventoryRequest?: {
      __typename: "OutcomeInventoryRequest";
      id: string;
      date: string;
      comments?: string | null;
      status?: IOInventoryStatus | null;
      userInfoID: string;
      branchOfficeID?: string | null;
      createdAt: string;
      updatedAt: string;
      outcomeInventoryRequestInventoryOperationIDId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateReturnsInventorySubscriptionVariables = {
  filter?: ModelSubscriptionReturnsInventoryFilterInput | null;
};

export type OnCreateReturnsInventorySubscription = {
  onCreateReturnsInventory?: {
    __typename: "ReturnsInventory";
    id: string;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    clientID: string;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments?: string | null;
    inventoryProducts?: {
      __typename: "ModelInventoryProductReturnsInventoryConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateReturnsInventorySubscriptionVariables = {
  filter?: ModelSubscriptionReturnsInventoryFilterInput | null;
};

export type OnUpdateReturnsInventorySubscription = {
  onUpdateReturnsInventory?: {
    __typename: "ReturnsInventory";
    id: string;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    clientID: string;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments?: string | null;
    inventoryProducts?: {
      __typename: "ModelInventoryProductReturnsInventoryConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteReturnsInventorySubscriptionVariables = {
  filter?: ModelSubscriptionReturnsInventoryFilterInput | null;
};

export type OnDeleteReturnsInventorySubscription = {
  onDeleteReturnsInventory?: {
    __typename: "ReturnsInventory";
    id: string;
    userInfoID: string;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    clientID: string;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments?: string | null;
    inventoryProducts?: {
      __typename: "ModelInventoryProductReturnsInventoryConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateRoleSubscriptionVariables = {
  filter?: ModelSubscriptionRoleFilterInput | null;
};

export type OnCreateRoleSubscription = {
  onCreateRole?: {
    __typename: "Role";
    id: string;
    name: RoleType;
    description?: string | null;
    user?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateRoleSubscriptionVariables = {
  filter?: ModelSubscriptionRoleFilterInput | null;
};

export type OnUpdateRoleSubscription = {
  onUpdateRole?: {
    __typename: "Role";
    id: string;
    name: RoleType;
    description?: string | null;
    user?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteRoleSubscriptionVariables = {
  filter?: ModelSubscriptionRoleFilterInput | null;
};

export type OnDeleteRoleSubscription = {
  onDeleteRole?: {
    __typename: "Role";
    id: string;
    name: RoleType;
    description?: string | null;
    user?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null;
};

export type OnCreateUserSubscription = {
  onCreateUser?: {
    __typename: "User";
    id: string;
    email: string;
    password: string;
    rolID: string;
    rol?: {
      __typename: "Role";
      id: string;
      name: RoleType;
      description?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    hasBranchOffice?: boolean | null;
    branchOffice?: {
      __typename: "ModelBranchOfficeUserConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userUserInfoId?: string | null;
  } | null;
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null;
};

export type OnUpdateUserSubscription = {
  onUpdateUser?: {
    __typename: "User";
    id: string;
    email: string;
    password: string;
    rolID: string;
    rol?: {
      __typename: "Role";
      id: string;
      name: RoleType;
      description?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    hasBranchOffice?: boolean | null;
    branchOffice?: {
      __typename: "ModelBranchOfficeUserConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userUserInfoId?: string | null;
  } | null;
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null;
};

export type OnDeleteUserSubscription = {
  onDeleteUser?: {
    __typename: "User";
    id: string;
    email: string;
    password: string;
    rolID: string;
    rol?: {
      __typename: "Role";
      id: string;
      name: RoleType;
      description?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    hasBranchOffice?: boolean | null;
    branchOffice?: {
      __typename: "ModelBranchOfficeUserConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userUserInfoId?: string | null;
  } | null;
};

export type OnCreateUserInfoSubscriptionVariables = {
  filter?: ModelSubscriptionUserInfoFilterInput | null;
};

export type OnCreateUserInfoSubscription = {
  onCreateUserInfo?: {
    __typename: "UserInfo";
    id: string;
    name: string;
    phone?: string | null;
    RFC?: string | null;
    gender?: string | null;
    user?: {
      __typename: "User";
      id: string;
      email: string;
      password: string;
      rolID: string;
      hasBranchOffice?: boolean | null;
      createdAt: string;
      updatedAt: string;
      userUserInfoId?: string | null;
    } | null;
    companyExpenses?: {
      __typename: "ModelCompanyExpensesConnection";
      nextToken?: string | null;
    } | null;
    salesOperation?: {
      __typename: "ModelSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    incomeInventories?: {
      __typename: "ModelIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoriesRequest?: {
      __typename: "ModelIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventories?: {
      __typename: "ModelOutcomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventoriesRequest?: {
      __typename: "ModelOutcomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    returnsInventory?: {
      __typename: "ModelReturnsInventoryConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userInfoUserId?: string | null;
  } | null;
};

export type OnUpdateUserInfoSubscriptionVariables = {
  filter?: ModelSubscriptionUserInfoFilterInput | null;
};

export type OnUpdateUserInfoSubscription = {
  onUpdateUserInfo?: {
    __typename: "UserInfo";
    id: string;
    name: string;
    phone?: string | null;
    RFC?: string | null;
    gender?: string | null;
    user?: {
      __typename: "User";
      id: string;
      email: string;
      password: string;
      rolID: string;
      hasBranchOffice?: boolean | null;
      createdAt: string;
      updatedAt: string;
      userUserInfoId?: string | null;
    } | null;
    companyExpenses?: {
      __typename: "ModelCompanyExpensesConnection";
      nextToken?: string | null;
    } | null;
    salesOperation?: {
      __typename: "ModelSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    incomeInventories?: {
      __typename: "ModelIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoriesRequest?: {
      __typename: "ModelIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventories?: {
      __typename: "ModelOutcomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventoriesRequest?: {
      __typename: "ModelOutcomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    returnsInventory?: {
      __typename: "ModelReturnsInventoryConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userInfoUserId?: string | null;
  } | null;
};

export type OnDeleteUserInfoSubscriptionVariables = {
  filter?: ModelSubscriptionUserInfoFilterInput | null;
};

export type OnDeleteUserInfoSubscription = {
  onDeleteUserInfo?: {
    __typename: "UserInfo";
    id: string;
    name: string;
    phone?: string | null;
    RFC?: string | null;
    gender?: string | null;
    user?: {
      __typename: "User";
      id: string;
      email: string;
      password: string;
      rolID: string;
      hasBranchOffice?: boolean | null;
      createdAt: string;
      updatedAt: string;
      userUserInfoId?: string | null;
    } | null;
    companyExpenses?: {
      __typename: "ModelCompanyExpensesConnection";
      nextToken?: string | null;
    } | null;
    salesOperation?: {
      __typename: "ModelSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    incomeInventories?: {
      __typename: "ModelIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoriesRequest?: {
      __typename: "ModelIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventories?: {
      __typename: "ModelOutcomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventoriesRequest?: {
      __typename: "ModelOutcomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    returnsInventory?: {
      __typename: "ModelReturnsInventoryConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userInfoUserId?: string | null;
  } | null;
};

export type OnCreateInventorySubscriptionVariables = {
  filter?: ModelSubscriptionInventoryFilterInput | null;
};

export type OnCreateInventorySubscription = {
  onCreateInventory?: {
    __typename: "Inventory";
    id: string;
    name: string;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    inventoryOperations?: {
      __typename: "ModelInventoryOperationConnection";
      nextToken?: string | null;
    } | null;
    inventoryProduct?: {
      __typename: "ModelInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    isMain?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateInventorySubscriptionVariables = {
  filter?: ModelSubscriptionInventoryFilterInput | null;
};

export type OnUpdateInventorySubscription = {
  onUpdateInventory?: {
    __typename: "Inventory";
    id: string;
    name: string;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    inventoryOperations?: {
      __typename: "ModelInventoryOperationConnection";
      nextToken?: string | null;
    } | null;
    inventoryProduct?: {
      __typename: "ModelInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    isMain?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteInventorySubscriptionVariables = {
  filter?: ModelSubscriptionInventoryFilterInput | null;
};

export type OnDeleteInventorySubscription = {
  onDeleteInventory?: {
    __typename: "Inventory";
    id: string;
    name: string;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    inventoryOperations?: {
      __typename: "ModelInventoryOperationConnection";
      nextToken?: string | null;
    } | null;
    inventoryProduct?: {
      __typename: "ModelInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    isMain?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateInventoryProductSubscriptionVariables = {
  filter?: ModelSubscriptionInventoryProductFilterInput | null;
};

export type OnCreateInventoryProductSubscription = {
  onCreateInventoryProduct?: {
    __typename: "InventoryProduct";
    id: string;
    inventoryID: string;
    inventory?: {
      __typename: "Inventory";
      id: string;
      name: string;
      branchOfficeID?: string | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    productID: string;
    product?: {
      __typename: "Product";
      id: string;
      class_id: number;
      category_id: number;
      subcategory_id: number;
      name: string;
      description?: string | null;
      price: number;
      commission?: number | null;
      hasCommission?: boolean | null;
      hasDiscount?: boolean | null;
      productProviderID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    quantity: number;
    customPrice?: number | null;
    generalPrice?: number | null;
    productProviderID?: string | null;
    productProvider?: {
      __typename: "ProductProvider";
      id: string;
      createdAt: string;
      updatedAt: string;
      productProviderProviderIDId?: string | null;
    } | null;
    discounts?: {
      __typename: "ModelDiscountInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductIncomeInventory?: {
      __typename: "ModelInventoryProductIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductIncomeInventoryRequests?: {
      __typename: "ModelInventoryProductIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductOutcomeInventory?: {
      __typename: "ModelInventoryProductOutcomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductOutcomeInventoryRequests?: {
      __typename: "ModelInventoryProductOutcomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductSalesOperation?: {
      __typename: "ModelInventoryProductSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    returnsInventory?: {
      __typename: "ModelInventoryProductReturnsInventoryConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateInventoryProductSubscriptionVariables = {
  filter?: ModelSubscriptionInventoryProductFilterInput | null;
};

export type OnUpdateInventoryProductSubscription = {
  onUpdateInventoryProduct?: {
    __typename: "InventoryProduct";
    id: string;
    inventoryID: string;
    inventory?: {
      __typename: "Inventory";
      id: string;
      name: string;
      branchOfficeID?: string | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    productID: string;
    product?: {
      __typename: "Product";
      id: string;
      class_id: number;
      category_id: number;
      subcategory_id: number;
      name: string;
      description?: string | null;
      price: number;
      commission?: number | null;
      hasCommission?: boolean | null;
      hasDiscount?: boolean | null;
      productProviderID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    quantity: number;
    customPrice?: number | null;
    generalPrice?: number | null;
    productProviderID?: string | null;
    productProvider?: {
      __typename: "ProductProvider";
      id: string;
      createdAt: string;
      updatedAt: string;
      productProviderProviderIDId?: string | null;
    } | null;
    discounts?: {
      __typename: "ModelDiscountInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductIncomeInventory?: {
      __typename: "ModelInventoryProductIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductIncomeInventoryRequests?: {
      __typename: "ModelInventoryProductIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductOutcomeInventory?: {
      __typename: "ModelInventoryProductOutcomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductOutcomeInventoryRequests?: {
      __typename: "ModelInventoryProductOutcomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductSalesOperation?: {
      __typename: "ModelInventoryProductSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    returnsInventory?: {
      __typename: "ModelInventoryProductReturnsInventoryConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteInventoryProductSubscriptionVariables = {
  filter?: ModelSubscriptionInventoryProductFilterInput | null;
};

export type OnDeleteInventoryProductSubscription = {
  onDeleteInventoryProduct?: {
    __typename: "InventoryProduct";
    id: string;
    inventoryID: string;
    inventory?: {
      __typename: "Inventory";
      id: string;
      name: string;
      branchOfficeID?: string | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    productID: string;
    product?: {
      __typename: "Product";
      id: string;
      class_id: number;
      category_id: number;
      subcategory_id: number;
      name: string;
      description?: string | null;
      price: number;
      commission?: number | null;
      hasCommission?: boolean | null;
      hasDiscount?: boolean | null;
      productProviderID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    quantity: number;
    customPrice?: number | null;
    generalPrice?: number | null;
    productProviderID?: string | null;
    productProvider?: {
      __typename: "ProductProvider";
      id: string;
      createdAt: string;
      updatedAt: string;
      productProviderProviderIDId?: string | null;
    } | null;
    discounts?: {
      __typename: "ModelDiscountInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductIncomeInventory?: {
      __typename: "ModelInventoryProductIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductIncomeInventoryRequests?: {
      __typename: "ModelInventoryProductIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductOutcomeInventory?: {
      __typename: "ModelInventoryProductOutcomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductOutcomeInventoryRequests?: {
      __typename: "ModelInventoryProductOutcomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    inventoryProductSalesOperation?: {
      __typename: "ModelInventoryProductSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    returnsInventory?: {
      __typename: "ModelInventoryProductReturnsInventoryConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateBranchOfficeSubscriptionVariables = {
  filter?: ModelSubscriptionBranchOfficeFilterInput | null;
};

export type OnCreateBranchOfficeSubscription = {
  onCreateBranchOffice?: {
    __typename: "BranchOffice";
    id: string;
    name: string;
    zipcode?: string | null;
    state?: string | null;
    location: string;
    address?: string | null;
    phone?: string | null;
    branchOffice_commission?: number | null;
    inventories?: {
      __typename: "ModelInventoryConnection";
      nextToken?: string | null;
    } | null;
    isMain?: boolean | null;
    creditRequests?: {
      __typename: "ModelCreditRequestsConnection";
      nextToken?: string | null;
    } | null;
    companyExpenses?: {
      __typename: "ModelCompanyExpensesConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelBranchOfficeUserConnection";
      nextToken?: string | null;
    } | null;
    clients?: {
      __typename: "ModelClientConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventories?: {
      __typename: "ModelOutcomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventoriesRequest?: {
      __typename: "ModelOutcomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    incomeInventories?: {
      __typename: "ModelIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoriesRequest?: {
      __typename: "ModelIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    salesOperations?: {
      __typename: "ModelSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateBranchOfficeSubscriptionVariables = {
  filter?: ModelSubscriptionBranchOfficeFilterInput | null;
};

export type OnUpdateBranchOfficeSubscription = {
  onUpdateBranchOffice?: {
    __typename: "BranchOffice";
    id: string;
    name: string;
    zipcode?: string | null;
    state?: string | null;
    location: string;
    address?: string | null;
    phone?: string | null;
    branchOffice_commission?: number | null;
    inventories?: {
      __typename: "ModelInventoryConnection";
      nextToken?: string | null;
    } | null;
    isMain?: boolean | null;
    creditRequests?: {
      __typename: "ModelCreditRequestsConnection";
      nextToken?: string | null;
    } | null;
    companyExpenses?: {
      __typename: "ModelCompanyExpensesConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelBranchOfficeUserConnection";
      nextToken?: string | null;
    } | null;
    clients?: {
      __typename: "ModelClientConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventories?: {
      __typename: "ModelOutcomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventoriesRequest?: {
      __typename: "ModelOutcomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    incomeInventories?: {
      __typename: "ModelIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoriesRequest?: {
      __typename: "ModelIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    salesOperations?: {
      __typename: "ModelSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteBranchOfficeSubscriptionVariables = {
  filter?: ModelSubscriptionBranchOfficeFilterInput | null;
};

export type OnDeleteBranchOfficeSubscription = {
  onDeleteBranchOffice?: {
    __typename: "BranchOffice";
    id: string;
    name: string;
    zipcode?: string | null;
    state?: string | null;
    location: string;
    address?: string | null;
    phone?: string | null;
    branchOffice_commission?: number | null;
    inventories?: {
      __typename: "ModelInventoryConnection";
      nextToken?: string | null;
    } | null;
    isMain?: boolean | null;
    creditRequests?: {
      __typename: "ModelCreditRequestsConnection";
      nextToken?: string | null;
    } | null;
    companyExpenses?: {
      __typename: "ModelCompanyExpensesConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelBranchOfficeUserConnection";
      nextToken?: string | null;
    } | null;
    clients?: {
      __typename: "ModelClientConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventories?: {
      __typename: "ModelOutcomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    outcomeInventoriesRequest?: {
      __typename: "ModelOutcomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    incomeInventories?: {
      __typename: "ModelIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoriesRequest?: {
      __typename: "ModelIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    salesOperations?: {
      __typename: "ModelSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateDiscountsSubscriptionVariables = {
  filter?: ModelSubscriptionDiscountsFilterInput | null;
};

export type OnCreateDiscountsSubscription = {
  onCreateDiscounts?: {
    __typename: "Discounts";
    id: string;
    discount: number;
    inventoryProducts?: {
      __typename: "ModelDiscountInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateDiscountsSubscriptionVariables = {
  filter?: ModelSubscriptionDiscountsFilterInput | null;
};

export type OnUpdateDiscountsSubscription = {
  onUpdateDiscounts?: {
    __typename: "Discounts";
    id: string;
    discount: number;
    inventoryProducts?: {
      __typename: "ModelDiscountInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteDiscountsSubscriptionVariables = {
  filter?: ModelSubscriptionDiscountsFilterInput | null;
};

export type OnDeleteDiscountsSubscription = {
  onDeleteDiscounts?: {
    __typename: "Discounts";
    id: string;
    discount: number;
    inventoryProducts?: {
      __typename: "ModelDiscountInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateSalesOperationSubscriptionVariables = {
  filter?: ModelSubscriptionSalesOperationFilterInput | null;
};

export type OnCreateSalesOperationSubscription = {
  onCreateSalesOperation?: {
    __typename: "SalesOperation";
    id: string;
    date?: string | null;
    total?: number | null;
    totalCash?: number | null;
    totalCommission?: number | null;
    nonRegisteredClientID?: string | null;
    nonRegisteredClient?: {
      __typename: "NonRegisteredClient";
      id: string;
      fullName: string;
      createdAt: string;
      updatedAt: string;
      nonRegisteredClientSaleOperationId?: string | null;
    } | null;
    pendingToPay?: number | null;
    amountPaid?: number | null;
    salesOperationType: SalesOperationType;
    status: SalesOperationStatus;
    monthsToPay?: number | null;
    termDaysToPay?: SalesOperationTermDaysToPay | null;
    totalPayments?: number | null;
    currentTotalPayments?: number | null;
    lastPaymentDate?: string | null;
    lastDatePaid?: string | null;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userInfoID?: string | null;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID: string;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    salesOperationInventoryProductQuantities?: {
      __typename: "ModelSalesOperationInventoryProductQuantityConnection";
      nextToken?: string | null;
    } | null;
    salesOperationClientCreditMovements?: {
      __typename: "ModelSalesOperationClientCreditMovementsConnection";
      nextToken?: string | null;
    } | null;
    salesOperationClientCreditFirstLastPayment?: {
      __typename: "ModelSalesOperationClientCreditFirstLastPaymentConnection";
      nextToken?: string | null;
    } | null;
    salesOperationCustomerSubscription?: {
      __typename: "ModelSalesOperationCustomerSubscriptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    salesOperationInventoryOperationIDId?: string | null;
  } | null;
};

export type OnUpdateSalesOperationSubscriptionVariables = {
  filter?: ModelSubscriptionSalesOperationFilterInput | null;
};

export type OnUpdateSalesOperationSubscription = {
  onUpdateSalesOperation?: {
    __typename: "SalesOperation";
    id: string;
    date?: string | null;
    total?: number | null;
    totalCash?: number | null;
    totalCommission?: number | null;
    nonRegisteredClientID?: string | null;
    nonRegisteredClient?: {
      __typename: "NonRegisteredClient";
      id: string;
      fullName: string;
      createdAt: string;
      updatedAt: string;
      nonRegisteredClientSaleOperationId?: string | null;
    } | null;
    pendingToPay?: number | null;
    amountPaid?: number | null;
    salesOperationType: SalesOperationType;
    status: SalesOperationStatus;
    monthsToPay?: number | null;
    termDaysToPay?: SalesOperationTermDaysToPay | null;
    totalPayments?: number | null;
    currentTotalPayments?: number | null;
    lastPaymentDate?: string | null;
    lastDatePaid?: string | null;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userInfoID?: string | null;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID: string;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    salesOperationInventoryProductQuantities?: {
      __typename: "ModelSalesOperationInventoryProductQuantityConnection";
      nextToken?: string | null;
    } | null;
    salesOperationClientCreditMovements?: {
      __typename: "ModelSalesOperationClientCreditMovementsConnection";
      nextToken?: string | null;
    } | null;
    salesOperationClientCreditFirstLastPayment?: {
      __typename: "ModelSalesOperationClientCreditFirstLastPaymentConnection";
      nextToken?: string | null;
    } | null;
    salesOperationCustomerSubscription?: {
      __typename: "ModelSalesOperationCustomerSubscriptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    salesOperationInventoryOperationIDId?: string | null;
  } | null;
};

export type OnDeleteSalesOperationSubscriptionVariables = {
  filter?: ModelSubscriptionSalesOperationFilterInput | null;
};

export type OnDeleteSalesOperationSubscription = {
  onDeleteSalesOperation?: {
    __typename: "SalesOperation";
    id: string;
    date?: string | null;
    total?: number | null;
    totalCash?: number | null;
    totalCommission?: number | null;
    nonRegisteredClientID?: string | null;
    nonRegisteredClient?: {
      __typename: "NonRegisteredClient";
      id: string;
      fullName: string;
      createdAt: string;
      updatedAt: string;
      nonRegisteredClientSaleOperationId?: string | null;
    } | null;
    pendingToPay?: number | null;
    amountPaid?: number | null;
    salesOperationType: SalesOperationType;
    status: SalesOperationStatus;
    monthsToPay?: number | null;
    termDaysToPay?: SalesOperationTermDaysToPay | null;
    totalPayments?: number | null;
    currentTotalPayments?: number | null;
    lastPaymentDate?: string | null;
    lastDatePaid?: string | null;
    inventoryOperationID?: {
      __typename: "InventoryOperation";
      id: string;
      operationType: OperationType;
      inventoryID: string;
      createdAt: string;
      updatedAt: string;
      inventoryOperationIncomeInventoryId?: string | null;
      inventoryOperationIncomeInventoryRequestId?: string | null;
      inventoryOperationOutcomeInventoryId?: string | null;
      inventoryOperationOutcomeInventoryRequestId?: string | null;
      inventoryOperationSalesOperationId?: string | null;
    } | null;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userInfoID?: string | null;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID: string;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    salesOperationInventoryProductQuantities?: {
      __typename: "ModelSalesOperationInventoryProductQuantityConnection";
      nextToken?: string | null;
    } | null;
    salesOperationClientCreditMovements?: {
      __typename: "ModelSalesOperationClientCreditMovementsConnection";
      nextToken?: string | null;
    } | null;
    salesOperationClientCreditFirstLastPayment?: {
      __typename: "ModelSalesOperationClientCreditFirstLastPaymentConnection";
      nextToken?: string | null;
    } | null;
    salesOperationCustomerSubscription?: {
      __typename: "ModelSalesOperationCustomerSubscriptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    salesOperationInventoryOperationIDId?: string | null;
  } | null;
};

export type OnCreateSalesOperationClientCreditFirstLastPaymentSubscriptionVariables =
  {
    filter?: ModelSubscriptionSalesOperationClientCreditFirstLastPaymentFilterInput | null;
  };

export type OnCreateSalesOperationClientCreditFirstLastPaymentSubscription = {
  onCreateSalesOperationClientCreditFirstLastPayment?: {
    __typename: "SalesOperationClientCreditFirstLastPayment";
    id: string;
    salesOperationID: string;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    startDate?: string | null;
    endDate?: string | null;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateSalesOperationClientCreditFirstLastPaymentSubscriptionVariables =
  {
    filter?: ModelSubscriptionSalesOperationClientCreditFirstLastPaymentFilterInput | null;
  };

export type OnUpdateSalesOperationClientCreditFirstLastPaymentSubscription = {
  onUpdateSalesOperationClientCreditFirstLastPayment?: {
    __typename: "SalesOperationClientCreditFirstLastPayment";
    id: string;
    salesOperationID: string;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    startDate?: string | null;
    endDate?: string | null;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteSalesOperationClientCreditFirstLastPaymentSubscriptionVariables =
  {
    filter?: ModelSubscriptionSalesOperationClientCreditFirstLastPaymentFilterInput | null;
  };

export type OnDeleteSalesOperationClientCreditFirstLastPaymentSubscription = {
  onDeleteSalesOperationClientCreditFirstLastPayment?: {
    __typename: "SalesOperationClientCreditFirstLastPayment";
    id: string;
    salesOperationID: string;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    startDate?: string | null;
    endDate?: string | null;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateSalesOperationClientCreditMovementsSubscriptionVariables = {
  filter?: ModelSubscriptionSalesOperationClientCreditMovementsFilterInput | null;
};

export type OnCreateSalesOperationClientCreditMovementsSubscription = {
  onCreateSalesOperationClientCreditMovements?: {
    __typename: "SalesOperationClientCreditMovements";
    id: string;
    salesOperationID: string;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    paymentDate?: string | null;
    datePaid?: string | null;
    amountToPay: number;
    pendingToPay?: number | null;
    amountPaid?: number | null;
    status: SalesOperationClientCreditMovementStatus;
    numberOfPayment?: number | null;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateSalesOperationClientCreditMovementsSubscriptionVariables = {
  filter?: ModelSubscriptionSalesOperationClientCreditMovementsFilterInput | null;
};

export type OnUpdateSalesOperationClientCreditMovementsSubscription = {
  onUpdateSalesOperationClientCreditMovements?: {
    __typename: "SalesOperationClientCreditMovements";
    id: string;
    salesOperationID: string;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    paymentDate?: string | null;
    datePaid?: string | null;
    amountToPay: number;
    pendingToPay?: number | null;
    amountPaid?: number | null;
    status: SalesOperationClientCreditMovementStatus;
    numberOfPayment?: number | null;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteSalesOperationClientCreditMovementsSubscriptionVariables = {
  filter?: ModelSubscriptionSalesOperationClientCreditMovementsFilterInput | null;
};

export type OnDeleteSalesOperationClientCreditMovementsSubscription = {
  onDeleteSalesOperationClientCreditMovements?: {
    __typename: "SalesOperationClientCreditMovements";
    id: string;
    salesOperationID: string;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    paymentDate?: string | null;
    datePaid?: string | null;
    amountToPay: number;
    pendingToPay?: number | null;
    amountPaid?: number | null;
    status: SalesOperationClientCreditMovementStatus;
    numberOfPayment?: number | null;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateSalesOperationInventoryProductQuantitySubscriptionVariables =
  {
    filter?: ModelSubscriptionSalesOperationInventoryProductQuantityFilterInput | null;
  };

export type OnCreateSalesOperationInventoryProductQuantitySubscription = {
  onCreateSalesOperationInventoryProductQuantity?: {
    __typename: "SalesOperationInventoryProductQuantity";
    id: string;
    name?: string | null;
    salesOperationID: string;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    inventoryProducts?: {
      __typename: "ModelInventoryProductSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    soldProductQuantity: number;
    withDiscount?: boolean | null;
    discountPercentage?: number | null;
    discountPerProduct?: number | null;
    totalDiscounted?: number | null;
    productPriceWithDiscount?: number | null;
    amountToPayWithDiscount?: number | null;
    amountToPay: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateSalesOperationInventoryProductQuantitySubscriptionVariables =
  {
    filter?: ModelSubscriptionSalesOperationInventoryProductQuantityFilterInput | null;
  };

export type OnUpdateSalesOperationInventoryProductQuantitySubscription = {
  onUpdateSalesOperationInventoryProductQuantity?: {
    __typename: "SalesOperationInventoryProductQuantity";
    id: string;
    name?: string | null;
    salesOperationID: string;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    inventoryProducts?: {
      __typename: "ModelInventoryProductSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    soldProductQuantity: number;
    withDiscount?: boolean | null;
    discountPercentage?: number | null;
    discountPerProduct?: number | null;
    totalDiscounted?: number | null;
    productPriceWithDiscount?: number | null;
    amountToPayWithDiscount?: number | null;
    amountToPay: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteSalesOperationInventoryProductQuantitySubscriptionVariables =
  {
    filter?: ModelSubscriptionSalesOperationInventoryProductQuantityFilterInput | null;
  };

export type OnDeleteSalesOperationInventoryProductQuantitySubscription = {
  onDeleteSalesOperationInventoryProductQuantity?: {
    __typename: "SalesOperationInventoryProductQuantity";
    id: string;
    name?: string | null;
    salesOperationID: string;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    inventoryProducts?: {
      __typename: "ModelInventoryProductSalesOperationConnection";
      nextToken?: string | null;
    } | null;
    soldProductQuantity: number;
    withDiscount?: boolean | null;
    discountPercentage?: number | null;
    discountPerProduct?: number | null;
    totalDiscounted?: number | null;
    productPriceWithDiscount?: number | null;
    amountToPayWithDiscount?: number | null;
    amountToPay: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateCompanyExpensesSubscriptionVariables = {
  filter?: ModelSubscriptionCompanyExpensesFilterInput | null;
};

export type OnCreateCompanyExpensesSubscription = {
  onCreateCompanyExpenses?: {
    __typename: "CompanyExpenses";
    id: string;
    name: string;
    description?: string | null;
    costType: CostType;
    date?: string | null;
    amount: number;
    userInfoID?: string | null;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateCompanyExpensesSubscriptionVariables = {
  filter?: ModelSubscriptionCompanyExpensesFilterInput | null;
};

export type OnUpdateCompanyExpensesSubscription = {
  onUpdateCompanyExpenses?: {
    __typename: "CompanyExpenses";
    id: string;
    name: string;
    description?: string | null;
    costType: CostType;
    date?: string | null;
    amount: number;
    userInfoID?: string | null;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteCompanyExpensesSubscriptionVariables = {
  filter?: ModelSubscriptionCompanyExpensesFilterInput | null;
};

export type OnDeleteCompanyExpensesSubscription = {
  onDeleteCompanyExpenses?: {
    __typename: "CompanyExpenses";
    id: string;
    name: string;
    description?: string | null;
    costType: CostType;
    date?: string | null;
    amount: number;
    userInfoID?: string | null;
    userInfo?: {
      __typename: "UserInfo";
      id: string;
      name: string;
      phone?: string | null;
      RFC?: string | null;
      gender?: string | null;
      createdAt: string;
      updatedAt: string;
      userInfoUserId?: string | null;
    } | null;
    branchOfficeID?: string | null;
    branchOffice?: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateSalesOperationCustomerSubscriptionSubscriptionVariables = {
  filter?: ModelSubscriptionSalesOperationCustomerSubscriptionFilterInput | null;
};

export type OnCreateSalesOperationCustomerSubscriptionSubscription = {
  onCreateSalesOperationCustomerSubscription?: {
    __typename: "SalesOperationCustomerSubscription";
    id: string;
    salesOperationID: string;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    date?: string | null;
    advancePayment?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateSalesOperationCustomerSubscriptionSubscriptionVariables = {
  filter?: ModelSubscriptionSalesOperationCustomerSubscriptionFilterInput | null;
};

export type OnUpdateSalesOperationCustomerSubscriptionSubscription = {
  onUpdateSalesOperationCustomerSubscription?: {
    __typename: "SalesOperationCustomerSubscription";
    id: string;
    salesOperationID: string;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    date?: string | null;
    advancePayment?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteSalesOperationCustomerSubscriptionSubscriptionVariables = {
  filter?: ModelSubscriptionSalesOperationCustomerSubscriptionFilterInput | null;
};

export type OnDeleteSalesOperationCustomerSubscriptionSubscription = {
  onDeleteSalesOperationCustomerSubscription?: {
    __typename: "SalesOperationCustomerSubscription";
    id: string;
    salesOperationID: string;
    salesOperation?: {
      __typename: "SalesOperation";
      id: string;
      date?: string | null;
      total?: number | null;
      totalCash?: number | null;
      totalCommission?: number | null;
      nonRegisteredClientID?: string | null;
      pendingToPay?: number | null;
      amountPaid?: number | null;
      salesOperationType: SalesOperationType;
      status: SalesOperationStatus;
      monthsToPay?: number | null;
      termDaysToPay?: SalesOperationTermDaysToPay | null;
      totalPayments?: number | null;
      currentTotalPayments?: number | null;
      lastPaymentDate?: string | null;
      lastDatePaid?: string | null;
      clientID?: string | null;
      userInfoID?: string | null;
      branchOfficeID: string;
      createdAt: string;
      updatedAt: string;
      salesOperationInventoryOperationIDId?: string | null;
    } | null;
    clientID?: string | null;
    client?: {
      __typename: "Client";
      id: string;
      name: string;
      second_name?: string | null;
      lastname: string;
      second_lastname?: string | null;
      phone: string;
      fixed_phone?: string | null;
      email?: string | null;
      birthday?: string | null;
      RFC?: string | null;
      address?: string | null;
      settlement?: string | null;
      postal_code?: string | null;
      state?: string | null;
      city?: string | null;
      creditID?: string | null;
      branchOfficeID: string;
      hasCredit: boolean;
      hasCreditRequest?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    date?: string | null;
    advancePayment?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateProviderSubscriptionVariables = {
  filter?: ModelSubscriptionProviderFilterInput | null;
};

export type OnCreateProviderSubscription = {
  onCreateProvider?: {
    __typename: "Provider";
    id: string;
    enterprise_name: string;
    enterprise_RFC?: string | null;
    phone?: string | null;
    fixed_phone?: string | null;
    type?: string | null;
    productprovider?: {
      __typename: "ProductProvider";
      id: string;
      createdAt: string;
      updatedAt: string;
      productProviderProviderIDId?: string | null;
    } | null;
    serviceprovider?: {
      __typename: "ServiceProvider";
      id: string;
      service_name?: string | null;
      service_description?: string | null;
      cost_type?: string | null;
      createdAt: string;
      updatedAt: string;
      serviceProviderProviderIDId?: string | null;
    } | null;
    incomeInventories?: {
      __typename: "ModelIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoriesRequest?: {
      __typename: "ModelIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    providerProductproviderId?: string | null;
    providerServiceproviderId?: string | null;
  } | null;
};

export type OnUpdateProviderSubscriptionVariables = {
  filter?: ModelSubscriptionProviderFilterInput | null;
};

export type OnUpdateProviderSubscription = {
  onUpdateProvider?: {
    __typename: "Provider";
    id: string;
    enterprise_name: string;
    enterprise_RFC?: string | null;
    phone?: string | null;
    fixed_phone?: string | null;
    type?: string | null;
    productprovider?: {
      __typename: "ProductProvider";
      id: string;
      createdAt: string;
      updatedAt: string;
      productProviderProviderIDId?: string | null;
    } | null;
    serviceprovider?: {
      __typename: "ServiceProvider";
      id: string;
      service_name?: string | null;
      service_description?: string | null;
      cost_type?: string | null;
      createdAt: string;
      updatedAt: string;
      serviceProviderProviderIDId?: string | null;
    } | null;
    incomeInventories?: {
      __typename: "ModelIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoriesRequest?: {
      __typename: "ModelIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    providerProductproviderId?: string | null;
    providerServiceproviderId?: string | null;
  } | null;
};

export type OnDeleteProviderSubscriptionVariables = {
  filter?: ModelSubscriptionProviderFilterInput | null;
};

export type OnDeleteProviderSubscription = {
  onDeleteProvider?: {
    __typename: "Provider";
    id: string;
    enterprise_name: string;
    enterprise_RFC?: string | null;
    phone?: string | null;
    fixed_phone?: string | null;
    type?: string | null;
    productprovider?: {
      __typename: "ProductProvider";
      id: string;
      createdAt: string;
      updatedAt: string;
      productProviderProviderIDId?: string | null;
    } | null;
    serviceprovider?: {
      __typename: "ServiceProvider";
      id: string;
      service_name?: string | null;
      service_description?: string | null;
      cost_type?: string | null;
      createdAt: string;
      updatedAt: string;
      serviceProviderProviderIDId?: string | null;
    } | null;
    incomeInventories?: {
      __typename: "ModelIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoriesRequest?: {
      __typename: "ModelIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    providerProductproviderId?: string | null;
    providerServiceproviderId?: string | null;
  } | null;
};

export type OnCreateProductProviderSubscriptionVariables = {
  filter?: ModelSubscriptionProductProviderFilterInput | null;
};

export type OnCreateProductProviderSubscription = {
  onCreateProductProvider?: {
    __typename: "ProductProvider";
    id: string;
    responsible?: {
      __typename: "ModelProductProviderResponsibleConnection";
      nextToken?: string | null;
    } | null;
    providerID?: {
      __typename: "Provider";
      id: string;
      enterprise_name: string;
      enterprise_RFC?: string | null;
      phone?: string | null;
      fixed_phone?: string | null;
      type?: string | null;
      createdAt: string;
      updatedAt: string;
      providerProductproviderId?: string | null;
      providerServiceproviderId?: string | null;
    } | null;
    product?: {
      __typename: "ModelProductConnection";
      nextToken?: string | null;
    } | null;
    inventoryProduct?: {
      __typename: "ModelInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    productProviderProviderIDId?: string | null;
  } | null;
};

export type OnUpdateProductProviderSubscriptionVariables = {
  filter?: ModelSubscriptionProductProviderFilterInput | null;
};

export type OnUpdateProductProviderSubscription = {
  onUpdateProductProvider?: {
    __typename: "ProductProvider";
    id: string;
    responsible?: {
      __typename: "ModelProductProviderResponsibleConnection";
      nextToken?: string | null;
    } | null;
    providerID?: {
      __typename: "Provider";
      id: string;
      enterprise_name: string;
      enterprise_RFC?: string | null;
      phone?: string | null;
      fixed_phone?: string | null;
      type?: string | null;
      createdAt: string;
      updatedAt: string;
      providerProductproviderId?: string | null;
      providerServiceproviderId?: string | null;
    } | null;
    product?: {
      __typename: "ModelProductConnection";
      nextToken?: string | null;
    } | null;
    inventoryProduct?: {
      __typename: "ModelInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    productProviderProviderIDId?: string | null;
  } | null;
};

export type OnDeleteProductProviderSubscriptionVariables = {
  filter?: ModelSubscriptionProductProviderFilterInput | null;
};

export type OnDeleteProductProviderSubscription = {
  onDeleteProductProvider?: {
    __typename: "ProductProvider";
    id: string;
    responsible?: {
      __typename: "ModelProductProviderResponsibleConnection";
      nextToken?: string | null;
    } | null;
    providerID?: {
      __typename: "Provider";
      id: string;
      enterprise_name: string;
      enterprise_RFC?: string | null;
      phone?: string | null;
      fixed_phone?: string | null;
      type?: string | null;
      createdAt: string;
      updatedAt: string;
      providerProductproviderId?: string | null;
      providerServiceproviderId?: string | null;
    } | null;
    product?: {
      __typename: "ModelProductConnection";
      nextToken?: string | null;
    } | null;
    inventoryProduct?: {
      __typename: "ModelInventoryProductConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    productProviderProviderIDId?: string | null;
  } | null;
};

export type OnCreateProductProviderResponsibleSubscriptionVariables = {
  filter?: ModelSubscriptionProductProviderResponsibleFilterInput | null;
};

export type OnCreateProductProviderResponsibleSubscription = {
  onCreateProductProviderResponsible?: {
    __typename: "ProductProviderResponsible";
    id: string;
    productproviderID: string;
    name: string;
    second_name?: string | null;
    lastname: string;
    second_lastname?: string | null;
    phone: string;
    RFC?: string | null;
    incomeInventories?: {
      __typename: "ModelIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoriesRequest?: {
      __typename: "ModelIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateProductProviderResponsibleSubscriptionVariables = {
  filter?: ModelSubscriptionProductProviderResponsibleFilterInput | null;
};

export type OnUpdateProductProviderResponsibleSubscription = {
  onUpdateProductProviderResponsible?: {
    __typename: "ProductProviderResponsible";
    id: string;
    productproviderID: string;
    name: string;
    second_name?: string | null;
    lastname: string;
    second_lastname?: string | null;
    phone: string;
    RFC?: string | null;
    incomeInventories?: {
      __typename: "ModelIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoriesRequest?: {
      __typename: "ModelIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteProductProviderResponsibleSubscriptionVariables = {
  filter?: ModelSubscriptionProductProviderResponsibleFilterInput | null;
};

export type OnDeleteProductProviderResponsibleSubscription = {
  onDeleteProductProviderResponsible?: {
    __typename: "ProductProviderResponsible";
    id: string;
    productproviderID: string;
    name: string;
    second_name?: string | null;
    lastname: string;
    second_lastname?: string | null;
    phone: string;
    RFC?: string | null;
    incomeInventories?: {
      __typename: "ModelIncomeInventoryConnection";
      nextToken?: string | null;
    } | null;
    incomeInventoriesRequest?: {
      __typename: "ModelIncomeInventoryRequestConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateServiceProviderSubscriptionVariables = {
  filter?: ModelSubscriptionServiceProviderFilterInput | null;
};

export type OnCreateServiceProviderSubscription = {
  onCreateServiceProvider?: {
    __typename: "ServiceProvider";
    id: string;
    service_name?: string | null;
    service_description?: string | null;
    cost_type?: string | null;
    responsible?: {
      __typename: "ModelServiceProviderResponsibleConnection";
      nextToken?: string | null;
    } | null;
    providerID?: {
      __typename: "Provider";
      id: string;
      enterprise_name: string;
      enterprise_RFC?: string | null;
      phone?: string | null;
      fixed_phone?: string | null;
      type?: string | null;
      createdAt: string;
      updatedAt: string;
      providerProductproviderId?: string | null;
      providerServiceproviderId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    serviceProviderProviderIDId?: string | null;
  } | null;
};

export type OnUpdateServiceProviderSubscriptionVariables = {
  filter?: ModelSubscriptionServiceProviderFilterInput | null;
};

export type OnUpdateServiceProviderSubscription = {
  onUpdateServiceProvider?: {
    __typename: "ServiceProvider";
    id: string;
    service_name?: string | null;
    service_description?: string | null;
    cost_type?: string | null;
    responsible?: {
      __typename: "ModelServiceProviderResponsibleConnection";
      nextToken?: string | null;
    } | null;
    providerID?: {
      __typename: "Provider";
      id: string;
      enterprise_name: string;
      enterprise_RFC?: string | null;
      phone?: string | null;
      fixed_phone?: string | null;
      type?: string | null;
      createdAt: string;
      updatedAt: string;
      providerProductproviderId?: string | null;
      providerServiceproviderId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    serviceProviderProviderIDId?: string | null;
  } | null;
};

export type OnDeleteServiceProviderSubscriptionVariables = {
  filter?: ModelSubscriptionServiceProviderFilterInput | null;
};

export type OnDeleteServiceProviderSubscription = {
  onDeleteServiceProvider?: {
    __typename: "ServiceProvider";
    id: string;
    service_name?: string | null;
    service_description?: string | null;
    cost_type?: string | null;
    responsible?: {
      __typename: "ModelServiceProviderResponsibleConnection";
      nextToken?: string | null;
    } | null;
    providerID?: {
      __typename: "Provider";
      id: string;
      enterprise_name: string;
      enterprise_RFC?: string | null;
      phone?: string | null;
      fixed_phone?: string | null;
      type?: string | null;
      createdAt: string;
      updatedAt: string;
      providerProductproviderId?: string | null;
      providerServiceproviderId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    serviceProviderProviderIDId?: string | null;
  } | null;
};

export type OnCreateServiceProviderResponsibleSubscriptionVariables = {
  filter?: ModelSubscriptionServiceProviderResponsibleFilterInput | null;
};

export type OnCreateServiceProviderResponsibleSubscription = {
  onCreateServiceProviderResponsible?: {
    __typename: "ServiceProviderResponsible";
    id: string;
    serviceproviderID: string;
    name: string;
    second_name?: string | null;
    lastname: string;
    second_lastname?: string | null;
    phone?: string | null;
    RFC?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateServiceProviderResponsibleSubscriptionVariables = {
  filter?: ModelSubscriptionServiceProviderResponsibleFilterInput | null;
};

export type OnUpdateServiceProviderResponsibleSubscription = {
  onUpdateServiceProviderResponsible?: {
    __typename: "ServiceProviderResponsible";
    id: string;
    serviceproviderID: string;
    name: string;
    second_name?: string | null;
    lastname: string;
    second_lastname?: string | null;
    phone?: string | null;
    RFC?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteServiceProviderResponsibleSubscriptionVariables = {
  filter?: ModelSubscriptionServiceProviderResponsibleFilterInput | null;
};

export type OnDeleteServiceProviderResponsibleSubscription = {
  onDeleteServiceProviderResponsible?: {
    __typename: "ServiceProviderResponsible";
    id: string;
    serviceproviderID: string;
    name: string;
    second_name?: string | null;
    lastname: string;
    second_lastname?: string | null;
    phone?: string | null;
    RFC?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateInventoryProductIncomeInventorySubscriptionVariables = {
  filter?: ModelSubscriptionInventoryProductIncomeInventoryFilterInput | null;
};

export type OnCreateInventoryProductIncomeInventorySubscription = {
  onCreateInventoryProductIncomeInventory?: {
    __typename: "InventoryProductIncomeInventory";
    id: string;
    incomeInventoryProductQuantityId: string;
    inventoryProductId: string;
    incomeInventoryProductQuantity: {
      __typename: "IncomeInventoryProductQuantity";
      id: string;
      incomeQuantity: number;
      incomeInventoryID: string;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateInventoryProductIncomeInventorySubscriptionVariables = {
  filter?: ModelSubscriptionInventoryProductIncomeInventoryFilterInput | null;
};

export type OnUpdateInventoryProductIncomeInventorySubscription = {
  onUpdateInventoryProductIncomeInventory?: {
    __typename: "InventoryProductIncomeInventory";
    id: string;
    incomeInventoryProductQuantityId: string;
    inventoryProductId: string;
    incomeInventoryProductQuantity: {
      __typename: "IncomeInventoryProductQuantity";
      id: string;
      incomeQuantity: number;
      incomeInventoryID: string;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteInventoryProductIncomeInventorySubscriptionVariables = {
  filter?: ModelSubscriptionInventoryProductIncomeInventoryFilterInput | null;
};

export type OnDeleteInventoryProductIncomeInventorySubscription = {
  onDeleteInventoryProductIncomeInventory?: {
    __typename: "InventoryProductIncomeInventory";
    id: string;
    incomeInventoryProductQuantityId: string;
    inventoryProductId: string;
    incomeInventoryProductQuantity: {
      __typename: "IncomeInventoryProductQuantity";
      id: string;
      incomeQuantity: number;
      incomeInventoryID: string;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateInventoryProductIncomeInventoryRequestSubscriptionVariables =
  {
    filter?: ModelSubscriptionInventoryProductIncomeInventoryRequestFilterInput | null;
  };

export type OnCreateInventoryProductIncomeInventoryRequestSubscription = {
  onCreateInventoryProductIncomeInventoryRequest?: {
    __typename: "InventoryProductIncomeInventoryRequest";
    id: string;
    incomeInventoryProductQuantityRequestId: string;
    inventoryProductId: string;
    incomeInventoryProductQuantityRequest: {
      __typename: "IncomeInventoryProductQuantityRequest";
      id: string;
      incomeQuantity: number;
      incomeInventoryRequestID: string;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateInventoryProductIncomeInventoryRequestSubscriptionVariables =
  {
    filter?: ModelSubscriptionInventoryProductIncomeInventoryRequestFilterInput | null;
  };

export type OnUpdateInventoryProductIncomeInventoryRequestSubscription = {
  onUpdateInventoryProductIncomeInventoryRequest?: {
    __typename: "InventoryProductIncomeInventoryRequest";
    id: string;
    incomeInventoryProductQuantityRequestId: string;
    inventoryProductId: string;
    incomeInventoryProductQuantityRequest: {
      __typename: "IncomeInventoryProductQuantityRequest";
      id: string;
      incomeQuantity: number;
      incomeInventoryRequestID: string;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteInventoryProductIncomeInventoryRequestSubscriptionVariables =
  {
    filter?: ModelSubscriptionInventoryProductIncomeInventoryRequestFilterInput | null;
  };

export type OnDeleteInventoryProductIncomeInventoryRequestSubscription = {
  onDeleteInventoryProductIncomeInventoryRequest?: {
    __typename: "InventoryProductIncomeInventoryRequest";
    id: string;
    incomeInventoryProductQuantityRequestId: string;
    inventoryProductId: string;
    incomeInventoryProductQuantityRequest: {
      __typename: "IncomeInventoryProductQuantityRequest";
      id: string;
      incomeQuantity: number;
      incomeInventoryRequestID: string;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateInventoryProductOutcomeInventorySubscriptionVariables = {
  filter?: ModelSubscriptionInventoryProductOutcomeInventoryFilterInput | null;
};

export type OnCreateInventoryProductOutcomeInventorySubscription = {
  onCreateInventoryProductOutcomeInventory?: {
    __typename: "InventoryProductOutcomeInventory";
    id: string;
    outcomeInventoryProductQuantityId: string;
    inventoryProductId: string;
    outcomeInventoryProductQuantity: {
      __typename: "OutcomeInventoryProductQuantity";
      id: string;
      outcomeQuantity: number;
      outcomeInventoryID: string;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateInventoryProductOutcomeInventorySubscriptionVariables = {
  filter?: ModelSubscriptionInventoryProductOutcomeInventoryFilterInput | null;
};

export type OnUpdateInventoryProductOutcomeInventorySubscription = {
  onUpdateInventoryProductOutcomeInventory?: {
    __typename: "InventoryProductOutcomeInventory";
    id: string;
    outcomeInventoryProductQuantityId: string;
    inventoryProductId: string;
    outcomeInventoryProductQuantity: {
      __typename: "OutcomeInventoryProductQuantity";
      id: string;
      outcomeQuantity: number;
      outcomeInventoryID: string;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteInventoryProductOutcomeInventorySubscriptionVariables = {
  filter?: ModelSubscriptionInventoryProductOutcomeInventoryFilterInput | null;
};

export type OnDeleteInventoryProductOutcomeInventorySubscription = {
  onDeleteInventoryProductOutcomeInventory?: {
    __typename: "InventoryProductOutcomeInventory";
    id: string;
    outcomeInventoryProductQuantityId: string;
    inventoryProductId: string;
    outcomeInventoryProductQuantity: {
      __typename: "OutcomeInventoryProductQuantity";
      id: string;
      outcomeQuantity: number;
      outcomeInventoryID: string;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateInventoryProductOutcomeInventoryRequestSubscriptionVariables =
  {
    filter?: ModelSubscriptionInventoryProductOutcomeInventoryRequestFilterInput | null;
  };

export type OnCreateInventoryProductOutcomeInventoryRequestSubscription = {
  onCreateInventoryProductOutcomeInventoryRequest?: {
    __typename: "InventoryProductOutcomeInventoryRequest";
    id: string;
    outcomeInventoryProductQuantityRequestId: string;
    inventoryProductId: string;
    outcomeInventoryProductQuantityRequest: {
      __typename: "OutcomeInventoryProductQuantityRequest";
      id: string;
      outcomeRequestQuantity: number;
      outcomeInventoryRequestID: string;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateInventoryProductOutcomeInventoryRequestSubscriptionVariables =
  {
    filter?: ModelSubscriptionInventoryProductOutcomeInventoryRequestFilterInput | null;
  };

export type OnUpdateInventoryProductOutcomeInventoryRequestSubscription = {
  onUpdateInventoryProductOutcomeInventoryRequest?: {
    __typename: "InventoryProductOutcomeInventoryRequest";
    id: string;
    outcomeInventoryProductQuantityRequestId: string;
    inventoryProductId: string;
    outcomeInventoryProductQuantityRequest: {
      __typename: "OutcomeInventoryProductQuantityRequest";
      id: string;
      outcomeRequestQuantity: number;
      outcomeInventoryRequestID: string;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteInventoryProductOutcomeInventoryRequestSubscriptionVariables =
  {
    filter?: ModelSubscriptionInventoryProductOutcomeInventoryRequestFilterInput | null;
  };

export type OnDeleteInventoryProductOutcomeInventoryRequestSubscription = {
  onDeleteInventoryProductOutcomeInventoryRequest?: {
    __typename: "InventoryProductOutcomeInventoryRequest";
    id: string;
    outcomeInventoryProductQuantityRequestId: string;
    inventoryProductId: string;
    outcomeInventoryProductQuantityRequest: {
      __typename: "OutcomeInventoryProductQuantityRequest";
      id: string;
      outcomeRequestQuantity: number;
      outcomeInventoryRequestID: string;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateInventoryProductReturnsInventorySubscriptionVariables = {
  filter?: ModelSubscriptionInventoryProductReturnsInventoryFilterInput | null;
};

export type OnCreateInventoryProductReturnsInventorySubscription = {
  onCreateInventoryProductReturnsInventory?: {
    __typename: "InventoryProductReturnsInventory";
    id: string;
    returnsInventoryId: string;
    inventoryProductId: string;
    returnsInventory: {
      __typename: "ReturnsInventory";
      id: string;
      userInfoID: string;
      clientID: string;
      comments?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateInventoryProductReturnsInventorySubscriptionVariables = {
  filter?: ModelSubscriptionInventoryProductReturnsInventoryFilterInput | null;
};

export type OnUpdateInventoryProductReturnsInventorySubscription = {
  onUpdateInventoryProductReturnsInventory?: {
    __typename: "InventoryProductReturnsInventory";
    id: string;
    returnsInventoryId: string;
    inventoryProductId: string;
    returnsInventory: {
      __typename: "ReturnsInventory";
      id: string;
      userInfoID: string;
      clientID: string;
      comments?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteInventoryProductReturnsInventorySubscriptionVariables = {
  filter?: ModelSubscriptionInventoryProductReturnsInventoryFilterInput | null;
};

export type OnDeleteInventoryProductReturnsInventorySubscription = {
  onDeleteInventoryProductReturnsInventory?: {
    __typename: "InventoryProductReturnsInventory";
    id: string;
    returnsInventoryId: string;
    inventoryProductId: string;
    returnsInventory: {
      __typename: "ReturnsInventory";
      id: string;
      userInfoID: string;
      clientID: string;
      comments?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateBranchOfficeUserSubscriptionVariables = {
  filter?: ModelSubscriptionBranchOfficeUserFilterInput | null;
};

export type OnCreateBranchOfficeUserSubscription = {
  onCreateBranchOfficeUser?: {
    __typename: "BranchOfficeUser";
    id: string;
    userId: string;
    branchOfficeId: string;
    user: {
      __typename: "User";
      id: string;
      email: string;
      password: string;
      rolID: string;
      hasBranchOffice?: boolean | null;
      createdAt: string;
      updatedAt: string;
      userUserInfoId?: string | null;
    };
    branchOffice: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateBranchOfficeUserSubscriptionVariables = {
  filter?: ModelSubscriptionBranchOfficeUserFilterInput | null;
};

export type OnUpdateBranchOfficeUserSubscription = {
  onUpdateBranchOfficeUser?: {
    __typename: "BranchOfficeUser";
    id: string;
    userId: string;
    branchOfficeId: string;
    user: {
      __typename: "User";
      id: string;
      email: string;
      password: string;
      rolID: string;
      hasBranchOffice?: boolean | null;
      createdAt: string;
      updatedAt: string;
      userUserInfoId?: string | null;
    };
    branchOffice: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteBranchOfficeUserSubscriptionVariables = {
  filter?: ModelSubscriptionBranchOfficeUserFilterInput | null;
};

export type OnDeleteBranchOfficeUserSubscription = {
  onDeleteBranchOfficeUser?: {
    __typename: "BranchOfficeUser";
    id: string;
    userId: string;
    branchOfficeId: string;
    user: {
      __typename: "User";
      id: string;
      email: string;
      password: string;
      rolID: string;
      hasBranchOffice?: boolean | null;
      createdAt: string;
      updatedAt: string;
      userUserInfoId?: string | null;
    };
    branchOffice: {
      __typename: "BranchOffice";
      id: string;
      name: string;
      zipcode?: string | null;
      state?: string | null;
      location: string;
      address?: string | null;
      phone?: string | null;
      branchOffice_commission?: number | null;
      isMain?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateDiscountInventoryProductSubscriptionVariables = {
  filter?: ModelSubscriptionDiscountInventoryProductFilterInput | null;
};

export type OnCreateDiscountInventoryProductSubscription = {
  onCreateDiscountInventoryProduct?: {
    __typename: "DiscountInventoryProduct";
    id: string;
    inventoryProductId: string;
    discountsId: string;
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    discounts: {
      __typename: "Discounts";
      id: string;
      discount: number;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateDiscountInventoryProductSubscriptionVariables = {
  filter?: ModelSubscriptionDiscountInventoryProductFilterInput | null;
};

export type OnUpdateDiscountInventoryProductSubscription = {
  onUpdateDiscountInventoryProduct?: {
    __typename: "DiscountInventoryProduct";
    id: string;
    inventoryProductId: string;
    discountsId: string;
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    discounts: {
      __typename: "Discounts";
      id: string;
      discount: number;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteDiscountInventoryProductSubscriptionVariables = {
  filter?: ModelSubscriptionDiscountInventoryProductFilterInput | null;
};

export type OnDeleteDiscountInventoryProductSubscription = {
  onDeleteDiscountInventoryProduct?: {
    __typename: "DiscountInventoryProduct";
    id: string;
    inventoryProductId: string;
    discountsId: string;
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    discounts: {
      __typename: "Discounts";
      id: string;
      discount: number;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateInventoryProductSalesOperationSubscriptionVariables = {
  filter?: ModelSubscriptionInventoryProductSalesOperationFilterInput | null;
};

export type OnCreateInventoryProductSalesOperationSubscription = {
  onCreateInventoryProductSalesOperation?: {
    __typename: "InventoryProductSalesOperation";
    id: string;
    inventoryProductId: string;
    salesOperationInventoryProductQuantityId: string;
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    salesOperationInventoryProductQuantity: {
      __typename: "SalesOperationInventoryProductQuantity";
      id: string;
      name?: string | null;
      salesOperationID: string;
      soldProductQuantity: number;
      withDiscount?: boolean | null;
      discountPercentage?: number | null;
      discountPerProduct?: number | null;
      totalDiscounted?: number | null;
      productPriceWithDiscount?: number | null;
      amountToPayWithDiscount?: number | null;
      amountToPay: number;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateInventoryProductSalesOperationSubscriptionVariables = {
  filter?: ModelSubscriptionInventoryProductSalesOperationFilterInput | null;
};

export type OnUpdateInventoryProductSalesOperationSubscription = {
  onUpdateInventoryProductSalesOperation?: {
    __typename: "InventoryProductSalesOperation";
    id: string;
    inventoryProductId: string;
    salesOperationInventoryProductQuantityId: string;
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    salesOperationInventoryProductQuantity: {
      __typename: "SalesOperationInventoryProductQuantity";
      id: string;
      name?: string | null;
      salesOperationID: string;
      soldProductQuantity: number;
      withDiscount?: boolean | null;
      discountPercentage?: number | null;
      discountPerProduct?: number | null;
      totalDiscounted?: number | null;
      productPriceWithDiscount?: number | null;
      amountToPayWithDiscount?: number | null;
      amountToPay: number;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteInventoryProductSalesOperationSubscriptionVariables = {
  filter?: ModelSubscriptionInventoryProductSalesOperationFilterInput | null;
};

export type OnDeleteInventoryProductSalesOperationSubscription = {
  onDeleteInventoryProductSalesOperation?: {
    __typename: "InventoryProductSalesOperation";
    id: string;
    inventoryProductId: string;
    salesOperationInventoryProductQuantityId: string;
    inventoryProduct: {
      __typename: "InventoryProduct";
      id: string;
      inventoryID: string;
      productID: string;
      quantity: number;
      customPrice?: number | null;
      generalPrice?: number | null;
      productProviderID?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    salesOperationInventoryProductQuantity: {
      __typename: "SalesOperationInventoryProductQuantity";
      id: string;
      name?: string | null;
      salesOperationID: string;
      soldProductQuantity: number;
      withDiscount?: boolean | null;
      discountPercentage?: number | null;
      discountPerProduct?: number | null;
      totalDiscounted?: number | null;
      productPriceWithDiscount?: number | null;
      amountToPayWithDiscount?: number | null;
      amountToPay: number;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};
