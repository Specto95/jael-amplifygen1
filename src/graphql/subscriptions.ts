/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
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
export const onCreateSubCategory = /* GraphQL */ `
  subscription OnCreateSubCategory(
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
`;
export const onUpdateSubCategory = /* GraphQL */ `
  subscription OnUpdateSubCategory(
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
`;
export const onDeleteSubCategory = /* GraphQL */ `
  subscription OnDeleteSubCategory(
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
`;
export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass($filter: ModelSubscriptionClassFilterInput) {
    onCreateClass(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass($filter: ModelSubscriptionClassFilterInput) {
    onUpdateClass(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass($filter: ModelSubscriptionClassFilterInput) {
    onDeleteClass(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient($filter: ModelSubscriptionClientFilterInput) {
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient($filter: ModelSubscriptionClientFilterInput) {
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient($filter: ModelSubscriptionClientFilterInput) {
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
export const onCreateNonRegisteredClient = /* GraphQL */ `
  subscription OnCreateNonRegisteredClient(
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
export const onUpdateNonRegisteredClient = /* GraphQL */ `
  subscription OnUpdateNonRegisteredClient(
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
export const onDeleteNonRegisteredClient = /* GraphQL */ `
  subscription OnDeleteNonRegisteredClient(
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
export const onCreateCredits = /* GraphQL */ `
  subscription OnCreateCredits($filter: ModelSubscriptionCreditsFilterInput) {
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
export const onUpdateCredits = /* GraphQL */ `
  subscription OnUpdateCredits($filter: ModelSubscriptionCreditsFilterInput) {
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
export const onDeleteCredits = /* GraphQL */ `
  subscription OnDeleteCredits($filter: ModelSubscriptionCreditsFilterInput) {
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
export const onCreateCreditRequests = /* GraphQL */ `
  subscription OnCreateCreditRequests(
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
export const onUpdateCreditRequests = /* GraphQL */ `
  subscription OnUpdateCreditRequests(
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
export const onDeleteCreditRequests = /* GraphQL */ `
  subscription OnDeleteCreditRequests(
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
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
export const onCreateInventoryOperation = /* GraphQL */ `
  subscription OnCreateInventoryOperation(
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
export const onUpdateInventoryOperation = /* GraphQL */ `
  subscription OnUpdateInventoryOperation(
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
export const onDeleteInventoryOperation = /* GraphQL */ `
  subscription OnDeleteInventoryOperation(
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
export const onCreateIncomeInventory = /* GraphQL */ `
  subscription OnCreateIncomeInventory(
    $filter: ModelSubscriptionIncomeInventoryFilterInput
  ) {
    onCreateIncomeInventory(filter: $filter) {
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
export const onUpdateIncomeInventory = /* GraphQL */ `
  subscription OnUpdateIncomeInventory(
    $filter: ModelSubscriptionIncomeInventoryFilterInput
  ) {
    onUpdateIncomeInventory(filter: $filter) {
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
export const onDeleteIncomeInventory = /* GraphQL */ `
  subscription OnDeleteIncomeInventory(
    $filter: ModelSubscriptionIncomeInventoryFilterInput
  ) {
    onDeleteIncomeInventory(filter: $filter) {
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
export const onCreateIncomeInventoryProductQuantity = /* GraphQL */ `
  subscription OnCreateIncomeInventoryProductQuantity(
    $filter: ModelSubscriptionIncomeInventoryProductQuantityFilterInput
  ) {
    onCreateIncomeInventoryProductQuantity(filter: $filter) {
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
export const onUpdateIncomeInventoryProductQuantity = /* GraphQL */ `
  subscription OnUpdateIncomeInventoryProductQuantity(
    $filter: ModelSubscriptionIncomeInventoryProductQuantityFilterInput
  ) {
    onUpdateIncomeInventoryProductQuantity(filter: $filter) {
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
export const onDeleteIncomeInventoryProductQuantity = /* GraphQL */ `
  subscription OnDeleteIncomeInventoryProductQuantity(
    $filter: ModelSubscriptionIncomeInventoryProductQuantityFilterInput
  ) {
    onDeleteIncomeInventoryProductQuantity(filter: $filter) {
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
export const onCreateOutcomeInventory = /* GraphQL */ `
  subscription OnCreateOutcomeInventory(
    $filter: ModelSubscriptionOutcomeInventoryFilterInput
  ) {
    onCreateOutcomeInventory(filter: $filter) {
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
export const onUpdateOutcomeInventory = /* GraphQL */ `
  subscription OnUpdateOutcomeInventory(
    $filter: ModelSubscriptionOutcomeInventoryFilterInput
  ) {
    onUpdateOutcomeInventory(filter: $filter) {
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
export const onDeleteOutcomeInventory = /* GraphQL */ `
  subscription OnDeleteOutcomeInventory(
    $filter: ModelSubscriptionOutcomeInventoryFilterInput
  ) {
    onDeleteOutcomeInventory(filter: $filter) {
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
export const onCreateOutcomeInventoryProductQuantity = /* GraphQL */ `
  subscription OnCreateOutcomeInventoryProductQuantity(
    $filter: ModelSubscriptionOutcomeInventoryProductQuantityFilterInput
  ) {
    onCreateOutcomeInventoryProductQuantity(filter: $filter) {
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
export const onUpdateOutcomeInventoryProductQuantity = /* GraphQL */ `
  subscription OnUpdateOutcomeInventoryProductQuantity(
    $filter: ModelSubscriptionOutcomeInventoryProductQuantityFilterInput
  ) {
    onUpdateOutcomeInventoryProductQuantity(filter: $filter) {
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
export const onDeleteOutcomeInventoryProductQuantity = /* GraphQL */ `
  subscription OnDeleteOutcomeInventoryProductQuantity(
    $filter: ModelSubscriptionOutcomeInventoryProductQuantityFilterInput
  ) {
    onDeleteOutcomeInventoryProductQuantity(filter: $filter) {
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
export const onCreateReturnsInventory = /* GraphQL */ `
  subscription OnCreateReturnsInventory(
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
export const onUpdateReturnsInventory = /* GraphQL */ `
  subscription OnUpdateReturnsInventory(
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
export const onDeleteReturnsInventory = /* GraphQL */ `
  subscription OnDeleteReturnsInventory(
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
export const onCreateRole = /* GraphQL */ `
  subscription OnCreateRole($filter: ModelSubscriptionRoleFilterInput) {
    onCreateRole(filter: $filter) {
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
export const onUpdateRole = /* GraphQL */ `
  subscription OnUpdateRole($filter: ModelSubscriptionRoleFilterInput) {
    onUpdateRole(filter: $filter) {
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
export const onDeleteRole = /* GraphQL */ `
  subscription OnDeleteRole($filter: ModelSubscriptionRoleFilterInput) {
    onDeleteRole(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateUserInfo = /* GraphQL */ `
  subscription OnCreateUserInfo($filter: ModelSubscriptionUserInfoFilterInput) {
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
export const onUpdateUserInfo = /* GraphQL */ `
  subscription OnUpdateUserInfo($filter: ModelSubscriptionUserInfoFilterInput) {
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
export const onDeleteUserInfo = /* GraphQL */ `
  subscription OnDeleteUserInfo($filter: ModelSubscriptionUserInfoFilterInput) {
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
export const onCreateInventory = /* GraphQL */ `
  subscription OnCreateInventory(
    $filter: ModelSubscriptionInventoryFilterInput
  ) {
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
export const onUpdateInventory = /* GraphQL */ `
  subscription OnUpdateInventory(
    $filter: ModelSubscriptionInventoryFilterInput
  ) {
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
export const onDeleteInventory = /* GraphQL */ `
  subscription OnDeleteInventory(
    $filter: ModelSubscriptionInventoryFilterInput
  ) {
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
export const onCreateInventoryProduct = /* GraphQL */ `
  subscription OnCreateInventoryProduct(
    $filter: ModelSubscriptionInventoryProductFilterInput
  ) {
    onCreateInventoryProduct(filter: $filter) {
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
export const onUpdateInventoryProduct = /* GraphQL */ `
  subscription OnUpdateInventoryProduct(
    $filter: ModelSubscriptionInventoryProductFilterInput
  ) {
    onUpdateInventoryProduct(filter: $filter) {
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
export const onDeleteInventoryProduct = /* GraphQL */ `
  subscription OnDeleteInventoryProduct(
    $filter: ModelSubscriptionInventoryProductFilterInput
  ) {
    onDeleteInventoryProduct(filter: $filter) {
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
export const onCreateBranchOffice = /* GraphQL */ `
  subscription OnCreateBranchOffice(
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
export const onUpdateBranchOffice = /* GraphQL */ `
  subscription OnUpdateBranchOffice(
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
export const onDeleteBranchOffice = /* GraphQL */ `
  subscription OnDeleteBranchOffice(
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
export const onCreateDiscounts = /* GraphQL */ `
  subscription OnCreateDiscounts(
    $filter: ModelSubscriptionDiscountsFilterInput
  ) {
    onCreateDiscounts(filter: $filter) {
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
export const onUpdateDiscounts = /* GraphQL */ `
  subscription OnUpdateDiscounts(
    $filter: ModelSubscriptionDiscountsFilterInput
  ) {
    onUpdateDiscounts(filter: $filter) {
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
export const onDeleteDiscounts = /* GraphQL */ `
  subscription OnDeleteDiscounts(
    $filter: ModelSubscriptionDiscountsFilterInput
  ) {
    onDeleteDiscounts(filter: $filter) {
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
export const onCreateSalesOperation = /* GraphQL */ `
  subscription OnCreateSalesOperation(
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
export const onUpdateSalesOperation = /* GraphQL */ `
  subscription OnUpdateSalesOperation(
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
export const onDeleteSalesOperation = /* GraphQL */ `
  subscription OnDeleteSalesOperation(
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
export const onCreateSalesOperationClientCreditFirstLastPayment = /* GraphQL */ `
  subscription OnCreateSalesOperationClientCreditFirstLastPayment(
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
export const onUpdateSalesOperationClientCreditFirstLastPayment = /* GraphQL */ `
  subscription OnUpdateSalesOperationClientCreditFirstLastPayment(
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
export const onDeleteSalesOperationClientCreditFirstLastPayment = /* GraphQL */ `
  subscription OnDeleteSalesOperationClientCreditFirstLastPayment(
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
export const onCreateSalesOperationClientCreditMovements = /* GraphQL */ `
  subscription OnCreateSalesOperationClientCreditMovements(
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
export const onUpdateSalesOperationClientCreditMovements = /* GraphQL */ `
  subscription OnUpdateSalesOperationClientCreditMovements(
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
export const onDeleteSalesOperationClientCreditMovements = /* GraphQL */ `
  subscription OnDeleteSalesOperationClientCreditMovements(
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
export const onCreateSalesOperationInventoryProductQuantity = /* GraphQL */ `
  subscription OnCreateSalesOperationInventoryProductQuantity(
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
export const onUpdateSalesOperationInventoryProductQuantity = /* GraphQL */ `
  subscription OnUpdateSalesOperationInventoryProductQuantity(
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
export const onDeleteSalesOperationInventoryProductQuantity = /* GraphQL */ `
  subscription OnDeleteSalesOperationInventoryProductQuantity(
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
export const onCreateCompanyExpenses = /* GraphQL */ `
  subscription OnCreateCompanyExpenses(
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
export const onUpdateCompanyExpenses = /* GraphQL */ `
  subscription OnUpdateCompanyExpenses(
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
export const onDeleteCompanyExpenses = /* GraphQL */ `
  subscription OnDeleteCompanyExpenses(
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
export const onCreateSalesOperationCustomerSubscription = /* GraphQL */ `
  subscription OnCreateSalesOperationCustomerSubscription(
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
export const onUpdateSalesOperationCustomerSubscription = /* GraphQL */ `
  subscription OnUpdateSalesOperationCustomerSubscription(
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
export const onDeleteSalesOperationCustomerSubscription = /* GraphQL */ `
  subscription OnDeleteSalesOperationCustomerSubscription(
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
export const onCreateProvider = /* GraphQL */ `
  subscription OnCreateProvider($filter: ModelSubscriptionProviderFilterInput) {
    onCreateProvider(filter: $filter) {
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
export const onUpdateProvider = /* GraphQL */ `
  subscription OnUpdateProvider($filter: ModelSubscriptionProviderFilterInput) {
    onUpdateProvider(filter: $filter) {
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
export const onDeleteProvider = /* GraphQL */ `
  subscription OnDeleteProvider($filter: ModelSubscriptionProviderFilterInput) {
    onDeleteProvider(filter: $filter) {
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
export const onCreateProductProvider = /* GraphQL */ `
  subscription OnCreateProductProvider(
    $filter: ModelSubscriptionProductProviderFilterInput
  ) {
    onCreateProductProvider(filter: $filter) {
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
export const onUpdateProductProvider = /* GraphQL */ `
  subscription OnUpdateProductProvider(
    $filter: ModelSubscriptionProductProviderFilterInput
  ) {
    onUpdateProductProvider(filter: $filter) {
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
export const onDeleteProductProvider = /* GraphQL */ `
  subscription OnDeleteProductProvider(
    $filter: ModelSubscriptionProductProviderFilterInput
  ) {
    onDeleteProductProvider(filter: $filter) {
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
export const onCreateProductProviderResponsible = /* GraphQL */ `
  subscription OnCreateProductProviderResponsible(
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
export const onUpdateProductProviderResponsible = /* GraphQL */ `
  subscription OnUpdateProductProviderResponsible(
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
export const onDeleteProductProviderResponsible = /* GraphQL */ `
  subscription OnDeleteProductProviderResponsible(
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
export const onCreateServiceProvider = /* GraphQL */ `
  subscription OnCreateServiceProvider(
    $filter: ModelSubscriptionServiceProviderFilterInput
  ) {
    onCreateServiceProvider(filter: $filter) {
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
export const onUpdateServiceProvider = /* GraphQL */ `
  subscription OnUpdateServiceProvider(
    $filter: ModelSubscriptionServiceProviderFilterInput
  ) {
    onUpdateServiceProvider(filter: $filter) {
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
export const onDeleteServiceProvider = /* GraphQL */ `
  subscription OnDeleteServiceProvider(
    $filter: ModelSubscriptionServiceProviderFilterInput
  ) {
    onDeleteServiceProvider(filter: $filter) {
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
export const onCreateServiceProviderResponsible = /* GraphQL */ `
  subscription OnCreateServiceProviderResponsible(
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
`;
export const onUpdateServiceProviderResponsible = /* GraphQL */ `
  subscription OnUpdateServiceProviderResponsible(
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
`;
export const onDeleteServiceProviderResponsible = /* GraphQL */ `
  subscription OnDeleteServiceProviderResponsible(
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
`;
export const onCreateInventoryProductIncomeInventory = /* GraphQL */ `
  subscription OnCreateInventoryProductIncomeInventory(
    $filter: ModelSubscriptionInventoryProductIncomeInventoryFilterInput
  ) {
    onCreateInventoryProductIncomeInventory(filter: $filter) {
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
export const onUpdateInventoryProductIncomeInventory = /* GraphQL */ `
  subscription OnUpdateInventoryProductIncomeInventory(
    $filter: ModelSubscriptionInventoryProductIncomeInventoryFilterInput
  ) {
    onUpdateInventoryProductIncomeInventory(filter: $filter) {
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
export const onDeleteInventoryProductIncomeInventory = /* GraphQL */ `
  subscription OnDeleteInventoryProductIncomeInventory(
    $filter: ModelSubscriptionInventoryProductIncomeInventoryFilterInput
  ) {
    onDeleteInventoryProductIncomeInventory(filter: $filter) {
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
export const onCreateInventoryProductOutcomeInventory = /* GraphQL */ `
  subscription OnCreateInventoryProductOutcomeInventory(
    $filter: ModelSubscriptionInventoryProductOutcomeInventoryFilterInput
  ) {
    onCreateInventoryProductOutcomeInventory(filter: $filter) {
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
export const onUpdateInventoryProductOutcomeInventory = /* GraphQL */ `
  subscription OnUpdateInventoryProductOutcomeInventory(
    $filter: ModelSubscriptionInventoryProductOutcomeInventoryFilterInput
  ) {
    onUpdateInventoryProductOutcomeInventory(filter: $filter) {
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
export const onDeleteInventoryProductOutcomeInventory = /* GraphQL */ `
  subscription OnDeleteInventoryProductOutcomeInventory(
    $filter: ModelSubscriptionInventoryProductOutcomeInventoryFilterInput
  ) {
    onDeleteInventoryProductOutcomeInventory(filter: $filter) {
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
export const onCreateInventoryProductReturnsInventory = /* GraphQL */ `
  subscription OnCreateInventoryProductReturnsInventory(
    $filter: ModelSubscriptionInventoryProductReturnsInventoryFilterInput
  ) {
    onCreateInventoryProductReturnsInventory(filter: $filter) {
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
export const onUpdateInventoryProductReturnsInventory = /* GraphQL */ `
  subscription OnUpdateInventoryProductReturnsInventory(
    $filter: ModelSubscriptionInventoryProductReturnsInventoryFilterInput
  ) {
    onUpdateInventoryProductReturnsInventory(filter: $filter) {
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
export const onDeleteInventoryProductReturnsInventory = /* GraphQL */ `
  subscription OnDeleteInventoryProductReturnsInventory(
    $filter: ModelSubscriptionInventoryProductReturnsInventoryFilterInput
  ) {
    onDeleteInventoryProductReturnsInventory(filter: $filter) {
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
export const onCreateBranchOfficeUser = /* GraphQL */ `
  subscription OnCreateBranchOfficeUser(
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
export const onUpdateBranchOfficeUser = /* GraphQL */ `
  subscription OnUpdateBranchOfficeUser(
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
export const onDeleteBranchOfficeUser = /* GraphQL */ `
  subscription OnDeleteBranchOfficeUser(
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
export const onCreateDiscountInventoryProduct = /* GraphQL */ `
  subscription OnCreateDiscountInventoryProduct(
    $filter: ModelSubscriptionDiscountInventoryProductFilterInput
  ) {
    onCreateDiscountInventoryProduct(filter: $filter) {
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
export const onUpdateDiscountInventoryProduct = /* GraphQL */ `
  subscription OnUpdateDiscountInventoryProduct(
    $filter: ModelSubscriptionDiscountInventoryProductFilterInput
  ) {
    onUpdateDiscountInventoryProduct(filter: $filter) {
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
export const onDeleteDiscountInventoryProduct = /* GraphQL */ `
  subscription OnDeleteDiscountInventoryProduct(
    $filter: ModelSubscriptionDiscountInventoryProductFilterInput
  ) {
    onDeleteDiscountInventoryProduct(filter: $filter) {
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
export const onCreateInventoryProductSalesOperation = /* GraphQL */ `
  subscription OnCreateInventoryProductSalesOperation(
    $filter: ModelSubscriptionInventoryProductSalesOperationFilterInput
  ) {
    onCreateInventoryProductSalesOperation(filter: $filter) {
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
export const onUpdateInventoryProductSalesOperation = /* GraphQL */ `
  subscription OnUpdateInventoryProductSalesOperation(
    $filter: ModelSubscriptionInventoryProductSalesOperationFilterInput
  ) {
    onUpdateInventoryProductSalesOperation(filter: $filter) {
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
export const onDeleteInventoryProductSalesOperation = /* GraphQL */ `
  subscription OnDeleteInventoryProductSalesOperation(
    $filter: ModelSubscriptionInventoryProductSalesOperationFilterInput
  ) {
    onDeleteInventoryProductSalesOperation(filter: $filter) {
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
