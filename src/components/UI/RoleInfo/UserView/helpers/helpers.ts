export function getInitials(name: string): string {
  const nameArray = name.trim().split(/\s+/);
  const initials = nameArray.map((word) => word[0].toUpperCase()).join("");

  return initials;
}
