/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategory = /* GraphQL */ `
  query GetCategory($id: Int!) {
    getCategory(id: $id) {
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $id: Int
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCategories(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getSubCategory = /* GraphQL */ `
  query GetSubCategory($id: Int!) {
    getSubCategory(id: $id) {
      id
      categoryID
      subcategory_name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSubCategories = /* GraphQL */ `
  query ListSubCategories(
    $id: Int
    $filter: ModelSubCategoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSubCategories(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
  }
`;
export const getClass = /* GraphQL */ `
  query GetClass($id: Int!) {
    getClass(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listClasses = /* GraphQL */ `
  query ListClasses(
    $id: Int
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listClasses(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
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
export const listClients = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
      __typename
    }
  }
`;
export const getNonRegisteredClient = /* GraphQL */ `
  query GetNonRegisteredClient($id: ID!) {
    getNonRegisteredClient(id: $id) {
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
export const listNonRegisteredClients = /* GraphQL */ `
  query ListNonRegisteredClients(
    $filter: ModelNonRegisteredClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNonRegisteredClients(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getCredits = /* GraphQL */ `
  query GetCredits($id: ID!) {
    getCredits(id: $id) {
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
export const listCredits = /* GraphQL */ `
  query ListCredits(
    $filter: ModelCreditsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCredits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getCreditRequests = /* GraphQL */ `
  query GetCreditRequests($id: ID!) {
    getCreditRequests(id: $id) {
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
export const listCreditRequests = /* GraphQL */ `
  query ListCreditRequests(
    $filter: ModelCreditRequestsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCreditRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
      __typename
    }
  }
`;
export const getInventoryOperation = /* GraphQL */ `
  query GetInventoryOperation($id: ID!) {
    getInventoryOperation(id: $id) {
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
export const listInventoryOperations = /* GraphQL */ `
  query ListInventoryOperations(
    $filter: ModelInventoryOperationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInventoryOperations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getIncomeInventory = /* GraphQL */ `
  query GetIncomeInventory($id: ID!) {
    getIncomeInventory(id: $id) {
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
export const listIncomeInventories = /* GraphQL */ `
  query ListIncomeInventories(
    $filter: ModelIncomeInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIncomeInventories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getIncomeInventoryProductQuantity = /* GraphQL */ `
  query GetIncomeInventoryProductQuantity($id: ID!) {
    getIncomeInventoryProductQuantity(id: $id) {
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
export const listIncomeInventoryProductQuantities = /* GraphQL */ `
  query ListIncomeInventoryProductQuantities(
    $filter: ModelIncomeInventoryProductQuantityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIncomeInventoryProductQuantities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getOutcomeInventory = /* GraphQL */ `
  query GetOutcomeInventory($id: ID!) {
    getOutcomeInventory(id: $id) {
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
export const listOutcomeInventories = /* GraphQL */ `
  query ListOutcomeInventories(
    $filter: ModelOutcomeInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOutcomeInventories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getOutcomeInventoryProductQuantity = /* GraphQL */ `
  query GetOutcomeInventoryProductQuantity($id: ID!) {
    getOutcomeInventoryProductQuantity(id: $id) {
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
export const listOutcomeInventoryProductQuantities = /* GraphQL */ `
  query ListOutcomeInventoryProductQuantities(
    $filter: ModelOutcomeInventoryProductQuantityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOutcomeInventoryProductQuantities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getReturnsInventory = /* GraphQL */ `
  query GetReturnsInventory($id: ID!) {
    getReturnsInventory(id: $id) {
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
export const listReturnsInventories = /* GraphQL */ `
  query ListReturnsInventories(
    $filter: ModelReturnsInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReturnsInventories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getRole = /* GraphQL */ `
  query GetRole($id: ID!) {
    getRole(id: $id) {
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
export const listRoles = /* GraphQL */ `
  query ListRoles(
    $filter: ModelRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getUserInfo = /* GraphQL */ `
  query GetUserInfo($id: ID!) {
    getUserInfo(id: $id) {
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
export const listUserInfos = /* GraphQL */ `
  query ListUserInfos(
    $filter: ModelUserInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getInventory = /* GraphQL */ `
  query GetInventory($id: ID!) {
    getInventory(id: $id) {
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
export const listInventories = /* GraphQL */ `
  query ListInventories(
    $filter: ModelInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInventories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getInventoryProduct = /* GraphQL */ `
  query GetInventoryProduct($id: ID!) {
    getInventoryProduct(id: $id) {
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
export const listInventoryProducts = /* GraphQL */ `
  query ListInventoryProducts(
    $filter: ModelInventoryProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInventoryProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getBranchOffice = /* GraphQL */ `
  query GetBranchOffice($id: ID!) {
    getBranchOffice(id: $id) {
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
export const listBranchOffices = /* GraphQL */ `
  query ListBranchOffices(
    $filter: ModelBranchOfficeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBranchOffices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getDiscounts = /* GraphQL */ `
  query GetDiscounts($id: ID!) {
    getDiscounts(id: $id) {
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
export const listDiscounts = /* GraphQL */ `
  query ListDiscounts(
    $filter: ModelDiscountsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiscounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getSalesOperation = /* GraphQL */ `
  query GetSalesOperation($id: ID!) {
    getSalesOperation(id: $id) {
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
export const listSalesOperations = /* GraphQL */ `
  query ListSalesOperations(
    $filter: ModelSalesOperationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSalesOperations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getSalesOperationClientCreditFirstLastPayment = /* GraphQL */ `
  query GetSalesOperationClientCreditFirstLastPayment($id: ID!) {
    getSalesOperationClientCreditFirstLastPayment(id: $id) {
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
export const listSalesOperationClientCreditFirstLastPayments = /* GraphQL */ `
  query ListSalesOperationClientCreditFirstLastPayments(
    $filter: ModelSalesOperationClientCreditFirstLastPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSalesOperationClientCreditFirstLastPayments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getSalesOperationClientCreditMovements = /* GraphQL */ `
  query GetSalesOperationClientCreditMovements($id: ID!) {
    getSalesOperationClientCreditMovements(id: $id) {
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
export const listSalesOperationClientCreditMovements = /* GraphQL */ `
  query ListSalesOperationClientCreditMovements(
    $filter: ModelSalesOperationClientCreditMovementsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSalesOperationClientCreditMovements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getSalesOperationInventoryProductQuantity = /* GraphQL */ `
  query GetSalesOperationInventoryProductQuantity($id: ID!) {
    getSalesOperationInventoryProductQuantity(id: $id) {
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
export const listSalesOperationInventoryProductQuantities = /* GraphQL */ `
  query ListSalesOperationInventoryProductQuantities(
    $filter: ModelSalesOperationInventoryProductQuantityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSalesOperationInventoryProductQuantities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getCompanyExpenses = /* GraphQL */ `
  query GetCompanyExpenses($id: ID!) {
    getCompanyExpenses(id: $id) {
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
export const listCompanyExpenses = /* GraphQL */ `
  query ListCompanyExpenses(
    $filter: ModelCompanyExpensesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanyExpenses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getSalesOperationCustomerSubscription = /* GraphQL */ `
  query GetSalesOperationCustomerSubscription($id: ID!) {
    getSalesOperationCustomerSubscription(id: $id) {
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
export const listSalesOperationCustomerSubscriptions = /* GraphQL */ `
  query ListSalesOperationCustomerSubscriptions(
    $filter: ModelSalesOperationCustomerSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSalesOperationCustomerSubscriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getProvider = /* GraphQL */ `
  query GetProvider($id: ID!) {
    getProvider(id: $id) {
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
export const listProviders = /* GraphQL */ `
  query ListProviders(
    $filter: ModelProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProviders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getProductProvider = /* GraphQL */ `
  query GetProductProvider($id: ID!) {
    getProductProvider(id: $id) {
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
export const listProductProviders = /* GraphQL */ `
  query ListProductProviders(
    $filter: ModelProductProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductProviders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getProductProviderResponsible = /* GraphQL */ `
  query GetProductProviderResponsible($id: ID!) {
    getProductProviderResponsible(id: $id) {
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
export const listProductProviderResponsibles = /* GraphQL */ `
  query ListProductProviderResponsibles(
    $filter: ModelProductProviderResponsibleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductProviderResponsibles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getServiceProvider = /* GraphQL */ `
  query GetServiceProvider($id: ID!) {
    getServiceProvider(id: $id) {
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
export const listServiceProviders = /* GraphQL */ `
  query ListServiceProviders(
    $filter: ModelServiceProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServiceProviders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getServiceProviderResponsible = /* GraphQL */ `
  query GetServiceProviderResponsible($id: ID!) {
    getServiceProviderResponsible(id: $id) {
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
export const listServiceProviderResponsibles = /* GraphQL */ `
  query ListServiceProviderResponsibles(
    $filter: ModelServiceProviderResponsibleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServiceProviderResponsibles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getInventoryProductIncomeInventory = /* GraphQL */ `
  query GetInventoryProductIncomeInventory($id: ID!) {
    getInventoryProductIncomeInventory(id: $id) {
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
export const listInventoryProductIncomeInventories = /* GraphQL */ `
  query ListInventoryProductIncomeInventories(
    $filter: ModelInventoryProductIncomeInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInventoryProductIncomeInventories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getInventoryProductOutcomeInventory = /* GraphQL */ `
  query GetInventoryProductOutcomeInventory($id: ID!) {
    getInventoryProductOutcomeInventory(id: $id) {
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
export const listInventoryProductOutcomeInventories = /* GraphQL */ `
  query ListInventoryProductOutcomeInventories(
    $filter: ModelInventoryProductOutcomeInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInventoryProductOutcomeInventories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getInventoryProductReturnsInventory = /* GraphQL */ `
  query GetInventoryProductReturnsInventory($id: ID!) {
    getInventoryProductReturnsInventory(id: $id) {
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
export const listInventoryProductReturnsInventories = /* GraphQL */ `
  query ListInventoryProductReturnsInventories(
    $filter: ModelInventoryProductReturnsInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInventoryProductReturnsInventories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getBranchOfficeUser = /* GraphQL */ `
  query GetBranchOfficeUser($id: ID!) {
    getBranchOfficeUser(id: $id) {
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
export const listBranchOfficeUsers = /* GraphQL */ `
  query ListBranchOfficeUsers(
    $filter: ModelBranchOfficeUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBranchOfficeUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getDiscountInventoryProduct = /* GraphQL */ `
  query GetDiscountInventoryProduct($id: ID!) {
    getDiscountInventoryProduct(id: $id) {
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
export const listDiscountInventoryProducts = /* GraphQL */ `
  query ListDiscountInventoryProducts(
    $filter: ModelDiscountInventoryProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiscountInventoryProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getInventoryProductSalesOperation = /* GraphQL */ `
  query GetInventoryProductSalesOperation($id: ID!) {
    getInventoryProductSalesOperation(id: $id) {
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
export const listInventoryProductSalesOperations = /* GraphQL */ `
  query ListInventoryProductSalesOperations(
    $filter: ModelInventoryProductSalesOperationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInventoryProductSalesOperations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const subCategoriesByCategoryIDAndId = /* GraphQL */ `
  query SubCategoriesByCategoryIDAndId(
    $categoryID: Int!
    $id: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSubCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    subCategoriesByCategoryIDAndId(
      categoryID: $categoryID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const clientsByCreditIDAndId = /* GraphQL */ `
  query ClientsByCreditIDAndId(
    $creditID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    clientsByCreditIDAndId(
      creditID: $creditID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
      __typename
    }
  }
`;
export const clientsByBranchOfficeIDAndId = /* GraphQL */ `
  query ClientsByBranchOfficeIDAndId(
    $branchOfficeID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    clientsByBranchOfficeIDAndId(
      branchOfficeID: $branchOfficeID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
      __typename
    }
  }
`;
export const creditRequestsByClientIDAndId = /* GraphQL */ `
  query CreditRequestsByClientIDAndId(
    $clientID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCreditRequestsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    creditRequestsByClientIDAndId(
      clientID: $clientID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
  }
`;
export const inventoryOperationsByInventoryID = /* GraphQL */ `
  query InventoryOperationsByInventoryID(
    $inventoryID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInventoryOperationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    inventoryOperationsByInventoryID(
      inventoryID: $inventoryID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const incomeInventoriesByProviderIDAndId = /* GraphQL */ `
  query IncomeInventoriesByProviderIDAndId(
    $providerID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelIncomeInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    incomeInventoriesByProviderIDAndId(
      providerID: $providerID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const incomeInventoriesByProductProviderResponsibleIDAndId = /* GraphQL */ `
  query IncomeInventoriesByProductProviderResponsibleIDAndId(
    $productProviderResponsibleID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelIncomeInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    incomeInventoriesByProductProviderResponsibleIDAndId(
      productProviderResponsibleID: $productProviderResponsibleID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const incomeInventoriesByUserInfoIDAndId = /* GraphQL */ `
  query IncomeInventoriesByUserInfoIDAndId(
    $userInfoID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelIncomeInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    incomeInventoriesByUserInfoIDAndId(
      userInfoID: $userInfoID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const incomeInventoriesByBranchOfficeIDAndId = /* GraphQL */ `
  query IncomeInventoriesByBranchOfficeIDAndId(
    $branchOfficeID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelIncomeInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    incomeInventoriesByBranchOfficeIDAndId(
      branchOfficeID: $branchOfficeID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const incomeInventoryProductQuantitiesByIncomeInventoryIDAndId = /* GraphQL */ `
  query IncomeInventoryProductQuantitiesByIncomeInventoryIDAndId(
    $incomeInventoryID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelIncomeInventoryProductQuantityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    incomeInventoryProductQuantitiesByIncomeInventoryIDAndId(
      incomeInventoryID: $incomeInventoryID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const outcomeInventoriesByUserInfoIDAndId = /* GraphQL */ `
  query OutcomeInventoriesByUserInfoIDAndId(
    $userInfoID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOutcomeInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    outcomeInventoriesByUserInfoIDAndId(
      userInfoID: $userInfoID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const outcomeInventoriesByBranchOfficeIDAndId = /* GraphQL */ `
  query OutcomeInventoriesByBranchOfficeIDAndId(
    $branchOfficeID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOutcomeInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    outcomeInventoriesByBranchOfficeIDAndId(
      branchOfficeID: $branchOfficeID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const outcomeInventoryProductQuantitiesByOutcomeInventoryIDAndId = /* GraphQL */ `
  query OutcomeInventoryProductQuantitiesByOutcomeInventoryIDAndId(
    $outcomeInventoryID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOutcomeInventoryProductQuantityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    outcomeInventoryProductQuantitiesByOutcomeInventoryIDAndId(
      outcomeInventoryID: $outcomeInventoryID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const returnsInventoriesByUserInfoIDAndId = /* GraphQL */ `
  query ReturnsInventoriesByUserInfoIDAndId(
    $userInfoID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReturnsInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    returnsInventoriesByUserInfoIDAndId(
      userInfoID: $userInfoID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const returnsInventoriesByClientIDAndId = /* GraphQL */ `
  query ReturnsInventoriesByClientIDAndId(
    $clientID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReturnsInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    returnsInventoriesByClientIDAndId(
      clientID: $clientID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const usersByRolIDAndId = /* GraphQL */ `
  query UsersByRolIDAndId(
    $rolID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByRolIDAndId(
      rolID: $rolID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const inventoriesByBranchOfficeIDAndId = /* GraphQL */ `
  query InventoriesByBranchOfficeIDAndId(
    $branchOfficeID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    inventoriesByBranchOfficeIDAndId(
      branchOfficeID: $branchOfficeID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const inventoryProductsByInventoryIDAndId = /* GraphQL */ `
  query InventoryProductsByInventoryIDAndId(
    $inventoryID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelInventoryProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    inventoryProductsByInventoryIDAndId(
      inventoryID: $inventoryID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const inventoryProductsByProductIDAndId = /* GraphQL */ `
  query InventoryProductsByProductIDAndId(
    $productID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelInventoryProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    inventoryProductsByProductIDAndId(
      productID: $productID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const inventoryProductsByProductProviderIDAndId = /* GraphQL */ `
  query InventoryProductsByProductProviderIDAndId(
    $productProviderID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelInventoryProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    inventoryProductsByProductProviderIDAndId(
      productProviderID: $productProviderID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const salesOperationsByNonRegisteredClientIDAndId = /* GraphQL */ `
  query SalesOperationsByNonRegisteredClientIDAndId(
    $nonRegisteredClientID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSalesOperationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    salesOperationsByNonRegisteredClientIDAndId(
      nonRegisteredClientID: $nonRegisteredClientID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const salesOperationsByClientIDAndId = /* GraphQL */ `
  query SalesOperationsByClientIDAndId(
    $clientID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSalesOperationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    salesOperationsByClientIDAndId(
      clientID: $clientID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const salesOperationsByUserInfoIDAndId = /* GraphQL */ `
  query SalesOperationsByUserInfoIDAndId(
    $userInfoID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSalesOperationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    salesOperationsByUserInfoIDAndId(
      userInfoID: $userInfoID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const salesOperationsByBranchOfficeIDAndId = /* GraphQL */ `
  query SalesOperationsByBranchOfficeIDAndId(
    $branchOfficeID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSalesOperationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    salesOperationsByBranchOfficeIDAndId(
      branchOfficeID: $branchOfficeID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const salesOperationClientCreditFirstLastPaymentsBySalesOperationIDAndId = /* GraphQL */ `
  query SalesOperationClientCreditFirstLastPaymentsBySalesOperationIDAndId(
    $salesOperationID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSalesOperationClientCreditFirstLastPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    salesOperationClientCreditFirstLastPaymentsBySalesOperationIDAndId(
      salesOperationID: $salesOperationID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const salesOperationClientCreditFirstLastPaymentsByClientIDAndId = /* GraphQL */ `
  query SalesOperationClientCreditFirstLastPaymentsByClientIDAndId(
    $clientID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSalesOperationClientCreditFirstLastPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    salesOperationClientCreditFirstLastPaymentsByClientIDAndId(
      clientID: $clientID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const salesOperationClientCreditMovementsBySalesOperationIDAndId = /* GraphQL */ `
  query SalesOperationClientCreditMovementsBySalesOperationIDAndId(
    $salesOperationID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSalesOperationClientCreditMovementsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    salesOperationClientCreditMovementsBySalesOperationIDAndId(
      salesOperationID: $salesOperationID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const salesOperationClientCreditMovementsByClientIDAndId = /* GraphQL */ `
  query SalesOperationClientCreditMovementsByClientIDAndId(
    $clientID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSalesOperationClientCreditMovementsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    salesOperationClientCreditMovementsByClientIDAndId(
      clientID: $clientID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const salesOperationInventoryProductQuantitiesBySalesOperationIDAndId = /* GraphQL */ `
  query SalesOperationInventoryProductQuantitiesBySalesOperationIDAndId(
    $salesOperationID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSalesOperationInventoryProductQuantityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    salesOperationInventoryProductQuantitiesBySalesOperationIDAndId(
      salesOperationID: $salesOperationID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const companyExpensesByUserInfoIDAndId = /* GraphQL */ `
  query CompanyExpensesByUserInfoIDAndId(
    $userInfoID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCompanyExpensesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    companyExpensesByUserInfoIDAndId(
      userInfoID: $userInfoID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const companyExpensesByBranchOfficeIDAndId = /* GraphQL */ `
  query CompanyExpensesByBranchOfficeIDAndId(
    $branchOfficeID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCompanyExpensesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    companyExpensesByBranchOfficeIDAndId(
      branchOfficeID: $branchOfficeID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const salesOperationCustomerSubscriptionsBySalesOperationIDAndId = /* GraphQL */ `
  query SalesOperationCustomerSubscriptionsBySalesOperationIDAndId(
    $salesOperationID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSalesOperationCustomerSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    salesOperationCustomerSubscriptionsBySalesOperationIDAndId(
      salesOperationID: $salesOperationID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const salesOperationCustomerSubscriptionsByClientIDAndId = /* GraphQL */ `
  query SalesOperationCustomerSubscriptionsByClientIDAndId(
    $clientID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSalesOperationCustomerSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    salesOperationCustomerSubscriptionsByClientIDAndId(
      clientID: $clientID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const productProviderResponsiblesByProductproviderIDAndId = /* GraphQL */ `
  query ProductProviderResponsiblesByProductproviderIDAndId(
    $productproviderID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductProviderResponsibleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productProviderResponsiblesByProductproviderIDAndId(
      productproviderID: $productproviderID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const serviceProviderResponsiblesByServiceproviderIDAndId = /* GraphQL */ `
  query ServiceProviderResponsiblesByServiceproviderIDAndId(
    $serviceproviderID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelServiceProviderResponsibleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    serviceProviderResponsiblesByServiceproviderIDAndId(
      serviceproviderID: $serviceproviderID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const inventoryProductIncomeInventoriesByIncomeInventoryProductQuantityId = /* GraphQL */ `
  query InventoryProductIncomeInventoriesByIncomeInventoryProductQuantityId(
    $incomeInventoryProductQuantityId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInventoryProductIncomeInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    inventoryProductIncomeInventoriesByIncomeInventoryProductQuantityId(
      incomeInventoryProductQuantityId: $incomeInventoryProductQuantityId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const inventoryProductIncomeInventoriesByInventoryProductId = /* GraphQL */ `
  query InventoryProductIncomeInventoriesByInventoryProductId(
    $inventoryProductId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInventoryProductIncomeInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    inventoryProductIncomeInventoriesByInventoryProductId(
      inventoryProductId: $inventoryProductId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const inventoryProductOutcomeInventoriesByOutcomeInventoryProductQuantityId = /* GraphQL */ `
  query InventoryProductOutcomeInventoriesByOutcomeInventoryProductQuantityId(
    $outcomeInventoryProductQuantityId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInventoryProductOutcomeInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    inventoryProductOutcomeInventoriesByOutcomeInventoryProductQuantityId(
      outcomeInventoryProductQuantityId: $outcomeInventoryProductQuantityId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const inventoryProductOutcomeInventoriesByInventoryProductId = /* GraphQL */ `
  query InventoryProductOutcomeInventoriesByInventoryProductId(
    $inventoryProductId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInventoryProductOutcomeInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    inventoryProductOutcomeInventoriesByInventoryProductId(
      inventoryProductId: $inventoryProductId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const inventoryProductReturnsInventoriesByReturnsInventoryId = /* GraphQL */ `
  query InventoryProductReturnsInventoriesByReturnsInventoryId(
    $returnsInventoryId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInventoryProductReturnsInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    inventoryProductReturnsInventoriesByReturnsInventoryId(
      returnsInventoryId: $returnsInventoryId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const inventoryProductReturnsInventoriesByInventoryProductId = /* GraphQL */ `
  query InventoryProductReturnsInventoriesByInventoryProductId(
    $inventoryProductId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInventoryProductReturnsInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    inventoryProductReturnsInventoriesByInventoryProductId(
      inventoryProductId: $inventoryProductId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const branchOfficeUsersByUserId = /* GraphQL */ `
  query BranchOfficeUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBranchOfficeUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    branchOfficeUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const branchOfficeUsersByBranchOfficeId = /* GraphQL */ `
  query BranchOfficeUsersByBranchOfficeId(
    $branchOfficeId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBranchOfficeUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    branchOfficeUsersByBranchOfficeId(
      branchOfficeId: $branchOfficeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const discountInventoryProductsByInventoryProductId = /* GraphQL */ `
  query DiscountInventoryProductsByInventoryProductId(
    $inventoryProductId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDiscountInventoryProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    discountInventoryProductsByInventoryProductId(
      inventoryProductId: $inventoryProductId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const discountInventoryProductsByDiscountsId = /* GraphQL */ `
  query DiscountInventoryProductsByDiscountsId(
    $discountsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDiscountInventoryProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    discountInventoryProductsByDiscountsId(
      discountsId: $discountsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const inventoryProductSalesOperationsByInventoryProductId = /* GraphQL */ `
  query InventoryProductSalesOperationsByInventoryProductId(
    $inventoryProductId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInventoryProductSalesOperationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    inventoryProductSalesOperationsByInventoryProductId(
      inventoryProductId: $inventoryProductId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const inventoryProductSalesOperationsBySalesOperationInventoryProductQuantityId = /* GraphQL */ `
  query InventoryProductSalesOperationsBySalesOperationInventoryProductQuantityId(
    $salesOperationInventoryProductQuantityId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInventoryProductSalesOperationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    inventoryProductSalesOperationsBySalesOperationInventoryProductQuantityId(
      salesOperationInventoryProductQuantityId: $salesOperationInventoryProductQuantityId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;

//***********  CUSTOM APIS QUERIES ***********//

//?CUSTOM QUERIES
export const listUserDataAPI = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        password
        rolID
      }
      nextToken
    }
  }
`;

//? CUSTOM QUERIES
export const listProductsPDVAPI = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        price
        hasCommission
        hasDiscount
        inventoryProduct {
          items {
            quantity
          }
        }
      }
      nextToken
    }
  }
`;

//? CUSTOM QUERIES
export const listProductsViewAPI = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        class_id
        category_id
        subcategory_id
        name
        price
        commission
        hasCommission
        hasDiscount
        productProviderID
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES

export const listBranchOfficesIDs = /* GraphQL */ `
  query ListBranchOffices(
    $filter: ModelBranchOfficeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBranchOffices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES

export const listProvidersIDNamesAPI = /* GraphQL */ `
  query ListProviders(
    $filter: ModelProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProviders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        enterprise_name
        providerProductproviderId
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES
export const listClassesAPI = /* GraphQL */ `
  query ListClasses(
    $id: Int
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listClasses(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES
export const listCategoriesAPI = /* GraphQL */ `
  query ListCategories(
    $id: Int
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCategories(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES
export const listSubCategoriesAPI = /* GraphQL */ `
  query ListSubCategories($categoryID: Int) {
    listSubCategories(filter: { categoryID: { eq: $categoryID } }) {
      items {
        id
        categoryID
        subcategory_name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

//? CUSTOM QUERIES
export const listBranchOfficeProductsAPI = /* GraphQL */ `
  query ListInventories(
    $filter: ModelInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInventories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        branchOffice {
          id
          name
        }
        inventoryProduct {
          items {
            id
            customPrice
            generalPrice
            product {
              id
              name
            }
          }
        }
      }
    }
  }
`;

//?CUSTOM QUERIES
export const listProvidersViewAPI = /* GraphQL */ `
  query ListProviders(
    $filter: ModelProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProviders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        enterprise_name
        type
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES (GET)
export const getProviderDetailsAPI = /* GraphQL */ `
  query GetProvider($id: ID!) {
    getProvider(id: $id) {
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
      }
      serviceprovider {
        id
        service_name
        service_description
        cost_type
        createdAt
        updatedAt
        serviceProviderProviderIDId
      }
      createdAt
      updatedAt
      providerProductproviderId
      providerServiceproviderId
    }
  }
`;

//?CUSTOM QUERIES

export const listCommissionsViewAPI = /* GraphQL */ `
  query ListBranchOffices(
    $filter: ModelBranchOfficeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBranchOffices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        location
        branchOffice_commission
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES

export const listBranchOfficesViewAPI = /* GraphQL */ `
  query ListBranchOffices(
    $filter: ModelBranchOfficeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBranchOffices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        location
        branchOffice_commission
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES
export const listBranchOfficeInventoryProductsViewAPI = /* GraphQL */ `
  query InventoryProductsByInventoryIDAndId($inventoryID: ID!) {
    inventoryProductsByInventoryIDAndId(inventoryID: $inventoryID) {
      items {
        id
        quantity
        product {
          id
          name
          productProvider {
            providerID {
              enterprise_name
            }
          }
        }
      }
    }
  }
`;

//?CUSTOM QUERIES
export const listPDVProductsByInventoryIDAPI = /* GraphQL */ `
  query InventoryProductsByInventoryIDAndId($inventoryID: ID!) {
    inventoryProductsByInventoryIDAndId(
      inventoryID: $inventoryID
      sortDirection: DESC
    ) {
      items {
        id
        quantity
        customPrice
        product {
          hasDiscount
          hasCommission
          description
          id
          name
        }
      }
    }
  }
`;

//?CUSTOM QUERIES (GET)
export const getBranchOfficeIDNameInventoryIDByBOIDAPI = /* GraphQL */ `
  query GetBranchOffice($id: ID!) {
    getBranchOffice(id: $id) {
      id
      name
      inventories {
        items {
          id
        }
        nextToken
      }
    }
  }
`;

//?CUSTOM QUERIES
export const listSelectedOutcomeInventoryProductIDAPI = /* GraphQL */ `
  query ListInventoryProducts(
    $filter: ModelInventoryProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInventoryProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        product {
          id
        }
        quantity
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES
export const listInventoryProductsIDAndProductIDAPI = /* GraphQL */ `
  query ListInventoryProducts($productID: ID!) {
    listInventoryProducts(filter: { productID: { eq: $productID } }) {
      items {
        id
        productID
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES
export const listInventoryProductIncomeOutcomesHistoryByIDAndInventoryIDAPI = /* GraphQL */ `
  query ListInventoryProducts($inventoryID: ID!, $id: ID!) {
    listInventoryProducts(
      filter: { inventoryID: { eq: $inventoryID }, and: { id: { eq: $id } } }
    ) {
      items {
        id
        quantity
        product {
          name
        }
        inventoryProductIncomeInventory {
          items {
            incomeInventoryProductQuantity {
              incomeQuantity
              incomeInventory {
                id
                date
                inventoryOperationID {
                  operationType
                  id
                }
                provider {
                  enterprise_name
                  id
                }
                userInfo {
                  id
                  name
                }
              }
            }
          }
        }
        inventoryProductOutcomeInventory {
          items {
            outcomeInventoryProductQuantity {
              outcomeQuantity
              outcomeInventory {
                id
                branchOffice {
                  id
                  name
                }
                date
                inventoryOperationID {
                  id
                  operationType
                }
                userInfo {
                  id
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

//?CUSTOM QUERIES
export const listMainOutcomeInventoryProductsAPI = /* GraphQL */ `
  query InventoryProductsByInventoryIDAndId($inventoryID: ID!) {
    inventoryProductsByInventoryIDAndId(
      inventoryID: $inventoryID
      filter: { quantity: { gt: 0 } }
    ) {
      items {
        id
        quantity
        product {
          id
          price
          name
        }
      }
    }
  }
`;

//?CUSTOM QUERIES

export const listGeneralInventoryViewAPI = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        quantity
        productProvider {
          items {
            productProvider {
              providerID {
                enterprise_name
              }
            }
          }
        }
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES

export const listProductsInventory = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        quantity
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES
export const listProductsIncomeInventoryAPI = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        class_id
        category_id
        subcategory_id
        name
        price
        quantity
        productProvider {
          items {
            productProviderId
          }
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES
export const listProvidersInventoryByNameAPI = /* GraphQL */ `
  query ListProviders($enterprise_name: String) {
    listProviders(filter: { enterprise_name: { eq: $enterprise_name } }) {
      items {
        enterprise_name
        id
        productprovider {
          id
          product {
            items {
              name
            }
          }
          responsible {
            items {
              id
              name
              lastname
              second_lastname
              second_name
            }
          }
        }
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES
export const listProductProviderProductsByProductProviderIDAPI = /* GraphQL */ `
  query ProductProviderProductsByProductProviderId($productProviderId: ID!) {
    productProviderProductsByProductProviderId(
      productProviderId: $productProviderId
    ) {
      items {
        product {
          name
          category_id
          class_id
          id
          price
          quantity
          subcategory_id
          productProvider {
            items {
              productProviderId
            }
          }
        }
      }
    }
  }
`;

//?CUSTOM QUERIES
export const productsByProductProviderIDAndId = /* GraphQL */ `
  query ProductsByProductProviderIDAndId(
    $productProviderID: ID!
    $inventoryID: ID!
  ) {
    productsByProductProviderIDAndId(productProviderID: $productProviderID) {
      items {
        category_id
        subcategory_id
        class_id
        id
        name
        price
        productProviderID
        inventoryProduct(
          filter: {
            productProviderID: { eq: $productProviderID }
            and: { inventoryID: { eq: $inventoryID } }
          }
        ) {
          items {
            id
            quantity
          }
        }
      }
    }
  }
`;

//?CUSTOM QUERIES
export const listProvidersEnterpriseNameInventoryAPI = /* GraphQL */ `
  query ListProviders(
    $filter: ModelProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProviders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        enterprise_name
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES
export const listUserNamesByEmailAPI = /* GraphQL */ `
  query ListUsers($email: String) {
    listUsers(filter: { email: { eq: $email } }) {
      items {
        userInfo {
          name
        }
      }
    }
  }
`;

//?CUSTOM QUERIES
export const listProductsOutcomeInventoryAPI = /* GraphQL */ `
  query ListProducts {
    listProducts(filter: { quantity: { gt: 0 } }) {
      items {
        id
        name
        price
        quantity
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES
export const listBranchOfficesNameID = /* GraphQL */ `
  query ListBranchOffices($name: String) {
    listBranchOffices(filter: { name: { eq: $name } }) {
      items {
        id
        name
        inventories {
          items {
            id
          }
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES
export const listBranchOfficesNames = /* GraphQL */ `
  query ListBranchOffices {
    listBranchOffices(filter: { isMain: { eq: false } }) {
      items {
        name
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES
export const listAccountViewAPI = /* GraphQL */ `
  query ListUserInfos(
    $filter: ModelUserInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        user {
          rolID
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES
export const listBranchOfficesIDNamesAPI = /* GraphQL */ `
  query ListBranchOffices {
    listBranchOffices {
      items {
        id
        name
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES
export const listBranchOfficesIDNamesInventoryIDAPI = /* GraphQL */ `
  query ListBranchOffices {
    listBranchOffices(filter: { isMain: { eq: false } }) {
      items {
        id
        name
        inventories {
          items {
            id
          }
        }
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES
export const listRolesNamesAPI = /* GraphQL */ `
  query ListRoles(
    $filter: ModelRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES
export const listBranchOfficeManagersAPI = /* GraphQL */ `
  query ListUsers {
    listUsers(
      filter: {
        rolID: { eq: "BRANCHMANAGER" }
        and: { hasBranchOffice: { eq: false } }
      }
    ) {
      items {
        id
        email
        userInfo {
          name
          phone
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES
export const listSalesOperationsViewByBranchOfficeIDAPI = /* GraphQL */ `
  query ListSalesOperations($branchOfficeID: ID) {
    listSalesOperations(filter: { branchOfficeID: { eq: $branchOfficeID } }) {
      items {
        id
        nonRegisteredClient {
          fullName
        }
        client {
          name
          second_name
          lastname
          second_lastname
        }
        status
        createdAt
        updatedAt
      }
    }
  }
`;

//?CUSTOM QUERIES
export const listSalesOperationsCreditsDetailsAPI = /* GraphQL */ `
  query ListSalesOperations($branchOfficeID: ID) {
    listSalesOperations(filter: { branchOfficeID: { eq: $branchOfficeID } }) {
      items {
        client {
          name
          id
          credit {
            items {
              credit_available
              outstanding_balance
            }
          }
        }
        monthsToPay
        pendingToPay
        status
        termDaysToPay
        total
        totalCash
        salesOperationInventoryProductQuantities {
          items {
            discountPerProduct
            discountPercentage
            amountToPayWithDiscount
            amountToPay
            productPriceWithDiscount
            soldProductQuantity
            totalDiscounted
            withDiscount
            inventoryProducts {
              items {
                inventoryProduct {
                  product {
                    name
                  }
                }
              }
            }
          }
        }
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES
export const listSalesOperationsProductGeneralDetailsAPI = /* GraphQL */ `
  query ListSalesOperations(
    $filter: ModelSalesOperationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSalesOperations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        branchOffice {
          name
        }
        clientID
        nonRegisteredClient {
          fullName
        }
        inventoryOperationID {
          operationType
        }
        pendingToPay
        salesOperationType
        status
        termDaysToPay
        total
        totalCommission
        userInfo {
          name
        }
        salesOperationInventoryProductQuantities {
          items {
            soldProductQuantity
            inventoryProducts {
              items {
                inventoryProduct {
                  product {
                    name
                  }
                  customPrice
                }
              }
            }
            amountToPayWithDiscount
            amountToPay
            discountPerProduct
            discountPercentage
            totalDiscounted
            withDiscount
            productPriceWithDiscount
          }
        }
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES
export const listPaidSalesOperationsAPI = /* GraphQL */ `
  query ListSalesOperations(
    $filter: ModelSalesOperationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSalesOperations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        client {
          name
          lastname
        }
        branchOffice {
          name
        }
        id
        total
        date
        status
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES
export const checkIsLastPaymentAPI = /* GraphQL */ `
  query ListSalesOperations($id: ID!) {
    listSalesOperations(filter: { id: { eq: $id } }) {
      items {
        currentTotalPayments
        salesOperationClientCreditMovements {
          items {
            numberOfPayment
          }
        }
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES
export const listSaleDetailsByIDAPI = /* GraphQL */ `
  query ListSalesOperations($id: ID!) {
      listSalesOperations(filter: { id: { eq: $id } }) {
        items {
          id
          amountPaid
          pendingToPay
          client {
            name
            lastname
            id
            credit {
              credit_available
            }
          }
          nonRegisteredClient {
            id
            fullName
          }

          date
          status
          salesOperationInventoryProductQuantities {
            items {
              productPriceWithDiscount
              soldProductQuantity
              name
              withDiscount
              amountToPayWithDiscount
              amountToPay
            }
          }
        }
        nextToken
      }
  }
`;

//?CUSTOM QUERIES
export const getClientCreditByIDAPI = /* GraphQL */ `
  query ListClients($id: ID) {
    listCredits(filter: { creditsClientId: { eq: $id } }) {
      items {
        creditsClientId
        id
        credit_available
        outstanding_balance
      }
    }
  }
`;

//?CUSTOM QUERIES
export const listPDVClientsFullNameAPI = /* GraphQL */ `
  query ListClients($branchOfficeID: ID) {
    listClients(filter: { branchOfficeID: { eq: $branchOfficeID } }) {
      items {
        id
        name
        lastname
        hasCredit
      }
    }
  }
`;

//?CUSTOM QUERIES
export const listPDVClientsFullNameBOAPI = /* GraphQL */ `
  query ListClients {
    listClients {
      items {
        id
        name
        lastname
        hasCredit
        branchOffice {
          name
          id
        }
      }
    }
  }
`;

//?CUSTOM QUERIES (GET)

export const getBranchOfficeCommissionAPI = /* GraphQL */ `
  query GetBranchOffice($id: ID!) {
    getBranchOffice(id: $id) {
      branchOffice_commission
    }
  }
`;

//?CUSTOM QUERIES (LIST)
export const listDiscountsAPI = /* GraphQL */ `
  query ListDiscounts(
    $filter: ModelDiscountsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiscounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        discount
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES (LIST)
export const listUsersNamesAPI = /* GraphQL */ `
  query ListUserInfos(
    $filter: ModelUserInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES (LIST)
export const getInventoryQuantityAPI = /* GraphQL */ `
  query GetInventory($id: ID!) {
    getInventory(id: $id) {
      id
      products {
        items {
          id
          name
          quantity
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;

//?CUSTOM QUERIES (LIST)
export const getProductAPI = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
      }
      category {
        id
        name
        subcategories {
          nextToken
        }
      }
      subcategory {
        id
        categoryID
        subcategory_name
      }
      productProvider {
        providerID {
          enterprise_name
          id
        }
      }
    }
  }
`;

//?CUSTOM QUERIES (LIST)
export const listProductsAPI = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        quantity
        class {
          id
          name
          createdAt
          updatedAt
        }
        category {
          id
          name
          createdAt
          updatedAt
        }
        subcategory {
          id
          categoryID
          subcategory_name
          createdAt
          updatedAt
        }
        productProvider {
          nextToken
        }
        inventoryID
        inventory {
          id
          branchOfficeID
          isMain
          createdAt
          updatedAt
        }
        branchProducts {
          nextToken
        }
        salesOperation {
          nextToken
        }
        incomeInventory {
          nextToken
        }
        outcomeInventory {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES (LIST)
export const listProductProvidersAPI = /* GraphQL */ `
  query ListProductProviders(
    $filter: ModelProductProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductProviders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        responsible {
          nextToken
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
        }
        product {
          nextToken
        }
        createdAt
        updatedAt
        productProviderProviderIDId
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES
export const listUserDataLoginAPI = /* GraphQL */ `
  query ListUsers($email: String) {
    listUsers(filter: { email: { eq: $email } }) {
      items {
        rolID
        branchOffice {
          items {
            branchOffice {
              id
              name
              isMain
              inventories {
                items {
                  id
                }
              }
            }
          }
        }
        userInfo {
          id
          name
        }
      }
    }
  }
`;

export const listUsersEmailValidation = /* GraphQL */ `
  query ListUsers($email: String) {
    listUsers(filter: { email: { eq: $email } }) {
      items {
        email
      }
    }
  }
`;

//? CUSTOM QUERIES
export const listClientsViewByBranchOfficeIDAPI = /* GraphQL */ `
  query ClientsByBranchOfficeIDAndId($branchOfficeID: ID!) {
    clientsByBranchOfficeIDAndId(branchOfficeID: $branchOfficeID) {
      items {
        name
        id
        createdAt
        salesOperation(sortDirection: ASC) {
          items {
            id
          }
        }
      }
    }
  }
`;

//? CUSTOM QUERIES
export const listClientsCreditsViewAPI = /* GraphQL */ `
  query ListCreditRequests($creditRequestStatus: CreditRequestStatus) {
    listCreditRequests(
      filter: { creditRequestStatus: { eq: $creditRequestStatus } }
    ) {
      items {
        client {
          id
          name
          lastname
          credit {
            startDate
            totalCredit
            last_payment_date
          }
        }
      }
      nextToken
    }
  }
`;

//? CUSTOM QUERIES
export const listCreditRequestsViewAPI = /* GraphQL */ `
  query ListClients($branchOfficeID: ID) {
    listClients(filter: { branchOfficeID: { ne: $branchOfficeID } }) {
      items {
        creditRequests {
          items {
            id
            client {
              id
              name
              lastname
            }
            creditRequestStatus
          }
        }
      }
    }
  }
`;

//? CUSTOM QUERIES
export const listCreditRequestsMainAPI = /* GraphQL */ `
  query ListCreditRequests($branchOfficeID: ID) {
    listCreditRequests(
      filter: {
        branchOfficeID: { ne: $branchOfficeID }
        and: { creditRequestStatus: { eq: PENDING } }
      }
    ) {
      items {
        id
        client {
          id
          name
          lastname
        }
        branchOffice {
          name
        }
        creditRequestStatus
      }
    }
  }
`;

export const listCreditRequestsBOAPI = /* GraphQL */ `
  query ListCreditRequests($branchOfficeID: ID) {
    listCreditRequests(
      filter: {
        branchOfficeID: { eq: $branchOfficeID }
        and: { creditRequestStatus: { eq: PENDING } }
      }
    ) {
      items {
        id
        client {
          id
          name
          lastname
        }
        creditRequestStatus
      }
    }
  }
`;

//? CUSTOM QUERIES
export const getClientDetailsByID = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
      id
      name
      second_name
      lastname
      second_lastname
      email
      phone
      createdAt
      address
      state
      credit {
        credit_available
      }
    }
  }
`;

//? CUSTOM QUERIES
export const getCustomerSubscriptionDetailsByID = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
      id
      name
      second_name
      lastname
      second_lastname
      email
      phone
      createdAt
      credit {
        credit_available
        outstanding_balance
      }
      branchOffice {
        name
      }
    }
  }
`;

//? CUSTOM QUERIES
export const listClientsWithCreditAPI = /* GraphQL */ `
  query ListClients {
    listClients(filter: { hasCredit: { eq: true } }) {
      items {
        id
        name
        second_name
        lastname
        second_lastname
        email
        phone
        createdAt
        address
        state
        credit {
          credit_available
        }
      }
      nextToken
    }
  }
`;

//? CUSTOM QUERIES
export const listAllClientsViewAPI = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        id
        createdAt
        branchOffice {
          name
        }
        salesOperation(sortDirection: ASC) {
          items {
            id
          }
        }
      }
      nextToken
    }
  }
`;

//? CUSTOM QUERIES
export const listClientCreditMovementsDataAPI = /* GraphQL */ `
  query ListClients($id: ID!) {
    listClients(filter: { id: { eq: $id } }) {
      items {
        id
        name
        lastname
        credit {
          credit_available
          outstanding_balance
          createdAt
        }
        salesOperation(filter: { status: { ne: EXPIRED } }) {
          items {
            amountPaid
            id
            pendingToPay
            total
            termDaysToPay
            currentTotalPayments
            totalPayments
            lastPaymentDate
          }
        }
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES
export const listClientCreditMovementsOperationsAPI = /* GraphQL */ `
  query ListSalesOperations(
    $filter: ModelSalesOperationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSalesOperations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        amountPaid
        id
        pendingToPay
        total
        termDaysToPay
        currentTotalPayments
        totalPayments
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES
export const listClientCreditMovementsOperationsToPayAPI = /* GraphQL */ `
  query ListSalesOperations($id: ID) {
    listSalesOperations(filter: { id: { eq: $id } }) {
      items {
        amountPaid
        id
        pendingToPay
        total
        termDaysToPay
        currentTotalPayments
        totalPayments
        client {
          id
          name
          lastname
          credit {
            credit_available
            outstanding_balance
            createdAt
          }
        }
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES
export const listCreditClientAccountReceivableViewAPI = /* GraphQL */ `
  query ListSalesOperations($includeBranchOffice: Boolean!) {
    listSalesOperations(filter: { salesOperationType: { eq: CREDIT } }) {
      items {
        lastDatePaid
        currentTotalPayments
        client {
          name
          lastname
        }
        status
        termDaysToPay
        pendingToPay
        totalPayments
        currentTotalPayments
        amountPaid
        createdAt
        id
        total
        branchOffice @include(if: $includeBranchOffice) {
          name
        }
      }
    }
  }
`;

//?CUSTOM QUERIES
export const listCreditClientAccountReceivableAPI = /* GraphQL */ `
  query ListSalesOperations(
    $clientID: ID
    $id: ID
    $numberOfPayment: Int
  ) {
    listSalesOperations(filter: {clientID: {eq: $clientID}, id: {eq: $id}}) {
      items {
        client {
          name
          lastname
        }
        status
        termDaysToPay
        salesOperationClientCreditMovements(filter: {numberOfPayment: {eq: $numberOfPayment + 1}}) {
          items {
            paymentDate
          }
        }
        createdAt
        id
        total
      }
    }
  }
`;

//?CUSTOM QUERIES
export const listNextClientPaymentDateAPI = /* GraphQL */ `
  query ListSalesOperationClientCreditMovements(
    $salesOperationID: ID
    $numberOfPayment: Int
  ) {
    listSalesOperationClientCreditMovements(
      filter: {
        salesOperationID: { eq: $salesOperationID }
        status: { eq: PENDING }
        and: { numberOfPayment: { eq: $numberOfPayment } }
      }
    ) {
      items {
        id
        paymentDate
        datePaid
        amountToPay
        pendingToPay
      }
    }
  }
`;

//?CUSTOM QUERIES
export const listPendingClientCreditMovementsToPayAPI = /* GraphQL */ `
  query ListSalesOperationClientCreditMovements(
    $salesOperationID: ID
    $numberOfPayment: Int
  ) {
    listSalesOperationClientCreditMovements(
      filter: {
        salesOperationID: { eq: $salesOperationID }
        status: { eq: PENDING }
        and: { numberOfPayment: { gt: $numberOfPayment } }
      }
    ) {
      items {
        pendingToPay
        id
        status
        numberOfPayment
        amountPaid
      }
    }
  }
`;

//? CUSTOM QUERIES
export const listClientsIDNamesAPI = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        lastname
        id
      }
      nextToken
    }
  }
`;

//? CUSTOM QUERIES
export const listClientsWithoutCreditTableDetailsAPI = /* GraphQL */ `
  query ListCreditRequests {
    listCreditRequests(filter: { creditRequestStatus: { ne: REJECTED } }) {
      items {
        id
        creditRequestAmount
        creditRequestReason
        creditRequestStatus
        client {
          id
          name
          lastname
          phone
          email
          hasCredit
          address
          settlement
          state
          postal_code
          city
          createdAt
          credit {
            id
            credit_available
            outstanding_balance
            totalCredit
            createdAt
          }
        }
      }
    }
  }
`;

//? CUSTOM QUERIES
export const listClientCreditRequestDetailsAPI = /* GraphQL */ `
  query ListCreditRequests($clientID: ID) {
    listCreditRequests(filter: { clientID: { eq: $clientID } }) {
      items {
        id
        creditRequestAmount
        creditRequestReason
        creditRequestStatus
        client {
          id
          name
          lastname
          phone
          email
          hasCredit
          address
          settlement
          state
          postal_code
          city
          createdAt
          credit {
            id
            credit_available
            outstanding_balance
            totalCredit
            createdAt
          }
        }
      }
    }
  }
`;

//? CUSTOM QUERIES
export const listMainIncomeInventoriesViewAPI = /* GraphQL */ `
  query ListIncomeInventories($branchOfficeID: ID) {
    listIncomeInventories(filter: { branchOfficeID: { eq: $branchOfficeID } }) {
      items {
        id
        date
      }
      nextToken
    }
  }
`;

//? CUSTOM QUERIES
export const listMainOutcomesInventoryViewAPI = /* GraphQL */ `
  query ListOutcomeInventories(
    $filter: ModelOutcomeInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOutcomeInventories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        date
        branchOffice {
          name
        }
      }
      nextToken
    }
  }
`;

//? CUSTOM QUERIES
export const listInventoriesIDsAPI = /* GraphQL */ `
  query ListInventories(
    $filter: ModelInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInventories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
      }
      nextToken
    }
  }
`;

//? CUSTOM QUERIES
export const listMainInventoryIDAPI = /* GraphQL */ `
  query ListInventories {
    listInventories(filter: { isMain: { eq: true } }) {
      items {
        id
      }
      nextToken
    }
  }
`;

//? CUSTOM QUERIES
export const listProductsIDsPricesAPI = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        price
        productProviderID
      }
      nextToken
    }
  }
`;

//? CUSTOM QUERIES(GET)
export const getIncomeInventoryProductDetailsAPI = /* GraphQL */ `
  query GetIncomeInventory($id: ID!) {
    getIncomeInventory(id: $id) {
      date
      comments
      id
      userInfo {
        name
      }
      provider {
        enterprise_name
      }
      incomeInventoryProductQuantities {
        items {
          inventoryProducts {
            items {
              inventoryProduct {
                product {
                  id
                  name
                  class_id
                  category_id
                  subcategory_id
                }
                customPrice
                productProviderID
              }
            }
          }
          incomeQuantity
        }
      }
    }
  }
`;

//? CUSTOM QUERIES(GET)
export const getOutcomeInventoryProductDetailsAPI = /* GraphQL */ `
  query GetOutcomeInventory($id: ID!) {
    getOutcomeInventory(id: $id) {
      date
      id
      comments
      branchOffice {
        name
      }
      userInfo {
        name
      }
      outcomeInventoryProductQuantities {
        items {
          outcomeQuantity
          inventoryProducts {
            items {
              inventoryProduct {
                customPrice
                productProviderID
                product {
                  id
                  name
                  class_id
                  subcategory_id
                  category_id
                }
              }
            }
          }
        }
      }
    }
  }
`;

//? CUSTOM QUERIES
export const listIncomeInventoryOperationsAPI = /* GraphQL */ `
  query ListInventoryOperations {
    listInventoryOperations(filter: { operationType: { eq: INCOME } }) {
      items {
        operationType
        incomeInventory {
          id
          date
        }
      }
      nextToken
    }
  }
`;

//? CUSTOM QUERIES
export const listOutcomeInventoryOperationsAPI = /* GraphQL */ `
  query ListInventoryOperations {
    listInventoryOperations(filter: { operationType: { eq: OUTCOME } }) {
      items {
        operationType
        outcomeInventory {
          id
          date
        }
      }
      nextToken
    }
  }
`;

//?CUSTOM QUERIES
export const listAvailableProductsByProviderIDAPI = /* GraphQL */ `
  query ListInventoryProducts($productProviderID: ID, $inventoryID: ID) {
    listInventoryProducts(
      filter: {
        productProviderID: { eq: $productProviderID }
        quantity: { gt: 0 }
        inventoryID: { eq: $inventoryID }
      }
    ) {
      items {
        product {
          category_id
          subcategory_id
          class_id
          id
          name
          price
          productProviderID
        }
        id
        quantity
      }
    }
  }
`;

// //?CUSTOM QUERIES
export const listAvailableProductsAPI = /* GraphQL */ `
  query ListInventoryProducts($inventoryID: ID, $branchInventoryID: ID) {
    listInventoryProducts(
      filter: { quantity: { gt: 0 }, inventoryID: { eq: $inventoryID } }
    ) {
      items {
        product {
          category_id
          subcategory_id
          class_id
          id
          name
          price
          productProviderID
          inventoryProduct(
            filter: { inventoryID: { eq: $branchInventoryID } }
          ) {
            items {
              id
              quantity
            }
          }
        }
        quantity
      }
    }
  }
`;

export const listDiscountInventoryProductsAPI = /* GraphQL */ `
  query ListDiscountInventoryProducts($inventoryProductId: ID) {
    listDiscountInventoryProducts(
      filter: { inventoryProductId: { eq: $inventoryProductId } }
    ) {
      items {
        discounts {
          discount
        }
      }
    }
  }
`;
