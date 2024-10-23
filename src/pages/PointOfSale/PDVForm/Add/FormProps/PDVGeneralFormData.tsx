import { IPDVGeneralFormData } from "./PDVGeneralFormData.d";
export const PDVGeneralFormData: IPDVGeneralFormData = {
  isClientRegistered: "no",
  paymentType: ["cash"],
  orderManagement: {
    clientName: "",
    selectDiscount: "",
    termToPay: 0,
  },
  isSecondButton: false,
};

export const initialOrderManagement = {
  clientName: "",
  selectDiscount: "",
  termToPay: 0,
};
