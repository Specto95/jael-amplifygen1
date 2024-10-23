export interface IAddClientInputAPI {
  name: string;
  second_name: string | null;
  lastname: string;
  second_lastname: string | null;
  phone: string;
  fixed_phone: string | null;
  email: string | null;
  birthday: string | null;
  RFC: string | null;
  address: string | null;
  settlement: string | null;
  postal_code: string | null;
  state: string | null;
  city: string | null;
  branchOfficeID: string;
  hasCredit: boolean;
  hasCreditRequest: boolean;
}
