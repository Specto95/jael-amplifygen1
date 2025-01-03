/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      subcategories {
        items {
          id
          categoryID
          subcategory_name
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      subcategories {
        items {
          id
          categoryID
          subcategory_name
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      subcategories {
        items {
          id
          categoryID
          subcategory_name
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createSubCategory = /* GraphQL */ `
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
export const updateSubCategory = /* GraphQL */ `
  mutation UpdateSubCategory(
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
`;
export const deleteSubCategory = /* GraphQL */ `
  mutation DeleteSubCategory(
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
`;
export const createClass = /* GraphQL */ `
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
export const updateClass = /* GraphQL */ `
  mutation UpdateClass(
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
`;
export const deleteClass = /* GraphQL */ `
  mutation DeleteClass(
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
`;
export const createClient = /* GraphQL */ `
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
      salesOperation {
        items {
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
        nextToken
        __typename
      }
      creditID
      credit {
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
      creditRequests {
        items {
          id
          clientID
          creditRequestAmount
          creditRequestStatus
          creditRequestReason
          createdAt
          updatedAt
          __typename
        }
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
        inventories {
          nextToken
          __typename
        }
        isMain
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
        incomeInventories {
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
      hasCredit
      hasCreditRequest
      returnsInventory {
        items {
          id
          userInfoID
          clientID
          comments
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      salesOperationClientCreditMovements {
        items {
          id
          salesOperationID
          paymentDate
          datePaid
          amountToPay
          pendingToPay
          amountPaid
          status
          numberOfPayment
          clientID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      salesOperationClientCreditFirstLastPayment {
        items {
          id
          salesOperationID
          startDate
          endDate
          clientID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      salesOperationCustomerSubscription {
        items {
          id
          salesOperationID
          clientID
          date
          advancePayment
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
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
        items {
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
        nextToken
        __typename
      }
      creditID
      credit {
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
      creditRequests {
        items {
          id
          clientID
          creditRequestAmount
          creditRequestStatus
          creditRequestReason
          createdAt
          updatedAt
          __typename
        }
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
        inventories {
          nextToken
          __typename
        }
        isMain
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
        incomeInventories {
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
      hasCredit
      hasCreditRequest
      returnsInventory {
        items {
          id
          userInfoID
          clientID
          comments
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      salesOperationClientCreditMovements {
        items {
          id
          salesOperationID
          paymentDate
          datePaid
          amountToPay
          pendingToPay
          amountPaid
          status
          numberOfPayment
          clientID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      salesOperationClientCreditFirstLastPayment {
        items {
          id
          salesOperationID
          startDate
          endDate
          clientID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      salesOperationCustomerSubscription {
        items {
          id
          salesOperationID
          clientID
          date
          advancePayment
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
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
        items {
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
        nextToken
        __typename
      }
      creditID
      credit {
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
      creditRequests {
        items {
          id
          clientID
          creditRequestAmount
          creditRequestStatus
          creditRequestReason
          createdAt
          updatedAt
          __typename
        }
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
        inventories {
          nextToken
          __typename
        }
        isMain
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
        incomeInventories {
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
      hasCredit
      hasCreditRequest
      returnsInventory {
        items {
          id
          userInfoID
          clientID
          comments
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      salesOperationClientCreditMovements {
        items {
          id
          salesOperationID
          paymentDate
          datePaid
          amountToPay
          pendingToPay
          amountPaid
          status
          numberOfPayment
          clientID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      salesOperationClientCreditFirstLastPayment {
        items {
          id
          salesOperationID
          startDate
          endDate
          clientID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      salesOperationCustomerSubscription {
        items {
          id
          salesOperationID
          clientID
          date
          advancePayment
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createNonRegisteredClient = /* GraphQL */ `
  mutation CreateNonRegisteredClient(
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
          inventoryOperationOutcomeInventoryId
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
      createdAt
      updatedAt
      nonRegisteredClientSaleOperationId
      __typename
    }
  }
`;
export const updateNonRegisteredClient = /* GraphQL */ `
  mutation UpdateNonRegisteredClient(
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
          inventoryOperationOutcomeInventoryId
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
      createdAt
      updatedAt
      nonRegisteredClientSaleOperationId
      __typename
    }
  }
`;
export const deleteNonRegisteredClient = /* GraphQL */ `
  mutation DeleteNonRegisteredClient(
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
          inventoryOperationOutcomeInventoryId
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
      createdAt
      updatedAt
      nonRegisteredClientSaleOperationId
      __typename
    }
  }
`;
export const createCredits = /* GraphQL */ `
  mutation CreateCredits(
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
`;
export const updateCredits = /* GraphQL */ `
  mutation UpdateCredits(
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
`;
export const deleteCredits = /* GraphQL */ `
  mutation DeleteCredits(
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
`;
export const createCreditRequests = /* GraphQL */ `
  mutation CreateCreditRequests(
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
      creditRequestAmount
      creditRequestStatus
      creditRequestReason
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCreditRequests = /* GraphQL */ `
  mutation UpdateCreditRequests(
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
      creditRequestAmount
      creditRequestStatus
      creditRequestReason
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCreditRequests = /* GraphQL */ `
  mutation DeleteCreditRequests(
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
      creditRequestAmount
      creditRequestStatus
      creditRequestReason
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createProduct = /* GraphQL */ `
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
        subcategories {
          nextToken
          __typename
        }
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
      inventoryProduct {
        items {
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProduct = /* GraphQL */ `
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
        subcategories {
          nextToken
          __typename
        }
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
      inventoryProduct {
        items {
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
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
        subcategories {
          nextToken
          __typename
        }
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
      inventoryProduct {
        items {
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createInventoryOperation = /* GraphQL */ `
  mutation CreateInventoryOperation(
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
      incomeInventory {
        id
        date
        comments
        inventoryOperationID {
          id
          operationType
          inventoryID
          createdAt
          updatedAt
          inventoryOperationIncomeInventoryId
          inventoryOperationOutcomeInventoryId
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
      outcomeInventory {
        id
        date
        comments
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
          inventoryOperationOutcomeInventoryId
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
      salesOperation {
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
          inventoryOperationOutcomeInventoryId
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
      createdAt
      updatedAt
      inventoryOperationIncomeInventoryId
      inventoryOperationOutcomeInventoryId
      inventoryOperationSalesOperationId
      __typename
    }
  }
`;
export const updateInventoryOperation = /* GraphQL */ `
  mutation UpdateInventoryOperation(
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
      incomeInventory {
        id
        date
        comments
        inventoryOperationID {
          id
          operationType
          inventoryID
          createdAt
          updatedAt
          inventoryOperationIncomeInventoryId
          inventoryOperationOutcomeInventoryId
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
      outcomeInventory {
        id
        date
        comments
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
          inventoryOperationOutcomeInventoryId
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
      salesOperation {
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
          inventoryOperationOutcomeInventoryId
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
      createdAt
      updatedAt
      inventoryOperationIncomeInventoryId
      inventoryOperationOutcomeInventoryId
      inventoryOperationSalesOperationId
      __typename
    }
  }
`;
export const deleteInventoryOperation = /* GraphQL */ `
  mutation DeleteInventoryOperation(
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
      incomeInventory {
        id
        date
        comments
        inventoryOperationID {
          id
          operationType
          inventoryID
          createdAt
          updatedAt
          inventoryOperationIncomeInventoryId
          inventoryOperationOutcomeInventoryId
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
      outcomeInventory {
        id
        date
        comments
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
          inventoryOperationOutcomeInventoryId
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
      salesOperation {
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
          inventoryOperationOutcomeInventoryId
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
      createdAt
      updatedAt
      inventoryOperationIncomeInventoryId
      inventoryOperationOutcomeInventoryId
      inventoryOperationSalesOperationId
      __typename
    }
  }
`;
export const createIncomeInventory = /* GraphQL */ `
  mutation CreateIncomeInventory(
    $input: CreateIncomeInventoryInput!
    $condition: ModelIncomeInventoryConditionInput
  ) {
    createIncomeInventory(input: $input, condition: $condition) {
      id
      date
      comments
      inventoryOperationID {
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
          providerID
          productProviderResponsibleID
          userInfoID
          branchOfficeID
          createdAt
          updatedAt
          incomeInventoryInventoryOperationIDId
          __typename
        }
        outcomeInventory {
          id
          date
          comments
          userInfoID
          branchOfficeID
          createdAt
          updatedAt
          outcomeInventoryInventoryOperationIDId
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
        inventoryOperationOutcomeInventoryId
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
        incomeInventories {
          nextToken
          __typename
        }
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
        outcomeInventories {
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
        inventories {
          nextToken
          __typename
        }
        isMain
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
        incomeInventories {
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
      incomeInventoryProductQuantities {
        items {
          id
          incomeQuantity
          incomeInventoryID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      incomeInventoryInventoryOperationIDId
      __typename
    }
  }
`;
export const updateIncomeInventory = /* GraphQL */ `
  mutation UpdateIncomeInventory(
    $input: UpdateIncomeInventoryInput!
    $condition: ModelIncomeInventoryConditionInput
  ) {
    updateIncomeInventory(input: $input, condition: $condition) {
      id
      date
      comments
      inventoryOperationID {
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
          providerID
          productProviderResponsibleID
          userInfoID
          branchOfficeID
          createdAt
          updatedAt
          incomeInventoryInventoryOperationIDId
          __typename
        }
        outcomeInventory {
          id
          date
          comments
          userInfoID
          branchOfficeID
          createdAt
          updatedAt
          outcomeInventoryInventoryOperationIDId
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
        inventoryOperationOutcomeInventoryId
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
        incomeInventories {
          nextToken
          __typename
        }
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
        outcomeInventories {
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
        inventories {
          nextToken
          __typename
        }
        isMain
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
        incomeInventories {
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
      incomeInventoryProductQuantities {
        items {
          id
          incomeQuantity
          incomeInventoryID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      incomeInventoryInventoryOperationIDId
      __typename
    }
  }
`;
export const deleteIncomeInventory = /* GraphQL */ `
  mutation DeleteIncomeInventory(
    $input: DeleteIncomeInventoryInput!
    $condition: ModelIncomeInventoryConditionInput
  ) {
    deleteIncomeInventory(input: $input, condition: $condition) {
      id
      date
      comments
      inventoryOperationID {
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
          providerID
          productProviderResponsibleID
          userInfoID
          branchOfficeID
          createdAt
          updatedAt
          incomeInventoryInventoryOperationIDId
          __typename
        }
        outcomeInventory {
          id
          date
          comments
          userInfoID
          branchOfficeID
          createdAt
          updatedAt
          outcomeInventoryInventoryOperationIDId
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
        inventoryOperationOutcomeInventoryId
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
        incomeInventories {
          nextToken
          __typename
        }
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
        outcomeInventories {
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
        inventories {
          nextToken
          __typename
        }
        isMain
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
        incomeInventories {
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
      incomeInventoryProductQuantities {
        items {
          id
          incomeQuantity
          incomeInventoryID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      incomeInventoryInventoryOperationIDId
      __typename
    }
  }
`;
export const createIncomeInventoryProductQuantity = /* GraphQL */ `
  mutation CreateIncomeInventoryProductQuantity(
    $input: CreateIncomeInventoryProductQuantityInput!
    $condition: ModelIncomeInventoryProductQuantityConditionInput
  ) {
    createIncomeInventoryProductQuantity(input: $input, condition: $condition) {
      id
      incomeQuantity
      inventoryProducts {
        items {
          id
          incomeInventoryProductQuantityId
          inventoryProductId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      incomeInventoryID
      incomeInventory {
        id
        date
        comments
        inventoryOperationID {
          id
          operationType
          inventoryID
          createdAt
          updatedAt
          inventoryOperationIncomeInventoryId
          inventoryOperationOutcomeInventoryId
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateIncomeInventoryProductQuantity = /* GraphQL */ `
  mutation UpdateIncomeInventoryProductQuantity(
    $input: UpdateIncomeInventoryProductQuantityInput!
    $condition: ModelIncomeInventoryProductQuantityConditionInput
  ) {
    updateIncomeInventoryProductQuantity(input: $input, condition: $condition) {
      id
      incomeQuantity
      inventoryProducts {
        items {
          id
          incomeInventoryProductQuantityId
          inventoryProductId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      incomeInventoryID
      incomeInventory {
        id
        date
        comments
        inventoryOperationID {
          id
          operationType
          inventoryID
          createdAt
          updatedAt
          inventoryOperationIncomeInventoryId
          inventoryOperationOutcomeInventoryId
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteIncomeInventoryProductQuantity = /* GraphQL */ `
  mutation DeleteIncomeInventoryProductQuantity(
    $input: DeleteIncomeInventoryProductQuantityInput!
    $condition: ModelIncomeInventoryProductQuantityConditionInput
  ) {
    deleteIncomeInventoryProductQuantity(input: $input, condition: $condition) {
      id
      incomeQuantity
      inventoryProducts {
        items {
          id
          incomeInventoryProductQuantityId
          inventoryProductId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      incomeInventoryID
      incomeInventory {
        id
        date
        comments
        inventoryOperationID {
          id
          operationType
          inventoryID
          createdAt
          updatedAt
          inventoryOperationIncomeInventoryId
          inventoryOperationOutcomeInventoryId
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createOutcomeInventory = /* GraphQL */ `
  mutation CreateOutcomeInventory(
    $input: CreateOutcomeInventoryInput!
    $condition: ModelOutcomeInventoryConditionInput
  ) {
    createOutcomeInventory(input: $input, condition: $condition) {
      id
      date
      comments
      userInfoID
      userInfo {
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
        outcomeInventories {
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
        inventories {
          nextToken
          __typename
        }
        isMain
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
        incomeInventories {
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
      inventoryOperationID {
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
          providerID
          productProviderResponsibleID
          userInfoID
          branchOfficeID
          createdAt
          updatedAt
          incomeInventoryInventoryOperationIDId
          __typename
        }
        outcomeInventory {
          id
          date
          comments
          userInfoID
          branchOfficeID
          createdAt
          updatedAt
          outcomeInventoryInventoryOperationIDId
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
        inventoryOperationOutcomeInventoryId
        inventoryOperationSalesOperationId
        __typename
      }
      outcomeInventoryProductQuantities {
        items {
          id
          outcomeQuantity
          outcomeInventoryID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      outcomeInventoryInventoryOperationIDId
      __typename
    }
  }
`;
export const updateOutcomeInventory = /* GraphQL */ `
  mutation UpdateOutcomeInventory(
    $input: UpdateOutcomeInventoryInput!
    $condition: ModelOutcomeInventoryConditionInput
  ) {
    updateOutcomeInventory(input: $input, condition: $condition) {
      id
      date
      comments
      userInfoID
      userInfo {
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
        outcomeInventories {
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
        inventories {
          nextToken
          __typename
        }
        isMain
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
        incomeInventories {
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
      inventoryOperationID {
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
          providerID
          productProviderResponsibleID
          userInfoID
          branchOfficeID
          createdAt
          updatedAt
          incomeInventoryInventoryOperationIDId
          __typename
        }
        outcomeInventory {
          id
          date
          comments
          userInfoID
          branchOfficeID
          createdAt
          updatedAt
          outcomeInventoryInventoryOperationIDId
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
        inventoryOperationOutcomeInventoryId
        inventoryOperationSalesOperationId
        __typename
      }
      outcomeInventoryProductQuantities {
        items {
          id
          outcomeQuantity
          outcomeInventoryID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      outcomeInventoryInventoryOperationIDId
      __typename
    }
  }
`;
export const deleteOutcomeInventory = /* GraphQL */ `
  mutation DeleteOutcomeInventory(
    $input: DeleteOutcomeInventoryInput!
    $condition: ModelOutcomeInventoryConditionInput
  ) {
    deleteOutcomeInventory(input: $input, condition: $condition) {
      id
      date
      comments
      userInfoID
      userInfo {
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
        outcomeInventories {
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
        inventories {
          nextToken
          __typename
        }
        isMain
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
        incomeInventories {
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
      inventoryOperationID {
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
          providerID
          productProviderResponsibleID
          userInfoID
          branchOfficeID
          createdAt
          updatedAt
          incomeInventoryInventoryOperationIDId
          __typename
        }
        outcomeInventory {
          id
          date
          comments
          userInfoID
          branchOfficeID
          createdAt
          updatedAt
          outcomeInventoryInventoryOperationIDId
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
        inventoryOperationOutcomeInventoryId
        inventoryOperationSalesOperationId
        __typename
      }
      outcomeInventoryProductQuantities {
        items {
          id
          outcomeQuantity
          outcomeInventoryID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      outcomeInventoryInventoryOperationIDId
      __typename
    }
  }
`;
export const createOutcomeInventoryProductQuantity = /* GraphQL */ `
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
      inventoryProducts {
        items {
          id
          outcomeInventoryProductQuantityId
          inventoryProductId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      outcomeInventoryID
      outcomeInventory {
        id
        date
        comments
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
          inventoryOperationOutcomeInventoryId
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateOutcomeInventoryProductQuantity = /* GraphQL */ `
  mutation UpdateOutcomeInventoryProductQuantity(
    $input: UpdateOutcomeInventoryProductQuantityInput!
    $condition: ModelOutcomeInventoryProductQuantityConditionInput
  ) {
    updateOutcomeInventoryProductQuantity(
      input: $input
      condition: $condition
    ) {
      id
      outcomeQuantity
      inventoryProducts {
        items {
          id
          outcomeInventoryProductQuantityId
          inventoryProductId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      outcomeInventoryID
      outcomeInventory {
        id
        date
        comments
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
          inventoryOperationOutcomeInventoryId
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteOutcomeInventoryProductQuantity = /* GraphQL */ `
  mutation DeleteOutcomeInventoryProductQuantity(
    $input: DeleteOutcomeInventoryProductQuantityInput!
    $condition: ModelOutcomeInventoryProductQuantityConditionInput
  ) {
    deleteOutcomeInventoryProductQuantity(
      input: $input
      condition: $condition
    ) {
      id
      outcomeQuantity
      inventoryProducts {
        items {
          id
          outcomeInventoryProductQuantityId
          inventoryProductId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      outcomeInventoryID
      outcomeInventory {
        id
        date
        comments
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
          inventoryOperationOutcomeInventoryId
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createReturnsInventory = /* GraphQL */ `
  mutation CreateReturnsInventory(
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
        outcomeInventories {
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
      comments
      inventoryProducts {
        items {
          id
          returnsInventoryId
          inventoryProductId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateReturnsInventory = /* GraphQL */ `
  mutation UpdateReturnsInventory(
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
        outcomeInventories {
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
      comments
      inventoryProducts {
        items {
          id
          returnsInventoryId
          inventoryProductId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteReturnsInventory = /* GraphQL */ `
  mutation DeleteReturnsInventory(
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
        outcomeInventories {
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
      comments
      inventoryProducts {
        items {
          id
          returnsInventoryId
          inventoryProductId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createRole = /* GraphQL */ `
  mutation CreateRole(
    $input: CreateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    createRole(input: $input, condition: $condition) {
      id
      name
      description
      user {
        items {
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateRole = /* GraphQL */ `
  mutation UpdateRole(
    $input: UpdateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    updateRole(input: $input, condition: $condition) {
      id
      name
      description
      user {
        items {
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteRole = /* GraphQL */ `
  mutation DeleteRole(
    $input: DeleteRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    deleteRole(input: $input, condition: $condition) {
      id
      name
      description
      user {
        items {
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
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
        user {
          nextToken
          __typename
        }
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
        outcomeInventories {
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
      hasBranchOffice
      branchOffice {
        items {
          id
          userId
          branchOfficeId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userUserInfoId
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
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
        user {
          nextToken
          __typename
        }
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
        outcomeInventories {
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
      hasBranchOffice
      branchOffice {
        items {
          id
          userId
          branchOfficeId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userUserInfoId
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
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
        user {
          nextToken
          __typename
        }
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
        outcomeInventories {
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
      hasBranchOffice
      branchOffice {
        items {
          id
          userId
          branchOfficeId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userUserInfoId
      __typename
    }
  }
`;
export const createUserInfo = /* GraphQL */ `
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
      user {
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
      companyExpenses {
        items {
          id
          name
          description
          costType
          date
          amount
          userInfoID
          branchOfficeID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      salesOperation {
        items {
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
        nextToken
        __typename
      }
      incomeInventories {
        items {
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
          __typename
        }
        nextToken
        __typename
      }
      outcomeInventories {
        items {
          id
          date
          comments
          userInfoID
          branchOfficeID
          createdAt
          updatedAt
          outcomeInventoryInventoryOperationIDId
          __typename
        }
        nextToken
        __typename
      }
      returnsInventory {
        items {
          id
          userInfoID
          clientID
          comments
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userInfoUserId
      __typename
    }
  }
`;
export const updateUserInfo = /* GraphQL */ `
  mutation UpdateUserInfo(
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
      companyExpenses {
        items {
          id
          name
          description
          costType
          date
          amount
          userInfoID
          branchOfficeID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      salesOperation {
        items {
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
        nextToken
        __typename
      }
      incomeInventories {
        items {
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
          __typename
        }
        nextToken
        __typename
      }
      outcomeInventories {
        items {
          id
          date
          comments
          userInfoID
          branchOfficeID
          createdAt
          updatedAt
          outcomeInventoryInventoryOperationIDId
          __typename
        }
        nextToken
        __typename
      }
      returnsInventory {
        items {
          id
          userInfoID
          clientID
          comments
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userInfoUserId
      __typename
    }
  }
`;
export const deleteUserInfo = /* GraphQL */ `
  mutation DeleteUserInfo(
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
      companyExpenses {
        items {
          id
          name
          description
          costType
          date
          amount
          userInfoID
          branchOfficeID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      salesOperation {
        items {
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
        nextToken
        __typename
      }
      incomeInventories {
        items {
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
          __typename
        }
        nextToken
        __typename
      }
      outcomeInventories {
        items {
          id
          date
          comments
          userInfoID
          branchOfficeID
          createdAt
          updatedAt
          outcomeInventoryInventoryOperationIDId
          __typename
        }
        nextToken
        __typename
      }
      returnsInventory {
        items {
          id
          userInfoID
          clientID
          comments
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userInfoUserId
      __typename
    }
  }
`;
export const createInventory = /* GraphQL */ `
  mutation CreateInventory(
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
        inventories {
          nextToken
          __typename
        }
        isMain
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
        incomeInventories {
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
      inventoryOperations {
        items {
          id
          operationType
          inventoryID
          createdAt
          updatedAt
          inventoryOperationIncomeInventoryId
          inventoryOperationOutcomeInventoryId
          inventoryOperationSalesOperationId
          __typename
        }
        nextToken
        __typename
      }
      inventoryProduct {
        items {
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
        nextToken
        __typename
      }
      isMain
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateInventory = /* GraphQL */ `
  mutation UpdateInventory(
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
        inventories {
          nextToken
          __typename
        }
        isMain
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
        incomeInventories {
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
      inventoryOperations {
        items {
          id
          operationType
          inventoryID
          createdAt
          updatedAt
          inventoryOperationIncomeInventoryId
          inventoryOperationOutcomeInventoryId
          inventoryOperationSalesOperationId
          __typename
        }
        nextToken
        __typename
      }
      inventoryProduct {
        items {
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
        nextToken
        __typename
      }
      isMain
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteInventory = /* GraphQL */ `
  mutation DeleteInventory(
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
        inventories {
          nextToken
          __typename
        }
        isMain
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
        incomeInventories {
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
      inventoryOperations {
        items {
          id
          operationType
          inventoryID
          createdAt
          updatedAt
          inventoryOperationIncomeInventoryId
          inventoryOperationOutcomeInventoryId
          inventoryOperationSalesOperationId
          __typename
        }
        nextToken
        __typename
      }
      inventoryProduct {
        items {
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
        nextToken
        __typename
      }
      isMain
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createInventoryProduct = /* GraphQL */ `
  mutation CreateInventoryProduct(
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
      quantity
      customPrice
      generalPrice
      productProviderID
      productProvider {
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
      discounts {
        items {
          id
          inventoryProductId
          discountsId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      inventoryProductIncomeInventory {
        items {
          id
          incomeInventoryProductQuantityId
          inventoryProductId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      inventoryProductOutcomeInventory {
        items {
          id
          outcomeInventoryProductQuantityId
          inventoryProductId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      inventoryProductSalesOperation {
        items {
          id
          inventoryProductId
          salesOperationInventoryProductQuantityId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      returnsInventory {
        items {
          id
          returnsInventoryId
          inventoryProductId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateInventoryProduct = /* GraphQL */ `
  mutation UpdateInventoryProduct(
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
      quantity
      customPrice
      generalPrice
      productProviderID
      productProvider {
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
      discounts {
        items {
          id
          inventoryProductId
          discountsId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      inventoryProductIncomeInventory {
        items {
          id
          incomeInventoryProductQuantityId
          inventoryProductId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      inventoryProductOutcomeInventory {
        items {
          id
          outcomeInventoryProductQuantityId
          inventoryProductId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      inventoryProductSalesOperation {
        items {
          id
          inventoryProductId
          salesOperationInventoryProductQuantityId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      returnsInventory {
        items {
          id
          returnsInventoryId
          inventoryProductId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteInventoryProduct = /* GraphQL */ `
  mutation DeleteInventoryProduct(
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
      quantity
      customPrice
      generalPrice
      productProviderID
      productProvider {
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
      discounts {
        items {
          id
          inventoryProductId
          discountsId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      inventoryProductIncomeInventory {
        items {
          id
          incomeInventoryProductQuantityId
          inventoryProductId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      inventoryProductOutcomeInventory {
        items {
          id
          outcomeInventoryProductQuantityId
          inventoryProductId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      inventoryProductSalesOperation {
        items {
          id
          inventoryProductId
          salesOperationInventoryProductQuantityId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      returnsInventory {
        items {
          id
          returnsInventoryId
          inventoryProductId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createBranchOffice = /* GraphQL */ `
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
      inventories {
        items {
          id
          name
          branchOfficeID
          isMain
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      isMain
      companyExpenses {
        items {
          id
          name
          description
          costType
          date
          amount
          userInfoID
          branchOfficeID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      users {
        items {
          id
          userId
          branchOfficeId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      clients {
        items {
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
        nextToken
        __typename
      }
      outcomeInventories {
        items {
          id
          date
          comments
          userInfoID
          branchOfficeID
          createdAt
          updatedAt
          outcomeInventoryInventoryOperationIDId
          __typename
        }
        nextToken
        __typename
      }
      incomeInventories {
        items {
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
          __typename
        }
        nextToken
        __typename
      }
      salesOperations {
        items {
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBranchOffice = /* GraphQL */ `
  mutation UpdateBranchOffice(
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
        items {
          id
          name
          branchOfficeID
          isMain
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      isMain
      companyExpenses {
        items {
          id
          name
          description
          costType
          date
          amount
          userInfoID
          branchOfficeID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      users {
        items {
          id
          userId
          branchOfficeId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      clients {
        items {
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
        nextToken
        __typename
      }
      outcomeInventories {
        items {
          id
          date
          comments
          userInfoID
          branchOfficeID
          createdAt
          updatedAt
          outcomeInventoryInventoryOperationIDId
          __typename
        }
        nextToken
        __typename
      }
      incomeInventories {
        items {
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
          __typename
        }
        nextToken
        __typename
      }
      salesOperations {
        items {
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBranchOffice = /* GraphQL */ `
  mutation DeleteBranchOffice(
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
        items {
          id
          name
          branchOfficeID
          isMain
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      isMain
      companyExpenses {
        items {
          id
          name
          description
          costType
          date
          amount
          userInfoID
          branchOfficeID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      users {
        items {
          id
          userId
          branchOfficeId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      clients {
        items {
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
        nextToken
        __typename
      }
      outcomeInventories {
        items {
          id
          date
          comments
          userInfoID
          branchOfficeID
          createdAt
          updatedAt
          outcomeInventoryInventoryOperationIDId
          __typename
        }
        nextToken
        __typename
      }
      incomeInventories {
        items {
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
          __typename
        }
        nextToken
        __typename
      }
      salesOperations {
        items {
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createDiscounts = /* GraphQL */ `
  mutation CreateDiscounts(
    $input: CreateDiscountsInput!
    $condition: ModelDiscountsConditionInput
  ) {
    createDiscounts(input: $input, condition: $condition) {
      id
      discount
      inventoryProducts {
        items {
          id
          inventoryProductId
          discountsId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateDiscounts = /* GraphQL */ `
  mutation UpdateDiscounts(
    $input: UpdateDiscountsInput!
    $condition: ModelDiscountsConditionInput
  ) {
    updateDiscounts(input: $input, condition: $condition) {
      id
      discount
      inventoryProducts {
        items {
          id
          inventoryProductId
          discountsId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteDiscounts = /* GraphQL */ `
  mutation DeleteDiscounts(
    $input: DeleteDiscountsInput!
    $condition: ModelDiscountsConditionInput
  ) {
    deleteDiscounts(input: $input, condition: $condition) {
      id
      discount
      inventoryProducts {
        items {
          id
          inventoryProductId
          discountsId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createSalesOperation = /* GraphQL */ `
  mutation CreateSalesOperation(
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
          providerID
          productProviderResponsibleID
          userInfoID
          branchOfficeID
          createdAt
          updatedAt
          incomeInventoryInventoryOperationIDId
          __typename
        }
        outcomeInventory {
          id
          date
          comments
          userInfoID
          branchOfficeID
          createdAt
          updatedAt
          outcomeInventoryInventoryOperationIDId
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
        inventoryOperationOutcomeInventoryId
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
      userInfoID
      userInfo {
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
        outcomeInventories {
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
        inventories {
          nextToken
          __typename
        }
        isMain
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
        incomeInventories {
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
      salesOperationInventoryProductQuantities {
        items {
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
        nextToken
        __typename
      }
      salesOperationClientCreditMovements {
        items {
          id
          salesOperationID
          paymentDate
          datePaid
          amountToPay
          pendingToPay
          amountPaid
          status
          numberOfPayment
          clientID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      salesOperationClientCreditFirstLastPayment {
        items {
          id
          salesOperationID
          startDate
          endDate
          clientID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      salesOperationCustomerSubscription {
        items {
          id
          salesOperationID
          clientID
          date
          advancePayment
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      salesOperationInventoryOperationIDId
      __typename
    }
  }
`;
export const updateSalesOperation = /* GraphQL */ `
  mutation UpdateSalesOperation(
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
          providerID
          productProviderResponsibleID
          userInfoID
          branchOfficeID
          createdAt
          updatedAt
          incomeInventoryInventoryOperationIDId
          __typename
        }
        outcomeInventory {
          id
          date
          comments
          userInfoID
          branchOfficeID
          createdAt
          updatedAt
          outcomeInventoryInventoryOperationIDId
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
        inventoryOperationOutcomeInventoryId
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
      userInfoID
      userInfo {
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
        outcomeInventories {
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
        inventories {
          nextToken
          __typename
        }
        isMain
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
        incomeInventories {
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
      salesOperationInventoryProductQuantities {
        items {
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
        nextToken
        __typename
      }
      salesOperationClientCreditMovements {
        items {
          id
          salesOperationID
          paymentDate
          datePaid
          amountToPay
          pendingToPay
          amountPaid
          status
          numberOfPayment
          clientID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      salesOperationClientCreditFirstLastPayment {
        items {
          id
          salesOperationID
          startDate
          endDate
          clientID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      salesOperationCustomerSubscription {
        items {
          id
          salesOperationID
          clientID
          date
          advancePayment
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      salesOperationInventoryOperationIDId
      __typename
    }
  }
`;
export const deleteSalesOperation = /* GraphQL */ `
  mutation DeleteSalesOperation(
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
          providerID
          productProviderResponsibleID
          userInfoID
          branchOfficeID
          createdAt
          updatedAt
          incomeInventoryInventoryOperationIDId
          __typename
        }
        outcomeInventory {
          id
          date
          comments
          userInfoID
          branchOfficeID
          createdAt
          updatedAt
          outcomeInventoryInventoryOperationIDId
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
        inventoryOperationOutcomeInventoryId
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
      userInfoID
      userInfo {
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
        outcomeInventories {
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
        inventories {
          nextToken
          __typename
        }
        isMain
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
        incomeInventories {
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
      salesOperationInventoryProductQuantities {
        items {
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
        nextToken
        __typename
      }
      salesOperationClientCreditMovements {
        items {
          id
          salesOperationID
          paymentDate
          datePaid
          amountToPay
          pendingToPay
          amountPaid
          status
          numberOfPayment
          clientID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      salesOperationClientCreditFirstLastPayment {
        items {
          id
          salesOperationID
          startDate
          endDate
          clientID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      salesOperationCustomerSubscription {
        items {
          id
          salesOperationID
          clientID
          date
          advancePayment
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      salesOperationInventoryOperationIDId
      __typename
    }
  }
`;
export const createSalesOperationClientCreditFirstLastPayment = /* GraphQL */ `
  mutation CreateSalesOperationClientCreditFirstLastPayment(
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
          inventoryOperationOutcomeInventoryId
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSalesOperationClientCreditFirstLastPayment = /* GraphQL */ `
  mutation UpdateSalesOperationClientCreditFirstLastPayment(
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
          inventoryOperationOutcomeInventoryId
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSalesOperationClientCreditFirstLastPayment = /* GraphQL */ `
  mutation DeleteSalesOperationClientCreditFirstLastPayment(
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
          inventoryOperationOutcomeInventoryId
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createSalesOperationClientCreditMovements = /* GraphQL */ `
  mutation CreateSalesOperationClientCreditMovements(
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
          inventoryOperationOutcomeInventoryId
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSalesOperationClientCreditMovements = /* GraphQL */ `
  mutation UpdateSalesOperationClientCreditMovements(
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
          inventoryOperationOutcomeInventoryId
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSalesOperationClientCreditMovements = /* GraphQL */ `
  mutation DeleteSalesOperationClientCreditMovements(
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
          inventoryOperationOutcomeInventoryId
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createSalesOperationInventoryProductQuantity = /* GraphQL */ `
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
      salesOperation {
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
          inventoryOperationOutcomeInventoryId
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
      inventoryProducts {
        items {
          id
          inventoryProductId
          salesOperationInventoryProductQuantityId
          createdAt
          updatedAt
          __typename
        }
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
`;
export const updateSalesOperationInventoryProductQuantity = /* GraphQL */ `
  mutation UpdateSalesOperationInventoryProductQuantity(
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
          inventoryOperationOutcomeInventoryId
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
      inventoryProducts {
        items {
          id
          inventoryProductId
          salesOperationInventoryProductQuantityId
          createdAt
          updatedAt
          __typename
        }
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
`;
export const deleteSalesOperationInventoryProductQuantity = /* GraphQL */ `
  mutation DeleteSalesOperationInventoryProductQuantity(
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
          inventoryOperationOutcomeInventoryId
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
      inventoryProducts {
        items {
          id
          inventoryProductId
          salesOperationInventoryProductQuantityId
          createdAt
          updatedAt
          __typename
        }
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
`;
export const createCompanyExpenses = /* GraphQL */ `
  mutation CreateCompanyExpenses(
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
        outcomeInventories {
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
        inventories {
          nextToken
          __typename
        }
        isMain
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
        incomeInventories {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCompanyExpenses = /* GraphQL */ `
  mutation UpdateCompanyExpenses(
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
        outcomeInventories {
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
        inventories {
          nextToken
          __typename
        }
        isMain
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
        incomeInventories {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCompanyExpenses = /* GraphQL */ `
  mutation DeleteCompanyExpenses(
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
        outcomeInventories {
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
        inventories {
          nextToken
          __typename
        }
        isMain
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
        incomeInventories {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createSalesOperationCustomerSubscription = /* GraphQL */ `
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
      salesOperation {
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
          inventoryOperationOutcomeInventoryId
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
      date
      advancePayment
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSalesOperationCustomerSubscription = /* GraphQL */ `
  mutation UpdateSalesOperationCustomerSubscription(
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
          inventoryOperationOutcomeInventoryId
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
      date
      advancePayment
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSalesOperationCustomerSubscription = /* GraphQL */ `
  mutation DeleteSalesOperationCustomerSubscription(
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
          inventoryOperationOutcomeInventoryId
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
      date
      advancePayment
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createProvider = /* GraphQL */ `
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
      productprovider {
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
      serviceprovider {
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
      incomeInventories {
        items {
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
          __typename
        }
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
`;
export const updateProvider = /* GraphQL */ `
  mutation UpdateProvider(
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
      serviceprovider {
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
      incomeInventories {
        items {
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
          __typename
        }
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
`;
export const deleteProvider = /* GraphQL */ `
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
      productprovider {
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
      serviceprovider {
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
      incomeInventories {
        items {
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
          __typename
        }
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
`;
export const createProductProvider = /* GraphQL */ `
  mutation CreateProductProvider(
    $input: CreateProductProviderInput!
    $condition: ModelProductProviderConditionInput
  ) {
    createProductProvider(input: $input, condition: $condition) {
      id
      responsible {
        items {
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
        createdAt
        updatedAt
        providerProductproviderId
        providerServiceproviderId
        __typename
      }
      product {
        items {
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
        nextToken
        __typename
      }
      inventoryProduct {
        items {
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      productProviderProviderIDId
      __typename
    }
  }
`;
export const updateProductProvider = /* GraphQL */ `
  mutation UpdateProductProvider(
    $input: UpdateProductProviderInput!
    $condition: ModelProductProviderConditionInput
  ) {
    updateProductProvider(input: $input, condition: $condition) {
      id
      responsible {
        items {
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
        createdAt
        updatedAt
        providerProductproviderId
        providerServiceproviderId
        __typename
      }
      product {
        items {
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
        nextToken
        __typename
      }
      inventoryProduct {
        items {
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      productProviderProviderIDId
      __typename
    }
  }
`;
export const deleteProductProvider = /* GraphQL */ `
  mutation DeleteProductProvider(
    $input: DeleteProductProviderInput!
    $condition: ModelProductProviderConditionInput
  ) {
    deleteProductProvider(input: $input, condition: $condition) {
      id
      responsible {
        items {
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
        createdAt
        updatedAt
        providerProductproviderId
        providerServiceproviderId
        __typename
      }
      product {
        items {
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
        nextToken
        __typename
      }
      inventoryProduct {
        items {
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      productProviderProviderIDId
      __typename
    }
  }
`;
export const createProductProviderResponsible = /* GraphQL */ `
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
      incomeInventories {
        items {
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
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProductProviderResponsible = /* GraphQL */ `
  mutation UpdateProductProviderResponsible(
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
        items {
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
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProductProviderResponsible = /* GraphQL */ `
  mutation DeleteProductProviderResponsible(
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
        items {
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
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createServiceProvider = /* GraphQL */ `
  mutation CreateServiceProvider(
    $input: CreateServiceProviderInput!
    $condition: ModelServiceProviderConditionInput
  ) {
    createServiceProvider(input: $input, condition: $condition) {
      id
      service_name
      service_description
      cost_type
      responsible {
        items {
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
`;
export const updateServiceProvider = /* GraphQL */ `
  mutation UpdateServiceProvider(
    $input: UpdateServiceProviderInput!
    $condition: ModelServiceProviderConditionInput
  ) {
    updateServiceProvider(input: $input, condition: $condition) {
      id
      service_name
      service_description
      cost_type
      responsible {
        items {
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
`;
export const deleteServiceProvider = /* GraphQL */ `
  mutation DeleteServiceProvider(
    $input: DeleteServiceProviderInput!
    $condition: ModelServiceProviderConditionInput
  ) {
    deleteServiceProvider(input: $input, condition: $condition) {
      id
      service_name
      service_description
      cost_type
      responsible {
        items {
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
`;
export const createServiceProviderResponsible = /* GraphQL */ `
  mutation CreateServiceProviderResponsible(
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
`;
export const updateServiceProviderResponsible = /* GraphQL */ `
  mutation UpdateServiceProviderResponsible(
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
`;
export const deleteServiceProviderResponsible = /* GraphQL */ `
  mutation DeleteServiceProviderResponsible(
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
`;
export const createInventoryProductIncomeInventory = /* GraphQL */ `
  mutation CreateInventoryProductIncomeInventory(
    $input: CreateInventoryProductIncomeInventoryInput!
    $condition: ModelInventoryProductIncomeInventoryConditionInput
  ) {
    createInventoryProductIncomeInventory(
      input: $input
      condition: $condition
    ) {
      id
      incomeInventoryProductQuantityId
      inventoryProductId
      incomeInventoryProductQuantity {
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
      inventoryProduct {
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
        inventoryProductOutcomeInventory {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateInventoryProductIncomeInventory = /* GraphQL */ `
  mutation UpdateInventoryProductIncomeInventory(
    $input: UpdateInventoryProductIncomeInventoryInput!
    $condition: ModelInventoryProductIncomeInventoryConditionInput
  ) {
    updateInventoryProductIncomeInventory(
      input: $input
      condition: $condition
    ) {
      id
      incomeInventoryProductQuantityId
      inventoryProductId
      incomeInventoryProductQuantity {
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
      inventoryProduct {
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
        inventoryProductOutcomeInventory {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteInventoryProductIncomeInventory = /* GraphQL */ `
  mutation DeleteInventoryProductIncomeInventory(
    $input: DeleteInventoryProductIncomeInventoryInput!
    $condition: ModelInventoryProductIncomeInventoryConditionInput
  ) {
    deleteInventoryProductIncomeInventory(
      input: $input
      condition: $condition
    ) {
      id
      incomeInventoryProductQuantityId
      inventoryProductId
      incomeInventoryProductQuantity {
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
      inventoryProduct {
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
        inventoryProductOutcomeInventory {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createInventoryProductOutcomeInventory = /* GraphQL */ `
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
      outcomeInventoryProductQuantity {
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
      inventoryProduct {
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
        inventoryProductOutcomeInventory {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateInventoryProductOutcomeInventory = /* GraphQL */ `
  mutation UpdateInventoryProductOutcomeInventory(
    $input: UpdateInventoryProductOutcomeInventoryInput!
    $condition: ModelInventoryProductOutcomeInventoryConditionInput
  ) {
    updateInventoryProductOutcomeInventory(
      input: $input
      condition: $condition
    ) {
      id
      outcomeInventoryProductQuantityId
      inventoryProductId
      outcomeInventoryProductQuantity {
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
      inventoryProduct {
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
        inventoryProductOutcomeInventory {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteInventoryProductOutcomeInventory = /* GraphQL */ `
  mutation DeleteInventoryProductOutcomeInventory(
    $input: DeleteInventoryProductOutcomeInventoryInput!
    $condition: ModelInventoryProductOutcomeInventoryConditionInput
  ) {
    deleteInventoryProductOutcomeInventory(
      input: $input
      condition: $condition
    ) {
      id
      outcomeInventoryProductQuantityId
      inventoryProductId
      outcomeInventoryProductQuantity {
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
      inventoryProduct {
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
        inventoryProductOutcomeInventory {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createInventoryProductReturnsInventory = /* GraphQL */ `
  mutation CreateInventoryProductReturnsInventory(
    $input: CreateInventoryProductReturnsInventoryInput!
    $condition: ModelInventoryProductReturnsInventoryConditionInput
  ) {
    createInventoryProductReturnsInventory(
      input: $input
      condition: $condition
    ) {
      id
      returnsInventoryId
      inventoryProductId
      returnsInventory {
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
      inventoryProduct {
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
        inventoryProductOutcomeInventory {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateInventoryProductReturnsInventory = /* GraphQL */ `
  mutation UpdateInventoryProductReturnsInventory(
    $input: UpdateInventoryProductReturnsInventoryInput!
    $condition: ModelInventoryProductReturnsInventoryConditionInput
  ) {
    updateInventoryProductReturnsInventory(
      input: $input
      condition: $condition
    ) {
      id
      returnsInventoryId
      inventoryProductId
      returnsInventory {
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
      inventoryProduct {
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
        inventoryProductOutcomeInventory {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteInventoryProductReturnsInventory = /* GraphQL */ `
  mutation DeleteInventoryProductReturnsInventory(
    $input: DeleteInventoryProductReturnsInventoryInput!
    $condition: ModelInventoryProductReturnsInventoryConditionInput
  ) {
    deleteInventoryProductReturnsInventory(
      input: $input
      condition: $condition
    ) {
      id
      returnsInventoryId
      inventoryProductId
      returnsInventory {
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
      inventoryProduct {
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
        inventoryProductOutcomeInventory {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createBranchOfficeUser = /* GraphQL */ `
  mutation CreateBranchOfficeUser(
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
      branchOffice {
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
        incomeInventories {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBranchOfficeUser = /* GraphQL */ `
  mutation UpdateBranchOfficeUser(
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
      branchOffice {
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
        incomeInventories {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBranchOfficeUser = /* GraphQL */ `
  mutation DeleteBranchOfficeUser(
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
      branchOffice {
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
        incomeInventories {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createDiscountInventoryProduct = /* GraphQL */ `
  mutation CreateDiscountInventoryProduct(
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
        inventoryProductOutcomeInventory {
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
      discounts {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateDiscountInventoryProduct = /* GraphQL */ `
  mutation UpdateDiscountInventoryProduct(
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
        inventoryProductOutcomeInventory {
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
      discounts {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteDiscountInventoryProduct = /* GraphQL */ `
  mutation DeleteDiscountInventoryProduct(
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
        inventoryProductOutcomeInventory {
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
      discounts {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createInventoryProductSalesOperation = /* GraphQL */ `
  mutation CreateInventoryProductSalesOperation(
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
        inventoryProductOutcomeInventory {
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
      salesOperationInventoryProductQuantity {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateInventoryProductSalesOperation = /* GraphQL */ `
  mutation UpdateInventoryProductSalesOperation(
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
        inventoryProductOutcomeInventory {
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
      salesOperationInventoryProductQuantity {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteInventoryProductSalesOperation = /* GraphQL */ `
  mutation DeleteInventoryProductSalesOperation(
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
        inventoryProductOutcomeInventory {
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
      salesOperationInventoryProductQuantity {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;

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
`;

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
`;

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