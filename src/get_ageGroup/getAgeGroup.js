export function getAgeGroup(inputAge) {
  return inputAge < 0
    ? "Not a valid input"
    : inputAge <= 3
    ? "toddler"
    : inputAge <= 12
    ? "kid"
    : inputAge <= 19
    ? "teenager"
    : inputAge <= 39
    ? "adult"
    : "old";
}
