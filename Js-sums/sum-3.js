// Implement a program that determines whether a given year is a leap year or not.

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
  } else {
      return false;
  }
}
console.log(isLeapYear(2036));