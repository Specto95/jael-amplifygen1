import { IListCashTableInfoAPI } from "../api/interfaces/IListMainCashTableIncomes";

export function formatDateToSpanish(dateKey: string): string {
  const monthsInSpanish = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const daysInMonth = [
    31,
    isLeapYear(parseInt(dateKey.split("-")[0])) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  const [year, month] = dateKey.split("-");
  const monthIndex = parseInt(month) - 1;
  const monthName = monthsInSpanish[monthIndex];

  const lastDay = daysInMonth[monthIndex];

  return `01 ${monthName} - ${lastDay} ${monthName}`;
}

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function isSameOrLaterMonth(
  dateStrs: IListCashTableInfoAPI[]
): boolean {
  const currentDate = new Date();

  for (let obj of dateStrs) {
    const [year, month] = obj.date.split("-").map(Number);

    const inputDate = new Date(year, month - 1, 1); // Subtract 1 from the month to account for 0-indexing

    if (
      inputDate.getFullYear() < currentDate.getFullYear() ||
      (inputDate.getFullYear() === currentDate.getFullYear() &&
        inputDate.getMonth() < currentDate.getMonth())
    ) {
      return false;
    }
  }

  return true;
}
