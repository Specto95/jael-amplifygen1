export function formatSpanishDate(): string {
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return currentDate.toLocaleDateString("es-ES", options);
}

export const spanishMonth = (dateString: string): string => {
  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  const date = new Date(dateString);
  const monthIndex = date.getMonth();

  return `${months[monthIndex]}`;
};

export function formatSpanishDatePassed(date: string): string {
  const currentDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return currentDate.toLocaleDateString("es-ES", options);
}

export function getCurrentDate(): string {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

export function formatDDMMYYYYDate(dateString: string) {
  const date = new Date(dateString);
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = String(date.getUTCFullYear());

  return `${day}-${month}-${year}`;
}

export function formatYYYYMMDDDate(dateString: string) {
  const date = new Date(dateString);
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = String(date.getUTCFullYear());

  return `${year}-${month}-${day}`;
}
