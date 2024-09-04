export const calculateAverage = (numbers) => {
  if (numbers.length === 0) return NaN;
  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
};
