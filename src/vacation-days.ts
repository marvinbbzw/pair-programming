export function calculateProRataVacationDays(employment: {
  startDate: Date;
  untilDate: Date;
  percentage: number;
  vacationDays: number;
}): number {
  const { startDate, untilDate, percentage, vacationDays } = employment;

  const year = startDate.getFullYear();
  const isLeapYear = (year: number) =>
    (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  const daysInYear = isLeapYear(year) ? 366 : 365;

  const fullYearStart = new Date(year, 0, 1);
  const fullYearEnd = new Date(year, 11, 31);

  if (startDate.getTime() === fullYearStart.getTime() &&
      untilDate.getTime() === fullYearEnd.getTime() &&
      percentage === 1.0) {
    return vacationDays;
  }

  const msPerDay = 1000 * 60 * 60 * 24;
  const workedDays = (untilDate.getTime() - startDate.getTime()) / msPerDay + 1;

  return Math.round(vacationDays * (workedDays / daysInYear) * percentage * 100) / 100;
}