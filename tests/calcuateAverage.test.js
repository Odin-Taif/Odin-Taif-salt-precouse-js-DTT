import { describe, it, expect } from "vitest";
import { calculateAverage } from "../src/calculateAverage";

// calculate avarage of an array test
describe("calculateAverage", () => {
  it("should return NaN if given an empty array", () => {
    expect(calculateAverage([])).toBe(NaN);
  });
  it("should return single number if one element array is passed", () => {
    expect(calculateAverage([1])).toBe(1);
  });
  it("should return single number if one element array is passed", () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
  });
  it("should return single number if one element array is passed", () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });
});
