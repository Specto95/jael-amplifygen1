export function toTitleCase(str: string) {
  return str.toLowerCase().replace(/\b(\w)/g, (s) => s.toUpperCase());
}

export function formatNumber(num: number): string {
  let paddedNum = num.toString().padStart(4, "0");
  return paddedNum.substring(paddedNum.length - 4);
}
interface IParentObj {
  [key: string]: any;
}

export function convertDateFormat(dateString: string): string {
  const parts = dateString.split("/");
  return parts[0] + "-" + parts[1] + "-" + parts[2];
}

export function formatObject({
  id,
  name,
  subcategory_name,
}: {
  id: number;
  name?: string;
  subcategory_name?: string;
}) {
  const paddedId = String(id).padStart(4, "0");
  const objName = name || subcategory_name || "";
  return `${paddedId} - ${objName}`;
}

export function flatNestedObject(
  parentObj: IParentObj,
  nestedObjName: string
): IParentObj {
  const nestedObj = parentObj[nestedObjName];
  const { [nestedObjName]: _, ...rest } = parentObj;
  return { ...rest, ...nestedObj };
}

export function formatKey(key: string | number): number | string {
  if (typeof key === "number") return key;
  const numericRegex = /[0-9]+/g;
  const matches = key.match(numericRegex);
  if (matches && matches.length > 0) {
    const concatenatedDigits = matches.join("");
    return concatenatedDigits.substring(0, 4);
  } else {
    return "";
  }
}

export function isValidCustomId(s: string): boolean {
  const regex =
    /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[1-5][a-fA-F0-9]{3}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/;
  return regex.test(s);
}

export function convertStringToNumber(input?: string): number {
  const cleanedString = input ? input.replace(/[$,]/g, "") : "0"; // Remove $ and ,
  const numberValue = parseFloat(cleanedString);
  return parseFloat(numberValue.toFixed(2));
}

export function formatMoneyValue(numberValue: number): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return formatter.format(numberValue);
}

export function isValidMoneyFormat(input: string): boolean {
  const moneyRegex = /^(\d{1,3}(,\d{3})*(\.\d{2})?)$/;

  return moneyRegex.test(input);
}
