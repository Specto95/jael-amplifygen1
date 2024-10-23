import { ITermDaysToPay } from "@/interfaces/PDV/PDV";
import { IListProductsPDVAPI } from "../Steps/First/api/interfaces/IUseListProductsPDV";
import { SalesOperationTermDaysToPay } from "@/utils/globalObjs/sideMenuSections/PointOfSale/PointOfSaleObjs";

export const handleTotalToPay = (
  data: readonly IListProductsPDVAPI[] | undefined
) => {
  let total = 0;
  data?.map((item) => {
    total += item.price! * item.quantity;
  });
  return total;
};

export const handleTotalToPayGeneral = (
  data: readonly IListProductsPDVAPI[] | undefined
) => {
  let total = 0;
  if (data?.some((item) => item.discountPercentage! > 0)) {
    console.log("si hay uno");
    data?.forEach((item) => {
      if (item.discountPercentage! > 0) {
        const normalTotal = item.price! * item.quantity;
        const discountedAmount = (item.discountPercentage! / 100) * normalTotal;
        total += normalTotal - discountedAmount;
      } else {
        total += item.price! * item.quantity;
      }
    });
  } else {
    return total;
  }

  return total;
};

export const handleTotalDiscount = (
  data: readonly IListProductsPDVAPI[] | undefined,
  discount: number
) => {
  let total = 0;
  data?.map((item) => {
    if (item.hasDiscount) {
      total += item.price * item.quantity;
    }
  });
  return total - discount;
};

export const handleTotalCommission = (
  data: readonly IListProductsPDVAPI[] | undefined,
  commission: number
) => {
  let total = 0;
  data?.forEach((item) => {
    if (item.hasCommission) {
      if (item.hasDiscount) {
        total +=
          item.price *
          item.quantity *
          commission *
          ((100 - item.discountPercentage!) / 100);
      } else {
        total += item.price * item.quantity * commission;
      }
    }
  });
  return total / 100;
};

export const handleWithDiscount = (
  cb: Function,
  value: readonly IListProductsPDVAPI[] | undefined,
  selectedDiscount: number
) => {
  return cb(value) - cb(value) / selectedDiscount;
};

export function calculatePaymentDates(
  startDate: string,
  monthsToPay: number,
  termDaysToPay: ITermDaysToPay["termDaysToPay"]
): string[] {
  const paymentDates: string[] = [];
  let currentDate = new Date(startDate);

  let numberOfPayments: number;

  if (termDaysToPay === SalesOperationTermDaysToPay.BIWEEKLY) {
    numberOfPayments = monthsToPay * 2;
  } else if (termDaysToPay === SalesOperationTermDaysToPay.MONTHLY) {
    numberOfPayments = monthsToPay;
  } else {
    throw new Error("Invalid termDaysToPay value");
  }

  for (let i = 0; i < numberOfPayments; i++) {
    if (termDaysToPay === SalesOperationTermDaysToPay.BIWEEKLY) {
      currentDate.setDate(currentDate.getDate() + 15);
    } else if (termDaysToPay === SalesOperationTermDaysToPay.MONTHLY) {
      currentDate.setMonth(currentDate.getMonth() + 1);
    }

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    paymentDates.push(formattedDate);
  }

  return paymentDates;
}

export const getLastPaymentDate = (paymentDates: string[]) => {
  return paymentDates[paymentDates.length - 1];
};

export const toFixedTwo = (value: number) => {
  return Number(value.toFixed(2));
};
