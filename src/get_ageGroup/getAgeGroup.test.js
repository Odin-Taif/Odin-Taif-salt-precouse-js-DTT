import { describe, it, expect } from "vitest";
import { getAgeGroup } from "./getAgeGroup";

describe("age classifier", () => {
  it("negative numbers should return not a valid input!", () => {
    expect(getAgeGroup(-2)).toBe("Not a valid input");
  });

  it("0-3 years old should be a toddler", () => {
    expect(getAgeGroup(0)).toBe("toddler");
  });
  it("0-3 years old should be a toddler", () => {
    expect(getAgeGroup(3)).toBe("toddler");
  });
  it("4-12 years old should be a kid", () => {
    expect(getAgeGroup(12)).toBe("kid");
  });
  it("13-19 years old should be a teenager", () => {
    expect(getAgeGroup(19)).toBe("teenager");
  });
  it("20-39 years old should be a adult", () => {
    expect(getAgeGroup(39)).toBe("adult");
  });
  it("above 39 years old ... you are just old", () => {
    expect(getAgeGroup(50)).toBe("old");
  });
});
