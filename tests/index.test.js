import { describe, test, it, expect } from "vitest";
import { getAge, getAgeGroup } from "../src/index";
describe("age calculator", () => {
  it("Someone born in 1972 is equal a number substracted from the current year. ", () => {
    // AAA
    //Arrange
    const date = new Date();
    const currentYear = date.getFullYear();
    //Act
    const result = getAge(1972, currentYear);
    //Assert
    expect(result).toBe(52);
  });
});
