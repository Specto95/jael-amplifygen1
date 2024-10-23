export interface IMovementType {
  movementType: "INCOME" | "OUTCOME" | "";
}

export interface ISubMovementType {
  subMovementType:
    | "IncomeCustomerSubscription"
    | "IncomeSales"
    | "OutcomePaymentService"
    | "";
}
