import {
  IIsClientRegistered,
  IPDVStatus,
} from "../../../../../interfaces/PDV/PDV";

export interface IHasCredit {
  hasCredit: "yes" | "no";
}

export interface IPDVOrdersManagementValues {
  clientName: string;
  selectDiscount: string;
  termToPay: number;
}

export interface IPaymentType {
  paymentType: ("cash" | "credit" | "")[];
}

export interface IPDVGeneralFormData {
  isClientRegistered: IIsClientRegistered["isClientRegistered"];
  paymentType: IPaymentType["paymentType"];
  isSecondButton: boolean;
  orderManagement: IPDVOrdersManagementValues;
  // hasCredit: IHasCredit["hasCredit"];
}

export interface ISalesOperationType {
  salesOperationType: "CASH" | "CREDIT";
}

export interface ISalesOperationStatus {
  salesOperationStatus: "PENDING" | "PAID";
}

export interface ICreateSalesOperationInput {
  id: string;
  amountPaid?: number;
  branchOfficeID: string;
  lastPaymentDate?: string | null;
  date: string;
  monthsToPay: number;
  total: number;
  totalCash?: number;
  totalCommission: number;
  nonRegisteredClientID?: string | null;
  pendingToPay: number;
  status: string;
  salesOperationInventoryOperationIDId: string;
  termDaysToPay?: string | null;
  salesOperationType: string;
  totalPayments?: number | null;
  currentTotalPayments?: number | null;
  clientID?: string | null;
  userInfoID: string;
}

export interface ISalesOperationInventoryProductQuantityInput {
  name: string;
  salesOperationID: string;
  soldProductQuantity: number;
  withDiscount: boolean;
  discountPercentage: number;
  discountPerProduct: number;
  totalDiscounted: number;
  productPriceWithDiscount: number;
  amountToPayWithDiscount: number;
  amountToPay: number;
}

export interface ICreateSalesOperationClientCreditMovementsInput {
  clientID: string;
  salesOperationID: string;
  paymentDate: string;
  amountToPay: number;
  pendingToPay: number;
  amountPaid?: number;
  numberOfPayment?: number;
  status: string;
}

export interface IUpdateInventoryProductQuantityInput {
  id: string;
  quantity: number;
}

export interface ICreateInventoryProductSalesOperationInput {
  inventoryProductId: string;
  salesOperationInventoryProductQuantityId: string;
}

export interface ICreateDiscountInventoryProductInput {
  inventoryProductId: string;
  discountsId: string;
}

export interface ICreateSalesOperationProductsInput {
  productId: string;
  salesOperationId: string;
}

export interface IUpdateCreditClientInput {
  id: string;
  credit_available: number;
  outstanding_balance: number;
  payment_status?: string;
}

export interface IUpdateClientHasCreditInput {
  id: string;
  hasCredit: boolean;
}
