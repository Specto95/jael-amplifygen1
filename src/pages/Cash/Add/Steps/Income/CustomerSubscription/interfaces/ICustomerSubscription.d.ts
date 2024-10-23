import { IGetCustomerSubscriptionDetailsByIDAPI } from "../../../One/api/interfaces/IGetCustomerSubscriptionDetailsByID";

export interface ICustomerSubscriptionProps {
  selectedClient: IGetCustomerSubscriptionDetailsByIDAPI;
  setSelectedClient: React.Dispatch<
    React.SetStateAction<IGetCustomerSubscriptionDetailsByIDAPI>
  >;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}
