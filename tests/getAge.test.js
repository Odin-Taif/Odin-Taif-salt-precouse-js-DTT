import { describe, it, expect } from "vitest";
import { getAge } from "../src/getAge";

describe("getAge", () => {
  it("should return You do not exist! if the birthYear is less than 1900", () => {
    expect(getAge(1900)).toBe("You do not exist any more!");
  });
  it("should return You do not exist! if the birthYear is greater than 1900", () => {
    expect(getAge(2000)).toBe(24);
  });
  //   it("should return Can not accept a negative value if the birthYear is a negative value", () => {
  //     expect(getAge(-2)).toBe(
  //       "Can not accept a negative value. Try a postive value!"
  //     );
  //   });
});
