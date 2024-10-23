export function generateRandomPassword(length: number): string {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()";

  const allCharacters =
    uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

  let password = "";
  while (password.length < length) {
    const randomIndex = Math.floor(
      (crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295) *
        allCharacters.length
    );
    password += allCharacters[randomIndex];
  }

  return password;
}
