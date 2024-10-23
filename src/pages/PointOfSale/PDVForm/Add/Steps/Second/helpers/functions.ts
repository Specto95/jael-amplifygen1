export const validateCreditAvailable = (
  credit_available: number,
  totalToPay: number,
  totalWithDiscount?: number
) => {
  return credit_available >= (totalToPay || totalWithDiscount!);
};
