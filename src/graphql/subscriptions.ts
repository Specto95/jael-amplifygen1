/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCategory = /* GraphQL */ `subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onCreateCategory(filter: $filter) {
    id
    name
    subcategories {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCategorySubscriptionVariables,
  APITypes.OnCreateCategorySubscription
>;
export const onUpdateCategory = /* GraphQL */ `subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onUpdateCategory(filter: $filter) {
    id
    name
    subcategories {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCategorySubscriptionVariables,
  APITypes.OnUpdateCategorySubscription
>;
export const onDeleteCategory = /* GraphQL */ `subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onDeleteCategory(filter: $filter) {
    id
    name
    subcategories {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCategorySubscriptionVariables,
  APITypes.OnDeleteCategorySubscription
>;
export const onCreateSubCategory = /* GraphQL */ `subscription OnCreateSubCategory(
  $filter: ModelSubscriptionSubCategoryFilterInput
) {
  onCreateSubCategory(filter: $filter) {
    id
    categoryID
    subcategory_name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSubCategorySubscriptionVariables,
  APITypes.OnCreateSubCategorySubscription
>;
export const onUpdateSubCategory = /* GraphQL */ `subscription OnUpdateSubCategory(
  $filter: ModelSubscriptionSubCategoryFilterInput
) {
  onUpdateSubCategory(filter: $filter) {
    id
    categoryID
    subcategory_name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSubCategorySubscriptionVariables,
  APITypes.OnUpdateSubCategorySubscription
>;
export const onDeleteSubCategory = /* GraphQL */ `subscription OnDeleteSubCategory(
  $filter: ModelSubscriptionSubCategoryFilterInput
) {
  onDeleteSubCategory(filter: $filter) {
    id
    categoryID
    subcategory_name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSubCategorySubscriptionVariables,
  APITypes.OnDeleteSubCategorySubscription
>;
export const onCreateClass = /* GraphQL */ `subscription OnCreateClass($filter: ModelSubscriptionClassFilterInput) {
  onCreateClass(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateClassSubscriptionVariables,
  APITypes.OnCreateClassSubscription
>;
export const onUpdateClass = /* GraphQL */ `subscription OnUpdateClass($filter: ModelSubscriptionClassFilterInput) {
  onUpdateClass(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateClassSubscriptionVariables,
  APITypes.OnUpdateClassSubscription
>;
export const onDeleteClass = /* GraphQL */ `subscription OnDeleteClass($filter: ModelSubscriptionClassFilterInput) {
  onDeleteClass(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteClassSubscriptionVariables,
  APITypes.OnDeleteClassSubscription
>;
export const onCreateClient = /* GraphQL */ `subscription OnCreateClient($filter: ModelSubscriptionClientFilterInput) {
  onCreateClient(filter: $filter) {
    id
    name
    second_name
    lastname
    second_lastname
    phone
    fixed_phone
    email
    birthday
    RFC
    address
    settlement
    postal_code
    state
    city
    salesOperation {
      nextToken
      __typename
    }
    creditID
    credit {
      id
      totalCredit
      credit_available
      outstanding_balance
      payment_status
      last_payment_date
      startDate
      createdAt
      updatedAt
      creditsClientId
      __typename
    }
    creditRequests {
      nextToken
      __typename
    }
    branchOfficeID
    branchOffice {
      id
      name
      zipcode
      state
      location
      address
      phone
      branchOffice_commission
      isMain
      createdAt
      updatedAt
      __typename
    }
    hasCredit
    hasCreditRequest
    returnsInventory {
      nextToken
      __typename
    }
    salesOperationClientCreditMovements {
      nextToken
      __typename
    }
    salesOperationClientCreditFirstLastPayment {
      nextToken
      __typename
    }
    salesOperationCustomerSubscription {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateClientSubscriptionVariables,
  APITypes.OnCreateClientSubscription
>;
export const onUpdateClient = /* GraphQL */ `subscription OnUpdateClient($filter: ModelSubscriptionClientFilterInput) {
  onUpdateClient(filter: $filter) {
    id
    name
    second_name
    lastname
    second_lastname
    phone
    fixed_phone
    email
    birthday
    RFC
    address
    settlement
    postal_code
    state
    city
    salesOperation {
      nextToken
      __typename
    }
    creditID
    credit {
      id
      totalCredit
      credit_available
      outstanding_balance
      payment_status
      last_payment_date
      startDate
      createdAt
      updatedAt
      creditsClientId
      __typename
    }
    creditRequests {
      nextToken
      __typename
    }
    branchOfficeID
    branchOffice {
      id
      name
      zipcode
      state
      location
      address
      phone
      branchOffice_commission
      isMain
      createdAt
      updatedAt
      __typename
    }
    hasCredit
    hasCreditRequest
    returnsInventory {
      nextToken
      __typename
    }
    salesOperationClientCreditMovements {
      nextToken
      __typename
    }
    salesOperationClientCreditFirstLastPayment {
      nextToken
      __typename
    }
    salesOperationCustomerSubscription {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateClientSubscriptionVariables,
  APITypes.OnUpdateClientSubscription
>;
export const onDeleteClient = /* GraphQL */ `subscription OnDeleteClient($filter: ModelSubscriptionClientFilterInput) {
  onDeleteClient(filter: $filter) {
    id
    name
    second_name
    lastname
    second_lastname
    phone
    fixed_phone
    email
    birthday
    RFC
    address
    settlement
    postal_code
    state
    city
    salesOperation {
      nextToken
      __typename
    }
    creditID
    credit {
      id
      totalCredit
      credit_available
      outstanding_balance
      payment_status
      last_payment_date
      startDate
      createdAt
      updatedAt
      creditsClientId
      __typename
    }
    creditRequests {
      nextToken
      __typename
    }
    branchOfficeID
    branchOffice {
      id
      name
      zipcode
      state
      location
      address
      phone
      branchOffice_commission
      isMain
      createdAt
      updatedAt
      __typename
    }
    hasCredit
    hasCreditRequest
    returnsInventory {
      nextToken
      __typename
    }
    salesOperationClientCreditMovements {
      nextToken
      __typename
    }
    salesOperationClientCreditFirstLastPayment {
      nextToken
      __typename
    }
    salesOperationCustomerSubscription {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteClientSubscriptionVariables,
  APITypes.OnDeleteClientSubscription
>;
export const onCreateNonRegisteredClient = /* GraphQL */ `subscription OnCreateNonRegisteredClient(
  $filter: ModelSubscriptionNonRegisteredClientFilterInput
) {
  onCreateNonRegisteredClient(filter: $filter) {
    id
    fullName
    saleOperation {
      id
      date
      total
      totalCash
      totalCommission
      nonRegisteredClientID
      pendingToPay
      amountPaid
      salesOperationType
      status
      monthsToPay
      termDaysToPay
      totalPayments
      currentTotalPayments
      lastPaymentDate
      lastDatePaid
      clientID
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      salesOperationInventoryOperationIDId
      __typename
    }
    createdAt
    updatedAt
    nonRegisteredClientSaleOperationId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateNonRegisteredClientSubscriptionVariables,
  APITypes.OnCreateNonRegisteredClientSubscription
>;
export const onUpdateNonRegisteredClient = /* GraphQL */ `subscription OnUpdateNonRegisteredClient(
  $filter: ModelSubscriptionNonRegisteredClientFilterInput
) {
  onUpdateNonRegisteredClient(filter: $filter) {
    id
    fullName
    saleOperation {
      id
      date
      total
      totalCash
      totalCommission
      nonRegisteredClientID
      pendingToPay
      amountPaid
      salesOperationType
      status
      monthsToPay
      termDaysToPay
      totalPayments
      currentTotalPayments
      lastPaymentDate
      lastDatePaid
      clientID
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      salesOperationInventoryOperationIDId
      __typename
    }
    createdAt
    updatedAt
    nonRegisteredClientSaleOperationId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateNonRegisteredClientSubscriptionVariables,
  APITypes.OnUpdateNonRegisteredClientSubscription
>;
export const onDeleteNonRegisteredClient = /* GraphQL */ `subscription OnDeleteNonRegisteredClient(
  $filter: ModelSubscriptionNonRegisteredClientFilterInput
) {
  onDeleteNonRegisteredClient(filter: $filter) {
    id
    fullName
    saleOperation {
      id
      date
      total
      totalCash
      totalCommission
      nonRegisteredClientID
      pendingToPay
      amountPaid
      salesOperationType
      status
      monthsToPay
      termDaysToPay
      totalPayments
      currentTotalPayments
      lastPaymentDate
      lastDatePaid
      clientID
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      salesOperationInventoryOperationIDId
      __typename
    }
    createdAt
    updatedAt
    nonRegisteredClientSaleOperationId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteNonRegisteredClientSubscriptionVariables,
  APITypes.OnDeleteNonRegisteredClientSubscription
>;
export const onCreateCredits = /* GraphQL */ `subscription OnCreateCredits($filter: ModelSubscriptionCreditsFilterInput) {
  onCreateCredits(filter: $filter) {
    id
    client {
      id
      name
      second_name
      lastname
      second_lastname
      phone
      fixed_phone
      email
      birthday
      RFC
      address
      settlement
      postal_code
      state
      city
      creditID
      branchOfficeID
      hasCredit
      hasCreditRequest
      createdAt
      updatedAt
      __typename
    }
    totalCredit
    credit_available
    outstanding_balance
    payment_status
    last_payment_date
    startDate
    createdAt
    updatedAt
    creditsClientId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCreditsSubscriptionVariables,
  APITypes.OnCreateCreditsSubscription
>;
export const onUpdateCredits = /* GraphQL */ `subscription OnUpdateCredits($filter: ModelSubscriptionCreditsFilterInput) {
  onUpdateCredits(filter: $filter) {
    id
    client {
      id
      name
      second_name
      lastname
      second_lastname
      phone
      fixed_phone
      email
      birthday
      RFC
      address
      settlement
      postal_code
      state
      city
      creditID
      branchOfficeID
      hasCredit
      hasCreditRequest
      createdAt
      updatedAt
      __typename
    }
    totalCredit
    credit_available
    outstanding_balance
    payment_status
    last_payment_date
    startDate
    createdAt
    updatedAt
    creditsClientId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCreditsSubscriptionVariables,
  APITypes.OnUpdateCreditsSubscription
>;
export const onDeleteCredits = /* GraphQL */ `subscription OnDeleteCredits($filter: ModelSubscriptionCreditsFilterInput) {
  onDeleteCredits(filter: $filter) {
    id
    client {
      id
      name
      second_name
      lastname
      second_lastname
      phone
      fixed_phone
      email
      birthday
      RFC
      address
      settlement
      postal_code
      state
      city
      creditID
      branchOfficeID
      hasCredit
      hasCreditRequest
      createdAt
      updatedAt
      __typename
    }
    totalCredit
    credit_available
    outstanding_balance
    payment_status
    last_payment_date
    startDate
    createdAt
    updatedAt
    creditsClientId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCreditsSubscriptionVariables,
  APITypes.OnDeleteCreditsSubscription
>;
export const onCreateCreditRequests = /* GraphQL */ `subscription OnCreateCreditRequests(
  $filter: ModelSubscriptionCreditRequestsFilterInput
) {
  onCreateCreditRequests(filter: $filter) {
    id
    clientID
    client {
      id
      name
      second_name
      lastname
      second_lastname
      phone
      fixed_phone
      email
      birthday
      RFC
      address
      settlement
      postal_code
      state
      city
      creditID
      branchOfficeID
      hasCredit
      hasCreditRequest
      createdAt
      updatedAt
      __typename
    }
    branchOfficeID
    branchOffice {
      id
      name
      zipcode
      state
      location
      address
      phone
      branchOffice_commission
      isMain
      createdAt
      updatedAt
      __typename
    }
    creditRequestAmount
    creditRequestStatus
    creditRequestReason
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCreditRequestsSubscriptionVariables,
  APITypes.OnCreateCreditRequestsSubscription
>;
export const onUpdateCreditRequests = /* GraphQL */ `subscription OnUpdateCreditRequests(
  $filter: ModelSubscriptionCreditRequestsFilterInput
) {
  onUpdateCreditRequests(filter: $filter) {
    id
    clientID
    client {
      id
      name
      second_name
      lastname
      second_lastname
      phone
      fixed_phone
      email
      birthday
      RFC
      address
      settlement
      postal_code
      state
      city
      creditID
      branchOfficeID
      hasCredit
      hasCreditRequest
      createdAt
      updatedAt
      __typename
    }
    branchOfficeID
    branchOffice {
      id
      name
      zipcode
      state
      location
      address
      phone
      branchOffice_commission
      isMain
      createdAt
      updatedAt
      __typename
    }
    creditRequestAmount
    creditRequestStatus
    creditRequestReason
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCreditRequestsSubscriptionVariables,
  APITypes.OnUpdateCreditRequestsSubscription
>;
export const onDeleteCreditRequests = /* GraphQL */ `subscription OnDeleteCreditRequests(
  $filter: ModelSubscriptionCreditRequestsFilterInput
) {
  onDeleteCreditRequests(filter: $filter) {
    id
    clientID
    client {
      id
      name
      second_name
      lastname
      second_lastname
      phone
      fixed_phone
      email
      birthday
      RFC
      address
      settlement
      postal_code
      state
      city
      creditID
      branchOfficeID
      hasCredit
      hasCreditRequest
      createdAt
      updatedAt
      __typename
    }
    branchOfficeID
    branchOffice {
      id
      name
      zipcode
      state
      location
      address
      phone
      branchOffice_commission
      isMain
      createdAt
      updatedAt
      __typename
    }
    creditRequestAmount
    creditRequestStatus
    creditRequestReason
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCreditRequestsSubscriptionVariables,
  APITypes.OnDeleteCreditRequestsSubscription
>;
export const onCreateProduct = /* GraphQL */ `subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
  onCreateProduct(filter: $filter) {
    id
    class_id
    category_id
    subcategory_id
    name
    description
    price
    commission
    hasCommission
    hasDiscount
    class {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    category {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    subcategory {
      id
      categoryID
      subcategory_name
      createdAt
      updatedAt
      __typename
    }
    productProviderID
    productProvider {
      id
      createdAt
      updatedAt
      productProviderProviderIDId
      __typename
    }
    inventoryProduct {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProductSubscriptionVariables,
  APITypes.OnCreateProductSubscription
>;
export const onUpdateProduct = /* GraphQL */ `subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
  onUpdateProduct(filter: $filter) {
    id
    class_id
    category_id
    subcategory_id
    name
    description
    price
    commission
    hasCommission
    hasDiscount
    class {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    category {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    subcategory {
      id
      categoryID
      subcategory_name
      createdAt
      updatedAt
      __typename
    }
    productProviderID
    productProvider {
      id
      createdAt
      updatedAt
      productProviderProviderIDId
      __typename
    }
    inventoryProduct {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProductSubscriptionVariables,
  APITypes.OnUpdateProductSubscription
>;
export const onDeleteProduct = /* GraphQL */ `subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
  onDeleteProduct(filter: $filter) {
    id
    class_id
    category_id
    subcategory_id
    name
    description
    price
    commission
    hasCommission
    hasDiscount
    class {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    category {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    subcategory {
      id
      categoryID
      subcategory_name
      createdAt
      updatedAt
      __typename
    }
    productProviderID
    productProvider {
      id
      createdAt
      updatedAt
      productProviderProviderIDId
      __typename
    }
    inventoryProduct {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProductSubscriptionVariables,
  APITypes.OnDeleteProductSubscription
>;
export const onCreateInventoryOperation = /* GraphQL */ `subscription OnCreateInventoryOperation(
  $filter: ModelSubscriptionInventoryOperationFilterInput
) {
  onCreateInventoryOperation(filter: $filter) {
    id
    operationType
    inventoryID
    inventory {
      id
      name
      branchOfficeID
      isMain
      createdAt
      updatedAt
      __typename
    }
    incomeInventory {
      id
      date
      comments
      status
      providerID
      productProviderResponsibleID
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      incomeInventoryInventoryOperationIDId
      __typename
    }
    incomeInventoryRequest {
      id
      date
      comments
      status
      providerID
      productProviderResponsibleID
      branchOfficeID
      userInfoID
      createdAt
      updatedAt
      incomeInventoryRequestInventoryOperationIDId
      __typename
    }
    outcomeInventory {
      id
      date
      comments
      status
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      outcomeInventoryInventoryOperationIDId
      __typename
    }
    outcomeInventoryRequest {
      id
      date
      comments
      status
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      outcomeInventoryRequestInventoryOperationIDId
      __typename
    }
    salesOperation {
      id
      date
      total
      totalCash
      totalCommission
      nonRegisteredClientID
      pendingToPay
      amountPaid
      salesOperationType
      status
      monthsToPay
      termDaysToPay
      totalPayments
      currentTotalPayments
      lastPaymentDate
      lastDatePaid
      clientID
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      salesOperationInventoryOperationIDId
      __typename
    }
    createdAt
    updatedAt
    inventoryOperationIncomeInventoryId
    inventoryOperationIncomeInventoryRequestId
    inventoryOperationOutcomeInventoryId
    inventoryOperationOutcomeInventoryRequestId
    inventoryOperationSalesOperationId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateInventoryOperationSubscriptionVariables,
  APITypes.OnCreateInventoryOperationSubscription
>;
export const onUpdateInventoryOperation = /* GraphQL */ `subscription OnUpdateInventoryOperation(
  $filter: ModelSubscriptionInventoryOperationFilterInput
) {
  onUpdateInventoryOperation(filter: $filter) {
    id
    operationType
    inventoryID
    inventory {
      id
      name
      branchOfficeID
      isMain
      createdAt
      updatedAt
      __typename
    }
    incomeInventory {
      id
      date
      comments
      status
      providerID
      productProviderResponsibleID
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      incomeInventoryInventoryOperationIDId
      __typename
    }
    incomeInventoryRequest {
      id
      date
      comments
      status
      providerID
      productProviderResponsibleID
      branchOfficeID
      userInfoID
      createdAt
      updatedAt
      incomeInventoryRequestInventoryOperationIDId
      __typename
    }
    outcomeInventory {
      id
      date
      comments
      status
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      outcomeInventoryInventoryOperationIDId
      __typename
    }
    outcomeInventoryRequest {
      id
      date
      comments
      status
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      outcomeInventoryRequestInventoryOperationIDId
      __typename
    }
    salesOperation {
      id
      date
      total
      totalCash
      totalCommission
      nonRegisteredClientID
      pendingToPay
      amountPaid
      salesOperationType
      status
      monthsToPay
      termDaysToPay
      totalPayments
      currentTotalPayments
      lastPaymentDate
      lastDatePaid
      clientID
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      salesOperationInventoryOperationIDId
      __typename
    }
    createdAt
    updatedAt
    inventoryOperationIncomeInventoryId
    inventoryOperationIncomeInventoryRequestId
    inventoryOperationOutcomeInventoryId
    inventoryOperationOutcomeInventoryRequestId
    inventoryOperationSalesOperationId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateInventoryOperationSubscriptionVariables,
  APITypes.OnUpdateInventoryOperationSubscription
>;
export const onDeleteInventoryOperation = /* GraphQL */ `subscription OnDeleteInventoryOperation(
  $filter: ModelSubscriptionInventoryOperationFilterInput
) {
  onDeleteInventoryOperation(filter: $filter) {
    id
    operationType
    inventoryID
    inventory {
      id
      name
      branchOfficeID
      isMain
      createdAt
      updatedAt
      __typename
    }
    incomeInventory {
      id
      date
      comments
      status
      providerID
      productProviderResponsibleID
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      incomeInventoryInventoryOperationIDId
      __typename
    }
    incomeInventoryRequest {
      id
      date
      comments
      status
      providerID
      productProviderResponsibleID
      branchOfficeID
      userInfoID
      createdAt
      updatedAt
      incomeInventoryRequestInventoryOperationIDId
      __typename
    }
    outcomeInventory {
      id
      date
      comments
      status
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      outcomeInventoryInventoryOperationIDId
      __typename
    }
    outcomeInventoryRequest {
      id
      date
      comments
      status
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      outcomeInventoryRequestInventoryOperationIDId
      __typename
    }
    salesOperation {
      id
      date
      total
      totalCash
      totalCommission
      nonRegisteredClientID
      pendingToPay
      amountPaid
      salesOperationType
      status
      monthsToPay
      termDaysToPay
      totalPayments
      currentTotalPayments
      lastPaymentDate
      lastDatePaid
      clientID
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      salesOperationInventoryOperationIDId
      __typename
    }
    createdAt
    updatedAt
    inventoryOperationIncomeInventoryId
    inventoryOperationIncomeInventoryRequestId
    inventoryOperationOutcomeInventoryId
    inventoryOperationOutcomeInventoryRequestId
    inventoryOperationSalesOperationId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteInventoryOperationSubscriptionVariables,
  APITypes.OnDeleteInventoryOperationSubscription
>;
export const onCreateIncomeInventory = /* GraphQL */ `subscription OnCreateIncomeInventory(
  $filter: ModelSubscriptionIncomeInventoryFilterInput
) {
  onCreateIncomeInventory(filter: $filter) {
    id
    date
    comments
    status
    inventoryOperationID {
      id
      operationType
      inventoryID
      createdAt
      updatedAt
      inventoryOperationIncomeInventoryId
      inventoryOperationIncomeInventoryRequestId
      inventoryOperationOutcomeInventoryId
      inventoryOperationOutcomeInventoryRequestId
      inventoryOperationSalesOperationId
      __typename
    }
    providerID
    provider {
      id
      enterprise_name
      enterprise_RFC
      phone
      fixed_phone
      type
      createdAt
      updatedAt
      providerProductproviderId
      providerServiceproviderId
      __typename
    }
    productProviderResponsibleID
    productProviderResponsible {
      id
      productproviderID
      name
      second_name
      lastname
      second_lastname
      phone
      RFC
      createdAt
      updatedAt
      __typename
    }
    userInfoID
    userInfo {
      id
      name
      phone
      RFC
      gender
      createdAt
      updatedAt
      userInfoUserId
      __typename
    }
    branchOfficeID
    branchOffice {
      id
      name
      zipcode
      state
      location
      address
      phone
      branchOffice_commission
      isMain
      createdAt
      updatedAt
      __typename
    }
    incomeInventoryProductQuantities {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    incomeInventoryInventoryOperationIDId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateIncomeInventorySubscriptionVariables,
  APITypes.OnCreateIncomeInventorySubscription
>;
export const onUpdateIncomeInventory = /* GraphQL */ `subscription OnUpdateIncomeInventory(
  $filter: ModelSubscriptionIncomeInventoryFilterInput
) {
  onUpdateIncomeInventory(filter: $filter) {
    id
    date
    comments
    status
    inventoryOperationID {
      id
      operationType
      inventoryID
      createdAt
      updatedAt
      inventoryOperationIncomeInventoryId
      inventoryOperationIncomeInventoryRequestId
      inventoryOperationOutcomeInventoryId
      inventoryOperationOutcomeInventoryRequestId
      inventoryOperationSalesOperationId
      __typename
    }
    providerID
    provider {
      id
      enterprise_name
      enterprise_RFC
      phone
      fixed_phone
      type
      createdAt
      updatedAt
      providerProductproviderId
      providerServiceproviderId
      __typename
    }
    productProviderResponsibleID
    productProviderResponsible {
      id
      productproviderID
      name
      second_name
      lastname
      second_lastname
      phone
      RFC
      createdAt
      updatedAt
      __typename
    }
    userInfoID
    userInfo {
      id
      name
      phone
      RFC
      gender
      createdAt
      updatedAt
      userInfoUserId
      __typename
    }
    branchOfficeID
    branchOffice {
      id
      name
      zipcode
      state
      location
      address
      phone
      branchOffice_commission
      isMain
      createdAt
      updatedAt
      __typename
    }
    incomeInventoryProductQuantities {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    incomeInventoryInventoryOperationIDId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateIncomeInventorySubscriptionVariables,
  APITypes.OnUpdateIncomeInventorySubscription
>;
export const onDeleteIncomeInventory = /* GraphQL */ `subscription OnDeleteIncomeInventory(
  $filter: ModelSubscriptionIncomeInventoryFilterInput
) {
  onDeleteIncomeInventory(filter: $filter) {
    id
    date
    comments
    status
    inventoryOperationID {
      id
      operationType
      inventoryID
      createdAt
      updatedAt
      inventoryOperationIncomeInventoryId
      inventoryOperationIncomeInventoryRequestId
      inventoryOperationOutcomeInventoryId
      inventoryOperationOutcomeInventoryRequestId
      inventoryOperationSalesOperationId
      __typename
    }
    providerID
    provider {
      id
      enterprise_name
      enterprise_RFC
      phone
      fixed_phone
      type
      createdAt
      updatedAt
      providerProductproviderId
      providerServiceproviderId
      __typename
    }
    productProviderResponsibleID
    productProviderResponsible {
      id
      productproviderID
      name
      second_name
      lastname
      second_lastname
      phone
      RFC
      createdAt
      updatedAt
      __typename
    }
    userInfoID
    userInfo {
      id
      name
      phone
      RFC
      gender
      createdAt
      updatedAt
      userInfoUserId
      __typename
    }
    branchOfficeID
    branchOffice {
      id
      name
      zipcode
      state
      location
      address
      phone
      branchOffice_commission
      isMain
      createdAt
      updatedAt
      __typename
    }
    incomeInventoryProductQuantities {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    incomeInventoryInventoryOperationIDId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteIncomeInventorySubscriptionVariables,
  APITypes.OnDeleteIncomeInventorySubscription
>;
export const onCreateIncomeInventoryRequest = /* GraphQL */ `subscription OnCreateIncomeInventoryRequest(
  $filter: ModelSubscriptionIncomeInventoryRequestFilterInput
) {
  onCreateIncomeInventoryRequest(filter: $filter) {
    id
    date
    comments
    status
    inventoryOperationID {
      id
      operationType
      inventoryID
      createdAt
      updatedAt
      inventoryOperationIncomeInventoryId
      inventoryOperationIncomeInventoryRequestId
      inventoryOperationOutcomeInventoryId
      inventoryOperationOutcomeInventoryRequestId
      inventoryOperationSalesOperationId
      __typename
    }
    providerID
    provider {
      id
      enterprise_name
      enterprise_RFC
      phone
      fixed_phone
      type
      createdAt
      updatedAt
      providerProductproviderId
      providerServiceproviderId
      __typename
    }
    productProviderResponsibleID
    productProviderResponsible {
      id
      productproviderID
      name
      second_name
      lastname
      second_lastname
      phone
      RFC
      createdAt
      updatedAt
      __typename
    }
    branchOfficeID
    branchOffice {
      id
      name
      zipcode
      state
      location
      address
      phone
      branchOffice_commission
      isMain
      createdAt
      updatedAt
      __typename
    }
    userInfoID
    userInfo {
      id
      name
      phone
      RFC
      gender
      createdAt
      updatedAt
      userInfoUserId
      __typename
    }
    incomeInventoryProductQuantitiesRequest {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    incomeInventoryRequestInventoryOperationIDId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateIncomeInventoryRequestSubscriptionVariables,
  APITypes.OnCreateIncomeInventoryRequestSubscription
>;
export const onUpdateIncomeInventoryRequest = /* GraphQL */ `subscription OnUpdateIncomeInventoryRequest(
  $filter: ModelSubscriptionIncomeInventoryRequestFilterInput
) {
  onUpdateIncomeInventoryRequest(filter: $filter) {
    id
    date
    comments
    status
    inventoryOperationID {
      id
      operationType
      inventoryID
      createdAt
      updatedAt
      inventoryOperationIncomeInventoryId
      inventoryOperationIncomeInventoryRequestId
      inventoryOperationOutcomeInventoryId
      inventoryOperationOutcomeInventoryRequestId
      inventoryOperationSalesOperationId
      __typename
    }
    providerID
    provider {
      id
      enterprise_name
      enterprise_RFC
      phone
      fixed_phone
      type
      createdAt
      updatedAt
      providerProductproviderId
      providerServiceproviderId
      __typename
    }
    productProviderResponsibleID
    productProviderResponsible {
      id
      productproviderID
      name
      second_name
      lastname
      second_lastname
      phone
      RFC
      createdAt
      updatedAt
      __typename
    }
    branchOfficeID
    branchOffice {
      id
      name
      zipcode
      state
      location
      address
      phone
      branchOffice_commission
      isMain
      createdAt
      updatedAt
      __typename
    }
    userInfoID
    userInfo {
      id
      name
      phone
      RFC
      gender
      createdAt
      updatedAt
      userInfoUserId
      __typename
    }
    incomeInventoryProductQuantitiesRequest {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    incomeInventoryRequestInventoryOperationIDId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateIncomeInventoryRequestSubscriptionVariables,
  APITypes.OnUpdateIncomeInventoryRequestSubscription
>;
export const onDeleteIncomeInventoryRequest = /* GraphQL */ `subscription OnDeleteIncomeInventoryRequest(
  $filter: ModelSubscriptionIncomeInventoryRequestFilterInput
) {
  onDeleteIncomeInventoryRequest(filter: $filter) {
    id
    date
    comments
    status
    inventoryOperationID {
      id
      operationType
      inventoryID
      createdAt
      updatedAt
      inventoryOperationIncomeInventoryId
      inventoryOperationIncomeInventoryRequestId
      inventoryOperationOutcomeInventoryId
      inventoryOperationOutcomeInventoryRequestId
      inventoryOperationSalesOperationId
      __typename
    }
    providerID
    provider {
      id
      enterprise_name
      enterprise_RFC
      phone
      fixed_phone
      type
      createdAt
      updatedAt
      providerProductproviderId
      providerServiceproviderId
      __typename
    }
    productProviderResponsibleID
    productProviderResponsible {
      id
      productproviderID
      name
      second_name
      lastname
      second_lastname
      phone
      RFC
      createdAt
      updatedAt
      __typename
    }
    branchOfficeID
    branchOffice {
      id
      name
      zipcode
      state
      location
      address
      phone
      branchOffice_commission
      isMain
      createdAt
      updatedAt
      __typename
    }
    userInfoID
    userInfo {
      id
      name
      phone
      RFC
      gender
      createdAt
      updatedAt
      userInfoUserId
      __typename
    }
    incomeInventoryProductQuantitiesRequest {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    incomeInventoryRequestInventoryOperationIDId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteIncomeInventoryRequestSubscriptionVariables,
  APITypes.OnDeleteIncomeInventoryRequestSubscription
>;
export const onCreateIncomeInventoryProductQuantity = /* GraphQL */ `subscription OnCreateIncomeInventoryProductQuantity(
  $filter: ModelSubscriptionIncomeInventoryProductQuantityFilterInput
) {
  onCreateIncomeInventoryProductQuantity(filter: $filter) {
    id
    incomeQuantity
    inventoryProducts {
      nextToken
      __typename
    }
    incomeInventoryID
    incomeInventory {
      id
      date
      comments
      status
      providerID
      productProviderResponsibleID
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      incomeInventoryInventoryOperationIDId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateIncomeInventoryProductQuantitySubscriptionVariables,
  APITypes.OnCreateIncomeInventoryProductQuantitySubscription
>;
export const onUpdateIncomeInventoryProductQuantity = /* GraphQL */ `subscription OnUpdateIncomeInventoryProductQuantity(
  $filter: ModelSubscriptionIncomeInventoryProductQuantityFilterInput
) {
  onUpdateIncomeInventoryProductQuantity(filter: $filter) {
    id
    incomeQuantity
    inventoryProducts {
      nextToken
      __typename
    }
    incomeInventoryID
    incomeInventory {
      id
      date
      comments
      status
      providerID
      productProviderResponsibleID
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      incomeInventoryInventoryOperationIDId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateIncomeInventoryProductQuantitySubscriptionVariables,
  APITypes.OnUpdateIncomeInventoryProductQuantitySubscription
>;
export const onDeleteIncomeInventoryProductQuantity = /* GraphQL */ `subscription OnDeleteIncomeInventoryProductQuantity(
  $filter: ModelSubscriptionIncomeInventoryProductQuantityFilterInput
) {
  onDeleteIncomeInventoryProductQuantity(filter: $filter) {
    id
    incomeQuantity
    inventoryProducts {
      nextToken
      __typename
    }
    incomeInventoryID
    incomeInventory {
      id
      date
      comments
      status
      providerID
      productProviderResponsibleID
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      incomeInventoryInventoryOperationIDId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteIncomeInventoryProductQuantitySubscriptionVariables,
  APITypes.OnDeleteIncomeInventoryProductQuantitySubscription
>;
export const onCreateIncomeInventoryProductQuantityRequest = /* GraphQL */ `subscription OnCreateIncomeInventoryProductQuantityRequest(
  $filter: ModelSubscriptionIncomeInventoryProductQuantityRequestFilterInput
) {
  onCreateIncomeInventoryProductQuantityRequest(filter: $filter) {
    id
    incomeQuantity
    inventoryProducts {
      nextToken
      __typename
    }
    incomeInventoryRequestID
    incomeInventoryRequest {
      id
      date
      comments
      status
      providerID
      productProviderResponsibleID
      branchOfficeID
      userInfoID
      createdAt
      updatedAt
      incomeInventoryRequestInventoryOperationIDId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateIncomeInventoryProductQuantityRequestSubscriptionVariables,
  APITypes.OnCreateIncomeInventoryProductQuantityRequestSubscription
>;
export const onUpdateIncomeInventoryProductQuantityRequest = /* GraphQL */ `subscription OnUpdateIncomeInventoryProductQuantityRequest(
  $filter: ModelSubscriptionIncomeInventoryProductQuantityRequestFilterInput
) {
  onUpdateIncomeInventoryProductQuantityRequest(filter: $filter) {
    id
    incomeQuantity
    inventoryProducts {
      nextToken
      __typename
    }
    incomeInventoryRequestID
    incomeInventoryRequest {
      id
      date
      comments
      status
      providerID
      productProviderResponsibleID
      branchOfficeID
      userInfoID
      createdAt
      updatedAt
      incomeInventoryRequestInventoryOperationIDId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateIncomeInventoryProductQuantityRequestSubscriptionVariables,
  APITypes.OnUpdateIncomeInventoryProductQuantityRequestSubscription
>;
export const onDeleteIncomeInventoryProductQuantityRequest = /* GraphQL */ `subscription OnDeleteIncomeInventoryProductQuantityRequest(
  $filter: ModelSubscriptionIncomeInventoryProductQuantityRequestFilterInput
) {
  onDeleteIncomeInventoryProductQuantityRequest(filter: $filter) {
    id
    incomeQuantity
    inventoryProducts {
      nextToken
      __typename
    }
    incomeInventoryRequestID
    incomeInventoryRequest {
      id
      date
      comments
      status
      providerID
      productProviderResponsibleID
      branchOfficeID
      userInfoID
      createdAt
      updatedAt
      incomeInventoryRequestInventoryOperationIDId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteIncomeInventoryProductQuantityRequestSubscriptionVariables,
  APITypes.OnDeleteIncomeInventoryProductQuantityRequestSubscription
>;
export const onCreateOutcomeInventory = /* GraphQL */ `subscription OnCreateOutcomeInventory(
  $filter: ModelSubscriptionOutcomeInventoryFilterInput
) {
  onCreateOutcomeInventory(filter: $filter) {
    id
    date
    comments
    status
    userInfoID
    userInfo {
      id
      name
      phone
      RFC
      gender
      createdAt
      updatedAt
      userInfoUserId
      __typename
    }
    branchOfficeID
    branchOffice {
      id
      name
      zipcode
      state
      location
      address
      phone
      branchOffice_commission
      isMain
      createdAt
      updatedAt
      __typename
    }
    inventoryOperationID {
      id
      operationType
      inventoryID
      createdAt
      updatedAt
      inventoryOperationIncomeInventoryId
      inventoryOperationIncomeInventoryRequestId
      inventoryOperationOutcomeInventoryId
      inventoryOperationOutcomeInventoryRequestId
      inventoryOperationSalesOperationId
      __typename
    }
    outcomeInventoryProductQuantities {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    outcomeInventoryInventoryOperationIDId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateOutcomeInventorySubscriptionVariables,
  APITypes.OnCreateOutcomeInventorySubscription
>;
export const onUpdateOutcomeInventory = /* GraphQL */ `subscription OnUpdateOutcomeInventory(
  $filter: ModelSubscriptionOutcomeInventoryFilterInput
) {
  onUpdateOutcomeInventory(filter: $filter) {
    id
    date
    comments
    status
    userInfoID
    userInfo {
      id
      name
      phone
      RFC
      gender
      createdAt
      updatedAt
      userInfoUserId
      __typename
    }
    branchOfficeID
    branchOffice {
      id
      name
      zipcode
      state
      location
      address
      phone
      branchOffice_commission
      isMain
      createdAt
      updatedAt
      __typename
    }
    inventoryOperationID {
      id
      operationType
      inventoryID
      createdAt
      updatedAt
      inventoryOperationIncomeInventoryId
      inventoryOperationIncomeInventoryRequestId
      inventoryOperationOutcomeInventoryId
      inventoryOperationOutcomeInventoryRequestId
      inventoryOperationSalesOperationId
      __typename
    }
    outcomeInventoryProductQuantities {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    outcomeInventoryInventoryOperationIDId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateOutcomeInventorySubscriptionVariables,
  APITypes.OnUpdateOutcomeInventorySubscription
>;
export const onDeleteOutcomeInventory = /* GraphQL */ `subscription OnDeleteOutcomeInventory(
  $filter: ModelSubscriptionOutcomeInventoryFilterInput
) {
  onDeleteOutcomeInventory(filter: $filter) {
    id
    date
    comments
    status
    userInfoID
    userInfo {
      id
      name
      phone
      RFC
      gender
      createdAt
      updatedAt
      userInfoUserId
      __typename
    }
    branchOfficeID
    branchOffice {
      id
      name
      zipcode
      state
      location
      address
      phone
      branchOffice_commission
      isMain
      createdAt
      updatedAt
      __typename
    }
    inventoryOperationID {
      id
      operationType
      inventoryID
      createdAt
      updatedAt
      inventoryOperationIncomeInventoryId
      inventoryOperationIncomeInventoryRequestId
      inventoryOperationOutcomeInventoryId
      inventoryOperationOutcomeInventoryRequestId
      inventoryOperationSalesOperationId
      __typename
    }
    outcomeInventoryProductQuantities {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    outcomeInventoryInventoryOperationIDId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteOutcomeInventorySubscriptionVariables,
  APITypes.OnDeleteOutcomeInventorySubscription
>;
export const onCreateOutcomeInventoryRequest = /* GraphQL */ `subscription OnCreateOutcomeInventoryRequest(
  $filter: ModelSubscriptionOutcomeInventoryRequestFilterInput
) {
  onCreateOutcomeInventoryRequest(filter: $filter) {
    id
    date
    comments
    status
    userInfoID
    userInfo {
      id
      name
      phone
      RFC
      gender
      createdAt
      updatedAt
      userInfoUserId
      __typename
    }
    branchOfficeID
    branchOffice {
      id
      name
      zipcode
      state
      location
      address
      phone
      branchOffice_commission
      isMain
      createdAt
      updatedAt
      __typename
    }
    inventoryOperationID {
      id
      operationType
      inventoryID
      createdAt
      updatedAt
      inventoryOperationIncomeInventoryId
      inventoryOperationIncomeInventoryRequestId
      inventoryOperationOutcomeInventoryId
      inventoryOperationOutcomeInventoryRequestId
      inventoryOperationSalesOperationId
      __typename
    }
    outcomeInventoryProductQuantitiesRequest {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    outcomeInventoryRequestInventoryOperationIDId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateOutcomeInventoryRequestSubscriptionVariables,
  APITypes.OnCreateOutcomeInventoryRequestSubscription
>;
export const onUpdateOutcomeInventoryRequest = /* GraphQL */ `subscription OnUpdateOutcomeInventoryRequest(
  $filter: ModelSubscriptionOutcomeInventoryRequestFilterInput
) {
  onUpdateOutcomeInventoryRequest(filter: $filter) {
    id
    date
    comments
    status
    userInfoID
    userInfo {
      id
      name
      phone
      RFC
      gender
      createdAt
      updatedAt
      userInfoUserId
      __typename
    }
    branchOfficeID
    branchOffice {
      id
      name
      zipcode
      state
      location
      address
      phone
      branchOffice_commission
      isMain
      createdAt
      updatedAt
      __typename
    }
    inventoryOperationID {
      id
      operationType
      inventoryID
      createdAt
      updatedAt
      inventoryOperationIncomeInventoryId
      inventoryOperationIncomeInventoryRequestId
      inventoryOperationOutcomeInventoryId
      inventoryOperationOutcomeInventoryRequestId
      inventoryOperationSalesOperationId
      __typename
    }
    outcomeInventoryProductQuantitiesRequest {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    outcomeInventoryRequestInventoryOperationIDId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateOutcomeInventoryRequestSubscriptionVariables,
  APITypes.OnUpdateOutcomeInventoryRequestSubscription
>;
export const onDeleteOutcomeInventoryRequest = /* GraphQL */ `subscription OnDeleteOutcomeInventoryRequest(
  $filter: ModelSubscriptionOutcomeInventoryRequestFilterInput
) {
  onDeleteOutcomeInventoryRequest(filter: $filter) {
    id
    date
    comments
    status
    userInfoID
    userInfo {
      id
      name
      phone
      RFC
      gender
      createdAt
      updatedAt
      userInfoUserId
      __typename
    }
    branchOfficeID
    branchOffice {
      id
      name
      zipcode
      state
      location
      address
      phone
      branchOffice_commission
      isMain
      createdAt
      updatedAt
      __typename
    }
    inventoryOperationID {
      id
      operationType
      inventoryID
      createdAt
      updatedAt
      inventoryOperationIncomeInventoryId
      inventoryOperationIncomeInventoryRequestId
      inventoryOperationOutcomeInventoryId
      inventoryOperationOutcomeInventoryRequestId
      inventoryOperationSalesOperationId
      __typename
    }
    outcomeInventoryProductQuantitiesRequest {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    outcomeInventoryRequestInventoryOperationIDId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteOutcomeInventoryRequestSubscriptionVariables,
  APITypes.OnDeleteOutcomeInventoryRequestSubscription
>;
export const onCreateOutcomeInventoryProductQuantity = /* GraphQL */ `subscription OnCreateOutcomeInventoryProductQuantity(
  $filter: ModelSubscriptionOutcomeInventoryProductQuantityFilterInput
) {
  onCreateOutcomeInventoryProductQuantity(filter: $filter) {
    id
    outcomeQuantity
    inventoryProducts {
      nextToken
      __typename
    }
    outcomeInventoryID
    outcomeInventory {
      id
      date
      comments
      status
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      outcomeInventoryInventoryOperationIDId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateOutcomeInventoryProductQuantitySubscriptionVariables,
  APITypes.OnCreateOutcomeInventoryProductQuantitySubscription
>;
export const onUpdateOutcomeInventoryProductQuantity = /* GraphQL */ `subscription OnUpdateOutcomeInventoryProductQuantity(
  $filter: ModelSubscriptionOutcomeInventoryProductQuantityFilterInput
) {
  onUpdateOutcomeInventoryProductQuantity(filter: $filter) {
    id
    outcomeQuantity
    inventoryProducts {
      nextToken
      __typename
    }
    outcomeInventoryID
    outcomeInventory {
      id
      date
      comments
      status
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      outcomeInventoryInventoryOperationIDId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateOutcomeInventoryProductQuantitySubscriptionVariables,
  APITypes.OnUpdateOutcomeInventoryProductQuantitySubscription
>;
export const onDeleteOutcomeInventoryProductQuantity = /* GraphQL */ `subscription OnDeleteOutcomeInventoryProductQuantity(
  $filter: ModelSubscriptionOutcomeInventoryProductQuantityFilterInput
) {
  onDeleteOutcomeInventoryProductQuantity(filter: $filter) {
    id
    outcomeQuantity
    inventoryProducts {
      nextToken
      __typename
    }
    outcomeInventoryID
    outcomeInventory {
      id
      date
      comments
      status
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      outcomeInventoryInventoryOperationIDId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteOutcomeInventoryProductQuantitySubscriptionVariables,
  APITypes.OnDeleteOutcomeInventoryProductQuantitySubscription
>;
export const onCreateOutcomeInventoryProductQuantityRequest = /* GraphQL */ `subscription OnCreateOutcomeInventoryProductQuantityRequest(
  $filter: ModelSubscriptionOutcomeInventoryProductQuantityRequestFilterInput
) {
  onCreateOutcomeInventoryProductQuantityRequest(filter: $filter) {
    id
    outcomeRequestQuantity
    inventoryProducts {
      nextToken
      __typename
    }
    outcomeInventoryRequestID
    outcomeInventoryRequest {
      id
      date
      comments
      status
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      outcomeInventoryRequestInventoryOperationIDId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateOutcomeInventoryProductQuantityRequestSubscriptionVariables,
  APITypes.OnCreateOutcomeInventoryProductQuantityRequestSubscription
>;
export const onUpdateOutcomeInventoryProductQuantityRequest = /* GraphQL */ `subscription OnUpdateOutcomeInventoryProductQuantityRequest(
  $filter: ModelSubscriptionOutcomeInventoryProductQuantityRequestFilterInput
) {
  onUpdateOutcomeInventoryProductQuantityRequest(filter: $filter) {
    id
    outcomeRequestQuantity
    inventoryProducts {
      nextToken
      __typename
    }
    outcomeInventoryRequestID
    outcomeInventoryRequest {
      id
      date
      comments
      status
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      outcomeInventoryRequestInventoryOperationIDId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateOutcomeInventoryProductQuantityRequestSubscriptionVariables,
  APITypes.OnUpdateOutcomeInventoryProductQuantityRequestSubscription
>;
export const onDeleteOutcomeInventoryProductQuantityRequest = /* GraphQL */ `subscription OnDeleteOutcomeInventoryProductQuantityRequest(
  $filter: ModelSubscriptionOutcomeInventoryProductQuantityRequestFilterInput
) {
  onDeleteOutcomeInventoryProductQuantityRequest(filter: $filter) {
    id
    outcomeRequestQuantity
    inventoryProducts {
      nextToken
      __typename
    }
    outcomeInventoryRequestID
    outcomeInventoryRequest {
      id
      date
      comments
      status
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      outcomeInventoryRequestInventoryOperationIDId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteOutcomeInventoryProductQuantityRequestSubscriptionVariables,
  APITypes.OnDeleteOutcomeInventoryProductQuantityRequestSubscription
>;
export const onCreateReturnsInventory = /* GraphQL */ `subscription OnCreateReturnsInventory(
  $filter: ModelSubscriptionReturnsInventoryFilterInput
) {
  onCreateReturnsInventory(filter: $filter) {
    id
    userInfoID
    userInfo {
      id
      name
      phone
      RFC
      gender
      createdAt
      updatedAt
      userInfoUserId
      __typename
    }
    clientID
    client {
      id
      name
      second_name
      lastname
      second_lastname
      phone
      fixed_phone
      email
      birthday
      RFC
      address
      settlement
      postal_code
      state
      city
      creditID
      branchOfficeID
      hasCredit
      hasCreditRequest
      createdAt
      updatedAt
      __typename
    }
    comments
    inventoryProducts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateReturnsInventorySubscriptionVariables,
  APITypes.OnCreateReturnsInventorySubscription
>;
export const onUpdateReturnsInventory = /* GraphQL */ `subscription OnUpdateReturnsInventory(
  $filter: ModelSubscriptionReturnsInventoryFilterInput
) {
  onUpdateReturnsInventory(filter: $filter) {
    id
    userInfoID
    userInfo {
      id
      name
      phone
      RFC
      gender
      createdAt
      updatedAt
      userInfoUserId
      __typename
    }
    clientID
    client {
      id
      name
      second_name
      lastname
      second_lastname
      phone
      fixed_phone
      email
      birthday
      RFC
      address
      settlement
      postal_code
      state
      city
      creditID
      branchOfficeID
      hasCredit
      hasCreditRequest
      createdAt
      updatedAt
      __typename
    }
    comments
    inventoryProducts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateReturnsInventorySubscriptionVariables,
  APITypes.OnUpdateReturnsInventorySubscription
>;
export const onDeleteReturnsInventory = /* GraphQL */ `subscription OnDeleteReturnsInventory(
  $filter: ModelSubscriptionReturnsInventoryFilterInput
) {
  onDeleteReturnsInventory(filter: $filter) {
    id
    userInfoID
    userInfo {
      id
      name
      phone
      RFC
      gender
      createdAt
      updatedAt
      userInfoUserId
      __typename
    }
    clientID
    client {
      id
      name
      second_name
      lastname
      second_lastname
      phone
      fixed_phone
      email
      birthday
      RFC
      address
      settlement
      postal_code
      state
      city
      creditID
      branchOfficeID
      hasCredit
      hasCreditRequest
      createdAt
      updatedAt
      __typename
    }
    comments
    inventoryProducts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteReturnsInventorySubscriptionVariables,
  APITypes.OnDeleteReturnsInventorySubscription
>;
export const onCreateRole = /* GraphQL */ `subscription OnCreateRole($filter: ModelSubscriptionRoleFilterInput) {
  onCreateRole(filter: $filter) {
    id
    name
    description
    user {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateRoleSubscriptionVariables,
  APITypes.OnCreateRoleSubscription
>;
export const onUpdateRole = /* GraphQL */ `subscription OnUpdateRole($filter: ModelSubscriptionRoleFilterInput) {
  onUpdateRole(filter: $filter) {
    id
    name
    description
    user {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateRoleSubscriptionVariables,
  APITypes.OnUpdateRoleSubscription
>;
export const onDeleteRole = /* GraphQL */ `subscription OnDeleteRole($filter: ModelSubscriptionRoleFilterInput) {
  onDeleteRole(filter: $filter) {
    id
    name
    description
    user {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteRoleSubscriptionVariables,
  APITypes.OnDeleteRoleSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
    id
    email
    password
    rolID
    rol {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
    userInfo {
      id
      name
      phone
      RFC
      gender
      createdAt
      updatedAt
      userInfoUserId
      __typename
    }
    hasBranchOffice
    branchOffice {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    userUserInfoId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
    id
    email
    password
    rolID
    rol {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
    userInfo {
      id
      name
      phone
      RFC
      gender
      createdAt
      updatedAt
      userInfoUserId
      __typename
    }
    hasBranchOffice
    branchOffice {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    userUserInfoId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
    id
    email
    password
    rolID
    rol {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
    userInfo {
      id
      name
      phone
      RFC
      gender
      createdAt
      updatedAt
      userInfoUserId
      __typename
    }
    hasBranchOffice
    branchOffice {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    userUserInfoId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateUserInfo = /* GraphQL */ `subscription OnCreateUserInfo($filter: ModelSubscriptionUserInfoFilterInput) {
  onCreateUserInfo(filter: $filter) {
    id
    name
    phone
    RFC
    gender
    user {
      id
      email
      password
      rolID
      hasBranchOffice
      createdAt
      updatedAt
      userUserInfoId
      __typename
    }
    companyExpenses {
      nextToken
      __typename
    }
    salesOperation {
      nextToken
      __typename
    }
    incomeInventories {
      nextToken
      __typename
    }
    incomeInventoriesRequest {
      nextToken
      __typename
    }
    outcomeInventories {
      nextToken
      __typename
    }
    outcomeInventoriesRequest {
      nextToken
      __typename
    }
    returnsInventory {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    userInfoUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserInfoSubscriptionVariables,
  APITypes.OnCreateUserInfoSubscription
>;
export const onUpdateUserInfo = /* GraphQL */ `subscription OnUpdateUserInfo($filter: ModelSubscriptionUserInfoFilterInput) {
  onUpdateUserInfo(filter: $filter) {
    id
    name
    phone
    RFC
    gender
    user {
      id
      email
      password
      rolID
      hasBranchOffice
      createdAt
      updatedAt
      userUserInfoId
      __typename
    }
    companyExpenses {
      nextToken
      __typename
    }
    salesOperation {
      nextToken
      __typename
    }
    incomeInventories {
      nextToken
      __typename
    }
    incomeInventoriesRequest {
      nextToken
      __typename
    }
    outcomeInventories {
      nextToken
      __typename
    }
    outcomeInventoriesRequest {
      nextToken
      __typename
    }
    returnsInventory {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    userInfoUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserInfoSubscriptionVariables,
  APITypes.OnUpdateUserInfoSubscription
>;
export const onDeleteUserInfo = /* GraphQL */ `subscription OnDeleteUserInfo($filter: ModelSubscriptionUserInfoFilterInput) {
  onDeleteUserInfo(filter: $filter) {
    id
    name
    phone
    RFC
    gender
    user {
      id
      email
      password
      rolID
      hasBranchOffice
      createdAt
      updatedAt
      userUserInfoId
      __typename
    }
    companyExpenses {
      nextToken
      __typename
    }
    salesOperation {
      nextToken
      __typename
    }
    incomeInventories {
      nextToken
      __typename
    }
    incomeInventoriesRequest {
      nextToken
      __typename
    }
    outcomeInventories {
      nextToken
      __typename
    }
    outcomeInventoriesRequest {
      nextToken
      __typename
    }
    returnsInventory {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    userInfoUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserInfoSubscriptionVariables,
  APITypes.OnDeleteUserInfoSubscription
>;
export const onCreateInventory = /* GraphQL */ `subscription OnCreateInventory($filter: ModelSubscriptionInventoryFilterInput) {
  onCreateInventory(filter: $filter) {
    id
    name
    branchOfficeID
    branchOffice {
      id
      name
      zipcode
      state
      location
      address
      phone
      branchOffice_commission
      isMain
      createdAt
      updatedAt
      __typename
    }
    inventoryOperations {
      nextToken
      __typename
    }
    inventoryProduct {
      nextToken
      __typename
    }
    isMain
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateInventorySubscriptionVariables,
  APITypes.OnCreateInventorySubscription
>;
export const onUpdateInventory = /* GraphQL */ `subscription OnUpdateInventory($filter: ModelSubscriptionInventoryFilterInput) {
  onUpdateInventory(filter: $filter) {
    id
    name
    branchOfficeID
    branchOffice {
      id
      name
      zipcode
      state
      location
      address
      phone
      branchOffice_commission
      isMain
      createdAt
      updatedAt
      __typename
    }
    inventoryOperations {
      nextToken
      __typename
    }
    inventoryProduct {
      nextToken
      __typename
    }
    isMain
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateInventorySubscriptionVariables,
  APITypes.OnUpdateInventorySubscription
>;
export const onDeleteInventory = /* GraphQL */ `subscription OnDeleteInventory($filter: ModelSubscriptionInventoryFilterInput) {
  onDeleteInventory(filter: $filter) {
    id
    name
    branchOfficeID
    branchOffice {
      id
      name
      zipcode
      state
      location
      address
      phone
      branchOffice_commission
      isMain
      createdAt
      updatedAt
      __typename
    }
    inventoryOperations {
      nextToken
      __typename
    }
    inventoryProduct {
      nextToken
      __typename
    }
    isMain
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteInventorySubscriptionVariables,
  APITypes.OnDeleteInventorySubscription
>;
export const onCreateInventoryProduct = /* GraphQL */ `subscription OnCreateInventoryProduct(
  $filter: ModelSubscriptionInventoryProductFilterInput
) {
  onCreateInventoryProduct(filter: $filter) {
    id
    inventoryID
    inventory {
      id
      name
      branchOfficeID
      isMain
      createdAt
      updatedAt
      __typename
    }
    productID
    product {
      id
      class_id
      category_id
      subcategory_id
      name
      description
      price
      commission
      hasCommission
      hasDiscount
      productProviderID
      createdAt
      updatedAt
      __typename
    }
    quantity
    customPrice
    generalPrice
    productProviderID
    productProvider {
      id
      createdAt
      updatedAt
      productProviderProviderIDId
      __typename
    }
    discounts {
      nextToken
      __typename
    }
    inventoryProductIncomeInventory {
      nextToken
      __typename
    }
    inventoryProductIncomeInventoryRequests {
      nextToken
      __typename
    }
    inventoryProductOutcomeInventory {
      nextToken
      __typename
    }
    inventoryProductOutcomeInventoryRequests {
      nextToken
      __typename
    }
    inventoryProductSalesOperation {
      nextToken
      __typename
    }
    returnsInventory {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateInventoryProductSubscriptionVariables,
  APITypes.OnCreateInventoryProductSubscription
>;
export const onUpdateInventoryProduct = /* GraphQL */ `subscription OnUpdateInventoryProduct(
  $filter: ModelSubscriptionInventoryProductFilterInput
) {
  onUpdateInventoryProduct(filter: $filter) {
    id
    inventoryID
    inventory {
      id
      name
      branchOfficeID
      isMain
      createdAt
      updatedAt
      __typename
    }
    productID
    product {
      id
      class_id
      category_id
      subcategory_id
      name
      description
      price
      commission
      hasCommission
      hasDiscount
      productProviderID
      createdAt
      updatedAt
      __typename
    }
    quantity
    customPrice
    generalPrice
    productProviderID
    productProvider {
      id
      createdAt
      updatedAt
      productProviderProviderIDId
      __typename
    }
    discounts {
      nextToken
      __typename
    }
    inventoryProductIncomeInventory {
      nextToken
      __typename
    }
    inventoryProductIncomeInventoryRequests {
      nextToken
      __typename
    }
    inventoryProductOutcomeInventory {
      nextToken
      __typename
    }
    inventoryProductOutcomeInventoryRequests {
      nextToken
      __typename
    }
    inventoryProductSalesOperation {
      nextToken
      __typename
    }
    returnsInventory {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateInventoryProductSubscriptionVariables,
  APITypes.OnUpdateInventoryProductSubscription
>;
export const onDeleteInventoryProduct = /* GraphQL */ `subscription OnDeleteInventoryProduct(
  $filter: ModelSubscriptionInventoryProductFilterInput
) {
  onDeleteInventoryProduct(filter: $filter) {
    id
    inventoryID
    inventory {
      id
      name
      branchOfficeID
      isMain
      createdAt
      updatedAt
      __typename
    }
    productID
    product {
      id
      class_id
      category_id
      subcategory_id
      name
      description
      price
      commission
      hasCommission
      hasDiscount
      productProviderID
      createdAt
      updatedAt
      __typename
    }
    quantity
    customPrice
    generalPrice
    productProviderID
    productProvider {
      id
      createdAt
      updatedAt
      productProviderProviderIDId
      __typename
    }
    discounts {
      nextToken
      __typename
    }
    inventoryProductIncomeInventory {
      nextToken
      __typename
    }
    inventoryProductIncomeInventoryRequests {
      nextToken
      __typename
    }
    inventoryProductOutcomeInventory {
      nextToken
      __typename
    }
    inventoryProductOutcomeInventoryRequests {
      nextToken
      __typename
    }
    inventoryProductSalesOperation {
      nextToken
      __typename
    }
    returnsInventory {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteInventoryProductSubscriptionVariables,
  APITypes.OnDeleteInventoryProductSubscription
>;
export const onCreateBranchOffice = /* GraphQL */ `subscription OnCreateBranchOffice(
  $filter: ModelSubscriptionBranchOfficeFilterInput
) {
  onCreateBranchOffice(filter: $filter) {
    id
    name
    zipcode
    state
    location
    address
    phone
    branchOffice_commission
    inventories {
      nextToken
      __typename
    }
    isMain
    creditRequests {
      nextToken
      __typename
    }
    companyExpenses {
      nextToken
      __typename
    }
    users {
      nextToken
      __typename
    }
    clients {
      nextToken
      __typename
    }
    outcomeInventories {
      nextToken
      __typename
    }
    outcomeInventoriesRequest {
      nextToken
      __typename
    }
    incomeInventories {
      nextToken
      __typename
    }
    incomeInventoriesRequest {
      nextToken
      __typename
    }
    salesOperations {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBranchOfficeSubscriptionVariables,
  APITypes.OnCreateBranchOfficeSubscription
>;
export const onUpdateBranchOffice = /* GraphQL */ `subscription OnUpdateBranchOffice(
  $filter: ModelSubscriptionBranchOfficeFilterInput
) {
  onUpdateBranchOffice(filter: $filter) {
    id
    name
    zipcode
    state
    location
    address
    phone
    branchOffice_commission
    inventories {
      nextToken
      __typename
    }
    isMain
    creditRequests {
      nextToken
      __typename
    }
    companyExpenses {
      nextToken
      __typename
    }
    users {
      nextToken
      __typename
    }
    clients {
      nextToken
      __typename
    }
    outcomeInventories {
      nextToken
      __typename
    }
    outcomeInventoriesRequest {
      nextToken
      __typename
    }
    incomeInventories {
      nextToken
      __typename
    }
    incomeInventoriesRequest {
      nextToken
      __typename
    }
    salesOperations {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBranchOfficeSubscriptionVariables,
  APITypes.OnUpdateBranchOfficeSubscription
>;
export const onDeleteBranchOffice = /* GraphQL */ `subscription OnDeleteBranchOffice(
  $filter: ModelSubscriptionBranchOfficeFilterInput
) {
  onDeleteBranchOffice(filter: $filter) {
    id
    name
    zipcode
    state
    location
    address
    phone
    branchOffice_commission
    inventories {
      nextToken
      __typename
    }
    isMain
    creditRequests {
      nextToken
      __typename
    }
    companyExpenses {
      nextToken
      __typename
    }
    users {
      nextToken
      __typename
    }
    clients {
      nextToken
      __typename
    }
    outcomeInventories {
      nextToken
      __typename
    }
    outcomeInventoriesRequest {
      nextToken
      __typename
    }
    incomeInventories {
      nextToken
      __typename
    }
    incomeInventoriesRequest {
      nextToken
      __typename
    }
    salesOperations {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBranchOfficeSubscriptionVariables,
  APITypes.OnDeleteBranchOfficeSubscription
>;
export const onCreateDiscounts = /* GraphQL */ `subscription OnCreateDiscounts($filter: ModelSubscriptionDiscountsFilterInput) {
  onCreateDiscounts(filter: $filter) {
    id
    discount
    inventoryProducts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateDiscountsSubscriptionVariables,
  APITypes.OnCreateDiscountsSubscription
>;
export const onUpdateDiscounts = /* GraphQL */ `subscription OnUpdateDiscounts($filter: ModelSubscriptionDiscountsFilterInput) {
  onUpdateDiscounts(filter: $filter) {
    id
    discount
    inventoryProducts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateDiscountsSubscriptionVariables,
  APITypes.OnUpdateDiscountsSubscription
>;
export const onDeleteDiscounts = /* GraphQL */ `subscription OnDeleteDiscounts($filter: ModelSubscriptionDiscountsFilterInput) {
  onDeleteDiscounts(filter: $filter) {
    id
    discount
    inventoryProducts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDiscountsSubscriptionVariables,
  APITypes.OnDeleteDiscountsSubscription
>;
export const onCreateSalesOperation = /* GraphQL */ `subscription OnCreateSalesOperation(
  $filter: ModelSubscriptionSalesOperationFilterInput
) {
  onCreateSalesOperation(filter: $filter) {
    id
    date
    total
    totalCash
    totalCommission
    nonRegisteredClientID
    nonRegisteredClient {
      id
      fullName
      createdAt
      updatedAt
      nonRegisteredClientSaleOperationId
      __typename
    }
    pendingToPay
    amountPaid
    salesOperationType
    status
    monthsToPay
    termDaysToPay
    totalPayments
    currentTotalPayments
    lastPaymentDate
    lastDatePaid
    inventoryOperationID {
      id
      operationType
      inventoryID
      createdAt
      updatedAt
      inventoryOperationIncomeInventoryId
      inventoryOperationIncomeInventoryRequestId
      inventoryOperationOutcomeInventoryId
      inventoryOperationOutcomeInventoryRequestId
      inventoryOperationSalesOperationId
      __typename
    }
    clientID
    client {
      id
      name
      second_name
      lastname
      second_lastname
      phone
      fixed_phone
      email
      birthday
      RFC
      address
      settlement
      postal_code
      state
      city
      creditID
      branchOfficeID
      hasCredit
      hasCreditRequest
      createdAt
      updatedAt
      __typename
    }
    userInfoID
    userInfo {
      id
      name
      phone
      RFC
      gender
      createdAt
      updatedAt
      userInfoUserId
      __typename
    }
    branchOfficeID
    branchOffice {
      id
      name
      zipcode
      state
      location
      address
      phone
      branchOffice_commission
      isMain
      createdAt
      updatedAt
      __typename
    }
    salesOperationInventoryProductQuantities {
      nextToken
      __typename
    }
    salesOperationClientCreditMovements {
      nextToken
      __typename
    }
    salesOperationClientCreditFirstLastPayment {
      nextToken
      __typename
    }
    salesOperationCustomerSubscription {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    salesOperationInventoryOperationIDId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSalesOperationSubscriptionVariables,
  APITypes.OnCreateSalesOperationSubscription
>;
export const onUpdateSalesOperation = /* GraphQL */ `subscription OnUpdateSalesOperation(
  $filter: ModelSubscriptionSalesOperationFilterInput
) {
  onUpdateSalesOperation(filter: $filter) {
    id
    date
    total
    totalCash
    totalCommission
    nonRegisteredClientID
    nonRegisteredClient {
      id
      fullName
      createdAt
      updatedAt
      nonRegisteredClientSaleOperationId
      __typename
    }
    pendingToPay
    amountPaid
    salesOperationType
    status
    monthsToPay
    termDaysToPay
    totalPayments
    currentTotalPayments
    lastPaymentDate
    lastDatePaid
    inventoryOperationID {
      id
      operationType
      inventoryID
      createdAt
      updatedAt
      inventoryOperationIncomeInventoryId
      inventoryOperationIncomeInventoryRequestId
      inventoryOperationOutcomeInventoryId
      inventoryOperationOutcomeInventoryRequestId
      inventoryOperationSalesOperationId
      __typename
    }
    clientID
    client {
      id
      name
      second_name
      lastname
      second_lastname
      phone
      fixed_phone
      email
      birthday
      RFC
      address
      settlement
      postal_code
      state
      city
      creditID
      branchOfficeID
      hasCredit
      hasCreditRequest
      createdAt
      updatedAt
      __typename
    }
    userInfoID
    userInfo {
      id
      name
      phone
      RFC
      gender
      createdAt
      updatedAt
      userInfoUserId
      __typename
    }
    branchOfficeID
    branchOffice {
      id
      name
      zipcode
      state
      location
      address
      phone
      branchOffice_commission
      isMain
      createdAt
      updatedAt
      __typename
    }
    salesOperationInventoryProductQuantities {
      nextToken
      __typename
    }
    salesOperationClientCreditMovements {
      nextToken
      __typename
    }
    salesOperationClientCreditFirstLastPayment {
      nextToken
      __typename
    }
    salesOperationCustomerSubscription {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    salesOperationInventoryOperationIDId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSalesOperationSubscriptionVariables,
  APITypes.OnUpdateSalesOperationSubscription
>;
export const onDeleteSalesOperation = /* GraphQL */ `subscription OnDeleteSalesOperation(
  $filter: ModelSubscriptionSalesOperationFilterInput
) {
  onDeleteSalesOperation(filter: $filter) {
    id
    date
    total
    totalCash
    totalCommission
    nonRegisteredClientID
    nonRegisteredClient {
      id
      fullName
      createdAt
      updatedAt
      nonRegisteredClientSaleOperationId
      __typename
    }
    pendingToPay
    amountPaid
    salesOperationType
    status
    monthsToPay
    termDaysToPay
    totalPayments
    currentTotalPayments
    lastPaymentDate
    lastDatePaid
    inventoryOperationID {
      id
      operationType
      inventoryID
      createdAt
      updatedAt
      inventoryOperationIncomeInventoryId
      inventoryOperationIncomeInventoryRequestId
      inventoryOperationOutcomeInventoryId
      inventoryOperationOutcomeInventoryRequestId
      inventoryOperationSalesOperationId
      __typename
    }
    clientID
    client {
      id
      name
      second_name
      lastname
      second_lastname
      phone
      fixed_phone
      email
      birthday
      RFC
      address
      settlement
      postal_code
      state
      city
      creditID
      branchOfficeID
      hasCredit
      hasCreditRequest
      createdAt
      updatedAt
      __typename
    }
    userInfoID
    userInfo {
      id
      name
      phone
      RFC
      gender
      createdAt
      updatedAt
      userInfoUserId
      __typename
    }
    branchOfficeID
    branchOffice {
      id
      name
      zipcode
      state
      location
      address
      phone
      branchOffice_commission
      isMain
      createdAt
      updatedAt
      __typename
    }
    salesOperationInventoryProductQuantities {
      nextToken
      __typename
    }
    salesOperationClientCreditMovements {
      nextToken
      __typename
    }
    salesOperationClientCreditFirstLastPayment {
      nextToken
      __typename
    }
    salesOperationCustomerSubscription {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    salesOperationInventoryOperationIDId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSalesOperationSubscriptionVariables,
  APITypes.OnDeleteSalesOperationSubscription
>;
export const onCreateSalesOperationClientCreditFirstLastPayment = /* GraphQL */ `subscription OnCreateSalesOperationClientCreditFirstLastPayment(
  $filter: ModelSubscriptionSalesOperationClientCreditFirstLastPaymentFilterInput
) {
  onCreateSalesOperationClientCreditFirstLastPayment(filter: $filter) {
    id
    salesOperationID
    salesOperation {
      id
      date
      total
      totalCash
      totalCommission
      nonRegisteredClientID
      pendingToPay
      amountPaid
      salesOperationType
      status
      monthsToPay
      termDaysToPay
      totalPayments
      currentTotalPayments
      lastPaymentDate
      lastDatePaid
      clientID
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      salesOperationInventoryOperationIDId
      __typename
    }
    startDate
    endDate
    clientID
    client {
      id
      name
      second_name
      lastname
      second_lastname
      phone
      fixed_phone
      email
      birthday
      RFC
      address
      settlement
      postal_code
      state
      city
      creditID
      branchOfficeID
      hasCredit
      hasCreditRequest
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSalesOperationClientCreditFirstLastPaymentSubscriptionVariables,
  APITypes.OnCreateSalesOperationClientCreditFirstLastPaymentSubscription
>;
export const onUpdateSalesOperationClientCreditFirstLastPayment = /* GraphQL */ `subscription OnUpdateSalesOperationClientCreditFirstLastPayment(
  $filter: ModelSubscriptionSalesOperationClientCreditFirstLastPaymentFilterInput
) {
  onUpdateSalesOperationClientCreditFirstLastPayment(filter: $filter) {
    id
    salesOperationID
    salesOperation {
      id
      date
      total
      totalCash
      totalCommission
      nonRegisteredClientID
      pendingToPay
      amountPaid
      salesOperationType
      status
      monthsToPay
      termDaysToPay
      totalPayments
      currentTotalPayments
      lastPaymentDate
      lastDatePaid
      clientID
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      salesOperationInventoryOperationIDId
      __typename
    }
    startDate
    endDate
    clientID
    client {
      id
      name
      second_name
      lastname
      second_lastname
      phone
      fixed_phone
      email
      birthday
      RFC
      address
      settlement
      postal_code
      state
      city
      creditID
      branchOfficeID
      hasCredit
      hasCreditRequest
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSalesOperationClientCreditFirstLastPaymentSubscriptionVariables,
  APITypes.OnUpdateSalesOperationClientCreditFirstLastPaymentSubscription
>;
export const onDeleteSalesOperationClientCreditFirstLastPayment = /* GraphQL */ `subscription OnDeleteSalesOperationClientCreditFirstLastPayment(
  $filter: ModelSubscriptionSalesOperationClientCreditFirstLastPaymentFilterInput
) {
  onDeleteSalesOperationClientCreditFirstLastPayment(filter: $filter) {
    id
    salesOperationID
    salesOperation {
      id
      date
      total
      totalCash
      totalCommission
      nonRegisteredClientID
      pendingToPay
      amountPaid
      salesOperationType
      status
      monthsToPay
      termDaysToPay
      totalPayments
      currentTotalPayments
      lastPaymentDate
      lastDatePaid
      clientID
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      salesOperationInventoryOperationIDId
      __typename
    }
    startDate
    endDate
    clientID
    client {
      id
      name
      second_name
      lastname
      second_lastname
      phone
      fixed_phone
      email
      birthday
      RFC
      address
      settlement
      postal_code
      state
      city
      creditID
      branchOfficeID
      hasCredit
      hasCreditRequest
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSalesOperationClientCreditFirstLastPaymentSubscriptionVariables,
  APITypes.OnDeleteSalesOperationClientCreditFirstLastPaymentSubscription
>;
export const onCreateSalesOperationClientCreditMovements = /* GraphQL */ `subscription OnCreateSalesOperationClientCreditMovements(
  $filter: ModelSubscriptionSalesOperationClientCreditMovementsFilterInput
) {
  onCreateSalesOperationClientCreditMovements(filter: $filter) {
    id
    salesOperationID
    salesOperation {
      id
      date
      total
      totalCash
      totalCommission
      nonRegisteredClientID
      pendingToPay
      amountPaid
      salesOperationType
      status
      monthsToPay
      termDaysToPay
      totalPayments
      currentTotalPayments
      lastPaymentDate
      lastDatePaid
      clientID
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      salesOperationInventoryOperationIDId
      __typename
    }
    paymentDate
    datePaid
    amountToPay
    pendingToPay
    amountPaid
    status
    numberOfPayment
    clientID
    client {
      id
      name
      second_name
      lastname
      second_lastname
      phone
      fixed_phone
      email
      birthday
      RFC
      address
      settlement
      postal_code
      state
      city
      creditID
      branchOfficeID
      hasCredit
      hasCreditRequest
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSalesOperationClientCreditMovementsSubscriptionVariables,
  APITypes.OnCreateSalesOperationClientCreditMovementsSubscription
>;
export const onUpdateSalesOperationClientCreditMovements = /* GraphQL */ `subscription OnUpdateSalesOperationClientCreditMovements(
  $filter: ModelSubscriptionSalesOperationClientCreditMovementsFilterInput
) {
  onUpdateSalesOperationClientCreditMovements(filter: $filter) {
    id
    salesOperationID
    salesOperation {
      id
      date
      total
      totalCash
      totalCommission
      nonRegisteredClientID
      pendingToPay
      amountPaid
      salesOperationType
      status
      monthsToPay
      termDaysToPay
      totalPayments
      currentTotalPayments
      lastPaymentDate
      lastDatePaid
      clientID
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      salesOperationInventoryOperationIDId
      __typename
    }
    paymentDate
    datePaid
    amountToPay
    pendingToPay
    amountPaid
    status
    numberOfPayment
    clientID
    client {
      id
      name
      second_name
      lastname
      second_lastname
      phone
      fixed_phone
      email
      birthday
      RFC
      address
      settlement
      postal_code
      state
      city
      creditID
      branchOfficeID
      hasCredit
      hasCreditRequest
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSalesOperationClientCreditMovementsSubscriptionVariables,
  APITypes.OnUpdateSalesOperationClientCreditMovementsSubscription
>;
export const onDeleteSalesOperationClientCreditMovements = /* GraphQL */ `subscription OnDeleteSalesOperationClientCreditMovements(
  $filter: ModelSubscriptionSalesOperationClientCreditMovementsFilterInput
) {
  onDeleteSalesOperationClientCreditMovements(filter: $filter) {
    id
    salesOperationID
    salesOperation {
      id
      date
      total
      totalCash
      totalCommission
      nonRegisteredClientID
      pendingToPay
      amountPaid
      salesOperationType
      status
      monthsToPay
      termDaysToPay
      totalPayments
      currentTotalPayments
      lastPaymentDate
      lastDatePaid
      clientID
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      salesOperationInventoryOperationIDId
      __typename
    }
    paymentDate
    datePaid
    amountToPay
    pendingToPay
    amountPaid
    status
    numberOfPayment
    clientID
    client {
      id
      name
      second_name
      lastname
      second_lastname
      phone
      fixed_phone
      email
      birthday
      RFC
      address
      settlement
      postal_code
      state
      city
      creditID
      branchOfficeID
      hasCredit
      hasCreditRequest
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSalesOperationClientCreditMovementsSubscriptionVariables,
  APITypes.OnDeleteSalesOperationClientCreditMovementsSubscription
>;
export const onCreateSalesOperationInventoryProductQuantity = /* GraphQL */ `subscription OnCreateSalesOperationInventoryProductQuantity(
  $filter: ModelSubscriptionSalesOperationInventoryProductQuantityFilterInput
) {
  onCreateSalesOperationInventoryProductQuantity(filter: $filter) {
    id
    name
    salesOperationID
    salesOperation {
      id
      date
      total
      totalCash
      totalCommission
      nonRegisteredClientID
      pendingToPay
      amountPaid
      salesOperationType
      status
      monthsToPay
      termDaysToPay
      totalPayments
      currentTotalPayments
      lastPaymentDate
      lastDatePaid
      clientID
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      salesOperationInventoryOperationIDId
      __typename
    }
    inventoryProducts {
      nextToken
      __typename
    }
    soldProductQuantity
    withDiscount
    discountPercentage
    discountPerProduct
    totalDiscounted
    productPriceWithDiscount
    amountToPayWithDiscount
    amountToPay
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSalesOperationInventoryProductQuantitySubscriptionVariables,
  APITypes.OnCreateSalesOperationInventoryProductQuantitySubscription
>;
export const onUpdateSalesOperationInventoryProductQuantity = /* GraphQL */ `subscription OnUpdateSalesOperationInventoryProductQuantity(
  $filter: ModelSubscriptionSalesOperationInventoryProductQuantityFilterInput
) {
  onUpdateSalesOperationInventoryProductQuantity(filter: $filter) {
    id
    name
    salesOperationID
    salesOperation {
      id
      date
      total
      totalCash
      totalCommission
      nonRegisteredClientID
      pendingToPay
      amountPaid
      salesOperationType
      status
      monthsToPay
      termDaysToPay
      totalPayments
      currentTotalPayments
      lastPaymentDate
      lastDatePaid
      clientID
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      salesOperationInventoryOperationIDId
      __typename
    }
    inventoryProducts {
      nextToken
      __typename
    }
    soldProductQuantity
    withDiscount
    discountPercentage
    discountPerProduct
    totalDiscounted
    productPriceWithDiscount
    amountToPayWithDiscount
    amountToPay
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSalesOperationInventoryProductQuantitySubscriptionVariables,
  APITypes.OnUpdateSalesOperationInventoryProductQuantitySubscription
>;
export const onDeleteSalesOperationInventoryProductQuantity = /* GraphQL */ `subscription OnDeleteSalesOperationInventoryProductQuantity(
  $filter: ModelSubscriptionSalesOperationInventoryProductQuantityFilterInput
) {
  onDeleteSalesOperationInventoryProductQuantity(filter: $filter) {
    id
    name
    salesOperationID
    salesOperation {
      id
      date
      total
      totalCash
      totalCommission
      nonRegisteredClientID
      pendingToPay
      amountPaid
      salesOperationType
      status
      monthsToPay
      termDaysToPay
      totalPayments
      currentTotalPayments
      lastPaymentDate
      lastDatePaid
      clientID
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      salesOperationInventoryOperationIDId
      __typename
    }
    inventoryProducts {
      nextToken
      __typename
    }
    soldProductQuantity
    withDiscount
    discountPercentage
    discountPerProduct
    totalDiscounted
    productPriceWithDiscount
    amountToPayWithDiscount
    amountToPay
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSalesOperationInventoryProductQuantitySubscriptionVariables,
  APITypes.OnDeleteSalesOperationInventoryProductQuantitySubscription
>;
export const onCreateCompanyExpenses = /* GraphQL */ `subscription OnCreateCompanyExpenses(
  $filter: ModelSubscriptionCompanyExpensesFilterInput
) {
  onCreateCompanyExpenses(filter: $filter) {
    id
    name
    description
    costType
    date
    amount
    userInfoID
    userInfo {
      id
      name
      phone
      RFC
      gender
      createdAt
      updatedAt
      userInfoUserId
      __typename
    }
    branchOfficeID
    branchOffice {
      id
      name
      zipcode
      state
      location
      address
      phone
      branchOffice_commission
      isMain
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCompanyExpensesSubscriptionVariables,
  APITypes.OnCreateCompanyExpensesSubscription
>;
export const onUpdateCompanyExpenses = /* GraphQL */ `subscription OnUpdateCompanyExpenses(
  $filter: ModelSubscriptionCompanyExpensesFilterInput
) {
  onUpdateCompanyExpenses(filter: $filter) {
    id
    name
    description
    costType
    date
    amount
    userInfoID
    userInfo {
      id
      name
      phone
      RFC
      gender
      createdAt
      updatedAt
      userInfoUserId
      __typename
    }
    branchOfficeID
    branchOffice {
      id
      name
      zipcode
      state
      location
      address
      phone
      branchOffice_commission
      isMain
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCompanyExpensesSubscriptionVariables,
  APITypes.OnUpdateCompanyExpensesSubscription
>;
export const onDeleteCompanyExpenses = /* GraphQL */ `subscription OnDeleteCompanyExpenses(
  $filter: ModelSubscriptionCompanyExpensesFilterInput
) {
  onDeleteCompanyExpenses(filter: $filter) {
    id
    name
    description
    costType
    date
    amount
    userInfoID
    userInfo {
      id
      name
      phone
      RFC
      gender
      createdAt
      updatedAt
      userInfoUserId
      __typename
    }
    branchOfficeID
    branchOffice {
      id
      name
      zipcode
      state
      location
      address
      phone
      branchOffice_commission
      isMain
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCompanyExpensesSubscriptionVariables,
  APITypes.OnDeleteCompanyExpensesSubscription
>;
export const onCreateSalesOperationCustomerSubscription = /* GraphQL */ `subscription OnCreateSalesOperationCustomerSubscription(
  $filter: ModelSubscriptionSalesOperationCustomerSubscriptionFilterInput
) {
  onCreateSalesOperationCustomerSubscription(filter: $filter) {
    id
    salesOperationID
    salesOperation {
      id
      date
      total
      totalCash
      totalCommission
      nonRegisteredClientID
      pendingToPay
      amountPaid
      salesOperationType
      status
      monthsToPay
      termDaysToPay
      totalPayments
      currentTotalPayments
      lastPaymentDate
      lastDatePaid
      clientID
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      salesOperationInventoryOperationIDId
      __typename
    }
    clientID
    client {
      id
      name
      second_name
      lastname
      second_lastname
      phone
      fixed_phone
      email
      birthday
      RFC
      address
      settlement
      postal_code
      state
      city
      creditID
      branchOfficeID
      hasCredit
      hasCreditRequest
      createdAt
      updatedAt
      __typename
    }
    date
    advancePayment
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSalesOperationCustomerSubscriptionSubscriptionVariables,
  APITypes.OnCreateSalesOperationCustomerSubscriptionSubscription
>;
export const onUpdateSalesOperationCustomerSubscription = /* GraphQL */ `subscription OnUpdateSalesOperationCustomerSubscription(
  $filter: ModelSubscriptionSalesOperationCustomerSubscriptionFilterInput
) {
  onUpdateSalesOperationCustomerSubscription(filter: $filter) {
    id
    salesOperationID
    salesOperation {
      id
      date
      total
      totalCash
      totalCommission
      nonRegisteredClientID
      pendingToPay
      amountPaid
      salesOperationType
      status
      monthsToPay
      termDaysToPay
      totalPayments
      currentTotalPayments
      lastPaymentDate
      lastDatePaid
      clientID
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      salesOperationInventoryOperationIDId
      __typename
    }
    clientID
    client {
      id
      name
      second_name
      lastname
      second_lastname
      phone
      fixed_phone
      email
      birthday
      RFC
      address
      settlement
      postal_code
      state
      city
      creditID
      branchOfficeID
      hasCredit
      hasCreditRequest
      createdAt
      updatedAt
      __typename
    }
    date
    advancePayment
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSalesOperationCustomerSubscriptionSubscriptionVariables,
  APITypes.OnUpdateSalesOperationCustomerSubscriptionSubscription
>;
export const onDeleteSalesOperationCustomerSubscription = /* GraphQL */ `subscription OnDeleteSalesOperationCustomerSubscription(
  $filter: ModelSubscriptionSalesOperationCustomerSubscriptionFilterInput
) {
  onDeleteSalesOperationCustomerSubscription(filter: $filter) {
    id
    salesOperationID
    salesOperation {
      id
      date
      total
      totalCash
      totalCommission
      nonRegisteredClientID
      pendingToPay
      amountPaid
      salesOperationType
      status
      monthsToPay
      termDaysToPay
      totalPayments
      currentTotalPayments
      lastPaymentDate
      lastDatePaid
      clientID
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      salesOperationInventoryOperationIDId
      __typename
    }
    clientID
    client {
      id
      name
      second_name
      lastname
      second_lastname
      phone
      fixed_phone
      email
      birthday
      RFC
      address
      settlement
      postal_code
      state
      city
      creditID
      branchOfficeID
      hasCredit
      hasCreditRequest
      createdAt
      updatedAt
      __typename
    }
    date
    advancePayment
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSalesOperationCustomerSubscriptionSubscriptionVariables,
  APITypes.OnDeleteSalesOperationCustomerSubscriptionSubscription
>;
export const onCreateProvider = /* GraphQL */ `subscription OnCreateProvider($filter: ModelSubscriptionProviderFilterInput) {
  onCreateProvider(filter: $filter) {
    id
    enterprise_name
    enterprise_RFC
    phone
    fixed_phone
    type
    productprovider {
      id
      createdAt
      updatedAt
      productProviderProviderIDId
      __typename
    }
    serviceprovider {
      id
      service_name
      service_description
      cost_type
      createdAt
      updatedAt
      serviceProviderProviderIDId
      __typename
    }
    incomeInventories {
      nextToken
      __typename
    }
    incomeInventoriesRequest {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    providerProductproviderId
    providerServiceproviderId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProviderSubscriptionVariables,
  APITypes.OnCreateProviderSubscription
>;
export const onUpdateProvider = /* GraphQL */ `subscription OnUpdateProvider($filter: ModelSubscriptionProviderFilterInput) {
  onUpdateProvider(filter: $filter) {
    id
    enterprise_name
    enterprise_RFC
    phone
    fixed_phone
    type
    productprovider {
      id
      createdAt
      updatedAt
      productProviderProviderIDId
      __typename
    }
    serviceprovider {
      id
      service_name
      service_description
      cost_type
      createdAt
      updatedAt
      serviceProviderProviderIDId
      __typename
    }
    incomeInventories {
      nextToken
      __typename
    }
    incomeInventoriesRequest {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    providerProductproviderId
    providerServiceproviderId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProviderSubscriptionVariables,
  APITypes.OnUpdateProviderSubscription
>;
export const onDeleteProvider = /* GraphQL */ `subscription OnDeleteProvider($filter: ModelSubscriptionProviderFilterInput) {
  onDeleteProvider(filter: $filter) {
    id
    enterprise_name
    enterprise_RFC
    phone
    fixed_phone
    type
    productprovider {
      id
      createdAt
      updatedAt
      productProviderProviderIDId
      __typename
    }
    serviceprovider {
      id
      service_name
      service_description
      cost_type
      createdAt
      updatedAt
      serviceProviderProviderIDId
      __typename
    }
    incomeInventories {
      nextToken
      __typename
    }
    incomeInventoriesRequest {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    providerProductproviderId
    providerServiceproviderId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProviderSubscriptionVariables,
  APITypes.OnDeleteProviderSubscription
>;
export const onCreateProductProvider = /* GraphQL */ `subscription OnCreateProductProvider(
  $filter: ModelSubscriptionProductProviderFilterInput
) {
  onCreateProductProvider(filter: $filter) {
    id
    responsible {
      nextToken
      __typename
    }
    providerID {
      id
      enterprise_name
      enterprise_RFC
      phone
      fixed_phone
      type
      createdAt
      updatedAt
      providerProductproviderId
      providerServiceproviderId
      __typename
    }
    product {
      nextToken
      __typename
    }
    inventoryProduct {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    productProviderProviderIDId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProductProviderSubscriptionVariables,
  APITypes.OnCreateProductProviderSubscription
>;
export const onUpdateProductProvider = /* GraphQL */ `subscription OnUpdateProductProvider(
  $filter: ModelSubscriptionProductProviderFilterInput
) {
  onUpdateProductProvider(filter: $filter) {
    id
    responsible {
      nextToken
      __typename
    }
    providerID {
      id
      enterprise_name
      enterprise_RFC
      phone
      fixed_phone
      type
      createdAt
      updatedAt
      providerProductproviderId
      providerServiceproviderId
      __typename
    }
    product {
      nextToken
      __typename
    }
    inventoryProduct {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    productProviderProviderIDId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProductProviderSubscriptionVariables,
  APITypes.OnUpdateProductProviderSubscription
>;
export const onDeleteProductProvider = /* GraphQL */ `subscription OnDeleteProductProvider(
  $filter: ModelSubscriptionProductProviderFilterInput
) {
  onDeleteProductProvider(filter: $filter) {
    id
    responsible {
      nextToken
      __typename
    }
    providerID {
      id
      enterprise_name
      enterprise_RFC
      phone
      fixed_phone
      type
      createdAt
      updatedAt
      providerProductproviderId
      providerServiceproviderId
      __typename
    }
    product {
      nextToken
      __typename
    }
    inventoryProduct {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    productProviderProviderIDId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProductProviderSubscriptionVariables,
  APITypes.OnDeleteProductProviderSubscription
>;
export const onCreateProductProviderResponsible = /* GraphQL */ `subscription OnCreateProductProviderResponsible(
  $filter: ModelSubscriptionProductProviderResponsibleFilterInput
) {
  onCreateProductProviderResponsible(filter: $filter) {
    id
    productproviderID
    name
    second_name
    lastname
    second_lastname
    phone
    RFC
    incomeInventories {
      nextToken
      __typename
    }
    incomeInventoriesRequest {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProductProviderResponsibleSubscriptionVariables,
  APITypes.OnCreateProductProviderResponsibleSubscription
>;
export const onUpdateProductProviderResponsible = /* GraphQL */ `subscription OnUpdateProductProviderResponsible(
  $filter: ModelSubscriptionProductProviderResponsibleFilterInput
) {
  onUpdateProductProviderResponsible(filter: $filter) {
    id
    productproviderID
    name
    second_name
    lastname
    second_lastname
    phone
    RFC
    incomeInventories {
      nextToken
      __typename
    }
    incomeInventoriesRequest {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProductProviderResponsibleSubscriptionVariables,
  APITypes.OnUpdateProductProviderResponsibleSubscription
>;
export const onDeleteProductProviderResponsible = /* GraphQL */ `subscription OnDeleteProductProviderResponsible(
  $filter: ModelSubscriptionProductProviderResponsibleFilterInput
) {
  onDeleteProductProviderResponsible(filter: $filter) {
    id
    productproviderID
    name
    second_name
    lastname
    second_lastname
    phone
    RFC
    incomeInventories {
      nextToken
      __typename
    }
    incomeInventoriesRequest {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProductProviderResponsibleSubscriptionVariables,
  APITypes.OnDeleteProductProviderResponsibleSubscription
>;
export const onCreateServiceProvider = /* GraphQL */ `subscription OnCreateServiceProvider(
  $filter: ModelSubscriptionServiceProviderFilterInput
) {
  onCreateServiceProvider(filter: $filter) {
    id
    service_name
    service_description
    cost_type
    responsible {
      nextToken
      __typename
    }
    providerID {
      id
      enterprise_name
      enterprise_RFC
      phone
      fixed_phone
      type
      createdAt
      updatedAt
      providerProductproviderId
      providerServiceproviderId
      __typename
    }
    createdAt
    updatedAt
    serviceProviderProviderIDId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateServiceProviderSubscriptionVariables,
  APITypes.OnCreateServiceProviderSubscription
>;
export const onUpdateServiceProvider = /* GraphQL */ `subscription OnUpdateServiceProvider(
  $filter: ModelSubscriptionServiceProviderFilterInput
) {
  onUpdateServiceProvider(filter: $filter) {
    id
    service_name
    service_description
    cost_type
    responsible {
      nextToken
      __typename
    }
    providerID {
      id
      enterprise_name
      enterprise_RFC
      phone
      fixed_phone
      type
      createdAt
      updatedAt
      providerProductproviderId
      providerServiceproviderId
      __typename
    }
    createdAt
    updatedAt
    serviceProviderProviderIDId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateServiceProviderSubscriptionVariables,
  APITypes.OnUpdateServiceProviderSubscription
>;
export const onDeleteServiceProvider = /* GraphQL */ `subscription OnDeleteServiceProvider(
  $filter: ModelSubscriptionServiceProviderFilterInput
) {
  onDeleteServiceProvider(filter: $filter) {
    id
    service_name
    service_description
    cost_type
    responsible {
      nextToken
      __typename
    }
    providerID {
      id
      enterprise_name
      enterprise_RFC
      phone
      fixed_phone
      type
      createdAt
      updatedAt
      providerProductproviderId
      providerServiceproviderId
      __typename
    }
    createdAt
    updatedAt
    serviceProviderProviderIDId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteServiceProviderSubscriptionVariables,
  APITypes.OnDeleteServiceProviderSubscription
>;
export const onCreateServiceProviderResponsible = /* GraphQL */ `subscription OnCreateServiceProviderResponsible(
  $filter: ModelSubscriptionServiceProviderResponsibleFilterInput
) {
  onCreateServiceProviderResponsible(filter: $filter) {
    id
    serviceproviderID
    name
    second_name
    lastname
    second_lastname
    phone
    RFC
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateServiceProviderResponsibleSubscriptionVariables,
  APITypes.OnCreateServiceProviderResponsibleSubscription
>;
export const onUpdateServiceProviderResponsible = /* GraphQL */ `subscription OnUpdateServiceProviderResponsible(
  $filter: ModelSubscriptionServiceProviderResponsibleFilterInput
) {
  onUpdateServiceProviderResponsible(filter: $filter) {
    id
    serviceproviderID
    name
    second_name
    lastname
    second_lastname
    phone
    RFC
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateServiceProviderResponsibleSubscriptionVariables,
  APITypes.OnUpdateServiceProviderResponsibleSubscription
>;
export const onDeleteServiceProviderResponsible = /* GraphQL */ `subscription OnDeleteServiceProviderResponsible(
  $filter: ModelSubscriptionServiceProviderResponsibleFilterInput
) {
  onDeleteServiceProviderResponsible(filter: $filter) {
    id
    serviceproviderID
    name
    second_name
    lastname
    second_lastname
    phone
    RFC
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteServiceProviderResponsibleSubscriptionVariables,
  APITypes.OnDeleteServiceProviderResponsibleSubscription
>;
export const onCreateInventoryProductIncomeInventory = /* GraphQL */ `subscription OnCreateInventoryProductIncomeInventory(
  $filter: ModelSubscriptionInventoryProductIncomeInventoryFilterInput
) {
  onCreateInventoryProductIncomeInventory(filter: $filter) {
    id
    incomeInventoryProductQuantityId
    inventoryProductId
    incomeInventoryProductQuantity {
      id
      incomeQuantity
      incomeInventoryID
      createdAt
      updatedAt
      __typename
    }
    inventoryProduct {
      id
      inventoryID
      productID
      quantity
      customPrice
      generalPrice
      productProviderID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateInventoryProductIncomeInventorySubscriptionVariables,
  APITypes.OnCreateInventoryProductIncomeInventorySubscription
>;
export const onUpdateInventoryProductIncomeInventory = /* GraphQL */ `subscription OnUpdateInventoryProductIncomeInventory(
  $filter: ModelSubscriptionInventoryProductIncomeInventoryFilterInput
) {
  onUpdateInventoryProductIncomeInventory(filter: $filter) {
    id
    incomeInventoryProductQuantityId
    inventoryProductId
    incomeInventoryProductQuantity {
      id
      incomeQuantity
      incomeInventoryID
      createdAt
      updatedAt
      __typename
    }
    inventoryProduct {
      id
      inventoryID
      productID
      quantity
      customPrice
      generalPrice
      productProviderID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateInventoryProductIncomeInventorySubscriptionVariables,
  APITypes.OnUpdateInventoryProductIncomeInventorySubscription
>;
export const onDeleteInventoryProductIncomeInventory = /* GraphQL */ `subscription OnDeleteInventoryProductIncomeInventory(
  $filter: ModelSubscriptionInventoryProductIncomeInventoryFilterInput
) {
  onDeleteInventoryProductIncomeInventory(filter: $filter) {
    id
    incomeInventoryProductQuantityId
    inventoryProductId
    incomeInventoryProductQuantity {
      id
      incomeQuantity
      incomeInventoryID
      createdAt
      updatedAt
      __typename
    }
    inventoryProduct {
      id
      inventoryID
      productID
      quantity
      customPrice
      generalPrice
      productProviderID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteInventoryProductIncomeInventorySubscriptionVariables,
  APITypes.OnDeleteInventoryProductIncomeInventorySubscription
>;
export const onCreateInventoryProductIncomeInventoryRequest = /* GraphQL */ `subscription OnCreateInventoryProductIncomeInventoryRequest(
  $filter: ModelSubscriptionInventoryProductIncomeInventoryRequestFilterInput
) {
  onCreateInventoryProductIncomeInventoryRequest(filter: $filter) {
    id
    incomeInventoryProductQuantityRequestId
    inventoryProductId
    incomeInventoryProductQuantityRequest {
      id
      incomeQuantity
      incomeInventoryRequestID
      createdAt
      updatedAt
      __typename
    }
    inventoryProduct {
      id
      inventoryID
      productID
      quantity
      customPrice
      generalPrice
      productProviderID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateInventoryProductIncomeInventoryRequestSubscriptionVariables,
  APITypes.OnCreateInventoryProductIncomeInventoryRequestSubscription
>;
export const onUpdateInventoryProductIncomeInventoryRequest = /* GraphQL */ `subscription OnUpdateInventoryProductIncomeInventoryRequest(
  $filter: ModelSubscriptionInventoryProductIncomeInventoryRequestFilterInput
) {
  onUpdateInventoryProductIncomeInventoryRequest(filter: $filter) {
    id
    incomeInventoryProductQuantityRequestId
    inventoryProductId
    incomeInventoryProductQuantityRequest {
      id
      incomeQuantity
      incomeInventoryRequestID
      createdAt
      updatedAt
      __typename
    }
    inventoryProduct {
      id
      inventoryID
      productID
      quantity
      customPrice
      generalPrice
      productProviderID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateInventoryProductIncomeInventoryRequestSubscriptionVariables,
  APITypes.OnUpdateInventoryProductIncomeInventoryRequestSubscription
>;
export const onDeleteInventoryProductIncomeInventoryRequest = /* GraphQL */ `subscription OnDeleteInventoryProductIncomeInventoryRequest(
  $filter: ModelSubscriptionInventoryProductIncomeInventoryRequestFilterInput
) {
  onDeleteInventoryProductIncomeInventoryRequest(filter: $filter) {
    id
    incomeInventoryProductQuantityRequestId
    inventoryProductId
    incomeInventoryProductQuantityRequest {
      id
      incomeQuantity
      incomeInventoryRequestID
      createdAt
      updatedAt
      __typename
    }
    inventoryProduct {
      id
      inventoryID
      productID
      quantity
      customPrice
      generalPrice
      productProviderID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteInventoryProductIncomeInventoryRequestSubscriptionVariables,
  APITypes.OnDeleteInventoryProductIncomeInventoryRequestSubscription
>;
export const onCreateInventoryProductOutcomeInventory = /* GraphQL */ `subscription OnCreateInventoryProductOutcomeInventory(
  $filter: ModelSubscriptionInventoryProductOutcomeInventoryFilterInput
) {
  onCreateInventoryProductOutcomeInventory(filter: $filter) {
    id
    outcomeInventoryProductQuantityId
    inventoryProductId
    outcomeInventoryProductQuantity {
      id
      outcomeQuantity
      outcomeInventoryID
      createdAt
      updatedAt
      __typename
    }
    inventoryProduct {
      id
      inventoryID
      productID
      quantity
      customPrice
      generalPrice
      productProviderID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateInventoryProductOutcomeInventorySubscriptionVariables,
  APITypes.OnCreateInventoryProductOutcomeInventorySubscription
>;
export const onUpdateInventoryProductOutcomeInventory = /* GraphQL */ `subscription OnUpdateInventoryProductOutcomeInventory(
  $filter: ModelSubscriptionInventoryProductOutcomeInventoryFilterInput
) {
  onUpdateInventoryProductOutcomeInventory(filter: $filter) {
    id
    outcomeInventoryProductQuantityId
    inventoryProductId
    outcomeInventoryProductQuantity {
      id
      outcomeQuantity
      outcomeInventoryID
      createdAt
      updatedAt
      __typename
    }
    inventoryProduct {
      id
      inventoryID
      productID
      quantity
      customPrice
      generalPrice
      productProviderID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateInventoryProductOutcomeInventorySubscriptionVariables,
  APITypes.OnUpdateInventoryProductOutcomeInventorySubscription
>;
export const onDeleteInventoryProductOutcomeInventory = /* GraphQL */ `subscription OnDeleteInventoryProductOutcomeInventory(
  $filter: ModelSubscriptionInventoryProductOutcomeInventoryFilterInput
) {
  onDeleteInventoryProductOutcomeInventory(filter: $filter) {
    id
    outcomeInventoryProductQuantityId
    inventoryProductId
    outcomeInventoryProductQuantity {
      id
      outcomeQuantity
      outcomeInventoryID
      createdAt
      updatedAt
      __typename
    }
    inventoryProduct {
      id
      inventoryID
      productID
      quantity
      customPrice
      generalPrice
      productProviderID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteInventoryProductOutcomeInventorySubscriptionVariables,
  APITypes.OnDeleteInventoryProductOutcomeInventorySubscription
>;
export const onCreateInventoryProductOutcomeInventoryRequest = /* GraphQL */ `subscription OnCreateInventoryProductOutcomeInventoryRequest(
  $filter: ModelSubscriptionInventoryProductOutcomeInventoryRequestFilterInput
) {
  onCreateInventoryProductOutcomeInventoryRequest(filter: $filter) {
    id
    outcomeInventoryProductQuantityRequestId
    inventoryProductId
    outcomeInventoryProductQuantityRequest {
      id
      outcomeRequestQuantity
      outcomeInventoryRequestID
      createdAt
      updatedAt
      __typename
    }
    inventoryProduct {
      id
      inventoryID
      productID
      quantity
      customPrice
      generalPrice
      productProviderID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateInventoryProductOutcomeInventoryRequestSubscriptionVariables,
  APITypes.OnCreateInventoryProductOutcomeInventoryRequestSubscription
>;
export const onUpdateInventoryProductOutcomeInventoryRequest = /* GraphQL */ `subscription OnUpdateInventoryProductOutcomeInventoryRequest(
  $filter: ModelSubscriptionInventoryProductOutcomeInventoryRequestFilterInput
) {
  onUpdateInventoryProductOutcomeInventoryRequest(filter: $filter) {
    id
    outcomeInventoryProductQuantityRequestId
    inventoryProductId
    outcomeInventoryProductQuantityRequest {
      id
      outcomeRequestQuantity
      outcomeInventoryRequestID
      createdAt
      updatedAt
      __typename
    }
    inventoryProduct {
      id
      inventoryID
      productID
      quantity
      customPrice
      generalPrice
      productProviderID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateInventoryProductOutcomeInventoryRequestSubscriptionVariables,
  APITypes.OnUpdateInventoryProductOutcomeInventoryRequestSubscription
>;
export const onDeleteInventoryProductOutcomeInventoryRequest = /* GraphQL */ `subscription OnDeleteInventoryProductOutcomeInventoryRequest(
  $filter: ModelSubscriptionInventoryProductOutcomeInventoryRequestFilterInput
) {
  onDeleteInventoryProductOutcomeInventoryRequest(filter: $filter) {
    id
    outcomeInventoryProductQuantityRequestId
    inventoryProductId
    outcomeInventoryProductQuantityRequest {
      id
      outcomeRequestQuantity
      outcomeInventoryRequestID
      createdAt
      updatedAt
      __typename
    }
    inventoryProduct {
      id
      inventoryID
      productID
      quantity
      customPrice
      generalPrice
      productProviderID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteInventoryProductOutcomeInventoryRequestSubscriptionVariables,
  APITypes.OnDeleteInventoryProductOutcomeInventoryRequestSubscription
>;
export const onCreateInventoryProductReturnsInventory = /* GraphQL */ `subscription OnCreateInventoryProductReturnsInventory(
  $filter: ModelSubscriptionInventoryProductReturnsInventoryFilterInput
) {
  onCreateInventoryProductReturnsInventory(filter: $filter) {
    id
    returnsInventoryId
    inventoryProductId
    returnsInventory {
      id
      userInfoID
      clientID
      comments
      createdAt
      updatedAt
      __typename
    }
    inventoryProduct {
      id
      inventoryID
      productID
      quantity
      customPrice
      generalPrice
      productProviderID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateInventoryProductReturnsInventorySubscriptionVariables,
  APITypes.OnCreateInventoryProductReturnsInventorySubscription
>;
export const onUpdateInventoryProductReturnsInventory = /* GraphQL */ `subscription OnUpdateInventoryProductReturnsInventory(
  $filter: ModelSubscriptionInventoryProductReturnsInventoryFilterInput
) {
  onUpdateInventoryProductReturnsInventory(filter: $filter) {
    id
    returnsInventoryId
    inventoryProductId
    returnsInventory {
      id
      userInfoID
      clientID
      comments
      createdAt
      updatedAt
      __typename
    }
    inventoryProduct {
      id
      inventoryID
      productID
      quantity
      customPrice
      generalPrice
      productProviderID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateInventoryProductReturnsInventorySubscriptionVariables,
  APITypes.OnUpdateInventoryProductReturnsInventorySubscription
>;
export const onDeleteInventoryProductReturnsInventory = /* GraphQL */ `subscription OnDeleteInventoryProductReturnsInventory(
  $filter: ModelSubscriptionInventoryProductReturnsInventoryFilterInput
) {
  onDeleteInventoryProductReturnsInventory(filter: $filter) {
    id
    returnsInventoryId
    inventoryProductId
    returnsInventory {
      id
      userInfoID
      clientID
      comments
      createdAt
      updatedAt
      __typename
    }
    inventoryProduct {
      id
      inventoryID
      productID
      quantity
      customPrice
      generalPrice
      productProviderID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteInventoryProductReturnsInventorySubscriptionVariables,
  APITypes.OnDeleteInventoryProductReturnsInventorySubscription
>;
export const onCreateBranchOfficeUser = /* GraphQL */ `subscription OnCreateBranchOfficeUser(
  $filter: ModelSubscriptionBranchOfficeUserFilterInput
) {
  onCreateBranchOfficeUser(filter: $filter) {
    id
    userId
    branchOfficeId
    user {
      id
      email
      password
      rolID
      hasBranchOffice
      createdAt
      updatedAt
      userUserInfoId
      __typename
    }
    branchOffice {
      id
      name
      zipcode
      state
      location
      address
      phone
      branchOffice_commission
      isMain
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBranchOfficeUserSubscriptionVariables,
  APITypes.OnCreateBranchOfficeUserSubscription
>;
export const onUpdateBranchOfficeUser = /* GraphQL */ `subscription OnUpdateBranchOfficeUser(
  $filter: ModelSubscriptionBranchOfficeUserFilterInput
) {
  onUpdateBranchOfficeUser(filter: $filter) {
    id
    userId
    branchOfficeId
    user {
      id
      email
      password
      rolID
      hasBranchOffice
      createdAt
      updatedAt
      userUserInfoId
      __typename
    }
    branchOffice {
      id
      name
      zipcode
      state
      location
      address
      phone
      branchOffice_commission
      isMain
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBranchOfficeUserSubscriptionVariables,
  APITypes.OnUpdateBranchOfficeUserSubscription
>;
export const onDeleteBranchOfficeUser = /* GraphQL */ `subscription OnDeleteBranchOfficeUser(
  $filter: ModelSubscriptionBranchOfficeUserFilterInput
) {
  onDeleteBranchOfficeUser(filter: $filter) {
    id
    userId
    branchOfficeId
    user {
      id
      email
      password
      rolID
      hasBranchOffice
      createdAt
      updatedAt
      userUserInfoId
      __typename
    }
    branchOffice {
      id
      name
      zipcode
      state
      location
      address
      phone
      branchOffice_commission
      isMain
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBranchOfficeUserSubscriptionVariables,
  APITypes.OnDeleteBranchOfficeUserSubscription
>;
export const onCreateDiscountInventoryProduct = /* GraphQL */ `subscription OnCreateDiscountInventoryProduct(
  $filter: ModelSubscriptionDiscountInventoryProductFilterInput
) {
  onCreateDiscountInventoryProduct(filter: $filter) {
    id
    inventoryProductId
    discountsId
    inventoryProduct {
      id
      inventoryID
      productID
      quantity
      customPrice
      generalPrice
      productProviderID
      createdAt
      updatedAt
      __typename
    }
    discounts {
      id
      discount
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateDiscountInventoryProductSubscriptionVariables,
  APITypes.OnCreateDiscountInventoryProductSubscription
>;
export const onUpdateDiscountInventoryProduct = /* GraphQL */ `subscription OnUpdateDiscountInventoryProduct(
  $filter: ModelSubscriptionDiscountInventoryProductFilterInput
) {
  onUpdateDiscountInventoryProduct(filter: $filter) {
    id
    inventoryProductId
    discountsId
    inventoryProduct {
      id
      inventoryID
      productID
      quantity
      customPrice
      generalPrice
      productProviderID
      createdAt
      updatedAt
      __typename
    }
    discounts {
      id
      discount
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateDiscountInventoryProductSubscriptionVariables,
  APITypes.OnUpdateDiscountInventoryProductSubscription
>;
export const onDeleteDiscountInventoryProduct = /* GraphQL */ `subscription OnDeleteDiscountInventoryProduct(
  $filter: ModelSubscriptionDiscountInventoryProductFilterInput
) {
  onDeleteDiscountInventoryProduct(filter: $filter) {
    id
    inventoryProductId
    discountsId
    inventoryProduct {
      id
      inventoryID
      productID
      quantity
      customPrice
      generalPrice
      productProviderID
      createdAt
      updatedAt
      __typename
    }
    discounts {
      id
      discount
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDiscountInventoryProductSubscriptionVariables,
  APITypes.OnDeleteDiscountInventoryProductSubscription
>;
export const onCreateInventoryProductSalesOperation = /* GraphQL */ `subscription OnCreateInventoryProductSalesOperation(
  $filter: ModelSubscriptionInventoryProductSalesOperationFilterInput
) {
  onCreateInventoryProductSalesOperation(filter: $filter) {
    id
    inventoryProductId
    salesOperationInventoryProductQuantityId
    inventoryProduct {
      id
      inventoryID
      productID
      quantity
      customPrice
      generalPrice
      productProviderID
      createdAt
      updatedAt
      __typename
    }
    salesOperationInventoryProductQuantity {
      id
      name
      salesOperationID
      soldProductQuantity
      withDiscount
      discountPercentage
      discountPerProduct
      totalDiscounted
      productPriceWithDiscount
      amountToPayWithDiscount
      amountToPay
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateInventoryProductSalesOperationSubscriptionVariables,
  APITypes.OnCreateInventoryProductSalesOperationSubscription
>;
export const onUpdateInventoryProductSalesOperation = /* GraphQL */ `subscription OnUpdateInventoryProductSalesOperation(
  $filter: ModelSubscriptionInventoryProductSalesOperationFilterInput
) {
  onUpdateInventoryProductSalesOperation(filter: $filter) {
    id
    inventoryProductId
    salesOperationInventoryProductQuantityId
    inventoryProduct {
      id
      inventoryID
      productID
      quantity
      customPrice
      generalPrice
      productProviderID
      createdAt
      updatedAt
      __typename
    }
    salesOperationInventoryProductQuantity {
      id
      name
      salesOperationID
      soldProductQuantity
      withDiscount
      discountPercentage
      discountPerProduct
      totalDiscounted
      productPriceWithDiscount
      amountToPayWithDiscount
      amountToPay
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateInventoryProductSalesOperationSubscriptionVariables,
  APITypes.OnUpdateInventoryProductSalesOperationSubscription
>;
export const onDeleteInventoryProductSalesOperation = /* GraphQL */ `subscription OnDeleteInventoryProductSalesOperation(
  $filter: ModelSubscriptionInventoryProductSalesOperationFilterInput
) {
  onDeleteInventoryProductSalesOperation(filter: $filter) {
    id
    inventoryProductId
    salesOperationInventoryProductQuantityId
    inventoryProduct {
      id
      inventoryID
      productID
      quantity
      customPrice
      generalPrice
      productProviderID
      createdAt
      updatedAt
      __typename
    }
    salesOperationInventoryProductQuantity {
      id
      name
      salesOperationID
      soldProductQuantity
      withDiscount
      discountPercentage
      discountPerProduct
      totalDiscounted
      productPriceWithDiscount
      amountToPayWithDiscount
      amountToPay
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteInventoryProductSalesOperationSubscriptionVariables,
  APITypes.OnDeleteInventoryProductSalesOperationSubscription
>;
