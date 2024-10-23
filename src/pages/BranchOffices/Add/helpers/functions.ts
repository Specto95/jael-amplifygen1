export function parseStringToInt(input: string): number {
  const stringWithoutUnderscore = input.replace("_", "");
  const parsedInt = parseInt(stringWithoutUnderscore, 10);

  if (isNaN(parsedInt)) {
    throw new Error("Invalid input. Could not parse to an integer.");
  }

  return parsedInt;
}
