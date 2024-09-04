import { describe, it, expect } from "vitest";
import { getAgeGroup } from "./getAgeGroup";

describe("age classifier", () => {
  it("0-3 years old should be a toddler", () => {
    expect(getAgeGroup(0)).toBe("toddler");
  });
  it("4-12 years old should be a kid");
  it("13-19 years old should be a teenager");
  it("20-39 years old should be a adult");
  it("above 39 years old ... you are just old");
});
