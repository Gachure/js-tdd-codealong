// src/__tests__/utils.test.js
import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    // Arrange
    const birthYear = 1984;
    const currentYear = new Date().getFullYear();
    const expectedAge = currentYear - birthYear;

    // Act
    const age = currentAgeForBirthYear(birthYear);

    // Assert
    expect(age).toBe(expectedAge);
  });
});
