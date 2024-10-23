export function commaSeparatorFloat(num: number | string): string | number {
  if (num === 0) return num;
  const parsedNum = typeof num === "string" ? parseFloat(num) : num;

  if (isNaN(parsedNum)) {
    throw new Error("Invalid number");
  }
  return parsedNum.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function commaSeparator(num: number | string): string | number {
  if (num === 0) return num;
  return num.toString()!.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
