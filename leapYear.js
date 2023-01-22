// a function for checking if the year is leapyear or not

function isLeapYear(year) {
  if (year % 400 === 0) return true; /// if year is divisible by 4 & 100
  else if (year % 100 === 0) return false; ///if year is only divisible by 100
  else if (year % 4 === 0)
    return true; /// if year is divisible by 4 but not divisible by 100
  else return false;
}

// sample input

console.log(isLeapYear(2041));
console.log(isLeapYear(2004));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
