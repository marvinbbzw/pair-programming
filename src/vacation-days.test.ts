import { calculateProRataVacationDays } from "./vacation-days";

describe("calculateProRataVacationDays", () => {
  test("berechnet korrekt pro-rata Ferientage", () => {
    // Arrange
    const employment = {
      startDate: new Date("2025-01-01"),
      untilDate: new Date("2025-12-31"),
      percentage: 1.0,
      vacationDays: 25,
    };

    // Act
    const result = calculateProRataVacationDays(employment);

    // Assert
    expect(result).toBe(25);
  });
});