//FUNCTION THAT RETURNS THE FIRST TWO LETTERS OF A FULL NAME CONSIDERING THE FULL NAME CAN HAVE MORE THAN TWO NAMES
export const getTwoLettersName = (fullName: string) => {
  const names = fullName.split(" ");
  if (fullName.length <= 4) return (names[0].charAt(0) + names[0].charAt(1)).toUpperCase();
  const firstName = names[0];
  const lastName = names[names.length - 2];
  const initials = firstName.charAt(0) + lastName.charAt(0);
  return initials.toUpperCase();
};
