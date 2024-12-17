/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCategory = /* GraphQL */ `mutation CreateCategory(
  $input: CreateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  createCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCategoryMutationVariables,
  APITypes.CreateCategoryMutation
>;
export const updateCategory = /* GraphQL */ `mutation UpdateCategory(
  $input: UpdateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  updateCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCategoryMutationVariables,
  APITypes.UpdateCategoryMutation
>;
export const deleteCategory = /* GraphQL */ `mutation DeleteCategory(
  $input: DeleteCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  deleteCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCategoryMutationVariables,
  APITypes.DeleteCategoryMutation
>;
export const createSubCategory = /* GraphQL */ `mutation CreateSubCategory(
  $input: CreateSubCategoryInput!
  $condition: ModelSubCategoryConditionInput
) {
  createSubCategory(input: $input, condition: $condition) {
    id
    categoryID
    subcategory_name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSubCategoryMutationVariables,
  APITypes.CreateSubCategoryMutation
>;
export const updateSubCategory = /* GraphQL */ `mutation UpdateSubCategory(
  $input: UpdateSubCategoryInput!
  $condition: ModelSubCategoryConditionInput
) {
  updateSubCategory(input: $input, condition: $condition) {
    id
    categoryID
    subcategory_name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSubCategoryMutationVariables,
  APITypes.UpdateSubCategoryMutation
>;
export const deleteSubCategory = /* GraphQL */ `mutation DeleteSubCategory(
  $input: DeleteSubCategoryInput!
  $condition: ModelSubCategoryConditionInput
) {
  deleteSubCategory(input: $input, condition: $condition) {
    id
    categoryID
    subcategory_name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSubCategoryMutationVariables,
  APITypes.DeleteSubCategoryMutation
>;
export const createClass = /* GraphQL */ `mutation CreateClass(
  $input: CreateClassInput!
  $condition: ModelClassConditionInput
) {
  createClass(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateClassMutationVariables,
  APITypes.CreateClassMutation
>;
export const updateClass = /* GraphQL */ `mutation UpdateClass(
  $input: UpdateClassInput!
  $condition: ModelClassConditionInput
) {
  updateClass(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateClassMutationVariables,
  APITypes.UpdateClassMutation
>;
export const deleteClass = /* GraphQL */ `mutation DeleteClass(
  $input: DeleteClassInput!
  $condition: ModelClassConditionInput
) {
  deleteClass(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteClassMutationVariables,
  APITypes.DeleteClassMutation
>;
export const createClient = /* GraphQL */ `mutation CreateClient(
  $input: CreateClientInput!
  $condition: ModelClientConditionInput
) {
  createClient(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateClientMutationVariables,
  APITypes.CreateClientMutation
>;
export const updateClient = /* GraphQL */ `mutation UpdateClient(
  $input: UpdateClientInput!
  $condition: ModelClientConditionInput
) {
  updateClient(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateClientMutationVariables,
  APITypes.UpdateClientMutation
>;
export const deleteClient = /* GraphQL */ `mutation DeleteClient(
  $input: DeleteClientInput!
  $condition: ModelClientConditionInput
) {
  deleteClient(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteClientMutationVariables,
  APITypes.DeleteClientMutation
>;
export const createNonRegisteredClient =
  /* GraphQL */ `mutation CreateNonRegisteredClient(
  $input: CreateNonRegisteredClientInput!
  $condition: ModelNonRegisteredClientConditionInput
) {
  createNonRegisteredClient(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateNonRegisteredClientMutationVariables,
    APITypes.CreateNonRegisteredClientMutation
  >;
export const updateNonRegisteredClient =
  /* GraphQL */ `mutation UpdateNonRegisteredClient(
  $input: UpdateNonRegisteredClientInput!
  $condition: ModelNonRegisteredClientConditionInput
) {
  updateNonRegisteredClient(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateNonRegisteredClientMutationVariables,
    APITypes.UpdateNonRegisteredClientMutation
  >;
export const deleteNonRegisteredClient =
  /* GraphQL */ `mutation DeleteNonRegisteredClient(
  $input: DeleteNonRegisteredClientInput!
  $condition: ModelNonRegisteredClientConditionInput
) {
  deleteNonRegisteredClient(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteNonRegisteredClientMutationVariables,
    APITypes.DeleteNonRegisteredClientMutation
  >;
export const createCredits = /* GraphQL */ `mutation CreateCredits(
  $input: CreateCreditsInput!
  $condition: ModelCreditsConditionInput
) {
  createCredits(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCreditsMutationVariables,
  APITypes.CreateCreditsMutation
>;
export const updateCredits = /* GraphQL */ `mutation UpdateCredits(
  $input: UpdateCreditsInput!
  $condition: ModelCreditsConditionInput
) {
  updateCredits(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCreditsMutationVariables,
  APITypes.UpdateCreditsMutation
>;
export const deleteCredits = /* GraphQL */ `mutation DeleteCredits(
  $input: DeleteCreditsInput!
  $condition: ModelCreditsConditionInput
) {
  deleteCredits(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCreditsMutationVariables,
  APITypes.DeleteCreditsMutation
>;
export const createCreditRequests =
  /* GraphQL */ `mutation CreateCreditRequests(
  $input: CreateCreditRequestsInput!
  $condition: ModelCreditRequestsConditionInput
) {
  createCreditRequests(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateCreditRequestsMutationVariables,
    APITypes.CreateCreditRequestsMutation
  >;
export const updateCreditRequests =
  /* GraphQL */ `mutation UpdateCreditRequests(
  $input: UpdateCreditRequestsInput!
  $condition: ModelCreditRequestsConditionInput
) {
  updateCreditRequests(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateCreditRequestsMutationVariables,
    APITypes.UpdateCreditRequestsMutation
  >;
export const deleteCreditRequests =
  /* GraphQL */ `mutation DeleteCreditRequests(
  $input: DeleteCreditRequestsInput!
  $condition: ModelCreditRequestsConditionInput
) {
  deleteCreditRequests(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteCreditRequestsMutationVariables,
    APITypes.DeleteCreditRequestsMutation
  >;
export const createProduct = /* GraphQL */ `mutation CreateProduct(
  $input: CreateProductInput!
  $condition: ModelProductConditionInput
) {
  createProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProductMutationVariables,
  APITypes.CreateProductMutation
>;
export const updateProduct = /* GraphQL */ `mutation UpdateProduct(
  $input: UpdateProductInput!
  $condition: ModelProductConditionInput
) {
  updateProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProductMutationVariables,
  APITypes.UpdateProductMutation
>;
export const deleteProduct = /* GraphQL */ `mutation DeleteProduct(
  $input: DeleteProductInput!
  $condition: ModelProductConditionInput
) {
  deleteProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProductMutationVariables,
  APITypes.DeleteProductMutation
>;
export const createInventoryOperation =
  /* GraphQL */ `mutation CreateInventoryOperation(
  $input: CreateInventoryOperationInput!
  $condition: ModelInventoryOperationConditionInput
) {
  createInventoryOperation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateInventoryOperationMutationVariables,
    APITypes.CreateInventoryOperationMutation
  >;
export const updateInventoryOperation =
  /* GraphQL */ `mutation UpdateInventoryOperation(
  $input: UpdateInventoryOperationInput!
  $condition: ModelInventoryOperationConditionInput
) {
  updateInventoryOperation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateInventoryOperationMutationVariables,
    APITypes.UpdateInventoryOperationMutation
  >;
export const deleteInventoryOperation =
  /* GraphQL */ `mutation DeleteInventoryOperation(
  $input: DeleteInventoryOperationInput!
  $condition: ModelInventoryOperationConditionInput
) {
  deleteInventoryOperation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteInventoryOperationMutationVariables,
    APITypes.DeleteInventoryOperationMutation
  >;
export const createIncomeInventory =
  /* GraphQL */ `mutation CreateIncomeInventory(
  $input: CreateIncomeInventoryInput!
  $condition: ModelIncomeInventoryConditionInput
) {
  createIncomeInventory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateIncomeInventoryMutationVariables,
    APITypes.CreateIncomeInventoryMutation
  >;
export const updateIncomeInventory =
  /* GraphQL */ `mutation UpdateIncomeInventory(
  $input: UpdateIncomeInventoryInput!
  $condition: ModelIncomeInventoryConditionInput
) {
  updateIncomeInventory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateIncomeInventoryMutationVariables,
    APITypes.UpdateIncomeInventoryMutation
  >;
export const deleteIncomeInventory =
  /* GraphQL */ `mutation DeleteIncomeInventory(
  $input: DeleteIncomeInventoryInput!
  $condition: ModelIncomeInventoryConditionInput
) {
  deleteIncomeInventory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteIncomeInventoryMutationVariables,
    APITypes.DeleteIncomeInventoryMutation
  >;
export const createIncomeInventoryRequest =
  /* GraphQL */ `mutation CreateIncomeInventoryRequest(
  $input: CreateIncomeInventoryRequestInput!
  $condition: ModelIncomeInventoryRequestConditionInput
) {
  createIncomeInventoryRequest(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateIncomeInventoryRequestMutationVariables,
    APITypes.CreateIncomeInventoryRequestMutation
  >;
export const updateIncomeInventoryRequest =
  /* GraphQL */ `mutation UpdateIncomeInventoryRequest(
  $input: UpdateIncomeInventoryRequestInput!
  $condition: ModelIncomeInventoryRequestConditionInput
) {
  updateIncomeInventoryRequest(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateIncomeInventoryRequestMutationVariables,
    APITypes.UpdateIncomeInventoryRequestMutation
  >;
export const deleteIncomeInventoryRequest =
  /* GraphQL */ `mutation DeleteIncomeInventoryRequest(
  $input: DeleteIncomeInventoryRequestInput!
  $condition: ModelIncomeInventoryRequestConditionInput
) {
  deleteIncomeInventoryRequest(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteIncomeInventoryRequestMutationVariables,
    APITypes.DeleteIncomeInventoryRequestMutation
  >;
export const createIncomeInventoryProductQuantity =
  /* GraphQL */ `mutation CreateIncomeInventoryProductQuantity(
  $input: CreateIncomeInventoryProductQuantityInput!
  $condition: ModelIncomeInventoryProductQuantityConditionInput
) {
  createIncomeInventoryProductQuantity(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateIncomeInventoryProductQuantityMutationVariables,
    APITypes.CreateIncomeInventoryProductQuantityMutation
  >;
export const updateIncomeInventoryProductQuantity =
  /* GraphQL */ `mutation UpdateIncomeInventoryProductQuantity(
  $input: UpdateIncomeInventoryProductQuantityInput!
  $condition: ModelIncomeInventoryProductQuantityConditionInput
) {
  updateIncomeInventoryProductQuantity(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateIncomeInventoryProductQuantityMutationVariables,
    APITypes.UpdateIncomeInventoryProductQuantityMutation
  >;
export const deleteIncomeInventoryProductQuantity =
  /* GraphQL */ `mutation DeleteIncomeInventoryProductQuantity(
  $input: DeleteIncomeInventoryProductQuantityInput!
  $condition: ModelIncomeInventoryProductQuantityConditionInput
) {
  deleteIncomeInventoryProductQuantity(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteIncomeInventoryProductQuantityMutationVariables,
    APITypes.DeleteIncomeInventoryProductQuantityMutation
  >;
export const createIncomeInventoryProductQuantityRequest =
  /* GraphQL */ `mutation CreateIncomeInventoryProductQuantityRequest(
  $input: CreateIncomeInventoryProductQuantityRequestInput!
  $condition: ModelIncomeInventoryProductQuantityRequestConditionInput
) {
  createIncomeInventoryProductQuantityRequest(
    input: $input
    condition: $condition
  ) {
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
` as GeneratedMutation<
    APITypes.CreateIncomeInventoryProductQuantityRequestMutationVariables,
    APITypes.CreateIncomeInventoryProductQuantityRequestMutation
  >;
export const updateIncomeInventoryProductQuantityRequest =
  /* GraphQL */ `mutation UpdateIncomeInventoryProductQuantityRequest(
  $input: UpdateIncomeInventoryProductQuantityRequestInput!
  $condition: ModelIncomeInventoryProductQuantityRequestConditionInput
) {
  updateIncomeInventoryProductQuantityRequest(
    input: $input
    condition: $condition
  ) {
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
` as GeneratedMutation<
    APITypes.UpdateIncomeInventoryProductQuantityRequestMutationVariables,
    APITypes.UpdateIncomeInventoryProductQuantityRequestMutation
  >;
export const deleteIncomeInventoryProductQuantityRequest =
  /* GraphQL */ `mutation DeleteIncomeInventoryProductQuantityRequest(
  $input: DeleteIncomeInventoryProductQuantityRequestInput!
  $condition: ModelIncomeInventoryProductQuantityRequestConditionInput
) {
  deleteIncomeInventoryProductQuantityRequest(
    input: $input
    condition: $condition
  ) {
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
` as GeneratedMutation<
    APITypes.DeleteIncomeInventoryProductQuantityRequestMutationVariables,
    APITypes.DeleteIncomeInventoryProductQuantityRequestMutation
  >;
export const createOutcomeInventory =
  /* GraphQL */ `mutation CreateOutcomeInventory(
  $input: CreateOutcomeInventoryInput!
  $condition: ModelOutcomeInventoryConditionInput
) {
  createOutcomeInventory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateOutcomeInventoryMutationVariables,
    APITypes.CreateOutcomeInventoryMutation
  >;
export const updateOutcomeInventory =
  /* GraphQL */ `mutation UpdateOutcomeInventory(
  $input: UpdateOutcomeInventoryInput!
  $condition: ModelOutcomeInventoryConditionInput
) {
  updateOutcomeInventory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateOutcomeInventoryMutationVariables,
    APITypes.UpdateOutcomeInventoryMutation
  >;
export const deleteOutcomeInventory =
  /* GraphQL */ `mutation DeleteOutcomeInventory(
  $input: DeleteOutcomeInventoryInput!
  $condition: ModelOutcomeInventoryConditionInput
) {
  deleteOutcomeInventory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteOutcomeInventoryMutationVariables,
    APITypes.DeleteOutcomeInventoryMutation
  >;
export const createOutcomeInventoryRequest =
  /* GraphQL */ `mutation CreateOutcomeInventoryRequest(
  $input: CreateOutcomeInventoryRequestInput!
  $condition: ModelOutcomeInventoryRequestConditionInput
) {
  createOutcomeInventoryRequest(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateOutcomeInventoryRequestMutationVariables,
    APITypes.CreateOutcomeInventoryRequestMutation
  >;
export const updateOutcomeInventoryRequest =
  /* GraphQL */ `mutation UpdateOutcomeInventoryRequest(
  $input: UpdateOutcomeInventoryRequestInput!
  $condition: ModelOutcomeInventoryRequestConditionInput
) {
  updateOutcomeInventoryRequest(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateOutcomeInventoryRequestMutationVariables,
    APITypes.UpdateOutcomeInventoryRequestMutation
  >;
export const deleteOutcomeInventoryRequest =
  /* GraphQL */ `mutation DeleteOutcomeInventoryRequest(
  $input: DeleteOutcomeInventoryRequestInput!
  $condition: ModelOutcomeInventoryRequestConditionInput
) {
  deleteOutcomeInventoryRequest(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteOutcomeInventoryRequestMutationVariables,
    APITypes.DeleteOutcomeInventoryRequestMutation
  >;
export const createOutcomeInventoryProductQuantity =
  /* GraphQL */ `mutation CreateOutcomeInventoryProductQuantity(
  $input: CreateOutcomeInventoryProductQuantityInput!
  $condition: ModelOutcomeInventoryProductQuantityConditionInput
) {
  createOutcomeInventoryProductQuantity(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateOutcomeInventoryProductQuantityMutationVariables,
    APITypes.CreateOutcomeInventoryProductQuantityMutation
  >;
export const updateOutcomeInventoryProductQuantity =
  /* GraphQL */ `mutation UpdateOutcomeInventoryProductQuantity(
  $input: UpdateOutcomeInventoryProductQuantityInput!
  $condition: ModelOutcomeInventoryProductQuantityConditionInput
) {
  updateOutcomeInventoryProductQuantity(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateOutcomeInventoryProductQuantityMutationVariables,
    APITypes.UpdateOutcomeInventoryProductQuantityMutation
  >;
export const deleteOutcomeInventoryProductQuantity =
  /* GraphQL */ `mutation DeleteOutcomeInventoryProductQuantity(
  $input: DeleteOutcomeInventoryProductQuantityInput!
  $condition: ModelOutcomeInventoryProductQuantityConditionInput
) {
  deleteOutcomeInventoryProductQuantity(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteOutcomeInventoryProductQuantityMutationVariables,
    APITypes.DeleteOutcomeInventoryProductQuantityMutation
  >;
export const createOutcomeInventoryProductQuantityRequest =
  /* GraphQL */ `mutation CreateOutcomeInventoryProductQuantityRequest(
  $input: CreateOutcomeInventoryProductQuantityRequestInput!
  $condition: ModelOutcomeInventoryProductQuantityRequestConditionInput
) {
  createOutcomeInventoryProductQuantityRequest(
    input: $input
    condition: $condition
  ) {
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
` as GeneratedMutation<
    APITypes.CreateOutcomeInventoryProductQuantityRequestMutationVariables,
    APITypes.CreateOutcomeInventoryProductQuantityRequestMutation
  >;
export const updateOutcomeInventoryProductQuantityRequest =
  /* GraphQL */ `mutation UpdateOutcomeInventoryProductQuantityRequest(
  $input: UpdateOutcomeInventoryProductQuantityRequestInput!
  $condition: ModelOutcomeInventoryProductQuantityRequestConditionInput
) {
  updateOutcomeInventoryProductQuantityRequest(
    input: $input
    condition: $condition
  ) {
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
` as GeneratedMutation<
    APITypes.UpdateOutcomeInventoryProductQuantityRequestMutationVariables,
    APITypes.UpdateOutcomeInventoryProductQuantityRequestMutation
  >;
export const deleteOutcomeInventoryProductQuantityRequest =
  /* GraphQL */ `mutation DeleteOutcomeInventoryProductQuantityRequest(
  $input: DeleteOutcomeInventoryProductQuantityRequestInput!
  $condition: ModelOutcomeInventoryProductQuantityRequestConditionInput
) {
  deleteOutcomeInventoryProductQuantityRequest(
    input: $input
    condition: $condition
  ) {
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
` as GeneratedMutation<
    APITypes.DeleteOutcomeInventoryProductQuantityRequestMutationVariables,
    APITypes.DeleteOutcomeInventoryProductQuantityRequestMutation
  >;
export const createReturnsInventory =
  /* GraphQL */ `mutation CreateReturnsInventory(
  $input: CreateReturnsInventoryInput!
  $condition: ModelReturnsInventoryConditionInput
) {
  createReturnsInventory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateReturnsInventoryMutationVariables,
    APITypes.CreateReturnsInventoryMutation
  >;
export const updateReturnsInventory =
  /* GraphQL */ `mutation UpdateReturnsInventory(
  $input: UpdateReturnsInventoryInput!
  $condition: ModelReturnsInventoryConditionInput
) {
  updateReturnsInventory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateReturnsInventoryMutationVariables,
    APITypes.UpdateReturnsInventoryMutation
  >;
export const deleteReturnsInventory =
  /* GraphQL */ `mutation DeleteReturnsInventory(
  $input: DeleteReturnsInventoryInput!
  $condition: ModelReturnsInventoryConditionInput
) {
  deleteReturnsInventory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteReturnsInventoryMutationVariables,
    APITypes.DeleteReturnsInventoryMutation
  >;
export const createRole = /* GraphQL */ `mutation CreateRole(
  $input: CreateRoleInput!
  $condition: ModelRoleConditionInput
) {
  createRole(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRoleMutationVariables,
  APITypes.CreateRoleMutation
>;
export const updateRole = /* GraphQL */ `mutation UpdateRole(
  $input: UpdateRoleInput!
  $condition: ModelRoleConditionInput
) {
  updateRole(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRoleMutationVariables,
  APITypes.UpdateRoleMutation
>;
export const deleteRole = /* GraphQL */ `mutation DeleteRole(
  $input: DeleteRoleInput!
  $condition: ModelRoleConditionInput
) {
  deleteRole(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRoleMutationVariables,
  APITypes.DeleteRoleMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createUserInfo = /* GraphQL */ `mutation CreateUserInfo(
  $input: CreateUserInfoInput!
  $condition: ModelUserInfoConditionInput
) {
  createUserInfo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserInfoMutationVariables,
  APITypes.CreateUserInfoMutation
>;
export const updateUserInfo = /* GraphQL */ `mutation UpdateUserInfo(
  $input: UpdateUserInfoInput!
  $condition: ModelUserInfoConditionInput
) {
  updateUserInfo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserInfoMutationVariables,
  APITypes.UpdateUserInfoMutation
>;
export const deleteUserInfo = /* GraphQL */ `mutation DeleteUserInfo(
  $input: DeleteUserInfoInput!
  $condition: ModelUserInfoConditionInput
) {
  deleteUserInfo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserInfoMutationVariables,
  APITypes.DeleteUserInfoMutation
>;
export const createInventory = /* GraphQL */ `mutation CreateInventory(
  $input: CreateInventoryInput!
  $condition: ModelInventoryConditionInput
) {
  createInventory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateInventoryMutationVariables,
  APITypes.CreateInventoryMutation
>;
export const updateInventory = /* GraphQL */ `mutation UpdateInventory(
  $input: UpdateInventoryInput!
  $condition: ModelInventoryConditionInput
) {
  updateInventory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateInventoryMutationVariables,
  APITypes.UpdateInventoryMutation
>;
export const deleteInventory = /* GraphQL */ `mutation DeleteInventory(
  $input: DeleteInventoryInput!
  $condition: ModelInventoryConditionInput
) {
  deleteInventory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteInventoryMutationVariables,
  APITypes.DeleteInventoryMutation
>;
export const createInventoryProduct =
  /* GraphQL */ `mutation CreateInventoryProduct(
  $input: CreateInventoryProductInput!
  $condition: ModelInventoryProductConditionInput
) {
  createInventoryProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateInventoryProductMutationVariables,
    APITypes.CreateInventoryProductMutation
  >;
export const updateInventoryProduct =
  /* GraphQL */ `mutation UpdateInventoryProduct(
  $input: UpdateInventoryProductInput!
  $condition: ModelInventoryProductConditionInput
) {
  updateInventoryProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateInventoryProductMutationVariables,
    APITypes.UpdateInventoryProductMutation
  >;
export const deleteInventoryProduct =
  /* GraphQL */ `mutation DeleteInventoryProduct(
  $input: DeleteInventoryProductInput!
  $condition: ModelInventoryProductConditionInput
) {
  deleteInventoryProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteInventoryProductMutationVariables,
    APITypes.DeleteInventoryProductMutation
  >;
export const createBranchOffice = /* GraphQL */ `mutation CreateBranchOffice(
  $input: CreateBranchOfficeInput!
  $condition: ModelBranchOfficeConditionInput
) {
  createBranchOffice(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBranchOfficeMutationVariables,
  APITypes.CreateBranchOfficeMutation
>;
export const updateBranchOffice = /* GraphQL */ `mutation UpdateBranchOffice(
  $input: UpdateBranchOfficeInput!
  $condition: ModelBranchOfficeConditionInput
) {
  updateBranchOffice(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBranchOfficeMutationVariables,
  APITypes.UpdateBranchOfficeMutation
>;
export const deleteBranchOffice = /* GraphQL */ `mutation DeleteBranchOffice(
  $input: DeleteBranchOfficeInput!
  $condition: ModelBranchOfficeConditionInput
) {
  deleteBranchOffice(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBranchOfficeMutationVariables,
  APITypes.DeleteBranchOfficeMutation
>;
export const createDiscounts = /* GraphQL */ `mutation CreateDiscounts(
  $input: CreateDiscountsInput!
  $condition: ModelDiscountsConditionInput
) {
  createDiscounts(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateDiscountsMutationVariables,
  APITypes.CreateDiscountsMutation
>;
export const updateDiscounts = /* GraphQL */ `mutation UpdateDiscounts(
  $input: UpdateDiscountsInput!
  $condition: ModelDiscountsConditionInput
) {
  updateDiscounts(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateDiscountsMutationVariables,
  APITypes.UpdateDiscountsMutation
>;
export const deleteDiscounts = /* GraphQL */ `mutation DeleteDiscounts(
  $input: DeleteDiscountsInput!
  $condition: ModelDiscountsConditionInput
) {
  deleteDiscounts(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteDiscountsMutationVariables,
  APITypes.DeleteDiscountsMutation
>;
export const createSalesOperation =
  /* GraphQL */ `mutation CreateSalesOperation(
  $input: CreateSalesOperationInput!
  $condition: ModelSalesOperationConditionInput
) {
  createSalesOperation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateSalesOperationMutationVariables,
    APITypes.CreateSalesOperationMutation
  >;
export const updateSalesOperation =
  /* GraphQL */ `mutation UpdateSalesOperation(
  $input: UpdateSalesOperationInput!
  $condition: ModelSalesOperationConditionInput
) {
  updateSalesOperation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateSalesOperationMutationVariables,
    APITypes.UpdateSalesOperationMutation
  >;
export const deleteSalesOperation =
  /* GraphQL */ `mutation DeleteSalesOperation(
  $input: DeleteSalesOperationInput!
  $condition: ModelSalesOperationConditionInput
) {
  deleteSalesOperation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteSalesOperationMutationVariables,
    APITypes.DeleteSalesOperationMutation
  >;
export const createSalesOperationClientCreditFirstLastPayment =
  /* GraphQL */ `mutation CreateSalesOperationClientCreditFirstLastPayment(
  $input: CreateSalesOperationClientCreditFirstLastPaymentInput!
  $condition: ModelSalesOperationClientCreditFirstLastPaymentConditionInput
) {
  createSalesOperationClientCreditFirstLastPayment(
    input: $input
    condition: $condition
  ) {
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
` as GeneratedMutation<
    APITypes.CreateSalesOperationClientCreditFirstLastPaymentMutationVariables,
    APITypes.CreateSalesOperationClientCreditFirstLastPaymentMutation
  >;
export const updateSalesOperationClientCreditFirstLastPayment =
  /* GraphQL */ `mutation UpdateSalesOperationClientCreditFirstLastPayment(
  $input: UpdateSalesOperationClientCreditFirstLastPaymentInput!
  $condition: ModelSalesOperationClientCreditFirstLastPaymentConditionInput
) {
  updateSalesOperationClientCreditFirstLastPayment(
    input: $input
    condition: $condition
  ) {
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
` as GeneratedMutation<
    APITypes.UpdateSalesOperationClientCreditFirstLastPaymentMutationVariables,
    APITypes.UpdateSalesOperationClientCreditFirstLastPaymentMutation
  >;
export const deleteSalesOperationClientCreditFirstLastPayment =
  /* GraphQL */ `mutation DeleteSalesOperationClientCreditFirstLastPayment(
  $input: DeleteSalesOperationClientCreditFirstLastPaymentInput!
  $condition: ModelSalesOperationClientCreditFirstLastPaymentConditionInput
) {
  deleteSalesOperationClientCreditFirstLastPayment(
    input: $input
    condition: $condition
  ) {
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
` as GeneratedMutation<
    APITypes.DeleteSalesOperationClientCreditFirstLastPaymentMutationVariables,
    APITypes.DeleteSalesOperationClientCreditFirstLastPaymentMutation
  >;
export const createSalesOperationClientCreditMovements =
  /* GraphQL */ `mutation CreateSalesOperationClientCreditMovements(
  $input: CreateSalesOperationClientCreditMovementsInput!
  $condition: ModelSalesOperationClientCreditMovementsConditionInput
) {
  createSalesOperationClientCreditMovements(
    input: $input
    condition: $condition
  ) {
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
` as GeneratedMutation<
    APITypes.CreateSalesOperationClientCreditMovementsMutationVariables,
    APITypes.CreateSalesOperationClientCreditMovementsMutation
  >;
export const updateSalesOperationClientCreditMovements =
  /* GraphQL */ `mutation UpdateSalesOperationClientCreditMovements(
  $input: UpdateSalesOperationClientCreditMovementsInput!
  $condition: ModelSalesOperationClientCreditMovementsConditionInput
) {
  updateSalesOperationClientCreditMovements(
    input: $input
    condition: $condition
  ) {
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
` as GeneratedMutation<
    APITypes.UpdateSalesOperationClientCreditMovementsMutationVariables,
    APITypes.UpdateSalesOperationClientCreditMovementsMutation
  >;
export const deleteSalesOperationClientCreditMovements =
  /* GraphQL */ `mutation DeleteSalesOperationClientCreditMovements(
  $input: DeleteSalesOperationClientCreditMovementsInput!
  $condition: ModelSalesOperationClientCreditMovementsConditionInput
) {
  deleteSalesOperationClientCreditMovements(
    input: $input
    condition: $condition
  ) {
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
` as GeneratedMutation<
    APITypes.DeleteSalesOperationClientCreditMovementsMutationVariables,
    APITypes.DeleteSalesOperationClientCreditMovementsMutation
  >;
export const createSalesOperationInventoryProductQuantity =
  /* GraphQL */ `mutation CreateSalesOperationInventoryProductQuantity(
  $input: CreateSalesOperationInventoryProductQuantityInput!
  $condition: ModelSalesOperationInventoryProductQuantityConditionInput
) {
  createSalesOperationInventoryProductQuantity(
    input: $input
    condition: $condition
  ) {
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
` as GeneratedMutation<
    APITypes.CreateSalesOperationInventoryProductQuantityMutationVariables,
    APITypes.CreateSalesOperationInventoryProductQuantityMutation
  >;
export const updateSalesOperationInventoryProductQuantity =
  /* GraphQL */ `mutation UpdateSalesOperationInventoryProductQuantity(
  $input: UpdateSalesOperationInventoryProductQuantityInput!
  $condition: ModelSalesOperationInventoryProductQuantityConditionInput
) {
  updateSalesOperationInventoryProductQuantity(
    input: $input
    condition: $condition
  ) {
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
` as GeneratedMutation<
    APITypes.UpdateSalesOperationInventoryProductQuantityMutationVariables,
    APITypes.UpdateSalesOperationInventoryProductQuantityMutation
  >;
export const deleteSalesOperationInventoryProductQuantity =
  /* GraphQL */ `mutation DeleteSalesOperationInventoryProductQuantity(
  $input: DeleteSalesOperationInventoryProductQuantityInput!
  $condition: ModelSalesOperationInventoryProductQuantityConditionInput
) {
  deleteSalesOperationInventoryProductQuantity(
    input: $input
    condition: $condition
  ) {
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
` as GeneratedMutation<
    APITypes.DeleteSalesOperationInventoryProductQuantityMutationVariables,
    APITypes.DeleteSalesOperationInventoryProductQuantityMutation
  >;
export const createCompanyExpenses =
  /* GraphQL */ `mutation CreateCompanyExpenses(
  $input: CreateCompanyExpensesInput!
  $condition: ModelCompanyExpensesConditionInput
) {
  createCompanyExpenses(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateCompanyExpensesMutationVariables,
    APITypes.CreateCompanyExpensesMutation
  >;
export const updateCompanyExpenses =
  /* GraphQL */ `mutation UpdateCompanyExpenses(
  $input: UpdateCompanyExpensesInput!
  $condition: ModelCompanyExpensesConditionInput
) {
  updateCompanyExpenses(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateCompanyExpensesMutationVariables,
    APITypes.UpdateCompanyExpensesMutation
  >;
export const deleteCompanyExpenses =
  /* GraphQL */ `mutation DeleteCompanyExpenses(
  $input: DeleteCompanyExpensesInput!
  $condition: ModelCompanyExpensesConditionInput
) {
  deleteCompanyExpenses(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteCompanyExpensesMutationVariables,
    APITypes.DeleteCompanyExpensesMutation
  >;
export const createSalesOperationCustomerSubscription =
  /* GraphQL */ `mutation CreateSalesOperationCustomerSubscription(
  $input: CreateSalesOperationCustomerSubscriptionInput!
  $condition: ModelSalesOperationCustomerSubscriptionConditionInput
) {
  createSalesOperationCustomerSubscription(
    input: $input
    condition: $condition
  ) {
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
` as GeneratedMutation<
    APITypes.CreateSalesOperationCustomerSubscriptionMutationVariables,
    APITypes.CreateSalesOperationCustomerSubscriptionMutation
  >;
export const updateSalesOperationCustomerSubscription =
  /* GraphQL */ `mutation UpdateSalesOperationCustomerSubscription(
  $input: UpdateSalesOperationCustomerSubscriptionInput!
  $condition: ModelSalesOperationCustomerSubscriptionConditionInput
) {
  updateSalesOperationCustomerSubscription(
    input: $input
    condition: $condition
  ) {
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
` as GeneratedMutation<
    APITypes.UpdateSalesOperationCustomerSubscriptionMutationVariables,
    APITypes.UpdateSalesOperationCustomerSubscriptionMutation
  >;
export const deleteSalesOperationCustomerSubscription =
  /* GraphQL */ `mutation DeleteSalesOperationCustomerSubscription(
  $input: DeleteSalesOperationCustomerSubscriptionInput!
  $condition: ModelSalesOperationCustomerSubscriptionConditionInput
) {
  deleteSalesOperationCustomerSubscription(
    input: $input
    condition: $condition
  ) {
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
` as GeneratedMutation<
    APITypes.DeleteSalesOperationCustomerSubscriptionMutationVariables,
    APITypes.DeleteSalesOperationCustomerSubscriptionMutation
  >;
export const createProvider = /* GraphQL */ `mutation CreateProvider(
  $input: CreateProviderInput!
  $condition: ModelProviderConditionInput
) {
  createProvider(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProviderMutationVariables,
  APITypes.CreateProviderMutation
>;
export const updateProvider = /* GraphQL */ `mutation UpdateProvider(
  $input: UpdateProviderInput!
  $condition: ModelProviderConditionInput
) {
  updateProvider(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProviderMutationVariables,
  APITypes.UpdateProviderMutation
>;
export const deleteProvider = /* GraphQL */ `mutation DeleteProvider(
  $input: DeleteProviderInput!
  $condition: ModelProviderConditionInput
) {
  deleteProvider(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProviderMutationVariables,
  APITypes.DeleteProviderMutation
>;
export const createProductProvider =
  /* GraphQL */ `mutation CreateProductProvider(
  $input: CreateProductProviderInput!
  $condition: ModelProductProviderConditionInput
) {
  createProductProvider(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateProductProviderMutationVariables,
    APITypes.CreateProductProviderMutation
  >;
export const updateProductProvider =
  /* GraphQL */ `mutation UpdateProductProvider(
  $input: UpdateProductProviderInput!
  $condition: ModelProductProviderConditionInput
) {
  updateProductProvider(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateProductProviderMutationVariables,
    APITypes.UpdateProductProviderMutation
  >;
export const deleteProductProvider =
  /* GraphQL */ `mutation DeleteProductProvider(
  $input: DeleteProductProviderInput!
  $condition: ModelProductProviderConditionInput
) {
  deleteProductProvider(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteProductProviderMutationVariables,
    APITypes.DeleteProductProviderMutation
  >;
export const createProductProviderResponsible =
  /* GraphQL */ `mutation CreateProductProviderResponsible(
  $input: CreateProductProviderResponsibleInput!
  $condition: ModelProductProviderResponsibleConditionInput
) {
  createProductProviderResponsible(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateProductProviderResponsibleMutationVariables,
    APITypes.CreateProductProviderResponsibleMutation
  >;
export const updateProductProviderResponsible =
  /* GraphQL */ `mutation UpdateProductProviderResponsible(
  $input: UpdateProductProviderResponsibleInput!
  $condition: ModelProductProviderResponsibleConditionInput
) {
  updateProductProviderResponsible(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateProductProviderResponsibleMutationVariables,
    APITypes.UpdateProductProviderResponsibleMutation
  >;
export const deleteProductProviderResponsible =
  /* GraphQL */ `mutation DeleteProductProviderResponsible(
  $input: DeleteProductProviderResponsibleInput!
  $condition: ModelProductProviderResponsibleConditionInput
) {
  deleteProductProviderResponsible(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteProductProviderResponsibleMutationVariables,
    APITypes.DeleteProductProviderResponsibleMutation
  >;
export const createServiceProvider =
  /* GraphQL */ `mutation CreateServiceProvider(
  $input: CreateServiceProviderInput!
  $condition: ModelServiceProviderConditionInput
) {
  createServiceProvider(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateServiceProviderMutationVariables,
    APITypes.CreateServiceProviderMutation
  >;
export const updateServiceProvider =
  /* GraphQL */ `mutation UpdateServiceProvider(
  $input: UpdateServiceProviderInput!
  $condition: ModelServiceProviderConditionInput
) {
  updateServiceProvider(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateServiceProviderMutationVariables,
    APITypes.UpdateServiceProviderMutation
  >;
export const deleteServiceProvider =
  /* GraphQL */ `mutation DeleteServiceProvider(
  $input: DeleteServiceProviderInput!
  $condition: ModelServiceProviderConditionInput
) {
  deleteServiceProvider(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteServiceProviderMutationVariables,
    APITypes.DeleteServiceProviderMutation
  >;
export const createServiceProviderResponsible =
  /* GraphQL */ `mutation CreateServiceProviderResponsible(
  $input: CreateServiceProviderResponsibleInput!
  $condition: ModelServiceProviderResponsibleConditionInput
) {
  createServiceProviderResponsible(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateServiceProviderResponsibleMutationVariables,
    APITypes.CreateServiceProviderResponsibleMutation
  >;
export const updateServiceProviderResponsible =
  /* GraphQL */ `mutation UpdateServiceProviderResponsible(
  $input: UpdateServiceProviderResponsibleInput!
  $condition: ModelServiceProviderResponsibleConditionInput
) {
  updateServiceProviderResponsible(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateServiceProviderResponsibleMutationVariables,
    APITypes.UpdateServiceProviderResponsibleMutation
  >;
export const deleteServiceProviderResponsible =
  /* GraphQL */ `mutation DeleteServiceProviderResponsible(
  $input: DeleteServiceProviderResponsibleInput!
  $condition: ModelServiceProviderResponsibleConditionInput
) {
  deleteServiceProviderResponsible(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteServiceProviderResponsibleMutationVariables,
    APITypes.DeleteServiceProviderResponsibleMutation
  >;
export const createInventoryProductIncomeInventory =
  /* GraphQL */ `mutation CreateInventoryProductIncomeInventory(
  $input: CreateInventoryProductIncomeInventoryInput!
  $condition: ModelInventoryProductIncomeInventoryConditionInput
) {
  createInventoryProductIncomeInventory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateInventoryProductIncomeInventoryMutationVariables,
    APITypes.CreateInventoryProductIncomeInventoryMutation
  >;
export const updateInventoryProductIncomeInventory =
  /* GraphQL */ `mutation UpdateInventoryProductIncomeInventory(
  $input: UpdateInventoryProductIncomeInventoryInput!
  $condition: ModelInventoryProductIncomeInventoryConditionInput
) {
  updateInventoryProductIncomeInventory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateInventoryProductIncomeInventoryMutationVariables,
    APITypes.UpdateInventoryProductIncomeInventoryMutation
  >;
export const deleteInventoryProductIncomeInventory =
  /* GraphQL */ `mutation DeleteInventoryProductIncomeInventory(
  $input: DeleteInventoryProductIncomeInventoryInput!
  $condition: ModelInventoryProductIncomeInventoryConditionInput
) {
  deleteInventoryProductIncomeInventory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteInventoryProductIncomeInventoryMutationVariables,
    APITypes.DeleteInventoryProductIncomeInventoryMutation
  >;
export const createInventoryProductIncomeInventoryRequest =
  /* GraphQL */ `mutation CreateInventoryProductIncomeInventoryRequest(
  $input: CreateInventoryProductIncomeInventoryRequestInput!
  $condition: ModelInventoryProductIncomeInventoryRequestConditionInput
) {
  createInventoryProductIncomeInventoryRequest(
    input: $input
    condition: $condition
  ) {
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
` as GeneratedMutation<
    APITypes.CreateInventoryProductIncomeInventoryRequestMutationVariables,
    APITypes.CreateInventoryProductIncomeInventoryRequestMutation
  >;
export const updateInventoryProductIncomeInventoryRequest =
  /* GraphQL */ `mutation UpdateInventoryProductIncomeInventoryRequest(
  $input: UpdateInventoryProductIncomeInventoryRequestInput!
  $condition: ModelInventoryProductIncomeInventoryRequestConditionInput
) {
  updateInventoryProductIncomeInventoryRequest(
    input: $input
    condition: $condition
  ) {
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
` as GeneratedMutation<
    APITypes.UpdateInventoryProductIncomeInventoryRequestMutationVariables,
    APITypes.UpdateInventoryProductIncomeInventoryRequestMutation
  >;
export const deleteInventoryProductIncomeInventoryRequest =
  /* GraphQL */ `mutation DeleteInventoryProductIncomeInventoryRequest(
  $input: DeleteInventoryProductIncomeInventoryRequestInput!
  $condition: ModelInventoryProductIncomeInventoryRequestConditionInput
) {
  deleteInventoryProductIncomeInventoryRequest(
    input: $input
    condition: $condition
  ) {
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
` as GeneratedMutation<
    APITypes.DeleteInventoryProductIncomeInventoryRequestMutationVariables,
    APITypes.DeleteInventoryProductIncomeInventoryRequestMutation
  >;
export const createInventoryProductOutcomeInventory =
  /* GraphQL */ `mutation CreateInventoryProductOutcomeInventory(
  $input: CreateInventoryProductOutcomeInventoryInput!
  $condition: ModelInventoryProductOutcomeInventoryConditionInput
) {
  createInventoryProductOutcomeInventory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateInventoryProductOutcomeInventoryMutationVariables,
    APITypes.CreateInventoryProductOutcomeInventoryMutation
  >;
export const updateInventoryProductOutcomeInventory =
  /* GraphQL */ `mutation UpdateInventoryProductOutcomeInventory(
  $input: UpdateInventoryProductOutcomeInventoryInput!
  $condition: ModelInventoryProductOutcomeInventoryConditionInput
) {
  updateInventoryProductOutcomeInventory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateInventoryProductOutcomeInventoryMutationVariables,
    APITypes.UpdateInventoryProductOutcomeInventoryMutation
  >;
export const deleteInventoryProductOutcomeInventory =
  /* GraphQL */ `mutation DeleteInventoryProductOutcomeInventory(
  $input: DeleteInventoryProductOutcomeInventoryInput!
  $condition: ModelInventoryProductOutcomeInventoryConditionInput
) {
  deleteInventoryProductOutcomeInventory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteInventoryProductOutcomeInventoryMutationVariables,
    APITypes.DeleteInventoryProductOutcomeInventoryMutation
  >;
export const createInventoryProductOutcomeInventoryRequest =
  /* GraphQL */ `mutation CreateInventoryProductOutcomeInventoryRequest(
  $input: CreateInventoryProductOutcomeInventoryRequestInput!
  $condition: ModelInventoryProductOutcomeInventoryRequestConditionInput
) {
  createInventoryProductOutcomeInventoryRequest(
    input: $input
    condition: $condition
  ) {
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
` as GeneratedMutation<
    APITypes.CreateInventoryProductOutcomeInventoryRequestMutationVariables,
    APITypes.CreateInventoryProductOutcomeInventoryRequestMutation
  >;
export const updateInventoryProductOutcomeInventoryRequest =
  /* GraphQL */ `mutation UpdateInventoryProductOutcomeInventoryRequest(
  $input: UpdateInventoryProductOutcomeInventoryRequestInput!
  $condition: ModelInventoryProductOutcomeInventoryRequestConditionInput
) {
  updateInventoryProductOutcomeInventoryRequest(
    input: $input
    condition: $condition
  ) {
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
` as GeneratedMutation<
    APITypes.UpdateInventoryProductOutcomeInventoryRequestMutationVariables,
    APITypes.UpdateInventoryProductOutcomeInventoryRequestMutation
  >;
export const deleteInventoryProductOutcomeInventoryRequest =
  /* GraphQL */ `mutation DeleteInventoryProductOutcomeInventoryRequest(
  $input: DeleteInventoryProductOutcomeInventoryRequestInput!
  $condition: ModelInventoryProductOutcomeInventoryRequestConditionInput
) {
  deleteInventoryProductOutcomeInventoryRequest(
    input: $input
    condition: $condition
  ) {
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
` as GeneratedMutation<
    APITypes.DeleteInventoryProductOutcomeInventoryRequestMutationVariables,
    APITypes.DeleteInventoryProductOutcomeInventoryRequestMutation
  >;
export const createInventoryProductReturnsInventory =
  /* GraphQL */ `mutation CreateInventoryProductReturnsInventory(
  $input: CreateInventoryProductReturnsInventoryInput!
  $condition: ModelInventoryProductReturnsInventoryConditionInput
) {
  createInventoryProductReturnsInventory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateInventoryProductReturnsInventoryMutationVariables,
    APITypes.CreateInventoryProductReturnsInventoryMutation
  >;
export const updateInventoryProductReturnsInventory =
  /* GraphQL */ `mutation UpdateInventoryProductReturnsInventory(
  $input: UpdateInventoryProductReturnsInventoryInput!
  $condition: ModelInventoryProductReturnsInventoryConditionInput
) {
  updateInventoryProductReturnsInventory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateInventoryProductReturnsInventoryMutationVariables,
    APITypes.UpdateInventoryProductReturnsInventoryMutation
  >;
export const deleteInventoryProductReturnsInventory =
  /* GraphQL */ `mutation DeleteInventoryProductReturnsInventory(
  $input: DeleteInventoryProductReturnsInventoryInput!
  $condition: ModelInventoryProductReturnsInventoryConditionInput
) {
  deleteInventoryProductReturnsInventory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteInventoryProductReturnsInventoryMutationVariables,
    APITypes.DeleteInventoryProductReturnsInventoryMutation
  >;
export const createBranchOfficeUser =
  /* GraphQL */ `mutation CreateBranchOfficeUser(
  $input: CreateBranchOfficeUserInput!
  $condition: ModelBranchOfficeUserConditionInput
) {
  createBranchOfficeUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateBranchOfficeUserMutationVariables,
    APITypes.CreateBranchOfficeUserMutation
  >;
export const updateBranchOfficeUser =
  /* GraphQL */ `mutation UpdateBranchOfficeUser(
  $input: UpdateBranchOfficeUserInput!
  $condition: ModelBranchOfficeUserConditionInput
) {
  updateBranchOfficeUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateBranchOfficeUserMutationVariables,
    APITypes.UpdateBranchOfficeUserMutation
  >;
export const deleteBranchOfficeUser =
  /* GraphQL */ `mutation DeleteBranchOfficeUser(
  $input: DeleteBranchOfficeUserInput!
  $condition: ModelBranchOfficeUserConditionInput
) {
  deleteBranchOfficeUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteBranchOfficeUserMutationVariables,
    APITypes.DeleteBranchOfficeUserMutation
  >;
export const createDiscountInventoryProduct =
  /* GraphQL */ `mutation CreateDiscountInventoryProduct(
  $input: CreateDiscountInventoryProductInput!
  $condition: ModelDiscountInventoryProductConditionInput
) {
  createDiscountInventoryProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateDiscountInventoryProductMutationVariables,
    APITypes.CreateDiscountInventoryProductMutation
  >;
export const updateDiscountInventoryProduct =
  /* GraphQL */ `mutation UpdateDiscountInventoryProduct(
  $input: UpdateDiscountInventoryProductInput!
  $condition: ModelDiscountInventoryProductConditionInput
) {
  updateDiscountInventoryProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateDiscountInventoryProductMutationVariables,
    APITypes.UpdateDiscountInventoryProductMutation
  >;
export const deleteDiscountInventoryProduct =
  /* GraphQL */ `mutation DeleteDiscountInventoryProduct(
  $input: DeleteDiscountInventoryProductInput!
  $condition: ModelDiscountInventoryProductConditionInput
) {
  deleteDiscountInventoryProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteDiscountInventoryProductMutationVariables,
    APITypes.DeleteDiscountInventoryProductMutation
  >;
export const createInventoryProductSalesOperation =
  /* GraphQL */ `mutation CreateInventoryProductSalesOperation(
  $input: CreateInventoryProductSalesOperationInput!
  $condition: ModelInventoryProductSalesOperationConditionInput
) {
  createInventoryProductSalesOperation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateInventoryProductSalesOperationMutationVariables,
    APITypes.CreateInventoryProductSalesOperationMutation
  >;
export const updateInventoryProductSalesOperation =
  /* GraphQL */ `mutation UpdateInventoryProductSalesOperation(
  $input: UpdateInventoryProductSalesOperationInput!
  $condition: ModelInventoryProductSalesOperationConditionInput
) {
  updateInventoryProductSalesOperation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateInventoryProductSalesOperationMutationVariables,
    APITypes.UpdateInventoryProductSalesOperationMutation
  >;
export const deleteInventoryProductSalesOperation =
  /* GraphQL */ `mutation DeleteInventoryProductSalesOperation(
  $input: DeleteInventoryProductSalesOperationInput!
  $condition: ModelInventoryProductSalesOperationConditionInput
) {
  deleteInventoryProductSalesOperation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteInventoryProductSalesOperationMutationVariables,
    APITypes.DeleteInventoryProductSalesOperationMutation
  >;

//**************** CUSTOM MUTATIONS (CUD) ******************

//? CREATE MUTATION

export const createProductAPI = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      class_id
      category_id
      subcategory_id
      name
      description
      price
      commission
      hasCommission
      productProviderID
      hasDiscount
      createdAt
      updatedAt
    }
  }
`;

//? UPDATE MUTATION
export const updateProductAPI = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      class_id
      category_id
      subcategory_id
      name
      description
      price
      hasCommission
      hasDiscount
      createdAt
      updatedAt
    }
  }
`;

//? UPDATE MUTATION
export const updateProductProviderProduct = /* GraphQL */ `
  mutation UpdateProductProviderProduct(
    $input: UpdateProductProviderProductInput!
    $condition: ModelProductProviderProductConditionInput
  ) {
    updateProductProviderProduct(input: $input, condition: $condition) {
      id
      productId
      productProviderId
      createdAt
      updatedAt
    }
  }
`;

//? CREATE MUTATION
export const createProductProviderAPI = /* GraphQL */ `
  mutation CreateProductProvider(
    $input: CreateProductProviderInput!
    $condition: ModelProductProviderConditionInput
  ) {
    createProductProvider(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      productProviderProviderIDId
    }
  }
`;

//? CREATE MUTATION
export const createProviderAPI = /* GraphQL */ `
  mutation CreateProvider(
    $input: CreateProviderInput!
    $condition: ModelProviderConditionInput
  ) {
    createProvider(input: $input, condition: $condition) {
      id
      enterprise_name
      enterprise_RFC
      phone
      fixed_phone
      type
      createdAt
      updatedAt
      providerProductproviderId
    }
  }
`;

//? CREATE MUTATION
export const createProductProviderResponsibleAPI = /* GraphQL */ `
  mutation CreateProductProviderResponsible(
    $input: CreateProductProviderResponsibleInput!
    $condition: ModelProductProviderResponsibleConditionInput
  ) {
    createProductProviderResponsible(input: $input, condition: $condition) {
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
    }
  }
`;

//? UPDATE MUTATION
export const updateInventoryProductQuantityAPI = /* GraphQL */ `
  mutation UpdateInventoryProduct(
    $input: UpdateInventoryProductInput!
    $condition: ModelInventoryProductConditionInput
  ) {
    updateInventoryProduct(input: $input, condition: $condition) {
      id
      quantity
    }
  }
` as GeneratedMutation<
  APITypes.UpdateInventoryProductMutationVariables,
  APITypes.UpdateInventoryProductMutation
>;

//? CREATE MUTATION
export const createInventoryOperationAPI = /* GraphQL */ `
  mutation CreateInventoryOperation(
    $input: CreateInventoryOperationInput!
    $condition: ModelInventoryOperationConditionInput
  ) {
    createInventoryOperation(input: $input, condition: $condition) {
      id
      operationType
      inventoryID
      createdAt
      updatedAt
      inventoryOperationIncomeInventoryId
      inventoryOperationOutcomeInventoryId
      inventoryOperationSalesOperationId
    }
  }
` as GeneratedMutation<
  APITypes.CreateInventoryOperationMutationVariables,
  APITypes.CreateInventoryOperationMutation
>;

//? CREATE MUTATION
export const createIncomeInventoryAPI = /* GraphQL */ `
  mutation CreateIncomeInventory(
    $input: CreateIncomeInventoryInput!
    $condition: ModelIncomeInventoryConditionInput
  ) {
    createIncomeInventory(input: $input, condition: $condition) {
      id
      date
      comments
      providerID
      productProviderResponsibleID
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      incomeInventoryInventoryOperationIDId
    }
  }
`;

//? CREATE MUTATION
export const createIncomeInventoryProductQuantityAPI = /* GraphQL */ `
  mutation CreateIncomeInventoryProductQuantity(
    $input: CreateIncomeInventoryProductQuantityInput!
    $condition: ModelIncomeInventoryProductQuantityConditionInput
  ) {
    createIncomeInventoryProductQuantity(input: $input, condition: $condition) {
      id
      incomeQuantity
      incomeInventoryID
      createdAt
      updatedAt
    }
  }
`;

//? CREATE MUTATION
export const createInventoryProductIncomeInventoryAPI = /* GraphQL */ `
  mutation CreateInventoryProductIncomeInventory(
    $input: CreateInventoryProductIncomeInventoryInput!
    $condition: ModelInventoryProductIncomeInventoryConditionInput
  ) {
    createInventoryProductIncomeInventory(
      input: $input
      condition: $condition
    ) {
      id
      inventoryProductId
      incomeInventoryProductQuantityId
      createdAt
      updatedAt
    }
  }
`;

//? CREATE MUTATION
export const createOutcomeInventoryAPI = /* GraphQL */ `
  mutation CreateOutcomeInventory(
    $input: CreateOutcomeInventoryInput!
    $condition: ModelOutcomeInventoryConditionInput
  ) {
    createOutcomeInventory(input: $input, condition: $condition) {
      id
      date
      comments
      userInfoID
      branchOfficeID
      createdAt
      updatedAt
      outcomeInventoryInventoryOperationIDId
    }
  }
`;

//? CREATE MUTATION
export const createInventoryProductOutcomeInventoryAPI = /* GraphQL */ `
  mutation CreateInventoryProductOutcomeInventory(
    $input: CreateInventoryProductOutcomeInventoryInput!
    $condition: ModelInventoryProductOutcomeInventoryConditionInput
  ) {
    createInventoryProductOutcomeInventory(
      input: $input
      condition: $condition
    ) {
      id
      outcomeInventoryProductQuantityId
      inventoryProductId
      createdAt
      updatedAt
    }
  }
`;

//? CREATE MUTATION
export const createOutcomeInventoryProductQuantityAPI = /* GraphQL */ `
  mutation CreateOutcomeInventoryProductQuantity(
    $input: CreateOutcomeInventoryProductQuantityInput!
    $condition: ModelOutcomeInventoryProductQuantityConditionInput
  ) {
    createOutcomeInventoryProductQuantity(
      input: $input
      condition: $condition
    ) {
      id
      outcomeQuantity
      outcomeInventoryID
      createdAt
      updatedAt
    }
  }
`;

//? CREATE MUTATION
export const createUserAPI = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      password
      rolID
      hasBranchOffice
      createdAt
      updatedAt
      userUserInfoId
    }
  }
`;

//? CREATE MUTATION
export const createUserInfoAPI = /* GraphQL */ `
  mutation CreateUserInfo(
    $input: CreateUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    createUserInfo(input: $input, condition: $condition) {
      id
      name
      phone
      RFC
      gender
      createdAt
      updatedAt
      userInfoUserId
    }
  }
`;

//? CREATE MUTATION
export const createBranchOfficeUserAPI = /* GraphQL */ `
  mutation CreateBranchOfficeUser(
    $input: CreateBranchOfficeUserInput!
    $condition: ModelBranchOfficeUserConditionInput
  ) {
    createBranchOfficeUser(input: $input, condition: $condition) {
      id
      userId
      branchOfficeId
      createdAt
      updatedAt
    }
  }
`;

//? CREATE MUTATION
export const createBranchOfficeAPI = /* GraphQL */ `
  mutation CreateBranchOffice(
    $input: CreateBranchOfficeInput!
    $condition: ModelBranchOfficeConditionInput
  ) {
    createBranchOffice(input: $input, condition: $condition) {
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
    }
  }
`;

//? CREATE MUTATION
export const createClientAPI = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
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
      branchOfficeID
      hasCredit
      hasCreditRequest
      createdAt
      updatedAt
    }
  }
`;

//? CREATE MUTATION
export const createSalesOperationAPI = /* GraphQL */ `
  mutation CreateSalesOperation(
    $input: CreateSalesOperationInput!
    $condition: ModelSalesOperationConditionInput
  ) {
    createSalesOperation(input: $input, condition: $condition) {
      id
      amountPaid
      branchOfficeID
      clientID
      date
      lastPaymentDate
      monthsToPay
      nonRegisteredClientID
      pendingToPay
      salesOperationInventoryOperationIDId
      salesOperationType
      status
      termDaysToPay
      total
      totalCash
      totalCommission
      totalPayments
      currentTotalPayments
      userInfoID
      createdAt
      updatedAt
    }
  }
`;

//? UPDATE MUTATION
export const updateCreditsAPI = /* GraphQL */ `
  mutation UpdateCredits(
    $input: UpdateCreditsInput!
    $condition: ModelCreditsConditionInput
  ) {
    updateCredits(input: $input, condition: $condition) {
      id
      creditsClientId
      credit_available
      outstanding_balance
      createdAt
      updatedAt
    }
  }
`;

//? UPDATE MUTATION
export const updateClientAmountCreditAPI = /* GraphQL */ `
  mutation UpdateCredits(
    $input: UpdateCreditsInput!
    $condition: ModelCreditsConditionInput
  ) {
    updateCredits(input: $input, condition: $condition) {
      id
      totalCredit
      credit_available
      createdAt
      updatedAt
    }
  }
`;

//? UPDATE MUTATION
export const updateClientHasCreditAPI = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
      id
      hasCredit
      createdAt
      updatedAt
    }
  }
`;

export const updateClientHasCreditAndRequestAPI = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
      id
      hasCredit
      hasCreditRequest
      createdAt
      updatedAt
    }
  }
`;

//? DELETE MUTATION
export const deleteProviderAPI = /* GraphQL */ `
  mutation DeleteProvider(
    $input: DeleteProviderInput!
    $condition: ModelProviderConditionInput
  ) {
    deleteProvider(input: $input, condition: $condition) {
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
    }
  }
`;

//? DELETE MUTATION
export const deleteProductAPI = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      class_id
      category_id
      subcategory_id
      name
      description
      price
      commission
      hasCommission
      productProviderID
      hasDiscount
      inventoryProduct {
        items {
          id
        }
      }
      createdAt
      updatedAt
    }
  }
`;

//? CREATE MUTATION
export const createInventoryProductAPI = /* GraphQL */ `
  mutation CreateInventoryProduct(
    $input: CreateInventoryProductInput!
    $condition: ModelInventoryProductConditionInput
  ) {
    createInventoryProduct(input: $input, condition: $condition) {
      id
      inventoryID
      productID
      quantity
      customPrice
      generalPrice
      createdAt
      updatedAt
    }
  }
`;

//? DELETE MUTATION
export const deleteInventoryProductAPI = /* GraphQL */ `
  mutation DeleteInventoryProduct(
    $input: DeleteInventoryProductInput!
    $condition: ModelInventoryProductConditionInput
  ) {
    deleteInventoryProduct(input: $input, condition: $condition) {
      id
      inventoryID
      productID
      quantity
      customPrice
      generalPrice
      createdAt
      updatedAt
    }
  }
`;

//? DELETE MUTATION
export const deleteProductProviderAPI = /* GraphQL */ `
  mutation DeleteProductProvider(
    $input: DeleteProductProviderInput!
    $condition: ModelProductProviderConditionInput
  ) {
    deleteProductProvider(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      productProviderProviderIDId
    }
  }
`;

//? UPDATE MUTATION
export const updateInventoryProductGeneralPriceAPI = /* GraphQL */ `
  mutation UpdateInventoryProduct(
    $input: UpdateInventoryProductInput!
    $condition: ModelInventoryProductConditionInput
  ) {
    updateInventoryProduct(input: $input, condition: $condition) {
      id
      generalPrice
    }
  }
`;

//? CREATE MUTATION
export const createInventoryAPI = /* GraphQL */ `
  mutation CreateInventory(
    $input: CreateInventoryInput!
    $condition: ModelInventoryConditionInput
  ) {
    createInventory(input: $input, condition: $condition) {
      id
      name
      branchOfficeID
      isMain
    }
  }
`;

//? CREATE MUTATION
export const createNonRegisteredClientAPI = /* GraphQL */ `
  mutation CreateNonRegisteredClient(
    $input: CreateNonRegisteredClientInput!
    $condition: ModelNonRegisteredClientConditionInput
  ) {
    createNonRegisteredClient(input: $input, condition: $condition) {
      id
      fullName
      createdAt
      updatedAt
      nonRegisteredClientSaleOperationId
    }
  }
`;

//? CREATE MUTATION
export const createSalesOperationInventoryProductQuantityAPI = /* GraphQL */ `
  mutation CreateSalesOperationInventoryProductQuantity(
    $input: CreateSalesOperationInventoryProductQuantityInput!
    $condition: ModelSalesOperationInventoryProductQuantityConditionInput
  ) {
    createSalesOperationInventoryProductQuantity(
      input: $input
      condition: $condition
    ) {
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
    }
  }
`;

//? CREATE MUTATION
export const createInventoryProductSalesOperationAPI = /* GraphQL */ `
  mutation CreateInventoryProductSalesOperation(
    $input: CreateInventoryProductSalesOperationInput!
    $condition: ModelInventoryProductSalesOperationConditionInput
  ) {
    createInventoryProductSalesOperation(input: $input, condition: $condition) {
      id
      inventoryProductId
      salesOperationInventoryProductQuantityId
      createdAt
      updatedAt
    }
  }
`;

//? CREATE MUTATION
export const updateInventoryProductCustomPriceAPI = /* GraphQL */ `
  mutation UpdateInventoryProduct(
    $input: UpdateInventoryProductInput!
    $condition: ModelInventoryProductConditionInput
  ) {
    updateInventoryProduct(input: $input, condition: $condition) {
      id
      customPrice
      createdAt
      updatedAt
    }
  }
`;

//? CREATE MUTATION
export const createSalesOperationClientCreditMovementsAPI = /* GraphQL */ `
  mutation CreateSalesOperationClientCreditMovements(
    $input: CreateSalesOperationClientCreditMovementsInput!
    $condition: ModelSalesOperationClientCreditMovementsConditionInput
  ) {
    createSalesOperationClientCreditMovements(
      input: $input
      condition: $condition
    ) {
      id
      amountPaid
      clientID
      salesOperationID
      paymentDate
      amountToPay
      pendingToPay
      numberOfPayment
      status
      createdAt
      updatedAt
    }
  }
`;

//? CREATE MUTATION
export const createCreditRequestsAPI = /* GraphQL */ `
  mutation CreateCreditRequests(
    $input: CreateCreditRequestsInput!
    $condition: ModelCreditRequestsConditionInput
  ) {
    createCreditRequests(input: $input, condition: $condition) {
      id
      clientID
      creditRequestAmount
      creditRequestStatus
      creditRequestReason
      createdAt
      updatedAt
    }
  }
`;

//? UPDATE MUTATION

export const updateCreditRequestsAPI = /* GraphQL */ `
  mutation UpdateCreditRequests(
    $input: UpdateCreditRequestsInput!
    $condition: ModelCreditRequestsConditionInput
  ) {
    updateCreditRequests(input: $input, condition: $condition) {
      id
      creditRequestStatus
      createdAt
      updatedAt
    }
  }
`;

//? CREATE MUTATION
export const createCreditsAPI = /* GraphQL */ `
  mutation CreateCredits(
    $input: CreateCreditsInput!
    $condition: ModelCreditsConditionInput
  ) {
    createCredits(input: $input, condition: $condition) {
      id
      creditsClientId
      totalCredit
      credit_available
      outstanding_balance
      payment_status
      last_payment_date
      startDate
      createdAt
      updatedAt
    }
  }
`;

//? UPDATE MUTATION
export const updateClientHasCreditRequestAPI = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
      id
      creditID
      hasCreditRequest
      createdAt
      updatedAt
    }
  }
`;

//? UPDATE MUTATION
export const updateSalesOperationPaymentAPI = /* GraphQL */ `
  mutation UpdateSalesOperation(
    $input: UpdateSalesOperationInput!
    $condition: ModelSalesOperationConditionInput
  ) {
    updateSalesOperation(input: $input, condition: $condition) {
      id
      date
      pendingToPay
      amountPaid
      lastDatePaid
      currentTotalPayments
    }
  }
`;

export const updateSalesOperationClientCreditMovementPaymentAPI = /* GraphQL */ `
  mutation UpdateSalesOperationClientCreditMovements(
    $input: UpdateSalesOperationClientCreditMovementsInput!
    $condition: ModelSalesOperationClientCreditMovementsConditionInput
  ) {
    updateSalesOperationClientCreditMovements(
      input: $input
      condition: $condition
    ) {
      id
      paymentDate
      datePaid
      amountToPay
      pendingToPay
      amountPaid
      status
    }
  }
`;

//? UPDATE MUTATION
export const updateSalesOperationStatusAPI = /* GraphQL */ `
  mutation UpdateSalesOperation(
    $input: UpdateSalesOperationInput!
    $condition: ModelSalesOperationConditionInput
  ) {
    updateSalesOperation(input: $input, condition: $condition) {
      id
      status
      createdAt
      updatedAt
    }
  }
`;

//? CREATE MUTATION
export const createSalesOperationCustomerSubscriptionAPI = /* GraphQL */ `
  mutation CreateSalesOperationCustomerSubscription(
    $input: CreateSalesOperationCustomerSubscriptionInput!
    $condition: ModelSalesOperationCustomerSubscriptionConditionInput
  ) {
    createSalesOperationCustomerSubscription(
      input: $input
      condition: $condition
    ) {
      id
      salesOperationID
      clientID
      date
      advancePayment
    }
  }
`;

//? UPDATE MUTATION
export const updateBranchOfficeCommissionAPI = /* GraphQL */ `
  mutation UpdateBranchOffice(
    $input: UpdateBranchOfficeInput!
    $condition: ModelBranchOfficeConditionInput
  ) {
    updateBranchOffice(input: $input, condition: $condition) {
      id
      branchOffice_commission
      createdAt
      updatedAt
    }
  }
`;

//? CREATE MUTATION
export const createClassAPI = /* GraphQL */ `
  mutation CreateClass(
    $input: CreateClassInput!
    $condition: ModelClassConditionInput
  ) {
    createClass(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;

//? CREATE MUTATION
export const createCategoryAPI = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;

//? CREATE MUTATION
export const createSubCategoryAPI = /* GraphQL */ `
  mutation CreateSubCategory(
    $input: CreateSubCategoryInput!
    $condition: ModelSubCategoryConditionInput
  ) {
    createSubCategory(input: $input, condition: $condition) {
      id
      categoryID
      subcategory_name
      createdAt
      updatedAt
      __typename
    }
  }
`;
