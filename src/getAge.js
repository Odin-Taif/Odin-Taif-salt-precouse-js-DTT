export function getAge(birthYear) {
  const currentYear = new Date().getFullYear();
  if (birthYear <= 1900) return "You do not exist any more!";
  return currentYear - birthYear;
}
